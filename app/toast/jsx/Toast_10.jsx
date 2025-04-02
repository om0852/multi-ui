import React from "react";
import { motion } from "framer-motion";
import clsx from "clsx";
import {
  themeClasses,
  positionClasses,
  useToastTimer,
  textColor,
  closeIconColors,
  animationVariants,
} from "./utils";

const Toast_10 = ({
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
    duration ?? 4000,
    close,
    onHoverPause ?? true
  );

  // Default values
  const toastIcon = icon || "🚀";
  const toastTheme = theme || "dark";
  const toastPosition = position || "top-right";
  const toastAnimation = animationType || "zoom";

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={animationVariants[toastAnimation]}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={clsx(
        "flex items-center p-4 min-w-[200px] max-w-[350px] w-full bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 rounded-2xl shadow-2xl z-50",
        themeClasses[toastTheme],
        positionClasses[toastPosition],
        stack ? "static" : "fixed",
        "space-x-4"
      )}
    >
      {/* Icon Section with smooth scaling */}
      <motion.div
        className="text-4xl flex-shrink-0"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        {toastIcon}
      </motion.div>

      {/* Message Section */}
      <motion.div
        className={clsx("flex-1 text-lg font-semibold text-white", textColor[toastTheme])}
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3, duration: 0.3 }}
      >
        {message}
      </motion.div>

      {/* Action Button (if provided) */}
      {actionButton && (
        <div className="flex-shrink-0">
          <button
            onClick={actionButton.onClick}
            className="px-4 py-2 bg-yellow-400 text-black rounded-md hover:bg-yellow-500"
          >
            {actionButton.label}
          </button>
        </div>
      )}

      {/* Close Button with rotation animation */}
      <motion.button
        onClick={close}
        className="grid place-items-center h-full pl-2 top-2 right-2 text-xl text-white focus:outline-none"
        initial={{ opacity: 0, rotate: 45 }}
        animate={{ opacity: 1, rotate: 0 }}
        transition={{ delay: 0.4, duration: 0.3 }}
        aria-label="Close Toast"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className={clsx("w-6 h-6", closeIconColors[toastTheme])}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </motion.button>
    </motion.div>
  );
};

export default React.memo(Toast_10);
