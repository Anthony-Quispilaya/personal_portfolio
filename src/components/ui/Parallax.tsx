"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface ParallaxProps {
  children: React.ReactNode;
  offset?: number;
  className?: string;
}

export default function Parallax({ children, offset = 100, className = "" }: ParallaxProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [offset, -offset]);

  return (
    <div ref={ref} className={`overflow-visible ${className}`}>
      <motion.div
        style={{ y }}
        className="w-full h-full overflow-visible"
      >
        {children}
      </motion.div>
    </div>
  );
} 