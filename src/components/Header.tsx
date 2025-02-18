import React, { useState } from "react";
import { HiOutlineMenuAlt3, HiX ,HiPhone} from "react-icons/hi";
import Link from "next/link";
import Image from "next/image";

const menu = [
  { id: 1, option: "About", slug: "about-fertigenyx" },
  { id: 2, option: "Services", slug: "services-offered" },
  { id: 3, option: "Why FertiGenyx?", slug: "why-fertigenyx" },
  { id: 4, option: "Fertility Specialists", slug: "fertility-specialists" },
  { id: 5, option: "Causes of Infertility", slug: "causes-of-infertility" },
  { id: 6, option: "IVF and Its Indications", slug: "ivf-and-its-indications" },
];

interface NavProps {
  sectionRefs: { [key: string]: React.RefObject<HTMLElement> };
}

const Nav: React.FC<NavProps> = ({ sectionRefs }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="sticky top-0 z-50 bg-white bg-opacity-70 shadow-xl backdrop-blur-2xl dark:border-b dark:border-gray-600 dark:bg-gray-800 dark:bg-opacity-70">
      <nav className="px-4 py-2 shadow-2xl">
        <div className="mx-auto flex max-w-screen-xl items-center justify-between">
          <Link href="/" className="py-2">
            <Image src={"https://res.cloudinary.com/garbhagudiivf/image/upload/v1739764941/FertiGenyx_Logo_eqykma.png"} alt={"logo"} width={100} height={100} className="lg:w-full lg:h-14 w-28"/>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden xl:flex space-x-3">
            {menu.map((item) => (
              <button
                key={item.id}
                className="px-1 py-1 cursor-pointer rounded-lg text-brandPurpleDark font-bold transition-all duration-200 hover:text-brandBrown"
                onClick={() => sectionRefs[item.slug]?.current?.scrollIntoView({ behavior: "smooth" })}
              >
                {item.option}
              </button>
            ))}
          </div>

          <button className=' text-brandPurpleDark border-2 border-brandPurpleDark rounded-full py-2 px-4 hidden xl:flex'>
          <Link href='tel:+919071234003' className='flex justify-center items-center font-content scroll-smooth text-lg'>
          <HiPhone className='h-7 w-7 text-brandPurpleDark transition-transform ease-in-out hover:rotate-12 hover:scale-110 md:h-6 md:w-6' />
         <span> +91 9071234003</span>
          </Link>
        </button>
         <div className="flex justify-end gap-2"> {/* Mobile Menu Button */}
          <button className=' text-brandPurpleDark border-2 border-brandPurpleDark text-sm rounded-full p-2 xl:hidden'>
          <Link href='tel:+919071234003' className='flex justify-center items-center font-content scroll-smooth'>
          <HiPhone className='h-4 w-4 text-brandPurpleDark transition-transform ease-in-out hover:rotate-12 hover:scale-110 md:h-6 md:w-6' />
         <span> +91 9071234003</span>
          </Link>
        </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="xl:hidden p-2 bg-gray-900 text-white rounded-full"
          >
            {isOpen ? <HiX className="h-6 w-6" /> : <HiOutlineMenuAlt3 className="h-6 w-6" />}
          </button></div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="xl:hidden bg-white dark:bg-gray-800 px-4 py-3 shadow-md">
            {menu.map((item) => (
              <button
                key={item.id}
                className="px-2 block w-full text-left py-2 text-gray-800 dark:text-gray-200 hover:bg-brandPurple3 hover:text-white"
                onClick={() => {
                  setIsOpen(false);
                  sectionRefs[item.slug]?.current?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                {item.option}
              </button>
            ))}
          </div>
        )}
      </nav>
    </div>
  );
};

export default Nav;
