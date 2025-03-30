"use client";
import React from "react";
import { motion } from "framer-motion";

const Avatar = ({
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
      className={`relative inline-block ${sizeClasses[size]} rounded-full overflow-hidden border ${borderColor} ${className}`}
      style={{ borderWidth }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <img src={src} alt={alt} className="object-cover w-full h-full" />
    </motion.div>
  );
};

export default Avatar;

// ✅ Example as Named Export (Best for Previewing Dynamically)
export const Example = () => {
  return (
    <div className="flex space-x-4 p-4">
      <Avatar src="https://via.placeholder.com/150" alt="User Avatar" size="sm" borderColor="border-blue-500" />
      <Avatar src="https://via.placeholder.com/150" alt="User Avatar" size="md" borderColor="border-red-500" />
      <Avatar src="https://via.placeholder.com/150" alt="User Avatar" size="lg" borderColor="border-green-500" />
    </div>
  );
};
