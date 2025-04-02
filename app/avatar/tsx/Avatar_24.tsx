"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface AvatarProps {
  src: string;
  alt: string;
  size?: "sm" | "md" | "lg";
  className?: string;
}

const Avatar_24: React.FC<AvatarProps> = ({
  src,
  alt,
  size = "md",
  className = "",
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const sizeClasses = {
    sm: "h-16 w-16",
    md: "h-24 w-24",
    lg: "h-32 w-32",
  };

  const ripples = Array.from({ length: 3 }).map((_, i) => (
    <motion.div
      key={i}
      className="absolute inset-0 rounded-full border-2 border-cyan-400"
      initial={{ scale: 1, opacity: 0.5 }}
      animate={{ scale: 1.5, opacity: 0 }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        delay: i * 0.4,
        ease: "easeOut",
      }}
    />
  ));

  return (
    <div
      className={`relative ${sizeClasses[size]} ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        className="relative w-full h-full"
        animate={{
          boxShadow: isHovered
            ? "0 0 20px 2px rgba(6, 182, 212, 0.5)"
            : "0 0 0px 0px rgba(6, 182, 212, 0)",
        }}
        transition={{ duration: 0.3 }}
      >
        <img
          src={src}
          alt={alt}
          className="w-full h-full rounded-full object-cover border-4 border-cyan-400/30"
        />
        <motion.div
          className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400/20 to-blue-400/20"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
        />
      </motion.div>
      <AnimatePresence>
        {isHovered && (
          <div className="absolute inset-0">
            {ripples}
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Avatar_24;