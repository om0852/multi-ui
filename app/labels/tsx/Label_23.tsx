"use client";

import React from "react";
import { motion } from "framer-motion";

type RotatingLabelProps = {
  frontText: string;
  backText: string;
  className?: string;
};

export function Label_23({ frontText, backText, className = "" }: RotatingLabelProps) {
  const [isFlipped, setIsFlipped] = React.useState(false);

  return (
    <motion.div
      className={`relative inline-block cursor-pointer ${className}`}
      style={{ perspective: "1000px" }}
      onHoverStart={() => setIsFlipped(true)}
      onHoverEnd={() => setIsFlipped(false)}
    >
      <motion.div
        className="relative w-full h-full"
        animate={{ rotateX: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        style={{ transformStyle: "preserve-3d" }}
      >
        <div
          className="absolute inset-0 px-4 py-1.5 bg-indigo-500 text-white
            rounded-md text-sm font-medium flex items-center justify-center"
          style={{ backfaceVisibility: "hidden" }}
        >
          {frontText}
        </div>
        <div
          className="absolute inset-0 px-4 py-1.5 bg-indigo-600 text-white
            rounded-md text-sm font-medium flex items-center justify-center"
          style={{ backfaceVisibility: "hidden", transform: "rotateX(180deg)" }}
        >
          {backText}
        </div>
      </motion.div>
    </motion.div>
  );
}

export function Component() {
  return (
    <div className="space-x-4">
      <Label_23 frontText="Hover me" backText="Hello!" />
      <Label_23 frontText="Price" backText="$99.99" />
      <Label_23 frontText="Status" backText="Active" />
    </div>
  );
} 