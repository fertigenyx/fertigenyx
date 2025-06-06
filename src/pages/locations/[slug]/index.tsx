import graphcms from '@/_lib/graphcms';
import { throttledFetch } from '@/_lib/throttle';
import LocationBanner from '@/components/LocationBanner';
import LocationPageInner from '@/components/LocationPageInner';
import TreatmentOptions from '@/components/TreatmentOptions';
import Head from 'next/head';

export const getStaticProps = async ({ params }) => {
  const fetchBranch = async ({ slug }) => {
    return graphcms.request(
      `query ($slug: String!) {
        branch(where: {slug: $slug}) {
          title
        address
        mapLink
        about {
          raw
        }
        doctor {
          id
          name
          qualification
          designation
          slug
          imageAlt
          image {
            url
          }
      }
        }
      }`,
      { slug }
    );
  };
  const { branch } = await throttledFetch(fetchBranch, { slug: params.slug });

  if (!branch)
    return {
      notFound: true,
    };
  return {
    props: {
      branch,
    },
    revalidate: 180,
  };
};

export const getStaticPaths = async () => {
  const fetchBranches = async () => {
    return graphcms.request(`
              {
                  branches{
                  slug
                  }
              }
            `);
  };
  const { branches } = await throttledFetch(fetchBranches);
  return {
    paths: branches.map(({ slug }) => ({ params: { slug } })),
    fallback: true,
  };
};
const Locations = ({ branch }) => {
  return (
    <>
      <Head>
        <title>{`FertiGenyx | ${branch?.title} | Fertility Centre | Bangalore`}</title>
        <meta
          name='title'
          content={`FertiGenyx | ${branch?.title} | Fertility Centre | Bangalore`}
        />
        <meta
          name='description'
          content='Best IVF Centre in Bangalore. Our IVF centre in Bangalore is easily accessible with best in class facilities and expert doctors'
        />
        <meta
          name='keywords'
          content={`${branch?.title}, Fertility Clinic, Bangalore, Reproductive Health Services`}
        />
      </Head>
      <div>
        <LocationBanner branchTitle={branch?.title} />
        <TreatmentOptions branch={branch?.title} />
        <LocationPageInner branch={branch} />
      </div>
    </>
  );
};

export default Locations;
