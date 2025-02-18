import CommonCta from '@/components/CommonCta';
import React from 'react';

const Cta = () => {
  return (
    <div className='mx-auto max-w-7xl rounded-lg bg-gray-100'>
      <div className='mx-auto flex max-w-7xl flex-col items-center px-4 text-center sm:px-6 lg:flex-row lg:justify-between lg:px-8 lg:py-8 lg:text-left'>
        <h2 className='text-3xl font-extrabold tracking-tight text-brandPurpleDark sm:text-4xl'>
          <span className='block'>Ready to start?</span>
          <span className='block text-brandBrown mt-2'>
            Let us take your dreams forward...
          </span>
        </h2>
        <CommonCta  classname="my-4"/>
      </div>
    </div>
  );
};

export default Cta;
