import appData from '@/data/appData';
import Head from 'next/head';

interface SEOProps {
    title?: string;
    desc?: string;
    img?: string;
}

const SEO: React.FC<SEOProps> = ({ title, desc, img }) => {
    return (
        <Head>
            <meta name='description' content={desc ?? appData.description} />

            <meta
                property='og:description'
                content={desc ?? appData.description}
            />
            <meta property='og:title' content={title ?? appData.name} />
            <meta
                name='twitter:description'
                content={desc ?? appData.description}
            />
            <meta
                name='twitter:title'
                content={title ?? `${appData.name} - ${appData.seoTitle}`}
            />

            <meta property='og:image' content={img ?? appData.ogImg} />

            <title>{title ?? `${appData.name} - ${appData.seoTitle}`}</title>
        </Head>
    );
};

export default SEO;
