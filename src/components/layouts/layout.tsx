import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { Session } from 'next-auth';
import { SessionProvider } from 'next-auth/react';
import React from 'react';

const Layout: React.FC<{
    children: React.ReactNode;
    session: Session | null | undefined;
}> = ({ children, session }) => {
    return (
        <SessionProvider session={session}>
            <Header />
            {children}
            <Footer />
        </SessionProvider>
    );
};

export const getLayout = (
    page: React.ReactNode,
    session: Session | null | undefined
) => <Layout session={session}>{page}</Layout>;

export default Layout;
