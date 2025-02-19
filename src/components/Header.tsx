import React, { useState } from "react";
import { HiOutlineMenuAlt3, HiX, HiPhone } from "react-icons/hi";
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

  // Function to handle smooth scrolling with offset adjustment
  const handleScroll = (slug: string) => {
    const element = sectionRefs[slug]?.current;
    if (element) {
      const offset = window.innerWidth < 768 ? 70 : 100; // More offset on mobile
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="sticky top-0 z-50 bg-white bg-opacity-90 shadow-xl backdrop-blur-2xl dark:border-b dark:border-gray-600 dark:bg-gray-800 dark:bg-opacity-90">
      <nav className="px-4 py-2 shadow-lg">
        <div className="mx-auto flex max-w-screen-xl items-center justify-between">
          <Link href="/" className="py-2">
            <Image
              src="https://res.cloudinary.com/garbhagudiivf/image/upload/v1739764941/FertiGenyx_Logo_eqykma.png"
              alt="logo"
              width={100}
              height={100}
              className="lg:w-full lg:h-14 w-28"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden xl:flex space-x-2">
            {menu.map((item) => (
              <button
                key={item.id}
                className="px-1 py-2 cursor-pointer rounded-lg text-brandPurpleDark font-semibold transition-all duration-200 hover:text-brandBrown"
                onClick={() => handleScroll(item.slug)}
              >
                {item.option}
              </button>
            ))}
          </div>

          {/* Desktop Call Button */}
          <button className="text-brandPurpleDark border-2 border-brandPurpleDark rounded-full py-2 px-4 hidden xl:flex">
            <Link href="tel:+919071234003" className="flex justify-center items-center font-content text-lg">
              <HiPhone className="h-7 w-7 text-brandPurpleDark transition-transform ease-in-out hover:rotate-12 hover:scale-110" />
              <span> +91 9071234003</span>
            </Link>
          </button>

          {/* Mobile Menu Buttons */}
          <div className="flex items-center gap-3">
            <button className="text-brandPurpleDark border-2 border-brandPurpleDark text-sm rounded-full p-2 xl:hidden">
              <Link href="tel:+919071234003" className="flex justify-center items-center font-content">
                <HiPhone className="h-6 w-6 text-brandPurpleDark transition-transform ease-in-out hover:rotate-12 hover:scale-110" />
              </Link>
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="xl:hidden p-2 bg-gray-900 text-white rounded-full"
            >
              {isOpen ? <HiX className="h-7 w-7" /> : <HiOutlineMenuAlt3 className="h-7 w-7" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="xl:hidden bg-white dark:bg-gray-800 py-4 shadow-md absolute w-full left-0 top-16">
            <ul className="flex flex-col space-y-2 px-6">
              {menu.map((item) => (
                <li key={item.id}>
                  <button
                    className="w-full text-left py-3 text-gray-800 dark:text-gray-200 font-medium hover:bg-brandPurpleDark hover:text-white rounded-md px-3"
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
