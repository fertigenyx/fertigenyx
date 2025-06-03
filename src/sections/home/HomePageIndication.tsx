'use client';
import dynamic from 'next/dynamic';
import { forwardRef, useMemo } from 'react';
const CommonCta = dynamic(() => import('@/components/CommonCta'), {
  ssr: false,
  loading: () => <div className='h-12 text-center text-brandPurpleDark'>Loading CTA...</div>,
});

const HomePageIndication = forwardRef<HTMLElement>((_, ref) => {
  const infertilityData = useMemo(
    () => [
      {
        key: 'infertility1',
        title: 'Deep understanding',
        content:
          "We go beyond medical charts, actively listening to each person's unique journey, their hopes, and their challenges.",
      },
      {
        key: 'infertility2',
        title: 'Crystal-clear communication',
        content:
          'We ensure every couple fully understands their treatment plan, providing complete transparency every step of the way.',
      },
      {
        key: 'infertility3',
        title: 'Comprehensive support system',
        content:
          'Our expert counselors, wellness programs, and caring team provide steadfast assistance throughout their experience.',
      },
      {
        key: 'infertility4',
        title: 'Informed empowerment',
        content:
          'We share all relevant information, from diagnosis to success rates, so individuals feel confident and involved in every decision.',
      },
      {
        key: 'infertility5',
        title: 'Absolute confidentiality',
        content:
          "We uphold the highest standards of privacy, respecting the dignity of each person's path with unwavering discretion.",
      },
      {
        key: 'infertility6',
        title: 'Integrated well-being',
        content:
          'Our approach combines physical treatment with essential mind and body wellness, tailored for overall health.',
      },
      {
        key: 'infertility7',
        title: 'Tailored treatment plans',
        content:
          "Recognizing that every situation is different, we customize our care to meet each individual's specific needs.",
      },
    ],
    []
  );
  return (
    <section
      ref={ref}
      id='home-page-indications'
      className='mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8'
    >
      <h2 className='mb-8 text-center font-heading text-3xl font-extrabold text-brandPurpleDark sm:text-4xl lg:text-5xl'>
        FertiGenyx: Built on Trust, Delivered with Care
      </h2>

      <div className='text-brandDark mb-8 text-justify font-content text-base leading-relaxed'>
        <p>
          When someone walks into our hospital, they’re not just coming for treatment - they’re
          placing their trust in us when they are facing one of the most vulnerable journeys of
          their life.
        </p>
        <p>Here’s how we honour that trust:</p>
      </div>

      <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8'>
        {infertilityData.map(({ key, title, content }) => {
          return (
            <article
              key={key}
              className='rounded-lg bg-gray-100 p-6 shadow-md transition-shadow duration-300 hover:shadow-xl'
            >
              <h3 className='text-lg font-semibold text-brandBrown'>{title}</h3>
              <div className='my-2 h-1 w-1/4 rounded bg-brandBrown'></div>
              <p className='text-brandDark space-y-1 pl-5 text-sm'>{content}</p>
            </article>
          );
        })}
      </div>

      <div className='mt-12'>
        <CommonCta classname='mx-auto' />
      </div>
    </section>
  );
});

export default HomePageIndication;
