import { assets, workData } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

const Projects = () => {
  const viewportOptions = { once: false, amount: 0.1, margin: "-100px" };
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={viewportOptions}
      transition={{ duration: 0.3, ease: "easeOut" }}
      id="work"
      className="w-full px-[12%] py-10 scroll-mt-20"
    >
      <motion.h4
        initial={{ y: -10, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={viewportOptions}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className="text-center mb-2 text-2xl font-semibold"
      >
        My Portfolio
      </motion.h4>
      <motion.h2
        initial={{ y: -10, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={viewportOptions}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className="text-center text-5xl font-semibold"
      >
        My Projects
      </motion.h2>
      <motion.div className="grid grid-cols-[repeat(auto-fit)] my-10 gap-5">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={viewportOptions}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="grid grid-cols-[repeat(auto-fit)] gap-6 my-10"
        >
          {workData.map(({ title, description, icon, link }, index) => (
            <motion.div
              whileInView={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
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
                <div className="flex items-center mt-5">
                  <a href={link} target="_blank" rel="noopener noreferrer">
                    <p className="font-light text-blue-500 text-md">
                      Click Here to Visit{" "}
                      <Image
                        src={assets.send_icon}
                        alt="send icon"
                        className="w-5"
                      />
                    </p>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Projects;
