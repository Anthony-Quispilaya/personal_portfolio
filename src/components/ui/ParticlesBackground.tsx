"use client";

import React, { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  color: string;
}

const ParticlesBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const animationRef = useRef<number | null>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    
    // Particles array
    const particles: Particle[] = [];
    const particleCount = Math.min(30, Math.floor(window.innerWidth / 50)); // Responsive count
    const connectionDistance = 150;
    const mainColor = "#ff2828";
    
    // Set canvas to full screen
    const handleResize = () => {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };
    
    function initParticles() {
      particles.length = 0;
      if (!canvas) return;
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 3 + 1,
          speedX: (Math.random() - 0.5) * 0.7,
          speedY: (Math.random() - 0.5) * 0.7,
          color: mainColor,
        });
      }
    }
    
    handleResize();
    window.addEventListener("resize", handleResize);
    
    function updateParticles() {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        
        // Move particles
        p.x += p.speedX;
        p.y += p.speedY;
        
        // Bounce off edges
        if (p.x < 0 || p.x > canvas.width) p.speedX *= -1;
        if (p.y < 0 || p.y > canvas.height) p.speedY *= -1;
        
        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = 0.2;
        ctx.fill();
        
        // Connect particles
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < connectionDistance) {
            ctx.beginPath();
            ctx.strokeStyle = p.color;
            ctx.globalAlpha = 0.1 * (1 - distance / connectionDistance);
            ctx.lineWidth = 1;
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }
      
      animationRef.current = requestAnimationFrame(updateParticles);
    }
    
    // Mouse interaction
    const mouse = {
      x: undefined as number | undefined, 
      y: undefined as number | undefined,
      isActive: false
    };
    
    canvas.addEventListener("mousemove", (e) => {
      mouse.x = e.x;
      mouse.y = e.y;
      mouse.isActive = true;
      
      // Push particles slightly away from mouse
      for (const p of particles) {
        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 80) {
          const angle = Math.atan2(dy, dx);
          p.speedX += Math.cos(angle) * 0.1;
          p.speedY += Math.sin(angle) * 0.1;
        }
      }
    });
    
    canvas.addEventListener("click", () => {
      // Add 3 new particles on click
      for (let i = 0; i < 3; i++) {
        if (mouse.x && mouse.y) {
          particles.push({
            x: mouse.x,
            y: mouse.y,
            size: Math.random() * 3 + 1,
            speedX: (Math.random() - 0.5) * 2,
            speedY: (Math.random() - 0.5) * 2,
            color: mainColor,
          });
        }
      }
    });
    
    canvas.addEventListener("mouseleave", () => {
      mouse.isActive = false;
    });
    
    // Start animation
    updateParticles();
    
    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);
  
  return (
    <canvas 
      ref={canvasRef} 
      className="fixed inset-0 -z-10 pointer-events-auto"
      style={{ background: "transparent" }}
    />
  );
};

export default ParticlesBackground; 