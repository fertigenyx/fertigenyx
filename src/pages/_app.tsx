import '@/styles/globals.css';
import '@/styles/calendar.css';
import Head from 'next/head';
import ThemeProvider from '@/styles/theme-provider';
import RootLayout from '@/components/Layout';
import { Geist, Geist_Mono } from 'next/font/google';
import Nav from '@/components/Header';
import Footer from '@/components/Footer';
import { usePathname } from 'next/navigation';
import FloatRequestCallBack from '@/components/FloatRequestCallBack';
import FloatPhone from '@/components/FloatPhone';
import FloatWhatsApp from '@/components/FloatWhatsapp';
import SalesIQ from '@/components/SalesIQ';
import { useMemo } from 'react';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});
function MyApp({ Component, pageProps }) {
  const path = usePathname();
  const isLP = useMemo(() => {
    return path?.includes('/lp');
  }, [path]);
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
          {!isLP && <Nav />}
          <Component {...pageProps} />
          {!isLP && <Footer />}
          <SalesIQ
            widgetCode='93210c756ea31b2224df734860e5d813b081008ce54deb21426241464ccb8de2e6558490d76d66086d0b48b1ed4abff0'
            domain='https://salesiq.zoho.com/widget'
          />
          <FloatRequestCallBack />
          <FloatWhatsApp />
          <FloatPhone />
        </div>
      </ThemeProvider>
    </RootLayout>
  );
}

export default MyApp;
