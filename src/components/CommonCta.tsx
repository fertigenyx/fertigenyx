'use client';

import Link from 'next/link';

const CommonCta = ({ classname = '' }: { classname?: string }) => {
  return (
    <div className={`flex flex-wrap items-center justify-center gap-4 ${classname}`}>
      <a
        href='#top'
        className='rounded-full border-2 border-brandPurpleDark px-4 py-2 text-xs text-brandPurpleDark transition-colors hover:bg-brandPurpleDark hover:text-white lg:text-base'
      >
        Book an Appointment
      </a>
      <Link
        href='tel:+919071234003'
        className='group flex items-center gap-2 rounded-full border-2 border-brandPurpleDark px-4 py-2 text-xs text-brandPurpleDark transition-colors hover:bg-brandPurpleDark hover:text-white lg:text-base'
      >
        <span>Call us:</span>
        <span>{'+91'}&nbsp;9071&nbsp;2340&nbsp;03</span>
      </Link>
    </div>
  );
};

export default CommonCta;
