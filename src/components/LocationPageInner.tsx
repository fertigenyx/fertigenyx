'use client';

import dynamic from 'next/dynamic';
import { RichText } from '@graphcms/rich-text-react-renderer';
import { Suspense } from 'react';
import type { RichTextContent } from '@graphcms/rich-text-types';
import { LocationFAQs } from '@/db/LocationFAQs';
const MapSections = dynamic(() => import('./MapSections'), {
  loading: () => <div className='min-h-[200px]'>Loading map...</div>,
});

const DoctorsList = dynamic(() => import('./DoctorsList'), {
  loading: () => <div>Loading doctors...</div>,
});

const Faq = dynamic(() => import('../sections/home/Faq'), {
  loading: () => <div>Loading FAQs...</div>,
});

const SearchByPincode = dynamic(() => import('./SearchByPincode'), {
  loading: () => <div>Loading search...</div>,
});

const QuickLinks = dynamic(() => import('./QuickLinks'), {
  loading: () => <div>Loading links...</div>,
});

interface Doctor {
  id: string;
  name: string;
  designation: string;
  qualification: string;
  slug: string;
  imageAlt: string;
  image: { url: string };
}

interface Branch {
  title: string;
  address: string;
  mapLink: string;
  about: { raw: RichTextContent };
  doctor: Doctor[];
}

interface Props {
  branch: Branch;
}

const LocationPageInner = ({ branch }: Props) => {
  return (
    <>
      <div className='body-font relative mx-auto max-w-7xl'>
        <div className='inset-0 flex flex-wrap py-6 lg:flex-nowrap'>
          <Suspense fallback={<div>Loading map...</div>}>
            <MapSections address={branch?.address} mapLink={branch?.mapLink} />
          </Suspense>
          <div className='flex flex-col items-center px-6 font-content lg:w-1/2'>
            <h2 className='py-3 font-heading text-xl font-bold text-brandPurpleDark lg:text-2xl'>
              GarbhaGudi IVF Center, {branch?.title}
            </h2>
            {branch?.about?.raw ? (
              <RichText content={branch.about.raw} />
            ) : (
              <p>No description available.</p>
            )}
          </div>
        </div>

        <div className='flex w-full flex-col pb-8 md:mt-0'>
          <h2 className='py-10 text-center font-heading text-2xl font-semibold text-brandPurpleDark'>
            Fertility Specialists at {branch?.title}
          </h2>
          <Suspense fallback={<div>Loading doctors...</div>}>
            <DoctorsList doctors={branch?.doctor} />
          </Suspense>
        </div>
      </div>

      <Suspense fallback={<div>Loading FAQs...</div>}>
        <Faq data={LocationFAQs} />
      </Suspense>

      <Suspense fallback={<div>Loading search...</div>}>
        <SearchByPincode />
      </Suspense>

      <Suspense fallback={<div>Loading quick links...</div>}>
        <QuickLinks />
      </Suspense>
    </>
  );
};

export default LocationPageInner;
