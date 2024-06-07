import React, { ReactNode } from 'react';
import Head from 'next/head';
import Header from '@/components/layout/Header';

interface MainLayoutProps {
  children: ReactNode;
  pageTitle: string;
}

export default function MainLayout({ children, pageTitle }: MainLayoutProps) {
  return (
    <div className='relative bg-[#020710]'>
      <Head>
        <title>{pageTitle}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />
      <main>{children}</main>
    </div>
  );
};
