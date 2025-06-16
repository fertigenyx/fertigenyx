'use client';
const RelatedSearches = ({ data }) => {
  return (
    <section
      aria-labelledby='related-searches-heading'
      className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'
    >
      <h2
        id='related-searches-heading'
        className='py-8 text-center font-heading text-2xl font-bold text-brandPurpleDark sm:text-3xl lg:py-14'
      >
        Related Searches
      </h2>

      <ul className='flex flex-wrap justify-center gap-3 text-center font-content'>
        {data.map((item) => (
          <li
            key={item.id}
            className='rounded-md bg-brandBrown px-4 py-2 text-sm text-white transition-colors duration-200 hover:bg-brandPurpleDark'
          >
            {item.item}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default RelatedSearches;
