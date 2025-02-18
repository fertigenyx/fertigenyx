import CommonCta from "@/components/CommonCta";
import { whyFertigenyx } from "@/components/constants/whyFertigenyx";
import Image from "next/image";
import { forwardRef } from "react";

const WhyFertigenyx = forwardRef<HTMLElement>((_, ref) => {
  return (
   <> <section
   ref={ref}
   id="why-fertigenyx"
   className="relative flex items-start justify-start p-6 md:p-10 lg:pb-10 lg:px-6 text-white lg:rounded overflow-hidden"
 >
  
   {/* Background Image */}
   <div className="absolute inset-0 bg-[url('https://res.cloudinary.com/garbhagudiivf/image/upload/v1739774813/ivf-treatment-in-bangalore-baby-right_vuml7b.jpg')] lg:bg-cover lg:bg-center"></div>

   {/* Semi-transparent Color Overlay */}
   <div className="absolute inset-0 bg-[#E6D6CD] bg-opacity-80"></div>

   {/* Content */}
   <div className=" relative z-10 text-black">
   <div className=" mb-10 flex flex-col justify-center items-center"><h2 className="text-3xl md:text-4xl font-bold mb-6 text-center  text-brandPurpleShine">
   Why <span className="text-white">Choose</span> FertiGynx?
   </h2>
   <div className="lg:text-3xl text-xl text-center underline">FERTIGYNX, Leading the Way in Infertility Treatment</div></div>
     <div className="flex justify-between mx-3"><div className="lg:w-2/3 grid grid-cols-2 gap-4">
         {whyFertigenyx && whyFertigenyx?.map((menu,index)=>{
             return (
                 <div key={index}>
                     <h2 className="text-xl font-bold text-brandPurpleDark hover:underline">{menu.title}</h2>
                     <div className="text-base">{menu.description}</div>
                 </div>
             )
         })}
     </div>
     <div className="w-1/3 ml-4 hidden xl:flex">
         <Image src={"https://res.cloudinary.com/garbhagudiivf/image/upload/v1739774813/ivf-treatment-in-bangalore-baby-right_vuml7b.jpg"} alt={"why-fertigenyx-image"} width={600} height={1000} className="rounded"/>
     </div>
     </div>
   </div>
 </section>
      <CommonCta classname="my-4"/>
   </>
  );
});

WhyFertigenyx.displayName = "WhyFertigenyx";

export default WhyFertigenyx;
