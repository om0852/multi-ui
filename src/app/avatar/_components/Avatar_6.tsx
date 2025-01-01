"use client";
import React from "react";
import { motion } from "framer-motion";

interface AvatarProps {
  src: string; // URL for the avatar image
  alt: string; // Alt text for the avatar image
  size?: "sm" | "md" | "lg"; // Size of the avatar
  rippleColor?: string; // Color of the ripple animation
  className?: string; // Additional classes for customization
}

const RippleEffectAvatar: React.FC<AvatarProps> = ({
  src,
  alt,
  size = "md",
  rippleColor = "blue-500",
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
      {/* Ripple Animation */}
      <motion.div
        className={`absolute inset-0 rounded-full border-2 border-${rippleColor} opacity-70`}
        animate={{
          scale: [1, 1.5, 2],
          opacity: [0.7, 0.5, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      ></motion.div>

      <motion.div
        className={`absolute inset-0 rounded-full border-2 border-${rippleColor} opacity-70`}
        animate={{
          scale: [1, 1.5, 2],
          opacity: [0.5, 0.3, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
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

export default RippleEffectAvatar;
