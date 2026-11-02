import profile_img from "./profile_img.jpeg";
import logo_plans24 from "./logo-plans24.png";
import logo_of_reliefcare from "./logo of reliefcare.png";
import deepseek from "./deepseek.png";
import legalyzer from "./legalyzer_icon.png";
import formai from "./formai_icon.png";

export const assets = { profile_img };

export const links = {
  email: "abhinav.saxena1730@gmail.com",
  github: "https://github.com/Abhinav1730",
  linkedin: "https://www.linkedin.com/in/abhinav-saxena-124a81360",
};

export const roles = [
  "Full Stack AI Developer",
  "Backend Developer",
  "Founding Engineer",
  "Forward Deployed Engineer",
  "Product Engineer",
];

export const aboutStory = [
  "Hi, I'm Abhinav. I studied Electronics and Communication, but I fell in love with building software. I like the moment an idea stops being a conversation and becomes something real people can use.",
  "These days I work across the whole product: the screen you see, the backend behind it, and the AI agents doing the thinking. I'm happiest with a messy problem, a lot of ownership, and a clear reason to ship.",
  "When I'm away from the keyboard, you'll find me traveling somewhere new, out on a trek, or playing sports. They keep my head clear, and they've taught me that the best view usually comes after the hard part.",
];

export const interests = [
  {
    title: "At work",
    items: [
      "AI agents",
      "Voice AI",
      "Full stack products",
      "Backend systems",
      "Data pipelines",
      "Shipping to production",
    ],
  },
  {
    title: "Away from work",
    items: ["Traveling", "Trekking", "Sports"],
  },
];

export const stats = [
  { value: "6+", label: "products shipped" },
  { value: "7", label: "live deployments" },
  { value: "200/hr", label: "jobs through the pipeline" },
  { value: "60-80%", label: "faster production data loads" },
];

export const experience = {
  company: "TechlyAssist",
  role: "Full Stack AI Developer",
  location: "Remote",
  duration: "Sep 2025 - Present",
  points: [
    "Built a Go backend service for e-signature and legal-contract workflows, with secure document signing, AI face and text recognition in images for identity verification, and end-to-end verification.",
    "Built and shipped backend services and REST APIs in Python, Go and Node.js across 6+ products and 7 live deployments, from design to production debugging.",
    "Built data pipelines that turn unstructured job postings into structured records, process them through separate pipeline stages, and route them to embeddings and vector search in Pinecone, handling 200 jobs per hour.",
    "Cut production data-load latency from 10-15s to 2-6s by serving assets through Cloudflare's CDN and preloading data at login.",
    "Reduced LLM costs by 45% through caching, model routing and other optimization techniques.",
    "Deployed and ran services with Docker, Git, PM2, Render and Vercel, and integrated Resend, WhatsApp API and LLM APIs.",
  ],
  production: [
    { name: "SmartMeet", link: "https://smartmeet.org" },
    { name: "Hulchul", link: "https://hulchul.in" },
    { name: "TextRaj", link: "https://textraj.com" },
    { name: "UAIN", link: "https://uain.global" },
    { name: "SynapseCore", link: "https://synapse.universa.science" },
    { name: "UBI", link: "https://ubi.universa.science" },
    { name: "Enlight", link: "https://enlight.universa.science" },
    { name: "LlamaLink", link: "https://llamalink.co.in" },
    { name: "Kalki", link: "https://kalki.now" },
    { name: "AGA", link: "https://myaga.org" },
  ],
};

export const featuredProjects = [
  {
    title: "Hulchul",
    link: "https://hulchul.in",
    stack: "Next.js, Node.js, Redis, Pinecone, LLM APIs",
    description:
      "A WhatsApp-based AI job-search agent with ElevenLabs voice mock interviews, backed by a pipeline running at 200 jobs per hour.",
  },
  {
    title: "SynapseCore",
    link: "https://synapse.universa.science",
    stack: "Orchestration, Error Handling",
    description:
      "A multi-agent research pipeline with self-designed orchestration, context management and error handling, deployed for Universa AI.",
  },
  {
    title: "SmartMeet",
    link: "https://smartmeet.org",
    stack: "LiveKit, React/Next.js, TypeScript, STT/TTS",
    description:
      "Real-time meeting workflows where a voice AI participant takes live actions inside connected applications.",
  },
  {
    title: "UAIN",
    link: "https://uain.global",
    stack: "Next.js, TypeScript, APIs",
    description:
      "A live network where AI agents enrol, choose open research problems, submit work with sources, and verify each other's results.",
  },
];

export const personalProjects = [
  {
    icon: legalyzer,
    title: "Legalyzer",
    description: "AI analysis of clauses in legal documents.",
    link: "https://ai-legal-document-analyzer.vercel.app/",
  },
  {
    icon: logo_plans24,
    title: "Plans24",
    description: "AI travel itinerary planner.",
    link: "https://plans24.vercel.app/",
  },
  {
    icon: formai,
    title: "FormAI",
    description: "AI form generator built with Gemini.",
    link: "https://ai-powered-form-generator-ten.vercel.app",
  },
  {
    icon: logo_of_reliefcare,
    title: "ReliefCare",
    description: "MERN doctor appointment booking app.",
    link: "https://reliefcare-frontend.onrender.com/",
  },
  {
    icon: deepseek,
    title: "DeepSeek AI Clone",
    description: "Full stack AI chat with saved history.",
    link: "https://deep-seek-ai-clone-black.vercel.app/",
  },
];

export const skills = [
  { title: "Languages", items: "Python, Go, TypeScript, JavaScript, SQL" },
  {
    title: "Backend and APIs",
    items: "REST APIs, FastAPI, Django, Node.js, Express.js, data pipelines",
  },
  {
    title: "Databases",
    items: "PostgreSQL, Redis, MongoDB, Firebase, Supabase",
  },
  {
    title: "Infrastructure",
    items: "Docker, Git, GitHub, Cloudflare, Render, Vercel, SSH, PM2",
  },
  {
    title: "Frontend",
    items: "React.js, Next.js, TypeScript, HTML/CSS, Tailwind CSS",
  },
  {
    title: "Integrations",
    items: "Resend, WhatsApp API, LLM APIs, Vapi AI, ElevenLabs",
  },
  {
    title: "AI Development Tools",
    items: "Cursor, Claude, Codex, Antigravity, Replit",
  },
];

export const education = {
  degree: "B.Tech, Electronics & Communication Engineering",
  school: "KIET Group of Institutions, Ghaziabad (AKTU)",
  year: "June 2026",
};
