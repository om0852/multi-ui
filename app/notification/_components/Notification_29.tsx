"use client";

import React from "react";
import { motion } from "framer-motion";

type NotificationProps = {
  title: string;
  message: string;
  type?: "default" | "modern" | "minimal";
  showBadge?: boolean;
  badgeText?: string;
  onClose?: () => void;
  className?: string;
};

const typeStyles = {
  default: {
    container: "bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700",
    badge: "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300",
    title: "text-gray-900 dark:text-white",
    message: "text-gray-600 dark:text-gray-300",
  },
  modern: {
    container: "bg-gradient-to-br from-purple-500 to-indigo-600 backdrop-blur-lg",
    badge: "bg-white/20 text-white",
    title: "text-white",
    message: "text-white/80",
  },
  minimal: {
    container: "bg-gray-50 dark:bg-gray-900/50 backdrop-blur-sm",
    badge: "bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200",
    title: "text-gray-900 dark:text-white",
    message: "text-gray-600 dark:text-gray-300",
  },
};

export function Notification_29({
  title,
  message,
  type = "default",
  showBadge = false,
  badgeText = "New",
  onClose,
  className = "",
}: NotificationProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      className={`${typeStyles[type].container} rounded-xl shadow-lg overflow-hidden ${className}`}
    >
      <div className="p-4">
        <div className="flex items-start gap-4">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2">
              <motion.h3
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`text-sm font-semibold ${typeStyles[type].title}`}
              >
                {title}
              </motion.h3>
              {showBadge && (
                <motion.span
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${typeStyles[type].badge}`}
                >
                  {badgeText}
                </motion.span>
              )}
            </div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className={`mt-1 text-sm ${typeStyles[type].message}`}
            >
              {message}
            </motion.p>
          </div>
          {onClose && (
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className={`flex-shrink-0 ${typeStyles[type].message} hover:opacity-75`}
              onClick={onClose}
            >
              <span className="sr-only">Close</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </motion.button>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export function Component() {
  return (
    <div className="space-y-4">
      <Notification_29
        type="default"
        title="Default Style"
        message="This is a default styled notification with a badge."
        showBadge
        onClose={() => console.log("closed")}
      />
      <Notification_29
        type="modern"
        title="Modern Style"
        message="A modern styled notification with gradient background."
        showBadge
        badgeText="Featured"
        onClose={() => console.log("closed")}
      />
      <Notification_29
        type="minimal"
        title="Minimal Style"
        message="A minimal styled notification with subtle design."
        onClose={() => console.log("closed")}
      />
    </div>
  );
} 