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
      url: 'https://res.cloudinary.com/garbhagudiivf/image/upload/v1740047981/FertiGenyx_Web_Banner-02_iaam6l.webp',
    },
  },
  {
    url: '/',
    id: '2',
    title: 'Web_Banner_2',
    image: {
      url: 'https://res.cloudinary.com/garbhagudiivf/image/upload/v1744366749/FertiGenyx_-_April_Web_Banner-01_r2ofty.webp',
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
    <div className='flex flex-col gap-y-6 pb-5 md:flex-row md:pb-8'>
      {/* Banner Section */}
      <div className='h-full w-full md:w-2/3'>
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
                  src={banner.image.url}
                  alt={banner.title}
                  width={1920}
                  height={1080}
                  className='h-full w-full object-cover'
                  priority
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
