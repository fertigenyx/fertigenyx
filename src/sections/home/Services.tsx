'use client';

import { forwardRef, useMemo, useRef, useState, useCallback } from 'react';
import { Swiper as SwiperClass } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import Image from 'next/image';
import { TreatmentsData } from '@/components/constants/services';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import { Dialog, DialogPanel, Transition, TransitionChild } from '@headlessui/react';
import dynamic from 'next/dynamic';

import 'swiper/css';
import 'swiper/css/navigation';

const CommonCta = dynamic(() => import('@/components/CommonCta'), {
  ssr: false,
  loading: () => <div className='py-4 text-center text-white'>Loading CTA...</div>,
});

const breakpoints = {
  0: { slidesPerView: 1, spaceBetween: 10 },
  640: { slidesPerView: 2, spaceBetween: 15 },
  1024: { slidesPerView: 3, spaceBetween: 20 },
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
      className='flex flex-col items-center justify-center px-4 pb-8'
    >
      <h2 className='my-6 text-2xl font-bold text-brandPurpleDark md:text-3xl'>
        Advanced Fertility Services
      </h2>
      <div className='mx-auto max-w-7xl px-4'>
        <div className='flex items-center justify-center'>
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
            {treatments.map((treatment) => (
              <SwiperSlide key={treatment.id}>
                <div
                  className='group relative mx-auto flex h-60 w-60 flex-col items-center justify-center overflow-hidden rounded-xl bg-white shadow-md transition-transform duration-300 hover:scale-105 md:h-64 md:w-72'
                  onMouseEnter={() => setHoveredId(treatment.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  onClick={() => handleTreatmentClick(treatment.content)}
                  title={treatment.name}
                >
                  <div className='absolute inset-0 origin-center scale-x-0 bg-brandPurpleDark transition-transform duration-700 group-hover:scale-x-110' />

                  <Image
                    src={hoveredId === treatment.id ? treatment.icon : treatment.icon1}
                    alt={treatment.name}
                    width={104}
                    height={104}
                    className='z-10 transition-transform duration-500 group-hover:scale-110'
                    loading='lazy'
                  />

                  <p className='relative z-10 mt-3 text-center text-base font-semibold text-brandPurpleDark transition-colors duration-500 group-hover:text-white'>
                    {treatment.name}
                  </p>
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

        {isOpen && (
          <Transition appear show={isOpen} as='div'>
            <Dialog as='div' className='relative z-10' onClose={closeModal}>
              <TransitionChild
                as='div'
                enter='ease-out duration-300'
                enterFrom='opacity-0'
                enterTo='opacity-100'
                leave='ease-in duration-200'
                leaveFrom='opacity-100'
                leaveTo='opacity-0'
              >
                <div className='fixed inset-0 bg-black bg-opacity-25' />
              </TransitionChild>

              <div className='fixed inset-0 overflow-y-auto'>
                <div className='mx-auto mt-20 flex max-w-3xl items-center justify-center px-4 text-center'>
                  <TransitionChild
                    as='div'
                    enter='ease-out duration-300'
                    enterFrom='opacity-0 scale-95'
                    enterTo='opacity-100 scale-100'
                    leave='ease-in duration-200'
                    leaveFrom='opacity-100 scale-100'
                    leaveTo='opacity-0 scale-95'
                  >
                    <DialogPanel className='transform overflow-hidden rounded-lg bg-gray-50 px-4 py-6 text-left shadow-xl transition-all md:px-6'>
                      <div>
                        {content.map((item, index) => (
                          <div key={index} className='my-3 text-gray-700'>
                            {item}
                          </div>
                        ))}
                      </div>
                      <button
                        className='mx-auto mt-6 block w-24 rounded bg-brandPurpleDark px-4 py-2 text-sm font-semibold text-white hover:bg-brandPurple'
                        onClick={closeModal}
                      >
                        Close
                      </button>
                    </DialogPanel>
                  </TransitionChild>
                </div>
              </div>
            </Dialog>
          </Transition>
        )}
      </div>

      <CommonCta classname='mt-10' />
    </section>
  );
});

Services.displayName = 'Services';
export default Services;
