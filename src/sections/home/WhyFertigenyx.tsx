import CommonCta from '@/components/CommonCta';
import { whyFertigenyx } from '@/components/constants/whyFertigenyx';
import Image from 'next/image';
import { forwardRef } from 'react';

const WhyFertigenyx = forwardRef<HTMLElement>((_, ref) => {
  return (
    <>
      {' '}
      <section
        ref={ref}
        id='why-fertigenyx'
        className='relative flex items-start justify-start overflow-hidden p-6 text-white md:p-10 lg:rounded lg:px-6 lg:pb-10'
      >
        {/* Background Image */}
        <div className='absolute inset-0 lg:bg-cover lg:bg-center'></div>

        {/* Semi-transparent Color Overlay */}
        <div className='absolute inset-0 bg-[#E6D6CD] bg-opacity-80'></div>

        {/* Content */}
        <div className='relative z-10 text-black'>
          <div className='mb-10 flex flex-col items-center justify-center'>
            <h2 className='mb-6 text-center text-3xl font-bold text-brandPurpleDark md:text-4xl'>
              Why <span className='text-white'>Choose</span> FertiGenyx?
            </h2>
            <div className='text-center text-xl text-brandPurpleDark underline lg:text-3xl'>
              FertiGenyx, Leading the Way in Infertility Treatment
            </div>
          </div>
          <div className='mx-3 flex justify-between'>
            <div className='grid grid-cols-2 gap-4 lg:w-2/3'>
              {whyFertigenyx &&
                whyFertigenyx?.map((menu, index) => {
                  return (
                    <div key={index}>
                      <h2 className='text-xl font-bold text-brandPurpleDark hover:underline'>
                        {menu.title}
                      </h2>
                      <div className='text-base'>{menu.description}</div>
                    </div>
                  );
                })}
            </div>
            <div className='ml-4 hidden justify-end xl:flex'>
              <Image
                src={
                  'https://res.cloudinary.com/garbhagudiivf/image/upload/v1748942250/546bb6d2-213a-4df4-b0e8-b03d1931344e.webp'
                }
                alt={'why-fertigenyx-image'}
                width={600}
                height={1000}
                className='h-fit rounded'
              />
            </div>
          </div>
        </div>
      </section>
      <CommonCta classname='my-4' />
    </>
  );
});

WhyFertigenyx.displayName = 'WhyFertigenyx';

export default WhyFertigenyx;
