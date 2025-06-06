import AccordionLayout from '@/components/AccordionLayout';
import { useState } from 'react';

const Faq = ({ data, firstId = 1 }) => {
  const [activeIndex1, setActiveIndex1] = useState(firstId);
  return (
    <section className='mx-auto max-w-6xl px-4 sm:px-6 lg:px-8'>
      <h2 className='lg:pt:8 pt-6 text-center font-heading text-3xl font-bold text-brandPurpleDark lg:text-4xl'>
        Frequently asked questions
      </h2>
      <div className='px-3 pb-10 lg:pb-16'>
        <div className='mx-auto mt-10 flex max-w-6xl flex-col justify-center'>
          {data?.map((items) => (
            <AccordionLayout
              title={items?.question}
              key={items?.id}
              index={items?.id}
              activeIndex={activeIndex1}
              setActiveIndex={setActiveIndex1}
            >
              {items?.answer}
            </AccordionLayout>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
