"use client";

import React from "react";
import { motion } from "framer-motion";

type CornerLabelProps = {
  text: string;
  position?: "top-left" | "top-right" | "bottom-left" | "bottom-right";
  color?: string;
  className?: string;
};

export function Label_16({ 
  text, 
  position = "top-right", 
  color = "#3b82f6", 
  className = "" 
}: CornerLabelProps) {
  const positions = {
    "top-left": "-rotate-45 -translate-x-1/3 -translate-y-1/2 origin-bottom-right",
    "top-right": "rotate-45 translate-x-1/3 -translate-y-1/2 origin-bottom-left",
    "bottom-left": "rotate-45 -translate-x-1/3 translate-y-1/2 origin-top-right",
    "bottom-right": "-rotate-45 translate-x-1/3 translate-y-1/2 origin-top-left",
  };

  return (
    <motion.div
      className={`
        absolute w-32 text-center py-1 text-white text-sm font-medium
        ${positions[position]} ${className}
      `}
      style={{ backgroundColor: color }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      {text}
    </motion.div>
  );
}

export function Component() {
  return (
    <div className="relative w-64 h-64 border-2 border-gray-200 rounded-lg">
      <Label_16 text="New" position="top-right" color="#3b82f6" />
      <Label_16 text="Sale" position="top-left" color="#ef4444" />
      <Label_16 text="-20%" position="bottom-right" color="#10b981" />
      <Label_16 text="Hot" position="bottom-left" color="#f59e0b" />
    </div>
  );
} 