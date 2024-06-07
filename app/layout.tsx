import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Head from 'next/head';

import { headers } from 'next/headers'
import { cookieToInitialState } from 'wagmi'
import { config } from './config'
import Web3ModalProvider from './context'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shubex",
  description: "Test project",
};

export default function RootLayout({
  children, pageTitle
}: Readonly<{
  children: React.ReactNode;
  pageTitle: string;
}>) {
  const initialState = cookieToInitialState(config, headers().get('cookie'))
  return (
    <html lang="en">
      <Head>
        <title>{pageTitle}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      
      <body className={inter.className}><Web3ModalProvider initialState={initialState}>{children}</Web3ModalProvider></body>
    </html>
  );
}
