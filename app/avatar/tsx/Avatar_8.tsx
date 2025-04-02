"use client";
import React from "react";
import { motion } from "framer-motion";

interface AvatarProps {
  src: string; // URL for the avatar image
  alt: string; // Alt text for the avatar image
  size?: "sm" | "md" | "lg"; // Size of the avatar
  className?: string; // Additional classes for customization
}

const BouncingAvatar: React.FC<AvatarProps> = ({
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
      className={`relative ${sizeClasses[size]} rounded-full overflow-hidden group ${className}`}
      whileHover={{ y: -10, scale: 1.1 }}
      transition={{ duration: 0.4, type: "spring", stiffness: 200 }}
    >
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 animate-pulse rounded-full" />
      <img
        src={src}
        alt={alt}
        className="relative z-10 object-cover w-full h-full rounded-full border-4 border-white shadow-md"
      />
    </motion.div>
  );
};

export default BouncingAvatar;
