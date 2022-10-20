import { NextApiHandler } from 'next';

const handler: NextApiHandler = (req, res) => {
    const { secret } = req.query;

    if (req.method !== 'POST') {
        res.status(405);
        res.end('405 Method Not Allowed');
        return;
    }

    if (
        secret !== process.env.NEXT_PREVIEW_TOKEN ||
        process.env.NODE_ENV !== 'development'
    ) {
        return res.status(401).json({ message: 'Invalid token' });
    }

    const { urls } = req.body;

    for (const url of urls) {
        res.revalidate(url);
    }

    res.end('Revalidation done');
};

export default handler;
