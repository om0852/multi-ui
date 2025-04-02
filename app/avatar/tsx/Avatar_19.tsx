"use client";
import React from "react";
import { motion } from "framer-motion";

interface AvatarProps {
  src: string; // URL for the avatar image
  alt: string; // Alt text for the avatar image
  size?: "sm" | "md" | "lg"; // Size of the avatar
  className?: string; // Additional classes for customization
}

const LiquidAvatar: React.FC<AvatarProps> = ({
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
        scale: [1, 1.05, 1], // Liquid-like wave animation
        rotate: [0, 5, 0], // Slight rotation for dynamic fluid motion
      }}
      transition={{
        duration: 2,
        repeat: Infinity, // Repeat the liquid animation infinitely
        ease: "easeInOut",
      }}
    >
      {/* Avatar image */}
      <motion.img
        src={src}
        alt={alt}
        className="object-cover w-full h-full rounded-full"
      />

      {/* Liquid animation effect on hover */}
      <motion.div
        className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-green-500 opacity-0 group-hover:opacity-30 group-hover:scale-110 group-hover:rotate-[5deg] transition-all"
        initial={{ scale: 0 }}
        whileHover={{ scale: 1.2, opacity: 0.4 }}
        transition={{
          duration: 0.6,
          ease: "easeOut",
        }}
      />
    </motion.div>
  );
};

export default LiquidAvatar;
