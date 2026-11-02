import { featuredProjects, personalProjects } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import Section from "./Section";
import TiltCard from "./TiltCard";

const Projects = () => {
  return (
    <Section id="work" label="Projects" title="Selected work">
      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-5">
        {featuredProjects.map(({ title, stack, description, link }) => (
          <TiltCard key={title} className="rounded-2xl border border-line bg-panel/90 p-6 hover:border-coral transition-colors">
            <h3 className="font-display font-bold text-2xl">
              <a href={link} target="_blank" rel="noopener noreferrer" className="hover:text-coral transition-colors">
                {title} ↗
              </a>
            </h3>
            <p className="mt-1 text-sm text-teal">{stack}</p>
            <p className="mt-4 text-soft leading-relaxed">{description}</p>
          </TiltCard>
        ))}
      </div>

      <h3 className="mt-14 mb-5 text-xl font-semibold">Personal projects</h3>
      <ul className="grid sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5 gap-3">
        {personalProjects.map(({ icon, title, description, link }) => (
          <li key={title}>
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 h-full rounded-xl border border-line bg-panel/90 p-4 hover:border-coral transition-colors"
            >
              <Image src={icon} alt="" className="w-10 h-10 rounded-lg object-cover" />
              <span>
                <span className="block font-medium">{title} ↗</span>
                <span className="block text-sm text-soft">{description}</span>
              </span>
            </a>
          </li>
        ))}
      </ul>
    </Section>
  );
};

export default Projects;
