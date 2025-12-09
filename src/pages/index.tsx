'use client';
import { Suspense, useRef } from 'react';
import Nav from '@/components/Header';
import Footer from '@/components/Footer';
import Services from '@/sections/home/Services';
import WhyFertigenyx from '@/sections/home/WhyFertigenyx';
import FertilitySpecialists from '@/sections/home/Our-team';
import Faq from '@/sections/home/Faq';
import Cta from '@/sections/home/Cta';
import RelatedSearches from '@/sections/home/RelatedSearch';
import Banner from '@/sections/home/Banner';
import IVFTreatmentFAQs from '@/db/IVFTreatmentFAQs';
import { IVF_RelatedSearches } from '@/db/relatedSearchesDB';
import Head from 'next/head';
import { SEOData } from '@/db/SEOData';
import FormComponent from '@/components/FormComponent';
import IvfIndications from '@/sections/home/IvfIndications';

export default function Home() {
  const sectionRefs = {
    'ivf-and-its-indications': useRef<HTMLElement>(null),
    'services-offered': useRef<HTMLElement>(null),
    'why-fertigenyx': useRef<HTMLElement>(null),
    'fertility-specialists': useRef<HTMLElement>(null),
  };

  return (
    <div>
      <Head>
        <meta name='title' content='Fertigenyx - GarbhaGudi IVF Marketing Partner Bangalore' />
        <meta name='description' content={SEOData.IVFTreatment.description} />
        <meta name='keywords' content={SEOData.IVFTreatment.keywords} />
        <title>Fertigenyx - GarbhaGudi IVF Marketing Partner Bangalore</title>
      </Head>
      <Nav sectionRefs={sectionRefs} />
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
        <div className='my-3 px-2.5 sm:my-4 md:px-5'>
          <div className='flex w-full flex-col items-center gap-2 rounded-lg bg-brandPurpleDark p-2.5 sm:gap-3'>
            <h2 className='text-base font-semibold text-white sm:text-base md:text-lg'>
              Big Savings, Get Flat ₹1,11,111* OFF on your IVF Treatments
            </h2>
            <p className='text-justify text-sm text-gray-100'>
              This November and December 2025, celebrate the season of parenthood with PARIPOORNA —
              a special initiative by GarbhaGudi IVF Centre, supported digitally by Fertigenyx, in
              association with the GarbhaGnan Foundation. As part of this program, couples can avail
              a flat ₹1,11,111/- discount on their IVF treatment cost.
              <br />
              We believe that the joy of parenthood should be within everyone’s reach. Many couples
              face emotional and financial challenges on their fertility journey, and Paripoorna
              aims to ease that burden. With world-class fertility care, compassionate doctors, and
              advanced treatment options, we stand by every couple who dreams of holding their baby.
            </p>
          </div>
        </div>
      </section>
      <main className='block items-center justify-items-center gap-6 bg-gray-100 pt-6 md:grid lg:gap-10 lg:p-8 lg:pb-20 lg:pt-10'>
        <IvfIndications ref={sectionRefs['ivf-and-its-indications']} />
        <Services ref={sectionRefs['services-offered']} />
        <WhyFertigenyx ref={sectionRefs['why-fertigenyx']} />
        <FertilitySpecialists ref={sectionRefs['fertility-specialists']} />
        <Faq data={IVFTreatmentFAQs} />
        <Cta />
        <RelatedSearches data={IVF_RelatedSearches} />
      </main>
      <Footer />
    </div>
  );
}
