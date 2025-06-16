'use client';
import graphcms from '@/_lib/graphcms';
import { throttledFetch } from '@/_lib/throttle';
import Head from 'next/head';
import dynamic from 'next/dynamic';
const About = dynamic(() => import('@/sections/home/About'), {
  loading: () => <div>Loading about section...</div>,
  ssr: true,
});
const BannerComponent = dynamic(() => import('@/sections/home/Banner'), {
  loading: () => <div>Loading banner...</div>,
  ssr: true,
});
const TreatmentIndication = dynamic(() => import('@/components/TreatmentIndication'), {
  loading: () => <div>Loading treatment info...</div>,
  ssr: false,
});
const Cta = dynamic(() => import('@/sections/home/Cta'), {
  loading: () => <div>Loading call to action...</div>,
  ssr: false,
});
const Faq = dynamic(() => import('@/sections/home/Faq'), {
  loading: () => <div>Loading FAQs...</div>,
  ssr: false,
});
const FertilitySpecialists = dynamic(() => import('@/sections/home/Our-team'), {
  loading: () => <div>Loading team info...</div>,
  ssr: false,
});

export const getStaticProps = async ({ params }) => {
  const fetchTreatment = async ({ slug }) => {
    return graphcms.request(
      `
          query ($slug: String!) {
            treatment(where: { slug: $slug }) {
              id
              metaTitle
              metaDescription
              metaKeywords
              slug
              description {
                raw
                text
              }
              faQs {
                id
                answer
                question
            }
            }
            doctors{
              id
              name
              slug
              image {
                  url
              }
              imageAlt
              qualification
              designation
              bio {
                  raw
                  text
              }
              
          }
          }
        `,
      {
        slug,
      }
    );
  };
  const { treatment, doctors } = await throttledFetch(fetchTreatment, { slug: params.slug });

  if (!treatment)
    return {
      notFound: true,
    };
  return {
    props: {
      treatment: treatment,
      doctors,
    },
    revalidate: 180,
  };
};

export const getStaticPaths = async () => {
  const fetchTreatments = async () => {
    return graphcms.request(`
        {
          treatments {
            slug
          }
        }
      `);
  };
  const { treatments } = await throttledFetch(fetchTreatments);
  return {
    paths: treatments.map(({ slug }) => ({ params: { slug } })),
    fallback: true,
  };
};
const Treatment = ({ treatment, doctors }) => {
  return (
    <div>
      <Head>
        <title>{treatment?.metaTitle}</title>
        <meta name='description' content={treatment?.metaDescription} />
        <meta name='keywords' content={treatment?.metaKeywords} />
      </Head>

      <main className='grid items-center justify-items-center gap-6 bg-gray-100 lg:gap-10 lg:p-8 lg:pb-20'>
        <BannerComponent />
        <About />
        <TreatmentIndication treatment={treatment} />
        <FertilitySpecialists doctors={doctors} />
        {treatment?.faQs && treatment?.faQs?.length > 0 && (
          <Faq data={treatment?.faQs} firstId={treatment?.faQs?.[0].id} />
        )}
        <Cta />
      </main>
    </div>
  );
};

export default Treatment;
