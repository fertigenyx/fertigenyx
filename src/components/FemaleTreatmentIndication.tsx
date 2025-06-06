import CommonCta from '@/components/CommonCta';
import { useMemo } from 'react';

const FemaleTreatmentIndication = () => {
  const maleFertilityData = useMemo(
    () => [
      {
        key: 'infertility1',
        title: 'Common Causes',
        content:
          'PCOS (Polycystic Ovary Syndrome).Thyroid disorders.Endometriosis.Blocked fallopian tubes.Hormonal imbalances.Age (fertility decreases after 35)',
      },
      {
        key: 'infertility2',
        title: 'Symptoms',
        content: 'Irregular periods.Painful menstruation.No periods.Difficulty getting pregnant',
      },
    ],
    []
  );
  return (
    <section className='bg-white px-6 py-10 lg:px-14 lg:py-16'>
      <h2 className='mb-6 text-center text-2xl font-bold text-brandPurpleDark md:text-3xl lg:text-4xl'>
        What is Female Fertility?
      </h2>

      <div className='space-y-6 font-content text-base leading-relaxed lg:text-lg'>
        <p>
          A woman is fertile if she can conceive and bring a pregnancy through to term. Female
          fertility depends on several factors, like age, hormone levels, ovarian function, and
          overall health.
        </p>
        <h3 className='text-center text-xl font-extrabold md:text-2xl'>
          What Is the Process of Female Fertility Treatment in Bangalore?
        </h3>
        <h4 className='text-base font-bold text-brandBrown md:text-lg'>
          Ways to Attain Parenthood with FertiGenyx
        </h4>
        <p>
          <strong>FertiGenyx,</strong> a trusted digital partner to GarbhaGudi IVF Centre, for
          fertility information and awareness, will guide you through the process of female
          fertility treatment. Ours is a leading name in female fertility care in Bangalore.
        </p>
        <p>
          Understanding the cause of female infertility is the first step toward parenthood. At
          GarbhaGudi’s world-class centres, a detailed evaluation is carried out by experienced
          female fertility specialists. Here review of your medical history, physical exams, hormone
          testing, ultrasound scans, and other advanced diagnostics is carried out to determine the
          root cause of the issue.
        </p>
        <p>
          Our Female Fertility Experts in Bangalore are experienced in giving treatment depending on
          the particular fertility needs of a patient. After conducting necessary tests and
          depending on the results, treatments may include ovulation induction through injections,
          IUI (Intrauterine Insemination), IVF (In Vitro Fertilization), or ICSI (Intracytoplasmic
          Sperm Injection).
        </p>
        <h4 className='text-base font-bold text-brandBrown md:text-lg'>
          How does GarbhaGudi, a Media partner to FertiGenyx, help?
        </h4>
        <p>
          <strong>FertiGenyx, a digital partner to GarbhaGudi,</strong> ensures that women are
          empowered throughout their fertility journey. Through GarbhaGudi’s 8 state-of-the-art
          centres located across Bangalore—including HanumanthNagar, Kalyan Nagar, Nagarbhavi,
          Electronic City, New BEL Road, Jayanagar, Yelahanka, and Marathahalli—patients receive
          compassionate care and the latest in fertility treatments.
        </p>
        <p>
          Couples who are suffering from infertility can find it emotionally and physically
          challenging. Our centres are designed to support you in clear terms, the problems faced by
          the couple, and guide them to make informed decisions every step of the way.
        </p>
        <p>
          Let <strong>FertiGenyx</strong> be your contact point in navigating fertility treatments
          in Bangalore.
          <strong>GarbhaGudi IVF Centre</strong> provides expert medical care to help you realize
          your dream of becoming a mother.
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

export default FemaleTreatmentIndication;

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
