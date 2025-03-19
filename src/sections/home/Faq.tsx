import AccordionLayout from '@/components/AccordionLayout';
import { useState } from 'react';

const Faq = () => {
  const [activeIndex1, setActiveIndex1] = useState(1);
  return (
    <div className='px-1'>
      <h2 className='lg:pt:8 pt-6 text-center font-heading text-3xl font-bold text-brandPurpleDark lg:text-4xl'>
        Frequently asked questions
      </h2>
      <div className='px-3 pb-10 lg:pb-16'>
        <div className='mx-auto mt-10 flex max-w-6xl flex-col justify-center'>
          {data?.map((items) => (
            <AccordionLayout
              title={items?.Question}
              key={items?.id}
              index={items?.id}
              activeIndex={activeIndex1}
              setActiveIndex={setActiveIndex1}
            >
              {items?.Answer}
            </AccordionLayout>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;

const data = [
  {
    id: 1,
    Question: 'Why Choose FertiGenyx for Fertility treatment?',
    Answer:
      'We offer advanced technology, expert specialists, personalized care, and help in achieving outstanding IVF success rates.',
  },
  {
    id: 2,
    Question: 'What IVF Treatments are available at FertiGenyx?',
    Answer:
      'We provide IVF, ICSI, IUI, fertility preservation, and tailored treatment plans for every patient.',
  },
  {
    id: 3,
    Question: 'How much does IVF treatment cost?',
    Answer:
      'The cost of IVF treatment in Bangalore may vary depending on individual circumstances and treatment requirements. We offer various IVF packages.',
  },
  {
    id: 4,
    Question: 'Is IVF 100% accurate?',
    Answer: `IVF is a highly accurate and effective fertility treatment, but it's important to note that success rates can vary depending on individual factors.`,
  },
  {
    id: 5,
    Question: 'Does insurance cover IVF cost in India?',
    Answer: `In India, insurance coverage for IVF treatment can vary depending on the policy and insurance provider. It's best to check with your insurance provider to see if IVF treatment is covered under your policy. We offer various financing options to help make IVF treatment more affordable and accessible for our patients.`,
  },
];
