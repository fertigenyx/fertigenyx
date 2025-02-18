import CommonCta from "@/components/CommonCta";
import { services } from "@/components/constants/fertilityServices";
import { forwardRef } from "react";

const CausesOfInfertility = forwardRef<HTMLElement>((_, ref) => {
  return (
    <section
      ref={ref}
      id="causes-of-infertility"
      className="lg:px-14 px-6"
     
    >
        <h2 className="lg:text-3xl text-2xl md:text-4xl lg:text-center font-bold mb-4 text-brandPurpleDark lg:py-6">Causes of Infertility – Understanding Key Factors</h2>
        <div className='font-content'>
            <div className='pb-4'>
            Infertility arises from various factors affecting both men and women, including hormonal imbalances, ovulation disorders, uterine or fallopian tube abnormalities, sperm issues, and age-related concerns. Lifestyle choices like smoking, excessive alcohol intake, obesity, and stress can further impact fertility. Medical conditions such as endometriosis, PCOS, and genetic disorders also contribute to challenges in conception.
            </div>
          </div>
        <div className='font-content'>
            <div className='pb-4'>
            At our IVF Centre, we recognize the emotional and physical toll of infertility. Our expert team provides comprehensive assessments and advanced diagnostics to identify underlying causes, ensuring timely intervention for better treatment outcomes.
            </div>
          </div>
        <div className="text-center text-1xl md:text-2xl  font-bold mb-4 text-brandBrown lg:my-10">Take the first step towards parenthood with our cutting-edge fertility solutions—where hope meets expert care.</div>

        <div className='font-content text-center'>
            <div className='pb-4'>
            We partner with GarbhaGudi IVF Centre which is equipped with state-of-the-art infrastructure and advanced technology to address the growing problem of infertility through
            </div>
          </div>
          <ul className="space-y-4 lg:px-16">
        {services.map((service) => (
          <li key={service?.id} className="text-base">
            <span className="font-bold font-content">{service?.id}. <span className="text-brandPurpleDark">{service?.title}</span>:</span> {service?.description}
          </li>
        ))}
      </ul>
        <CommonCta classname="mt-10"/>
    </section>
  );
});
CausesOfInfertility.displayName = "CausesOfInfertility";

export default CausesOfInfertility;
