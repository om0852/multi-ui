import React from "react";
import { motion } from "framer-motion";
import clsx from "clsx";
import { animationVariants, themeClasses, positionClasses, textColor, useToastTimer, closeIconColors } from "./utils";
import { ToastProps } from "./toast-context";

const Toast_4: React.FC<ToastProps> = ({
  message,
  close,
  icon = "🔔", // Default icon
  position = "top-right",
  theme = "success", // Default theme
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
        "relative grid grid-cols-[auto,1fr,auto] rounded-lg overflow-hidden max-w-[400px] z-50",
        themeClasses[theme],  // Dynamically apply background color based on theme
        positionClasses[position],
        stack ? "static" : "fixed",
        "p-2 shadow-lg"
      )}
    >
      {/* Icon */}
      <div className="grid place-items-center p-4 relative z-10">
        {icon}
      </div>

      {/* Message */}
      <div className="flex flex-col justify-center gap-1 p-4 z-10">
        <div className={clsx("text-lg font-semibold", textColor[theme])}>{message}</div>
      </div>

      {/* Action Button */}
      {actionButton && (
        <div className="p-4">
          <button
            onClick={actionButton.onClick}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none"
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
    
      {/* Life Span Indicator */}
      <span
        className="absolute bottom-0 left-0 h-1 bg-white opacity-50"
        style={{
          width: "100%",
          animation: `progress ${duration}ms linear forwards`,
        }}
      />
    </motion.div>
  );
};

export default React.memo(Toast_4);
