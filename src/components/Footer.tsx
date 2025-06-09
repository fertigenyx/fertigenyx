import Link from 'next/link';
import { HiPhone } from 'react-icons/hi';
import FormComponent from './FormComponent';
import { treatments } from '@/db/Treatments';
import { MdEmail } from 'react-icons/md';

const navigation = {
  quickLinks: [
    { name: 'Home', href: '/' },
    {
      name: 'Fertility Experts',
      href: '/fertility-specialist-bangalore',
    },
    {
      name: 'Treatments',
      href: '/treatments',
    },
    { name: 'Blogs', href: '/blogs' },
    { name: 'Contact us', href: '/contact-us' },
  ],
  legal: [
    { name: 'Privacy', href: '/legal/privacy-policy' },
    { name: 'Terms', href: '/legal/terms-and-conditions' },
  ],
};
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
      <div className='mx-auto grid w-full max-w-7xl grid-cols-3 justify-items-center gap-y-5 border-t border-gray-200 px-5 py-8 pb-12 dark:border-gray-600 md:grid-cols-6 lg:flex-row'>
        <div className=''>
          <h3 className='text-sm font-semibold uppercase tracking-wider'>Treatments</h3>
          <ul className='mt-4 space-y-1'>
            {treatments.map((item) => (
              <li key={item?.id}>
                <Link href={item?.slug} passHref>
                  <span className='cursor-pointer text-xs text-brandPurpleDark hover:text-sm hover:font-semibold hover:underline md:text-sm'>
                    {item?.title}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className=''>
          <h3 className='text-sm font-semibold uppercase tracking-wider'>Quick Links</h3>
          <ul className='mt-4 space-y-1'>
            {navigation.quickLinks.map((item) => (
              <li key={item.name}>
                <Link passHref href={item.href}>
                  <span className='cursor-pointer text-xs text-brandPurpleDark hover:text-sm hover:font-semibold hover:underline md:text-sm'>
                    {item.name}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className='text-sm font-semibold uppercase tracking-wider'>Legal</h3>
          <ul className='mt-4 space-y-1'>
            {navigation.legal.map((item) => (
              <li key={item.name}>
                <Link passHref href={item.href}>
                  <span className='text-xs text-brandPurpleDark hover:text-sm hover:font-semibold hover:underline md:text-sm'>
                    {item.name}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className='hidden justify-self-start md:block md:justify-self-center'>
          <h3 className='text-sm font-semibold uppercase tracking-wider'>Contact Us</h3>
          <ul className='mt-4 space-y-2'>
            <li className='flex items-center gap-2.5'>
              <HiPhone />
              <Link
                href='tel:+91 9071 2340 03'
                className='text-xs text-brandPurpleDark hover:font-semibold hover:underline md:text-sm'
                suppressHydrationWarning
              >
                {'+91'}&nbsp;9071&nbsp;2340&nbsp;03
              </Link>
            </li>
            <li className='flex items-center gap-2.5'>
              <MdEmail />
              <Link
                href='mailto:fertigenyx@gmail.com'
                className='text-xs text-brandPurpleDark hover:font-semibold hover:underline md:text-sm'
              >
                fertigenyx@gmail.com
              </Link>
            </li>
          </ul>
        </div>
        <div className='col-span-4 h-fit rounded-lg bg-[#005e7e] md:col-span-2'>
          <FormComponent title={'Book your Appointment'} />
        </div>
      </div>
      <div className='mx-auto max-w-7xl border-t'>
        <p className='py-8 text-center font-content text-gray-800 dark:text-white'>
          &copy; {new Date().getFullYear()} Fertigenyx, Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
