import Head from 'next/head';
import dynamic from 'next/dynamic';
import LPHeader from '@/components/LPHeader';
import BannerComponent from '@/sections/home/Banner';
const About = dynamic(() => import('@/sections/home/About'), {
  loading: () => <p>Loading about...</p>,
  ssr: false,
});
const Cta = dynamic(() => import('@/sections/home/Cta'), {
  loading: () => <p>Loading Cta...</p>,
  ssr: false,
});
const Faq = dynamic(() => import('@/sections/home/Faq'), {
  loading: () => <p>Loading Faq...</p>,
  ssr: false,
});
const FemaleTreatmentIndication = dynamic(
  () => import('../../../components/FemaleTreatmentIndication'),
  {
    loading: () => <p>Loading Male treatement indications...</p>,
    ssr: false,
  }
);
const FertilitySpecialists = dynamic(() => import('@/sections/home/Our-team'), {
  loading: () => <p>Loading our teams...</p>,
  ssr: false,
});
const RelatedSearches = dynamic(() => import('@/sections/home/RelatedSearch'), {
  loading: () => <p>Loading related searches...</p>,
  ssr: false,
});
const WhyFertigenyx = dynamic(() => import('@/sections/home/WhyFertigenyx'), {
  loading: () => <p>Loading why fertigenyx...</p>,
  ssr: false,
});
import { Female_Fertility_RelatedSearches } from '@/db/relatedSearchesDB';
import { SEOData } from '@/db/SEOData';
import FemaleFertilityFAQs from '@/db/FemaleFertilityFAQs';
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
const index = ({ doctors }) => {
  return (
    <div>
      <Head>
        <title>{SEOData.FemaleFertilityTreatment.title}</title>
        <meta name='description' content={SEOData.FemaleFertilityTreatment.description} />
        <meta name='keywords' content={SEOData.FemaleFertilityTreatment.keywords} />
      </Head>
      <LPHeader />
      <main className='grid items-center justify-items-center gap-6 bg-gray-100 lg:gap-10 lg:p-8 lg:pb-20'>
        <BannerComponent />
        <About />
        <WhyFertigenyx />
        <FertilitySpecialists doctors={doctors} />
        <FemaleTreatmentIndication />
        <Faq data={FemaleFertilityFAQs} />
        <Cta />
        <RelatedSearches data={Female_Fertility_RelatedSearches} />
      </main>
    </div>
  );
};
export default index;
