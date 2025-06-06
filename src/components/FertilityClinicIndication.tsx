import CommonCta from '@/components/CommonCta';
import { useMemo } from 'react';

const FertilityClinicIndication = () => {
  const fertilityClinicData = useMemo(
    () => [
      {
        key: 'infertility1',
        title: 'Our specialised Features are:',
        content:
          'Advanced technology & labs.Experienced fertility doctors.High success rates.Ethical and compassionate care.Holistic Approach',
      },
    ],
    []
  );
  return (
    <section className='bg-white px-6 py-10 lg:px-14 lg:py-16'>
      <h2 className='mb-6 text-center text-2xl font-bold text-brandPurpleDark md:text-3xl lg:text-4xl'>
        What is a Fertility Clinic?
      </h2>

      <div className='space-y-6 font-content text-base leading-relaxed lg:text-lg'>
        <p>
          A fertility clinic is a specialized healthcare center that helps couples who are
          struggling to conceive. These clinics offer testing, counselling, and treatments like IUI,
          IVF, egg freezing, and more.
        </p>
        <h3 className='text-center text-xl font-extrabold md:text-2xl'>
          Why Choose FertiGenyx, Media Partner to GarbhaGudi IVF Centre?
        </h3>

        <p>
          Searching for the best IVF centre in Bangalore or a reliable fertility clinic near me?
          FertiGenyx, the trusted digital media partner to GarbhaGudi IVF Centre, is here to guide
          you. With 8 advanced fertility hospitals in Bangalore—located at HanumanthNagar, Kalyan
          Nagar, Nagarbhavi, Electronic City, New BEL Road, Jayanagar, Yelahanka, and
          Marathahalli—GarbhaGudi stands out as the best fertility centre for couples seeking expert
          care and support.
        </p>
        <p>
          FertiGenyx, a digital marketing partner to GarbhaGudi IVF Centre, is committed to
          connecting aspiring parents with top-rated fertility clinics in Bangalore. Anyone who are
          looking for an IVF hospital in Bangalore, an infertility clinic near me, or personalized
          fertility solutions, can contact us. We help you to get world-class treatment at all our
          centres.
        </p>
        <p>
          Our partner has modern fertility care that is scientific, and the treatment is given with
          compassion. Treatments like IVF, IUI, and embryo freezing are carefully designed to
          increase the chances of conception, taking care of the well-being of both mother and baby.
          At FertiGenyx, we make it easier to find the fertility hospital nearby that’s right for
          your journey to parenthood.
        </p>
      </div>
      <div className='mt-6 grid w-full grid-cols-1 gap-6 md:w-3/4 lg:gap-8'>
        {fertilityClinicData.map(({ key, title, content }) => {
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

export default FertilityClinicIndication;
