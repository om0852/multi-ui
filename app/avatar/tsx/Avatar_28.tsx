"use client";
import React from "react";
import { motion } from "framer-motion";

interface AvatarProps {
  src: string;
  alt: string;
  size?: "sm" | "md" | "lg";
  className?: string;
}

const Avatar_28: React.FC<AvatarProps> = ({
  src,
  alt,
  size = "md",
  className = "",
}) => {
  const sizeClasses = {
    sm: "h-16 w-16",
    md: "h-24 w-24",
    lg: "h-32 w-32",
  };

  return (
    <div className={`relative ${sizeClasses[size]} ${className} group`}>
      {/* Rotating neon rings */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute inset-[-4px] rounded-full border-2 border-transparent"
          style={{
            background: `linear-gradient(${i * 120}deg, #00ffff, #ff00ff)`,
            backgroundClip: "padding-box",
            WebkitBackgroundClip: "padding-box",
          }}
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
            delay: i * 0.2,
          }}
        />
      ))}
      
      {/* Avatar container */}
      <motion.div
        className="relative w-full h-full rounded-full overflow-hidden bg-black"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover"
        />
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
        />
      </motion.div>
    </div>
  );
};

export default Avatar_28; 