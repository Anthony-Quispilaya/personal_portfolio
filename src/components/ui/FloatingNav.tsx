"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { FaUser, FaCode, FaProjectDiagram, FaFileAlt, FaEnvelope, FaHome } from 'react-icons/fa';

const navItems = [
  { id: '', label: 'Home', href: '/', icon: FaHome },
  { id: 'about', label: 'About', href: '/#about', icon: FaUser },
  { id: 'skills', label: 'Skills', href: '/#skills', icon: FaCode },
  { id: 'projects', label: 'Projects', href: '/#projects', icon: FaProjectDiagram },
  { id: 'resume', label: 'Resume', href: '/#resume', icon: FaFileAlt },
  { id: 'contact', label: 'Contact', href: '/#contact', icon: FaEnvelope },
];

const FloatingNav = () => {
  const [activeSection, setActiveSection] = useState('');
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show floating nav after scrolling just a bit
      const scrollPosition = window.scrollY;
      setVisible(scrollPosition > 100);
      
      // Determine active section for highlighting
      const sectionPositions = navItems
        .filter(item => item.id) // Filter out the Home item which has no id
        .map(item => {
          const element = document.getElementById(item.id);
          if (!element) return { id: item.id, top: 0, bottom: 0 };
          
          const rect = element.getBoundingClientRect();
          return {
            id: item.id,
            top: rect.top,
            bottom: rect.bottom
          };
        });
      
      // Consider a section active if its top is near the top of the viewport
      const threshold = window.innerHeight * 0.25;
      const activeSections = sectionPositions.filter(
        section => section.top <= threshold && section.bottom > 0
      );
      
      if (activeSections.length > 0) {
        // Choose the section that's most visible
        const mostVisibleSection = activeSections.reduce((prev, current) => 
          Math.abs(current.top) < Math.abs(prev.top) ? current : prev
        );
        setActiveSection(mostVisibleSection.id);
      } else if (scrollPosition < 100) {
        // If at the top, highlight Home
        setActiveSection('');
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    // Initial check
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  // Handle nav item click
  const handleItemClick = (e: React.MouseEvent, sectionId: string) => {
    if (!sectionId) return; // The Home link doesn't need special handling
    
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      const navHeight = 80;
      const sectionTop = section.getBoundingClientRect().top + window.scrollY - navHeight;
      
      window.scrollTo({
        top: sectionTop,
        behavior: 'smooth'
      });
      
      setActiveSection(sectionId);
    }
  };
  
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 bg-black/80 backdrop-blur-md rounded-full border border-white/10 px-4 py-2 shadow-xl"
        >
          <nav className="flex items-center space-x-2 md:space-x-6">
            {navItems.map((item) => {
              const isActive = item.id === activeSection || (!activeSection && item.id === '');
              const Icon = item.icon;
              
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={(e) => item.id && handleItemClick(e, item.id)}
                  className={`
                    px-2 py-1 flex items-center gap-1 text-sm md:text-base transition-all duration-300 rounded-md relative
                    ${isActive ? 'text-red-500 font-medium' : 'text-white/80 hover:text-black'}
                  `}
                >
                  <Icon className="h-4 w-4" />
                  <span className="hidden md:inline">{item.label}</span>
                  
                  {isActive && (
                    <motion.div
                      layoutId="activeSection"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-red-500 rounded-full"
                      initial={false}
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FloatingNav; 