import graphcms from '@/_lib/graphcms';
import { throttledFetch } from '@/_lib/throttle';
import { RichText } from '@graphcms/rich-text-react-renderer';
import Head from 'next/head';
import Image from 'next/image';

export const getStaticProps = async ({ params }) => {
  const fetchBlogs = async ({ slug }) => {
    return graphcms.request(
      `
        query ($slug: String!) {
            blog(where: { slug: $slug }) {
            id
            title
            slug
            metaTitle
            metaDescription
            metaKeywords
            image {
              url
            }
            imageAlt
            description {
                raw
                text
            }
              }
            }
          `,
      {
        slug,
      }
    );
  };
  const { blog } = await throttledFetch(fetchBlogs, { slug: params.slug });

  if (!blog)
    return {
      notFound: true,
    };
  return {
    props: {
      blog,
    },
    revalidate: 180,
  };
};

export const getStaticPaths = async () => {
  const fetchBlogs = async () => {
    return graphcms.request(`
          {
            blogs {
              slug
            }
          }
        `);
  };
  const { blogs } = await throttledFetch(fetchBlogs);
  return {
    paths: blogs.map(({ slug }) => ({ params: { slug } })),
    fallback: true,
  };
};
const BlogPage = ({ blog }) => {
  return (
    <>
      <div>
        <Head>
          <link rel='preload' href={blog?.image?.url} as='image' />
          <title>{blog?.metaTitle}</title>
          <meta name='title' content={blog?.metaTitle} />
          <meta name='description' content={blog?.metaDescription} />
          <meta name='keywords' content={blog?.metaKeywords} />
        </Head>
        <div className='relative overflow-hidden bg-white py-16 dark:bg-gray-800'>
          <div className='relative px-4 sm:px-6 lg:px-8'>
            <div className='mx-auto max-w-7xl'>
              <h1 className='flex flex-col items-center justify-center gap-2'>
                <span className='block text-center font-heading text-2xl font-bold leading-8 tracking-tighter text-gray-800 dark:text-gray-200 sm:text-4xl'>
                  {blog?.title}
                </span>
              </h1>
              <Image
                className='my-8 w-full rounded-lg'
                src={blog?.image?.url}
                alt={blog?.title}
                width={500}
                height={500}
                priority={true}
              />
              <div className='text-gray-800 dark:text-gray-200'>
                {blog?.description?.raw ? (
                  <RichText content={blog?.description?.raw} />
                ) : (
                  <p>No description available.</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPage;
