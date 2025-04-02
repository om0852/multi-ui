"use client";

import React from "react";
import { motion } from "framer-motion";

type TimerLabelProps = {
  text: string;
  time: string;
  type?: "countdown" | "elapsed";
  className?: string;
};

export function Label_12({ text, time, type = "countdown", className = "" }: TimerLabelProps) {
  const colors = {
    countdown: "bg-amber-50 text-amber-700 border-amber-200",
    elapsed: "bg-indigo-50 text-indigo-700 border-indigo-200",
  };

  return (
    <motion.div
      className={`
        inline-flex items-center gap-2 px-3 py-1 rounded-md
        border ${colors[type]} ${className}
      `}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.05 }}
    >
      <svg
        className="w-4 h-4"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      <span className="text-sm font-medium">{text}</span>
      <motion.span
        className="text-sm font-semibold"
        animate={{ opacity: [1, 0.5, 1] }}
        transition={{ duration: 1, repeat: Infinity }}
      >
        {time}
      </motion.span>
    </motion.div>
  );
}

export function Component() {
  return (
    <div className="space-x-4">
      <Label_12 text="Starts in" time="2:30" type="countdown" />
      <Label_12 text="Time elapsed" time="1:45" type="elapsed" />
    </div>
  );
} 