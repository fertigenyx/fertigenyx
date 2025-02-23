import Link from 'next/link';

export default function Footer() {
  return (
    <footer
      className='bg-neutral-50 font-content dark:bg-gray-800'
      aria-labelledby='footerHeading'
      id='footer'
    >
      <h2 id='footerHeading' className='sr-only'>
        Footer
      </h2>

      <div className='mx-auto max-w-7xl border-t border-gray-200 py-8 dark:border-gray-600'>
        <div className='flex justify-center gap-4 py-2'>
          <Link href={'/legal/privacy-policy'} className='text-brandPurpleDark hover:underline'>
            Privacy & Policy
          </Link>
          <Link
            href={'/legal/terms-and-conditions'}
            className='text-brandPurpleDark hover:underline'
          >
            Terms & Conditions
          </Link>
        </div>

        <p className='text-center font-content text-gray-800 dark:text-white'>
          &copy; {new Date().getFullYear()} Fertigenyx, Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
