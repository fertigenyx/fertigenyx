



import CommonCta from '@/components/CommonCta';
import Image from 'next/image';

const Banner = () => {
  return (
    <>
      
          <Image
                src={"https://res.cloudinary.com/garbhagudiivf/image/upload/v1739764954/FertiGenyx_Feb_25_-_Offer_-_Web_Banner--01_ojpkan.jpg"}
                alt={"Banner Image"}
                width={1920}
                height={1080}
                className='lg:h-full lg:w-full lg:object-cover'
                priority
              />
          <CommonCta classname='lg:mt-6'/>
        </>
      
   
  );
};

export default Banner;
