import React from "react";
import { motion } from "motion/react";

const Section = ({ id, label, title, children }) => {
  return (
    <motion.section
      id={id}
      initial={{ y: 24 }}
      whileInView={{ y: 0 }}
      viewport={{ once: true, amount: 0.05 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="w-full min-w-0 px-6 lg:px-16 2xl:px-24 py-16 sm:py-24 scroll-mt-16"
    >
      <p className="text-sm font-medium text-teal">{label}</p>
      <h2 className="mt-2 mb-10 font-display font-bold text-3xl sm:text-5xl">
        {title}
      </h2>
      {children}
    </motion.section>
  );
};

export default Section;
