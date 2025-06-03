'use client';
import { useRef } from 'react';
import Nav from '@/components/Header';
import Footer from '@/components/Footer';
import About from '@/sections/home/About';
import Services from '@/sections/home/Services';
import WhyFertigenyx from '@/sections/home/WhyFertigenyx';
import FertilitySpecialists from '@/sections/home/Our-team';
import Faq from '@/sections/home/Faq';
import Cta from '@/sections/home/Cta';
import Banner from '@/sections/home/Banner';
import IVFTreatmentFAQs from '@/db/IVFTreatmentFAQs';
import Head from 'next/head';
import { SEOData } from '@/db/SEOData';
import HomePageIndication from '@/sections/home/HomePageIndication';
import VersatileApproach from '@/sections/home/VersatileApproach';
import CausesOfInfertility from '@/sections/home/CausesOfInfertility';

export default function Home() {
  const sectionRefs = {
    'about-fertigenyx': useRef<HTMLElement>(null),
    'services-offered': useRef<HTMLElement>(null),
    'why-fertigenyx': useRef<HTMLElement>(null),
    'fertility-specialists': useRef<HTMLElement>(null),
    'versatile-approach': useRef<HTMLElement>(null),
    'built-on-trust': useRef<HTMLElement>(null),
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
        <VersatileApproach ref={sectionRefs['versatile-approach']} />
        <HomePageIndication ref={sectionRefs['built-on-trust']} />
        <CausesOfInfertility />
        <Faq data={IVFTreatmentFAQs} />
        <Cta />
      </main>
      <Footer />
    </div>
  );
}
