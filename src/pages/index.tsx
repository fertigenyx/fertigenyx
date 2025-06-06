'use client';
import About from '@/sections/home/About';
import Services from '@/sections/home/Services';
import WhyFertigenyx from '@/sections/home/WhyFertigenyx';
import Faq from '@/sections/home/Faq';
import Cta from '@/sections/home/Cta';
import Banner from '@/sections/home/Banner';
import IVFTreatmentFAQs from '@/db/IVFTreatmentFAQs';
import Head from 'next/head';
import { SEOData } from '@/db/SEOData';
import HomePageIndication from '@/sections/home/HomePageIndication';
import VersatileApproach from '@/sections/home/VersatileApproach';
import CausesOfInfertility from '@/sections/home/CausesOfInfertility';
import FertilitySpecialists from '@/sections/home/Our-team';
import { throttledFetch } from '@/_lib/throttle';
import graphcms from '@/_lib/graphcms';

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
