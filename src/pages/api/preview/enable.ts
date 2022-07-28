import { NextApiHandler } from 'next';

const handler: NextApiHandler = (req, res) => {
    const { secret } = req.query;

    if (secret !== process.env.NEXT_PREVIEW_TOKEN) {
        return res.status(401).json({ message: 'Invalid token' });
    }

    res.setPreviewData(
        {},
        {
            maxAge: 15 * 60,
        }
    );
    res.end('Preview mode enabled');
};

export default handler;
