"use client";
import React from "react";
import { motion } from "framer-motion";

interface AvatarProps {
  src: string; // URL for the avatar image
  alt: string; // Alt text for the avatar image
  size?: "sm" | "md" | "lg"; // Size of the avatar
  className?: string; // Additional classes for customization
}

const RippleAvatar: React.FC<AvatarProps> = ({
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
        y: ["0%", "-10%"], // Floating animation (slight up and down)
      }}
      transition={{
        duration: 2,
        repeat: Infinity, // Repeat the floating animation infinitely
        ease: "easeInOut",
      }}
    >
      {/* Avatar image */}
      <motion.img
        src={src}
        alt={alt}
        className="object-cover w-full h-full rounded-full"
      />
      
      {/* Ripple effect on hover */}
      <motion.div
        className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-green-500 to-purple-500 opacity-0 group-hover:opacity-50 group-hover:scale-110"
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

export default RippleAvatar;
