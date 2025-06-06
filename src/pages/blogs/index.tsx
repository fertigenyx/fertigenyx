import graphcms from '@/_lib/graphcms';
import { throttledFetch } from '@/_lib/throttle';
import BlogCard from '@/components/BlogCard';
import { SEOData } from '@/db/SEOData';
import Head from 'next/head';

export const getStaticProps = async () => {
  const fetchBlogs = async () => {
    return graphcms.request(
      `{
        blogs{
            id
            title
            slug
            image {
                url
            }
            imageAlt
            description {
                text
            }
        }
    }`
    );
  };
  const { blogs } = await throttledFetch(fetchBlogs);

  if (!blogs)
    return {
      notFound: true,
    };
  return {
    props: {
      blogs,
    },
    revalidate: 180,
  };
};
const Blogs = ({ blogs }) => {
  return (
    <>
      <Head>
        <title>{SEOData.Blog.title}</title>
        <meta name='description' content={SEOData.Blog.description} />
        <meta name='keywords' content={SEOData.Blog.keywords} />
      </Head>
      <div className='relative px-4 pb-20 pt-12 sm:px-6 md:pt-16 lg:px-8 lg:pb-28 lg:pt-24'>
        <div className='relative mx-auto max-w-7xl'>
          <div className='text-center'>
            <h2 className='font-heading text-2xl font-extrabold tracking-tight text-gray-900 sm:text-5xl'>
              Blogs
            </h2>
          </div>

          <div className='mx-auto mt-12 grid max-w-xl gap-8 lg:max-w-none lg:grid-cols-3'>
            {blogs.length > 0 ? (
              blogs.map((blog) => <BlogCard key={blog.id} blog={blog} />)
            ) : (
              <div className='col-span-3 text-center'>No blogs found.</div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Blogs;
