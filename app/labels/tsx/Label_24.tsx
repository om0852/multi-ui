"use client";

import React from "react";
import { motion } from "framer-motion";

type TypewriterLabelProps = {
  text: string;
  className?: string;
};

export function Label_24({ text, className = "" }: TypewriterLabelProps) {
  const characters = text.split("");

  return (
    <motion.div
      className={`
        inline-flex items-center px-3 py-1 bg-gray-900
        rounded-md ${className}
      `}
      whileHover={{ scale: 1.05 }}
    >
      {characters.map((char, index) => (
        <motion.span
          key={index}
          className="text-sm font-mono text-green-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.1,
            delay: index * 0.1,
          }}
        >
          {char}
        </motion.span>
      ))}
      <motion.span
        className="w-0.5 h-4 bg-green-400 ml-0.5"
        animate={{ opacity: [1, 0] }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          ease: "steps(2)",
        }}
      />
    </motion.div>
  );
}

export function Component() {
  return (
    <div className="space-x-4">
      <Label_24 text="Loading..." />
      <Label_24 text="System ready" />
      <Label_24 text="$ npm start" />
    </div>
  );
} 