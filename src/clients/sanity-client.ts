import { createClient } from 'next-sanity';

export const client = createClient({
    projectId: '9hda8x6a',
    dataset: 'production',
    apiVersion: '2022-10-19',
    useCdn: !!process.env.NODE_ENV,
});
