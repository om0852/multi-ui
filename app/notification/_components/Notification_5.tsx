"use client";

import React from "react";
import { motion } from "framer-motion";

type NotificationProps = {
  title: string;
  message: string;
  progress?: number;
  onClose?: () => void;
  className?: string;
};

export function Notification_5({
  title,
  message,
  progress = 0,
  onClose,
  className = "",
}: NotificationProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      className={`relative p-4 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg shadow-lg overflow-hidden ${className}`}
    >
      <div className="relative z-10">
        <div className="flex items-start">
          <div className="flex-1">
            <h3 className="text-sm font-medium text-white">
              {title}
            </h3>
            <p className="mt-1 text-sm text-white/80">
              {message}
            </p>
            <div className="mt-2 w-full bg-white/20 rounded-full h-1.5">
              <motion.div
                className="bg-white rounded-full h-1.5"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>
            <p className="mt-1 text-xs text-white/80">
              {progress}% Complete
            </p>
          </div>
          {onClose && (
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="flex-shrink-0 text-white/80 hover:text-white"
              onClick={onClose}
            >
              <span className="sr-only">Close</span>
              <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
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
      <Notification_5
        title="Downloading Update"
        message="Please wait while we download the latest version."
        progress={75}
        onClose={() => console.log("closed")}
      />
      <Notification_5
        title="Uploading Files"
        message="Your files are being uploaded to the cloud."
        progress={45}
        onClose={() => console.log("closed")}
      />
    </div>
  );
} 