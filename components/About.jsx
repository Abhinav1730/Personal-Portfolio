import { assets, infoList, toolsData } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

const About = () => {
  const viewportOptions = { once: false, amount: 0.1, margin: "-100px" };
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={viewportOptions}
      transition={{ duration: 0.3, ease: "easeOut" }}
      id="about"
      className="w-full px-6 sm:px-10 md:px-[10%] py-10 scroll-mt-20"
    >
      <motion.h4
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewportOptions}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className="text-center mb-2 text-xl sm:text-2xl font-semibold"
      >
        Introduction
      </motion.h4>
      <motion.h2
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewportOptions}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className="text-center text-3xl sm:text-5xl font-semibold"
      >
        About Me
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={viewportOptions}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 my-10"
      >
        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={viewportOptions}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="w-48 sm:w-64 md:w-80 flex-shrink-0"
        >
          <Image
            src={assets.user_image}
            alt="Me"
            className="w-full rounded-3xl"
          />
        </motion.div>

        {/* Description + Info */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={viewportOptions}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="flex-1 w-full"
        >
          <p className="mb-8 text-sm sm:text-base max-w-3xl font-extralight leading-relaxed text-gray-800 dark:text-gray-200">
            I'm a passionate Full Stack Developer with expertise in React, Next.js,Node.js, and various modern web frameworks, 
            specializing in AI integration and intelligent system development. I've built scalable, production-ready 
            applications like Legalyzer, Plans24, FormAI, ReliefCare, and DeepSeek AI Clone, seamlessly integrating LLM APIs, AI-powered 
            features, and advanced technologies such as face recognition and voice assistants. With hands-on internship 
            experience at leading tech companies, I've delivered impactful solutions including backend authentication 
            systems, AI-driven security implementations, and interactive mapping features. My focus on full stack 
            innovation, combined with expertise in prompt engineering and AI optimization, enables me to transform 
            complex ideas into user-centric digital solutions that drive business value.
          </p>

          {/* Info Cards */}
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-3xl">
            {infoList.map(({ icon, title, description }, index) => (
              <motion.li
                whileHover={{ scale: 1.05 }}
                className="border border-gray-400 dark:border-gray-600 rounded-xl p-4 cursor-pointer hover:bg-[#fcf4ff] dark:hover:bg-[#1e1b2f] hover:-translate-y-1 duration-300"
                key={index}
              >
                <Image src={icon} alt={title} className="w-8 mb-2" />
                <h3 className="mb-2 font-semibold text-gray-700 dark:text-white">
                  {title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {description}
                </p>
              </motion.li>
            ))}
          </ul>

          {/* Tools Section */}
          <motion.h4
            initial={{ y: 10, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={viewportOptions}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="my-6 text-gray-700 dark:text-gray-300 font-medium text-lg"
          >
            Tools I use
          </motion.h4>

          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={viewportOptions}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="flex flex-wrap gap-4"
          >
            {toolsData.map((tool, index) => (
              <motion.li
                whileHover={{ scale: 1.1 }}
                className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 dark:border-gray-600 rounded-lg cursor-pointer hover:bg-[#fcf4ff] dark:hover:bg-[#1e1b2f] hover:-translate-y-1 duration-300"
                key={index}
              >
                <Image src={tool} alt="Tool" className="w-5 sm:w-7" />
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default About;
