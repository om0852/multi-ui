"use client";

import React from "react";
import { motion } from "framer-motion";

type IconLabelProps = {
  text: string;
  icon: React.ReactNode;
  variant?: "primary" | "secondary" | "accent";
  className?: string;
};

export function Label_3({ text, icon, variant = "primary", className = "" }: IconLabelProps) {
  const variants = {
    primary: "bg-indigo-50 text-indigo-700 border-indigo-200",
    secondary: "bg-gray-50 text-gray-700 border-gray-200",
    accent: "bg-purple-50 text-purple-700 border-purple-200",
  };

  return (
    <motion.span
      className={`
        inline-flex items-center gap-1.5 px-3 py-1 rounded-md
        border text-sm font-medium ${variants[variant]} ${className}
      `}
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02 }}
    >
      {icon}
      {text}
    </motion.span>
  );
}

export function Component() {
  return (
    <div className="space-x-2">
      <Label_3 
        text="Verified"
        icon={
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        }
        variant="primary"
      />
      <Label_3 
        text="Settings"
        icon={
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        }
        variant="secondary"
      />
      <Label_3 
        text="Pro"
        icon={
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
          </svg>
        }
        variant="accent"
      />
    </div>
  );
} 