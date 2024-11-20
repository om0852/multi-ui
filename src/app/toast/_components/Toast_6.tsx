import React from "react";
import { motion } from "framer-motion";
import clsx from "clsx";
import { animationVariants, themeClasses, positionClasses, useToastTimer, textColor } from "./utils";
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
  stack
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
      <div className={clsx("text-center text-base font-medium", textColor[theme])}>
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
      <button
        onClick={close}
        className="absolute top-2 right-2 text-xl font-bold text-gray-700 hover:text-gray-900"
        aria-label="Close Toast"
      >
        ×
      </button>
    </motion.div>
  );
};

export default Toast_6;
