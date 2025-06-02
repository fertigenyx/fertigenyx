import '@/styles/globals.css';
import '@/styles/calendar.css';
import Head from 'next/head';
import ThemeProvider from '@/styles/theme-provider';
import RootLayout from '@/components/Layout';
import { Geist, Geist_Mono } from 'next/font/google';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});
function MyApp({ Component, pageProps }) {
  return (
    <RootLayout>
      <Head>
        <meta
          name='viewport'
          content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover'
        />
        <meta name='format-detection' content='telephone=no' />
        <meta httpEquiv='content-language' content='en-gb' />
        <meta
          name='robots'
          content='follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:standard'
        />
      </Head>
      <ThemeProvider attribute='class' defaultTheme='light'>
        <div
          className={`${geistSans.variable} ${geistMono.variable} min-h-screen font-[family-name:var(--font-geist-sans)] selection:bg-gg-500 selection:text-white dark:bg-gray-800`}
        >
          <Component {...pageProps} />
        </div>
      </ThemeProvider>
    </RootLayout>
  );
}

export default MyApp;
