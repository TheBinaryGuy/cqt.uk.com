import appData from '@/data/appData';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';

const AppHead = () => {
    const { asPath } = useRouter();

    return (
        <Head>
            <meta
                name='viewport'
                content='minimum-scale=1, width=device-width, initial-scale=1, shrink-to-fit=no'
            />

            <meta charSet='utf-8' />
            <meta httpEquiv='x-ua-compatible' content='ie=edge' />

            <meta httpEquiv='Content-Type' content='text/html; charset=utf-8' />

            <meta name='robots' content='index, follow' />

            <meta name='theme-color' content={appData.themeColor} />

            <meta name='author' content={appData.author} />
            <meta name='keywords' content={appData.name} />
            <meta property='og:type' content={appData.type} />
            <meta
                property='og:url'
                content={`https://${appData.rootUrl}${asPath}`}
            />

            <meta name='twitter:card' content='summary' />
            <meta name='twitter:creator' content={appData.author} />
        </Head>
    );
};

export default AppHead;
