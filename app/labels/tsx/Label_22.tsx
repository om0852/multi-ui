"use client";

import React from "react";
import { motion } from "framer-motion";

type ShimmerLabelProps = {
  text: string;
  color?: string;
  className?: string;
};

export function Label_22({ text, color = "#3b82f6", className = "" }: ShimmerLabelProps) {
  return (
    <motion.div
      className={`
        relative inline-flex items-center px-4 py-1.5
        rounded-full overflow-hidden ${className}
      `}
      style={{ backgroundColor: color }}
      whileHover={{ scale: 1.05 }}
    >
      <motion.div
        className="absolute inset-0 w-full h-full"
        style={{
          background: `linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)`,
        }}
        animate={{
          x: ["-100%", "200%"],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      <span className="relative text-sm font-medium text-white">
        {text}
      </span>
    </motion.div>
  );
}

export function Component() {
  return (
    <div className="space-x-4">
      <Label_22 text="Premium" color="#3b82f6" />
      <Label_22 text="Special" color="#10b981" />
      <Label_22 text="Limited" color="#f59e0b" />
    </div>
  );
} 