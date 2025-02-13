"use client";

import React from "react";
import { motion } from "framer-motion";

type NotificationProps = {
  title: string;
  message: string;
  type?: "success" | "error" | "info";
  position?: "left" | "right";
  onClose?: () => void;
  className?: string;
};

const typeConfig = {
  success: {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
      </svg>
    ),
    color: "text-emerald-500 dark:text-emerald-400",
    bg: "bg-emerald-50 dark:bg-emerald-500/10",
  },
  error: {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
      </svg>
    ),
    color: "text-red-500 dark:text-red-400",
    bg: "bg-red-50 dark:bg-red-500/10",
  },
  info: {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    color: "text-blue-500 dark:text-blue-400",
    bg: "bg-blue-50 dark:bg-blue-500/10",
  },
};

export function Notification_21({
  title,
  message,
  type = "info",
  position = "left",
  onClose,
  className = "",
}: NotificationProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: position === "left" ? -50 : 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: position === "left" ? -50 : 50 }}
      className={`relative overflow-hidden ${typeConfig[type].bg} rounded-xl shadow-lg ${className}`}
    >
      <div className="p-4">
        <div className="flex items-start gap-3">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className={`flex-shrink-0 p-2 rounded-lg ${typeConfig[type].color} bg-white/25`}
          >
            {typeConfig[type].icon}
          </motion.div>
          <div className="flex-1 min-w-0">
            <motion.h3
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className={`text-sm font-semibold ${typeConfig[type].color}`}
            >
              {title}
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-1 text-sm text-gray-600 dark:text-gray-300"
            >
              {message}
            </motion.p>
          </div>
          {onClose && (
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className={`flex-shrink-0 ${typeConfig[type].color} opacity-75 hover:opacity-100`}
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
        className={`absolute bottom-0 left-0 h-0.5 ${typeConfig[type].color}`}
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
      <Notification_21
        type="success"
        title="Operation Successful"
        message="Your changes have been saved successfully."
        position="left"
        onClose={() => console.log("closed")}
      />
      <Notification_21
        type="error"
        title="Error Occurred"
        message="There was a problem processing your request."
        position="right"
        onClose={() => console.log("closed")}
      />
      <Notification_21
        type="info"
        title="Information"
        message="Your session will expire in 5 minutes."
        position="left"
        onClose={() => console.log("closed")}
      />
    </div>
  );
} 