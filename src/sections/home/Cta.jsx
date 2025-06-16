'use client';

import dynamic from 'next/dynamic';

const CommonCta = dynamic(() => import('@/components/CommonCta'), {
  ssr: false,
  loading: () => <div className='h-12' />,
});

const Cta = () => {
  return (
    <section
      aria-labelledby='cta-heading'
      className='mx-auto max-w-7xl rounded-lg bg-gray-100 px-4 py-8 sm:px-6 lg:px-8'
    >
      <div className='flex flex-col items-center text-center lg:flex-row lg:justify-between lg:text-left'>
        <h2
          id='cta-heading'
          className='text-2xl font-extrabold tracking-tight text-brandPurpleDark sm:text-3xl'
        >
          <span className='block'>Ready to start?</span>
          <span className='mt-2 block text-brandBrown'>Let us take your dreams forward...</span>
        </h2>
        <div className='mt-6 lg:mt-0'>
          <CommonCta classname='mx-auto w-full sm:w-auto' />
        </div>
      </div>
    </section>
  );
};

export default Cta;
