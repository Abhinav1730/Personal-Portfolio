import { assets, workData } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const Projects = () => {
  return (
    <div id="work" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-2xl font-semibold">My Portfolio</h4>
      <h2 className="text-center text-5xl font-semibold">My Projects</h2>
      <div className="grid grid-cols-[repeat(auto-fit)] my-10 gap-5">
        <div className="grid grid-cols-[repeat(auto-fit)] gap-6 my-10">
          {workData.map(({ title, description, icon }, index) => (
            <div
              key={index}
              className="border border-gray-400 rounded-lg px-8 py-12 cursor-pointer hover:bg-[#fcf4ff] hover:-translate-y-1 duration-500"
            >
              <div>
                <div>
                  <Image src={icon} alt="" className="w-20 rounded-lg" />
                  <h2 className="text-lg my-4 text-black font-semibold">
                    {title}
                  </h2>
                  <p className="text-sm text-gray-700 leading-5">
                    {description}
                  </p>
                </div>
                <div>
                  <Image
                    src={assets.send_icon}
                    alt="send icon"
                    className="w-5 mt-5"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
        <a
          className="w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full px-10 py-3 mx-auto my-20 hover:bg-[#fcf4ff] duration-500"
          href=""
        >
          Show More{" "}
          <Image
            src={assets.right_arrow_bold}
            alt="right arrow"
            className="w-4"
          />
        </a>
      </div>
    </div>
  );
};

export default Projects;
