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
      transition={{ duration: 0.3, ease: "easeOut" }}
      id="contact"
      className="w-full px-[12%] py-10 scroll-mt-20 bg-[url('/footer-bg-color.png')] bg-no-repeat bg-center bg-[length:90%_auto]"
    >
      <motion.h4
        initial={{ y: -10, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={viewportOptions}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className="text-center mb-2 text-2xl font-medium"
      >
        Connect with Me!
      </motion.h4>
      <motion.h2
        initial={{ y: -10, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={viewportOptions}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className="text-center text-5xl font-mono"
      >
        Get in Touch
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={viewportOptions}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className="text-center max-w-2xl mx-auto mt-5 mb-12 font-light"
      >
        I would love to hear from you! If yo have any questions , comments or
        feedback , please use the form below.
      </motion.p>
      <motion.form
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={viewportOptions}
        transition={{ duration: 0.3, ease: "easeOut" }}
        onSubmit={onSubmit}
        className="max-w-2xl mx-auto"
      >
        <div className="grid grid-cols-2 gap-6 mt-10 mb-8">
          <motion.input
            initial={{ x: -20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={viewportOptions}
            transition={{ duration: 0.25, ease: "easeOut" }}
            name="name"
            className="flex-1 p-3 text-sm font-extralight outline-none border-[0.5px] border-gray-400 rounded-md bg-white"
            type="text"
            placeholder="Your Name"
            required
          />
          <motion.input
            initial={{ x: 20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={viewportOptions}
            transition={{ duration: 0.25, ease: "easeOut" }}
            name="email"
            className="flex-1 p-3 text-sm font-extralight outline-none border-[0.5px] border-gray-400 rounded-md bg-white"
            type="email"
            placeholder="Your Email"
            required
          />
        </div>
        <motion.textarea
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={viewportOptions}
          transition={{ duration: 0.3, ease: "easeOut" }}
          name="message"
          rows="6"
          placeholder="Enter your Message"
          required
          className="w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6"
        ></motion.textarea>
        <motion.button
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          className="py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500"
          type="submit"
        >
          Submit Now!
        </motion.button>
        <p className="mt-4">{result}</p>
      </motion.form>
    </motion.div>
  );
};

export default Contact;
