import AppHead from '@/components/AppHead';
import { getLayout } from '@/components/layouts/layout';
import Loading from '@/components/loading';
import SEO from '@/components/SEO';
import appData from '@/data/appData';
import '@/styles/globals.css';
import { NextComponentType, NextPageContext } from 'next';
import type { AppProps, NextWebVitalsMetric } from 'next/app';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

interface Props extends AppProps {
    Component: NextComponentType<NextPageContext, any, {}> & {
        getLayout?: (page: React.ReactNode) => JSX.Element | null;
        pageTitle?: string;
        pageDesc?: string;
        pageImg?: string;
    };
}

const App: React.FC<Props> = ({ Component, pageProps }) => {
    const getFinalLayout = Component.getLayout || getLayout;
    const router = useRouter();
    const [state, setState] = useState({
        isRouteChanging: false,
        loadingKey: 0,
    });

    useEffect(() => {
        const handleRouteChangeStart = () => {
            setState(prevState => ({
                ...prevState,
                isRouteChanging: true,
                loadingKey: prevState.loadingKey ^ 1,
            }));
        };

        const handleRouteChangeEnd = () => {
            setState(prevState => ({
                ...prevState,
                isRouteChanging: false,
            }));
        };

        router.events.on('routeChangeStart', handleRouteChangeStart);
        router.events.on('routeChangeComplete', handleRouteChangeEnd);
        router.events.on('routeChangeError', handleRouteChangeEnd);

        return () => {
            router.events.off('routeChangeStart', handleRouteChangeStart);
            router.events.off('routeChangeComplete', handleRouteChangeEnd);
            router.events.off('routeChangeError', handleRouteChangeEnd);
        };
    }, [router.events]);

    return (
        <>
            <Loading {...state} />
            <AppHead />
            <SEO
                title={
                    pageProps.pageTitle ?? Component.pageTitle ?? appData.name
                }
                desc={
                    pageProps.pageDesc ??
                    Component.pageDesc ??
                    appData.description
                }
                img={pageProps.pageImg ?? Component.pageImg ?? appData.ogImg}
            />
            {getFinalLayout(<Component {...pageProps} />)}
        </>
    );
};

export const reportWebVitals = (metric: NextWebVitalsMetric) => {};

export default App;
