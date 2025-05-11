"use client";

import React from 'react';

const Skills = () => {
  const skills = {
    languages: [
      { name: 'HTML', icon: '/icons/html5.svg' },
      { name: 'CSS', icon: '/icons/css3.svg' },
      { name: 'JavaScript', icon: '/icons/javascript.svg' },
      { name: 'TypeScript', icon: '/icons/typescript.svg' },
      { name: 'Python', icon: '/icons/python.svg' },
      { name: 'Java', icon: '/icons/java.svg' },
      { name: 'C++', icon: '/icons/cpp.svg' },
      { name: 'SQL', icon: '/icons/sql.svg' }
    ],
    frameworks: [
      { name: 'React.js', icon: '/icons/react.svg' },
      { name: 'D3.js', icon: '/icons/d3.svg' },
      { name: 'Recharts', icon: '/icons/recharts.svg' },
      { name: 'Bootstrap', icon: '/icons/bootstrap.svg' },
      { name: 'Tailwind CSS', icon: '/icons/tailwind.svg' },
      { name: 'Node.js', icon: '/icons/nodejs.svg' }
    ],
    tools: [
      { name: 'Git', icon: '/icons/git.svg' },
      { name: 'GitHub', icon: '/icons/github.svg' },
      { name: 'Vercel', icon: '/icons/vercel.svg' },
      { name: 'VS Code', icon: '/icons/vscode.svg' },
      { name: 'Docker', icon: '/icons/docker.svg' },
      { name: 'npm', icon: '/icons/npm.svg' },
      { name: 'Figma', icon: '/icons/figma.svg' },
      { name: 'Windsurf', icon: '/icons/windsurf.svg' },
      { name: 'Cursor', icon: '/icons/cursor.svg' },
      { name: 'OpenAI API', icon: '/icons/openai.svg' }
    ]
  };

  return (
    <section id="skills" className="w-full py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center tracking-tight transition-transform duration-300 hover:scale-110">
            Skills
          </h2>

          <div className="space-y-8">
            <div className="space-y-4 p-6 rounded-xl border border-white/20 bg-white/5">
              <h3 className="text-2xl font-semibold !text-white mb-6">Programming Languages</h3>
              <div className="skills-wrapper">
                <div className="skills-container">
                  {[...skills.languages, ...skills.languages, ...skills.languages, ...skills.languages].map((skill, index) => (
                    <div
                      key={`${skill.name}-${index}`}
                      className="skill-card flex flex-col items-center gap-4"
                    >
                      <img 
                        src={skill.icon} 
                        alt={`${skill.name} icon`} 
                        className="w-[150px] h-[150px] object-contain"
                      />
                      <span className="text-white font-bold text-center text-xl">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-4 p-6 rounded-xl border border-white/20 bg-white/5">
              <h3 className="text-2xl font-semibold !text-white mb-6">Frameworks & Libraries</h3>
              <div className="skills-wrapper">
                <div className="skills-container">
                  {[...skills.frameworks, ...skills.frameworks, ...skills.frameworks, ...skills.frameworks].map((skill, index) => (
                    <div
                      key={`${skill.name}-${index}`}
                      className="skill-card flex flex-col items-center gap-4"
                    >
                      <img 
                        src={skill.icon} 
                        alt={`${skill.name} icon`} 
                        className="w-[150px] h-[150px] object-contain"
                      />
                      <span className="text-white font-bold text-center text-xl">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-4 p-6 rounded-xl border border-white/20 bg-white/5">
              <h3 className="text-2xl font-semibold !text-white mb-6">Developer Tools</h3>
              <div className="skills-wrapper">
                <div className="skills-container">
                  {[...skills.tools, ...skills.tools, ...skills.tools, ...skills.tools].map((skill, index) => (
                    <div
                      key={`${skill.name}-${index}`}
                      className="skill-card flex flex-col items-center gap-4"
                    >
                      <img 
                        src={skill.icon} 
                        alt={`${skill.name} icon`} 
                        className="w-[150px] h-[150px] object-contain"
                      />
                      <span className="text-white font-bold text-center text-xl">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills; 