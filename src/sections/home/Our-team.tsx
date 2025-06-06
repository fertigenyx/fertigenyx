import { useMemo, useRef } from 'react';
import { Swiper as SwiperClass } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import Image from '@/components/image';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import ContentModal from '@/components/contentModal';
import 'swiper/css';
import 'swiper/css/navigation';
import dynamic from 'next/dynamic';
import { usePathname } from 'next/navigation';
const CommonCta = dynamic(() => import('@/components/CommonCta'), {
  ssr: false,
  loading: () => <div className='py-4 text-center text-white'>Loading CTA...</div>,
});

const breakpoints = {
  0: { slidesPerView: 1, spaceBetween: 10 },
  768: { slidesPerView: 2, spaceBetween: 20 },
  1024: { slidesPerView: 4, spaceBetween: 20 },
};

const FertilitySpecialists = ({ doctors }) => {
  const swiperRef = useRef<SwiperClass | null>(null);
  const path = usePathname();
  const doctorsData = useMemo(() => doctors, []);
  const isLP = useMemo(() => {
    return path?.includes('/lp');
  }, [path]);
  return (
    <section
      className='w-[20em] bg-gradient-to-br to-purple-100 pb-6 lg:w-full'
      id='fertility-specialists'
    >
      <div className='mx-auto max-w-7xl px-3 pb-12'>
        <div className='pb-12 text-center'>
          <h1 className='my-8 font-heading text-3xl font-bold text-brandPurpleDark sm:text-4xl'>
            Meet our Fertility Specialists
          </h1>
          <p className='mx-auto max-w-prose'>
            Our team of fertility specialists have been known for their extensive clinical
            experience and research contributions, as well as for their success in treating the most
            challenging fertility cases.
          </p>
        </div>

        <div className='mx-auto flex max-w-7xl flex-row items-center justify-center'>
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className='absolute left-0 z-10 ml-4 rounded-full bg-[#204C6B] p-2 text-white lg:left-10'
          >
            <HiChevronLeft className='text-2xl' />
          </button>

          <Swiper
            modules={[Navigation]}
            onBeforeInit={(swiper) => (swiperRef.current = swiper)}
            breakpoints={breakpoints}
            loop
            spaceBetween={20}
          >
            {doctorsData?.map((doctor, index) => (
              <SwiperSlide key={doctor?.id}>
                <div className='flex flex-col items-center justify-center rounded-xl px-2 text-center'>
                  <div className='relative h-52 w-52'>
                    <div className='absolute inset-0 animate-rotate rounded-full bg-gradient-to-br from-brandBrown/80 to-[#204C6B]/40 bg-[length:400%]' />
                    <Image
                      className='z-10 rounded-full shadow-xl drop-shadow-xl'
                      src={doctor?.image.url}
                      alt={doctor?.imageAlt || doctor?.name}
                      width={208}
                      height={208}
                      loading={index === 0 ? 'eager' : 'lazy'}
                      quality={25}
                      priority={index === 0}
                    />
                  </div>
                  <div className='mt-4 h-28 space-y-1'>
                    <h3 className='text-lg font-medium'>{doctor?.name}</h3>
                    <p className='text-xs text-brandPurpleDark'>{doctor?.qualification}</p>
                    <p className='text-sm font-semibold text-brandBrown'>{doctor?.designation}</p>
                  </div>
                  <ContentModal
                    title='Read More'
                    classname='font-content text-brandPurpleDark text-base px-3 py-1.5 rounded-lg font-medium hover:text-brandBrown border-2 border-brandPurpleDark hover:border-brandBrown transition-all duration-300 ease-linear'
                    content={doctor?.bio?.raw}
                    heading={doctor?.name}
                    slug={doctor?.slug}
                    isLP={isLP}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <button
            onClick={() => swiperRef.current?.slideNext()}
            className='absolute right-0 z-10 mr-4 rounded-full bg-[#204C6B] p-2 text-white lg:right-10'
          >
            <HiChevronRight className='text-2xl' />
          </button>
        </div>
      </div>
      <CommonCta />
    </section>
  );
};
export default FertilitySpecialists;
