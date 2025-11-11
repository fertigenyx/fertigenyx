import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        <link
          rel='preload'
          as='image'
          fetchPriority='high'
          href='https://res.cloudinary.com/garbhagudiivf/image/upload/f_auto,q_auto,w_720,h_360,c_fill/v1740047981/FertiGenyx_Web_Banner-02_iaam6l.webp'
          imageSrcSet='
            https://res.cloudinary.com/garbhagudiivf/image/upload/f_auto,q_auto,w_360,h_180,c_fill/v1740047981/FertiGenyx_Web_Banner-02_iaam6l.webp 360w,
            https://res.cloudinary.com/garbhagudiivf/image/upload/f_auto,q_auto,w_515,h_258,c_fill/v1740047981/FertiGenyx_Web_Banner-02_iaam6l.webp 515w,
            https://res.cloudinary.com/garbhagudiivf/image/upload/f_auto,q_auto,w_720,h_360,c_fill/v1740047981/FertiGenyx_Web_Banner-02_iaam6l.webp 720w,
            https://res.cloudinary.com/garbhagudiivf/image/upload/f_auto,q_auto,w_1080,h_540,c_fill/v1740047981/FertiGenyx_Web_Banner-02_iaam6l.webp 1080w
          '
          imageSizes='(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 515px'
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
