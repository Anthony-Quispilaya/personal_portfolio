"use client";

import React from 'react';
import Image from 'next/image';
import ScrollAnimation from "../ui/ScrollAnimation";
import Parallax from "../ui/Parallax";
import { skills } from "./skillsData";

const Skills = () => {
  return (
    <section id="skills" className="w-full py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 max-w-7xl mx-auto">
          <ScrollAnimation amount={0.1}>
            <h2 className="text-4xl font-bold text-white mb-12 text-center tracking-tight transition-transform duration-300 hover:scale-110">
              Skills
            </h2>
          </ScrollAnimation>

          <div className="space-y-8">
            <ScrollAnimation direction="up" delay={0.2} amount={0.15}>
              <div className="space-y-4 p-6 rounded-xl border border-white/20 bg-white/5 backdrop-blur-[2px] hover:bg-white/10 transition-all duration-300 hover:scale-[1.01] hover:shadow-lg hover:shadow-white/5">
                <ScrollAnimation direction="left" delay={0.1} amount={0.1}>
                  <h3 className="text-2xl font-semibold !text-white mb-6">Programming Languages</h3>
                </ScrollAnimation>
                <ScrollAnimation direction="right" delay={0.2} amount={0.2}>
                  <div className="skills-wrapper">
                    <div className="skills-container">
                      {[...skills.languages, ...skills.languages, ...skills.languages, ...skills.languages].map((skill, index) => (
                        <div
                          key={`${skill.name}-${index}`}
                          className="skill-card flex flex-col items-center gap-4"
                        >
                          <Image
                            src={skill.icon}
                            alt={skill.name}
                            width={64}
                            height={64}
                            className="w-16 h-16"
                          />
                          <span className="text-white font-bold text-center text-xl">{skill.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </ScrollAnimation>
              </div>
            </ScrollAnimation>

            <ScrollAnimation direction="up" delay={0.4} amount={0.15}>
              <div className="space-y-4 p-6 rounded-xl border border-white/20 bg-white/5 backdrop-blur-[2px] hover:bg-white/10 transition-all duration-300 hover:scale-[1.01] hover:shadow-lg hover:shadow-white/5">
                <ScrollAnimation direction="left" delay={0.1} amount={0.1}>
                  <h3 className="text-2xl font-semibold !text-white mb-6">Frameworks & Libraries</h3>
                </ScrollAnimation>
                <ScrollAnimation direction="right" delay={0.2} amount={0.2}>
                  <div className="skills-wrapper">
                    <div className="skills-container">
                      {[...skills.frameworks, ...skills.frameworks, ...skills.frameworks, ...skills.frameworks].map((skill, index) => (
                        <div
                          key={`${skill.name}-${index}`}
                          className="skill-card flex flex-col items-center gap-4"
                        >
                          <Image
                            src={skill.icon}
                            alt={skill.name}
                            width={64}
                            height={64}
                            className="w-16 h-16"
                          />
                          <span className="text-white font-bold text-center text-xl">{skill.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </ScrollAnimation>
              </div>
            </ScrollAnimation>

            <ScrollAnimation direction="up" delay={0.6} amount={0.15}>
              <div className="space-y-4 p-6 rounded-xl border border-white/20 bg-white/5 backdrop-blur-[2px] hover:bg-white/10 transition-all duration-300 hover:scale-[1.01] hover:shadow-lg hover:shadow-white/5">
                <ScrollAnimation direction="left" delay={0.1} amount={0.1}>
                  <h3 className="text-2xl font-semibold !text-white mb-6">Developer Tools</h3>
                </ScrollAnimation>
                <ScrollAnimation direction="right" delay={0.2} amount={0.2}>
                  <div className="skills-wrapper">
                    <div className="skills-container">
                      {[...skills.tools, ...skills.tools, ...skills.tools, ...skills.tools].map((skill, index) => (
                        <div
                          key={`${skill.name}-${index}`}
                          className="skill-card flex flex-col items-center gap-4"
                        >
                          <Image
                            src={skill.icon}
                            alt={skill.name}
                            width={64}
                            height={64}
                            className="w-16 h-16"
                          />
                          <span className="text-white font-bold text-center text-xl">{skill.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </ScrollAnimation>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills; 