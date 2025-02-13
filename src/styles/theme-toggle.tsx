import React, { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { HiOutlineLightBulb } from 'react-icons/hi';
import { LiaLightbulb } from 'react-icons/lia';

const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
    // Set the initial state of the theme based on the theme provided by next-themes.
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  if (!mounted) return null;

  return (
    <button
      className={`flex h-8 w-8 items-center justify-center rounded-md duration-200 hover:scale-110 active:scale-100`}
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      {theme === 'light' ? (
        <HiOutlineLightBulb className='h-7 w-7 text-gg-500' />
      ) : (
        <LiaLightbulb className='h-7 w-7 text-white' />
      )}
    </button>
  );
};

export default ThemeToggle;
