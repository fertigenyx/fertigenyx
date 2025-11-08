'use client';

import { forwardRef, useMemo, useRef, useState, useCallback } from 'react';
import { Swiper as SwiperClass } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import Image from 'next/image';
import { TreatmentsData } from '@/components/constants/services';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import { Dialog, Transition, TransitionChild } from '@headlessui/react';
import dynamic from 'next/dynamic';

import 'swiper/css';
import 'swiper/css/navigation';

const CommonCta = dynamic(() => import('@/components/CommonCta'), {
  ssr: false,
  loading: () => <div className='py-4 text-center text-white'>Loading CTA...</div>,
});

// ✅ Show full cards only — no peeking
const breakpoints = {
  0: { slidesPerView: 1, spaceBetween: 12 },
  640: { slidesPerView: 2, spaceBetween: 20 },
  1024: { slidesPerView: 3, spaceBetween: 25 },
  1280: { slidesPerView: 3, spaceBetween: 30 },
};

const Services = forwardRef<HTMLElement>((_, ref) => {
  const swiperRef = useRef<SwiperClass | null>(null);
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [content, setContent] = useState<string[]>([]);

  const openModal = useCallback(() => setIsOpen(true), []);
  const closeModal = useCallback(() => setIsOpen(false), []);

  const handleTreatmentClick = useCallback(
    (treatmentContent: string[]) => {
      setContent(treatmentContent);
      openModal();
    },
    [openModal]
  );

  const treatments = useMemo(() => TreatmentsData || [], []);

  return (
    <section
      ref={ref}
      id='services-offered'
      className='flex flex-col items-center justify-center px-4 pb-10 md:px-8'
    >
      <h2 className='my-6 text-center text-2xl font-bold text-brandPurpleDark md:text-3xl'>
        Advanced Fertility Services
      </h2>

      <div className='relative w-full max-w-7xl'>
        {/* Navigation Buttons */}
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          className='absolute left-2 top-1/2 z-10 flex -translate-y-1/2 items-center justify-center rounded-full bg-[#204C6B] p-2 text-white shadow-md transition hover:bg-[#163a53] sm:p-3'
        >
          <HiChevronLeft className='text-xl sm:text-2xl' />
        </button>

        <Swiper
          modules={[Navigation, Autoplay]}
          onBeforeInit={(swiper) => (swiperRef.current = swiper)}
          breakpoints={breakpoints}
          loop={false}
          centeredSlides={false}
          spaceBetween={20}
          className='px-2 py-4'
          autoplay={{ delay: 3000, disableOnInteraction: false }}
        >
          {treatments.map((treatment) => (
            <SwiperSlide key={treatment.id}>
              <div
                className='group relative mx-auto flex h-48 w-48 cursor-pointer flex-col items-center justify-center overflow-hidden rounded-xl bg-white shadow-md transition-transform duration-300 hover:scale-105 sm:h-56 sm:w-56 md:h-60 md:w-64 lg:h-64 lg:w-72'
                onMouseEnter={() => setHoveredId(treatment.id)}
                onMouseLeave={() => setHoveredId(null)}
                onClick={() => handleTreatmentClick(treatment.content)}
                title={treatment.name}
              >
                {/* Hover overlay (only on larger screens) */}
                <div className='absolute inset-0 hidden origin-center scale-x-0 bg-brandPurpleDark transition-transform duration-700 group-hover:scale-x-110 sm:block' />

                <Image
                  src={hoveredId === treatment.id ? treatment.icon : treatment.icon1}
                  alt={treatment.name}
                  width={104}
                  height={104}
                  className='z-10 transition-transform duration-500 group-hover:scale-110'
                  loading='lazy'
                />

                <p className='relative z-10 mt-3 text-center text-sm font-semibold text-brandPurpleDark transition-colors duration-500 group-hover:text-white sm:text-base sm:group-hover:text-white'>
                  {treatment.name}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <button
          onClick={() => swiperRef.current?.slideNext()}
          className='absolute right-2 top-1/2 z-10 flex -translate-y-1/2 items-center justify-center rounded-full bg-[#204C6B] p-2 text-white shadow-md transition hover:bg-[#163a53] sm:p-3'
        >
          <HiChevronRight className='text-xl sm:text-2xl' />
        </button>
      </div>

      {/* Modal */}
      {isOpen && (
        <Transition appear show={isOpen} as='div'>
          <Dialog as='div' className='relative z-20' onClose={closeModal}>
            <TransitionChild
              as='div'
              enter='ease-out duration-300'
              enterFrom='opacity-0'
              enterTo='opacity-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100'
              leaveTo='opacity-0'
            >
              <div className='fixed inset-0 bg-black bg-opacity-40' />
            </TransitionChild>

            <div className='fixed inset-0 overflow-y-auto p-4 sm:p-6'>
              <div className='mx-auto mt-16 w-full max-w-md rounded-lg bg-white p-6 text-left shadow-lg sm:max-w-lg'>
                <div className='max-h-[70vh] overflow-y-auto pr-1 sm:pr-2'>
                  {content.map((item, index) => (
                    <div
                      key={index}
                      className='my-3 text-sm leading-relaxed text-gray-700 sm:text-base'
                    >
                      {item}
                    </div>
                  ))}
                </div>

                <button
                  className='mx-auto mt-6 block w-28 rounded bg-brandPurpleDark px-4 py-2 text-sm font-semibold text-white transition hover:bg-brandPurple'
                  onClick={closeModal}
                >
                  Close
                </button>
              </div>
            </div>
          </Dialog>
        </Transition>
      )}

      <CommonCta classname='mt-10' />
    </section>
  );
});

Services.displayName = 'Services';
export default Services;
