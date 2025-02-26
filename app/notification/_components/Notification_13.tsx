"use client";

import React from "react";
import { motion } from "framer-motion";

type NotificationProps = {
  title: string;
  message: string;
  progress?: number;
  status?: "uploading" | "processing" | "complete" | "error";
  onClose?: () => void;
  className?: string;
};

const statusColors = {
  uploading: "bg-blue-600",
  processing: "bg-yellow-500",
  complete: "bg-green-500",
  error: "bg-red-500",
};

const statusText = {
  uploading: "Uploading...",
  processing: "Processing...",
  complete: "Complete",
  error: "Error",
};

export function Notification_13({
  title,
  message,
  progress = 0,
  status = "uploading",
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
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-medium text-gray-900 dark:text-white">
              {title}
            </h3>
            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
              status === "error" ? "bg-red-100 text-red-800" : "bg-blue-100 text-blue-800"
            }`}>
              {statusText[status]}
            </span>
          </div>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            {message}
          </p>
          <div className="mt-3">
            <div className="w-full bg-gray-200 rounded-full h-1.5 dark:bg-gray-700">
              <motion.div
                className={`h-1.5 rounded-full ${statusColors[status]}`}
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>
            <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">
              {progress}% complete
            </p>
          </div>
        </div>
        {onClose && (
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="ml-4 flex-shrink-0 text-gray-400 hover:text-gray-500 dark:text-gray-500 dark:hover:text-gray-400"
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
      <Notification_13
        title="Uploading Files"
        message="Uploading your project files to the cloud."
        progress={75}
        status="uploading"
        onClose={() => console.log("closed")}
      />
      <Notification_13
        title="Processing Video"
        message="Your video is being processed."
        progress={45}
        status="processing"
        onClose={() => console.log("closed")}
      />
    </div>
  );
} 