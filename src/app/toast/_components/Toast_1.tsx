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
  onHoverPause?: boolean;
  stack:boolean;
  actionButton?: { label: string; onClick: () => void };
};

const Toast_1: React.FC<ToastProps> = ({
  message,
  close,
  icon,
  position = "top-right",
  theme = "light",
  duration = 3000,
  animationType = "slide",
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
      transition={{ type: "spring", stiffness: 100, damping: 15 }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={clsx(
        "fixed flex items-center p-4 rounded shadow-md border-l-4 z-50",
        themeClasses[theme],
        positionClasses[position],
        stack ? "static" : "fixed"

      )}
    >
      {icon && <div className="mr-3">{icon}</div>}
      <div className="flex-1">{message}</div>
      {actionButton && (
        <button
          onClick={actionButton.onClick}
          className="ml-4 px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          {actionButton.label}
        </button>
      )}
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

export default Toast_1;
