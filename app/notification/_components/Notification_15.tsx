"use client";

import React from "react";
import { motion } from "framer-motion";

type NotificationProps = {
  title: string;
  message: string;
  image?: string;
  actions?: {
    label: string;
    onClick: () => void;
    variant?: "primary" | "secondary";
  }[];
  onClose?: () => void;
  className?: string;
};

export function Notification_15({
  title,
  message,
  image,
  actions,
  onClose,
  className = "",
}: NotificationProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      className={`p-6 bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl shadow-xl ${className}`}
    >
      <div className="flex items-start space-x-4">
        {image && (
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="relative flex-shrink-0 w-12 h-12"
          >
            <img
              src={image}
              alt=""
              className="w-full h-full rounded-xl object-cover"
            />
            <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-xl" />
          </motion.div>
        )}
        <div className="flex-1 min-w-0">
          <h3 className="text-lg font-semibold text-white">
            {title}
          </h3>
          <p className="mt-1 text-sm text-gray-300">
            {message}
          </p>
          {actions && actions.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-3">
              {actions.map((action, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                    action.variant === "secondary"
                      ? "bg-gray-700 text-gray-200 hover:bg-gray-600"
                      : "bg-white text-gray-900 hover:bg-gray-100"
                  }`}
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
            className="flex-shrink-0 text-gray-400 hover:text-gray-300"
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
      <Notification_15
        title="Premium Upgrade Available"
        message="Unlock advanced features and get more out of your experience."
        image="https://images.unsplash.com/photo-1560472355-536de3962603?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80"
        actions={[
          {
            label: "Upgrade Now",
            onClick: () => console.log("upgrade"),
          },
          {
            label: "Learn More",
            variant: "secondary",
            onClick: () => console.log("learn more"),
          },
        ]}
        onClose={() => console.log("closed")}
      />
    </div>
  );
} 