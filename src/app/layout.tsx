import type { Metadata } from 'next';
import { unstable_after as after } from 'next/server';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Demo Projects',
  description: 'Side projects for demo purposes',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  after(() => {
    console.log('test');
  });

  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
