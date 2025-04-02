"use client";

import React from "react";
import { motion } from "framer-motion";

type GradientBorderLabelProps = {
  text: string;
  startColor?: string;
  endColor?: string;
  className?: string;
};

export function Label_26({ 
  text, 
  startColor = "#3b82f6", 
  endColor = "#8b5cf6", 
  className = "" 
}: GradientBorderLabelProps) {
  return (
    <motion.div
      className={`
        relative inline-flex items-center px-4 py-1.5
        rounded-md ${className}
      `}
      whileHover={{ scale: 1.05 }}
    >
      <div
        className="absolute inset-0 rounded-md"
        style={{
          background: `linear-gradient(to right, ${startColor}, ${endColor})`,
          padding: "2px",
          mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          maskComposite: "exclude",
        }}
      />
      <motion.div
        className="relative px-4 py-1.5 bg-white rounded-md"
        style={{
          background: "white",
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          backgroundImage: `linear-gradient(to right, ${startColor}, ${endColor})`,
        }}
      >
        <span className="text-sm font-medium text-transparent">
          {text}
        </span>
      </motion.div>
    </motion.div>
  );
}

export function Component() {
  return (
    <div className="space-x-4">
      <Label_26 text="Gradient" startColor="#3b82f6" endColor="#8b5cf6" />
      <Label_26 text="Border" startColor="#10b981" endColor="#059669" />
      <Label_26 text="Effect" startColor="#f59e0b" endColor="#dc2626" />
    </div>
  );
} 