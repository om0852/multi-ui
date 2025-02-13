"use client";

import React from "react";
import { motion } from "framer-motion";

type NotificationProps = {
  title: string;
  message: string;
  emoji?: string;
  color?: string;
  onClose?: () => void;
  className?: string;
};

export function Notification_18({
  title,
  message,
  emoji,
  color = "#6366F1",
  onClose,
  className = "",
}: NotificationProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      className={`p-4 bg-white dark:bg-gray-800 rounded-2xl shadow-lg ${className}`}
      style={{
        background: `linear-gradient(135deg, ${color}15, ${color}05)`,
        borderLeft: `4px solid ${color}`,
      }}
    >
      <div className="flex items-start">
        {emoji && (
          <motion.div
            className="flex-shrink-0 w-8 h-8 flex items-center justify-center text-xl"
            whileHover={{ scale: 1.2, rotate: [0, -10, 10, -10, 0] }}
            transition={{ duration: 0.5 }}
          >
            {emoji}
          </motion.div>
        )}
        <div className={`${emoji ? "ml-3" : ""} flex-1`}>
          <h3 className="text-sm font-medium" style={{ color }}>
            {title}
          </h3>
          <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
            {message}
          </p>
        </div>
        {onClose && (
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="flex-shrink-0"
            onClick={onClose}
            style={{ color }}
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
      <Notification_18
        title="Achievement Unlocked!"
        message="You've reached a new milestone."
        emoji="🏆"
        color="#6366F1"
        onClose={() => console.log("closed")}
      />
      <Notification_18
        title="Time for a Break"
        message="You've been working for 2 hours straight."
        emoji="⏰"
        color="#EC4899"
        onClose={() => console.log("closed")}
      />
    </div>
  );
} 