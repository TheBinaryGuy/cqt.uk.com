/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl:
        `https://${
            process.env.NEXT_PUBLIC_USE_VERCEL_URL
                ? process.env.VERCEL_URL
                : process.env.NEXT_PUBLIC_DOMAIN
        }` || 'https://www.cqt.uk.com',
    generateRobotsTxt: true,
};
