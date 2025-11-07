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
          <h2 className='mb-4 text-2xl font-bold text-brandPurpleDark md:text-3xl'>
            Why Choose FertiGenyx?
          </h2>
          <p className='max-w-prose text-base'>
            FertiGenyx, Leading the Way in Infertility Treatment
          </p>
        </div>

        <div className='relative z-10 grid w-full max-w-6xl grid-cols-1 gap-6 sm:grid-cols-1 lg:grid-cols-4'>
          {whyFertigenyx.map((item, index) => (
            <div
              key={index}
              className='rounded-xl bg-white p-6 shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl'
            >
              <div className='mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100'>
                <Image src={item.icon} alt={item.title} width={30} height={30} />
              </div>
              <h3 className='mb-2 text-xl font-semibold text-blue-800'>{item.title}</h3>
              <p className='text-base text-blue-700'>{item.description}</p>
            </div>
          ))}
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
