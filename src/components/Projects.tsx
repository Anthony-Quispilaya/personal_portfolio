"use client";

import React, { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Image from 'next/image';

interface Project {
  title: string;
  description: string;
  githubUrl: string;
  playgroundUrl: string;
  technologies: string[];
}

const PlaygroundIcon = () => (
  <svg 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className="w-5 h-5"
  >
    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
    <g id="SVGRepo_iconCarrier">
      <g clipPath="url(#clip0_429_11072)">
        <path d="M11 3.99994H4V17.9999C4 19.1045 4.89543 19.9999 6 19.9999H18C19.1046 19.9999 20 19.1045 20 17.9999V12.9999" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"></path>
        <path d="M9 14.9999L20 3.99994" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"></path>
        <path d="M15 3.99994H20V8.99994" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"></path>
      </g>
      <defs>
        <clipPath id="clip0_429_11072">
          <rect width="24" height="24" fill="white"></rect>
        </clipPath>
      </defs>
    </g>
  </svg>
);

const getTechIcon = (tech: string) => {
  switch (tech) {
    case "HTML":
      return <Image src="/icons/html5.svg" alt="HTML5" width={20} height={20} className="w-5 h-5" />;
    case "CSS":
      return <Image src="/icons/css3.svg" alt="CSS3" width={20} height={20} className="w-5 h-5" />;
    case "JavaScript":
      return <Image src="/icons/javascript.svg" alt="JavaScript" width={20} height={20} className="w-5 h-5" />;
    case "Bootstrap":
      return <Image src="/icons/bootstrap.svg" alt="Bootstrap" width={20} height={20} className="w-5 h-5" />;
    case "Next.js":
      return <Image src="/icons/nextjs.svg" alt="Next.js" width={20} height={20} className="w-5 h-5" />;
    case "TypeScript":
      return <Image src="/icons/typescript.svg" alt="TypeScript" width={20} height={20} className="w-5 h-5" />;
    case "Tailwind CSS":
      return <Image src="/icons/tailwind.svg" alt="Tailwind CSS" width={20} height={20} className="w-5 h-5" />;
    case "OpenAI API":
      return <Image src="/icons/openai.svg" alt="OpenAI API" width={20} height={20} className="w-5 h-5" />;
    default:
      return null;
  }
};

const dataVizScreenshots = [
  "/images/project-screenshots/project1/1.png",
  "/images/project-screenshots/project1/2.png",
  "/images/project-screenshots/project1/3.png",
  "/images/project-screenshots/project1/4.png",
  "/images/project-screenshots/project1/5.png",
  "/images/project-screenshots/project1/6.png",
  "/images/project-screenshots/project1/7.png",
  "/images/project-screenshots/project1/8.png",
  "/images/project-screenshots/project1/9.png",
  "/images/project-screenshots/project1/10.png",
];

const volleyballScreenshots = [
  "/images/project-screenshots/project3/1.png",
  "/images/project-screenshots/project3/2.png",
  "/images/project-screenshots/project3/3.png",
  "/images/project-screenshots/project3/4.png",
  "/images/project-screenshots/project3/5.png",
  "/images/project-screenshots/project3/6.png",
  "/images/project-screenshots/project3/7.png",
];

const aiChatbotScreenshots = [
  "/images/project-screenshots/project2/1.png",
  "/images/project-screenshots/project2/2.png",
  "/images/project-screenshots/project2/3.png",
  "/images/project-screenshots/project2/4.png",
  "/images/project-screenshots/project2/5.png",
];

const Carousel = ({ images }: { images: string[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full h-full group">
      {/* Main Image */}
      <div className="w-full h-full overflow-hidden rounded-lg flex items-start justify-center bg-black/20">
        <Image
          src={images[currentIndex]}
          alt={`Screenshot ${currentIndex + 1}`}
          width={800}
          height={450}
          className="w-auto h-auto max-w-full max-h-full"
        />
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-black/70"
      >
        <IoIosArrowBack className="w-6 h-6" />
      </button>
      <button
        onClick={goToNext}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-black/70"
      >
        <IoIosArrowForward className="w-6 h-6" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex ? "bg-white scale-125" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

const projects: Project[] = [
  {
    title: "Data Visualization",
    description: "An interactive data visualization project showcasing various charts and graphs using D3.js and Recharts. Features real-time data updates and responsive design.",
    githubUrl: "https://github.com/yourusername/project1",
    playgroundUrl: "/playground/data-visualization",
    technologies: ["React", "TypeScript", "D3.js", "Recharts", "Tailwind CSS"]
  },
  {
    title: "AI Chatbot",
    description: "A modern AI-powered chatbot built with OpenAI's API. Features natural language processing, context awareness, and a sleek user interface. The chatbot has a unique personality that loves dad jokes and embraces its cringy side!",
    githubUrl: "https://github.com/yourusername/project2",
    playgroundUrl: "/playground/ai-chatbot",
    technologies: ["Next.js", "OpenAI API", "TypeScript", "Tailwind CSS"]
  },
  {
    title: "Basic Volleyball Website",
    description: "A basic static website built with HTML, CSS, and Bootstrap that helps volleyball players find open gyms across New Jersey. Features simple event listings, schedules, and locations for various volleyball sessions.",
    githubUrl: "https://github.com/Anthony-Quispilaya/Anthony-Quispilaya---IS117-003-Project",
    playgroundUrl: "/playground/volleyball-website",
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"]
  }
];

export default function Projects() {
  return (
    <section id="projects" className="w-full py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center tracking-tight transition-transform duration-300 hover:scale-110">
            Projects
          </h2>
          <div className="grid grid-cols-1 gap-12">
            {projects.map((project, index) => (
              <div 
                key={index} 
                className="p-8 rounded-xl border border-white/20 bg-white/5 hover:bg-white/10 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-white/5"
              >
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
                  {/* Project Info */}
                  <div className="space-y-6 lg:col-span-2">
                    <h3 className="text-3xl font-bold !text-white">{project.title}</h3>
                    <p className="text-gray-300 text-lg">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-4 py-2 bg-white/10 text-white rounded-full text-sm border border-white/20 hover:scale-105 transition-transform duration-200 flex items-center gap-2"
                        >
                          {getTechIcon(tech)}
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-4 pt-4">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-6 py-3 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-all duration-300 border border-white/20 hover:scale-105 hover:shadow-md hover:shadow-white/5"
                      >
                        <FaGithub className="w-5 h-5" />
                        <span>GitHub</span>
                      </a>
                      <a
                        href={project.playgroundUrl}
                        className="flex items-center gap-2 px-6 py-3 bg-[#ff2828] text-white rounded-lg hover:bg-[#ff4040] transition-all duration-300 border border-white/20 hover:scale-105 hover:shadow-md hover:shadow-[#ff2828]/20"
                      >
                        <PlaygroundIcon />
                        <span>Playground</span>
                      </a>
                    </div>
                  </div>

                  {/* Project Screenshots */}
                  <div className="lg:col-span-3 flex justify-center items-center">
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
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
