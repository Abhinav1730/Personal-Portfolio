import { experience } from "@/assets/assets";
import React from "react";
import Section from "./Section";

const Experience = () => {
  const { company, role, location, duration, points, production } = experience;

  return (
    <Section id="experience" label="Experience" title={company}>
      <div className="rounded-2xl border border-line bg-panel/90 p-6 sm:p-10">
        <div className="flex flex-wrap justify-between gap-2">
          <h3 className="text-xl font-semibold">{role}</h3>
          <p className="text-soft">
            {duration} · {location}
          </p>
        </div>
        <ul className="mt-6 space-y-4 list-disc pl-5 marker:text-coral text-soft leading-relaxed">
          {points.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
        <h4 className="mt-8 text-sm font-medium text-teal">Production projects</h4>
        <ul className="mt-3 flex flex-wrap gap-2">
          {production.map(({ name, link }) => (
            <li key={name}>
              {link ? (
                <a href={link} target="_blank" rel="noopener noreferrer" className="block px-3 py-1 rounded-full border border-line text-sm hover:border-coral transition-colors">
                  {name} ↗
                </a>
              ) : (
                <span className="block px-3 py-1 rounded-full border border-line text-sm">
                  {name}
                </span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
};

export default Experience;
