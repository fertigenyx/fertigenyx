'use client';
import {
  Popover,
  PopoverButton,
  PopoverPanel,
  Transition,
  TabGroup,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
} from '@headlessui/react';
import { HiChevronDown } from 'react-icons/hi';
import Link from 'next/link';
import Image from 'next/image';
import { Fragment } from 'react';
import { Treatments } from '@/db/Treatments';

export function TreatmentsMenu() {
  return (
    <Popover className='relative'>
      {({ close }) => (
        <>
          <PopoverButton className='w-screen cursor-pointer text-left outline-none sm:w-full'>
            <div>
              Treatments <HiChevronDown className='inline-block' />
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
            <PopoverPanel className='absolute left-1/2 z-10 mt-3 w-screen max-w-xl -translate-x-1/2 transform px-4 sm:px-0 lg:mt-7 lg:max-w-xl'>
              <div className='overflow-hidden rounded-lg bg-white bg-opacity-95 shadow-lg ring-1 ring-brandPurpleDark ring-opacity-5 backdrop-blur-2xl'>
                <TabGroup>
                  <TabList className='flex items-center justify-between rounded-t-lg bg-gray-200 px-3 py-1.5 font-bold lg:px-12 lg:py-2'>
                    {['Female Infertility', 'Male Infertility', 'Advanced'].map((category) => (
                      <Tab
                        key={category}
                        className={({ selected }) => {
                          if (selected) {
                            return 'text-primary w-full cursor-pointer rounded-lg bg-brandPurpleDark py-1 text-sm text-white shadow focus:outline-none';
                          }
                          return 'hover:text-primary w-full cursor-pointer rounded-lg py-1 text-sm text-brandPurpleDark hover:text-brandBrown focus:outline-none';
                        }}
                      >
                        {category}
                      </Tab>
                    ))}
                  </TabList>
                  <TabPanels className='my-2 px-2 text-black transition-all duration-500 ease-out'>
                    {/* Female Infertility */}
                    <TabPanel>
                      <div className='grid grid-cols-3 text-center'>
                        {Treatments.female.map((item) => (
                          <Link
                            href={item.slug}
                            key={item.id}
                            onClick={() => close()}
                            className='group'
                          >
                            <div className='flex flex-col items-center justify-center rounded-xl py-2 hover:bg-brandPurple2'>
                              <Image
                                src={item?.url}
                                alt={item?.title}
                                loading='lazy'
                                width={50}
                                height={50}
                                className='mx-auto h-10 w-10 transition-all duration-300 ease-linear group-hover:grayscale-0'
                              />
                              <div className='pt-2 font-content text-sm font-medium'>
                                {item?.title}
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </TabPanel>

                    {/* Male Infertility */}
                    <TabPanel>
                      <div className='grid grid-cols-3 text-center'>
                        {Treatments.male.map((item) => (
                          <Link
                            href={item.slug}
                            key={item.id}
                            onClick={() => close()}
                            className='group'
                          >
                            <div className='flex flex-col items-center justify-center rounded-xl py-2 hover:bg-brandPurple2'>
                              <Image
                                src={item?.url}
                                alt={item?.title}
                                loading='lazy'
                                width={50}
                                height={50}
                                className='mx-auto h-10 w-10 transition-all duration-300 ease-linear group-hover:grayscale-0'
                              />
                              <div className='pt-2 font-content text-sm font-medium'>
                                {item?.title}
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </TabPanel>

                    {/* Advanced Treatments */}
                    <TabPanel>
                      <div className='grid grid-cols-3 text-center'>
                        {Treatments.advanced.map((item) => (
                          <Link
                            href={item.slug}
                            key={item.id}
                            onClick={() => close()}
                            className='group'
                          >
                            <div className='flex flex-col items-center justify-center rounded-xl py-2 hover:bg-brandPurple2'>
                              <Image
                                src={item?.url}
                                alt={item?.title}
                                loading='lazy'
                                width={50}
                                height={50}
                                className='mx-auto h-10 w-10 transition-all duration-300 ease-linear group-hover:grayscale-0'
                              />
                              <div className='pt-2 font-content text-sm font-medium'>
                                {item?.title}
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </TabPanel>
                  </TabPanels>
                </TabGroup>
              </div>
            </PopoverPanel>
          </Transition>
        </>
      )}
    </Popover>
  );
}
