import CommonCta from '@/components/CommonCta';
import Image from 'next/image';
import { forwardRef } from 'react';

const WhyFertigenyx = forwardRef<HTMLElement>((_, ref) => {
  return (
    <>
      <section
        ref={ref}
        id='why-fertigenyx'
        className='relative flex flex-col items-center justify-center overflow-hidden px-5 md:px-12'
      >
        <div className='relative z-10 mb-10 flex flex-col items-center justify-center text-center'>
          <h2 className='text-2xl font-bold text-brandPurpleDark md:text-3xl'>
            Why Choose FertiGenyx?
          </h2>
        </div>
        <div className='flex flex-col gap-1.5 text-center'>
          <Image
            src='https://res.cloudinary.com/garbhagudiivf/image/upload/v1762524768/FertiGenyx_Service_Infographic_720X720_tvuvnw.webp'
            alt='Banner Image'
            width={540}
            height={620}
            className='mx-auto w-full object-contain lg:w-3/4'
            loading='lazy'
          />
        </div>
      </section>

      <CommonCta classname='my-8' />
    </>
  );
});

WhyFertigenyx.displayName = 'WhyFertigenyx';

export default WhyFertigenyx;
export const whyFertigenyx = [
  {
    icon: '/icons/lab.svg',
    title: 'Advanced Lab',
    description: 'Modern embryology with strict quality controls and precision tracking.',
  },
  {
    icon: '/icons/expert.svg',
    title: 'Expert Team',
    description: 'Consultants with 10–20+ years of experience in reproductive medicine.',
  },
  {
    icon: '/icons/journey.svg',
    title: 'Guided Journey',
    description: 'From evaluation to tailored plans — clear steps, no surprises.',
  },
  {
    icon: '/icons/support.svg',
    title: 'Human Support',
    description: 'Compassionate counselling and ongoing support throughout your journey.',
  },
];
