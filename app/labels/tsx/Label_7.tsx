"use client";

import React from "react";
import { motion } from "framer-motion";

type OutlineLabelProps = {
  text: string;
  icon?: React.ReactNode;
  size?: "sm" | "md" | "lg";
  className?: string;
};

export function Label_7({ text, icon, size = "md", className = "" }: OutlineLabelProps) {
  const sizes = {
    sm: "text-xs px-2 py-0.5",
    md: "text-sm px-3 py-1",
    lg: "text-base px-4 py-1.5",
  };

  return (
    <motion.span
      className={`
        inline-flex items-center gap-1.5 rounded-md border-2 border-indigo-500
        text-indigo-600 font-medium ${sizes[size]} ${className}
      `}
      whileHover={{
        scale: 1.05,
        borderColor: "#4338CA",
        color: "#4338CA",
      }}
      transition={{ duration: 0.2 }}
    >
      {icon}
      {text}
    </motion.span>
  );
}

export function Component() {
  return (
    <div className="space-x-4">
      <Label_7 
        text="Small"
        size="sm"
        icon={
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        }
      />
      <Label_7 
        text="Medium"
        size="md"
        icon={
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        }
      />
      <Label_7 
        text="Large"
        size="lg"
        icon={
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        }
      />
    </div>
  );
} 