import React, { useEffect } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";
import {
  animationVariants,
  themeClasses,
  positionClasses,
  useToastTimer,
  textColor,
  closeIconColors,
} from "./utils";

const Toast_18 = ({
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
  // Default values
  const toastIcon = icon || "💬";
  const toastPosition = position || "top-right";
  const toastTheme = theme || "light";
  const toastDuration = duration || 4000;
  const toastAnimationType = animationType || "fade";
  const toastAutoDismiss = autoDismiss ?? true;
  const toastOnHoverPause = onHoverPause ?? true;

  const { handleMouseEnter, handleMouseLeave } = useToastTimer(
    toastAutoDismiss,
    toastDuration,
    close,
    toastOnHoverPause
  );

  // Add audio functionality
  useEffect(() => {
    const audioUrl =
      "https://raw.githubusercontent.com/om0852/multi-ui/main/public/audio/toast_sound_4.mp3";
    const audio = new Audio(audioUrl);

    // Play the sound when the toast appears
    audio.play().catch((err) => console.log(err));

    // Cleanup function
    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, []);

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={animationVariants[toastAnimationType]}
      transition={{ type: "spring", stiffness: 120, damping: 20 }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={clsx(
        "relative flex flex-col items-center justify-center max-w-[300px] w-full bg-white shadow-xl border-2 z-50",
        themeClasses[toastTheme],
        positionClasses[toastPosition],
        stack ? "static" : "fixed",
        "p-6 space-y-4",
        "rounded-l-xl rounded-r-xl"
      )}
      style={{ height: "300px" }}
    >
      {/* Icon Section */}
      <div className="text-4xl">{toastIcon}</div>

      {/* Message Section */}
      <div className={clsx("text-center text-base font-medium", textColor[toastTheme])}>
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
          className={clsx("w-6 h-6", closeIconColors[toastTheme])}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </motion.button>
    </motion.div>
  );
};

export default Toast_18;
