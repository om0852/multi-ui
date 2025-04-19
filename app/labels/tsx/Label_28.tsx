"use client";

import React from "react";
import { motion } from "framer-motion";

type WavyTextLabelProps = {
  text: string;
  color?: string;
  className?: string;
};

export function Label_28({ text, color = "#3b82f6", className = "" }: WavyTextLabelProps) {
  return (
    <motion.div
      className={`
        inline-flex items-center px-4 py-1.5 bg-white
        rounded-md shadow-sm ${className}
      `}
      whileHover="hover"
    >
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          className="text-sm font-medium"
          style={{ color }}
          variants={{
            hover: {
              y: [0, -4, 0],
              transition: {
                duration: 0.3,
                delay: i * 0.05,
                repeat: Infinity,
              },
            },
          }}
        >
          {char}
        </motion.span>
      ))}
    </motion.div>
  );
}

export function Component() {
  return (
    <div className="space-x-4">
      <Label_28 text="Hover me!" color="#3b82f6" />
      <Label_28 text="Wavy text" color="#10b981" />
      <Label_28 text="Animation" color="#f59e0b" />
    </div>
  );
} 