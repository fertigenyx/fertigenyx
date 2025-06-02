'use client';
import { useRef } from 'react';
import Nav from '@/components/Header';
import Footer from '@/components/Footer';
import About from '@/sections/home/About';
import Services from '@/sections/home/Services';
import WhyFertigenyx from '@/sections/home/WhyFertigenyx';
import FertilitySpecialists from '@/sections/home/Our-team';
import CausesOfInfertility from '@/sections/home/CausesOfInfertility';
import IvfIndications from '@/sections/home/IvfIndications';
import Faq from '@/sections/home/Faq';
import Cta from '@/sections/home/Cta';
import RelatedSearches from '@/sections/home/RelatedSearch';
import Banner from '@/sections/home/Banner';
import IVFTreatmentFAQs from '@/db/IVFTreatmentFAQs';
import { IVF_RelatedSearches } from '@/db/relatedSearchesDB';
import Head from 'next/head';
import { SEOData } from '@/db/SEOData';

export default function Home() {
  const sectionRefs = {
    'about-fertigenyx': useRef<HTMLElement>(null),
    'services-offered': useRef<HTMLElement>(null),
    'why-fertigenyx': useRef<HTMLElement>(null),
    'fertility-specialists': useRef<HTMLElement>(null),
    'causes-of-infertility': useRef<HTMLElement>(null),
    'ivf-and-its-indications': useRef<HTMLElement>(null),
  };

  return (
    <div>
      <Head>
        <meta name='description' content={SEOData.IVFTreatment.description} />
        <meta name='keywords' content={SEOData.IVFTreatment.keywords} />
      </Head>
      <Nav sectionRefs={sectionRefs} />
      <main className='grid items-center justify-items-center gap-6 bg-gray-100 lg:gap-10 lg:p-8 lg:pb-20'>
        <Banner />
        <About ref={sectionRefs['about-fertigenyx']} />
        <Services ref={sectionRefs['services-offered']} />
        <WhyFertigenyx ref={sectionRefs['why-fertigenyx']} />
        <FertilitySpecialists ref={sectionRefs['fertility-specialists']} />
        <CausesOfInfertility ref={sectionRefs['causes-of-infertility']} />
        <IvfIndications ref={sectionRefs['ivf-and-its-indications']} />
        <Faq data={IVFTreatmentFAQs} />
        <Cta />
        <RelatedSearches data={IVF_RelatedSearches} />
      </main>
      <Footer />
    </div>
  );
}
