import React, { forwardRef } from "react";

const Services = forwardRef<HTMLElement>((_, ref) => {
  return (
    <section ref={ref} id="services-offered" className="h-[800px] flex items-center justify-center bg-blue-500">
      2
    </section>
  );
});
Services.displayName = "Services";

export default Services;