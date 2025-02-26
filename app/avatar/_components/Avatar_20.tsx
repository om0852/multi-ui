"use client";
import React from "react";
import { motion } from "framer-motion";

interface AvatarProps {
  src: string; // URL for the avatar image
  alt: string; // Alt text for the avatar image
  size?: "sm" | "md" | "lg"; // Size of the avatar
  className?: string; // Additional classes for customization
}

const GlowingAvatar: React.FC<AvatarProps> = ({
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
      initial={{ opacity: 0.8 }}
      whileHover={{
        scale: 1.1, // Slight expansion on hover
        opacity: 1, // Full opacity on hover
      }}
      transition={{
        duration: 0.3,
        ease: "easeInOut",
      }}
    >
      {/* Avatar image */}
      <motion.img
        src={src}
        alt={alt}
        className="object-cover w-full h-full rounded-full"
      />

      {/* Glowing Aura Effect */}
      <motion.div
        className="absolute inset-0 rounded-full border-4 border-indigo-500 opacity-0 group-hover:opacity-100 group-hover:border-pink-500 group-hover:animate-pulse transition-all"
        initial={{ opacity: 0 }}
        whileHover={{
          opacity: 1,
          scale: 1.2, // Slight scale up of the aura
        }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
        }}
      />
    </motion.div>
  );
};

export default GlowingAvatar;
