"use client";

import React from "react";
import { motion } from "framer-motion";

type ExpandingLabelProps = {
  text: string;
  expandedText: string;
  className?: string;
};

export function Label_21({ text, expandedText, className = "" }: ExpandingLabelProps) {
  const [isExpanded, setIsExpanded] = React.useState(false);

  return (
    <motion.div
      className={`
        inline-flex items-center bg-white rounded-full
        shadow-sm cursor-pointer overflow-hidden ${className}
      `}
      animate={{ width: isExpanded ? "auto" : "fit-content" }}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <motion.div
        className="px-3 py-1 bg-indigo-500 text-white text-sm font-medium"
        animate={{ borderRadius: isExpanded ? "0.5rem 0 0 0.5rem" : "9999px" }}
      >
        {text}
      </motion.div>
      <motion.div
        className="px-3 py-1 text-sm text-gray-600"
        initial={{ width: 0, opacity: 0 }}
        animate={{
          width: isExpanded ? "auto" : 0,
          opacity: isExpanded ? 1 : 0,
        }}
        transition={{ duration: 0.2 }}
      >
        {expandedText}
      </motion.div>
    </motion.div>
  );
}

export function Component() {
  return (
    <div className="space-x-4">
      <Label_21 text="Click me" expandedText="More information here" />
      <Label_21 text="Details" expandedText="Additional context" />
      <Label_21 text="Info" expandedText="Important message" />
    </div>
  );
} 