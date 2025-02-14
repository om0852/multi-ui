"use client";

import React from "react";
import { motion } from "framer-motion";

type NotificationProps = {
  title: string;
  message: string;
  countdown?: number;
  onClose?: () => void;
  className?: string;
};

export function Notification_20({
  title,
  message,
  countdown = 5,
  onClose,
  className = "",
}: NotificationProps) {
  const [timeLeft, setTimeLeft] = React.useState(countdown);

  React.useEffect(() => {
    if (timeLeft <= 0) {
      onClose?.();
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, onClose]);

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 50 }}
      className={`relative p-4 bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden ${className}`}
    >
      <motion.div
        className="absolute bottom-0 left-0 h-1 bg-indigo-500"
        initial={{ width: "100%" }}
        animate={{ width: "0%" }}
        transition={{ duration: countdown, ease: "linear" }}
      />
      <div className="flex items-start">
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-medium text-gray-900 dark:text-white">
              {title}
            </h3>
            <span className="ml-2 text-sm text-gray-500 dark:text-gray-400">
              {timeLeft}s
            </span>
          </div>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            {message}
          </p>
        </div>
        {onClose && (
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="flex-shrink-0 ml-4 text-gray-400 hover:text-gray-500 dark:text-gray-500 dark:hover:text-gray-400"
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
  const [show, setShow] = React.useState(true);

  if (!show) return null;

  return (
    <div className="space-y-4">
      <Notification_20
        title="Auto-dismiss Notification"
        message="This notification will automatically dismiss in 5 seconds."
        countdown={5}
        onClose={() => setShow(false)}
      />
    </div>
  );
} 