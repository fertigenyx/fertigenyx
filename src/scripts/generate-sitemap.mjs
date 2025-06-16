import { GraphQLClient, gql } from 'graphql-request';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
const graphcms = new GraphQLClient(
  'https://ap-south-1.cdn.hygraph.com/content/cmbhs9ino037f07vymbz7oz2k/master',
  {
    headers: {
      Authorization: `Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE3NDkxMDMzMjksImF1ZCI6WyJodHRwczovL2FwaS1hcC1zb3V0aC0xLmh5Z3JhcGguY29tL3YyL2NtYmhzOWlubzAzN2YwN3Z5bWJ6N296MmsvbWFzdGVyIiwibWFuYWdlbWVudC1uZXh0LmdyYXBoY21zLmNvbSJdLCJpc3MiOiJodHRwczovL21hbmFnZW1lbnQtYXAtc291dGgtMS5oeWdyYXBoLmNvbS8iLCJzdWIiOiI4N2JiZGZmOS03M2MxLTQ0MGEtYjg0OC05Zjk2NjE4ZTUxMzkiLCJqdGkiOiJjbWJpeXltZHEwYXQyMDdwbzlvNG9ldnhsIn0.Q3M_Sfj8Ib8X_DTLWcsXiwcnoBW5sUdNDXAmVXpm41neOc8nHXO48hRtIVAHY_l5ez_H_qPf93-o53rfktkE5L1_Up-zoQTs0seItXuopP1QTvgHX11sKo0a_WapXVk4JjM2MmwdiT1cOJt-p-S_pEaWY1W7GAoQhwIU_GaTNbdRJdOWS0EKqsw86tP1svMWhojtP7IQACGS_rjvcdjrVMNTeSWLNgv11Cuc3trsX6sjgyyEm1-ws6e593tdmQPQ1e2S9F4NoE271cHyqsjRYMZ5mqLFmXlsAHU2p_Aghprqk2GmXU1LjEXEhTaF-_pkMMhIQRoaT4KJaQarGA-ONNukdJSLCvFRF0tiZfG5hzsA4mj_kRdlP16u_zq6wj3-J9CV6gi-DhsEM4cQH7O9-5NStjgm6WKFfGoQ6r27SU1CglTYwWdlC4yVbWYsAzxPRSVIn09W4ssz7xCLDGf0hwFXcNe-3ntiJQhMmMI8q_o1H6gdYF_lgpQR7FLmvEYznuRhFQ-8eACkKqRAYnN3QJO9kxsJ5xDM7punC0di_AAHfqFWyROrm1QcW4BTqT7FwXkzD9dr2zRaG6I2NU0OmIWh2rXjL7hQBXKjJ8usArjSvcVlTivL6BImJ1TE9Zeb9A0ygi3x68EKaPgi5K5loc7QJz-eq7gmpJm1fxqgocU`,
    },
  }
);
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const BASE_URL = 'https://www.fertigenyx.com';

const BLOGS_QUERY = gql`
  query GetBlogs($first: Int!, $skip: Int!) {
    blogs(first: $first, skip: $skip) {
      slug
    }
  }
`;

const DOCTORS_QUERY = gql`
  query GetDoctors($first: Int!, $skip: Int!) {
    doctors(first: $first, skip: $skip) {
      slug
    }
  }
`;
const Treatments_QUERY = gql`
  query GetTreatments($first: Int!, $skip: Int!) {
    treatments(first: $first, skip: $skip) {
      slug
    }
  }
`;

const sitemapQuery = gql`
  query {
    branches {
      slug
    }
  }
`;

