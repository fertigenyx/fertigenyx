import Image from 'next/image';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import { useEffect, useRef, useState } from 'react';

const bannerData = [
  {
    id: '1',
    title: 'Web_Banner_1',
    image:
      'https://res.cloudinary.com/garbhagudiivf/image/upload/f_auto,q_auto,w_720,h_360,c_fill/v1740047981/FertiGenyx_Web_Banner-02_iaam6l.webp',
  },
  {
    id: '3',
    title: 'Web_Banner_3',
    image:
      'https://res.cloudinary.com/garbhagudiivf/image/upload/f_auto,q_auto,w_720,h_360,c_fill/v1762504289/web_banners_for_our_fertigenyx_website_V2-01_zvbgw9.webp',
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
  }, []);

  const prev = () => setIndex((i) => (i - 1 + bannerData.length) % bannerData.length);
  const next = () => setIndex((i) => (i + 1) % bannerData.length);

  return (
    <div
      className='relative h-full overflow-hidden'
      aria-roledescription='carousel'
      aria-label='Promotions'
    >
      {bannerData.map((banner, i) => (
        <div
          key={banner.id}
          aria-hidden={index !== i}
          className={`absolute inset-0 transition-opacity duration-500 ${index === i ? 'opacity-100' : 'opacity-0'}`}
        >
          <Image
            src={banner.image}
            alt={banner.title}
            fill
            priority={i === 0}
            fetchPriority={i === 0 ? 'high' : 'auto'}
            className='object-cover object-center'
            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 60vw'
          />
        </div>
      ))}

      <div className='relative w-full pt-[50%]' aria-live='polite' />

      <div className='absolute inset-y-0 left-2 hidden items-center md:flex'>
        <button
          onClick={prev}
          aria-label='Previous slide'
          className='flex h-11 w-11 items-center justify-center rounded-full bg-brandPurpleDark text-white'
        >
          <HiChevronLeft className='h-6 w-6' />
        </button>
      </div>

      <div className='absolute inset-y-0 right-2 hidden items-center md:flex'>
        <button
          onClick={next}
          aria-label='Next slide'
          className='flex h-11 w-11 items-center justify-center rounded-full bg-brandPurpleDark text-white'
        >
          <HiChevronRight className='h-6 w-6' />
        </button>
      </div>
    </div>
  );
};

export default BannerComponent;
