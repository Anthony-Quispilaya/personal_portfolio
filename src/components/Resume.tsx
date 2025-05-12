"use client";

import React from "react";
import ScrollAnimation from "@/components/ui/ScrollAnimation";
import Parallax from "@/components/ui/Parallax";
import { FaDownload } from "react-icons/fa";

export default function Resume() {
  return (
    <section id="resume" className="w-full py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white/5 backdrop-blur-[2px] rounded-lg p-12 border border-white/20 max-w-7xl mx-auto shadow-xl flex flex-col items-center justify-center hover:bg-white/10 transition-all duration-300 hover:scale-[1.01] hover:shadow-lg hover:shadow-white/5">
          <ScrollAnimation>
            <h2 className="text-4xl font-bold text-white mb-12 text-center tracking-tight transition-transform duration-300 hover:scale-110">
              Resume
            </h2>
          </ScrollAnimation>
          
          <div className="w-full flex justify-center">
            <ScrollAnimation direction="up" className="max-w-2xl w-full">
              <Parallax offset={20}>
                <div className="flex flex-col items-center justify-center text-center">
                  <p className="text-gray-300 text-lg mb-8 max-w-prose">
                    View my professional experience, education, and skills in my resume.
                    Feel free to download a copy for your reference.
                  </p>
                  
                  <a 
                    href="/resume.pdf" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center gap-2 px-8 py-4 rounded-full bg-red-600 text-white text-lg font-bold shadow-lg hover:bg-red-700 transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-red-400"
                  >
                    <FaDownload className="h-5 w-5" />
                    Download Resume
                  </a>
                </div>
              </Parallax>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </section>
  );
}
