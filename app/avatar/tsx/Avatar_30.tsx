"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

interface AvatarProps {
  src: string;
  alt: string;
  size?: "sm" | "md" | "lg";
  className?: string;
}

const Avatar_30: React.FC<AvatarProps> = ({
  src,
  alt,
  size = "md",
  className = "",
}) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const sizeClasses = {
    sm: "h-16 w-16",
    md: "h-24 w-24",
    lg: "h-32 w-32",
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePosition({ x, y });
  };

  return (
    <motion.div
      className={`relative ${sizeClasses[size]} ${className} perspective-1000`}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setMousePosition({ x: 0, y: 0 })}
      animate={{
        rotateX: mousePosition.y * 20,
        rotateY: mousePosition.x * -20,
      }}
      style={{
        background: "linear-gradient(135deg, #00ffff 0%, #ff00ff 100%)",
        padding: "2px",
        borderRadius: "9999px",
      }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <motion.div
        className="relative w-full h-full rounded-full overflow-hidden bg-black"
        style={{
          background: `radial-gradient(circle at ${50 + mousePosition.x * 30}% ${
            50 + mousePosition.y * 30
          }%, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 50%)`,
        }}
      >
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover"
        />
        <motion.div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(${
              45 + mousePosition.x * 20
            }deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 100%)`,
          }}
        />
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background:
              "linear-gradient(to right, rgba(255,0,255,0.2), rgba(0,255,255,0.2))",
          }}
        />
      </motion.div>
    </motion.div>
  );
};

export default Avatar_30; 