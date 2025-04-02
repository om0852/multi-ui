"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

interface AvatarProps {
  src: string;
  alt: string;
  size?: "sm" | "md" | "lg";
  className?: string;
}

const Avatar_29: React.FC<AvatarProps> = ({
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

  const magneticParticles = Array.from({ length: 12 }).map((_, i) => (
    <motion.div
      key={i}
      className="absolute w-1 h-1 bg-blue-400 rounded-full"
      initial={{
        x: Math.cos(i * 30 * (Math.PI / 180)) * 40,
        y: Math.sin(i * 30 * (Math.PI / 180)) * 40,
      }}
      animate={{
        x: isHovered ? 0 : Math.cos(i * 30 * (Math.PI / 180)) * 40,
        y: isHovered ? 0 : Math.sin(i * 30 * (Math.PI / 180)) * 40,
        scale: isHovered ? 0 : 1,
      }}
      transition={{
        duration: 0.8,
        ease: "easeInOut",
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
        className="absolute inset-[-20px]"
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <div className="relative w-full h-full flex items-center justify-center">
          {magneticParticles}
        </div>
      </motion.div>
      
      <motion.div
        className="relative w-full h-full rounded-full overflow-hidden"
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.4 }}
      >
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover"
        />
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
        />
      </motion.div>
    </div>
  );
};

export default Avatar_29; 