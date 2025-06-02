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
const IuiTreatmentIndication = dynamic(() => import('../../../components/IuiTreatmentIndication'), {
  loading: () => <p>Loading Male treatement indications...</p>,
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
import { IUI_RelatedSearches } from '@/db/relatedSearchesDB';
import { SEOData } from '@/db/SEOData';
import IUITreatmentFAQs from '@/db/IUITreatmentFAQs';

const index = () => {
  return (
    <div>
      <Head>
        <title>{SEOData.IUITreatment.title}</title>
        <meta name='description' content={SEOData.IUITreatment.description} />
        <meta name='keywords' content={SEOData.IUITreatment.keywords} />
      </Head>
      <LPHeader />
      <main className='grid items-center justify-items-center gap-6 bg-gray-100 lg:gap-10 lg:p-8 lg:pb-20'>
        <BannerComponent />
        <About />
        <WhyFertigenyx />
        <FertilitySpecialists />
        <IuiTreatmentIndication />
        <Faq data={IUITreatmentFAQs} />
        <Cta />
        <RelatedSearches data={IUI_RelatedSearches} />
      </main>
    </div>
  );
};
export default index;
