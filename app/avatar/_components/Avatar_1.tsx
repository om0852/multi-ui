"use client";
import React from "react";
import { motion } from "framer-motion";

interface AvatarProps {
  src: string; // URL for the avatar image
  alt: string; // Alt text for the avatar image
  size?: "sm" | "md" | "lg"; // Size of the avatar
  borderColor?: string; // Border color for the avatar
  borderWidth?: number; // Border width for the avatar
  className?: string; // Additional classes for customization
}

const Avatar: React.FC<AvatarProps> = ({
  src,
  alt,
  size = "md",
  borderColor = "border-gray-200",
  borderWidth = 2,
  className = "",
}) => {
  // Tailwind classes for different sizes
  const sizeClasses = {
    sm: "h-8 w-8 text-xs",
    md: "h-12 w-12 text-sm",
    lg: "h-16 w-16 text-lg",
  };

  return (
    <motion.div
      className={`relative inline-block ${sizeClasses[size]} rounded-full overflow-hidden border ${borderWidth} ${borderColor} ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <img
        src={src}
        alt={alt}
        className="object-cover w-full h-full"
      />
    </motion.div>
  );
};

export default Avatar;
