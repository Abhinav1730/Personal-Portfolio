import user_image from "./user-image.jpeg";
import code_icon from "./code-icon.png";
import code_icon_dark from "./code-icon-dark.png";
import edu_icon from "./edu-icon.png";
import edu_icon_dark from "./edu-icon-dark.png";
import project_icon from "./project-icon.png";
import project_icon_dark from "./project-icon-dark.png";
import blockchain from "./blockchain.jpeg";
import vscode from "./vscode.png";
import firebase from "./firebase.png";
import aivami from "./aivami.png";
import figma from "./figma.png";
import git from "./git.png";
import mongodb from "./mongodb.png";
import deepseek from "./deepseek.png";
import right_arrow_white from "./right-arrow-white.png";
import ai_for_services from "./ai-for-services.jpg";
import logo from "./logo.png";
import logo_dark from "./logo_dark.png";
import mail_icon from "./mail_icon.png";
import mail_icon_dark from "./mail_icon_dark.png";
import program from "./program.webp";
import profile_img from "./profile_img.jpeg";
import download_icon from "./download-icon.png";
import hand_icon from "./hand-icon.png";
import header_bg_color from "./header-bg-color.png";
import moon_icon from "./moon_icon.png";
import sun_icon from "./sun_icon.png";
import arrow_icon from "./arrow-icon.png";
import arrow_icon_dark from "./arrow-icon-dark.png";
import menu_black from "./menu-black.png";
import supabase from "./supabase.png";
import menu_white from "./menu-white.png";
import close_black from "./close-black.png";
import close_white from "./close-white.png";
import web_icon from "./web-icon.jpg";
import mobile_icon from "./mobile-icon.png";
import ui_icon from "./ui-icon.png";
import graphics_icon from "./graphics-icon.png";
import right_arrow from "./right-arrow.png";
import logo_of_reliefcare from "./logo of reliefcare.png";
import send_icon from "./send-icon.png";
import right_arrow_bold from "./right-arrow-bold.png";
import right_arrow_bold_dark from "./right-arrow-bold-dark.png";
import postman from "./postman.webp";
import cursor_app_icon from "./cursor-app-icon.png";
import thunderclient from "./thunderclient.jpg";

export const assets = {
  user_image,
  code_icon,
  code_icon_dark,
  edu_icon,
  edu_icon_dark,
  project_icon,
  project_icon_dark,
  vscode,
  firebase,
  figma,
  git,
  mongodb,
  thunderclient,
  right_arrow_white,
  logo,
  logo_dark,
  mail_icon,
  mail_icon_dark,
  profile_img,
  download_icon,
  hand_icon,
  header_bg_color,
  moon_icon,
  sun_icon,
  arrow_icon,
  arrow_icon_dark,
  logo_of_reliefcare,
  deepseek,
  menu_black,
  menu_white,
  close_black,
  close_white,
  web_icon,
  mobile_icon,
  ui_icon,
  graphics_icon,
  right_arrow,
  send_icon,
  right_arrow_bold,
  right_arrow_bold_dark,
  postman,
  cursor_app_icon,
  ai_for_services,
  blockchain,
  aivami,
  program,
  supabase,
};

export const workData = [
  {
    icon: assets.logo_of_reliefcare,
    link:"https://reliefcare-frontend.onrender.com/",
    title: "ReliefCare - A Full Stack Application",
    description:
      "ReliefCare is an advanced doctor appointment booking application developed using the MERN stack (MongoDB, Express.js, React.js, Node.js). The application aims to streamline the healthcare experience by allowing patients to find doctors nearby, book appointments, and engage in online consultations—all from the comfort of their homes. The core concept addresses real-life challenges faced by patients, such as long hospital queues and complex appointment procedures.",
  },
  {
    icon: assets.aivami,
    title: "AIvaMI - A Full Stack AI Assistance",
    description:
      " Built an AI-powered mock interview platform using Next.js, Vapi AI, Supabase, and Google Cloud for authentication,enabling users to conduct realistic voice-based interviews with an AI assistant.Implemented the Vapi AI API tohandle real-time voice input and output, allowing dynamic conversation flow through speech synthesis and recognition.Integrated Supabase for real-time database management and user data storage, while Google Cloud Authenticationensured secure and scalable login functionality. Designed an intuitive and responsive UI with ShadCN and Lucide-React, delivering a polished user experience that mirrors real-world interview scenarios. This project demonstrates a deep understanding of modern full-stack development, voice interface integration, and secure authentication systems.",
  },
  {
    icon: assets.deepseek,
    title: "DeepSeek AI Clone",
    description:
      "Developed a modern, full-stack AI chat application inspired by ChatGPT and DeepSeek, leveraging Google’s Gemini API for advanced natural language processing. Built with Next.js 13 App Router and a modular architecture to enable scalable, efficient server and client-side rendering. Integrated Clerk for secure user authentication and MongoDB for persistent chat history and session data. Designed the platform to support seamless natural language interactions,serving as a robust foundation for real-world AI applications. This project also highlights practical implementation of prompt engineering and provides a scalable template for extending features like voice-to-text, image input, and prompt history.",
    link:"https://deep-seek-ai-clone-black.vercel.app/"
  },
];

export const serviceData = [
  {
    icon: assets.web_icon,
    title: "Full Stack Development",
    description:
      "Full stack development with MERN and Next.js involves building web applications using MongoDB, Express.js, React, and Node.js, with Next.js adding server-side rendering and improved performance for React apps.",
  },
  {
    icon: assets.ai_for_services,
    title: "AI Integration",
    description:
      "A full stack developer with AI integration expertise designs and builds complete applications that seamlessly blend user interfaces, server-side logic, and intelligent features. They leverage AI models and APIs—such as language processing, image recognition, or predictive analytics—to enhance functionality, automate tasks, and create smarter, data-driven user experiences across web and mobile platforms.",
  },
  {
    icon: assets.blockchain,
    title: "BlockChain Enthusiast",
    description:
      "A full stack developer who is a blockchain enthusiast builds comprehensive applications while integrating decentralized technologies. They develop smart contracts, work with blockchain protocols like Ethereum or Solana, and create secure, transparent, and trustless systems. Their expertise bridges traditional web development with emerging Web3 innovations, enabling features like crypto transactions, NFTs, and decentralized identity.",
  },
];

export const infoList = [
  {
    icon: assets.code_icon,
    iconDark: assets.code_icon_dark,
    title: "Frameworks",
    description: "React Js, Next Js, Node Js, Express Js",
  },
  {
    icon: assets.program,
    iconDark: assets.code_icon_dark,
    title: "Programming Languages",
    description: "JavaScript , Python ,C++",
  },
  {
    icon: assets.edu_icon,
    iconDark: assets.edu_icon_dark,
    title: "Education",
    description: "B.Tech in Electronics and Communication",
  },
  {
    icon: assets.project_icon,
    iconDark: assets.project_icon_dark,
    title: "Projects",
    description: "Built more than 5 projects",
  },
];

export const toolsData = [
  assets.vscode,
  assets.cursor_app_icon,
  assets.git,
  assets.mongodb,
  assets.supabase,
  assets.postman,
  assets.thunderclient,
  assets.firebase,
  assets.figma,
];
