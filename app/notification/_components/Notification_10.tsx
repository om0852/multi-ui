"use client";

import React from "react";
import { motion } from "framer-motion";

type NotificationProps = {
  title: string;
  message: string;
  type?: "toast" | "banner" | "alert";
  icon?: React.ReactNode;
  onClose?: () => void;
  className?: string;
};

const typeVariants = {
  toast: "max-w-sm bg-white dark:bg-gray-800 shadow-lg rounded-lg",
  banner: "w-full bg-gray-900 text-white",
  alert: "max-w-md bg-red-50 dark:bg-red-900/50 text-red-900 dark:text-red-100",
};

export function Notification_10({
  title,
  message,
  type = "toast",
  icon,
  onClose,
  className = "",
}: NotificationProps) {
  const variants = {
    toast: {
      initial: { opacity: 0, y: -20, scale: 0.95 },
      animate: { opacity: 1, y: 0, scale: 1 },
      exit: { opacity: 0, y: -20, scale: 0.95 },
    },
    banner: {
      initial: { opacity: 0, y: -100 },
      animate: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: -100 },
    },
    alert: {
      initial: { opacity: 0, scale: 0.95 },
      animate: { opacity: 1, scale: 1 },
      exit: { opacity: 0, scale: 0.95 },
    },
  };

  return (
    <motion.div
      variants={variants[type]}
      initial="initial"
      animate="animate"
      exit="exit"
      className={`${typeVariants[type]} ${className} ${
        type === "banner" ? "p-4" : "p-6"
      }`}
    >
      <div className="flex items-start">
        {icon && (
          <motion.div
            className={`flex-shrink-0 ${
              type === "alert" ? "text-red-500" : "text-gray-400"
            }`}
            whileHover={{ scale: 1.1, rotate: 10 }}
          >
            {icon}
          </motion.div>
        )}
        <div className={`${icon ? "ml-3" : ""} flex-1`}>
          <h3 className={`text-sm font-medium ${
            type === "banner" ? "text-white" : ""
          }`}>
            {title}
          </h3>
          <p className={`mt-1 text-sm ${
            type === "banner" ? "text-white/80" : "text-gray-500 dark:text-gray-400"
          }`}>
            {message}
          </p>
        </div>
        {onClose && (
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className={`flex-shrink-0 ${
              type === "banner" ? "text-white" : "text-gray-400"
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
      <Notification_10
        type="toast"
        title="Toast Notification"
        message="This is a simple toast notification."
        icon={
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        }
        onClose={() => console.log("closed")}
      />
      <Notification_10
        type="banner"
        title="Banner Notification"
        message="This is a full-width banner notification."
        onClose={() => console.log("closed")}
      />
      <Notification_10
        type="alert"
        title="Alert Notification"
        message="This is an important alert notification."
        icon={
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
        }
        onClose={() => console.log("closed")}
      />
    </div>
  );
} 