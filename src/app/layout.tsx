import type { ReactNode } from 'react';

import '@/app/global.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { I18nProvider } from './contexts/I18nContext';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="description"
          content="Home page of Handson, a social entreprise devoted on connecting technology and social issue"
        />
        <meta name="robots" content="index, follow" />
      </head>
      <body className="bg-[var(--color-brand-lightgrey)]">
        <I18nProvider>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </I18nProvider>
      </body>
    </html>
  );
}
