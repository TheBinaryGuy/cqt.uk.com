import { Header } from '@/components/Header';
import React from 'react';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <>
        <Header />
        {children}
    </>
);

export const getLayout = (page: React.ReactNode) => <Layout>{page}</Layout>;

export default Layout;
