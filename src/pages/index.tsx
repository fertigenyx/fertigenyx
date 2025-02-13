import { Geist, Geist_Mono } from "next/font/google";
import { useRef } from "react";
import Nav from "@/components/Header";
import Footer from "@/components/Footer";
import About from "@/sections/home/About";
import Services from "@/sections/home/Services";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  const sectionRefs = {
    "about-fertigenyx": useRef<HTMLElement>(null),
    "services-offered": useRef<HTMLElement>(null),
    "why-fertigenyx": useRef<HTMLElement>(null),
    "fertility-specialists": useRef<HTMLElement>(null),
    "causes-of-infertility": useRef<HTMLElement>(null),
    "ivf-indications": useRef<HTMLElement>(null),
    "what-is-ivf": useRef<HTMLElement>(null),
  };

  return (
    <div className={`${geistSans.variable} ${geistMono.variable} font-[family-name:var(--font-geist-sans)]`}>
      <Nav sectionRefs={sectionRefs} />
      <main className="grid items-center justify-items-center mt-5 lg:p-8 pb-20 gap-10 sm:p-20">

      <About ref={sectionRefs["about-fertigenyx"]} />
        <Services ref={sectionRefs["services-offered"]} />
        {/* <WhyFertigenyx ref={sectionRefs["why-fertigenyx"]} />
        <FertilitySpecialists ref={sectionRefs["fertility-specialists"]} />
        <CausesOfInfertility ref={sectionRefs["causes-of-infertility"]} />
        <IvfIndications ref={sectionRefs["ivf-indications"]} />
        <WhatIsIvf ref={sectionRefs["what-is-ivf"]} /> */}
        
        {/* {Object.entries(sectionRefs).map(([key, ref], index) => {
          const colors = [
            "bg-green-500",
            "bg-blue-500",
            "bg-purple-500",
            "bg-orange-500",
            "bg-red-500",
            "bg-yellow-500",
            "bg-pink-500",
          ];
          return (
            <section
              key={key}
              ref={ref}
              className={`h-[800px] flex items-center justify-center ${colors[index]}`}
            >
            </section>
          );
        })} */}
      </main>
      <Footer />
    </div>
  );
}
