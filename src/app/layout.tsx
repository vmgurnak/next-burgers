import type { Metadata } from 'next';
// import { Inter } from 'next/font/google';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

import './globals.css';

// const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Burgers | Home',
  description: 'App burgers',
};

type LayotProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: LayotProps) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
