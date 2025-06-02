import CommonCta from '@/components/CommonCta';
import { useMemo } from 'react';

const FerilitySpecialistIndication = () => {
  const fertilitySpecialistData = useMemo(
    () => [
      {
        key: 'infertility1',
        title: 'When to See a Fertility Specialist?',
        content:
          "If you're below 35 years of age and trying to conceive for over 12 months.If you're over 35 years of age and have been trying to conceive for over 6 months.Irregular periods or known medical issues.Recurrent miscarriages.PCOS/PCOD Symptoms",
      },
    ],
    []
  );
  return (
    <section className='bg-white px-6 py-10 lg:px-14 lg:py-16'>
      <h2 className='mb-6 text-center text-2xl font-bold text-brandPurpleDark md:text-3xl lg:text-4xl'>
        Who Are Fertility Specialists?
      </h2>

      <div className='text-brandDark space-y-6 font-content text-base leading-relaxed lg:text-lg'>
        <p>
          Doctors trained in diagnosing and treating infertility are Fertility Specialists.
          Different methods are used to identify the underlying cause of infertility. Scans, blood
          tests, and open communication with the patients help the specialist to proceed with
          appropriate treatment or prescribe medications. Assisted reproductive techniques like IUI
          and IVF help couples who are suffering from infertility.
        </p>
        <h3 className='text-center text-xl font-extrabold md:text-2xl'>
          Best Fertility Specialist in Bangalore
        </h3>
        <h4 className='text-base font-bold text-brandBrown md:text-lg'>
          Expert Care for Your Journey to Parenthood
        </h4>
        <p>
          Bangalore is a city well known for its exceptional medical care. Fertility treatment is
          available here as the city has the most trusted and experienced fertility specialists in
          India. Our experts treat patients using advanced technology, addressing a wide range of
          challenges.{' '}
          <strong>
            {' '}
            Male and female infertility, PCOS, endometriosis, recurrent pregnancy loss,
          </strong>{' '}
          and more such issues related to infertility are treated at our centre with utmost care.
        </p>
        <p>
          Our fertility specialists take the time to understand each couple’s unique medical
          history, emotional concerns, and reproductive goals and give{' '}
          <strong>personalized treatment.</strong> Their approach is always patient-centric,
          ensuring compassionate care combined with scientific solutions.
        </p>
        <p>
          Our media partner, GarbhaGudi IVF Centre in Bangalore, is the best fertility clinic
          equipped with state-of-the-art infrastructure and offers the latest assisted reproductive
          technologies such as{' '}
          <strong>
            {' '}
            IUI (Intrauterine Insemination), IVF (In Vitro Fertilization), ICSI (Intracytoplasmic
            Sperm Injection), and egg freezing.
          </strong>
        </p>
        <p>
          FertiGenyx, Media Partner to <strong>GarbhaGudi IVF Centre,</strong> is a leading name in
          fertility care, having a team of highly qualified and experienced fertility specialists
          with over 15 years of experience. GarbhaGudi is known for delivering excellent success
          rates and personalized treatment plans that cater to both simple and complex fertility
          issues.
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
      <div className='my-6 grid w-full grid-cols-1 gap-6 md:w-3/4 lg:gap-8'>
        {fertilitySpecialistData.map(({ key, title, content }) => {
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
              <ol className='text-brandDark list-decimal space-y-1 pl-5 text-sm'>
                {contentPoints.map((point, idx) => (
                  <li key={idx}>{point}.</li>
                ))}
              </ol>
            </article>
          );
        })}
      </div>
      <div className='text-brandDark space-y-2 font-content text-base leading-relaxed lg:text-lg'>
        <h4 className='text-base font-bold text-brandBrown md:text-lg'>
          GarbhaGudi’s Team of Experts
        </h4>
        <p>
          The fertility specialists at our centre are known for their expertise, compassionate care,
          and high success rates. They work closely with patients to design the right treatment
          plans.
        </p>
      </div>
      <div className='mt-12'>
        <CommonCta classname='mx-auto' />
      </div>
    </section>
  );
};

export default FerilitySpecialistIndication;
