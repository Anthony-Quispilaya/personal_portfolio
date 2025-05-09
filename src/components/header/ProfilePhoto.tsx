import React from 'react';

interface ProfilePhotoProps {
  className?: string;
  imageSrc?: string;
}

export default function ProfilePhoto({ className = '', imageSrc }: ProfilePhotoProps) {
  return (
    <div className={`absolute top-8 right-8 md:right-16 lg:right-24 xl:right-32 ${className}`}>
      <div className="w-64 h-64 rounded-full bg-gray-700 border-4 border-red-600 flex items-center justify-center overflow-hidden">
        {imageSrc ? (
          <img src={imageSrc} alt="Profile" className="w-full h-full object-cover" />
        ) : (
          <span className="text-white">Your Photo</span>
        )}
      </div>
    </div>
  );
} 