"use client";

import React from "react";
import { motion } from "framer-motion";

type NotificationProps = {
  title: string;
  message: string;
  icon?: React.ReactNode;
  severity?: "low" | "medium" | "high";
  time?: string;
  onClose?: () => void;
  className?: string;
};

const severityConfig = {
  low: {
    color: "text-blue-500 dark:text-blue-400",
    border: "border-blue-200 dark:border-blue-800",
    bg: "bg-blue-50 dark:bg-blue-900/20",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  medium: {
    color: "text-yellow-500 dark:text-yellow-400",
    border: "border-yellow-200 dark:border-yellow-800",
    bg: "bg-yellow-50 dark:bg-yellow-900/20",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
      </svg>
    ),
  },
  high: {
    color: "text-red-500 dark:text-red-400",
    border: "border-red-200 dark:border-red-800",
    bg: "bg-red-50 dark:bg-red-900/20",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
};

export function Notification_24({
  title,
  message,
  icon,
  severity = "low",
  time,
  onClose,
  className = "",
}: NotificationProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      className={`relative ${severityConfig[severity].bg} border ${
        severityConfig[severity].border
      } rounded-xl shadow-lg backdrop-blur-sm ${className}`}
    >
      <div className="p-4">
        <div className="flex items-start gap-3">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className={`flex-shrink-0 p-2 rounded-lg ${severityConfig[severity].color} bg-white/10`}
          >
            {icon || severityConfig[severity].icon}
          </motion.div>
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between">
              <motion.h3
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className={`text-sm font-semibold ${severityConfig[severity].color}`}
              >
                {title}
              </motion.h3>
              {time && (
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.6 }}
                  className="text-xs text-gray-500 dark:text-gray-400"
                >
                  {time}
                </motion.span>
              )}
            </div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mt-1 text-sm text-gray-600 dark:text-gray-300"
            >
              {message}
            </motion.p>
          </div>
          {onClose && (
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className={`flex-shrink-0 ${severityConfig[severity].color} opacity-60 hover:opacity-100`}
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
      <motion.div
        className={`absolute bottom-0 left-0 h-0.5 ${severityConfig[severity].color}`}
        initial={{ width: "0%" }}
        animate={{ width: "100%" }}
        transition={{ duration: 0.5 }}
      />
    </motion.div>
  );
}

export function Component() {
  return (
    <div className="space-y-4">
      <Notification_24
        severity="low"
        title="System Update"
        message="A new version is available. Update at your convenience."
        time="Just now"
        onClose={() => console.log("closed")}
      />
      <Notification_24
        severity="medium"
        title="Storage Warning"
        message="Your storage is at 80% capacity. Consider upgrading soon."
        time="5 min ago"
        onClose={() => console.log("closed")}
      />
      <Notification_24
        severity="high"
        title="Critical Alert"
        message="Your account security may be compromised. Action required."
        time="2 min ago"
        onClose={() => console.log("closed")}
      />
    </div>
  );
} 