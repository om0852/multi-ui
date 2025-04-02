import React from "react";
import { motion } from "framer-motion";
import clsx from "clsx";
import {
  themeClasses,
  positionClasses,
  textColor,
  useToastTimer,
  animationVariants,
} from "./utils"; // Assuming similar utilities are used

const Toast_9 = ({
  message,
  close,
  icon,
  position,
  theme,
  duration,
  autoDismiss,
  onHoverPause,
  stack,
  animationType,
}) => {
  const { handleMouseEnter, handleMouseLeave } = useToastTimer(
    autoDismiss ?? true,
    duration ?? 4000,
    close,
    onHoverPause ?? true
  );

  // Default values
  const toastIcon = icon || "✨";
  const toastTheme = theme || "vibrant";
  const toastPosition = position || "top-right";
  const toastAnimation = animationType || "PopOutIn";

  // Close icon color based on theme
  const closeIconColor = textColor[toastTheme];

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={animationVariants[toastAnimation]}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={clsx(
        "flex items-center shadow-2xl z-50 fixed overflow-hidden p-4",
        themeClasses[toastTheme],
        positionClasses[toastPosition],
        stack ? "static" : "fixed"
      )}
    >
      {/* Icon Section with Bounce Animation */}
      <motion.div
        className="flex justify-center items-center bg-gray-800 text-white rounded-full w-10 h-10"
        initial={{ y: -15, scale: 0.8 }}
        animate={{ y: 0, scale: 1 }}
        transition={{ yoyo: 5, duration: 0.3 }}
      >
        {toastIcon}
      </motion.div>

      {/* Message Section */}
      <motion.div
        className={clsx("flex-1 pl-4 text-base font-bold", textColor[toastTheme])}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.4, duration: 0.3 }}
      >
        {message}
      </motion.div>

      {/* Close Button */}
      <motion.button
        onClick={close}
        className="ml-4 text-lg font-bold focus:outline-none"
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
          className={clsx("w-6 h-6", closeIconColor)}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </motion.button>
    </motion.div>
  );
};

export default React.memo(Toast_9);
