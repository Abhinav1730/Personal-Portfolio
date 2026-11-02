import { aboutStory, assets, interests, stats } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import CountUp from "./CountUp";
import Section from "./Section";

const About = () => {
  return (
    <Section id="about" label="About" title="A little about me">
      <div className="grid md:grid-cols-[220px_1fr] gap-10 items-start">
        <Image
          src={assets.profile_img}
          alt="Abhinav Saxena"
          className="w-40 md:w-full rounded-2xl"
        />
        <div>
          <div className="max-w-5xl space-y-4 text-lg leading-relaxed text-soft">
            {aboutStory.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div className="mt-10 grid sm:grid-cols-2 gap-8">
            {interests.map(({ title, items }) => (
              <div key={title}>
                <h3 className="text-sm font-medium text-teal">{title}</h3>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {items.map((item) => (
                    <li key={item} className="px-3 py-1 rounded-full border border-line bg-panel/90 text-sm">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <ul className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map(({ value, label }) => (
              <li key={label}>
                <p className="font-display font-bold text-3xl text-coral">
                  <CountUp value={value} />
                </p>
                <p className="mt-1 text-sm text-soft">{label}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
};

export default About;
