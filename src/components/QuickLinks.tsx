import { LocationsDB } from '@/db/Locations';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { HiCheck } from 'react-icons/hi';

const QuickLinks = () => {
  const path = usePathname();
  const filteredLocations = LocationsDB?.filter((loc) => {
    return loc?.href !== path;
  });
  return (
    <div className='bg-brandPurple2 p-3'>
      <div className='mx-auto flex max-w-7xl flex-col items-start justify-evenly pb-10 pt-10 lg:flex-row'>
        <h2 className='pb-6 font-heading text-3xl font-bold underline lg:text-4xl'>
          Our Other Branches
        </h2>
        <div className='grid grid-cols-1 gap-3 lg:grid-cols-2'>
          {filteredLocations?.map((curr, index) => (
            <Link
              key={index}
              href={curr.href}
              className='flex items-center font-content text-sm font-semibold hover:underline lg:text-base'
            >
              <HiCheck className='mr-2 h-6 w-6 rounded-full bg-green-700 stroke-2 p-1 text-white' />
              Best IVF Centre in {curr.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuickLinks;
