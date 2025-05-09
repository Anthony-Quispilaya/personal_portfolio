"use client";

import React, { useEffect, useState } from "react";

export interface TypewriterProps {
  staticTexts: {
    line1Part1: string;
    line1Part2: string;
    line2Part1: string;
    line2Part2: string;
    line3: string;
    suffix: string;
  };
  rotatingWords: string[];
}

export default function TypewriterEffect({ staticTexts, rotatingWords }: TypewriterProps) {
  // Use suppressHydrationWarning for the initial content
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
      if (typingState.line1.length < staticTexts.line1Part1.length + staticTexts.line1Part2.length) {
        timeout = setTimeout(() => {
          if (typingState.line1.length < staticTexts.line1Part1.length) {
            setTypingState(prev => ({
              ...prev,
              line1: staticTexts.line1Part1.substring(0, prev.line1.length + 1)
            }));
          } else {
            setTypingState(prev => ({
              ...prev,
              line1: staticTexts.line1Part1 + staticTexts.line1Part2.substring(0, prev.line1.length - staticTexts.line1Part1.length + 1)
            }));
          }
        }, 50);
        return () => clearTimeout(timeout);
      }
      
      // Line 2 - "Aspiring Web Developer"
      else if (typingState.line2.length < staticTexts.line2Part1.length + staticTexts.line2Part2.length) {
        timeout = setTimeout(() => {
          if (typingState.line2.length < staticTexts.line2Part1.length) {
            setTypingState(prev => ({
              ...prev,
              line2: staticTexts.line2Part1.substring(0, prev.line2.length + 1)
            }));
          } else {
            setTypingState(prev => ({
              ...prev,
              line2: staticTexts.line2Part1 + staticTexts.line2Part2.substring(0, prev.line2.length - staticTexts.line2Part1.length + 1)
            }));
          }
        }, 50);
        return () => clearTimeout(timeout);
      }
      
      // Line 3 static part - "Creating "
      else if (typingState.line3Static.length < staticTexts.line3.length) {
        timeout = setTimeout(() => {
          setTypingState(prev => ({
            ...prev,
            line3Static: staticTexts.line3.substring(0, prev.line3Static.length + 1)
          }));
        }, 50);
        return () => clearTimeout(timeout);
      }
      
      // Type the first rotating word - "digital"
      else if (typingState.rotatingWord.length < rotatingWords[0].length) {
        timeout = setTimeout(() => {
          setTypingState(prev => ({
            ...prev,
            rotatingWord: rotatingWords[0].substring(0, prev.rotatingWord.length + 1)
          }));
        }, 120);
        return () => clearTimeout(timeout);
      }
      
      // Type the suffix - " experiences"
      else if (typingState.suffix.length < staticTexts.suffix.length) {
        timeout = setTimeout(() => {
          setTypingState(prev => ({
            ...prev,
            suffix: staticTexts.suffix.substring(0, prev.suffix.length + 1)
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
      const currentWord = rotatingWords[typingState.currentWordIndex];
      
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
          const nextWordIndex = (typingState.currentWordIndex + 1) % rotatingWords.length;
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
  }, [typingState, mounted, staticTexts, rotatingWords]);
  
  // Use client-side only rendering with conditional rendering
  if (!mounted) {
    return null;
  }
  
  return (
    <div className="typewriter-container">
      <div className="typewriter-line">
        <span>{typingState.line1.substring(0, staticTexts.line1Part1.length)}</span>
        <span className="typewriter-highlight">
          {typingState.line1.substring(staticTexts.line1Part1.length)}
        </span>
      </div>
      
      <div className="typewriter-line">
        <span>{typingState.line2.substring(0, staticTexts.line2Part1.length)}</span>
        <span className="typewriter-highlight">
          {typingState.line2.substring(staticTexts.line2Part1.length)}
        </span>
      </div>
      
      <div className="typewriter-line">
        <span>{typingState.line3Static}</span>
        <span className="typewriter-changing">{typingState.rotatingWord}</span>
        <span>{typingState.suffix}</span>
      </div>
    </div>
  );
} 