import React from 'react';
import { Lexend, Nunito, B612, Benne, Nunito_Sans, Figtree } from 'next/font/google';

const lexend = Lexend({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-lexend',
});

const nunito = Nunito({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-nunito',
});

const b612 = B612({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-b612',
  weight: ['400', '700'],
});

const benne = Benne({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-benne',
  weight: ['400'],
});

const nunitoSans = Nunito_Sans({
  weight: ['400', '500', '600', '800'],
  subsets: ['latin'],
});

const figtree = Figtree({
  weight: ['400', '500', '600'],
  subsets: ['latin'],
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <main
        className={`${lexend.variable} ${nunito.variable} ${b612.variable} ${benne.variable} ${nunitoSans.className} ${figtree.className}`}
      >
        {children}
      </main>
    </>
  );
}
