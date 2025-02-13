import React, { useState } from 'react';
import { Transition } from '@headlessui/react';
import { HiOutlineMenuAlt3, HiX } from 'react-icons/hi';
import Link from 'next/link';
import Image from 'next/image';


// const menu = [
//   {
//     id: 1,
//     option: <Treatments />,
//     slug: 'treatments',
//   },
//   {
//     id: 2,
//     option: <About />,
//     slug: 'about',
//   },
//   {
//     id: 3,
//     option: <WhyGarbhaGudi />,
//     slug: 'features',
//   },
//   {
//     id: 4,
//     option: <KnowledgeCenter />,
//     slug: 'resources',
//   },
//   {
//     id: 5,
//     option: <Contacts />,
//     slug: 'gg-care',
//   },
//   {
//     id: 6,
//     option: <Locations />,
//     slug: 'locations',
//   },
//   {
//     id: 7,
//     option: <Languages />,
//     slug: 'languages',
//   },
// ];

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className={`sticky top-0 z-50 bg-white bg-opacity-70 bg-auto bg-no-repeat shadow-xl backdrop-blur-2xl dark:border-b dark:border-gray-600 dark:bg-gray-800 dark:bg-opacity-70 lg:bg-cover`}
    >
      <nav className='shadow-2xl'>
        <nav className='px-2 lg:px-3 lg:py-2'>
          <div className='mx-auto flex max-w-screen-xl items-center justify-between'>
            <Link href='/' className='hidden items-center px-3 py-1 xl:flex'>
              <div className='text-brandPurpleDark font-extrabold text-3xl'>FERTIGENYX</div>
            </Link>
            <Link href='/' className='flex items-center xl:hidden'>
              <Image
                className='h-full w-16 dark:fill-white dark:brightness-0 dark:grayscale dark:invert'
                src='https://res.cloudinary.com/garbhagudiivf/image/upload/v1659164257/logos/GG_Vertical_Logo_nrcl5h.svg'
                alt='logo'
                width={50}
                height={50}
              />
            </Link>
            <div className='flex items-center lg:order-2'>
              <div className='flex items-center space-x-3'>
                {/* <ThemeToggle /> */}
                <div  className='duration-2 cursor-pointer rounded-lg bg-brandPurpleShine px-3 py-2 font-lexend text-xs text-gray-200 transition-all ease-in hover:bg-brandPurple3 dark:bg-brandPurpleShine dark:hover:bg-brandPurple3 sm:text-sm'>
                  Book <span className='hidden sm:inline-block'>Appointment</span>{' '}
                  <span className='inline-block sm:hidden'>Now</span>
                </div>
              </div>
              <div className='-mr-2 ml-2 flex items-center justify-center xl:hidden'>
                <div className='z-10 mr-4'>
                  {/* <LanguageSelect /> */}
                </div>
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  type='button'
                  className='mr-1 inline-flex items-center justify-center rounded-full bg-gray-900 p-2 text-gray-200 hover:bg-gray-800 hover:text-white focus:outline-none'
                  aria-controls='mobile-menu'
                  aria-expanded='false'
                >
                  <div className='sr-only'>Open main menu</div>
                  {!isOpen ? (
                    <HiOutlineMenuAlt3 className='block h-6 w-6' />
                  ) : (
                    <HiX className='block h-6 w-6' />
                  )}
                </button>
              </div>
            </div>
            <div
              className='hidden w-full items-center justify-between lg:order-1 lg:flex lg:w-auto'
              id='mobile-menu-2'
            >
              <div className='mt-4 flex flex-col py-2 font-medium lg:mt-0 lg:flex-row lg:space-x-8'>
                <div className='hidden xl:block'>
                  <div className='flex items-baseline space-x-4'>
                    {/* {menu.map((items) => (
                      <div
                        key={items.id}
                        className='rounded-lg font-content text-sm font-bold text-gray-800 transition-all duration-200 ease-in hover:bg-gg-500 hover:text-white dark:text-gray-200 dark:hover:bg-gg-400 dark:hover:text-gray-800'
                      >
                        {items.option}
                      </div>
                    ))} */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <Transition
          show={isOpen}
          enter='transition ease-out duration-100 transform'
          enterFrom='opacity-0 scale-95'
          enterTo='opacity-100 scale-100'
          leave='transition ease-in duration-75 transform'
          leaveFrom='opacity-100 scale-100'
          leaveTo='opacity-0 scale-95'
        >
          <div className='mt-2 xl:hidden' id='mobile-menu'>
            <div className=''>
              {/* {menu.map((items) => (
                <div
                  key={items.id}
                  className='rounded-md font-content text-sm font-semibold text-gray-800 hover:bg-gg-500 hover:text-white dark:text-gray-200 dark:hover:bg-gg-400 dark:hover:text-gray-800'
                >
                  <div>{items.option}</div>
                </div>
              ))} */}
            </div>
          </div>

              </Transition>
      </nav>
    </div>
  );
};

export default Nav;
