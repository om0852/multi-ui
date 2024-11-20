import React, { useMemo } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";
import { animationVariants, themeClasses, positionClasses, textColor, useToastTimer, closeIconColors } from "./utils";
import { ToastProps } from "./toast-context";

const Toast_3: React.FC<ToastProps> = ({
  message,
  close,
  icon = "🔔", // Default icon
  position = "top-right",
  theme = "dark", // Default theme
  duration = 4000,
  animationType = "slide",
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
        `flex items-center justify-between p-4 rounded-lg shadow-lg border-2 z-50`,
        "w-[300px] h-[80px]", // Fixed dimensions
        themeClasses[theme],  // Background gradient based on theme
        positionClasses[position],
        stack ? "static" : "fixed"
      )}
    >
      {/* Icon */}
      <div className="text-xl mr-4">{icon}</div>

      {/* Message */}
      <div className={clsx("flex-1 text-center text-base font-medium", textColor[theme])}>
        {message}
      </div>

      {/* Action Button */}
      {actionButton && (
        <button
          onClick={actionButton.onClick}
          className="ml-4 px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700"
        >
          {actionButton.label}
        </button>
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

// Wrap the component with React.memo for memoization
export default React.memo(Toast_3);
