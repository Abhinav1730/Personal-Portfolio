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
      transition={{ duration: 0.5, ease: "easeOut" }}
      id="about"
      className="w-full px-6 sm:px-10 md:px-[10%] py-16 sm:py-20 scroll-mt-20 bg-gradient-to-b from-gray-50 to-white dark:from-[#11001F] dark:to-[#1a0033]"
    >
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewportOptions}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="text-center mb-2 text-xl sm:text-2xl font-semibold text-gray-600 dark:text-gray-400"
      >
        Introduction
      </motion.h4>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewportOptions}
        transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
        className="text-center text-3xl sm:text-5xl lg:text-6xl font-bold text-gray-800 dark:text-white mb-4"
      >
        About Me
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={viewportOptions}
        transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
        className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 my-10"
      >
        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, x: -50 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          viewport={viewportOptions}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="w-48 sm:w-64 md:w-80 flex-shrink-0 relative group"
        >
          <motion.div
            whileHover={{ scale: 1.05, rotate: 2 }}
            transition={{ duration: 0.3 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-400/20 to-blue-400/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
            <Image
              src={assets.user_image}
              alt="Me"
              className="w-full rounded-3xl relative z-10 shadow-2xl"
            />
          </motion.div>
        </motion.div>

        {/* Description + Info */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={viewportOptions}
          transition={{ duration: 0.6, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="flex-1 w-full"
        >
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOptions}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mb-8 text-sm sm:text-base max-w-3xl font-extralight leading-relaxed text-gray-800 dark:text-gray-200"
          >
            I'm a passionate Full Stack Developer with expertise in React, Next.js,Node.js, and various modern web frameworks, 
            specializing in AI integration and intelligent system development. I've built scalable, production-ready 
            applications like Legalyzer, Plans24, FormAI, ReliefCare, and DeepSeek AI Clone, seamlessly integrating LLM APIs, AI-powered 
            features, and advanced technologies such as face recognition and voice assistants. With hands-on internship 
            experience at leading tech companies, I've delivered impactful solutions including backend authentication 
            systems, AI-driven security implementations, and interactive mapping features. My focus on full stack 
            innovation, combined with expertise in prompt engineering and AI optimization, enables me to transform 
            complex ideas into user-centric digital solutions that drive business value.
          </motion.p>

          {/* Info Cards */}
          <motion.ul 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={viewportOptions}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-3xl"
          >
            {infoList.map(({ icon, title, description }, index) => (
              <motion.li
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={viewportOptions}
                transition={{ 
                  duration: 0.5, 
                  delay: 0.7 + index * 0.1,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
                whileHover={{ 
                  scale: 1.05, 
                  y: -4,
                  transition: { duration: 0.3 }
                }}
                className="group border border-gray-300 dark:border-gray-700 rounded-xl p-4 sm:p-5 cursor-pointer bg-white dark:bg-[#1a0033] hover:bg-gradient-to-br hover:from-[#fcf4ff] hover:to-[#f0e6ff] dark:hover:from-[#2a0044] dark:hover:to-[#1e1b2f] hover:shadow-lg hover:shadow-purple-200/50 dark:hover:shadow-purple-900/30 transition-all duration-300"
                key={index}
              >
                <Image src={icon} alt={title} className="w-8 mb-2" />
                <h3 className="mb-2 font-semibold text-gray-700 dark:text-white">
                  {title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm group-hover:text-gray-800 dark:group-hover:text-gray-200 transition-colors duration-300">
                  {description}
                </p>
              </motion.li>
            ))}
          </motion.ul>

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
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex flex-wrap gap-4"
          >
            {toolsData.map((tool, index) => (
              <motion.li
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={viewportOptions}
                transition={{ 
                  duration: 0.5, 
                  delay: 0.9 + index * 0.05,
                  type: "spring",
                  stiffness: 200
                }}
                whileHover={{ 
                  scale: 1.15, 
                  y: -4,
                  rotate: 5,
                  transition: { duration: 0.3 }
                }}
                className="group flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-300 dark:border-gray-700 rounded-lg cursor-pointer bg-white dark:bg-[#1a0033] hover:bg-gradient-to-br hover:from-[#fcf4ff] hover:to-[#f0e6ff] dark:hover:from-[#2a0044] dark:hover:to-[#1e1b2f] hover:shadow-lg hover:shadow-purple-200/50 dark:hover:shadow-purple-900/30 transition-all duration-300"
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
