"use client";

import React from "react";
import TypewriterEffect from "../typewriter/TypewriterEffect";
import HeaderContent from "./HeaderContent";
import ProfilePhoto from "./ProfilePhoto";
import ClientOnly from "../ui/ClientOnly";

// Import the typewriter CSS
import "../typewriter/typewriter.css";

export default function Header() {
  // Static texts for the typewriter effect
  const staticTexts = {
    line1Part1: "Hi, I'm ",
    line1Part2: "Anthony",
    line2Part1: "Aspiring ",
    line2Part2: "Web Developer",
    line3: "Creating ",
    suffix: " experiences"
  };
  
  // Words that will rotate in the typewriter effect
  const rotatingWords = ["digital", "meaningful", "interactive"];
  
  return (
    <header className="w-full flex flex-col items-center py-8 relative">
      <div className="w-full max-w-full px-4">
        <ClientOnly>
          <TypewriterEffect 
            staticTexts={staticTexts}
            rotatingWords={rotatingWords}
          />
        </ClientOnly>
        
        <HeaderContent 
          name="Anthony Quispilaya"
          tagline="Empowering solutions, inspiring change."
          role="Heroic Full Stack Developer"
          buttonText="See My Work"
          buttonHref="#projects"
        />
      </div>
      
      <ProfilePhoto />
    </header>
  );
} 