import React, { useEffect } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";
import {
  themeClasses,
  positionClasses,
  textColor,
  useToastTimer,
} from "./utils"; // Assuming similar utilities are used

const Toast_13 = ({
  message,
  close,
  icon,
  position,
  theme,
  duration,
  autoDismiss,
  onHoverPause,
  stack,
}) => {
  // Default values
  const toastPosition = position || "top-right";
  const toastTheme = theme || "dark";
  const toastDuration = duration || 4000;
  const toastAutoDismiss = autoDismiss ?? true;
  const toastOnHoverPause = onHoverPause ?? true;

  // Play audio on toast mount
  const audioUrl =
    "https://raw.githubusercontent.com/om0852/multi-ui/main/public/audio/toast_sound.mp3";
  useEffect(() => {
    const audio = new Audio(audioUrl);
    audio.play().catch((err) => console.error("Failed to play audio:", err));
  }, []);

  // Use the useToastTimer hook
  const { handleMouseEnter, handleMouseLeave } = useToastTimer(
    toastAutoDismiss,
    toastDuration,
    close,
    toastOnHoverPause
  );

  // Animation variants for circular-to-rectangular toast
  const toastVariants = {
    hidden: {
      width: "50px",
      height: "50px",
      borderRadius: "50%",
      opacity: 0,
    },
    visible: {
      width: "300px",
      height: "80px",
      borderRadius: "12px",
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeInOut",
      },
    },
    exit: {
      width: "50px",
      height: "50px",
      borderRadius: "50%",
      opacity: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  // Dynamically set the color of the close icon based on the theme
  const closeIconColor = textColor[toastTheme];

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={toastVariants}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={clsx(
        `flex items-center shadow-lg z-50`,
        "fixed p-2 overflow-hidden",
        themeClasses[toastTheme],
        positionClasses[toastPosition],
        stack ? "static" : "fixed"
      )}
    >
      {/* Circular Icon */}
      <motion.div
        className="flex justify-center items-center bg-gray-700 text-white rounded-full w-12 h-12"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.2 }}
      >
        {icon}
      </motion.div>

      {/* Message (appears after toast expands) */}
      <motion.div
        className={clsx("flex-1 pl-2 text-base font-semibold", closeIconColor)}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8, duration: 0.2 }}
      >
        {message}
      </motion.div>

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
          className={clsx("w-6 h-6", closeIconColor)}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </motion.button>
    </motion.div>
  );
};

export default React.memo(Toast_13);
