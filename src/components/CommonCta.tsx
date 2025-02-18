import Link from "next/link";
import Popup from "./Popup";
import { HiPhone } from "react-icons/hi";

const CommonCta=({classname}:{classname?:string})=>{
    return (
        <div className={`flex justify-center items-center gap-x-4 ${classname}`}>
        <Popup
          title={'Book an Appointment'}
          btnClassName='text-brandPurpleDark border-2 border-brandPurpleDark rounded-full lg:text-base text-xs py-2 px-4'
        />
        
        <button className=' text-brandPurpleDark border-2 border-brandPurpleDark rounded-full py-2 px-4'>
          <Link href='tel:+919071234003' className='flex justify-center items-center font-content scroll-smooth lg:text-lg text-xs'>
          <HiPhone className='lg:h-7 lg:w-7 w-4 h-4 text-brandPurpleDark transition-transform ease-in-out hover:rotate-12 hover:scale-110 md:h-5 md:w-5' />
         <span> +91 9071234003</span>
          </Link>
        </button>
      </div>
      
    )
}
export default CommonCta;