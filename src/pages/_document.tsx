import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        <link
          rel='preload'
          as='image'
          href='https://res.cloudinary.com/garbhagudiivf/image/upload/v1740047981/FertiGenyx_Web_Banner-02_iaam6l.webp'
        />
        <link
          rel='preload'
          as='image'
          href='https://res.cloudinary.com/garbhagudiivf/image/upload/v1746258827/FertiGenyx_-_may_Month_Web_Banner-04_iodwpr.webp'
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-P4DN7H9H');
            `,
          }}
        />
      </Head>
      <body className='antialiased'>
        {/* GTM NoScript */}
        <noscript
          dangerouslySetInnerHTML={{
            __html: `
              <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-P4DN7H9H"
              height="0" width="0" style="display:none;visibility:hidden"></iframe>
            `,
          }}
        />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
