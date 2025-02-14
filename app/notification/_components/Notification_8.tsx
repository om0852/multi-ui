"use client";

import React from "react";
import { motion } from "framer-motion";

type NotificationProps = {
  title: string;
  message: string;
  image?: string;
  time?: string;
  actions?: {
    primary?: {
      label: string;
      onClick: () => void;
    };
    secondary?: {
      label: string;
      onClick: () => void;
    };
  };
  onClose?: () => void;
  className?: string;
};

export function Notification_8({
  title,
  message,
  image,
  time,
  actions,
  onClose,
  className = "",
}: NotificationProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className={`p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-xl ${className}`}
    >
      <div className="flex items-start space-x-4">
        {image && (
          <img
            src={image}
            alt=""
            className="flex-shrink-0 w-12 h-12 rounded-xl object-cover"
          />
        )}
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between">
            <h3 className="text-base font-semibold text-gray-900 dark:text-white">
              {title}
            </h3>
            {time && (
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {time}
              </p>
            )}
          </div>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            {message}
          </p>
          {actions && (
            <div className="mt-4 flex space-x-3">
              {actions.primary && (
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700"
                  onClick={actions.primary.onClick}
                >
                  {actions.primary.label}
                </motion.button>
              )}
              {actions.secondary && (
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 dark:text-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600"
                  onClick={actions.secondary.onClick}
                >
                  {actions.secondary.label}
                </motion.button>
              )}
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
      <Notification_8
        title="New Project Invitation"
        message="John Doe has invited you to collaborate on the 'Design System' project."
        image="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        time="2 min ago"
        actions={{
          primary: {
            label: "Accept",
            onClick: () => console.log("accepted"),
          },
          secondary: {
            label: "Decline",
            onClick: () => console.log("declined"),
          },
        }}
        onClose={() => console.log("closed")}
      />
    </div>
  );
} 