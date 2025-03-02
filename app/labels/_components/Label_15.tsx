"use client";

import React from "react";
import { motion } from "framer-motion";

type AnimatedLabelProps = {
  text: string;
  type?: "success" | "error" | "loading";
  className?: string;
};

export function Label_15({ text, type = "loading", className = "" }: AnimatedLabelProps) {
  const variants = {
    success: {
      bg: "bg-green-50",
      text: "text-green-700",
      icon: (
        <motion.svg
          className="w-4 h-4 text-green-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </motion.svg>
      ),
    },
    error: {
      bg: "bg-red-50",
      text: "text-red-700",
      icon: (
        <motion.svg
          className="w-4 h-4 text-red-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          initial={{ rotate: -90 }}
          animate={{ rotate: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </motion.svg>
      ),
    },
    loading: {
      bg: "bg-blue-50",
      text: "text-blue-700",
      icon: (
        <motion.svg
          className="w-4 h-4 text-blue-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </motion.svg>
      ),
    },
  };

  return (
    <motion.div
      className={`
        inline-flex items-center gap-2 px-3 py-1 rounded-md
        ${variants[type].bg} ${variants[type].text} ${className}
      `}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.2 }}
    >
      {variants[type].icon}
      <span className="text-sm font-medium">{text}</span>
    </motion.div>
  );
}

export function Component() {
  return (
    <div className="space-x-4">
      <Label_15 text="Operation successful" type="success" />
      <Label_15 text="Processing request" type="loading" />
      <Label_15 text="Failed to connect" type="error" />
    </div>
  );
} 