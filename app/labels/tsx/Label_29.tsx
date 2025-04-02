"use client";

import React from "react";
import { motion } from "framer-motion";

type SlidingContentLabelProps = {
  texts: string[];
  interval?: number;
  className?: string;
};

export function Label_29({ texts, interval = 2000, className = "" }: SlidingContentLabelProps) {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % texts.length);
    }, interval);

    return () => clearInterval(timer);
  }, [texts.length, interval]);

  return (
    <motion.div
      className={`
        relative inline-flex items-center px-4 py-1.5 bg-white
        rounded-md shadow-sm overflow-hidden ${className}
      `}
      whileHover={{ scale: 1.05 }}
    >
      <motion.div
        className="flex flex-col"
        animate={{ y: -currentIndex * 24 }}
        transition={{ duration: 0.3 }}
      >
        {texts.map((text, index) => (
          <span
            key={index}
            className="h-6 text-sm font-medium text-gray-700"
          >
            {text}
          </span>
        ))}
      </motion.div>
    </motion.div>
  );
}

export function Component() {
  return (
    <div className="space-x-4">
      <Label_29 
        texts={[
          "Breaking News",
          "Latest Updates",
          "Top Stories"
        ]}
      />
      <Label_29 
        texts={[
          "Special Offer",
          "50% Off",
          "Limited Time"
        ]}
      />
    </div>
  );
} 