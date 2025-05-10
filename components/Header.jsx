import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <div className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4">
      <div>
        <Image
          src={assets.profile_img}
          alt="Profile Pic"
          className="rounded-full w-32"
        />
      </div>
      <h3 className="flex items-end gap-2 text-xl md:text-2xl mb-3 font-bold">
        Hi! I am Abhinav Saxena{" "}
        <Image src={assets.hand_icon} alt="" className="w-6" />
      </h3>
      <h1 className="text-3xl sm:text-6xl lg:text-[66px] font-extrabold">
        Full Stack Developer
      </h1>
      <p className="max-w-2xl mx-auto font-extralight">
        I'm a full-stack developer and persuing Engineering(ECE) specializing in
        the MERN stack, Next.js, and RESTful APIs along with slight Devops and
        ML. Passionate about solving real-world problems through technology and
        constantly exploring new tools and frameworks to enhance performance and
        user experience.
      </p>
      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
        <a
          href="#contact"
          className="px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2"
        >
          Contact Me{" "}
          <Image
            src={assets.right_arrow_white}
            alt="Profile Pic"
            className="w-4"
          />
        </a>
        <a
          href="/resume.pdf"
          download
          className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2"
        >
          My Resume{" "}
          <Image src={assets.download_icon} alt="Profile Pic" className="w-4" />
        </a>
      </div>
      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
        <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">
          <li>
            <a
              target="_blank"
              href="https://github.com/Abhinav1730"
              className="px-10 py-2 border rounded-full border-gray-500 flex items-center gap-2"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/abhinav-saxena-124a81360"
              className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://leetcode.com/u/abhinav3009/"
              className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2"
            >
              Leetcode
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
