'use client';
import dynamic from 'next/dynamic';
import { forwardRef } from 'react';

const CommonCta = dynamic(() => import('@/components/CommonCta'), {
  ssr: false,
  loading: () => <div className='py-6 text-center text-white'>Loading...</div>,
});

const About = forwardRef<HTMLElement>((_, ref) => {
  return (
    <>
      <section
        ref={ref}
        id='about-fertigenyx'
        className='flex w-full items-start justify-start rounded bg-cover bg-center p-4 text-white sm:p-6 md:p-10'
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/garbhagudiivf/image/upload/v1700052783/paripoorna/mother-with-daughter-lie-bed-dog-looking-them-min_uecuvg.webp')",
        }}
      >
        <div className='max-w-full rounded-2xl bg-black bg-opacity-30 p-3 sm:max-w-sm sm:p-4 md:max-w-md md:p-6'>
          <h2 className='mb-3 text-xl font-bold text-brandPurpleDark sm:mb-4 sm:text-2xl md:text-3xl'>
            About FertiGenyx
          </h2>
          <p className='text-sm sm:text-base md:text-lg'>
            FertiGenyx fertility care service provider, is dedicated to giving excellent treatment
            protocols based on individual patients’ requirements. We have expert fertility
            consultants who are available upon booking an appointment. They are committed to guiding
            you every step of the way in your parenthood journey. Treatment is given through the
            latest technology, ensuring the best possible results are achieved. Financial assistance
            is also provided by way of 0% interest EMI.
          </p>
          <br />
          <p className='text-sm sm:text-base md:text-lg'>
            The treatments provided are integrated with scientific advancements and personalized
            care. Innovative techniques are used in treatments like IUI, IVF, ICSI, and other
            surgical procedures like Laparoscopy, Hysteroscopy, etc so that best outcomes are
            achieved.
          </p>
        </div>
      </section>
      <CommonCta classname={''} />
    </>
  );
});

About.displayName = 'About';

export default About;
