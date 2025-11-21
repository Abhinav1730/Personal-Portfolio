import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

const Header = () => {
  return (
    <div className="w-full px-6 sm:px-8 md:px-16 max-w-5xl mx-auto h-screen flex flex-col items-center justify-center gap-6 text-center">
      {/* Profile Image */}
      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        whileInView={{ scale: 1, rotate: 0 }}
        transition={{ 
          duration: 0.8, 
          type: "spring", 
          stiffness: 200,
          damping: 15
        }}
        className="relative group"
      >
        <motion.div
          animate={{
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute inset-0 bg-gradient-to-r from-purple-400/30 to-blue-400/30 rounded-full blur-2xl"
        ></motion.div>
        <Image
          src={assets.profile_img}
          alt="Profile Pic"
          className="rounded-full w-24 sm:w-32 md:w-40 relative z-10 shadow-2xl border-4 border-white/50 dark:border-gray-700/50"
        />
      </motion.div>

      {/* Introduction Text */}
      <motion.h3
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="flex items-center justify-center gap-2 text-lg sm:text-xl md:text-2xl font-bold text-gray-700 dark:text-gray-300"
      >
        Hi! I am Abhinav Saxena
        <motion.div
          animate={{ rotate: [0, 20, -20, 20, 0] }}
          transition={{ 
            duration: 0.5, 
            delay: 0.9,
            repeat: Infinity,
            repeatDelay: 2
          }}
        >
          <Image src={assets.hand_icon} alt="waving hand" className="w-5 sm:w-6 md:w-7" />
        </motion.div>
      </motion.h3>

      <motion.h1
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold bg-gradient-to-r from-gray-800 via-purple-600 to-blue-600 dark:from-white dark:via-purple-400 dark:to-blue-400 bg-clip-text text-transparent"
      >
        Full Stack AI Developer
      </motion.h1>

      {/* Action Buttons */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="flex flex-wrap justify-center gap-4 mt-6"
      >
        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          whileHover={{ 
            scale: 1.05,
            boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)"
          }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.5, delay: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          href="#contact"
          className="px-8 py-3 rounded-full bg-black dark:bg-white text-white dark:text-black border border-gray-800 dark:border-white flex items-center gap-2 font-medium shadow-lg hover:shadow-xl transition-all duration-300"
        >
          Contact Me
          <motion.span
            animate={{ x: [0, 5, 0] }}
            transition={{ 
              duration: 1.5, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <Image
              src={assets.right_arrow_white}
              alt="arrow icon"
              className="w-4"
            />
          </motion.span>
        </motion.a>

        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          whileHover={{ 
            scale: 1.05,
            y: -2,
            borderColor: "rgb(147, 51, 234)"
          }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.5, delay: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
          href="/resume.pdf"
          download="Abhinav_Saxena_Full_Stack_AI_Developer.pdf"
          className="px-8 py-3 rounded-full border-2 border-gray-400 dark:border-gray-600 flex items-center gap-2 font-medium hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-all duration-300 shadow-md hover:shadow-lg"
        >
          My Resume
          <motion.div
            animate={{ y: [0, -3, 0] }}
            transition={{ 
              duration: 1.5, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <Image src={assets.download_icon} alt="download" className="w-4" />
          </motion.div>
        </motion.a>
      </motion.div>

      {/* Social Buttons */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.2 }}
        className="flex flex-wrap justify-center gap-4 mt-6"
      >
        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          whileHover={{ 
            scale: 1.1,
            y: -4,
            borderColor: "rgb(147, 51, 234)",
            backgroundColor: "rgba(147, 51, 234, 0.1)"
          }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.5, delay: 1.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/Abhinav1730"
          className="px-6 sm:px-8 py-2.5 border-2 rounded-full border-gray-400 dark:border-gray-600 flex items-center gap-2 font-medium hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-all duration-300 shadow-sm hover:shadow-md"
        >
          GitHub
        </motion.a>

        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          whileHover={{ 
            scale: 1.1,
            y: -4,
            borderColor: "rgb(59, 130, 246)",
            backgroundColor: "rgba(59, 130, 246, 0.1)"
          }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.5, delay: 1.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/abhinav-saxena-124a81360"
          className="px-6 sm:px-8 py-2.5 border-2 rounded-full border-gray-400 dark:border-gray-600 flex items-center gap-2 font-medium hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-all duration-300 shadow-sm hover:shadow-md"
        >
          LinkedIn
        </motion.a>

        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          whileHover={{ 
            scale: 1.1,
            y: -4,
            borderColor: "rgb(251, 146, 60)",
            backgroundColor: "rgba(251, 146, 60, 0.1)"
          }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.5, delay: 1.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          target="_blank"
          rel="noopener noreferrer"
          href="https://leetcode.com/u/abhinav3009/"
          className="px-6 sm:px-8 py-2.5 border-2 rounded-full border-gray-400 dark:border-gray-600 flex items-center gap-2 font-medium hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-all duration-300 shadow-sm hover:shadow-md"
        >
          LeetCode
        </motion.a>
      </motion.div>
    </div>
  );
};

export default Header;
