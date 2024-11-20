import React from "react";
import { motion } from "framer-motion";
import clsx from "clsx";
import { animationVariants,textColor, gradientProgressBarColors, gradientThemeClasses, positionClasses, useToastTimer } from "./utils";
import { ToastProps } from "./toast-context";

const Toast_5: React.FC<ToastProps> = ({
  message,
  close,
  icon = "🔥", // Default icon for this design
  position = "bottom-left",
  theme = "light", // Default theme
  duration = 5000,
  animationType = "fade", // Subtle fade animation
  autoDismiss = true,
  onHoverPause = true,
  actionButton,
  stack,
}) => {
  const { handleMouseEnter, handleMouseLeave, elapsedPercent } = useToastTimer(
    autoDismiss,
    duration,
    close,
    onHoverPause
  );

  // Define text color for each theme to ensure contrast

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={animationVariants[animationType]}
      transition={{ type: "spring", stiffness: 150, damping: 25 }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={clsx(
        `flex flex-col rounded-xl shadow-lg border z-50 overflow-hidden`,
        "w-[320px]", // Fixed width
        gradientThemeClasses[theme],
        positionClasses[position],
        stack ? "static" : "fixed"
      )}
    >
      {/* Top Section with Icon and Message */}
      <div className="flex items-center p-4">
        {/* Icon */}
        <div className="text-2xl text-gray-800 mr-4">{icon}</div>

        {/* Message */}
        <div className={clsx("flex-1 text-base font-semibold", textColor[theme])}>
          {message}
        </div>

        {/* Close Button */}
        <button
          onClick={close}
          className="ml-4 text-lg font-bold focus:outline-none hover:opacity-80"
          aria-label="Close Toast"
        >
          ×
        </button>
      </div>

      {/* Progress Bar */}
      <div className="relative h-2 bg-gray-300 overflow-hidden">
        <motion.div
          className={`absolute top-0 left-0 h-2 ${gradientProgressBarColors[theme]}`}
          style={{ width: `${elapsedPercent}%` }}
          initial={{ width: "100%" }}
          animate={{ width: "0%" }}
          transition={{ duration: duration / 1000, ease: "linear" }}
        />
        <div className="absolute inset-0 h-full bg-opacity-10" />
      </div>

      {/* Action Button (if provided) */}
      {actionButton && (
        <div className="p-2 flex justify-end">
          <button
            onClick={actionButton.onClick}
            className="px-4 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            {actionButton.label}
          </button>
        </div>
      )}
    </motion.div>
  );
};

export default React.memo(Toast_5);
