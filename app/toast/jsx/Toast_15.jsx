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

const Toast_15 = ({
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
  const toastIcon = icon || "🔔";
  const toastPosition = position || "top-right";
  const toastTheme = theme || "success";
  const toastDuration = duration || 4000;
  const toastAnimationType = animationType || "slide";
  const toastAutoDismiss = autoDismiss ?? true;
  const toastOnHoverPause = onHoverPause ?? true;

  const { handleMouseEnter, handleMouseLeave } = useToastTimer(
    toastAutoDismiss,
    toastDuration,
    close,
    toastOnHoverPause
  );

  // Play audio when the component is mounted
  useEffect(() => {
    const audioUrl =
      "https://raw.githubusercontent.com/om0852/multi-ui/main/public/audio/toast_sound_1.mp3";
    const audio = new Audio(audioUrl);
    audio.play().catch((err) => console.error("Failed to play audio:", err));
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
        "relative grid grid-cols-[auto,1fr,auto] rounded-lg overflow-hidden max-w-[400px] z-50",
        themeClasses[toastTheme],
        positionClasses[toastPosition],
        stack ? "static" : "fixed",
        "p-2 shadow-lg"
      )}
    >
      {/* Icon */}
      <div className="grid place-items-center p-4 relative z-10">{toastIcon}</div>

      {/* Message */}
      <div className="flex flex-col justify-center gap-1 p-4 z-10">
        <div className={clsx("text-lg font-semibold", textColor[toastTheme])}>
          {message}
        </div>
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
          className={clsx("w-6 h-6", closeIconColors[toastTheme])}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </motion.button>

      {/* Life Span Indicator */}
      <span
        className="absolute bottom-0 left-0 h-1 bg-white opacity-50"
        style={{
          width: "100%",
          animation: `progress ${toastDuration}ms linear forwards`,
        }}
      />
    </motion.div>
  );
};

export default React.memo(Toast_15);
