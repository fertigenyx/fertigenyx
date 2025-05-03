import { useState } from 'react';
import { HiOutlineMenuAlt3, HiX, HiPhone } from 'react-icons/hi';
import Link from 'next/link';
import Image from 'next/image';

const menu = [
  { id: 1, option: 'About', slug: 'about-fertigenyx' },
  { id: 2, option: 'Services', slug: 'services-offered' },
  { id: 3, option: 'Why FertiGenyx?', slug: 'why-fertigenyx' },
  { id: 4, option: 'Fertility Specialists', slug: 'fertility-specialists' },
  { id: 5, option: 'Causes of Infertility', slug: 'causes-of-infertility' },
  { id: 6, option: 'IVF and Its Indications', slug: 'ivf-and-its-indications' },
];

interface NavProps {
  sectionRefs: { [key: string]: React.RefObject<HTMLElement> };
}

const Nav: React.FC<NavProps> = ({ sectionRefs }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Function to handle smooth scrolling with offset adjustment
  const handleScroll = (slug: string) => {
    const element = sectionRefs[slug]?.current;
    if (element) {
      const offset = window.innerWidth < 768 ? 70 : 100; // More offset on mobile
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth',
      });
    }
  };

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
          <div className='hidden space-x-2 xl:flex'>
            {menu.map((item) => (
              <button
                key={item.id}
                className='cursor-pointer rounded-lg px-1 py-2 font-semibold text-brandPurpleDark transition-all duration-200 hover:text-brandBrown'
                onClick={() => handleScroll(item.slug)}
              >
                {item.option}
              </button>
            ))}
          </div>

          {/* Desktop Call Button */}
          <button className='hidden rounded-full border-2 border-brandPurpleDark px-4 py-2 text-brandPurpleDark xl:flex'>
            <Link
              href='tel:+919071234003'
              className='flex items-center justify-center font-content text-lg'
            >
              <HiPhone className='h-7 w-7 text-brandPurpleDark transition-transform ease-in-out hover:rotate-12 hover:scale-110' />
              <span> +91 9071 2340 03</span>
            </Link>
          </button>

          {/* Mobile Menu Buttons */}
          <div className='flex items-center gap-3'>
            <button className='rounded-full border-2 border-brandPurpleDark p-2 text-xs text-brandPurpleDark md:p-2 xl:hidden'>
              <Link
                href='tel:+919071234003'
                className='flex items-center justify-center font-content'
              >
                <HiPhone className='h-4 w-4 text-brandPurpleDark transition-transform ease-in-out hover:rotate-12 hover:scale-110 md:h-6 md:w-6' />
                <span> +91 9071 2340 03</span>
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
        {isOpen && (
          <div className='absolute left-0 top-16 w-full bg-white py-4 shadow-md dark:bg-gray-800 xl:hidden'>
            <ul className='flex flex-col space-y-2 px-6'>
              {menu.map((item) => (
                <li key={item.id}>
                  <button
                    className='w-full rounded-md px-3 py-3 text-left font-medium text-gray-800 hover:bg-brandPurpleDark hover:text-white dark:text-gray-200'
                    onClick={() => {
                      setIsOpen(false);
                      handleScroll(item.slug);
                    }}
                  >
                    {item.option}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Nav;
