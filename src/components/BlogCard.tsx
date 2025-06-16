'use client';

import Image from 'next/image';
import Link from 'next/link';
import { memo } from 'react';

interface BlogProps {
  id: string;
  title: string;
  slug: string;
  image: {
    url: string;
  };
  imageAlt: string;
  description: {
    text: string;
  };
}

const BlogCard = ({ blog }: { blog: BlogProps }) => {
  const imageUrl =
    blog?.image?.url ||
    'https://ap-south-1.graphassets.com/AEQ42Ga7sTjWPxPil2Xudz/cm85xu3pd0b0208ph92d8dejh';

  return (
    <div className='flex flex-col overflow-hidden rounded-2xl shadow-lg transition-transform duration-200 hover:scale-[1.01]'>
      <Link href={`/blogs/${blog.slug}`}>
        <Image
          className='h-28 w-full rounded-t-2xl object-cover md:h-52'
          src={imageUrl}
          alt={blog?.imageAlt || blog?.title}
          width={500}
          height={300}
          sizes='(max-width: 768px) 100vw, 33vw'
          loading='lazy'
        />
        <div className='bg-white p-4 md:p-6'>
          <h3 className='line-clamp-1 mb-2 font-heading text-lg font-semibold text-gray-900'>
            {blog.title}
          </h3>
          <p className='line-clamp-3 text-sm text-gray-500'>
            {blog.description.text.replaceAll('\\n', ' ')}
          </p>
        </div>
      </Link>
    </div>
  );
};
export default memo(BlogCard);
