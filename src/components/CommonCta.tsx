import Link from 'next/link';
// import { HiPhone } from 'react-icons/hi';

const CommonCta = ({ classname }: { classname?: string }) => {
  const handleScroll = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <div className={`flex items-center justify-center gap-x-4 ${classname}`}>
      <button
        className='rounded-full border-2 border-brandPurpleDark px-4 py-2 text-xs text-brandPurpleDark hover:bg-brandPurpleDark hover:text-white lg:text-base'
        onClick={handleScroll}
      >
        Book an Appointment
      </button>

      <button className='group rounded-full border-2 border-brandPurpleDark px-4 py-1.5 text-brandPurpleDark hover:bg-brandPurpleDark hover:text-white'>
        <Link
          href='tel:+919071234003'
          className='flex items-center justify-center gap-2 scroll-smooth font-content text-xs lg:text-lg'
        >
          {/* <HiPhone className='h-5 w-5 text-brandPurpleDark transition-transform ease-in-out hover:rotate-12 hover:scale-110 group-hover:text-white md:h-5 md:w-5 lg:h-6 lg:w-6' /> */}
          <span>Call us : </span>
          <span> +91 9071 2340 03</span>
        </Link>
      </button>
    </div>
  );
};
export default CommonCta;
