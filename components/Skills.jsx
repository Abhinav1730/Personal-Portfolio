import { education, skills } from "@/assets/assets";
import React from "react";
import Section from "./Section";

const Skills = () => {
  return (
    <Section id="skills" label="Skills" title="Tools I work with">
      <div className="skill-stage relative h-[36rem] [perspective:1100px]">
        <div
          aria-hidden="true"
          className="absolute left-1/2 bottom-2 w-[70%] h-20 -translate-x-1/2 rounded-[50%] bg-[radial-gradient(closest-side,rgba(57,208,195,0.28),rgba(255,111,89,0.1),transparent)]"
        />
        <div className="skill-tilt absolute inset-0">
          <div className="skill-ring absolute left-1/2 top-1/2 w-44 md:w-60 xl:w-48 h-80 -mt-40 -ml-22 md:-ml-30 xl:-ml-24">
            {skills.map(({ title, items }, index) => (
              <div
                key={title}
                style={{
                  transform: `rotateY(${(index * 360) / skills.length}deg) translateZ(var(--radius))`,
                }}
                className="skill-card absolute inset-0 rounded-2xl border border-line bg-panel p-5 [backface-visibility:hidden]"
              >
                <h3 className="font-display font-bold text-coral">{title}</h3>
                <ul className="mt-3 space-y-1 text-sm text-soft list-disc pl-4 marker:text-teal">
                  {items.split(", ").map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
      <p className="mt-8 text-center text-soft">
        {education.degree}, {education.school}, {education.year}
      </p>
    </Section>
  );
};

export default Skills;
