import { treatments } from '@/db/Treatments';
import Image from 'next/image';
import Link from 'next/link';

interface TreatmentOptionsProps {
  branch: string;
  image?: string;
}

const TreatmentOptions = ({ branch }: TreatmentOptionsProps) => {
  return (
    <div className='container mx-auto'>
      <div className='px-2 py-16 text-center font-heading text-xl font-bold lg:py-20 lg:text-2xl'>
        Infertility Treatment Options at {branch}
      </div>
      <div className='grid grid-cols-2 gap-x-3 gap-y-16 px-2 pb-10 lg:grid-cols-4 lg:gap-16 lg:pb-16'>
        {treatments.slice(0, 8)?.map((items) => (
          <div
            key={items?.id}
            className='hover:bg-lightPink group flex flex-col items-center justify-between rounded-xl border border-brandPurpleDark/75 font-content transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl'
          >
            <div className='mx-auto flex h-28 w-full items-center justify-center rounded-full'>
              <Image
                src={items?.imgURL}
                alt={items?.title}
                width={100}
                height={100}
                className='h-full w-full rounded-t-xl transition-all duration-300'
                loading='lazy'
              />
            </div>
            <div className='flex flex-col items-center justify-center py-2'>
              <div className='pb-2 text-center text-xl font-bold'>{items?.title}</div>
              <div className='px-3 text-center text-base'>{items?.desc}</div>
            </div>
            <div className='w-full rounded-b-xl border border-brandPurpleDark/75 bg-brandPurpleDark py-1 text-center'>
              <Link href={items?.slug} className='font-content font-bold text-white'>
                Learn More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TreatmentOptions;
