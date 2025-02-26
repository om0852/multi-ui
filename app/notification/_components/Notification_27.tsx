"use client";

import React from "react";
import { motion } from "framer-motion";

type NotificationProps = {
  title: string;
  message: string;
  avatar?: string;
  time?: string;
  actions?: {
    label: string;
    onClick: () => void;
    highlight?: boolean;
  }[];
  onClose?: () => void;
  className?: string;
};

export function Notification_27({
  title,
  message,
  avatar,
  time,
  actions,
  onClose,
  className = "",
}: NotificationProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      className={`bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800 rounded-2xl shadow-lg ${className}`}
    >
      <div className="p-4">
        <div className="flex items-start gap-4">
          {avatar && (
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
              className="relative flex-shrink-0"
            >
              <img
                src={avatar}
                alt=""
                className="w-10 h-10 rounded-full object-cover"
              />
              <span className="absolute -right-0.5 -bottom-0.5 block h-3 w-3 rounded-full bg-green-400 border-2 border-gray-900" />
            </motion.div>
          )}
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between">
              <motion.h3
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-sm font-semibold text-white"
              >
                {title}
              </motion.h3>
              {time && (
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="text-xs text-gray-400"
                >
                  {time}
                </motion.span>
              )}
            </div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mt-1 text-sm text-gray-300"
            >
              {message}
            </motion.p>
            {actions && actions.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mt-3 flex flex-wrap gap-2"
              >
                {actions.map((action, index) => (
                  <motion.button
                    key={index}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`px-3 py-1 text-xs font-medium rounded-lg ${
                      action.highlight
                        ? "bg-white text-gray-900 hover:bg-gray-100"
                        : "text-gray-300 hover:text-white hover:bg-white/10"
                    }`}
                    onClick={action.onClick}
                  >
                    {action.label}
                  </motion.button>
                ))}
              </motion.div>
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
      </div>
    </motion.div>
  );
}

export function Component() {
  return (
    <div className="space-y-4">
      <Notification_27
        title="Sarah Johnson"
        message="Hey! I just reviewed your latest design. It looks great! Let's discuss the feedback."
        avatar="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        time="Just now"
        actions={[
          { label: "Reply", onClick: () => console.log("reply"), highlight: true },
          { label: "View Design", onClick: () => console.log("view") },
        ]}
        onClose={() => console.log("closed")}
      />
    </div>
  );
} 