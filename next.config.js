/** @type {import('next').NextConfig} */
const nextConfig = {
    swcMinify: true,
    images: {
        domains: ['www.cqt.uk.com', 'cqt.uk.com'],
        formats: ['image/avif', 'image/webp'],
    },
    // webpack(config, _) {
    //     config.module.rules.push({
    //         test: /\.svg$/i,
    //         issuer: /\.[jt]sx?$/,
    //         use: ['@svgr/webpack'],
    //     });
    //     return config;
    // },
    experimental: {
        images: {
            allowFutureImage: true,
        },
        newNextLinkBehavior: true,
    },
    reactStrictMode: true,
};

module.exports = nextConfig;
