import { links, roles } from "@/assets/assets";
import React from "react";
import { motion, useReducedMotion } from "motion/react";

const Header = () => {
  const reducedMotion = useReducedMotion();

  return (
    <div className="w-full px-6 lg:px-16 2xl:px-24 min-h-screen flex flex-col justify-end md:justify-center pb-16 md:pb-0">
      <motion.div
        initial={{ y: 24 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="max-w-2xl"
      >
        <p className="text-sm text-soft">Open to Relocation / Open to Remote</p>
        <h1
          aria-label="Abhinav Saxena"
          className="mt-4 font-display font-extrabold text-5xl sm:text-7xl leading-none"
        >
          {"Abhinav Saxena".split(" ").map((word, wordIndex) => (
            <span key={word} aria-hidden="true" className="block overflow-hidden pb-1">
              {word.split("").map((letter, index) => (
                <motion.span
                  key={index}
                  initial={reducedMotion ? false : { y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: wordIndex * 0.25 + index * 0.035,
                    ease: [0.2, 0.8, 0.2, 1],
                  }}
                  className="inline-block"
                >
                  {letter}
                </motion.span>
              ))}
            </span>
          ))}
        </h1>
        <ul className="mt-5 flex flex-wrap gap-x-3 gap-y-1 font-medium text-teal">
          {roles.map((role, index) => (
            <motion.li
              key={role}
              initial={reducedMotion ? false : { y: 12 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
              className="flex gap-3"
            >
              {index > 0 && <span aria-hidden="true" className="text-soft">/</span>}
              {role}
            </motion.li>
          ))}
        </ul>
        <p className="mt-5 text-lg sm:text-xl text-soft">
          I take AI products from idea to production, across the interface, the
          backend, the agents and everything that keeps them running.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="#contact"
            className="px-7 py-3 rounded-full bg-coral text-ink font-medium hover:bg-white transition-colors"
          >
            Contact me
          </a>
          <a
            href="/resume.pdf"
            download="Abhinav_Saxena_Software_Engineer_Go_Python_Resume.pdf"
            className="px-7 py-3 rounded-full border border-soft hover:border-coral transition-colors"
          >
            Download resume
          </a>
        </div>
        <div className="mt-8 flex flex-wrap gap-6 text-sm text-soft">
          <a href={links.github} target="_blank" rel="noopener noreferrer" className="hover:text-white">
            GitHub
          </a>
          <a href={links.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-white">
            LinkedIn
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default Header;
