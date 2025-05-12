'use client';

import { forwardRef, useMemo } from 'react';
import dynamic from 'next/dynamic';

const CommonCta = dynamic(() => import('@/components/CommonCta'), {
  ssr: false,
  loading: () => <div className='h-10 text-center text-brandPurpleDark'>Loading CTA…</div>,
});

const WhatIsIvf = dynamic(() => import('./WhatIsIvf'), {
  ssr: false,
});

const IvfIndications = forwardRef<HTMLElement>((_, ref) => {
  const infertilityData = useMemo(
    () => [
      {
        key: 'infertility1',
        title: 'Blocked or damaged fallopian tubes',
        content:
          'If the fallopian tubes are blocked or damaged, the egg may not be able to travel from the ovaries to the uterus. IVF overcomes these issues because it involves the direct transfer of the embryo to the woman’s uterus.',
      },
      {
        key: 'infertility2',
        title: 'Male fertility problems',
        content:
          'If the male partner has a low sperm count or poor sperm quality, IVF may be recommended. IVF can help in such cases by fertilizing the eggs with the sperm in a controlled environment making fertilization possible.',
      },
      {
        key: 'infertility3',
        title: 'Unexplained infertility',
        content: 'If the cause of infertility is unknown, IVF may be recommended.',
      },
      {
        key: 'infertility4',
        title: 'Ovulation disorders',
        content:
          'If a woman is not ovulating regularly or at all, IVF may be recommended. An infertility treatment such as IVF can increase their chances of conceiving a child.',
      },
      {
        key: 'infertility5',
        title: 'Endometriosis',
        content:
          'This is a condition in which the tissue that lines the uterus grows outside of the uterus, which can cause fertility problems.',
      },
      {
        key: 'infertility6',
        title: 'Individuals with genetic disorders',
        content:
          'If one or both partners have any genetic disorders that they are afraid of passing on to their child, IVF can be the answer. Preimplantation genetic testing allows only the healthiest embryos to be transferred.',
      },
      {
        key: 'infertility7',
        title: 'Advanced maternal age',
        content:
          'As a woman gets older, her fertility decreases, and IVF may be recommended for women over the age of 35 who are trying to get pregnant.',
      },
    ],
    []
  );

  return (
    <section
      ref={ref}
      id='ivf-and-its-indications'
      className='mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8'
    >
      <h2 className='mb-8 text-center font-heading text-3xl font-extrabold text-brandPurpleDark sm:text-4xl lg:text-5xl'>
        Who Should Look for IVF Treatment?
      </h2>

      <div className='text-brandDark mx-auto mb-8 max-w-4xl text-center font-content text-base leading-relaxed'>
        <p>
          The first step towards overcoming infertility is a correct diagnosis—not just treatment.
          IVF is often recommended in the following situations:
        </p>
      </div>

      <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8'>
        {infertilityData.map(({ key, title, content }) => {
          const contentPoints = content
            .split('.')
            .map((sentence) => sentence.trim())
            .filter(Boolean);

          return (
            <article
              key={key}
              className='rounded-lg bg-gray-100 p-6 shadow-md transition-shadow duration-300 hover:shadow-xl'
            >
              <h3 className='text-lg font-semibold text-brandBrown'>{title}</h3>
              <div className='my-2 h-1 w-1/4 rounded bg-brandBrown'></div>
              <ol className='text-brandDark list-[lower-alpha] space-y-1 pl-5 text-sm'>
                {contentPoints.map((point, idx) => (
                  <li key={idx}>{point}.</li>
                ))}
              </ol>
            </article>
          );
        })}
      </div>

      <div className='mt-12'>
        <CommonCta classname='mx-auto' />
      </div>

      <div className='mt-10'>
        <WhatIsIvf />
      </div>
    </section>
  );
});

IvfIndications.displayName = 'IvfIndications';
export default IvfIndications;
