"use client";

import React from "react";
import { motion } from "framer-motion";

type NotificationProps = {
  title: string;
  message: string;
  avatar?: string;
  time?: string;
  onClose?: () => void;
  className?: string;
};

export function Notification_2({
  title,
  message,
  avatar,
  time,
  onClose,
  className = "",
}: NotificationProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 50 }}
      className={`p-4 bg-white rounded-lg shadow-lg border border-gray-100 ${className}`}
    >
      <div className="flex items-start space-x-4">
        {avatar && (
          <motion.img
            src={avatar}
            alt=""
            className="w-10 h-10 rounded-full"
            whileHover={{ scale: 1.1 }}
          />
        )}
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-gray-900">{title}</p>
          <p className="text-sm text-gray-500">{message}</p>
          {time && (
            <p className="mt-1 text-xs text-gray-400">{time}</p>
          )}
        </div>
        {onClose && (
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="flex-shrink-0 text-gray-400 hover:text-gray-500"
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
      <Notification_2
        title="John Doe"
        message="Commented on your post"
        avatar="https://randomuser.me/api/portraits/men/1.jpg"
        time="2 min ago"
        onClose={() => console.log("closed")}
      />
      <Notification_2
        title="Sarah Smith"
        message="Mentioned you in a comment"
        avatar="https://randomuser.me/api/portraits/women/2.jpg"
        time="5 min ago"
        onClose={() => console.log("closed")}
      />
    </div>
  );
} 