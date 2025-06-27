"use client";

import { motion } from 'framer-motion';
import { useState } from 'react';

interface FloatingCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export default function FloatingCard({ children, className = "", delay = 0 }: FloatingCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 100, rotateX: -15 }}
      animate={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ 
        duration: 0.8, 
        delay,
        type: "spring",
        stiffness: 100
      }}
      whileHover={{ 
        y: -20, 
        rotateX: 10,
        rotateY: isHovered ? 5 : 0,
        scale: 1.05,
        transition: { duration: 0.3 }
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className={`transform-gpu perspective-1000 ${className}`}
      style={{
        transformStyle: 'preserve-3d',
      }}
    >
      <div className="relative">
        {/* Glow effect */}
        <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-orange-500 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
        {children}
      </div>
    </motion.div>
  );
}