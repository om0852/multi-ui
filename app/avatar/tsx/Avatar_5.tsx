"use client";
import React from "react";
import { motion } from "framer-motion";

interface AvatarProps {
  src: string; // URL for the avatar image
  alt: string; // Alt text for the avatar image
  size?: "sm" | "md" | "lg"; // Size of the avatar
  borderColor?: string; // Color of the spinning border
  className?: string; // Additional classes for customization
}

const SpinningBorderAvatar: React.FC<AvatarProps> = ({
  src,
  alt,
  size = "md",
  borderColor = "blue-500",
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
      {/* Spinning Border */}
      <motion.div
        className={`absolute inset-[-1px] rounded-full border-4 border-${borderColor} border-t-transparent`}
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
        whileHover={{ scale: 1.1, rotate: 10 }}
      />
    </div>
  );
};

export default SpinningBorderAvatar;
