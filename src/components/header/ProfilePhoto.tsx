import React from 'react';
import Image from 'next/image';

interface ProfilePhotoProps {
  className?: string;
  imageSrc?: string;
}

export default function ProfilePhoto({ className = '', imageSrc = '/images/Anthony.png' }: ProfilePhotoProps) {
  return (
    <div className={`absolute top-1/2 -translate-y-1/2 right-4 md:right-8 lg:right-12 xl:right-16 ${className}`}>
      <div className="w-100 h-100 rounded-b-5xl flex items-center justify-center overflow-visible shadow-2xl transform hover:scale-105 transition-transform duration-500">
        {imageSrc ? (
          <Image 
            src={imageSrc} 
            alt="Anthony Quispilaya" 
            width={100}
            height={100}
            className="w-full h-full object-cover filter brightness-105 contrast-105 rounded-b-5xl"
          />
        ) : (
          <span className="text-white">Your Photo</span>
        )}
      </div>
    </div>
  );
} 