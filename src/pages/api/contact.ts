import appData from '@/data/appData';
import { contactSchema } from '@/schemas/contact';
import { NextApiHandler } from 'next';
import nodemailer from 'nodemailer';

const handler: NextApiHandler = async (req, res) => {
    if (req.method !== 'POST') {
        res.status(405).end('405 Method Not Allowed');
        return;
    }

    const result = contactSchema.safeParse(req.body);
    if (!result.success) {
        res.status(400).end();
        return;
    }

    const { name, email, phone, subject, message } = result.data;

    let transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: 465,
        secure: true,
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
        },
    });

    try {
        await transporter.sendMail({
            from: `"${appData.name}" <${process.env.SMTP_USER}>`,
            to: process.env.SMTP_USER,
            cc: email,
            subject: subject,
            text: `From:\n${email}\n\nName:\n${name}\n\nPhone:\n${phone}\n\nMessage:\n${message}`,
        });

        res.status(200).end();
    } catch {
        res.status(500).end();
    }

    return;
};

export default handler;
