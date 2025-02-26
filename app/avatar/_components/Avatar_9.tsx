"use client";
import React from "react";
import { motion } from "framer-motion";

interface AvatarProps {
  src: string; // URL for the avatar image
  alt: string; // Alt text for the avatar image
  size?: "sm" | "md" | "lg"; // Size of the avatar
  className?: string; // Additional classes for customization
}

const GlowScaleAvatar: React.FC<AvatarProps> = ({
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
      whileHover={{ scale: 1.1, boxShadow: "0 0 15px rgba(0, 255, 255, 0.7)" }}
      transition={{ duration: 0.3 }}
    >
      <img
        src={src}
        alt={alt}
        className="object-cover w-full h-full rounded-full border-4 border-gray-800"
      />
    </motion.div>
  );
};

export default GlowScaleAvatar;
