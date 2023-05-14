'use client';
import Navigation from '@/components/navigation';
import GlobalStyle from '@/styles/global';
import { theme } from '@/styles/theme';
import { Roboto } from 'next/font/google';
import { usePathname } from 'next/navigation';
import React, { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';
import StyledComponentsRegistry from './registry';

const roboto = Roboto({
  subsets: ['latin'],
  display: 'swap',
  weight: ['100', '400', '500'],
});

export interface RootLayoutTypes {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutTypes) {
  const publicRoute = ['/', '/login', 'recoverPassword/'];
  const pathname = usePathname();

  function verifyRouter() {
    const currentRoute = pathname;
    return publicRoute.includes(currentRoute);
  }

  return (
    <html lang="pt-BR" className={roboto.className}>
      <StyledComponentsRegistry>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <body>
            {verifyRouter() ? (
              <>{children}</>
            ) : (
              <Navigation>{children}</Navigation>
            )}
          </body>
        </ThemeProvider>
      </StyledComponentsRegistry>
    </html>
  );
}
