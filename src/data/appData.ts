import pkg from 'package.json';

const rootUrl = process.env.NEXT_PUBLIC_DOMAIN;
const name = 'CQT';

const appData = {
    name,
    version: pkg.version,
    description: `${name} - ${pkg.description}`,
    pureDescription: pkg.description,
    seoTitle: 'Care Quality Training',
    author: pkg.author.name,
    type: 'Website',
    rootUrl,
    logo: `https://${rootUrl}/logo.png`,
    ogImg: `https://${rootUrl}/og-image.png`,
    globalCTA: 'https://cqt.simplybook.me/v2/#book/service/',
    themeColor: '#50A555',
};

export default appData;
