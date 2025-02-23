import React from 'react';
import '@/styles/globals.css';
import '@/styles/calendar.css';
import Head from 'next/head';
import ThemeProvider from '@/styles/theme-provider';
import RootLayout from '@/components/Layout';

function MyApp({ Component, pageProps }) {
  return (
    <RootLayout>
      <Head>
        <meta
          name='viewport'
          content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover'
        />
        <meta httpEquiv='content-language' content='en-gb' />
        <meta
          name='robots'
          content='follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:standard'
        />
      </Head>
      <ThemeProvider attribute='class' defaultTheme='light'>
        <div className='min-h-screen selection:bg-gg-500 selection:text-white dark:bg-gray-800'>
          <Component {...pageProps} />
        </div>
      </ThemeProvider>
    </RootLayout>
  );
}

export default MyApp;
