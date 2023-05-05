'use client';
import Layout from '@/components/layout';
import GlobalStyle from '@/styles/global';
import { ReactNode } from 'react';

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <GlobalStyle />
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
