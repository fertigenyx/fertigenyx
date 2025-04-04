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
        {/* Google tag (gtag.js) */}
        <script async src='https://www.googletagmanager.com/gtag/js?id=AW-16974497189'></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-16974497189');
          `,
          }}
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
