import { RichText } from '@graphcms/rich-text-react-renderer';

const TreatmentIndication = ({ treatment }) => {
  return (
    <section className='bg-white px-6 py-10 lg:px-14 lg:py-16'>
      <div className='space-y-6 font-content text-base leading-relaxed lg:text-lg'>
        {treatment?.description?.raw ? (
          <RichText content={treatment?.description?.raw} />
        ) : (
          <p>No description available.</p>
        )}
      </div>
    </section>
  );
};

export default TreatmentIndication;
