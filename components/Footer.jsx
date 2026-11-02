import { links } from "@/assets/assets";
import React from "react";

const Footer = () => {
  return (
    <footer className="relative border-t border-line bg-ink">
      <div className="px-6 lg:px-16 2xl:px-24 py-8 flex flex-wrap justify-between gap-3 text-sm text-soft">
        <a href={`mailto:${links.email}`} className="hover:text-white">
          {links.email}
        </a>
        <p>© {new Date().getFullYear()} Abhinav Saxena</p>
      </div>
    </footer>
  );
};

export default Footer;
