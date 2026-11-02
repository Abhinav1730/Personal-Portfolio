import React, { useEffect, useState } from "react";
import { motion, useScroll } from "motion/react";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#work", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

const Navbar = () => {
  const [isScroll, setIsScroll] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("");
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    // Marks the section crossing the middle of the screen
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        });
      },
      { rootMargin: "-50% 0px -50% 0px" }
    );
    navLinks.forEach(({ href }) => {
      const section = document.querySelector(href);
      if (section) observer.observe(section);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onScroll = () => setIsScroll(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        isScroll || isOpen ? "bg-ink/90 backdrop-blur-lg" : ""
      }`}
    >
      <motion.div
        aria-hidden="true"
        style={{ scaleX: scrollYProgress }}
        className="absolute top-0 inset-x-0 h-0.5 origin-left bg-gradient-to-r from-coral to-teal"
      />
      <div className="px-6 lg:px-16 2xl:px-24 py-4 flex items-center justify-between">
        <a href="#top" className="font-display font-bold text-lg">
          Abhinav Saxena
        </a>
        <ul className="hidden md:flex items-center gap-8 text-sm text-soft">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                aria-current={active === href ? "true" : undefined}
                className={`hover:text-white transition-colors ${
                  active === href ? "text-coral" : ""
                }`}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
        <button
          className="md:hidden text-sm font-medium"
          aria-expanded={isOpen}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "Close" : "Menu"}
        </button>
      </div>
      {isOpen && (
        <ul className="md:hidden px-6 pb-6 flex flex-col gap-4">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <a href={href} onClick={() => setIsOpen(false)}>
                {label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
