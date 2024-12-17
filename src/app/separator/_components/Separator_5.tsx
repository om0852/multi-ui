"use client";
import React from "react";
import { motion } from "framer-motion";

interface SeparatorProps {
  orientation?: "horizontal" | "vertical";
  thickness?: number;
  color?: string;
  length?: string;
  animated?: boolean;
}

const DiagonalSeparator: React.FC<SeparatorProps> = ({
  orientation = "horizontal",
  thickness = 4,
  color = "#4ade80", // Default color (Tailwind green-400)
  length = "100%", // Full width/height by default
  animated = true,
}) => {
  const isHorizontal = orientation === "horizontal";
  const separatorStyles = {
    width: isHorizontal ? length : `${thickness}px`,
    height: isHorizontal ? `${thickness}px` : length,
  };

  return (
    <motion.div
      initial={animated ? { x: "-100%" } : undefined}
      animate={animated ? { x: "0%" } : undefined}
      transition={animated ? { duration: 1, ease: "easeOut" } : undefined}
      className={`relative ${isHorizontal ? "w-full" : "h-full"}`}
      style={separatorStyles}
    >
      {/* Diagonal Line */}
      <div
        className="absolute inset-0 bg-transparent"
        style={{
          backgroundImage: `linear-gradient(45deg, ${color} 50%, transparent 50%)`,
          backgroundSize: `20px 20px`, // Controls the line spacing
        }}
      />
    </motion.div>
  );
};

export default DiagonalSeparator;