function generateSiteMap(branches, doctors, treatments, blogs) {
  const pages = [];

  // Static URLs
  pages.push({ loc: `${BASE_URL}/`, lastmod: new Date().toISOString() });
  pages.push({
    loc: `${BASE_URL}/fertility-specialist-bangalore`,
    lastmod: new Date().toISOString(),
  });
  pages.push({
    loc: `${BASE_URL}/treatments`,
    lastmod: new Date().toISOString(),
  });
  pages.push({
    loc: `${BASE_URL}/contact-us`,
    lastmod: new Date().toISOString(),
  });
  pages.push({
    loc: `${BASE_URL}/legal/privacy-policy`,
    lastmod: new Date().toISOString(),
  });
  pages.push({
    loc: `${BASE_URL}/legal/terms-and-conditions`,
    lastmod: new Date().toISOString(),
  });

  // Add blogs
  blogs.forEach(({ slug }) => {
    pages.push({
      loc: `${BASE_URL}/blogs/${slug}`,
      lastmod: new Date().toISOString(),
    });
  });
  // Add fertility-experts
  doctors.forEach(({ slug }) => {
    pages.push({
      loc: `${BASE_URL}/fertility-specialist-bangalore/${slug}`,
      lastmod: new Date().toISOString(),
    });
  });
  // Add branches
  branches.forEach(({ slug }) => {
    pages.push({
      loc: `${BASE_URL}/fertility-centre-bangalore/${slug}`,
      lastmod: new Date().toISOString(),
    });
  });
  // Add treatments
  treatments.forEach(({ slug }) => {
    pages.push({
      loc: `${BASE_URL}/treatments/${slug}`,
      lastmod: new Date().toISOString(),
    });
  });

  return `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${pages
      .map(({ loc, lastmod }) => {
        return `
      <url>
        <loc>${loc}</loc>
        <lastmod>${new Date(lastmod).toISOString()}</lastmod>
        <changefreq>weekly</changefreq>
        <priority>0.8</priority>
      </url>`;
      })
      .join('')}
  </urlset>`;
}
async function fetchAllBlogs(graphcms) {
  const PAGE_SIZE = 100;
  let skip = 0;
  let hasMore = true;
  const allBlogs = [];

  while (hasMore) {
    const data = await graphcms.request(BLOGS_QUERY, {
      first: PAGE_SIZE,
      skip,
    });

    const blogs = data.blogs;
    allBlogs.push(...blogs);

    if (blogs.length < PAGE_SIZE) {
      hasMore = false;
    } else {
      skip += PAGE_SIZE;
    }
  }

  return allBlogs;
}

async function fetchAllDoctors(graphcms) {
  const PAGE_SIZE = 100;
  let skip = 0;
  let hasMore = true;
  const allDoctors = [];

  while (hasMore) {
    const data = await graphcms.request(DOCTORS_QUERY, {
      first: PAGE_SIZE,
      skip,
    });

    const doctors = data.doctors;
    allDoctors.push(...doctors);

    if (doctors.length < PAGE_SIZE) {
      hasMore = false;
    } else {
      skip += PAGE_SIZE;
    }
  }

  return allDoctors;
}
async function fetchAllTreatments(graphcms) {
  const PAGE_SIZE = 100;
  let skip = 0;
  let hasMore = true;
  const allTreatments = [];

  while (hasMore) {
    const data = await graphcms.request(Treatments_QUERY, {
      first: PAGE_SIZE,
      skip,
    });

    const treatments = data.treatments;
    allTreatments.push(...treatments);

    if (treatments.length < PAGE_SIZE) {
      hasMore = false;
    } else {
      skip += PAGE_SIZE;
    }
  }

  return allTreatments;
}

async function generate() {
  const sitemapData = await graphcms.request(sitemapQuery);
  const blogs = await fetchAllBlogs(graphcms);
  const doctors = await fetchAllDoctors(graphcms);
  const treatments = await fetchAllTreatments(graphcms);
  const sitemap = generateSiteMap(sitemapData.branches, doctors, treatments, blogs);
  const filePath = path.join(__dirname, '../../public/sitemap.xml');
  fs.writeFileSync(filePath, sitemap);
}

generate().catch((err) => {
  console.error('❌ Error generating sitemap:', err);
  process.exit(1);
});
