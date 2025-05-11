"use client";

import React from 'react';
import Image from 'next/image';

const VolleyballAnimation = () => {
  return (
    <div className="w-[200px] h-[200px] relative">
      <div className="animate-spin-bounce">
        <Image
          src="/images/volleyball.png"
          alt="Volleyball"
          width={200}
          height={200}
          className="rounded-lg object-cover"
        />
      </div>
    </div>
  );
};

export default VolleyballAnimation; 