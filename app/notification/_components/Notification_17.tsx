"use client";

import React from "react";
import { motion } from "framer-motion";

type NotificationProps = {
  title: string;
  message: string;
  steps?: {
    label: string;
    status: "complete" | "current" | "upcoming";
  }[];
  onClose?: () => void;
  className?: string;
};

const stepStyles = {
  complete: "bg-green-500",
  current: "bg-blue-500",
  upcoming: "bg-gray-300 dark:bg-gray-600",
};

export function Notification_17({
  title,
  message,
  steps,
  onClose,
  className = "",
}: NotificationProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      className={`p-4 bg-white dark:bg-gray-800 rounded-xl shadow-lg ${className}`}
    >
      <div className="flex items-start">
        <div className="flex-1">
          <h3 className="text-sm font-medium text-gray-900 dark:text-white">
            {title}
          </h3>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            {message}
          </p>
          {steps && steps.length > 0 && (
            <div className="mt-4">
              <div className="flex items-center">
                {steps.map((step, index) => (
                  <React.Fragment key={index}>
                    <div className="relative flex items-center">
                      <motion.div
                        className={`w-3 h-3 rounded-full ${stepStyles[step.status]}`}
                        whileHover={{ scale: 1.2 }}
                      />
                      <span className="ml-2 text-xs text-gray-500 dark:text-gray-400">
                        {step.label}
                      </span>
                    </div>
                    {index < steps.length - 1 && (
                      <div className="flex-1 h-0.5 mx-2 bg-gray-200 dark:bg-gray-700" />
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          )}
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
      <Notification_17
        title="Order Status"
        message="Your order is being processed."
        steps={[
          { label: "Order Placed", status: "complete" },
          { label: "Processing", status: "current" },
          { label: "Shipping", status: "upcoming" },
          { label: "Delivered", status: "upcoming" },
        ]}
        onClose={() => console.log("closed")}
      />
    </div>
  );
} 