"use client";

import React from "react";
import { motion } from "framer-motion";

type CountdownLabelProps = {
  text: string;
  count: number;
  total: number;
  className?: string;
};

export function Label_18({ text, count, total, className = "" }: CountdownLabelProps) {
  const percentage = (count / total) * 100;

  return (
    <motion.div
      className={`
        relative inline-flex items-center px-3 py-1
        rounded-full overflow-hidden ${className}
      `}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      whileHover={{ scale: 1.05 }}
    >
      <motion.div
        className="absolute inset-0 bg-indigo-100"
        initial={{ width: "100%" }}
        animate={{ width: `${percentage}%` }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      />
      <span className="relative text-sm font-medium text-indigo-700">
        {text}
      </span>
      <span className="relative ml-2 text-xs font-semibold text-indigo-800">
        {count}/{total}
      </span>
    </motion.div>
  );
}

export function Component() {
  return (
    <div className="space-x-4">
      <Label_18 text="Steps" count={3} total={5} />
      <Label_18 text="Progress" count={7} total={10} />
      <Label_18 text="Complete" count={10} total={10} />
    </div>
  );
} 