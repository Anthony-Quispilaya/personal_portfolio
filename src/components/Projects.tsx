"use client";

import React from 'react';
import Image from 'next/image';
import { FaGithub } from 'react-icons/fa';
import ScrollAnimation from './ui/ScrollAnimation';
import Carousel from './ui/Carousel';
import { dataVizScreenshots, volleyballScreenshots, aiChatbotScreenshots } from '../data/projectScreenshots';

const projects = [
  {
    title: "Data Visualization",
    description: "This project explored the relationship between air quality and respiratory illness rates across different regions from 2016 to 2022. Using interactive charts, maps, and filters built with React and D3.js, the dashboard allowed users to analyze trends over time and compare regions based on air pollution levels and health data. The goal was to provide meaningful insights that could support environmental awareness and public health research.",
    githubUrl: "https://github.com/yourusername/project1",
    playgroundUrl: "/playground/data-visualization",
    technologies: ["React", "TypeScript", "D3.js", "Recharts", "Tailwind CSS"],
    icon: "/icons/data-visualization.svg"
  },
  {
    title: "AI Chatbot",
    description: "A modern AI-powered chatbot built with OpenAI's API. Features natural language processing, context awareness, and a sleek user interface. The chatbot has a unique personality that loves dad jokes and embraces its cringy side!",
    githubUrl: "https://github.com/yourusername/project2",
    playgroundUrl: "/playground/ai-chatbot",
    technologies: ["Next.js", "OpenAI API", "TypeScript", "Tailwind CSS"],
    icon: "/icons/chatbot.svg"
  },
  {
    title: "Basic Volleyball Website",
    description: "A basic static website built with HTML, CSS, and Bootstrap that helps volleyball players find open gyms across New Jersey. Features simple event listings, schedules, and locations for various volleyball sessions.",
    githubUrl: "https://github.com/Anthony-Quispilaya/Anthony-Quispilaya---IS117-003-Project",
    playgroundUrl: "/playground/volleyball-website",
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    icon: "/icons/volleyball.svg"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="w-full py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 max-w-7xl mx-auto">
          <ScrollAnimation amount={0.1}>
            <h2 className="text-4xl font-bold text-white mb-12 text-center tracking-tight transition-transform duration-300 hover:scale-110">
              Projects
            </h2>
          </ScrollAnimation>

          <div className="grid grid-cols-1 gap-12">
            {projects.map((project, index) => (
              <ScrollAnimation key={index} direction="up" delay={0.2 + index * 0.1} amount={0.2}>
                <div 
                  className="p-8 rounded-xl border border-white/20 bg-white/5 backdrop-blur-[2px] hover:bg-white/10 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-white/5"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
                    {/* Project Info */}
                    <div className="lg:col-span-2 space-y-6">
                      <ScrollAnimation direction="left" delay={0.1 + index * 0.05} amount={0.1}>
                        <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                          <Image 
                            src={project.icon} 
                            alt={`${project.title} icon`}
                            width={28} 
                            height={28} 
                            className="w-7 h-7" 
                          />
                          {project.title}
                        </h3>
                        <p className="text-gray-300 leading-relaxed mt-3">{project.description}</p>
                      </ScrollAnimation>
                      
                      <ScrollAnimation direction="left" delay={0.2 + index * 0.05} amount={0.1}>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, techIndex) => {
                            // Map technology names to icon filenames
                            const iconMap: Record<string, string> = {
                              "React": "react",
                              "TypeScript": "typescript",
                              "D3.js": "d3",
                              "Recharts": "recharts",
                              "Tailwind CSS": "tailwind",
                              "Next.js": "nextjs",
                              "OpenAI API": "openai",
                              "HTML": "html5",
                              "CSS": "css3",
                              "JavaScript": "javascript",
                              "Bootstrap": "bootstrap"
                            };
                            
                            const iconName = iconMap[tech] || tech.toLowerCase().replace('.', '');
                            
                            return (
                              <span
                                key={techIndex}
                                className="px-3 py-1 bg-white/10 rounded-full text-sm text-white flex items-center gap-2"
                              >
                                <Image
                                  src={`/icons/${iconName}.svg`}
                                  alt={tech}
                                  width={16}
                                  height={16}
                                  className="w-4 h-4"
                                />
                                {tech}
                              </span>
                            );
                          })}
                        </div>
                      </ScrollAnimation>
                      
                      <ScrollAnimation direction="left" delay={0.3 + index * 0.05} amount={0.1}>
                        <div className="flex gap-4">
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-white hover:text-red-500 transition-colors duration-200"
                          >
                            <FaGithub className="w-6 h-6" />
                            <span>View Code</span>
                          </a>
                          <a
                            href={project.playgroundUrl}
                            className="text-white hover:text-red-500 transition-colors duration-200"
                          >
                            Try it out →
                          </a>
                        </div>
                      </ScrollAnimation>
                    </div>
                    
                    <ScrollAnimation direction="right" delay={0.2 + index * 0.05} amount={0.15} className="lg:col-span-3 flex justify-center items-center">
                      <div className="w-full aspect-[16/9] rounded-lg overflow-hidden border border-white/20">
                        {project.title === "Data Visualization" ? (
                          <Carousel images={dataVizScreenshots} />
                        ) : project.title === "Basic Volleyball Website" ? (
                          <Carousel images={volleyballScreenshots} />
                        ) : project.title === "AI Chatbot" ? (
                          <Carousel images={aiChatbotScreenshots} />
                        ) : (
                          <div className="w-full h-full bg-white/5 flex items-center justify-center">
                            <span className="text-gray-400">Screenshot coming soon</span>
                          </div>
                        )}
                      </div>
                    </ScrollAnimation>
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
