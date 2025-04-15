import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        <script async src='https://www.googletagmanager.com/gtag/js?id=AW-16974497189'></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              <script> window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'AW-16974497189'); </script> 
            `,
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              <!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-5MMZWXWK');</script>
<!-- End Google Tag Manager -->

            `,
          }}
        />
      </Head>
      <body className='antialiased'>
        <noscript
          dangerouslySetInnerHTML={{
            __html: `
<!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5MMZWXWK"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->
            `,
          }}
        />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
