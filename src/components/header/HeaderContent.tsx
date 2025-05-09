import React from 'react';

interface HeaderContentProps {
  name: string;
  tagline: string;
  role: string;
  buttonText: string;
  buttonHref: string;
}

export default function HeaderContent({
  name = "Anthony Quispilaya",
  tagline = "Empowering solutions, inspiring change.",
  role = "Heroic Full Stack Developer",
  buttonText = "See My Work",
  buttonHref = "#projects"
}: HeaderContentProps) {
  return (
    <div className="mt-8">
      <h1 className="text-4xl font-bold mb-2">{name}</h1>
      <p className="text-lg text-gray-600">
        {tagline}<br />
        <span className="hero-keyword">{role}</span>
      </p>
      <a 
        href={buttonHref} 
        className="mt-6 inline-block px-8 py-3 rounded-full bg-red-600 text-white text-lg font-bold shadow-lg hover:bg-red-700 transition-all duration-200 animate-bounce focus:outline-none focus:ring-4 focus:ring-red-400"
      >
        {buttonText}
      </a>
    </div>
  );
} 