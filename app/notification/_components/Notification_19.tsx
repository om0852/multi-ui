"use client";

import React from "react";
import { motion } from "framer-motion";

type NotificationProps = {
  title: string;
  message: string;
  type?: "glass" | "frosted" | "solid";
  icon?: React.ReactNode;
  onClose?: () => void;
  className?: string;
};

const typeStyles = {
  glass: "bg-white/10 backdrop-blur-lg border border-white/20",
  frosted: "bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg",
  solid: "bg-white dark:bg-gray-800",
};

export function Notification_19({
  title,
  message,
  type = "glass",
  icon,
  onClose,
  className = "",
}: NotificationProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className={`p-4 rounded-2xl shadow-lg ${typeStyles[type]} ${className}`}
    >
      <div className="flex items-start">
        {icon && (
          <motion.div
            className="flex-shrink-0 p-2 rounded-xl bg-white/10"
            whileHover={{ scale: 1.1, rotate: 10 }}
          >
            {icon}
          </motion.div>
        )}
        <div className={`${icon ? "ml-3" : ""} flex-1`}>
          <h3 className="text-sm font-medium text-white dark:text-white">
            {title}
          </h3>
          <p className="mt-1 text-sm text-white/80 dark:text-gray-300">
            {message}
          </p>
        </div>
        {onClose && (
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="flex-shrink-0 text-white/80 hover:text-white"
            onClick={onClose}
          >
            <span className="sr-only">Close</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </motion.button>
        )}
      </div>
    </motion.div>
  );
}

export function Component() {
  return (
    <div className="space-y-4 p-8 bg-gradient-to-br from-purple-600 to-indigo-600">
      <Notification_19
        type="glass"
        title="Glass Effect"
        message="A modern glass-style notification."
        icon={
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        }
        onClose={() => console.log("closed")}
      />
      <Notification_19
        type="frosted"
        title="Frosted Glass"
        message="A frosted glass effect notification."
        icon={
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        }
        onClose={() => console.log("closed")}
      />
    </div>
  );
} 