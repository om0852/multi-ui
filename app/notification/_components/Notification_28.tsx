"use client";

import React from "react";
import { motion } from "framer-motion";

type NotificationProps = {
  title: string;
  message: string;
  type?: "info" | "success" | "warning" | "error";
  position?: "top" | "bottom";
  showIcon?: boolean;
  onClose?: () => void;
  className?: string;
};

const typeConfig = {
  info: {
    bg: "bg-gradient-to-r from-blue-500 to-blue-600",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  success: {
    bg: "bg-gradient-to-r from-green-500 to-green-600",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
      </svg>
    ),
  },
  warning: {
    bg: "bg-gradient-to-r from-yellow-500 to-yellow-600",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
      </svg>
    ),
  },
  error: {
    bg: "bg-gradient-to-r from-red-500 to-red-600",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
      </svg>
    ),
  },
};

export function Notification_28({
  title,
  message,
  type = "info",
  position = "top",
  showIcon = true,
  onClose,
  className = "",
}: NotificationProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: position === "top" ? -20 : 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: position === "top" ? -20 : 20 }}
      className={`${typeConfig[type].bg} rounded-lg shadow-lg overflow-hidden ${className}`}
    >
      <div className="px-4 py-3">
        <div className="flex items-start gap-3">
          {showIcon && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="flex-shrink-0 p-1 bg-white/20 rounded-lg text-white"
            >
              {typeConfig[type].icon}
            </motion.div>
          )}
          <div className="flex-1 min-w-0 pt-0.5">
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
      </div>
      <motion.div
        className="h-1 bg-white/20"
        initial={{ width: "100%" }}
        animate={{ width: "0%" }}
        transition={{ duration: 5 }}
        onAnimationComplete={onClose}
      />
    </motion.div>
  );
}

export function Component() {
  return (
    <div className="space-y-4">
      <Notification_28
        type="info"
        title="Information"
        message="This is an informational notification."
        position="top"
        onClose={() => console.log("closed")}
      />
      <Notification_28
        type="success"
        title="Success"
        message="Your changes have been saved successfully."
        position="bottom"
        onClose={() => console.log("closed")}
      />
      <Notification_28
        type="warning"
        title="Warning"
        message="Please save your work before leaving."
        position="top"
        onClose={() => console.log("closed")}
      />
      <Notification_28
        type="error"
        title="Error"
        message="An error occurred while processing your request."
        position="bottom"
        onClose={() => console.log("closed")}
      />
    </div>
  );
} 