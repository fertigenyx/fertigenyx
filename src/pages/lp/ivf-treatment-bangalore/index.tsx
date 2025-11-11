import Head from 'next/head';
import dynamic from 'next/dynamic';
import LPHeader from '@/components/LPHeader';
import Banner from '@/sections/home/Banner';
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
const IvfIndications = dynamic(() => import('@/sections/home/IvfIndications'), {
  loading: () => <p>Loading IVF-indications...</p>,
  ssr: false,
});
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
import { IVF_RelatedSearches } from '@/db/relatedSearchesDB';
import { SEOData } from '@/db/SEOData';
import IVFTreatmentFAQs from '@/db/IVFTreatmentFAQs';
import { Suspense } from 'react';
import FormComponent from '@/components/FormComponent';

const index = () => {
  return (
    <div>
      <Head>
        <title>{SEOData.IVFTreatment.title}</title>
        <meta name='description' content={SEOData.IVFTreatment.description} />
        <meta name='keywords' content={SEOData.IVFTreatment.keywords} />
      </Head>
      <LPHeader />
      <section aria-label='Hero' className='w-full'>
        <div className='grid grid-cols-1 items-stretch gap-y-2.5 lg:grid-cols-6'>
          <div className='lg:col-span-4'>
            <Banner />
          </div>
          <aside className='lg:col-span-2'>
            <Suspense
              fallback={<div className='py-10 text-center text-gray-500'>Loading form...</div>}
            >
              <div className='col-span-1 flex h-full items-center justify-center bg-[#005e7e] shadow-lg'>
                <FormComponent title={'Book your Appointment'} />
              </div>
            </Suspense>
          </aside>
        </div>
      </section>
      <main className='block items-center justify-items-center gap-6 bg-gray-100 pt-6 md:grid lg:gap-10 lg:p-8 lg:pb-20 lg:pt-10'>
        <About />
        <WhyFertigenyx />
        <FertilitySpecialists />
        <IvfIndications />
        <Faq data={IVFTreatmentFAQs} />
        <Cta />
        <RelatedSearches data={IVF_RelatedSearches} />
      </main>
    </div>
  );
};

export default index;
