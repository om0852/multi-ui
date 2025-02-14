"use client";

import React from "react";
import { motion } from "framer-motion";

type NotificationProps = {
  title: string;
  message: string;
  type?: "primary" | "secondary" | "danger";
  actions?: {
    label: string;
    onClick: () => void;
    style?: "solid" | "outline";
  }[];
  onClose?: () => void;
  className?: string;
};

const typeStyles = {
  primary: {
    bg: "bg-gradient-to-br from-indigo-500 to-purple-600",
    button: {
      solid: "bg-white text-indigo-600 hover:bg-indigo-50",
      outline: "border border-white/30 text-white hover:bg-white/10",
    },
  },
  secondary: {
    bg: "bg-gradient-to-br from-gray-800 to-gray-900",
    button: {
      solid: "bg-white text-gray-900 hover:bg-gray-50",
      outline: "border border-white/30 text-white hover:bg-white/10",
    },
  },
  danger: {
    bg: "bg-gradient-to-br from-red-500 to-pink-600",
    button: {
      solid: "bg-white text-red-600 hover:bg-red-50",
      outline: "border border-white/30 text-white hover:bg-white/10",
    },
  },
};

export function Notification_23({
  title,
  message,
  type = "primary",
  actions,
  onClose,
  className = "",
}: NotificationProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className={`${typeStyles[type].bg} rounded-2xl shadow-lg overflow-hidden ${className}`}
    >
      <div className="relative p-6">
        <div className="absolute inset-0 bg-white/5 backdrop-blur-sm" />
        <div className="relative">
          <div className="flex items-start justify-between">
            <div>
              <motion.h3
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-lg font-semibold text-white"
              >
                {title}
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="mt-2 text-sm text-white/80"
              >
                {message}
              </motion.p>
            </div>
            {onClose && (
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="text-white/60 hover:text-white"
                onClick={onClose}
              >
                <span className="sr-only">Close</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </motion.button>
            )}
          </div>
          {actions && actions.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-6 flex flex-wrap gap-3"
            >
              {actions.map((action, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                    typeStyles[type].button[action.style || "solid"]
                  }`}
                  onClick={action.onClick}
                >
                  {action.label}
                </motion.button>
              ))}
            </motion.div>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export function Component() {
  return (
    <div className="space-y-4">
      <Notification_23
        type="primary"
        title="Subscription Update"
        message="Your subscription plan is expiring soon. Renew now to avoid service interruption."
        actions={[
          { label: "Renew Now", onClick: () => console.log("renew"), style: "solid" },
          { label: "Learn More", onClick: () => console.log("learn"), style: "outline" },
        ]}
        onClose={() => console.log("closed")}
      />
      <Notification_23
        type="danger"
        title="Security Alert"
        message="We detected unusual activity on your account. Please verify your recent actions."
        actions={[
          { label: "Review Activity", onClick: () => console.log("review"), style: "solid" },
          { label: "Ignore", onClick: () => console.log("ignore"), style: "outline" },
        ]}
        onClose={() => console.log("closed")}
      />
    </div>
  );
} 