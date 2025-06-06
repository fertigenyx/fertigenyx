import { FaWhatsapp } from 'react-icons/fa';
import Link from 'next/link';

const FloatWhatsApp = () => {
  return (
    <div className='fixed bottom-20 left-5 flex cursor-pointer items-center justify-center rounded-full bg-green-600 px-2 py-2 font-content font-bold text-white md:bottom-5'>
      <Link href='https://wa.me/919071234003?text=Hi'>
        <FaWhatsapp className='h-5 w-5 text-white md:h-8 md:w-8' />
      </Link>
    </div>
  );
};

export default FloatWhatsApp;
