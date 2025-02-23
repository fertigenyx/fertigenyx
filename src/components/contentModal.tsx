import { Dialog, DialogPanel, Transition, TransitionChild } from '@headlessui/react';
import { useState } from 'react';

export default function ContentModal({ title, content, classname, heading }) {
  const [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <div>
        <button type='button' onClick={openModal} className={classname}>
          {title}
        </button>
      </div>

      <Transition appear show={isOpen} as={'div'}>
        <Dialog as='div' className='relative z-10' onClose={closeModal}>
          <TransitionChild
            as={'div'}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <div className='fixed inset-0 bg-black bg-opacity-25'></div>
          </TransitionChild>

          <div className='fixed inset-0 overflow-y-scroll'>
            <div className='mx-auto mt-24 flex max-w-lg items-center justify-center text-center lg:min-h-[60vh] lg:max-w-5xl'>
              <TransitionChild
                as={'div'}
                enter='ease-out duration-300'
                enterFrom='opacity-0 scale-95'
                enterTo='opacity-100 scale-100'
                leave='ease-in duration-200'
                leaveFrom='opacity-100 scale-100'
                leaveTo='opacity-0 scale-95'
              >
                <DialogPanel className='-mt-5 w-full transform cursor-pointer overflow-hidden rounded bg-gray-50 px-3 align-middle opacity-95 shadow-xl transition-all lg:px-6'>
                  <h1 className='pb-2 pt-6 text-center font-heading text-xl font-bold uppercase text-brandBrown underline'>
                    {heading}
                  </h1>
                  <div>
                    {content.map((item, index) => (
                      <div key={index}>{item}</div>
                    ))}
                  </div>
                  <div
                    className='mx-auto my-4 hidden w-20 cursor-pointer items-center justify-center rounded-lg bg-brandPurpleDark px-3 py-1 font-semibold text-white sm:block'
                    onClick={closeModal}
                  >
                    Close
                  </div>
                  <div
                    className='mx-auto my-4 flex w-20 cursor-pointer items-center justify-center rounded-lg bg-brandPurpleDark px-3 py-1 font-semibold text-white sm:hidden'
                    onClick={closeModal}
                  >
                    Close
                  </div>
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
