import React from 'react';
import { Inter } from 'next/font/google';
import StyledComponentsRegistry from '../config/AntdRegistry';
import '../styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Test Mobile',
  description: 'Test Mobile',
};

const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <html lang="en">
  <head>
    <link rel="manifest" href="/manifest.webmanifest"/>
    <link rel="apple-touch-icon" href="/icon-256x256.png"></link>
    <meta name="theme-color" content="#fff"/>
    <title>{metadata.title}</title>
  </head>

  <body className={inter.className}>
    <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
  </body>
  </html>
);

export default RootLayout;
