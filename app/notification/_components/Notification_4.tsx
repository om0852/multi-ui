"use client";

import React from "react";
import { motion } from "framer-motion";

type NotificationProps = {
  title: string;
  message: string;
  actions?: {
    label: string;
    onClick: () => void;
  }[];
  onClose?: () => void;
  className?: string;
};

export function Notification_4({
  title,
  message,
  actions,
  onClose,
  className = "",
}: NotificationProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      className={`p-4 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-lg shadow-lg ${className}`}
    >
      <div className="flex items-start">
        <div className="flex-1">
          <h3 className="text-sm font-medium text-white">
            {title}
          </h3>
          <p className="mt-1 text-sm text-white/80">
            {message}
          </p>
          {actions && actions.length > 0 && (
            <div className="mt-3 flex space-x-4">
              {actions.map((action, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-sm text-white font-medium hover:text-white/80"
                  onClick={action.onClick}
                >
                  {action.label}
                </motion.button>
              ))}
            </div>
          )}
        </div>
        {onClose && (
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="flex-shrink-0 text-white/80 hover:text-white"
            onClick={onClose}
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
      <Notification_4
        title="Update Available"
        message="A new software version is available for download."
        actions={[
          { label: "Update", onClick: () => console.log("update") },
          { label: "Later", onClick: () => console.log("later") },
        ]}
        onClose={() => console.log("closed")}
      />
      <Notification_4
        title="Subscription Expiring"
        message="Your subscription will expire in 3 days."
        actions={[
          { label: "Renew Now", onClick: () => console.log("renew") },
          { label: "Learn More", onClick: () => console.log("learn more") },
        ]}
        onClose={() => console.log("closed")}
      />
    </div>
  );
} 