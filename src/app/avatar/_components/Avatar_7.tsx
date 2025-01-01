"use client";
import React from "react";
import { motion } from "framer-motion";

interface AvatarProps {
  src: string; // URL for the avatar image
  alt: string; // Alt text for the avatar image
  name: string; // Name to display on hover
  size?: "sm" | "md" | "lg"; // Size of the avatar
  className?: string; // Additional classes for customization
}

const ZoomOutAvatar: React.FC<AvatarProps> = ({
  src,
  alt,
  name,
  size = "md",
  className = "",
}) => {
  // Tailwind classes for sizes
  const sizeClasses = {
    sm: "h-16 w-16 text-sm",
    md: "h-24 w-24 text-base",
    lg: "h-32 w-32 text-lg",
  };

  return (
    <motion.div
      className={`relative ${sizeClasses[size]} ${className} group`}
    >
      {/* Avatar Image */}
      <motion.img
        src={src}
        alt={alt}
        className="absolute inset-0 object-cover w-full h-full rounded-full shadow-lg"
        initial={{ scale: 1 }}
        whileHover={{ scale: 0.8 }}
        transition={{ duration: 0.4 }}
      />

      {/* Name Overlay */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center rounded-full bg-black bg-opacity-50 text-white opacity-0 group-hover:opacity-100"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        <motion.p
          className="text-center font-semibold"
          initial={{ y: 10, opacity: 0 }}
          whileHover={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          {name}
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

export default ZoomOutAvatar;
