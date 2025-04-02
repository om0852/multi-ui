import React from "react";
import { motion } from "framer-motion";
import clsx from "clsx";
import {
  animationVariants,
  themeClasses,
  positionClasses,
  useToastTimer,
  textColor,
  closeIconColors,
} from "./utils";
import { ToastProps } from "./toast-context";

const Toast_6: React.FC<ToastProps> = ({
  message,
  close,
  icon = "💬", // Default icon for this design
  position = "top-right",
  theme = "light", // Default theme
  duration = 4000,
  animationType = "fade", // Fade animation for a soft look
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

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={animationVariants[animationType]}
      transition={{ type: "spring", stiffness: 120, damping: 20 }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={clsx(
        "relative flex flex-col items-center justify-center max-w-[300px] w-full bg-white rounded-lg shadow-xl border-2 z-50",
        themeClasses[theme], // Apply background theme styles
        positionClasses[position],
        stack ? "static" : "fixed",
        "p-6 space-y-4"
      )}
      style={{ height: "300px" }} // Square shape
    >
      {/* Icon Section */}
      <div className="text-4xl">{icon}</div>

      {/* Message Section */}
      <div
        className={clsx("text-center text-base font-medium", textColor[theme])}
      >
        {message}
      </div>

      {/* Action Button (if provided) */}
      {actionButton && (
        <div className="flex justify-center">
          <button
            onClick={actionButton.onClick}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            {actionButton.label}
          </button>
        </div>
      )}

      {/* Close Button */}
      <motion.button
        onClick={close}
        className="grid place-items-center pr-4 right-2 top-2 h-full focus:outline-none"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.3 }}
        aria-label="Close Toast"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className={clsx("w-6 h-6", closeIconColors[theme])}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </motion.button>
    </motion.div>
  );
};

export default Toast_6;
