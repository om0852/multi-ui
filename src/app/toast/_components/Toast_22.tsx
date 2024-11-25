import React, { useEffect } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";
import {
  animationVariants,
  themeClasses,
  positionClasses,
  textColor,
  useToastTimer,
  closeIconColors,
} from "./utils";
import { ToastProps } from "./toast-context";

const Toast_22: React.FC<ToastProps> = ({
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
  stack,
}) => {
  const { handleMouseEnter, handleMouseLeave } = useToastTimer(
    autoDismiss,
    duration,
    close,
    onHoverPause
  );

  // Play audio when the component is mounted
  useEffect(() => {
    const audioUrl =
      "https://raw.githubusercontent.com/om0852/multi-ui/main/public/audio/toast_sound_8.mp3"; // Use your audio file URL
    const audio = new Audio(audioUrl);
    audio.play().catch((err) => {});
  }, []);

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
      {/* Icon */}
      {icon && <div className="mr-3">{icon}</div>}

      {/* Message */}
      <div className={clsx("flex-1", textColor[theme])}>{message}</div>

      {/* Medium separator (vertical line) */}
      <div className="mx-3 h-6 border-l-2 border-gray-300"></div>

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
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </motion.button>
    </motion.div>
  );
};

export default Toast_22;
