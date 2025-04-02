"use client";
import React from "react";
import { motion } from "framer-motion";

interface AvatarProps {
  src: string; // URL for the avatar image
  alt: string; // Alt text for the avatar image
  size?: "sm" | "md" | "lg"; // Size of the avatar
  className?: string; // Additional classes for customization
}

const RotateAvatar: React.FC<AvatarProps> = ({
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
      whileHover={{
        rotate: 360, // Rotate the avatar on hover
        scale: 1.05, // Slightly increase size
        borderWidth: "4px", // Make the border slightly thicker
      }}
      transition={{
        duration: 0.4,
        ease: "easeInOut",
      }}
    >
      <img
        src={src}
        alt={alt}
        className="object-cover w-full h-full rounded-full border-2 border-transparent"
      />
    </motion.div>
  );
};

export default RotateAvatar;
