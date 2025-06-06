'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

const MapSections = ({ address, mapLink }: { address: string; mapLink: string }) => {
  const mapRef = useRef<HTMLDivElement | null>(null);
  const [loadMap, setLoadMap] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setLoadMap(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (mapRef.current) observer.observe(mapRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className='relative order-2 flex h-[44rem] w-full items-end justify-start overflow-hidden rounded-lg bg-gray-800 p-2 md:ml-auto lg:h-auto lg:w-1/2 lg:p-10'
      ref={mapRef}
    >
      {loadMap && (
        <iframe
          width='100%'
          height='100%'
          className='border-primary absolute inset-0 rounded-lg border'
          loading='lazy'
          title='map'
          src={mapLink}
        ></iframe>
      )}

      <div className='absolute bottom-1.5 z-10 flex flex-wrap rounded-xl bg-white py-3 shadow-xl'>
        <div className='px-4 lg:w-1/2'>
          <h2 className='title-font text-sm font-semibold tracking-widest text-gray-800'>
            ADDRESS
          </h2>
          <p className='mt-1 text-xs'>{address}</p>
        </div>
        <div className='mt-4 px-6 lg:mt-0 lg:w-1/2'>
          <h2 className='text-xs font-semibold tracking-widest text-gray-800'>EMAIL</h2>
          <div className='leading-relaxed'>
            <Link
              href='mailto:fertigenyx@gmail.com'
              className='text-primary text-sm underline transition-all duration-100 hover:text-base'
            >
              fertigenyx@gmail.com
            </Link>
          </div>
          <h2 className='mt-4 text-xs font-semibold tracking-widest text-gray-800'>PHONE</h2>
          <div className='text-primary text-sm leading-relaxed underline transition-all duration-100 hover:text-base'>
            <Link href='tel:+919071234003'>+91 9071 2340 03</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapSections;
