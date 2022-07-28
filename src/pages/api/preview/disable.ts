import { NextApiHandler } from 'next';

const handler: NextApiHandler = (req, res) => {
    res.clearPreviewData();
    res.end('Preview mode disabled');
};

export default handler;
