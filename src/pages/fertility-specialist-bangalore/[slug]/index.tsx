import graphcms from '@/_lib/graphcms';
import { throttledFetch } from '@/_lib/throttle';
import { RichText } from '@graphcms/rich-text-react-renderer';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Suspense } from 'react';
import { HiPhone } from 'react-icons/hi';

export const getStaticProps = async ({ params }) => {
  const fetchDoctor = async ({ slug }) => {
    return graphcms.request(
      `query ($slug: String!) {
              doctor(where: { slug: $slug }) {
                id
                name
                designation
                qualification
                image {
                  url
                }
                imageAlt
                languages
                medicalRegNo
                bio {
                  raw
                  text
                }
                educationCredentials {
                  raw
                  text
                }
                experienceExpertise {
                  raw
                  text
                }
                approachToIvfTreatment
                keyFeaturesOfTreatment
                metaTitle
                metaDescription
              }
            }
            `,
      { slug: slug }
    );
  };
  const { doctor } = await throttledFetch(fetchDoctor, { slug: params.slug });

  if (!doctor)
    return {
      notFound: true,
    };
  return {
    props: {
      doctor,
    },
    revalidate: 180,
  };
};

export const getStaticPaths = async () => {
  const fetchDoctors = async () => {
    return graphcms.request(`
            {
                doctors{
                slug
                }
            }
          `);
  };
  const { doctors } = await throttledFetch(fetchDoctors);
  return {
    paths: doctors.map(({ slug }) => ({ params: { slug } })),
    fallback: true,
  };
};
const FertilityExpertPage = ({ doctor }) => {
  const path = usePathname();
  return (
    <>
      <Head>
        <link rel='preload' href={doctor?.image?.url} as='image' />
        <title>{doctor?.metaTitle || `${doctor?.name} | Fertigenyx`}</title>
        <meta name='title' content={doctor?.metaTitle || `${doctor?.name} | Fertigenyx`} />
        <meta
          name='description'
          content={doctor?.metaDescription || `${doctor?.bio?.text?.slice(0, 100)}`}
        />
      </Head>
      <div className='container relative mx-auto bg-white px-4 py-16 sm:px-6 lg:px-8'>
        {/* Doctor Header */}
        <div className='flex flex-col items-center gap-4 rounded-lg bg-gray-100 p-4 shadow-md'>
          <div className='mb-4 rounded-full border border-gray-300 shadow-md md:mb-0'>
            <Image
              src={doctor?.image?.url}
              alt={doctor?.imageAlt || doctor?.name}
              width={180}
              height={140}
              className='rounded-full'
              priority={true}
            />
          </div>
          <div className='text-center md:ml-6'>
            <h1 className='text-xl font-bold text-brandPurpleDark'>{doctor?.name}</h1>
            {doctor?.designation && <p className='mt-1'>{doctor?.designation}</p>}
            <p className='text-sm'>{doctor?.qualification}</p>
            {doctor?.medicalRegNo && (
              <p className='text-sm text-gray-500'>
                Medical Registration Number (KMC) : {doctor?.medicalRegNo}
              </p>
            )}
            {doctor?.languages && (
              <p className='text-sm text-gray-500'>Languages Known : {doctor?.languages}</p>
            )}
            {/* Call to Action */}
            <div className='my-5 flex w-full justify-between space-x-3'>
              <Link
                href={`/contact-us?pageVisit=${path}`}
                className='cursor-pointer rounded-md bg-brandPurpleDark px-4 py-2 text-white hover:bg-brandPurpleDark/80'
              >
                Book Appointment
              </Link>
              <Link
                href='tel:+919071234003'
                className='flex w-fit cursor-pointer items-center gap-2 rounded-md bg-brandPurpleDark px-4 py-2 text-white hover:bg-brandPurpleDark/80'
              >
                <HiPhone /> Call Us
              </Link>
            </div>
          </div>
        </div>

        {/* Overview */}
        <div className='mt-7 min-h-fit w-full md:mt-14'>
          <div className='prose mb-4 text-justify text-gray-800'>
            <Suspense fallback={<p>Loading content...</p>}>
              {doctor?.bio?.raw ? (
                <RichText content={doctor?.bio?.raw} />
              ) : (
                <p>No description available.</p>
              )}
            </Suspense>
          </div>
        </div>
      </div>
    </>
  );
};

export default FertilityExpertPage;
