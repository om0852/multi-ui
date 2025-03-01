"use client";
import React from "react";
import { motion } from "framer-motion";

interface AvatarProps {
  src: string; // URL for the avatar image
  alt: string; // Alt text for the avatar image
  size?: "sm" | "md" | "lg"; // Size of the avatar
  className?: string; // Additional classes for customization
}

const FlipAvatar: React.FC<AvatarProps> = ({
  src,
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
      className={`relative ${sizeClasses[size]} w-10 rounded-full overflow-hidden ${className} group`}
    >
      {/* Avatar image with flip animation */}
      <motion.div
        className="absolute inset-0 flex justify-center items-center bg-cover bg-center rounded-full"
        style={{
          backgroundImage: `url(${src})`,
        }}
        initial={{ rotateY: 0 }}
        whileHover={{ rotateY: 180 }}
        transition={{
          duration: 0.6,
          ease: "easeInOut",
        }}
      />
      
      {/* Background color or pattern revealed on hover */}
      <motion.div
        className="absolute inset-0 flex justify-center items-center bg-blue-600 text-white rounded-full"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
        }}
      >
        <span className="text-lg">Hi!</span>
      </motion.div>
    </motion.div>
  );
};

export default FlipAvatar;
