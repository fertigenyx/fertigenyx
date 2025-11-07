import Image from 'next/image';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import { useEffect, useRef, useState } from 'react';

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
  {
    url: '/',
    id: '3',
    title: 'Web_Banner_3',
    image: {
      url1: 'https://res.cloudinary.com/garbhagudiivf/image/upload/v1762504289/web_banners_for_our_fertigenyx_website_V2-01_zvbgw9.webp',
      url2: 'https://res.cloudinary.com/garbhagudiivf/image/upload/v1762504288/web_banners_for_our_fertigenyx_website_V2-02_ztytw6.webp',
    },
  },
];

const BannerComponent: React.FC = () => {
  const [index, setIndex] = useState(0);
  const timerRef = useRef<number | null>(null);
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    timerRef.current = window.setInterval(() => {
      setIndex((i) => (i + 1) % bannerData.length);
    }, 5000);
    return () => {
      if (timerRef.current) window.clearInterval(timerRef.current);
    };
  }, [bannerData.length]);

  function prev() {
    setIndex((i) => (i - 1 + bannerData.length) % bannerData.length);
  }
  function next() {
    setIndex((i) => (i + 1) % bannerData.length);
  }
  return (
    <div
      className='relative h-full overflow-hidden'
      aria-roledescription='carousel'
      aria-label='Promotions'
    >
      {bannerData.map((banner, i) => (
        <div
          key={banner.image.url1}
          aria-hidden={index !== i}
          className={`transition-opacity duration-500 ${index === i ? 'opacity-100' : 'opacity-0'} absolute inset-0`}
        >
          <Image
            src={banner.image.url1}
            alt={banner.title}
            fill
            className='object-center'
            priority={i === 0}
            sizes='(max-width: 1024px) 100vw, 60vw'
          />
        </div>
      ))}
      <div className='relative w-full pt-[50%]' aria-live='polite'>
        {/* aspect ratio spacer */}
      </div>
      <div className='absolute inset-y-0 left-2 hidden items-center md:flex'>
        <button
          onClick={prev}
          aria-label='Previous slide'
          className='flex h-11 w-11 items-center justify-center rounded-full bg-brandPurpleDark text-4xl text-white'
        >
          <HiChevronLeft className='h-6 w-6' />
        </button>
      </div>
      <div className='absolute inset-y-0 right-2 hidden items-center md:flex'>
        <button
          onClick={next}
          aria-label='Next slide'
          className='flex h-11 w-11 items-center justify-center rounded-full bg-brandPurpleDark text-4xl text-white'
        >
          <HiChevronRight className='h-8 w-8' />
        </button>
      </div>
    </div>
  );
};

export default BannerComponent;
