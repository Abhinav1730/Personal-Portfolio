import React from "react";
import { motion } from "motion/react";

const Contact = () => {
  const [result, setResult] = React.useState("");
  const viewportOptions = { once: false, amount: 0.1, margin: "-100px" };

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "02c17852-fd17-48e7-b8e9-d460e9245c6d");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={viewportOptions}
      transition={{ duration: 0.5, ease: "easeOut" }}
      id="contact"
      className="w-full px-6 sm:px-10 md:px-[10%] py-16 sm:py-20 scroll-mt-20 bg-gradient-to-b from-white via-purple-50/30 to-blue-50/30 dark:from-[#11001F] dark:via-[#1a0033] dark:to-[#11001F]"
    >
      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={viewportOptions}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="text-center mb-2 text-xl sm:text-2xl font-semibold text-gray-600 dark:text-gray-400"
      >
        Connect with Me!
      </motion.h4>
      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={viewportOptions}
        transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
        className="text-center text-3xl sm:text-5xl lg:text-6xl font-bold text-gray-800 dark:text-white mb-4"
      >
        Get in Touch
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={viewportOptions}
        transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
        className="text-center max-w-2xl mx-auto mt-5 mb-12 text-gray-600 dark:text-gray-400 text-sm sm:text-base"
      >
        I would love to hear from you! If you have any questions, comments or
        feedback, please use the form below.
      </motion.p>
      <motion.form
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewportOptions}
        transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
        onSubmit={onSubmit}
        className="max-w-2xl mx-auto"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10 mb-8">
          <motion.input
            initial={{ x: -30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={viewportOptions}
            transition={{ duration: 0.5, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            whileFocus={{ scale: 1.02, borderColor: "rgb(147, 51, 234)" }}
            name="name"
            className="flex-1 p-4 text-sm sm:text-base font-light outline-none border-2 border-gray-300 dark:border-gray-700 rounded-xl bg-white dark:bg-[#1a0033] text-gray-800 dark:text-gray-200 focus:border-purple-500 dark:focus:border-purple-400 transition-all duration-300 shadow-sm focus:shadow-md"
            type="text"
            placeholder="Your Name"
            required
          />
          <motion.input
            initial={{ x: 30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={viewportOptions}
            transition={{ duration: 0.5, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
            whileFocus={{ scale: 1.02, borderColor: "rgb(147, 51, 234)" }}
            name="email"
            className="flex-1 p-4 text-sm sm:text-base font-light outline-none border-2 border-gray-300 dark:border-gray-700 rounded-xl bg-white dark:bg-[#1a0033] text-gray-800 dark:text-gray-200 focus:border-purple-500 dark:focus:border-purple-400 transition-all duration-300 shadow-sm focus:shadow-md"
            type="email"
            placeholder="Your Email"
            required
          />
        </div>
        <motion.textarea
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={viewportOptions}
          transition={{ duration: 0.5, delay: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          whileFocus={{ scale: 1.01, borderColor: "rgb(147, 51, 234)" }}
          name="message"
          rows="6"
          placeholder="Enter your Message"
          required
          className="w-full p-4 text-sm sm:text-base font-light outline-none border-2 border-gray-300 dark:border-gray-700 rounded-xl bg-white dark:bg-[#1a0033] text-gray-800 dark:text-gray-200 focus:border-purple-500 dark:focus:border-purple-400 transition-all duration-300 shadow-sm focus:shadow-md mb-6 resize-none"
        ></motion.textarea>
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOptions}
          transition={{ duration: 0.5, delay: 0.7 }}
          whileHover={{ 
            scale: 1.05,
            boxShadow: "0 10px 30px rgba(147, 51, 234, 0.4)"
          }}
          whileTap={{ scale: 0.95 }}
          className="py-3 px-8 w-max flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full mx-auto hover:from-purple-700 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl font-medium"
          type="submit"
        >
          Submit Now!
        </motion.button>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: result ? 1 : 0 }}
          className="mt-4 text-center text-sm text-gray-600 dark:text-gray-400"
        >
          {result}
        </motion.p>
      </motion.form>
    </motion.div>
  );
};

export default Contact;
