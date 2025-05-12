"use client";

import React, { useEffect, useState } from 'react';
import { CSSProperties } from 'react';

interface GradientScrollProps {
  baseHue?: number;
  maxScroll?: number;
  saturation?: number;
  lightness?: number;
  opacity?: number;
  transitionSpeed?: number;
}

const GradientScroll: React.FC<GradientScrollProps> = ({
  baseHue = 0, // Start with red
  maxScroll = 3000,
  saturation = 80,
  lightness = 10,
  opacity = 0.9,
  transitionSpeed = 0.3
}) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Calculate hue based on scroll position (0-360 degrees)
  // Reduce the range of color change to make it more subtle
  const hueChange = Math.min(scrollPosition / maxScroll * 60, 60); // Reduced from 360 to 60
  const currentHue = (baseHue + hueChange) % 360;
  
  // Create gradient with a much closer complementary color
  // Instead of 180 degrees (opposite), use a closer color (30 degrees away)
  const complementaryHue = (currentHue + 30) % 360;
  
  const gradientStyle: CSSProperties = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: 0, // Ensure this is at the bottom of the stack
    background: `linear-gradient(135deg, 
                  hsla(${currentHue}, ${saturation}%, ${lightness}%, 1) 0%, 
                  hsla(${complementaryHue}, ${saturation - 5}%, ${lightness + 2}%, 0.8) 100%)`,
    opacity: opacity,
    transition: `background ${transitionSpeed}s ease-out`,
    pointerEvents: 'none', // Ensure it doesn't capture any mouse events
  };

  return <div style={gradientStyle} className="gradient-scroll" />;
};

export default GradientScroll; 