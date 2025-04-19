"use client";

import React from "react";
import { motion } from "framer-motion";

type StackedLabelProps = {
  text: string;
  subtext: string;
  icon?: React.ReactNode;
  className?: string;
};

export function Label_14({ text, subtext, icon, className = "" }: StackedLabelProps) {
  return (
    <motion.div
      className={`
        inline-flex items-center gap-3 px-4 py-2 bg-white
        rounded-xl shadow-sm border border-gray-100 ${className}
      `}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{
        y: -2,
        boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
      }}
    >
      {icon && (
        <div className="p-2 bg-indigo-50 rounded-lg">
          {icon}
        </div>
      )}
      <div className="flex flex-col">
        <span className="text-sm font-semibold text-gray-900">{text}</span>
        <span className="text-xs text-gray-500">{subtext}</span>
      </div>
    </motion.div>
  );
}

export function Component() {
  return (
    <div className="space-x-4">
      <Label_14 
        text="Downloads"
        subtext="1.2k this week"
        icon={
          <svg className="w-4 h-4 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
        }
      />
      <Label_14 
        text="Active Users"
        subtext="892 online now"
        icon={
          <svg className="w-4 h-4 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
        }
      />
    </div>
  );
} 