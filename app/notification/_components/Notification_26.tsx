"use client";

import React from "react";
import { motion } from "framer-motion";

type NotificationProps = {
  title: string;
  message: string;
  type?: "default" | "success" | "error";
  showProgress?: boolean;
  duration?: number;
  onClose?: () => void;
  className?: string;
};

const typeConfig = {
  default: {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    color: "text-blue-500",
    bg: "bg-blue-50 dark:bg-blue-900/20",
  },
  success: {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
      </svg>
    ),
    color: "text-green-500",
    bg: "bg-green-50 dark:bg-green-900/20",
  },
  error: {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
      </svg>
    ),
    color: "text-red-500",
    bg: "bg-red-50 dark:bg-red-900/20",
  },
};

export function Notification_26({
  title,
  message,
  type = "default",
  showProgress = true,
  duration = 5,
  onClose,
  className = "",
}: NotificationProps) {
  const [timeLeft, setTimeLeft] = React.useState(duration);

  React.useEffect(() => {
    if (!showProgress) return;

    if (timeLeft <= 0) {
      onClose?.();
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 0.1);
    }, 100);

    return () => clearInterval(timer);
  }, [timeLeft, onClose, showProgress]);

  return (
    <motion.div
      initial={{ opacity: 0, y: -20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -20, scale: 0.95 }}
      className={`relative overflow-hidden ${typeConfig[type].bg} rounded-xl shadow-lg ${className}`}
    >
      <div className="p-4">
        <div className="flex items-start gap-3">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className={`flex-shrink-0 p-2 rounded-lg ${typeConfig[type].color}`}
          >
            {typeConfig[type].icon}
          </motion.div>
          <div className="flex-1 min-w-0">
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className={`text-sm font-semibold ${typeConfig[type].color}`}
            >
              {title}
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mt-1 text-sm text-gray-600 dark:text-gray-300"
            >
              {message}
            </motion.p>
          </div>
          {onClose && (
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className={`flex-shrink-0 ${typeConfig[type].color}`}
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
      {showProgress && (
        <motion.div
          className={`absolute bottom-0 left-0 h-1 ${typeConfig[type].color}`}
          initial={{ width: "100%" }}
          animate={{ width: `${(timeLeft / duration) * 100}%` }}
          transition={{ duration: 0.1, ease: "linear" }}
        />
      )}
    </motion.div>
  );
}

export function Component() {
  const [showDefault, setShowDefault] = React.useState(true);
  const [showSuccess, setShowSuccess] = React.useState(true);
  const [showError, setShowError] = React.useState(true);

  if (!showDefault && !showSuccess && !showError) return null;

  return (
    <div className="space-y-4">
      {showDefault && (
        <Notification_26
          type="default"
          title="Information"
          message="This notification will disappear in 5 seconds."
          onClose={() => setShowDefault(false)}
        />
      )}
      {showSuccess && (
        <Notification_26
          type="success"
          title="Success"
          message="Operation completed successfully."
          onClose={() => setShowSuccess(false)}
        />
      )}
      {showError && (
        <Notification_26
          type="error"
          title="Error"
          message="Something went wrong. Please try again."
          onClose={() => setShowError(false)}
        />
      )}
    </div>
  );
} 