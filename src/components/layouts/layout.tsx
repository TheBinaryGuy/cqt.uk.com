import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import React from 'react';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <>
        <Header />
        {children}
        <Footer />
    </>
);

export const getLayout = (page: React.ReactNode) => <Layout>{page}</Layout>;

export default Layout;
