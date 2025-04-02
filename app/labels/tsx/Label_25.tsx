"use client";

import React from "react";
import { motion } from "framer-motion";

type CircularLabelProps = {
  text: string;
  value: number;
  maxValue: number;
  className?: string;
};

export function Label_25({ text, value, maxValue, className = "" }: CircularLabelProps) {
  const percentage = (value / maxValue) * 100;
  const radius = 20;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <motion.div
      className={`
        inline-flex items-center gap-3 px-4 py-2 bg-white
        rounded-full shadow-sm ${className}
      `}
      whileHover={{ scale: 1.05 }}
    >
      <div className="relative w-12 h-12">
        <svg className="w-full h-full -rotate-90">
          <circle
            cx="24"
            cy="24"
            r={radius}
            stroke="#e2e8f0"
            strokeWidth="4"
            fill="none"
          />
          <motion.circle
            cx="24"
            cy="24"
            r={radius}
            stroke="#3b82f6"
            strokeWidth="4"
            fill="none"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset }}
            transition={{ duration: 1, ease: "easeOut" }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-xs font-semibold text-gray-700">
            {Math.round(percentage)}%
          </span>
        </div>
      </div>
      <div className="flex flex-col">
        <span className="text-sm font-medium text-gray-900">{text}</span>
        <span className="text-xs text-gray-500">
          {value} of {maxValue}
        </span>
      </div>
    </motion.div>
  );
}

export function Component() {
  return (
    <div className="space-x-4">
      <Label_25 text="Progress" value={75} maxValue={100} />
      <Label_25 text="Storage" value={45} maxValue={100} />
      <Label_25 text="Tasks" value={8} maxValue={10} />
    </div>
  );
} 