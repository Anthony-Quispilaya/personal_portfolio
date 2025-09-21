import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface ProfilePhotoProps {
  className?: string;
  imageSrc?: string;
}

export default function ProfilePhoto({ className = '', imageSrc = '/images/Anthony.png' }: ProfilePhotoProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Simulate a slight delay for better effect
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`relative ${className}`}>
      <motion.div 
        className="w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96 rounded-2xl flex items-center justify-center overflow-hidden shadow-xl hover:scale-105 transition-transform duration-500"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ 
          opacity: isLoaded ? 1 : 0, 
          scale: isLoaded ? 1 : 0.8,
          y: isLoaded ? 0 : 20
        }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        {imageSrc ? (
          <Image 
            src={imageSrc} 
            alt="Anthony Quispilaya" 
            width={800}
            height={800}
            quality={100}
            priority
            loading="eager"
            onError={(e) => {
              console.error('Error loading profile image');
              // Optional: add a static fallback asset
            }}
            className="w-full h-full object-cover"
          />
        ) : (
          <span className="text-white">Your Photo</span>
        )}
      </motion.div>
    </div>
  );
} 