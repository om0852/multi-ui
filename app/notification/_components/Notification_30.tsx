"use client";

import React from "react";
import { motion } from "framer-motion";

type NotificationProps = {
  title: string;
  message: string;
  category?: string;
  emoji?: string;
  links?: {
    text: string;
    url: string;
  }[];
  onClose?: () => void;
  className?: string;
};

export function Notification_30({
  title,
  message,
  category,
  emoji,
  links,
  onClose,
  className = "",
}: NotificationProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      className={`bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 overflow-hidden ${className}`}
    >
      <div className="p-4">
        <div className="flex items-start gap-4">
          {emoji && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-indigo-50 dark:bg-indigo-900/30 rounded-xl text-xl"
            >
              {emoji}
            </motion.div>
          )}
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2">
              <motion.h3
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-base font-semibold text-gray-900 dark:text-white"
              >
                {title}
              </motion.h3>
              {category && (
                <motion.span
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-300"
                >
                  {category}
                </motion.span>
              )}
            </div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mt-1 text-sm text-gray-500 dark:text-gray-400"
            >
              {message}
            </motion.p>
            {links && links.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mt-3 flex flex-wrap gap-3"
              >
                {links.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    className="text-sm font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300"
                  >
                    {link.text} →
                  </a>
                ))}
              </motion.div>
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
      </div>
    </motion.div>
  );
}

export function Component() {
  return (
    <div className="space-y-4">
      <Notification_30
        title="New Feature Available"
        message="We've just launched our new AI-powered analytics dashboard."
        category="Product Update"
        emoji="✨"
        links={[
          { text: "Try it now", url: "#" },
          { text: "Learn more", url: "#" },
        ]}
        onClose={() => console.log("closed")}
      />
      <Notification_30
        title="Community Event"
        message="Join us for our monthly developer meetup this Friday!"
        category="Events"
        emoji="🎉"
        links={[
          { text: "RSVP", url: "#" },
          { text: "View schedule", url: "#" },
        ]}
        onClose={() => console.log("closed")}
      />
    </div>
  );
} 