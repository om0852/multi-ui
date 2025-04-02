"use client";

import React from "react";
import { motion } from "framer-motion";

type TagLabelProps = {
  text: string;
  onRemove?: () => void;
  className?: string;
};

export function Label_9({ text, onRemove, className = "" }: TagLabelProps) {
  return (
    <motion.span
      className={`
        inline-flex items-center gap-1 px-3 py-1 bg-gray-100
        rounded-full text-sm font-medium text-gray-700 ${className}
      `}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      exit={{ scale: 0 }}
      whileHover={{ backgroundColor: "#f3f4f6" }}
    >
      {text}
      {onRemove && (
        <motion.button
          onClick={onRemove}
          className="ml-1 p-0.5 rounded-full hover:bg-gray-200"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </motion.button>
      )}
    </motion.span>
  );
}

export function Component() {
  return (
    <div className="space-x-2">
      <Label_9 text="React" onRemove={() => {}} />
      <Label_9 text="TypeScript" onRemove={() => {}} />
      <Label_9 text="Tailwind" onRemove={() => {}} />
      <Label_9 text="Next.js" onRemove={() => {}} />
    </div>
  );
} 