'use client';
import dynamic from 'next/dynamic';
const CommonCta = dynamic(() => import('@/components/CommonCta'), {
  loading: () => <div>Loading CTA...</div>,
  ssr: false,
});
import { useMemo, useState } from 'react';

const IuiTreatmentIndication = () => {
  const [readMore, setReadMore] = useState(false);
  const infertilityData = useMemo(
    () => [
      {
        key: 'infertility1',
        title: 'IUI is recommended when a couple is having:',
        content:
          'Unexplained infertility.Mild male factor infertility.Cervical mucus problems.Ovulation issues',
      },
      {
        key: 'infertility2',
        title: 'The IUI Procedure',
        content:
          'Doctors monitor the ovulation cycle.Sperm is collected and washed to pick the best ones.A thin catheter is inserted, and the sperm is placed into the uterus.A pregnancy test is done after two weeks',
      },
      {
        key: 'infertility3',
        title: 'Advantages of IUI',
        content:
          'Less invasive and simpler than IVF.More affordable fertility treatment.Quick and painless procedure.Can be done with or without fertility medications.Shorter treatment cycles.Effective for certain types of infertility.The daily routine is not disturbed',
      },
      {
        key: 'infertility4',
        title: 'Why choose GarbhaGudi, the best IUI clinic in Bangalore, for IUI?',
        content:
          'With expert fertility specialists, advanced labs, and personalized care. High success rate in IUI treatments at all 8 locations in Bengaluru. Cost is affordable, and there are no hidden costs',
      },
    ],
    []
  );
  return (
    <section id='iui-and-its-indications' className='bg-white px-6 py-10 lg:px-14 lg:py-16'>
      <h2 className='mb-8 text-center font-heading text-3xl font-extrabold text-brandPurpleDark sm:text-4xl lg:text-5xl'>
        What is IUI Treatment?
      </h2>

      <div className='mx-auto mb-8 flex flex-col gap-2.5 text-justify font-content text-base leading-relaxed'>
        <p>
          IUI (Intrauterine insemination) is a simple procedure used in fertility treatment to help
          couples achieve parenthood. Healthy sperm are directly deposited into a woman&apos;s
          uterus during ovulation. The chances of sperm and the egg forming an embryo is more and
          resulting in getting pregnant. This procedure is used where a man&apos;s sperm count is
          less or its motility is restricted. It is used in cases of infertility caused by issues
          with ovulation, sperm count, or cervical mucus. It may be used alone or along with other
          fertility medications. The success rate of IUI varies depending on the individual
          patient&apos;s health conditions, and it is more successful when performed along with
          other fertility treatments.
        </p>
        {readMore && (
          <p>
            We have fertility experts nearby who are committed to giving personalised care and
            ensuring the highest success rates in IUI Treatments. Experience the joy of parenthood
            with FertiGenyx&apos;s treatment, designed to increase your chances of pregnancy in a
            natural way.
          </p>
        )}
        <div className='flex justify-center'>
          <button
            className='rounded-lg border-2 border-brandPurpleDark px-3 py-1.5 font-content text-base font-medium text-brandPurpleDark transition-all duration-300 ease-linear hover:border-brandBrown hover:text-brandBrown'
            onClick={() => setReadMore(!readMore)}
          >
            {readMore ? 'Read Less' : 'Read More'}
          </button>
        </div>
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
              <ol className='list-decimal space-y-1 pl-5 text-sm'>
                {contentPoints.map((point, idx) => (
                  <li key={idx}>{point}.</li>
                ))}
              </ol>
            </article>
          );
        })}
      </div>

      <div className='my-10 flex items-center'>
        <div className='flex-grow border-t border-gray-300'></div>
        <h3 className='mx-4 text-center font-heading text-xl font-bold text-brandPurpleDark sm:text-2xl lg:text-3xl'>
          Who Should Go for IUI?
        </h3>
        <div className='flex-grow border-t border-gray-300'></div>
      </div>
      <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8'>
        <article className='rounded-lg bg-gray-100 p-6 shadow-md transition-shadow duration-300 hover:shadow-xl'>
          <h3 className='text-lg font-semibold text-brandBrown'>Women, if they have</h3>
          <div className='my-2 h-1 w-1/4 rounded bg-brandBrown'></div>
          <ol className='list-disc space-y-1 pl-5 text-sm'>
            <li>Ovulation problems, such as Polycystic Ovary Syndrome (PCOS).</li>
            <li>Mild endometriosis.</li>
            <li>Unexplained infertility.</li>
            <li>Cervical mucus issues that block sperm from reaching the egg.</li>
            <li>Anatomical issues cervix, which is tilted, that affect sperm movement.</li>
            <li>Allergies to semen (rare, but can be used with washed sperm).</li>
          </ol>
        </article>
        <article className='rounded-lg bg-gray-100 p-6 shadow-md transition-shadow duration-300 hover:shadow-xl'>
          <h3 className='text-lg font-semibold text-brandBrown'>
            Men who may be advised to go for IUI in the following situations:
          </h3>
          <div className='my-2 h-1 w-1/4 rounded bg-brandBrown'></div>
          <ol className='list-disc space-y-1 pl-5 text-sm'>
            <li>
              Ovulation problems, such as Polycystic Ovary Syndrome (PCOS).
              <ul className='list-disc space-y-1 pl-5 text-sm'>
                <li>Low sperm count</li>
                <li>Poor sperm motility</li>
                <li>Abnormal sperm shape (morphology)</li>
              </ul>
            </li>
            <li>Ejaculation problems, such as premature ejaculation or erectile dysfunction.</li>
            <li>Semen allergy (if using washed sperm).</li>
            <li>Use of frozen sperm.</li>
          </ol>
        </article>
      </div>

      <div className='mt-12'>
        <CommonCta classname='mx-auto' />
      </div>
    </section>
  );
};

export default IuiTreatmentIndication;
