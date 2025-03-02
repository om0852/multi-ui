"use client";

import React from "react";
import { motion } from "framer-motion";

type BorderAnimatedLabelProps = {
  text: string;
  color?: string;
  className?: string;
};

export function Label_19({ text, color = "#3b82f6", className = "" }: BorderAnimatedLabelProps) {
  return (
    <motion.div
      className={`
        relative inline-flex items-center px-4 py-1.5
        rounded-md ${className}
      `}
      whileHover="hover"
    >
      <motion.span
        className="absolute inset-0 rounded-md"
        style={{
          border: `2px solid ${color}`,
        }}
        variants={{
          hover: {
            scale: 1.05,
            boxShadow: `0 0 8px ${color}`,
          },
        }}
      />
      <motion.div
        className="absolute inset-0 rounded-md overflow-hidden"
        style={{ border: `2px solid ${color}` }}
      >
        <motion.div
          className="absolute inset-0"
          style={{ backgroundColor: color }}
          variants={{
            hover: {
              x: ["100%", "-100%"],
            },
          }}
          transition={{
            duration: 1,
            ease: "easeInOut",
            repeat: Infinity,
          }}
        />
      </motion.div>
      <span className="relative text-sm font-medium" style={{ color }}>
        {text}
      </span>
    </motion.div>
  );
}

export function Component() {
  return (
    <div className="space-x-4">
      <Label_19 text="Hover me" color="#3b82f6" />
      <Label_19 text="Animated" color="#10b981" />
      <Label_19 text="Border" color="#f59e0b" />
    </div>
  );
} 