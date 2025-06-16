import Link from 'next/link';
import { usePathname } from 'next/navigation';

const LocationBanner = ({ branchTitle }: { branchTitle: string }) => {
  const path = usePathname();
  return (
    <div>
      <div className='bg-[url(https://res.cloudinary.com/garbhagudiivf/image/upload/f_auto,q_auto/v1672381537/Misc/happy-pregnant-woman-late-pregnancy-stage-sitting-grass-lawn-min_11zon_xkeac0.webp)] bg-cover bg-right bg-no-repeat shadow-2xl sm:bg-center'>
        <div className='h-full w-full bg-gradient-to-r from-gray-800 to-gray-800/10 py-6'>
          <div className='mx-auto flex h-[50vh] max-w-5xl items-center'>
            <div className='absolute z-10'>
              <div className='mx-auto w-full px-3 text-center text-base text-white md:max-w-lg md:text-left'>
                <span className='text-3xl font-bold leading-tight lg:text-4xl'>Welcome to</span>
                <h1 className='text-3xl font-bold leading-tight lg:text-4xl'>
                  {' '}
                  GarbhaGudi IVF Center
                  {branchTitle && <span className='text-brandPink'> in {branchTitle}</span>}
                </h1>
                <h3 className='mt-4 font-semibold leading-7 text-gray-300'>
                  We are proud to offer infertility treatment at 6 locations across Bangalore.{' '}
                  <br />
                  Please contact us today to learn more about our services and find the location
                  nearest you.
                </h3>
              </div>
              <div className='text-center lg:px-3 lg:text-left'>
                <button className='mt-4 rounded-lg bg-brandPink px-4 py-2 font-semibold text-white'>
                  <Link href={`/contact-us?pageVisit=${path}`}>Contact Us</Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LocationBanner;
