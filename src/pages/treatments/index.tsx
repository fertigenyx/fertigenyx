import { SEOData } from '@/db/SEOData';
import { Treatments } from '@/db/Treatments';
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

const IndexPage = () => {
  return (
    <div>
      <Head>
        <title>{SEOData.Treatment.title}</title>
        <meta name='title' content={SEOData.Treatment.title} />
        <meta name='description' content={SEOData.Treatment.description} />
      </Head>
      <div className='mx-auto max-w-7xl'>
        <h1 className='pt-12 text-center font-heading text-4xl font-semibold'>
          Fertility Treatments
        </h1>
        <p className='pt-5 text-justify text-xs text-gray-700 md:pt-8 md:text-base'>
          Fertility treatment options have improved significantly in recent years, offering hope to
          couples struggling with infertility. Treatment depends on the underlying cause, and may
          range from lifestyle changes, medication, or assisted reproductive technologies like
          intrauterine insemination (IUI), in vitro fertilization (IVF), or ICSI (intracytoplasmic
          sperm injection). A thorough evaluation by a fertility specialist helps determine the most
          suitable approach tailored to each couple&apos;s unique situation. With the right
          diagnosis and care, many individuals are now able to fulfill their dream of parenthood.
        </p>
        <div className='w-full max-w-7xl px-2 py-16 sm:px-0'>
          <TabGroup>
            <TabList className={'flex space-x-1 rounded-xl bg-brandPurpleDark p-1'}>
              <Tab className='mx-auto w-full rounded-lg py-2 text-center font-heading text-xl font-semibold text-gray-100 focus:outline-none ui-selected:bg-gray-100 ui-selected:text-brandPurpleDark ui-selected:shadow-xl ui-selected:transition-all ui-selected:duration-300 ui-selected:ease-linear ui-selected:hover:bg-gray-100 ui-not-selected:hover:bg-gray-400 dark:text-gray-800 dark:ui-selected:bg-gray-800 dark:ui-selected:text-gray-200'>
                <div className='mx-auto max-w-7xl text-center font-heading text-base font-semibold md:text-2xl'>
                  Female Infertility
                </div>
              </Tab>
              <Tab className='mx-auto w-full rounded-lg py-2 text-center font-heading text-xl font-semibold text-gray-100 focus:outline-none ui-selected:bg-gray-100 ui-selected:text-brandPurpleDark ui-selected:shadow-xl ui-selected:transition-all ui-selected:duration-300 ui-selected:ease-linear ui-selected:hover:bg-gray-100 ui-not-selected:hover:bg-gray-400 dark:text-gray-800 dark:ui-selected:bg-gray-800 dark:ui-selected:text-gray-200'>
                <div className='mx-auto max-w-7xl px-2 text-center font-heading text-base font-semibold md:text-2xl'>
                  Male Infertility
                </div>
              </Tab>
              <Tab className='mx-auto w-full rounded-lg py-2 text-center font-heading text-xl font-semibold text-gray-100 focus:outline-none ui-selected:bg-gray-100 ui-selected:text-brandPurpleDark ui-selected:shadow-xl ui-selected:transition-all ui-selected:duration-300 ui-selected:ease-linear ui-selected:hover:bg-gray-100 ui-not-selected:hover:bg-gray-400 dark:text-gray-800 dark:ui-selected:bg-gray-800 dark:ui-selected:text-gray-200'>
                <div className='mx-auto max-w-7xl text-center font-heading text-base font-semibold md:text-2xl'>
                  Advanced Options
                </div>
              </Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <div className='mx-auto flex max-w-7xl py-6 sm:py-12'>
                  <div className='mx-auto grid grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                    {Treatments['female'].map((item) => {
                      return (
                        <Link href={item?.slug} passHref key={item?.id} className='group'>
                          <div className='dark:hover:brandPurple3 mx-auto flex w-80 cursor-pointer rounded-2xl border-2 border-solid border-brandPurple3 px-4 py-3 transition-all duration-100 hover:border-transparent hover:bg-brandPurple3 hover:text-white dark:border-gray-700 dark:hover:bg-gray-600 md:w-96'>
                            <div className='w-1/3'>
                              <Image
                                className='h-16 w-16 rounded-md object-cover transition-all duration-500 ease-in-out group-hover:grayscale-0 dark:grayscale'
                                src={item?.url}
                                alt={item?.title}
                                width={100}
                                height={100}
                                loading='lazy'
                              />
                            </div>
                            <div className='flex w-2/3 flex-col justify-center text-left'>
                              <p className='font-qs text-lg font-semibold'>{item?.title}</p>
                            </div>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </TabPanel>
              <TabPanel>
                <div className='mx-auto flex max-w-7xl py-6 sm:py-12'>
                  <div className='mx-auto grid grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                    {Treatments['male'].map((item) => {
                      return (
                        <Link href={item?.slug} passHref key={item?.id}>
                          <div className='dark:hover:brandPurple3 mx-auto flex w-80 cursor-pointer rounded-2xl border-2 border-solid border-brandPurple3 px-4 py-3 transition-all duration-100 hover:border-transparent hover:bg-brandPurple3 hover:text-white dark:border-gray-700 dark:hover:bg-gray-600 md:w-96'>
                            <div className='w-1/3'>
                              <Image
                                className='h-16 w-16 rounded-full object-cover'
                                src={item?.url}
                                alt={item?.title}
                                width={100}
                                height={100}
                                loading='lazy'
                              />
                            </div>
                            <div className='flex w-2/3 flex-col justify-center text-left'>
                              <p className='font-qs text-lg font-semibold'>{item?.title}</p>
                            </div>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </TabPanel>
              <TabPanel>
                <div className='mx-auto flex max-w-7xl py-6 sm:py-12'>
                  <div className='mx-auto grid grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                    {Treatments['advanced']?.map((item) => {
                      return (
                        <Link href={item.slug} passHref key={item?.id}>
                          <div className='dark:hover:brandPurple3 mx-auto flex w-80 cursor-pointer rounded-2xl border-2 border-solid border-brandPurple3 px-4 py-3 transition-all duration-100 hover:border-transparent hover:bg-brandPurple3 hover:text-white dark:border-gray-700 dark:hover:bg-gray-600 md:w-96'>
                            <div className='w-1/3'>
                              <Image
                                className='h-16 w-16 rounded-full object-cover'
                                src={item?.url}
                                alt={item?.title}
                                width={100}
                                height={100}
                                loading='lazy'
                              />
                            </div>
                            <div className='flex w-2/3 flex-col justify-center text-left'>
                              <p className='font-qs text-lg font-semibold'>{item?.title}</p>
                            </div>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </TabPanel>
            </TabPanels>
          </TabGroup>
        </div>
      </div>
    </div>
  );
};
export default IndexPage;
