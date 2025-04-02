import React from "react";
import { motion } from "framer-motion";
import clsx from "clsx";
import {
  positionClasses,
  animationVariants,
  useToastTimer,
} from "./utils";
import { ToastProps } from "./toast-context";

const Toast_12: React.FC<ToastProps> = ({
  message,
  close,
  icon = "ℹ️", // Default icon for info
  position = "top-right",
  theme = "info", // Default to 'info' theme
  duration = 4000,
  animationType = "fade",
  autoDismiss = true,
  onHoverPause = true,
  actionButton,
  stack,
}) => {
  const { handleMouseEnter, handleMouseLeave } = useToastTimer(
    autoDismiss,
    duration,
    close,
    onHoverPause
  );
  
  // Define size and color for different toast types
const themeStyles: Record<
    string,
    { background: string; textColor: string; size: string }
  > = {
    success: {
      background: "bg-green-100",
      textColor: "text-green-800",
      size: "max-w-[400px] p-4",
    },
    error: {
      background: "bg-red-100",
      textColor: "text-red-800",
      size: "max-w-[450px] p-5",
    },
    warning: {
      background: "bg-yellow-100",
      textColor: "text-yellow-900",
      size: "max-w-[400px] p-4",
    },
    info: {
      background: "bg-blue-100",
      textColor: "text-blue-800",
      size: "max-w-[350px] p-3",
    },
  };
  
  // Apply theme styles dynamically
  const { background, textColor, size } = themeStyles[theme] || themeStyles["info"];

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={animationVariants[animationType]}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={clsx(
        "flex items-center rounded-lg shadow-lg z-50 space-x-3",
        background,
        textColor,
        size,
        positionClasses[position],
        stack ? "static" : "fixed"
      )}
    >
      {/* Icon with subtle bounce */}
      <motion.div
        className={clsx("text-3xl flex-shrink-0", textColor)}
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 10 }}
      >
        {icon}
      </motion.div>

      {/* Message */}
      <motion.div
        className="flex-1 text-sm font-medium"
        initial={{ opacity: 0, x: -15 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4 }}
      >
        {message}
      </motion.div>

      {/* Action Button (optional) */}
      {actionButton && (
        <motion.button
          onClick={actionButton.onClick}
          className="px-3 py-1.5 text-white text-xs font-semibold rounded-md hover:opacity-90"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.2 }}
          style={{
            backgroundColor: themeStyles[theme].background === "error" ? "#FF6B6B" : "#4A90E2", // Red for error, blue for others
          }}
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

export default React.memo(Toast_12);
