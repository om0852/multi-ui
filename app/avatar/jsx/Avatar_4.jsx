"use client";
import React from "react";
import { motion } from "framer-motion";

const PulsingGlowAvatar = ({
  src,
  alt,
  size = "md",
  glowColor = "blue-500",
  className = "",
}) => {
  // Tailwind classes for different sizes
  const sizeClasses = {
    sm: "h-12 w-12",
    md: "h-20 w-20",
    lg: "h-32 w-32",
  };

  return (
    <div className={`relative inline-block ${sizeClasses[size]} ${className}`}>
      {/* Pulsing Glow Effect */}
      <motion.div
        className={`absolute inset-0 rounded-full bg-${glowColor} blur-lg opacity-50`}
        animate={{ scale: [1, 1.5, 1] }}
        transition={{
          repeat: Infinity,
          duration: 2,
          ease: "easeInOut",
        }}
      ></motion.div>

      {/* Avatar Image */}
      <motion.img
        src={src}
        alt={alt}
        className="relative z-10 rounded-full object-cover w-full h-full"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        whileHover={{ scale: 1.1 }}
      />
    </div>
  );
};

export default PulsingGlowAvatar;

