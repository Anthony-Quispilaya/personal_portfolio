import React from 'react';

interface ProfilePhotoProps {
  className?: string;
  imageSrc?: string;
}

export default function ProfilePhoto({ className = '', imageSrc = '/images/Anthony.png' }: ProfilePhotoProps) {
  return (
    <div className={`absolute top-24 right-4 md:right-8 lg:right-12 xl:right-16 ${className} animate-fade-in`}>
      <div className="w-125 h-125 rounded-b-5xl flex items-center justify-center overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
        {imageSrc ? (
          <img 
            src={imageSrc} 
            alt="Anthony Quispilaya" 
            className="w-full h-full object-cover filter brightness-105 contrast-105"
          />
        ) : (
          <span className="text-white">Your Photo</span>
        )}
      </div>
    </div>
  );
} 