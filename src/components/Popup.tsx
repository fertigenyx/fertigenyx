import { Dialog, Transition, TransitionChild } from '@headlessui/react';
import { useState } from 'react';
import { HiX } from 'react-icons/hi';
import ContactForm from './ContactForm';

export default function Popup({ title, btnClassName }) {
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
        <button type='button' onClick={openModal} className={btnClassName}>
          {title}
        </button>
      </div>

      <Transition appear show={isOpen} as={'div'}>
        <Dialog as='div' className='fixed inset-0 z-[9999]' onClose={closeModal}>
          <TransitionChild
            as={'div'}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <div className='fixed inset-0 bg-black bg-opacity-80'></div>
          </TransitionChild>

          <div className='fixed inset-0 flex items-center justify-center'>
            <div className='mx-auto flex max-w-lg items-start justify-start text-center'>
              <TransitionChild
                as={'div'}
                enter='ease-out duration-300'
                enterFrom='opacity-0 scale-95'
                enterTo='opacity-100 scale-100'
                leave='ease-in duration-200'
                leaveFrom='opacity-100 scale-100'
                leaveTo='opacity-0 scale-95'
              >
                <Dialog.Panel className='flex w-full max-w-lg transform flex-col items-start justify-start overflow-hidden rounded-lg shadow-lg transition-all'>
                  <ContactForm />
                  <div onClick={closeModal} className='absolute right-3 top-3 cursor-pointer'>
                    <HiX className='block h-6 w-6 text-black hover:text-gray-500 dark:text-gray-300 dark:hover:text-gray-100' />
                  </div>
                </Dialog.Panel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
