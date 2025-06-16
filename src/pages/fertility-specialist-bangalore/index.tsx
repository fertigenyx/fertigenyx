import { SEOData } from '@/db/SEOData';
import Head from 'next/head';
import graphcms from '@/_lib/graphcms';
import { throttledFetch } from '@/_lib/throttle';
import DoctorsList from '@/components/DoctorsList';
export const getStaticProps = async () => {
  const fetchDoctors = async () => {
    return graphcms.request(
      `{
          doctors{
              id
              name
              slug
              image {
                  url
              }
              imageAlt
              qualification
              designation
          }
      }`
    );
  };
  const { doctors } = await throttledFetch(fetchDoctors);

  if (!doctors)
    return {
      notFound: true,
    };
  return {
    props: {
      doctors,
    },
    revalidate: 180,
  };
};
const FertilityExperts = ({ doctors }) => {
  return (
    <>
      <Head>
        <title>{SEOData.FertilityExperts.title}</title>
        <meta name='description' content={SEOData.FertilityExperts.description} />
        <meta name='keywords' content={SEOData.FertilityExperts.keywords} />
      </Head>
      <section
        className='relative bg-gradient-to-br to-purple-100 px-4 pb-20 pt-12 sm:px-6 md:pt-16 lg:w-full lg:px-8'
        id='fertility-specialists'
      >
        <div className='mx-auto max-w-7xl px-3 pb-12'>
          <div className='pb-12 text-center'>
            <h1 className='my-8 font-heading text-3xl font-bold text-brandPurpleDark sm:text-4xl'>
              Meet our Fertility Specialists
            </h1>
            <p className='mx-auto max-w-prose'>
              Our team of fertility specialists have been known for their extensive clinical
              experience and research contributions, as well as for their success in treating the
              most challenging fertility cases.
            </p>
          </div>
          <DoctorsList doctors={doctors} />
        </div>
      </section>
    </>
  );
};

export default FertilityExperts;
