import { internshipsData } from "@/assets/assets";
import React from "react";
import { motion } from "motion/react";

const Internships = () => {
  const viewportOptions = { once: false, amount: 0.1, margin: "-100px" };
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={viewportOptions}
      transition={{ duration: 0.3, ease: "easeOut" }}
      id="internships"
      className="w-full px-6 sm:px-10 md:px-[10%] py-10 scroll-mt-20"
    >
      <motion.h4
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewportOptions}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className="text-center mb-2 text-xl sm:text-2xl font-semibold text-gray-700 dark:text-gray-300"
      >
        Experience
      </motion.h4>
      <motion.h2
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewportOptions}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className="text-center text-3xl sm:text-5xl font-semibold text-gray-800 dark:text-white"
      >
        Work Experience - Internships
      </motion.h2>

      <div className="mt-10 space-y-12">
        {internshipsData.map((internship, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOptions}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="border border-gray-400 dark:border-gray-600 rounded-2xl p-6 sm:p-8 lg:p-10 hover:bg-[#fcf4ff] dark:hover:bg-[#1e1b2f] transition-all duration-300"
          >
            {/* Company Name and Role */}
            <div className="mb-6">
              <motion.h3
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={viewportOptions}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-white mb-2"
              >
                {internship.companyName}
              </motion.h3>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={viewportOptions}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="text-lg sm:text-xl font-semibold text-gray-600 dark:text-gray-300 mb-2"
              >
                {internship.role}
              </motion.p>
              {internship.duration && (
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={viewportOptions}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="text-sm text-gray-500 dark:text-gray-400 italic"
                >
                  {internship.duration}
                </motion.p>
              )}
            </div>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={viewportOptions}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="text-sm sm:text-base font-extralight leading-relaxed text-gray-700 dark:text-gray-300"
            >
              {typeof internship.description === "object" && internship.description.brief ? (
                <>
                  <p className="mb-4">{internship.description.brief}</p>
                  {internship.description.points && internship.description.points.length > 0 && (
                    <ul className="list-disc list-inside space-y-2 ml-2">
                      {internship.description.points.map((point, idx) => (
                        <li key={idx}>{point}</li>
                      ))}
                    </ul>
                  )}
                </>
              ) : Array.isArray(internship.description) ? (
                <ul className="list-disc list-inside space-y-2 ml-2">
                  {internship.description.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              ) : (
                <p>{internship.description}</p>
              )}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Internships;

