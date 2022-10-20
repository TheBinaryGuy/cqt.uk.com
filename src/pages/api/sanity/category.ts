import { client } from '@/clients/sanity-client';
import { isValidSignature, SIGNATURE_HEADER_NAME } from '@sanity/webhook';
import groq from 'groq';
import { NextApiHandler, NextApiRequest } from 'next';

const sanitySecret = process.env.SANITY_WEBHOOK_SECRET ?? '';

const handler: NextApiHandler = async (req, res) => {
    if (req.method !== 'POST') {
        res.status(405);
        res.end('405 Method Not Allowed');
        return;
    }

    const signature = req.headers[SIGNATURE_HEADER_NAME];

    const body = await readBody(req); // Read the body into a string

    if (
        !signature ||
        typeof signature !== 'string' ||
        !isValidSignature(body, signature, sanitySecret)
    ) {
        res.status(401).json({ success: false, message: 'Invalid signature' });
        return;
    }

    const { _id: id } = JSON.parse(body) as { _id: string };

    res.revalidate('/');
    res.revalidate('/courses');

    const courses = await coursesToRevalidate(id);
    for (const {
        slug: { current: slug },
    } of courses) {
        res.revalidate(`/courses/${slug}`);
    }

    res.end('Revalidation done');
};

export default handler;

export const config = {
    api: {
        bodyParser: false,
    },
};

async function readBody(readable: NextApiRequest) {
    const chunks = [];
    for await (const chunk of readable) {
        chunks.push(typeof chunk === 'string' ? Buffer.from(chunk) : chunk);
    }
    return Buffer.concat(chunks).toString('utf8');
}

const coursesToRevalidate = async (id: string) =>
    client.fetch<{ slug: { current: string } }[]>(groq`
        *[_type == 'course' && main_category._ref match "${id}"] {
            slug {
                current
            },
        }
    `);
