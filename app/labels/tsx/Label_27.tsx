"use client";

import React from "react";
import { motion } from "framer-motion";

type FloatingBadgeLabelProps = {
  text: string;
  badgeText: string;
  className?: string;
};

export function Label_27({ text, badgeText, className = "" }: FloatingBadgeLabelProps) {
  return (
    <motion.div
      className={`relative inline-flex ${className}`}
      whileHover={{ scale: 1.05 }}
    >
      <span className="px-4 py-1.5 bg-white rounded-md shadow-sm text-sm font-medium text-gray-700">
        {text}
      </span>
      <motion.div
        className="absolute -top-2 -right-2 px-2 py-0.5 bg-red-500 rounded-full"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 25,
        }}
      >
        <span className="text-xs font-bold text-white">
          {badgeText}
        </span>
      </motion.div>
    </motion.div>
  );
}

export function Component() {
  return (
    <div className="space-x-4">
      <Label_27 text="Messages" badgeText="3" />
      <Label_27 text="Notifications" badgeText="99+" />
      <Label_27 text="Updates" badgeText="New" />
    </div>
  );
} 