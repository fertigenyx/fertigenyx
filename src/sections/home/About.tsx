import CommonCta from "@/components/CommonCta";
import { forwardRef } from "react";

const About = forwardRef<HTMLElement>((_, ref) => {
  return (
    <>
      <section
        ref={ref}
        id="about-fertigenyx"
        className="w-full bg-cover bg-center flex items-start justify-start p-4 sm:p-6 md:p-10 text-white rounded"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/garbhagudiivf/image/upload/v1700052783/paripoorna/mother-with-daughter-lie-bed-dog-looking-them-min_uecuvg.webp')",
        }}
      >
        <div className="bg-black bg-opacity-30 p-3 sm:p-4 md:p-6 rounded-2xl max-w-full sm:max-w-sm md:max-w-md">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 text-brandPurpleDark">About FertiGenyx</h2>
          <p className="text-sm sm:text-base md:text-lg">
            FertiGenyx is dedicated to excellence in fertility care, serving as a leading digital partner for fertility treatment providers. We are committed to assisting couples on their journey to parenthood by connecting them with world-class fertility expertise and advanced reproductive treatments.
          </p>
          <br />
          <p className="text-sm sm:text-base md:text-lg">
            Modern fertility treatments integrate scientific advancements with personalized care. Innovative techniques such as IVF, IUI, and embryo freezing provide precise, tailored solutions to enhance conception success while ensuring the best outcomes for both mother and baby.
          </p>
        </div>
      </section>
      <CommonCta classname={""} />
    </>
  );
});

About.displayName = "About";

export default About;
