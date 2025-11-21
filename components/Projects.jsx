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
      transition={{ duration: 0.5, ease: "easeOut" }}
      id="work"
      className="w-full px-6 sm:px-10 md:px-[10%] py-16 sm:py-20 scroll-mt-20 bg-gradient-to-b from-white to-gray-50 dark:from-[#11001F] dark:to-[#1a0033]"
    >
      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={viewportOptions}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="text-center mb-2 text-xl sm:text-2xl font-semibold text-gray-600 dark:text-gray-400"
      >
        My Portfolio
      </motion.h4>
      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={viewportOptions}
        transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
        className="text-center text-3xl sm:text-5xl lg:text-6xl font-bold text-gray-800 dark:text-white mb-4"
      >
        My Projects
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={viewportOptions}
        transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
        className="text-center max-w-2xl mx-auto mb-12 text-gray-600 dark:text-gray-400 text-sm sm:text-base"
      >
        Explore my latest projects and creative solutions
      </motion.p>
      
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={viewportOptions}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 my-10"
      >
        {workData.map(({ title, description, icon, link }, index) => (
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={viewportOptions}
            transition={{ 
              duration: 0.5, 
              delay: index * 0.1,
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
            whileHover={{ 
              y: -8, 
              scale: 1.02,
              transition: { duration: 0.3 }
            }}
            key={index}
            className="group border border-gray-300 dark:border-gray-700 rounded-2xl px-6 sm:px-8 py-8 sm:py-10 cursor-pointer bg-white dark:bg-[#1a0033] hover:bg-gradient-to-br hover:from-[#fcf4ff] hover:to-[#f0e6ff] dark:hover:from-[#2a0044] dark:hover:to-[#1e1b2f] hover:shadow-xl hover:shadow-purple-200/50 dark:hover:shadow-purple-900/30 transition-all duration-500 relative overflow-hidden"
          >
            {/* Decorative gradient overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-blue-500/0 group-hover:from-purple-500/5 group-hover:to-blue-500/5 transition-all duration-500 rounded-2xl"></div>
            
            <div className="relative z-10">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
                className="mb-4"
              >
                <Image 
                  src={icon} 
                  alt={title} 
                  className="w-16 sm:w-20 rounded-xl shadow-md" 
                />
              </motion.div>
              <h2 className="text-lg sm:text-xl my-4 text-gray-800 dark:text-white font-bold group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
                {title}
              </h2>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-6 mb-6 line-clamp-3">
                {description}
              </p>
              <div className="flex items-center mt-6">
                <a 
                  href={link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group/link"
                >
                  <motion.p 
                    whileHover={{ x: 5 }}
                    className="font-medium text-blue-600 dark:text-blue-400 text-sm sm:text-base flex items-center gap-2 group-hover/link:text-purple-600 dark:group-hover/link:text-purple-400 transition-colors duration-300"
                  >
                    Visit Project{" "}
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{ 
                        duration: 1.5, 
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      <Image
                        src={assets.send_icon}
                        alt="send icon"
                        className="w-4 sm:w-5 inline-block"
                      />
                    </motion.span>
                  </motion.p>
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Projects;
