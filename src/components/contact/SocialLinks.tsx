"use client";

import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const SocialLinks = () => {
  return (
    <div className="flex justify-center gap-8 mb-12">
      <a
        href="https://github.com/Anthony-Quispilaya"
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-2 text-white hover:text-[#ff2828] transition-colors duration-300 social-link"
      >
        <FaGithub className="w-8 h-8 group-hover:scale-110 transition-transform duration-300" />
        <span className="text-lg font-medium">GitHub</span>
      </a>
      <a
        href="https://linkedin.com/in/anthony-quispilaya"
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-2 text-white hover:text-[#ff2828] transition-colors duration-300 social-link"
      >
        <FaLinkedin className="w-8 h-8 group-hover:scale-110 transition-transform duration-300" />
        <span className="text-lg font-medium">LinkedIn</span>
      </a>
    </div>
  );
};

export default SocialLinks; 