'use client';
import dynamic from 'next/dynamic';
const CommonCta = dynamic(() => import('@/components/CommonCta'), {
  loading: () => <div>Loading CTA...</div>,
  ssr: false,
});
import { useMemo } from 'react';

const MaleTreatmentIndication = () => {
  const maleFertilityData = useMemo(
    () => [
      {
        key: 'infertility1',
        title: 'Causes of Male Infertility',
        content:
          'Low sperm count.Poor sperm motility.Varicocele.Hormonal imbalances.Lifestyle factors (smoking, alcohol, stress).Genetic issues',
      },
      {
        key: 'infertility2',
        title: 'How is Male Fertility Tested?',
        content:
          'Semen analysis – To check sperm count, shape, and movement.Hormone tests.Scrotal ultrasound',
      },
    ],
    []
  );
  return (
    <section className='bg-white px-6 py-10 lg:px-14 lg:py-16'>
      <h2 className='mb-6 text-center text-2xl font-bold text-brandPurpleDark md:text-3xl lg:text-4xl'>
        What is Male Fertility?
      </h2>

      <div className='space-y-6 font-content text-base leading-relaxed lg:text-lg'>
        <p>
          Male fertility is the ability of a man to cause pregnancy in a fertile female. It depends
          on healthy sperm production and proper function of the reproductive organs. Male
          infertility is treated with a variety of drugs by our fertility Specialists in Bangalore.
          Modern techniques allow Male fertility specialists to retrieve sperm directly from the
          testes. This sperm can be used for fertilization through IVF (in vitro fertilization). The
          sperm can be washed thoroughly and directly transferred into the uterus of a woman in IUI
          treatment.
        </p>
        <h3 className='text-center text-lg font-bold text-brandBrown md:text-xl'>
          Understanding the Male Reproductive System and Fertility Challenges
        </h3>
      </div>
      <div className='mt-6 space-y-6 font-content text-base leading-relaxed lg:text-lg'>
        <h4 className='text-base font-bold md:text-lg'>
          The male reproductive system consists of the following key organs:
        </h4>
        <ul className='list-inside px-2.5 text-base lg:px-5'>
          {services.map((service) => (
            <li key={service.id}>
              <strong className='text-brandPurpleDark'>
                {service?.id}. {service?.title}
              </strong>
              : {service.description}
            </li>
          ))}
        </ul>
        <p>
          All the above organs should function successfully for the delivery of healthy sperm. The
          testes play a crucial role in the production of healthy sperm. Even if healthy sperm is
          produced, there is a problem of infertility in men because it is not able to travel due to
          blockages.
        </p>
        <p>Two commonly used sperm retrieval techniques include:</p>
        <ul className='list-inside list-disc px-2.5 text-base lg:px-8'>
          <li>
            <strong>TESA (Testicular Sperm Aspiration):</strong> A minor procedure where sperm is
            extracted directly from the testicular tissue.
          </li>
          <li>
            <strong>PESA (Percutaneous Epididymal Sperm Aspiration):</strong> A method where sperm
            is retrieved from the epididymis using a fine needle.
          </li>
        </ul>
        <p>
          A Male Fertility Specialist nearby will conduct specific tests to find whether sperm
          production is happening. Then the fertility specialist will see the reasons for the
          obstruction of its absence in the semen. The specialist will use the appropriate technique
          available to retrieve the sperm. It can be used in different treatments accordingly - IUI,
          IVF, or ICSI.
        </p>
      </div>
      <div className='mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8'>
        {maleFertilityData.map(({ key, title, content }) => {
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
              <ol className='list-decimal space-y-1 pl-5 text-sm'>
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
    </section>
  );
};

export default MaleTreatmentIndication;

export const services = [
  {
    id: 1,
    title: 'Testes',
    description: 'Testicles or ‘balls’',
  },
  {
    id: 2,
    title: 'Scrotum',
    description: 'The sack or ‘scrotal sac’',
  },
  {
    id: 3,
    title: 'Vas deferens',
    description: 'Sperm duct or tube that carries sperm',
  },
  {
    id: 4,
    title: 'Epididymis',
    description: 'Sperm storage or a coiled tube on the testicle',
  },
  {
    id: 5,
    title: 'Seminal vesicles',
    description: 'Semen producers or fluid-producing glands',
  },
  {
    id: 6,
    title: 'Penis',
    description: 'Organ for reproduction or male genitalia',
  },
];
