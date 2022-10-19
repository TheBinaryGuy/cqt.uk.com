/** @type {import('next').NextConfig} */
const nextConfig = {
    swcMinify: true,
    images: {
        domains: [
            'dummyimage.com',
            process.env.NEXT_PUBLIC_DOMAIN ?? 'cqt.uk.com',
            process.env.NEXT_PUBLIC_VERCEL_URL ?? 'cqt.uk.com',
        ],
        formats: ['image/avif', 'image/webp'],
    },
    experimental: {
        newNextLinkBehavior: true,
        nextScriptWorkers: true,
    },
    reactStrictMode: true,
};

module.exports = nextConfig;
