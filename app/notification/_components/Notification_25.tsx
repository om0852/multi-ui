"use client";

import React from "react";
import { motion } from "framer-motion";

type NotificationProps = {
  title: string;
  message: string;
  image?: string;
  progress?: number;
  status?: "active" | "paused" | "completed";
  onClose?: () => void;
  className?: string;
};

const statusConfig = {
  active: {
    color: "text-green-500",
    bg: "bg-green-500",
    label: "Active",
  },
  paused: {
    color: "text-yellow-500",
    bg: "bg-yellow-500",
    label: "Paused",
  },
  completed: {
    color: "text-blue-500",
    bg: "bg-blue-500",
    label: "Completed",
  },
};

export function Notification_25({
  title,
  message,
  image,
  progress = 0,
  status = "active",
  onClose,
  className = "",
}: NotificationProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className={`bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 ${className}`}
    >
      <div className="p-4">
        <div className="flex gap-4">
          {image && (
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative flex-shrink-0 w-12 h-12 rounded-xl overflow-hidden"
            >
              <img
                src={image}
                alt=""
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-black/10 dark:ring-white/10 rounded-xl" />
            </motion.div>
          )}
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between">
              <motion.h3
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-base font-semibold text-gray-900 dark:text-white"
              >
                {title}
              </motion.h3>
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className={`text-xs font-medium ${statusConfig[status].color}`}
              >
                {statusConfig[status].label}
              </motion.span>
            </div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mt-1 text-sm text-gray-500 dark:text-gray-400"
            >
              {message}
            </motion.p>
            <div className="mt-3">
              <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
                <span>{progress}%</span>
                <span>100%</span>
              </div>
              <div className="mt-1 w-full bg-gray-200 rounded-full h-1.5 dark:bg-gray-700">
                <motion.div
                  className={`h-1.5 rounded-full ${statusConfig[status].bg}`}
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.5 }}
                />
              </div>
            </div>
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
      <Notification_25
        title="Uploading Project Files"
        message="Your files are being uploaded to the cloud storage."
        image="https://images.unsplash.com/photo-1526379095098-d400fd0bf935?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80"
        progress={75}
        status="active"
        onClose={() => console.log("closed")}
      />
      <Notification_25
        title="Video Processing"
        message="Your video is currently being processed."
        image="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80"
        progress={45}
        status="paused"
        onClose={() => console.log("closed")}
      />
    </div>
  );
} 