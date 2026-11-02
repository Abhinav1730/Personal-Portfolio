"use client";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import VoiceCore from "@/components/VoiceCore";

export default function Home() {
  return (
    <>
      <VoiceCore />
      <Navbar />
      <main id="top" className="relative">
        <Header />
        <div className="grid xl:grid-cols-2 2xl:grid-cols-[3fr_2fr]">
          <About />
          <Skills />
        </div>
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
