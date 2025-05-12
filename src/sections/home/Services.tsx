'use client';

import { TreatmentsData } from '@/components/constants/services';
import Image from 'next/image';
import { forwardRef, useState, useCallback, useMemo } from 'react';
import { Dialog, DialogPanel, Transition, TransitionChild } from '@headlessui/react';
import dynamic from 'next/dynamic';

const CommonCta = dynamic(() => import('@/components/CommonCta'), {
  ssr: false,
  loading: () => <div className='py-4 text-center text-white'>Loading...</div>,
});

const Services = forwardRef<HTMLElement>((_, ref) => {
  const [isOpen, setIsOpen] = useState(false);
  const [content, setContent] = useState<string[]>([]);
  const [hoveredId, setHoveredId] = useState<string | null>(null);

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

      <div className='flex flex-wrap justify-center gap-6'>
        {treatments.map((treatment) => (
          <div
            key={treatment.id}
            className='group relative flex h-48 w-40 flex-col items-center justify-center overflow-hidden rounded-xl bg-white shadow-md transition-transform duration-300 hover:scale-105 md:h-48 md:w-72'
            title={treatment.name}
            onMouseEnter={() => setHoveredId(treatment.id)}
            onMouseLeave={() => setHoveredId(null)}
            onClick={() => handleTreatmentClick(treatment.content)}
          >
            <div className='absolute inset-0 origin-center scale-x-0 bg-brandPurpleDark transition-transform duration-700 group-hover:scale-x-110' />

            <Image
              src={hoveredId === treatment.id ? treatment.icon : treatment.icon1}
              alt={treatment.name}
              width={104}
              height={104}
              loading='lazy'
              className='z-10 transition-transform duration-500 group-hover:scale-110'
            />

            <p className='relative z-10 mt-2 text-center text-sm font-semibold text-brandPurpleDark transition-colors duration-500 group-hover:text-white md:text-lg'>
              {treatment.name}
            </p>
          </div>
        ))}
      </div>

      {/* Modal */}
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

            <div className='fixed inset-0 overflow-scroll'>
              <div className='mx-auto mt-20 flex max-w-4xl items-center justify-center px-4 text-center'>
                <TransitionChild
                  as='div'
                  enter='ease-out duration-300'
                  enterFrom='opacity-0 scale-95'
                  enterTo='opacity-100 scale-100'
                  leave='ease-in duration-200'
                  leaveFrom='opacity-100 scale-100'
                  leaveTo='opacity-0 scale-95'
                >
                  <DialogPanel className='transform overflow-hidden rounded bg-gray-50 px-4 py-6 text-left shadow-xl transition-all md:px-6'>
                    <div>
                      {content.map((item, index) => (
                        <div key={index} className='my-4 text-gray-700'>
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

      <CommonCta classname='mt-8' />
    </section>
  );
});

Services.displayName = 'Services';
export default Services;
