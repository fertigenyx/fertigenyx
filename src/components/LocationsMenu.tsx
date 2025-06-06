import { LocationsDB } from '@/db/Locations';
import { Popover, PopoverButton, PopoverPanel, Transition } from '@headlessui/react';
import Link from 'next/link';
import { Fragment } from 'react';
import { HiChevronDown } from 'react-icons/hi';

export function LocationsMenu() {
  return (
    <Popover className='relative'>
      {({ close }) => (
        <>
          <PopoverButton
            className={` ${
              close ? 'w-screen text-left outline-none sm:w-full' : 'text-opacity-90 outline-none'
            } `}
          >
            <div>
              Locations <HiChevronDown className='inline-block' />
            </div>
          </PopoverButton>
          <Transition
            as={Fragment}
            enter='transition ease-out duration-200'
            enterFrom='opacity-0 translate-y-1'
            enterTo='opacity-100 translate-y-0'
            leave='transition ease-in duration-150'
            leaveFrom='opacity-100 translate-y-0'
            leaveTo='opacity-0 translate-y-1'
          >
            <PopoverPanel className='absolute left-1/2 z-10 mt-3 w-screen -translate-x-1/2 transform px-4 sm:px-0 lg:mt-7 lg:max-w-lg'>
              <div className='overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 dark:ring-gray-600 dark:ring-opacity-100'>
                <div className='relative grid grid-cols-2 gap-8 bg-white bg-opacity-95 p-5 backdrop-blur-2xl dark:bg-gray-800 dark:bg-opacity-95 lg:grid-cols-2'>
                  {LocationsDB.map((item) => (
                    <Link key={item.name} href={item.href} className='group'>
                      <div
                        onClick={() => close()}
                        role='none'
                        className='-m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-gg-200 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50 dark:hover:bg-gray-600'
                      >
                        <div className='flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-gg-500 text-center text-base text-white transition-all duration-150 ease-in-out dark:grayscale dark:group-hover:grayscale-0 sm:h-12 sm:w-12 lg:text-2xl'>
                          <div className='mt-1 flex flex-col items-center justify-center text-center'>
                            {item.icon} <div className='text-center text-xs'>{item.short}</div>
                          </div>
                        </div>
                        <div className='ml-4'>
                          <p className='text-sm font-medium text-gray-800 dark:text-white'>
                            {item.name}
                          </p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </PopoverPanel>
          </Transition>
        </>
      )}
    </Popover>
  );
}
