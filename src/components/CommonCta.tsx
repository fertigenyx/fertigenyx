import Link from "next/link";
import Popup from "./Popup";
import { HiPhone } from "react-icons/hi";

const CommonCta=({classname}:{classname?:string})=>{
    return (
        <div className={`flex justify-center items-center gap-x-4 ${classname}`}>
        <Popup
          title={'Book an Appointment'}
          btnClassName='text-brandPurpleDark border-2 border-brandPurpleDark rounded-full lg:text-base text-xs py-2 px-4 hover:bg-brandPurpleDark hover:text-white'
        />
        
        <button className='group text-brandPurpleDark border-2 hover:bg-brandPurpleDark hover:text-white border-brandPurpleDark rounded-full py-1.5 px-4'>
          <Link href='tel:+919071234003' className='flex justify-center items-center font-content scroll-smooth lg:text-lg text-xs'>
          <HiPhone className='lg:h-6 lg:w-6 w-5 h-5 group-hover:text-white text-brandPurpleDark transition-transform ease-in-out hover:rotate-12 hover:scale-110 md:h-5 md:w-5' />
         <span> +91 9071234003</span>
          </Link>
        </button>
      </div>
      
    )
}
export default CommonCta;