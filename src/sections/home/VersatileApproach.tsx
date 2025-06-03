'use client';

import { forwardRef } from 'react';
import dynamic from 'next/dynamic';
const CommonCta = dynamic(() => import('@/components/CommonCta'), {
  ssr: false,
  loading: () => <div className='h-12 text-center text-brandPurpleDark'>Loading CTA...</div>,
});

const VersatileApproach = forwardRef<HTMLElement>((_, ref) => {
  return (
    <section ref={ref} id='causes-of-infertility' className='bg-white px-6 py-10 lg:px-14 lg:py-16'>
      <h2 className='mb-6 text-center text-2xl font-bold text-brandPurpleDark md:text-3xl lg:text-4xl'>
        Our Versatile Approach
      </h2>

      <div className='text-brandDark space-y-6 font-content text-base leading-relaxed lg:text-lg'>
        <p>
          Our approach to treatment is highly appreciated by the patients who have come to us with
          various reproductive-related issues. Ours is considered the best fertility treatment
          centre in Bangalore. We offer Infertility Treatments to the diverse needs of couples,
          ensuring personalised care.
        </p>

        <p>
          Ours is a prominent Infertility Services in Bangalore, having state-of-the-art
          infrastructure and cutting-edge technologies. Our dedicated team of fertility experts
          brings together years of experience and expertise to provide the highest level of care.
        </p>

        <p className='text-center text-lg font-bold text-brandBrown md:text-xl'>
          Our commitment to excellence, compassionate care, and a high success rate has earned us a
          reputation as the Best Fertility Centre in Bangalore.
        </p>

        <p className='text-center'>
          Trust us to take you comfortably through your journey to parenthood and make your dreams
          of a complete family a reality.
        </p>
      </div>
      <div className='mt-10'>
        <CommonCta classname='mx-auto' />
      </div>
    </section>
  );
});

VersatileApproach.displayName = 'VersatileApproach';
export default VersatileApproach;
