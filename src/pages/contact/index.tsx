import FormComponent from '@/components/FormComponent';
import { SEOData } from '@/db/SEOData';
import Head from 'next/head';
import Image from 'next/image';

const ContactPage = () => {
  return (
    <>
      <Head>
        <title>{SEOData.ContactUs.title}</title>
        <meta name='description' content={SEOData.ContactUs.description} />
        <meta name='keywords' content={SEOData.ContactUs.keywords} />
      </Head>

      <div className='flex w-full items-center justify-center px-3 py-8'>
        <div className='w-fit'>
          <Image
            src='https://res.cloudinary.com/garbhagudiivf/image/upload/f_auto,q_auto/v1746533842/Fertility%20Treatment/Web_Page-02_vwajdh.webp'
            alt='formBanner'
            className='mx-auto mt-4 h-48 rounded-t-md md:max-w-2xl'
            width={1024}
            height={400}
            priority={true}
          />
          <div className='mx-auto rounded-b-md bg-gray-800 pb-8'>
            <FormComponent title={'Enquiry Form'} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
