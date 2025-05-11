"use client";

import React from "react";
import VolleyballAnimation from "./VolleyballAnimation";
import "./volleyball.css";

export default function About() {
  return (
    <section id="about" className="w-full py-32 mt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white/5 backdrop-blur-sm rounded-lg p-12 border border-white/20 max-w-6xl shadow-xl">
          <h2 className="text-4xl font-bold text-white mb-12 text-center tracking-tight transition-transform duration-300 hover:scale-110">About Me</h2>
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            <div className="text-gray-300 leading-relaxed max-w-2xl space-y-6">
              <p className="text-lg transition-transform duration-300 hover:scale-105">
                I&apos;m a web developer who started with a simple curiosity—wondering how websites actually work. 
                That curiosity quickly turned into a passion for building web experiences using HTML, CSS, and JavaScript. 
                I&apos;m currently a student at NJIT, specializing in web development. I enjoy creating responsive, 
                user-friendly applications that make a real impact.
              </p>
              <p className="text-lg transition-transform duration-300 hover:scale-105">
                Outside of coding, you can usually find me playing video games, working on side projects, 
                or out on the volleyball court. I&apos;m proud to be Peruvian and a first-generation student in my family. 
                I value spending time with my loved ones and pushing myself to keep learning and growing.
              </p>
              <p className="text-lg transition-transform duration-300 hover:scale-105">
                Right now, I&apos;m seeking internship opportunities where I can continue developing my skills 
                and take the next step toward becoming the professional I strive to be.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6 w-full lg:w-auto">
              <div className="w-[150px] h-[150px] rounded-lg overflow-hidden transition-transform duration-300 hover:scale-125">
                <video 
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                  className="w-full h-full object-cover"
                >
                  <source src="/videos/peru.webm" type="video/webm" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className="w-[150px] h-[150px] rounded-lg overflow-hidden transition-transform duration-300 hover:scale-125">
                <video 
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                  className="w-full h-full object-cover"
                >
                  <source src="/videos/code.webm" type="video/webm" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className="w-[150px] h-[150px] rounded-lg overflow-hidden transition-transform duration-300 hover:scale-125">
                <video 
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                  className="w-full h-full object-cover"
                >
                  <source src="/videos/game.webm" type="video/webm" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className="w-[150px] h-[150px] rounded-lg overflow-hidden transition-transform duration-300 hover:scale-125">
                <VolleyballAnimation />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 