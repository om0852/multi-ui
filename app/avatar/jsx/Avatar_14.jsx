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
      className={`relative ${sizeClasses[size]} rounded-full overflow-hidden ${className}`}
      animate={{
        scale: [1, 1.1, 1], // Pulse effect (scaling up and down)
      }}
      transition={{
        duration: 1.5,
        repeat: Infinity, // Repeat the pulse indefinitely
        ease: "easeInOut",
      }}
    >
      <img
        src={src}
        alt={alt}
        className="object-cover w-full h-full rounded-full"
      />
    </motion.div>
  );
};

export default PulseAvatar;
