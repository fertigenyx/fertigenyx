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
            FertiGenyx is dedicated to excellence in fertility care, serving as a leading digital
            partner for fertility treatment providers. We are committed to assisting couples on
            their journey to parenthood by connecting them with world-class fertility expertise and
            advanced reproductive treatments.
          </p>
          <br />
          <p className='text-sm sm:text-base md:text-lg'>
            Modern fertility treatments integrate scientific advancements with personalized care.
            Innovative techniques such as IVF, IUI, and embryo freezing provide precise, tailored
            solutions to enhance conception success while ensuring the best outcomes for both mother
            and baby.
          </p>
        </div>
      </section>
      <CommonCta classname={''} />
    </>
  );
});

About.displayName = 'About';

export default About;
