"use client";

import React from "react";
import { motion } from "framer-motion";

type GradientLabelProps = {
  text: string;
  startColor: string;
  endColor: string;
  className?: string;
};

export function Label_2({ text, startColor, endColor, className = "" }: GradientLabelProps) {
  return (
    <motion.span
      className={`
        inline-block px-4 py-1 rounded-lg font-medium text-white
        bg-gradient-to-r shadow-sm ${className}
      `}
      style={{
        backgroundImage: `linear-gradient(to right, ${startColor}, ${endColor})`,
      }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {text}
    </motion.span>
  );
}

export function Component() {
  return (
    <div className="space-x-2">
      <Label_2 
        text="Premium" 
        startColor="#4F46E5" 
        endColor="#7C3AED"
      />
      <Label_2 
        text="New" 
        startColor="#059669" 
        endColor="#10B981"
      />
      <Label_2 
        text="Hot" 
        startColor="#DC2626" 
        endColor="#EF4444"
      />
    </div>
  );
} 