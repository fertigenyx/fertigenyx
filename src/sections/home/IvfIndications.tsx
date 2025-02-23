import { forwardRef } from 'react';
import WhatIsIvf from './WhatIsIvf';
import CommonCta from '@/components/CommonCta';

const IvfIndications = forwardRef<HTMLElement>((_, ref) => {
  const infertilityData = [
    {
      key: 'infertility1',
      title: 'Blocked or damaged fallopian tubes',
      content: `  If the fallopian tubes are blocked or damaged, the egg may not be able to travel from the ovaries to the uterus. IVF overcomes these issues because it involves the direct transfer of the embryo to the woman’s uterus.`,
    },
    {
      key: 'infertility2',
      title: 'Male fertility problems',
      content:
        ' If the male partner has a low sperm count or poor sperm quality, IVF may be recommended. IVF can help in such cases by fertilizing the eggs with the sperm in a controlled environment making fertilization possible.',
    },
    {
      key: 'infertility3',
      title: 'Unexplained infertility',
      content: 'If the cause of infertility is unknown, IVF may be recommended..',
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
        ' If one or both partners have any genetic disorders that they are afraid of passing on to their child, IVF can be the answer to their problems. With IVF treatment, they can perform preimplantation genetic testing, wherein the embryos can be tested for genetic disorders, and only the healthiest embryos will be transferred to the woman’s uterus.',
    },
    {
      key: 'infertility7',
      title: 'Advanced maternal age',
      content:
        ' As a woman gets older, her fertility decreases, and IVF may be recommended for women over the age of 35 who are trying to get pregnant.',
    },
  ];

  return (
    <section
      ref={ref}
      id='ivf-and-its-indications'
      className='mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:my-10 lg:max-w-7xl lg:px-8'
    >
      <h2 className='mt-10 text-left font-heading text-2xl font-extrabold tracking-tight text-brandPurpleDark sm:text-4xl lg:text-center lg:text-5xl'>
        Who Should Look for IVF Treatment?
      </h2>
      <div className='mx-auto max-w-7xl px-3'>
        <div className='py-3 lg:pt-8'>
          <div className='font-content'>
            <div className='pb-4'>
              First step towards infertility is correct diagnosis and NOT treatment. Some common
              reasons for recommending IVF include:
            </div>
          </div>
        </div>
      </div>

      <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:m-6'>
        {infertilityData.map((data, index) => {
          const contentArray = data.content
            .split('.')
            .map((item) => item.trim())
            .filter((item) => item !== '');

          return (
            <div key={index} className='rounded-lg bg-gray-100 p-6 shadow-lg hover:shadow-2xl'>
              <div className='text-lg font-semibold text-brandBrown'>{data.title}</div>
              <div className='mb-3 mt-1 h-1 w-1/4 rounded bg-brandBrown'></div>
              {
                <ol className='list-[lower-alpha] pl-5 text-base'>
                  {contentArray.map((point, idx) => (
                    <li key={idx}>{point}.</li>
                  ))}
                </ol>
              }
            </div>
          );
        })}
      </div>

      <CommonCta classname='my-10' />
      <WhatIsIvf />
    </section>
  );
});
IvfIndications.displayName = 'IvfIndications';
export default IvfIndications;
