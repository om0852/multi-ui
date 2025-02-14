"use client";

import React from "react";
import { motion } from "framer-motion";

type NotificationProps = {
  title: string;
  message: string;
  type?: "default" | "modern" | "minimal";
  onClose?: () => void;
  className?: string;
};

const variants = {
  default: "bg-white dark:bg-gray-800 shadow-lg",
  modern: "bg-white/10 backdrop-blur-lg border border-white/20",
  minimal: "bg-gray-900/90 backdrop-blur",
};

export function Notification_7({
  title,
  message,
  type = "default",
  onClose,
  className = "",
}: NotificationProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -30 }}
      className={`p-4 rounded-2xl ${variants[type]} ${className}`}
    >
      <div className="flex items-start">
        <div className="flex-1">
          <h3 className={`text-sm font-medium ${
            type === "minimal" ? "text-white" : "text-gray-900 dark:text-white"
          }`}>
            {title}
          </h3>
          <p className={`mt-1 text-sm ${
            type === "minimal" ? "text-white/80" : "text-gray-500 dark:text-gray-400"
          }`}>
            {message}
          </p>
        </div>
        {onClose && (
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className={`flex-shrink-0 ${
              type === "minimal" ? "text-white/80" : "text-gray-400 dark:text-gray-500"
            }`}
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
    <div className="space-y-4">
      <Notification_7
        type="default"
        title="Default Style"
        message="This is a default styled notification."
        onClose={() => console.log("closed")}
      />
      <Notification_7
        type="modern"
        title="Modern Style"
        message="This is a modern styled notification with blur effect."
        onClose={() => console.log("closed")}
      />
      <Notification_7
        type="minimal"
        title="Minimal Style"
        message="This is a minimal dark styled notification."
        onClose={() => console.log("closed")}
      />
    </div>
  );
} 