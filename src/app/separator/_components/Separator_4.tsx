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

const WaveSeparator: React.FC<SeparatorProps> = ({
  orientation = "horizontal",
  thickness = 4,
  color = "#3490dc", // Default color (Tailwind blue-600)
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
      initial={animated ? { scaleX: 0, scaleY: 0 } : undefined}
      animate={animated ? { scaleX: 1, scaleY: 1 } : undefined}
      transition={animated ? { duration: 0.5, ease: "easeOut" } : undefined}
      className={`relative ${isHorizontal ? "w-full" : "h-full"}`}
      style={separatorStyles}
    >
      {/* Wave pattern */}
      <div
        className="absolute inset-0 bg-transparent"
        style={{
          backgroundImage: `linear-gradient(to right, ${color} 50%, transparent 50%)`,
          backgroundSize: `50px 100%`, // Controls the wave pattern size
          animation: animated ? `waveAnimation 2s linear infinite` : undefined,
        }}
      />
      <style jsx>{`
        @keyframes waveAnimation {
          0% {
            background-position: 0 0;
          }
          100% {
            background-position: 100% 0;
          }
        }
      `}</style>
    </motion.div>
  );
};

export default WaveSeparator;
