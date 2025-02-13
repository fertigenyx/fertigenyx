import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';


const FourOhFour = () => {
  return (
    <div>
      <Head>
        <title>Four Oh! Four Error</title>
        <meta
          name='description'
          content="The page you are looking for doesn't exist or has been moved somewhere else. Apologies for the Inconvenience"
        />
      </Head>
      <div className='bg-white'>
        <main className='mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8'>
          <div className='flex-shrink-0 pt-16'>
            <Image
              className='mx-auto h-16 w-auto'
              src='https://res.cloudinary.com/garbhagudi/image/upload/v1633780956/garbhagudi-ivf/SVGs/logo_tyy9tg.svg'
              alt='Workflow'
              width={200}
              height={200}
            />
          </div>
          <div className='mx-auto max-w-xl py-16 sm:py-24'>
            <div className='text-center'>
              <p className='font-content text-sm font-semibold uppercase tracking-wide text-brandPink'>
                404 error.
              </p>
              <h1 className='mt-4 font-heading text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl'>
                This page does not exist.
              </h1>
              <p className='mt-2 font-content text-lg text-gray-500'>
                The page you are looking for could not be found.
              </p>
            </div>
            <div className='mt-8'>
                <Link
                  href='/'
                  className='font-content text-base font-medium text-brandPink4 hover:text-brandPink'
                >
                  Or go back home<span aria-hidden='true'> &rarr;</span>
                </Link>
              </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default FourOhFour;
