"use client";

import React from "react";
import { motion } from "framer-motion";

type NotificationProps = {
  title: string;
  message: string;
  icon?: React.ReactNode;
  color?: string;
  onClose?: () => void;
  className?: string;
};

export function Notification_3({
  title,
  message,
  icon,
  color = "#3B82F6",
  onClose,
  className = "",
}: NotificationProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      className={`p-4 rounded-lg ${className}`}
      style={{ backgroundColor: `${color}10` }}
    >
      <div className="flex items-start">
        {icon && (
          <motion.div
            className="flex-shrink-0 p-2 rounded-lg"
            style={{ backgroundColor: `${color}20`, color: color }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {icon}
          </motion.div>
        )}
        <div className="ml-3 flex-1">
          <h3 className="text-sm font-medium" style={{ color }}>
            {title}
          </h3>
          <p className="mt-1 text-sm text-gray-600">
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
            <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
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
      <Notification_3
        title="New Feature"
        message="Check out our latest updates and improvements."
        color="#3B82F6"
        icon={
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        }
        onClose={() => console.log("closed")}
      />
      <Notification_3
        title="Security Alert"
        message="Unusual login attempt detected from a new device."
        color="#EF4444"
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