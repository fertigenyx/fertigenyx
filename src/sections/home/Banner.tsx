import Image from 'next/image';
import Link from 'next/link';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import dynamic from 'next/dynamic';
import useIsMobile from '@/components/useIsMobile';
const FormComponent = dynamic(() => import('@/components/FormComponent'), { ssr: true });

const Carousel = dynamic(() => import('nuka-carousel'), {
  ssr: false,
  loading: () => <div className='h-[450px] w-full bg-gray-200 md:h-[400px]'></div>,
});

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
  const isMobile = useIsMobile();
  return (
    <div className='flex flex-col gap-y-6'>
      <div className='grid grid-cols-1 gap-y-5 md:grid-cols-3'>
        {/* Banner Section */}
        <div className='col-span-2 h-[450px] w-full md:h-[400px]'>
          <Carousel
            autoplay
            autoplayInterval={5000}
            className='border-0 shadow-md'
            defaultControlsConfig={defaultControlsConfig}
            wrapAround
            dragging
            enableKeyboardControls
            pauseOnHover
            renderCenterLeftControls={({ previousSlide }) => (
              <button
                onClick={previousSlide}
                className='ml-3 hidden h-11 w-11 items-center justify-center rounded-full bg-brandPurpleDark bg-opacity-70 text-4xl text-white transition hover:bg-opacity-100 md:flex'
              >
                <HiChevronLeft className='mr-1' />
              </button>
            )}
            renderCenterRightControls={({ nextSlide }) => (
              <button
                onClick={nextSlide}
                className='mr-3 hidden h-11 w-11 items-center justify-center rounded-full bg-brandPurpleDark bg-opacity-70 text-4xl text-white transition hover:bg-opacity-100 md:flex'
              >
                <HiChevronRight className='ml-1' />
              </button>
            )}
          >
            {bannerData.map((banner, index) => {
              const imageUrl = isMobile ? banner.image.url2 : banner.image.url1;

              return (
                <Link href={banner.url} key={banner.id}>
                  <div className='relative h-[450px] w-full md:h-[400px]'>
                    <Image
                      src={imageUrl}
                      width={isMobile ? 420 : 720}
                      height={360}
                      alt={banner.title}
                      priority={index === 0}
                      className='h-full w-full'
                    />
                  </div>
                </Link>
              );
            })}
          </Carousel>
        </div>
        {/* Form Section */}
        <div className='col-span-1 flex items-center justify-center bg-[#005e7e] shadow-lg'>
          <FormComponent title={'Book your Appointment'} />
        </div>
      </div>
      <div className='flex w-full justify-center'>
        <h2 className='w-fit rounded-md bg-brandPink2 p-5 py-1.5 text-center text-base font-bold text-white md:py-2.5 lg:text-xl'>
          Trusted by over 11,000 couples across the Globe for over 14 years
        </h2>
      </div>
    </div>
  );
};

export default BannerComponent;
