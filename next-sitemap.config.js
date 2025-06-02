/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.fertigenyx.com',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  sitemapBaseFileName: 'sitemap',
  sitemapSize: 10000,
  exclude: ['/404', '/500'],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
  },
};
