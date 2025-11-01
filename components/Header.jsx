import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

const Header = () => {
  return (
    <div className="w-full px-6 sm:px-8 md:px-16 max-w-5xl mx-auto h-screen flex flex-col items-center justify-center gap-6 text-center">
      {/* Profile Image */}
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
      >
        <Image
          src={assets.profile_img}
          alt="Profile Pic"
          className="rounded-full w-24 sm:w-32"
        />
      </motion.div>

      {/* Introduction Text */}
      <motion.h3
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="flex items-center justify-center gap-2 text-lg sm:text-xl font-bold"
      >
        Hi! I am Abhinav Saxena
        <Image src={assets.hand_icon} alt="waving hand" className="w-5 sm:w-6" />
      </motion.h3>

      <motion.h1
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="text-3xl sm:text-5xl lg:text-6xl font-extrabold"
      >
        Full Stack AI Developer
      </motion.h1>

      {/* Action Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mt-4">
        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          href="#contact"
          className="px-8 py-2 rounded-full bg-black text-white border border-white flex items-center gap-2"
        >
          Contact Me
          <Image
            src={assets.right_arrow_white}
            alt="arrow icon"
            className="w-4"
          />
        </motion.a>

        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          href="/resume.pdf"
          download="Abhinav_Saxena_Full_Stack_AI_Developer.pdf"
          className="px-8 py-2 rounded-full border border-gray-500 flex items-center gap-2"
        >
          My Resume
          <Image src={assets.download_icon} alt="download" className="w-4" />
        </motion.a>
      </div>

      {/* Social Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mt-4">
        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.4 }}
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/Abhinav1730"
          className="px-8 py-2 border rounded-full border-gray-500 flex items-center gap-2"
        >
          GitHub
        </motion.a>

        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.6 }}
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/abhinav-saxena-124a81360"
          className="px-8 py-2 border rounded-full border-gray-500 flex items-center gap-2"
        >
          LinkedIn
        </motion.a>

        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.8 }}
          target="_blank"
          rel="noopener noreferrer"
          href="https://leetcode.com/u/abhinav3009/"
          className="px-8 py-2 border rounded-full border-gray-500 flex items-center gap-2"
        >
          LeetCode
        </motion.a>
      </div>
    </div>
  );
};

export default Header;
