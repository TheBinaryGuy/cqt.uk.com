import Script from 'next/script';

const GoogleAnalytics = ({ measurementId }: { measurementId?: string }) => {
    if (!measurementId) {
        return null;
    }

    return (
        <>
            {/* Global site tag (gtag.js) - Google Analytics */}
            <Script
                async
                src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
                strategy='worker'
            />
            <Script id='google-analytics' strategy='worker'>
                {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){window.dataLayer.push(arguments);}
                    gtag('js', new Date());

                    gtag('config', '${measurementId}');
                `}
            </Script>
        </>
    );
};

export default GoogleAnalytics;
