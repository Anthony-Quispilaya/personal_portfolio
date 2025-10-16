"use client";

import React from "react";
// Removed floating icon animation and styles
import ScrollAnimation from "../ui/ScrollAnimation";
import Parallax from "../ui/Parallax";

export default function About() {
  return (
    <section id="about" className="w-full py-32 relative z-10">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  <div className="card card-hover p-10 md:p-12 lg:p-16 max-w-7xl mx-auto overflow-visible">
          <ScrollAnimation delay={0.2} amount={0.1}>
            <h2 className="text-4xl font-bold mb-12 text-center tracking-tight">
              About Me
            </h2>
          </ScrollAnimation>
          <div className="flex flex-col gap-12 items-start overflow-visible">
            <ScrollAnimation direction="left" delay={0.4} amount={0.2} className="leading-relaxed max-w-4xl mx-auto space-y-6 relative z-20">
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
                    or out on the volleyball court. I&apos;m proud to be Peruvian American and a first-generation student in my family. 
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
          </div>
        </div>
      </div>
    </section>
  );
} 