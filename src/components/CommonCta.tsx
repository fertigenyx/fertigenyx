import Link from 'next/link';
// import Popup from './Popup';
// import { HiPhone } from 'react-icons/hi';

const CommonCta = ({ classname }: { classname?: string }) => {
  return (
    <div className={`flex items-center justify-center gap-x-4 ${classname}`}>
      {/* <Popup
        title={'Book an Appointment'}
        btnClassName='text-brandPurpleDark border-2 border-brandPurpleDark rounded-full lg:text-base text-xs py-2 px-4 hover:bg-brandPurpleDark hover:text-white'
      /> */}

      <button className='group rounded-full border-2 border-brandPurpleDark px-4 py-1.5 text-brandPurpleDark hover:bg-brandPurpleDark hover:text-white'>
        <Link
          href='tel:+919071234003'
          className='flex items-center justify-center scroll-smooth gap-2 font-content text-xs lg:text-lg'
        >
          {/* <HiPhone className='h-5 w-5 text-brandPurpleDark transition-transform ease-in-out hover:rotate-12 hover:scale-110 group-hover:text-white md:h-5 md:w-5 lg:h-6 lg:w-6' /> */}
          <span>Call us : </span>
          <span> +91 9071234003</span>
        </Link>
      </button>
    </div>
  );
};
export default CommonCta;
