"use client";

import React from "react";
import { motion } from "framer-motion";

type NotificationProps = {
  title: string;
  message: string;
  status?: "active" | "pending" | "completed" | "failed";
  time?: string;
  onClose?: () => void;
  className?: string;
};

const statusStyles = {
  active: "bg-blue-400/10 border-blue-500/20 text-blue-700",
  pending: "bg-yellow-400/10 border-yellow-500/20 text-yellow-700",
  completed: "bg-green-400/10 border-green-500/20 text-green-700",
  failed: "bg-red-400/10 border-red-500/20 text-red-700",
};

const statusIcons = {
  active: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  ),
  pending: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  completed: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
  ),
  failed: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
  ),
};

export function Notification_9({
  title,
  message,
  status = "active",
  time,
  onClose,
  className = "",
}: NotificationProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 50 }}
      className={`p-4 border rounded-xl ${statusStyles[status]} ${className}`}
    >
      <div className="flex items-start">
        <motion.div
          className="flex-shrink-0 p-2 rounded-lg bg-current/10"
          whileHover={{ scale: 1.1, rotate: 10 }}
        >
          {statusIcons[status]}
        </motion.div>
        <div className="ml-3 flex-1">
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium">
              {title}
            </p>
            {time && (
              <p className="text-sm opacity-75">
                {time}
              </p>
            )}
          </div>
          <p className="mt-1 text-sm opacity-90">
            {message}
          </p>
        </div>
        {onClose && (
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="flex-shrink-0 opacity-75 hover:opacity-100"
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
      <Notification_9
        status="active"
        title="Processing Payment"
        message="Your payment is being processed."
        time="Just now"
        onClose={() => console.log("closed")}
      />
      <Notification_9
        status="pending"
        title="Awaiting Confirmation"
        message="Waiting for email verification."
        time="5 min ago"
        onClose={() => console.log("closed")}
      />
      <Notification_9
        status="completed"
        title="Task Completed"
        message="Your task has been completed successfully."
        time="2 hours ago"
        onClose={() => console.log("closed")}
      />
      <Notification_9
        status="failed"
        title="Error Occurred"
        message="Failed to process your request."
        time="1 min ago"
        onClose={() => console.log("closed")}
      />
    </div>
  );
} 