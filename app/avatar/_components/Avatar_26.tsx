"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface AvatarProps {
  src: string;
  alt: string;
  size?: "sm" | "md" | "lg";
  className?: string;
}

const Avatar_26: React.FC<AvatarProps> = ({
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

  const glitchLayers = Array.from({ length: 3 }).map((_, i) => (
    <motion.div
      key={i}
      className="absolute inset-0 overflow-hidden rounded-full"
      animate={{
        x: isHovered ? [0, -5, 5, -2, 0] : 0,
        y: isHovered ? [0, 3, -3, 1, 0] : 0,
        opacity: isHovered ? [1, 0.8, 0.9, 0.7, 1] : 1,
      }}
      transition={{
        duration: 0.2,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "linear",
        delay: i * 0.05,
      }}
      style={{
        clipPath: `inset(${i * 33}% 0 ${100 - (i + 1) * 33}% 0)`,
      }}
    >
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
      />
    </motion.div>
  ));

  return (
    <motion.div
      className={`relative ${sizeClasses[size]} ${className} group`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        className="absolute inset-0 bg-cyan-500/30 rounded-full blur-lg"
        animate={{
          scale: isHovered ? [1, 1.2, 1] : 1,
          opacity: isHovered ? [0.5, 0.8, 0.5] : 0.5,
        }}
        transition={{ duration: 2, repeat: Infinity }}
      />
      <div className="relative w-full h-full rounded-full overflow-hidden">
        {glitchLayers}
        <motion.div
          className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-purple-500/20"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
        />
      </div>
    </motion.div>
  );
};

export default Avatar_26; 