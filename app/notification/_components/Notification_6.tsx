"use client";

import React from "react";
import { motion } from "framer-motion";

type NotificationProps = {
  title: string;
  message: string;
  icon?: React.ReactNode;
  accentColor?: string;
  onClose?: () => void;
  className?: string;
};

export function Notification_6({
  title,
  message,
  icon,
  accentColor = "#8B5CF6",
  onClose,
  className = "",
}: NotificationProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      className={`relative p-4 bg-white dark:bg-gray-800 rounded-xl shadow-lg ${className}`}
    >
      <div
        className="absolute inset-x-0 top-0 h-1 rounded-t-xl"
        style={{ backgroundColor: accentColor }}
      />
      <div className="flex items-start pt-2">
        {icon && (
          <motion.div
            className="flex-shrink-0 p-2 rounded-lg"
            style={{ backgroundColor: `${accentColor}15`, color: accentColor }}
            whileHover={{ scale: 1.1, rotate: 10 }}
          >
            {icon}
          </motion.div>
        )}
        <div className="ml-3 flex-1">
          <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
            {title}
          </h3>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            {message}
          </p>
        </div>
        {onClose && (
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="flex-shrink-0 text-gray-400 hover:text-gray-500 dark:text-gray-500 dark:hover:text-gray-400"
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
      <Notification_6
        title="Profile Updated"
        message="Your profile changes have been saved successfully."
        accentColor="#8B5CF6"
        icon={
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
        }
        onClose={() => console.log("closed")}
      />
      <Notification_6
        title="New Message"
        message="You have received a new message from the team."
        accentColor="#EC4899"
        icon={
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        }
        onClose={() => console.log("closed")}
      />
    </div>
  );
} 