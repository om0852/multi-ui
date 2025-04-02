"use client";

import React from "react";
import { motion } from "framer-motion";

type RibbonLabelProps = {
  text: string;
  color?: "blue" | "green" | "red" | "purple";
  className?: string;
};

export function Label_6({ text, color = "blue", className = "" }: RibbonLabelProps) {
  const colors = {
    blue: "bg-blue-500 after:border-blue-600",
    green: "bg-green-500 after:border-green-600",
    red: "bg-red-500 after:border-red-600",
    purple: "bg-purple-500 after:border-purple-600",
  };

  return (
    <motion.div
      className={`
        relative inline-flex items-center px-4 py-1 text-white
        ${colors[color]} ${className}
        after:content-[''] after:absolute after:top-0 after:right-0
        after:border-8 after:border-t-transparent after:border-r-transparent
        after:translate-x-full
      `}
      initial={{ x: -20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      whileHover={{ y: -2 }}
    >
      {text}
    </motion.div>
  );
}

export function Component() {
  return (
    <div className="space-x-8">
      <Label_6 text="Featured" color="blue" />
      <Label_6 text="New" color="green" />
      <Label_6 text="Sale" color="red" />
      <Label_6 text="Limited" color="purple" />
    </div>
  );
} 