"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface AvatarProps {
  src: string;
  alt: string;
  size?: "sm" | "md" | "lg";
  className?: string;
}

const Avatar_23: React.FC<AvatarProps> = ({
  src,
  alt,
  size = "md",
  className = "",
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const sizeClasses = {
    sm: "h-16 w-16",
    md: "h-24 w-24",
    lg: "h-32 w-32",
  };

  const particles = Array.from({ length: 6 }).map((_, i) => (
    <motion.div
      key={i}
      className="absolute w-2 h-2 bg-blue-400 rounded-full"
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: [0, 1, 0],
        scale: [0, 1.5, 0],
        x: Math.cos(i * 60 * (Math.PI / 180)) * 40,
        y: Math.sin(i * 60 * (Math.PI / 180)) * 40,
      }}
      transition={{
        duration: 1,
        ease: "easeOut",
        delay: i * 0.1,
      }}
    />
  ));

  return (
    <div 
      className={`relative ${sizeClasses[size]} ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        className="relative w-full h-full"
        whileHover={{ rotate: 360 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        <img
          src={src}
          alt={alt}
          className="w-full h-full rounded-full object-cover border-4 border-blue-400/30"
        />
        <motion.div
          className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-400/20 to-purple-400/20"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
        />
      </motion.div>
      <AnimatePresence>
        {isHovered && (
          <div className="absolute inset-0 flex items-center justify-center">
            {particles}
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Avatar_23;