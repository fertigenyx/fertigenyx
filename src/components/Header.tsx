import { useState } from 'react';
import { HiOutlineMenuAlt3, HiX, HiPhone } from 'react-icons/hi';
import Link from 'next/link';
import Image from 'next/image';
import { TreatmentsMenu } from './TreatmentsMenu';
import { usePathname } from 'next/navigation';
import { LocationsMenu } from './LocationsMenu';
import { Transition } from '@headlessui/react';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const path = usePathname();
  return (
    <div className='sticky top-0 z-50 bg-white bg-opacity-90 shadow-xl backdrop-blur-2xl dark:border-b dark:border-gray-600 dark:bg-gray-800 dark:bg-opacity-90'>
      <nav className='px-4 py-2 shadow-lg'>
        <div className='mx-auto flex max-w-screen-xl items-center justify-between'>
          <Link href='/' className='py-2'>
            <Image
              src='https://res.cloudinary.com/garbhagudiivf/image/upload/v1739764941/FertiGenyx_Logo_eqykma.webp'
              alt='logo'
              width={100}
              height={100}
              className='w-20 md:w-28 lg:h-14 lg:w-full'
            />
          </Link>

          {/* Desktop Menu */}
          <div className='hidden flex-1 justify-evenly md:flex'>
            <Link
              className={`${path === '/' ? 'bg-brandPurpleDark text-white hover:text-white' : ''} cursor-pointer rounded-full px-5 py-2.5 text-sm font-semibold text-brandPurpleDark transition-all duration-200 hover:text-brandBrown`}
              href='/'
            >
              Home
            </Link>
            <Link
              className={`${path?.includes('/fertility-specialist-bangalore') ? 'bg-brandPurpleDark text-white hover:text-white' : ''} cursor-pointer rounded-full px-5 py-2.5 text-sm font-semibold text-brandPurpleDark transition-all duration-200 hover:text-brandBrown`}
              href='/fertility-specialist-bangalore'
            >
              Fertility Experts
            </Link>
            <span
              className={`${path?.includes('/treatment') ? 'bg-brandPurpleDark text-white hover:text-white' : ''} cursor-pointer rounded-full px-5 py-2.5 text-sm font-semibold text-brandPurpleDark transition-all duration-200 hover:text-brandBrown`}
            >
              <TreatmentsMenu />
            </span>
            <Link
              className={`${path?.includes('/blogs') ? 'bg-brandPurpleDark text-white hover:text-white' : ''} cursor-pointer rounded-full px-5 py-2.5 text-sm font-semibold text-brandPurpleDark transition-all duration-200 hover:text-brandBrown`}
              href='/blogs'
            >
              Blogs
            </Link>
            <span
              className={`${path?.includes('/fertility-centre-bangalore') ? 'bg-brandPurpleDark text-white hover:text-white' : ''} cursor-pointer rounded-full px-5 py-2.5 text-sm font-semibold text-brandPurpleDark transition-all duration-200 hover:text-brandBrown`}
            >
              <LocationsMenu />
            </span>
            <Link
              className={`${path === '/contact-us' ? 'bg-brandPurpleDark text-white hover:text-white' : ''} cursor-pointer rounded-full px-5 py-2.5 text-sm font-semibold text-brandPurpleDark transition-all duration-200 hover:text-brandBrown`}
              href={`/contact-us?pageVisit=${path}`}
            >
              Contact Us
            </Link>
          </div>

          {/* Desktop Call Button */}
          <button
            className='hidden rounded-full border-2 border-brandPurpleDark px-4 py-2 text-brandPurpleDark xl:flex'
            suppressHydrationWarning
          >
            <Link
              href='tel:+919071234003'
              className='flex items-center justify-center font-content text-lg'
              suppressHydrationWarning
            >
              <HiPhone className='h-7 w-7 text-brandPurpleDark transition-transform ease-in-out hover:rotate-12 hover:scale-110' />
              <span suppressHydrationWarning>{'+91'}&nbsp;9071&nbsp;2340&nbsp;03</span>
            </Link>
          </button>

          {/* Mobile Menu Buttons */}
          <div className='flex items-center gap-3'>
            <button
              className='rounded-full border-2 border-brandPurpleDark p-2 text-xs text-brandPurpleDark md:p-2 xl:hidden'
              suppressHydrationWarning
            >
              <Link
                href='tel:+919071234003'
                className='flex items-center justify-center font-content'
                suppressHydrationWarning
              >
                <HiPhone className='h-4 w-4 text-brandPurpleDark transition-transform ease-in-out hover:rotate-12 hover:scale-110 md:h-6 md:w-6' />
                <span suppressHydrationWarning>{'+91'}&nbsp;9071&nbsp;2340&nbsp;03</span>
              </Link>
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className='rounded-full bg-gray-900 p-2 text-white xl:hidden'
            >
              {isOpen ? <HiX className='h-7 w-7' /> : <HiOutlineMenuAlt3 className='h-7 w-7' />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <Transition
          show={isOpen}
          enter='transition ease-out duration-100 transform'
          enterFrom='opacity-0 scale-95'
          enterTo='opacity-100 scale-100'
          leave='transition ease-in duration-75 transform'
          leaveFrom='opacity-100 scale-100'
          leaveTo='opacity-0 scale-95'
        >
          <div className='xl:hidden' id='mobile-menu'>
            <div className='space-y-1 px-2 pb-3 pt-2 sm:px-3'>
              <Link
                href={'/'}
                className='block rounded-md px-3 py-2 text-sm font-medium text-gray-800 hover:bg-brandPurpleDark hover:text-white dark:text-gray-200'
              >
                Home
              </Link>
              <span className='block rounded-md px-3 py-2 text-sm font-medium text-gray-800 hover:bg-brandPurpleDark hover:text-white dark:text-gray-200'>
                <Link href='/fertility-specialist-bangalore'>Fertility Experts</Link>
              </span>
              <span className='block rounded-md px-3 py-2 text-sm font-medium text-gray-800 hover:bg-brandPurpleDark hover:text-white dark:text-gray-200'>
                <TreatmentsMenu />
              </span>
              <span className='block rounded-md px-3 py-2 text-sm font-medium text-gray-800 hover:bg-brandPurpleDark hover:text-white dark:text-gray-200'>
                <Link href='/blogs'>Blogs</Link>
              </span>
              <span className='block rounded-md px-3 py-2 text-sm font-medium text-gray-800 hover:bg-brandPurpleDark hover:text-white dark:text-gray-200'>
                <LocationsMenu />
              </span>

              <span className='block rounded-md px-3 py-2 text-sm font-medium text-gray-800 hover:bg-brandPurpleDark hover:text-white dark:text-gray-200'>
                <Link href={`/contact-us?pageVisit=${path}`}>Contact us</Link>
              </span>
            </div>
          </div>
        </Transition>
      </nav>
    </div>
  );
};

export default Nav;
