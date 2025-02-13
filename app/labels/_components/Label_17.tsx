"use client";

import React from "react";
import { motion } from "framer-motion";

type DotLabelProps = {
  text: string;
  dotCount?: number;
  color?: string;
  className?: string;
};

export function Label_17({ text, dotCount = 3, color = "#3b82f6", className = "" }: DotLabelProps) {
  return (
    <motion.div
      className={`
        inline-flex items-center gap-2 px-3 py-1 bg-white
        rounded-full shadow-sm ${className}
      `}
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      whileHover={{ scale: 1.05 }}
    >
      <div className="flex gap-0.5">
        {[...Array(dotCount)].map((_, i) => (
          <motion.span
            key={i}
            className="w-1.5 h-1.5 rounded-full"
            style={{ backgroundColor: color }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              delay: i * 0.2,
            }}
          />
        ))}
      </div>
      <span className="text-sm font-medium" style={{ color }}>
        {text}
      </span>
    </motion.div>
  );
}

export function Component() {
  return (
    <div className="space-x-4">
      <Label_17 text="Loading" color="#3b82f6" />
      <Label_17 text="Processing" color="#10b981" dotCount={4} />
      <Label_17 text="Please wait" color="#f59e0b" dotCount={5} />
    </div>
  );
} 