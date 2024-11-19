import React from "react";
import { motion } from "framer-motion";
import clsx from "clsx";

type ToastProps = {
  message: string | React.ReactNode; // Support for dynamic or rich content
  close: () => void; // Callback to close the toast
  icon?: React.ReactNode; // Optional icon
  position?: "top-right" | "top-left" | "bottom-right" | "bottom-left" | "center";
  theme?: "light" | "dark" | "custom"; // Themes
  duration?: number; // Auto-dismiss time in ms
  animationType?: "slide" | "fade" | "zoom" | "bounce"; // Animation type
  autoDismiss?: boolean; // Enable/disable auto-dismiss
  onHoverPause?: boolean; // Pause auto-dismiss on hover
  actionButton?: { label: string; onClick: () => void }; // Optional action button
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
}) => {
  const handleMouseEnter = () => {
    if (onHoverPause) clearTimeout(timerRef.current);
  };

  const handleMouseLeave = () => {
    if (onHoverPause) startTimer();
  };

  const timerRef = React.useRef<NodeJS.Timeout | null>(null);

  const startTimer = () => {
    if (autoDismiss) {
      timerRef.current = setTimeout(close, duration);
    }
  };

  React.useEffect(() => {
    startTimer();
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [autoDismiss, duration]);

  // Animation variants based on type
  const animationVariants = {
    slide: { hidden: { x: 300, opacity: 0 }, visible: { x: 0, opacity: 1 }, exit: { x: 300, opacity: 0 } },
    fade: { hidden: { opacity: 0 }, visible: { opacity: 1 }, exit: { opacity: 0 } },
    zoom: { hidden: { scale: 0, opacity: 0 }, visible: { scale: 1, opacity: 1 }, exit: { scale: 0, opacity: 0 } },
    bounce: {
      hidden: { y: -50, opacity: 0 },
      visible: { y: 0, opacity: 1 },
      exit: { y: 50, opacity: 0 },
    },
  };

  // Theme classes
  const themeClasses = {
    light: "bg-white text-black border-gray-300",
    dark: "bg-gray-800 text-white border-gray-700",
    custom: "bg-blue-500 text-white border-blue-700",
  };

  // Position classes
  const positionClasses = {
    "top-right": "top-4 right-4",
    "top-left": "top-4 left-4",
    "bottom-right": "bottom-4 right-4",
    "bottom-left": "bottom-4 left-4",
    center: "top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2",
  };

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
        positionClasses[position]
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
