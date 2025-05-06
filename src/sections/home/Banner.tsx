import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import dynamic from 'next/dynamic';
import FormComponent from '@/components/FormComponent';

const Carousel = dynamic(() => import('nuka-carousel'), { ssr: false });

const bannerData = [
  {
    url: '/',
    id: '1',
    title: 'Web_Banner_1',
    image: {
      url1: 'https://res.cloudinary.com/garbhagudiivf/image/upload/v1740047981/FertiGenyx_Web_Banner-02_iaam6l.webp',
      url2: 'https://res.cloudinary.com/garbhagudiivf/image/upload/v1746258827/FertiGenyx_-_may_Month_Web_Banner-04_iodwpr.webp',
    },
  },
  {
    url: '/',
    id: '2',
    title: 'Web_Banner_2',
    image: {
      url1: 'https://res.cloudinary.com/garbhagudiivf/image/upload/v1746258802/FertiGenyx_-_April_Web_Banner-01_r2ofty.webp',
      url2: 'https://res.cloudinary.com/garbhagudiivf/image/upload/v1746258841/FertiGenyx_-_may_Month_Web_Banner-02_ss73ud.webp',
    },
  },
];

const BannerComponent: React.FC = () => {
  const defaultControlsConfig = {
    pagingDotsStyle: {
      display: 'none',
    },
  };

  return (
    <div className='flex flex-col gap-y-5 pb-5 md:flex-row md:pb-8'>
      {/* Banner Section */}
      <div className='h-fit w-full md:w-2/3'>
        <Carousel
          autoplay
          autoplayInterval={5000}
          className='border-0 shadow-2xl drop-shadow-2xl'
          defaultControlsConfig={defaultControlsConfig}
          wrapAround
          dragging
          enableKeyboardControls
          pauseOnHover
          renderCenterLeftControls={({ previousSlide }) => (
            <button
              onClick={previousSlide}
              className='ml-3 hidden h-11 w-11 items-center justify-center rounded-full bg-brandPurpleDark bg-opacity-70 text-4xl text-white transition duration-300 ease-in-out hover:bg-opacity-100 md:flex'
            >
              <HiChevronLeft className='mr-1' />
            </button>
          )}
          renderCenterRightControls={({ nextSlide }) => (
            <button
              onClick={nextSlide}
              className='mr-3 hidden h-11 w-11 items-center justify-center rounded-full bg-brandPurpleDark bg-opacity-70 text-4xl text-white transition duration-300 ease-in-out hover:bg-opacity-100 md:flex'
            >
              <HiChevronRight className='ml-1' />
            </button>
          )}
        >
          {bannerData.length > 0 ? (
            bannerData.map((banner) => (
              <Link href={banner.url || '#'} target='_blank' rel='noreferrer' key={banner.id}>
                <Image
                  src={banner.image.url1}
                  width={720}
                  height={360}
                  alt={banner.title}
                  priority={true}
                  sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                  className='hidden h-full w-full md:block'
                />
                <Image
                  src={banner.image.url2}
                  width={420}
                  height={360}
                  alt={banner.title}
                  priority={true}
                  sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                  className='h-[65vh] w-full object-fill md:hidden'
                />
              </Link>
            ))
          ) : (
            <div>No banners available</div>
          )}
        </Carousel>
      </div>
      {/* Form Section */}
      <div className='flex items-center justify-center bg-[#005e7e] shadow-lg md:w-1/3'>
        <FormComponent title={'Book your Appointment'} />
      </div>
    </div>
  );
};

export default BannerComponent;
