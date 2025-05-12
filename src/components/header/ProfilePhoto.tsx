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
    <div className={`absolute top-1/2 -translate-y-1/2 right-4 md:right-8 lg:right-12 xl:right-16 ${className}`}>
      <motion.div 
        className="w-[400px] h-[400px] rounded-b-5xl flex items-center justify-center overflow-visible shadow-2xl transform hover:scale-105 transition-transform duration-500"
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
              e.currentTarget.src = '/images/fallback.png';
            }}
            className="w-full h-full object-cover filter brightness-105 contrast-105 rounded-b-5xl"
          />
        ) : (
          <span className="text-white">Your Photo</span>
        )}
      </motion.div>
    </div>
  );
} 