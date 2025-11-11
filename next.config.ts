// @ts-check
/** @type {import('next').NextConfig} */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});
const nextConfig = withBundleAnalyzer({
  reactStrictMode: false,
  experimental: {
    workerThreads: false,
    cpus: 1,
  },
  images: {
    dangerouslyAllowSVG: true,
    minimumCacheTTL: 60 * 60 * 24 * 30,
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
        source: '/index',
        destination: '/',
        permanent: true,
      },
      {
        source: '/lp/ivf-treatment-bangalore',
        destination: '/',
        permanent: true,
      },
      {
        source: '/lp/iui-treatment-bangalore',
        destination: '/',
        permanent: true,
      },
      {
        source: '/lp/fertility-specialist-bangalore',
        destination: '/',
        permanent: true,
      },
      {
        source: '/lp/male-fertility-treatment-bangalore',
        destination: '/',
        permanent: true,
      },
      {
        source: '/lp/fertility-clinic-bangalore',
        destination: '/',
        permanent: true,
      },
      {
        source: '/lp/female-fertility-treatment-bangalore',
        destination: '/',
        permanent: true,
      },
    ];
  },
});

export default nextConfig;
