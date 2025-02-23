import CommonCta from '@/components/CommonCta';
import Image from 'next/image';
import { forwardRef } from 'react';

const WhatIsIvf = forwardRef<HTMLElement>((_, ref) => {
  return (
    <section id={'what-is-ivf'} ref={ref}>
      <div className='mt-12 scroll-m-16 scroll-smooth' id='know-more'>
        <div className='relative bg-transparent dark:bg-gray-800 lg:pt-4'>
          <div className='container relative m-auto px-3 md:px-12 lg:px-6'>
            <h2 className='mx-auto font-heading text-2xl font-black text-brandPurpleDark lg:text-center lg:text-5xl'>
              What is IVF and how does it work ?
            </h2>{' '}
            <div className='grid grid-cols-1 items-center justify-center text-base lg:grid-cols-2'>
              <div className='mx-auto ml-0 text-left font-content md:max-w-lg lg:max-w-2xl'>
                <p className=''>
                  To conceive. IVF or In Vitro Fertilization is one of the more widely known types
                  of Assisted Reproductive Techniques (ART). It involves retrieving eggs from the
                  woman&apos;s ovaries and fertilizing them with sperm in a laboratory dish. The
                  resulting embryos are then transferred back into the woman&apos;s uterus in the
                  hope of achieving a successful pregnancy. 
                  <br />
                  <br />
                  IVF treatment in Bangalore is a multi-step process that involves several stages,
                  including ovarian stimulation, egg retrieval, fertilization, embryo culture, and
                  embryo transfer. The process is carefully monitored by our team of experienced
                  fertility specialists, who work closely with patients to customize a treatment
                  plan that meets their unique needs and maximizes their chances of success.
                </p>

                <br />
                <div>Here is a general overview of the steps involved in a typical IVF cycle:</div>
              </div>
              <div className='-right-0 mx-auto mt-4 max-w-[50rem] lg:p-4'>
                <div className='relative'>
                  <Image
                    src='https://res.cloudinary.com/garbhagudiivf/image/upload/v1722510346/Misc/PNG_25_yoa08y_1_cr2fpg.png'
                    className='relative w-full bg-white/10 dark:brightness-75 dark:invert'
                    alt='Process of IVF Treatment in Bangalore'
                    loading='lazy'
                    width={100}
                    height={100}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CommonCta />
    </section>
  );
});
WhatIsIvf.displayName = 'WhatIsIvf';
export default WhatIsIvf;
