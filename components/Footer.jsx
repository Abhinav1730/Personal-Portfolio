import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="mt-20">
      <div className="text-center">
        <Image src={assets.logo} alt="" className="w-36 mx-auto mb-2" />
        <div className="flex w-max items-center gap-2 mx-auto">
          <Image src={assets.mail_icon} alt="" className="w-6" />
          abhinav.saxena1730@gmail.com
        </div>
      </div>

      <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6">
        <p>@2025 Abhinav Saxena. All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
