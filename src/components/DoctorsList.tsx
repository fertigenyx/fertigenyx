import Image from 'next/image';
import Link from 'next/link';

const DoctorsList = ({ doctors }) => {
  return (
    <div className='col-span-full mx-auto grid grid-cols-2 flex-wrap justify-center space-y-5 sm:gap-x-14 sm:gap-y-5 sm:space-y-0 md:flex lg:max-w-7xl lg:grid-cols-2'>
      {doctors?.map((item, index) => (
        <Link
          className='flex flex-col items-center justify-center rounded-xl px-2 text-center'
          key={item.id}
          href={`/fertility-experts/${item.slug}`}
        >
          <div className='relative'>
            <div className='absolute inset-0 rounded-full bg-gradient-to-br from-brandBrown/80 to-[#204C6B]/40 bg-[length:400%]' />
            <Image
              className='z-10 rounded-full shadow-xl drop-shadow-xl'
              src={item.image.url}
              alt={item.imageAlt || item.name}
              width={208}
              height={208}
              loading={index === 0 ? 'eager' : 'lazy'}
              quality={25}
              priority={index === 0}
            />
          </div>
          <div className='mt-4 h-28 space-y-1'>
            <h3 className='text-lg font-medium'>{item.name}</h3>
            <p className='text-xs text-brandPurpleDark'>{item.qualification}</p>
            <p className='text-sm font-semibold text-brandBrown'>{item.designation}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default DoctorsList;
