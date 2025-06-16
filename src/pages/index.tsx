'use client';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import graphcms from '@/_lib/graphcms';
import { throttledFetch } from '@/_lib/throttle';
import { SEOData } from '@/db/SEOData';
import IVFTreatmentFAQs from '@/db/IVFTreatmentFAQs';
const About = dynamic(() => import('@/sections/home/About'), {
  loading: () => <div>Loading About...</div>,
  ssr: true,
});
const Services = dynamic(() => import('@/sections/home/Services'), {
  loading: () => <div>Loading Services...</div>,
  ssr: false,
});
const WhyFertigenyx = dynamic(() => import('@/sections/home/WhyFertigenyx'), {
  loading: () => <div>Loading Why Fertigenyx...</div>,
  ssr: false,
});
const Faq = dynamic(() => import('@/sections/home/Faq'), {
  loading: () => <div>Loading FAQs...</div>,
  ssr: false,
});
const Cta = dynamic(() => import('@/sections/home/Cta'), {
  loading: () => <div>Loading Call to Action...</div>,
  ssr: false,
});

const Banner = dynamic(() => import('@/sections/home/Banner'), {
  loading: () => <div>Loading Banner...</div>,
  ssr: true,
});
const HomePageIndication = dynamic(() => import('@/sections/home/HomePageIndication'), {
  loading: () => <div>Loading Indications...</div>,
  ssr: false,
});
const VersatileApproach = dynamic(() => import('@/sections/home/VersatileApproach'), {
  loading: () => <div>Loading Approach...</div>,
  ssr: false,
});
const CausesOfInfertility = dynamic(() => import('@/sections/home/CausesOfInfertility'), {
  loading: () => <div>Loading Causes of Infertility...</div>,
  ssr: false,
});
const FertilitySpecialists = dynamic(() => import('@/sections/home/Our-team'), {
  loading: () => <div>Loading Fertility Specialists...</div>,
  ssr: false,
});

export const getStaticProps = async () => {
  const fetchDoctors = async () => {
    return graphcms.request(
      `{
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
      }`
    );
  };
  const { doctors } = await throttledFetch(fetchDoctors);

  if (!doctors)
    return {
      notFound: true,
    };
  return {
    props: {
      doctors,
    },
    revalidate: 180,
  };
};
export default function Home({ doctors }) {
  return (
    <div>
      <Head>
        <title>{SEOData.Home.title}</title>
        <meta name='title' content={SEOData.Home.title} />
        <meta name='description' content={SEOData.Home.description} />
        <meta name='keywords' content={SEOData.Home.keywords} />
      </Head>

      <main className='grid items-center justify-items-center gap-6 bg-gray-100 lg:gap-10 lg:p-8 lg:pb-20'>
        <Banner />
        <About />
        <Services />
        <WhyFertigenyx />
        <FertilitySpecialists doctors={doctors} />
        <VersatileApproach />
        <HomePageIndication />
        <CausesOfInfertility />
        <Faq data={IVFTreatmentFAQs} />
        <Cta />
      </main>
    </div>
  );
}
