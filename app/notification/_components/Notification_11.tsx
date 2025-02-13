"use client";

import React from "react";
import { motion } from "framer-motion";

type NotificationProps = {
  title: string;
  message: string;
  type?: "primary" | "secondary" | "accent";
  icon?: React.ReactNode;
  onClose?: () => void;
  className?: string;
};

const typeStyles = {
  primary: "bg-gradient-to-r from-blue-500 to-indigo-600",
  secondary: "bg-gradient-to-r from-gray-800 to-gray-900",
  accent: "bg-gradient-to-r from-purple-500 to-pink-600",
};

export function Notification_11({
  title,
  message,
  type = "primary",
  icon,
  onClose,
  className = "",
}: NotificationProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      className={`${typeStyles[type]} p-4 rounded-2xl shadow-lg ${className}`}
    >
      <div className="flex items-start">
        {icon && (
          <motion.div
            className="flex-shrink-0 p-2 bg-white/10 rounded-lg text-white"
            whileHover={{ scale: 1.1, rotate: 10 }}
          >
            {icon}
          </motion.div>
        )}
        <div className={`${icon ? "ml-3" : ""} flex-1`}>
          <h3 className="text-sm font-medium text-white">
            {title}
          </h3>
          <p className="mt-1 text-sm text-white/80">
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
    <div className="space-y-4">
      <Notification_11
        type="primary"
        title="Welcome Back!"
        message="Great to see you again. Your last login was 2 days ago."
        icon={
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
          </svg>
        }
        onClose={() => console.log("closed")}
      />
      <Notification_11
        type="secondary"
        title="System Update"
        message="Your system has been updated to the latest version."
        icon={
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
        }
        onClose={() => console.log("closed")}
      />
    </div>
  );
} 