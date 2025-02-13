"use client";

import React from "react";
import { motion } from "framer-motion";

type NotificationProps = {
  title: string;
  message: string;
  type?: "info" | "success" | "warning" | "error";
  expandable?: boolean;
  onClose?: () => void;
  className?: string;
};

const typeStyles = {
  info: "bg-blue-50 border-blue-200 text-blue-800",
  success: "bg-green-50 border-green-200 text-green-800",
  warning: "bg-yellow-50 border-yellow-200 text-yellow-800",
  error: "bg-red-50 border-red-200 text-red-800",
};

export function Notification_14({
  title,
  message,
  type = "info",
  expandable = false,
  onClose,
  className = "",
}: NotificationProps) {
  const [isExpanded, setIsExpanded] = React.useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "auto" }}
      exit={{ opacity: 0, height: 0 }}
      className={`border rounded-xl overflow-hidden ${typeStyles[type]} ${className}`}
    >
      <div className="p-4">
        <div className="flex items-start">
          <div className="flex-1">
            <h3 className="text-sm font-medium">
              {title}
            </h3>
            <motion.div
              initial={false}
              animate={{ height: isExpanded ? "auto" : expandable ? "2.5rem" : "auto" }}
              className="overflow-hidden"
            >
              <p className="mt-1 text-sm opacity-90">
                {message}
              </p>
            </motion.div>
          </div>
          <div className="ml-4 flex-shrink-0 flex space-x-2">
            {expandable && (
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="opacity-75 hover:opacity-100"
                onClick={() => setIsExpanded(!isExpanded)}
              >
                <span className="sr-only">
                  {isExpanded ? "Show less" : "Show more"}
                </span>
                <svg
                  className={`w-5 h-5 transform transition-transform ${
                    isExpanded ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </motion.button>
            )}
            {onClose && (
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="opacity-75 hover:opacity-100"
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
      </div>
    </motion.div>
  );
}

export function Component() {
  return (
    <div className="space-y-4">
      <Notification_14
        type="info"
        title="Information Update"
        message="This is a short informational message."
        onClose={() => console.log("closed")}
      />
      <Notification_14
        type="warning"
        title="Long Content Warning"
        message="This is a very long message that demonstrates the expandable functionality. It contains a lot of text that would normally be truncated, but can be expanded to show the full content when needed. Click the expand button to see more."
        expandable
        onClose={() => console.log("closed")}
      />
    </div>
  );
} 