import Image from 'next/image';
import Link from 'next/link';
import { HiPhone } from 'react-icons/hi';

const LPHeader = () => {
  return (
    <div className='sticky top-0 z-50 bg-white bg-opacity-90 shadow-xl backdrop-blur-2xl dark:border-b dark:border-gray-600 dark:bg-gray-800 dark:bg-opacity-90'>
      <nav className='px-4 py-2 shadow-lg'>
        <div className='relative flex w-full items-center justify-between'>
          <Link href='/' className='py-2'>
            <Image
              src='https://res.cloudinary.com/garbhagudiivf/image/upload/v1739764941/FertiGenyx_Logo_eqykma.webp'
              alt='logo'
              width={100}
              height={100}
              className='w-20 md:w-28 lg:h-14 lg:w-full'
            />
          </Link>

          {/* Desktop Call Button */}
          <button
            className='absolute right-0 hidden rounded-full border-2 border-brandPurpleDark px-4 py-2 text-brandPurpleDark xl:flex'
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
          </div>
        </div>
      </nav>
    </div>
  );
};

export default LPHeader;
