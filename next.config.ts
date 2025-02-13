// @ts-check
/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: false,
  experimental: {
    workerThreads: false,
    cpus: 1,
  },
  images: {
    dangerouslyAllowSVG: true,
    unoptimized: true,
    domains: [
      'res.cloudinary.com',
      'media.graphassets.com',
      'avatars.dicebear.com',
      'app.unbounce.com',
      'https://yogachallenge.in/',
    ],
  },

  headers: async () => {
    return [
      {
        source: '/(.*)',
        locale: false,
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
        ],
      },
    ];
  },

  async rewrites() {
    return [
      {
        source: '/public/contact.html',
        destination: '/src/pages/api/contact.tsx',
      },
      {
        source: '/public/thank-you.html',
        destination: '/src/pages/api/thank-you.tsx',
      },
    ];
  },

  async redirects() {
    return [
      {
        source: '/doctors',
        destination: '/fertility-experts',
        permanent: true,
      },
      {
        source: '/doctors/:slug',
        destination: '/fertility-experts/:slug', // Matched parameters can be used in the destination
        permanent: true,
      },
      {
        source: '/infertility',
        destination: '/treatments/infertility-treatment-in-bangalore',
        permanent: true,
      },
      {
        source: '/about',
        destination: '/about/overview',
        permanent: true,
      },
      {
        source: '/resources/treatments',
        destination: '/treatments',
        permanent: true,
      },
      {
        source: '/resources/treatments/:slug',
        destination: '/treatments/:slug',
        permanent: true,
      },
      {
        source: '/features/Holistic%20Approach',
        destination: '/features/holistic-approach',
        permanent: true,
      },
      {
        source: '/features/Affordable%20Treatments',
        destination: '/features/affordable-treatments',
        permanent: true,
      },
      {
        source: '/features/Financing%20Options',
        destination: '/features/financing-options',
        permanent: true,
      },
      {
        source: '/features/Success%20Rates%20of%20IVF',
        destination: '/features/success-rates-of-ivf',
        permanent: true,
      },
      {
        source: '/features/Treatment%20Protocols',
        destination: '/features/treatment-protocols',
        permanent: true,
      },
      {
        source: '/features/World%20Class%20Fertility%20Care',
        destination: '/features/world-class-fertility-care',
        permanent: true,
      },
      {
        source: '/treatments/intracytoplasmic-sperm-injection-icsi',
        destination: '/treatments/icsi-treatment-in-bangalore',
        permanent: true,
      },
      {
        source: '/treatments/intra-uterine-insemination-iui',
        destination: '/treatments/iui-treatment-in-bangalore',
        permanent: true,
      },
      {
        source: '/index',
        destination: '/',
        permanent: true,
      },
      {
        source: '/treatments/infertility',
        destination: '/treatments/infertility-treatment-in-bangalore',
        permanent: true,
      },
      {
        source: '/treatments/in-vitro-fertilization-ivf',
        destination: '/treatments/ivf-treatment-in-bangalore',
        permanent: true,
      },
      {
        source: '/blogs/page/0',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/treatments/laparoscopy',
        destination: '/treatments/laparoscopy-treatment-in-bangalore',
        permanent: true,
      },
      {
        source: '/treatments/hysteroscopy',
        destination: '/treatments/hysteroscopy-treatment-in-bangalore',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
