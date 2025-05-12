'use client';

import { forwardRef, useMemo } from 'react';
import dynamic from 'next/dynamic';
import { services } from '@/components/constants/fertilityServices';

const CommonCta = dynamic(() => import('@/components/CommonCta'), {
  ssr: false,
  loading: () => <div className='h-12 text-center text-brandPurpleDark'>Loading CTA...</div>,
});

const CausesOfInfertility = forwardRef<HTMLElement>((_, ref) => {
  const serviceList = useMemo(() => services, []);

  return (
    <section ref={ref} id='causes-of-infertility' className='bg-white px-6 py-10 lg:px-14 lg:py-16'>
      <h2 className='mb-6 text-center text-2xl font-bold text-brandPurpleDark md:text-3xl lg:text-4xl'>
        Causes of Infertility – Understanding Key Factors
      </h2>

      <div className='text-brandDark space-y-6 font-content text-base leading-relaxed lg:text-lg'>
        <p>
          Infertility arises from various factors affecting both men and women, including hormonal
          imbalances, ovulation disorders, uterine or fallopian tube abnormalities, sperm issues,
          and age-related concerns. Lifestyle choices like smoking, excessive alcohol intake,
          obesity, and stress can further impact fertility. Medical conditions such as
          endometriosis, PCOS, and genetic disorders also contribute to challenges in conception.
        </p>

        <p>
          At our IVF Centre, we recognize the emotional and physical toll of infertility. Our expert
          team provides comprehensive assessments and advanced diagnostics to identify underlying
          causes, ensuring timely intervention for better treatment outcomes.
        </p>

        <p className='text-center text-lg font-bold text-brandBrown md:text-xl'>
          Take the first step towards parenthood with our cutting-edge fertility solutions—where
          hope meets expert care.
        </p>

        <p className='text-center'>
          We partner with GarbhaGudi IVF Centre, which is equipped with state-of-the-art
          infrastructure and advanced technology to address the growing problem of infertility
          through:
        </p>
      </div>

      <ul className='text-brandDark mt-6 list-inside list-disc space-y-4 px-4 font-content text-base lg:px-16'>
        {serviceList.map((service) => (
          <li key={service.id}>
            <strong className='text-brandPurpleDark'>
              {service.id}. {service.title}
            </strong>
            : {service.description}
          </li>
        ))}
      </ul>

      <div className='mt-10'>
        <CommonCta classname='mx-auto' />
      </div>
    </section>
  );
});

CausesOfInfertility.displayName = 'CausesOfInfertility';
export default CausesOfInfertility;
