"use client";
import React from "react";
import { motion } from "framer-motion";

interface AvatarProps {
  src: string; // URL for the avatar image
  alt: string; // Alt text for the avatar image
  size?: "sm" | "md" | "lg"; // Size of the avatar
  ringColor?: string; // Color of the rotating ring
  className?: string; // Additional classes for customization
}

const RotatingRingAvatar: React.FC<AvatarProps> = ({
  src,
  alt,
  size = "md",
  ringColor = "blue-500",
  className = "",
}) => {
  // Tailwind classes for different sizes
  const sizeClasses = {
    sm: "h-12 w-12",
    md: "h-16 w-16",
    lg: "h-24 w-24",
  };

  return (
    <div className={`relative inline-block ${sizeClasses[size]} ${className}`}>
      {/* Rotating Ring */}
      <motion.div
        className={`absolute inset-0 rounded-full border-4 border-t-transparent border-${ringColor}`}
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
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

export default RotatingRingAvatar;
