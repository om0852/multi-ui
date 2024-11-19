"use client";

import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";

interface ToastProps {
  message: string;
  close: () => void;
  type?: "success" | "error" | "warning" | "info";
  duration?: number; // Optional duration to auto-dismiss
}

function useTimeout(callback: () => void, delay: number) {
  const savedCallback = useRef(callback);

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    const timerId = setTimeout(() => savedCallback.current(), delay);
    return () => clearTimeout(timerId);
  }, [delay]);
}

const typeStyles = {
  success: "bg-green-500 text-white border-green-700",
  error: "bg-red-500 text-white border-red-700",
  warning: "bg-yellow-400 text-black border-yellow-600",
  info: "bg-blue-500 text-white border-blue-700",
};

export const Toast: React.FC<ToastProps> = ({
  message,
  close,
  type = "info",
  duration = 3000,
}) => {
  useTimeout(close, duration);

  return (
    <motion.div
      initial={{ x: 300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 300, opacity: 0 }}
      transition={{ type: "spring", stiffness: 50, damping: 10 }}
      className={`flex items-center p-4 shadow-lg rounded-md border-l-4 ${typeStyles[type]} w-80`}
    >
      <div className="flex-1">
        <p className="text-sm font-medium">{message}</p>
      </div>
      <button
        className="ml-4 text-lg font-bold focus:outline-none hover:text-opacity-70"
        onClick={close}
        aria-label="Close Toast"
      >
        ×
      </button>
    </motion.div>
  );
};
