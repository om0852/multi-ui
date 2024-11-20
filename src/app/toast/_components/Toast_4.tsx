import React from "react";
import { motion } from "framer-motion";
import clsx from "clsx";
import { animationVariants, positionClasses, useToastTimer } from "./utils";

type ToastProps = {
  message: string | React.ReactNode;
  close: () => void;
  icon?: React.ReactNode;
  position?: "top-right" | "top-left" | "bottom-right" | "bottom-left" | "center";
  theme?: "success" | "warn" | "info" | "danger"; // Themes
  duration?: number;
  animationType?: "slide" | "fade" | "zoom" | "bounce";
  autoDismiss?: boolean;
  onHoverPause?: boolean;
  actionButton?: { label: string; onClick: () => void };
  stack: boolean;
};

// Dynamic theme styles based on the toast type
const themeStyles: Record<string, string> = {
  success: "bg-[rgba(23,172,23,0.8)] border-[rgba(20,72,20,1)]",  // Green
  warn: "bg-[rgba(203,116,23,0.8)] border-[rgba(188,107,26,1)]",    // Yellow
  info: "bg-[rgba(23,103,172,0.8)] border-[rgba(45,93,153,1)]",      // Blue
  danger: "bg-[rgba(172,23,23,0.8)] border-[rgba(171,25,25,1)]",    // Red
};

const Toast: React.FC<ToastProps> = ({
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
        themeStyles[theme],  // Dynamically apply background color based on theme
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
        <h4 className="text-lg font-semibold text-white">{message}</h4>
      </div>

      {/* Close Button */}
      <button
        onClick={close}
        className="absolute top-2 right-2 text-white font-bold z-10 hover:opacity-80"
        aria-label="Close Toast"
      >
        ×
      </button>

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

export default React.memo(Toast);
