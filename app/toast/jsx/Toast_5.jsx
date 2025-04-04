import React from "react";
import { motion } from "framer-motion";
import clsx from "clsx";
import { animationVariants, textColor, gradientProgressBarColors, gradientThemeClasses, positionClasses, useToastTimer, closeIconColors } from "./utils";

const Toast_5 = ({
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
  const { handleMouseEnter, handleMouseLeave, elapsedPercent } = useToastTimer(
    autoDismiss ?? true,
    duration ?? 5000,
    close,
    onHoverPause ?? true
  );

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={animationVariants[animationType ?? "fade"]}
      transition={{ type: "spring", stiffness: 150, damping: 25 }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={clsx(
        "flex flex-col rounded-xl shadow-lg border z-50 overflow-hidden",
        "w-[320px]",
        gradientThemeClasses[theme ?? "light"],
        positionClasses[position ?? "bottom-left"],
        stack ? "static" : "fixed"
      )}
    >
      {/* Top Section with Icon and Message */}
      <div className="flex items-center p-4">
        {/* Icon */}
        <div className="text-2xl text-gray-800 mr-4">{icon || "🔥"}</div>

        {/* Message */}
        <div className={clsx("flex-1 text-base font-semibold", textColor[theme ?? "light"])}>
          {message}
        </div>

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
            className={clsx("w-6 h-6", closeIconColors[theme ?? "light"])}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </motion.button>
      </div>

      {/* Progress Bar */}
      <div className="relative h-2 bg-gray-300 overflow-hidden">
        <motion.div
          className={`absolute top-0 left-0 h-2 ${gradientProgressBarColors[theme ?? "light"]}`}
          style={{ width: `${elapsedPercent}%` }}
          initial={{ width: "100%" }}
          animate={{ width: "0%" }}
          transition={{ duration: (duration ?? 5000) / 1000, ease: "linear" }}
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
