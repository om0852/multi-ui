import React from "react";
import { motion } from "framer-motion";
import clsx from "clsx";
import {
  positionClasses,
  useToastTimer,
  animationVariants,
} from "./utils";

const NotificationToast = ({
  message,
  close,
  icon,
  position,
  theme,
  duration,
  animationType,
  autoDismiss,
  onHoverPause,
  actionButton,
  stack,
}) => {
  const { handleMouseEnter, handleMouseLeave } = useToastTimer(
    autoDismiss ?? true,
    duration ?? 5000,
    close,
    onHoverPause ?? true
  );

  // Default values
  const toastIcon = icon || "🔔";
  const toastTheme = theme || "info";
  const toastPosition = position || "top-center";
  const toastAnimation = animationType || "fade";

  // Define custom theme styles
  const customThemeClasses = {
    info: "bg-blue-100 text-blue-800",
    success: "bg-green-100 text-green-800",
    warning: "bg-yellow-100 text-yellow-900",
    error: "bg-red-100 text-red-800",
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={animationVariants[toastAnimation]}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={clsx(
        "flex items-center p-4 w-full max-w-[400px] rounded-lg shadow-md z-50",
        customThemeClasses[toastTheme] || customThemeClasses["info"],
        positionClasses[toastPosition],
        stack ? "static" : "fixed",
        "space-x-3"
      )}
    >
      {/* Notification Icon */}
      <motion.div
        className="text-3xl flex-shrink-0"
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 10 }}
      >
        {toastIcon}
      </motion.div>

      {/* Notification Message */}
      <motion.div
        className="flex-1 text-sm font-medium"
        initial={{ opacity: 0, x: -15 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4 }}
      >
        {message}
      </motion.div>

      {/* Action Button (Optional) */}
      {actionButton && (
        <motion.button
          onClick={actionButton.onClick}
          className="px-3 py-1.5 bg-blue-500 text-white text-xs font-semibold rounded-md hover:bg-blue-600"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.2 }}
        >
          {actionButton.label}
        </motion.button>
      )}

      {/* Close Button */}
      <motion.button
        onClick={close}
        className="grid place-items-center pl-2 text-gray-600 hover:text-gray-800 focus:outline-none"
        initial={{ opacity: 0, rotate: 90 }}
        animate={{ opacity: 1, rotate: 0 }}
        transition={{ duration: 0.3 }}
        aria-label="Close Notification"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </motion.button>
    </motion.div>
  );
};

export default React.memo(NotificationToast);
