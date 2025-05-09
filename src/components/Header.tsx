"use client";

import React, { useEffect, useState } from "react";

export default function Header() {
  // Static texts
  const texts = {
    line1Part1: "Hi, I'm ",
    line1Part2: "Anthony",
    line2Part1: "Aspiring ",
    line2Part2: "Web Developer",
    line3: "Creating ",
    suffix: " experiences"
  };
  
  const words = ["digital", "meaningful", "interactive"];
  
  const [mounted, setMounted] = useState(false);
  const [typingState, setTypingState] = useState({
    line1: "",
    line2: "",
    line3Static: "",
    rotatingWord: "",
    suffix: "",
    phase: "initial", // initial, rotating
    isDeleting: false,
    currentWordIndex: 0
  });
  
  // Handle client-side only rendering
  useEffect(() => {
    setMounted(true);
  }, []);
  
  // Animation logic
  useEffect(() => {
    if (!mounted) return;
    
    let timeout: NodeJS.Timeout;
    
    // Initial typing phase - Type out all static text
    if (typingState.phase === "initial") {
      // Line 1 - "Hi, I'm Anthony"
      if (typingState.line1.length < texts.line1Part1.length + texts.line1Part2.length) {
        timeout = setTimeout(() => {
          if (typingState.line1.length < texts.line1Part1.length) {
            setTypingState(prev => ({
              ...prev,
              line1: texts.line1Part1.substring(0, prev.line1.length + 1)
            }));
          } else {
            setTypingState(prev => ({
              ...prev,
              line1: texts.line1Part1 + texts.line1Part2.substring(0, prev.line1.length - texts.line1Part1.length + 1)
            }));
          }
        }, 50);
        return () => clearTimeout(timeout);
      }
      
      // Line 2 - "Aspiring Web Developer"
      else if (typingState.line2.length < texts.line2Part1.length + texts.line2Part2.length) {
        timeout = setTimeout(() => {
          if (typingState.line2.length < texts.line2Part1.length) {
            setTypingState(prev => ({
              ...prev,
              line2: texts.line2Part1.substring(0, prev.line2.length + 1)
            }));
          } else {
            setTypingState(prev => ({
              ...prev,
              line2: texts.line2Part1 + texts.line2Part2.substring(0, prev.line2.length - texts.line2Part1.length + 1)
            }));
          }
        }, 50);
        return () => clearTimeout(timeout);
      }
      
      // Line 3 static part - "Creating "
      else if (typingState.line3Static.length < texts.line3.length) {
        timeout = setTimeout(() => {
          setTypingState(prev => ({
            ...prev,
            line3Static: texts.line3.substring(0, prev.line3Static.length + 1)
          }));
        }, 50);
        return () => clearTimeout(timeout);
      }
      
      // Type the first rotating word - "digital"
      else if (typingState.rotatingWord.length < words[0].length) {
        timeout = setTimeout(() => {
          setTypingState(prev => ({
            ...prev,
            rotatingWord: words[0].substring(0, prev.rotatingWord.length + 1)
          }));
        }, 120);
        return () => clearTimeout(timeout);
      }
      
      // Type the suffix - " experiences"
      else if (typingState.suffix.length < texts.suffix.length) {
        timeout = setTimeout(() => {
          setTypingState(prev => ({
            ...prev,
            suffix: texts.suffix.substring(0, prev.suffix.length + 1)
          }));
        }, 50);
        return () => clearTimeout(timeout);
      }
      
      // Initial typing complete, start rotating phase
      else {
        timeout = setTimeout(() => {
          setTypingState(prev => ({
            ...prev,
            phase: "rotating",
            isDeleting: true
          }));
        }, 2000);
        return () => clearTimeout(timeout);
      }
    }
    
    // Word rotation phase - cycle through words
    else if (typingState.phase === "rotating") {
      const currentWord = words[typingState.currentWordIndex];
      
      // Deleting the current word
      if (typingState.isDeleting) {
        if (typingState.rotatingWord.length > 0) {
          timeout = setTimeout(() => {
            setTypingState(prev => ({
              ...prev,
              rotatingWord: prev.rotatingWord.substring(0, prev.rotatingWord.length - 1)
            }));
          }, 50);
          return () => clearTimeout(timeout);
        } else {
          // Word deleted, move to next word
          const nextWordIndex = (typingState.currentWordIndex + 1) % words.length;
          timeout = setTimeout(() => {
            setTypingState(prev => ({
              ...prev,
              currentWordIndex: nextWordIndex,
              isDeleting: false
            }));
          }, 200);
          return () => clearTimeout(timeout);
        }
      }
      
      // Typing the new word
      else {
        if (typingState.rotatingWord.length < currentWord.length) {
          timeout = setTimeout(() => {
            setTypingState(prev => ({
              ...prev,
              rotatingWord: currentWord.substring(0, prev.rotatingWord.length + 1)
            }));
          }, 120);
          return () => clearTimeout(timeout);
        } else {
          // Word fully typed, pause before deleting
          timeout = setTimeout(() => {
            setTypingState(prev => ({
              ...prev,
              isDeleting: true
            }));
          }, 2000);
          return () => clearTimeout(timeout);
        }
      }
    }
  }, [typingState, mounted, texts, words]);
  
  // Server-side placeholder
  if (!mounted) {
    return (
      <header className="w-full flex flex-col items-center py-8 relative">
        <div className="w-full max-w-full px-4">
          <div className="typewriter-container">
            <div className="typewriter-line">&nbsp;</div>
            <div className="typewriter-line">&nbsp;</div>
            <div className="typewriter-line">&nbsp;</div>
          </div>
          
          <h1 className="text-4xl font-bold mb-2 mt-8">Anthony Quispilaya</h1>
          <p className="text-lg text-gray-600">Empowering solutions, inspiring change.<br /><span className="hero-keyword">Heroic</span> Full Stack Developer</p>
          <a href="#projects" className="mt-6 inline-block px-8 py-3 rounded-full bg-red-600 text-white text-lg font-bold shadow-lg hover:bg-red-700 transition-all duration-200 animate-bounce focus:outline-none focus:ring-4 focus:ring-red-400">See My Work</a>
        </div>
        
        {/* Photo container positioned absolutely */}
        <div className="absolute top-8 right-8 md:right-16 lg:right-24 xl:right-32">
          <div className="w-64 h-64 rounded-full bg-gray-700 border-4 border-red-600 flex items-center justify-center">
            <span className="text-white">Your Photo</span>
          </div>
        </div>
      </header>
    );
  }
  
  return (
    <header className="w-full flex flex-col items-center py-8 relative">
      <div className="w-full max-w-full px-4">
        <div className="typewriter-container">
          <div className="typewriter-line">
            <span>{typingState.line1.substring(0, texts.line1Part1.length)}</span>
            <span className="typewriter-highlight">
              {typingState.line1.substring(texts.line1Part1.length)}
            </span>
          </div>
          
          <div className="typewriter-line">
            <span>{typingState.line2.substring(0, texts.line2Part1.length)}</span>
            <span className="typewriter-highlight">
              {typingState.line2.substring(texts.line2Part1.length)}
            </span>
          </div>
          
          <div className="typewriter-line">
            <span>{typingState.line3Static}</span>
            <span className="typewriter-changing">{typingState.rotatingWord}</span>
            <span>{typingState.suffix}</span>
          </div>
        </div>
        
        <h1 className="text-4xl font-bold mb-2 mt-8">Anthony Quispilaya</h1>
        <p className="text-lg text-gray-600">Empowering solutions, inspiring change.<br /><span className="hero-keyword">Heroic</span> Full Stack Developer</p>
        <a href="#projects" className="mt-6 inline-block px-8 py-3 rounded-full bg-red-600 text-white text-lg font-bold shadow-lg hover:bg-red-700 transition-all duration-200 animate-bounce focus:outline-none focus:ring-4 focus:ring-red-400">See My Work</a>
      </div>
      
      {/* Photo container positioned absolutely */}
      <div className="absolute top-8 right-8 md:right-16 lg:right-24 xl:right-32">
        <div className="w-64 h-64 rounded-full bg-gray-700 border-4 border-red-600 flex items-center justify-center">
          <span className="text-white">Your Photo</span>
        </div>
      </div>
    </header>
  );
}
