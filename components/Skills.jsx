import { education, skills } from "@/assets/assets";
import React from "react";
import Section from "./Section";

const Skills = () => {
  return (
    <Section id="skills" label="Skills" title="Tools I work with">
      <dl className="divide-y divide-line border-y border-line bg-ink/80">
        {skills.map(({ title, items }) => (
          <div key={title} className="grid sm:grid-cols-[240px_1fr] gap-1 py-4">
            <dt className="font-medium">{title}</dt>
            <dd className="text-soft">{items}</dd>
          </div>
        ))}
        <div className="grid sm:grid-cols-[240px_1fr] gap-1 py-4">
          <dt className="font-medium">Education</dt>
          <dd className="text-soft">
            {education.degree}, {education.school}, {education.year}
          </dd>
        </div>
      </dl>
    </Section>
  );
};

export default Skills;
