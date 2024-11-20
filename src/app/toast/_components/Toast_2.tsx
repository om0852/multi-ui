import React from "react";
import { motion } from "framer-motion";
import clsx from "clsx";
import { animationVariants, themeClasses, positionClasses, useToastTimer } from "./utils";

type ToastProps = {
  message: string | React.ReactNode;
  close: () => void;
  icon?: React.ReactNode;
  position?: "top-right" | "top-left" | "bottom-right" | "bottom-left" | "center";
  theme?: "light" | "dark" | "custom";
  duration?: number;
  animationType?: "slide" | "fade" | "zoom" | "bounce";
  autoDismiss?: boolean;
  stack:boolean
  onHoverPause?: boolean;
  actionButton?: { label: string; onClick: () => void };
};

const Toast_2: React.FC<ToastProps> = ({
  message,
  close,
  icon = "🔔", // Default icon for Toast_2
  position = "top-right",
  theme = "dark", // Default theme for Toast_2
  duration = 4000,
  animationType = "bounce",
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
        "fixed flex items-center justify-between p-4 rounded-lg shadow-lg border-2 z-50",
        "w-[300px] h-[80px]", // Fixed width and height for consistency
        themeClasses[theme],
        positionClasses[position],
        stack ? "static" : "fixed"

      )}
    >
      {/* Icon */}
      <div className="text-xl mr-4">{icon}</div>
      
      {/* Message */}
      <div className="flex-1 text-center text-base font-medium">{message}</div>
      
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
      <button
        onClick={close}
        className="ml-4 text-lg font-bold focus:outline-none hover:opacity-80"
        aria-label="Close Toast"
      >
        ×
      </button>
    </motion.div>
  );
};

export default Toast_2;
