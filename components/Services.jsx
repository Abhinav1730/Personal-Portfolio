import { assets, serviceData } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const Services = () => {
  return (
    <div className="w-full px-[12%] py-10 scroll-mt-20" id="services">
      <h4 className="text-center mb-2 text-2xl font-semibold">What I Offer</h4>
      <h2 className="text-center text-5xl font-semibold">My Services</h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-light">
        Full-Stack Engineer | React.js • Node.js • MongoDB • Next.js • SQL |
        Exploring ML & Web3 |
      </p>
      <div className="grid grid-cols-[repeat(auto-fit)] gap-6 my-10">
        {serviceData.map(({ icon, title, description, link }, index) => (
          <div
            key={index}
            className="border border-gray-400 rounded-lg px-8 py-12 cursor-pointer hover:bg-[#fcf4ff] hover:-translate-y-1 duration-500"
          >
            <Image src={icon} alt="" className="w-20 rounded-lg" />
            <h3 className="text-lg my-4 text-gray-700">{title}</h3>
            <p className="text-sm text-gray-400 leading-5">{description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
