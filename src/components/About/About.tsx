"use client";

import React from "react";
import VolleyballAnimation from "./VolleyballAnimation";
import "./volleyball.css";
import ScrollAnimation from "../ui/ScrollAnimation";
import Parallax from "../ui/Parallax";

export default function About() {
  return (
    <section id="about" className="w-full py-32 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white/5 backdrop-blur-[2px] rounded-lg p-12 border border-white/20 max-w-7xl mx-auto shadow-xl overflow-visible hover:bg-white/10 transition-all duration-300 hover:scale-[1.01] hover:shadow-lg hover:shadow-white/5">
          <ScrollAnimation delay={0.2} amount={0.1}>
            <h2 className="text-4xl font-bold text-white mb-12 text-center tracking-tight transition-transform duration-300 hover:scale-105">
              About Me
            </h2>
          </ScrollAnimation>
          <div className="flex flex-col lg:flex-row gap-12 items-start overflow-visible">
            <ScrollAnimation direction="left" delay={0.4} amount={0.2} className="text-gray-300 leading-relaxed max-w-2xl space-y-6 relative z-20">
              <Parallax offset={20} className="overflow-visible">
                <div className="p-4 -m-4 overflow-visible">
                  <p className="text-lg transition-transform duration-300 hover:scale-102 relative z-20 overflow-visible">
                    I&apos;m a web developer who started with a simple curiosity—wondering how websites actually work. 
                    That curiosity quickly turned into a passion for building web experiences using HTML, CSS, and JavaScript. 
                    I&apos;m currently a student at NJIT, specializing in web development. I enjoy creating responsive, 
                    user-friendly applications that make a real impact.
                  </p>
                </div>
              </Parallax>
              <Parallax offset={30} className="overflow-visible">
                <div className="p-4 -m-4 overflow-visible">
                  <p className="text-lg transition-transform duration-300 hover:scale-102 relative z-20 overflow-visible">
                    Outside of coding, you can usually find me playing video games, working on side projects, 
                    or out on the volleyball court. I&apos;m proud to be Peruvian and a first-generation student in my family. 
                    I value spending time with my loved ones and pushing myself to keep learning and growing.
                  </p>
                </div>
              </Parallax>
              <Parallax offset={40} className="overflow-visible">
                <div className="p-4 -m-4 overflow-visible">
                  <p className="text-lg transition-transform duration-300 hover:scale-102 relative z-20 overflow-visible">
                    Right now, I&apos;m seeking internship opportunities where I can continue developing my skills 
                    and take the next step toward becoming the professional I strive to be.
                  </p>
                </div>
              </Parallax>
            </ScrollAnimation>
            <ScrollAnimation direction="right" delay={0.6} amount={0.2} className="grid grid-cols-2 gap-6 w-full lg:w-auto relative z-20 overflow-visible">
              <Parallax offset={25}>
                <div className="p-4 -m-4">
                  <div className="dvd-bounce-container">
                    <div className="w-[150px] h-[150px] rounded-lg overflow-hidden transition-transform duration-300 hover:scale-110 relative z-20 dvd-bounce dvd-bounce-1">
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
                  </div>
                </div>
              </Parallax>
              <Parallax offset={35}>
                <div className="p-4 -m-4">
                  <div className="dvd-bounce-container">
                    <div className="w-[150px] h-[150px] rounded-lg overflow-hidden transition-transform duration-300 hover:scale-110 relative z-20 dvd-bounce dvd-bounce-2">
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
                  </div>
                </div>
              </Parallax>
              <Parallax offset={45}>
                <div className="p-4 -m-4">
                  <div className="dvd-bounce-container">
                    <div className="w-[150px] h-[150px] rounded-lg overflow-hidden transition-transform duration-300 hover:scale-110 relative z-20 dvd-bounce dvd-bounce-3">
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
                  </div>
                </div>
              </Parallax>
              <Parallax offset={55}>
                <div className="p-4 -m-4">
                  <div className="dvd-bounce-container">
                    <div className="w-[150px] h-[150px] rounded-lg overflow-hidden transition-transform duration-300 hover:scale-110 relative z-20 dvd-bounce dvd-bounce-4">
                      <VolleyballAnimation />
                    </div>
                  </div>
                </div>
              </Parallax>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </section>
  );
} 