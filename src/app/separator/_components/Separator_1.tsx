"use client";
import React from "react";
import { motion } from "framer-motion";

interface SeparatorProps {
  orientation?: "horizontal" | "vertical";
  thickness?: number;
  color?: string;
  length?: string; // For custom width/height
  animated?: boolean;
}

const Separator: React.FC<SeparatorProps> = ({
  orientation = "horizontal",
  thickness = 2,
  color = "#e5e7eb", // Tailwind: bg-gray-200
  length = "100%", // Full width/height by default
  animated = false,
}) => {
  const isHorizontal = orientation === "horizontal";

  return (
    <motion.div
      initial={animated ? { scaleX: 0, scaleY: 0 } : undefined}
      animate={animated ? { scaleX: 1, scaleY: 1 } : undefined}
      transition={animated ? { duration: 0.5, ease: "easeOut" } : undefined}
      className={`bg-${color} ${isHorizontal ? "w-full" : "h-full"}`}
      style={{
        width: isHorizontal ? length : `${thickness}px`,
        height: isHorizontal ? `${thickness}px` : length,
        backgroundColor: color,
        borderRadius: "4px", // Rounded edges
      }}
    />
  );
};

export default Separator;
