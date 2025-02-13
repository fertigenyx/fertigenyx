import React, { useState } from "react";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";
import Link from "next/link";

const menu = [
  { id: 1, option: "About FertiGenyx", slug: "about-fertigenyx" },
  { id: 2, option: "Services Offered", slug: "services-offered" },
  { id: 3, option: "Why FertiGenyx?", slug: "why-fertigenyx" },
  { id: 4, option: "Fertility Specialists", slug: "fertility-specialists" },
  { id: 5, option: "Causes of Infertility", slug: "causes-of-infertility" },
  { id: 6, option: "IVF Indications", slug: "ivf-indications" },
  { id: 7, option: "What is IVF?", slug: "what-is-ivf" },
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
          <Link href="/" className="text-brandPurpleDark font-extrabold text-3xl">
            FERTIGENYX
          </Link>

          {/* Desktop Menu */}
          <div className="hidden xl:flex space-x-3">
            {menu.map((item) => (
              <button
                key={item.id}
                className="px-1 py-1 cursor-pointer rounded-lg text-gray-800 font-bold transition-all duration-200 hover:text-brandYellow"
                onClick={() => sectionRefs[item.slug]?.current?.scrollIntoView({ behavior: "smooth" })}
              >
                {item.option}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="xl:hidden p-2 bg-gray-900 text-white rounded-full"
          >
            {isOpen ? <HiX className="h-6 w-6" /> : <HiOutlineMenuAlt3 className="h-6 w-6" />}
          </button>
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
