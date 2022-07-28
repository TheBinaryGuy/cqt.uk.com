/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl:
        `https://${process.env.NEXT_PUBLIC_DOMAIN}` || 'https://www.cqt.uk.com',
    generateRobotsTxt: true,
};
