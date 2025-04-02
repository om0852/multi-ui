"use client";

import React from "react";
import { motion } from "framer-motion";

type SplitLabelProps = {
  text: string;
  subtext: string;
  className?: string;
};

export function Label_20({ text, subtext, className = "" }: SplitLabelProps) {
  return (
    <motion.div
      className={`
        inline-flex items-center divide-x divide-gray-200
        bg-white rounded-lg shadow-sm ${className}
      `}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -2 }}
    >
      <span className="px-3 py-1 text-sm font-medium text-gray-700">
        {text}
      </span>
      <motion.span
        className="px-3 py-1 text-sm font-medium text-indigo-600"
        animate={{
          backgroundColor: ["rgba(79, 70, 229, 0)", "rgba(79, 70, 229, 0.1)", "rgba(79, 70, 229, 0)"],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        {subtext}
      </motion.span>
    </motion.div>
  );
}

export function Component() {
  return (
    <div className="space-x-4">
      <Label_20 text="Price" subtext="$99.99" />
      <Label_20 text="Status" subtext="In Stock" />
      <Label_20 text="Category" subtext="Electronics" />
    </div>
  );
} 