"use client";
import React from "react";
import { motion } from "framer-motion";

const PulseAvatar = ({
  src,
  alt,
  size = "md",
  className = "",
}) => {
  // Tailwind classes for sizes
  const sizeClasses = {
    sm: "h-16 w-16",
    md: "h-24 w-24",
    lg: "h-32 w-32",
  };

  return (
    <motion.div
      className={`relative ${sizeClasses[size]} rounded-full overflow-hidden ${className} group`}
      animate={{
        scale: [1, 1.05, 1], // Pulse effect with grow and shrink
      }}
      transition={{
        duration: 2,
        repeat: Infinity, // Repeat the pulse animation infinitely
        ease: "easeInOut",
      }}
    >
      <motion.img
        src={src}
        alt={alt}
        className="object-cover w-full h-full rounded-full border-4 border-transparent group-hover:border-gradient-to-r group-hover:from-blue-500 group-hover:to-purple-500 transition-all"
      />
    </motion.div>
  );
};

export default PulseAvatar;
