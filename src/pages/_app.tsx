import AppHead from '@/components/AppHead';
import GoogleAnalytics from '@/components/GoogleAnalytics';
import { getLayout } from '@/components/layouts/layout';
import Loading from '@/components/loading';
import SEO from '@/components/SEO';
import appData from '@/data/appData';
import '@/styles/globals.css';
import { PortableTextComponentsProvider } from '@portabletext/react';
import { NextComponentType, NextPageContext } from 'next';
import { Session } from 'next-auth';
import type { AppProps, NextWebVitalsMetric } from 'next/app';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

type SEOProps = {
    pageTitle?: string;
    pageDesc?: string;
    pageImg?: string;
    session?: Session | null;
};

interface Props extends AppProps<SEOProps> {
    Component: NextComponentType<NextPageContext, any, SEOProps> & {
        getLayout?: (page: React.ReactNode) => JSX.Element | null;
    } & SEOProps;
}

const App: React.FC<Props> = ({
    Component,
    pageProps: { session, ...pageProps },
}) => {
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
        <PortableTextComponentsProvider
            components={{
                types: {
                    break: () => <hr />,
                },
            }}>
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
            {getFinalLayout(<Component {...pageProps} />, session)}
            <GoogleAnalytics
                measurementId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}
            />
        </PortableTextComponentsProvider>
    );
};

export const reportWebVitals = (metric: NextWebVitalsMetric) => {};

export default App;
