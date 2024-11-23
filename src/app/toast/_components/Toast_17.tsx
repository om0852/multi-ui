import React, { useEffect } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";
import { animationVariants, themeClasses, positionClasses, textColor, useToastTimer, closeIconColors } from "./utils";
import { ToastProps } from "./toast-context";

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

  // Add audio functionality
  useEffect(() => {
    const audioUrl = "https://raw.githubusercontent.com/om0852/multi-ui/main/public/audio/toast_sound_3.mp3"; // URL for the notification sound
    const audio = new Audio(audioUrl);

    // Play the sound when the toast appears
    audio.play().catch((err) => {});

    // Optional: Cleanup on unmount to stop the sound if needed
    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, []); // Empty dependency array ensures this effect runs only once when the toast is mounted

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
        "fixed flex items-center justify-between p-4 rounded-2xl shadow-lg border-2 z-50",
        "w-[350px] h-[90px]", // Fixed width and height for consistency
        themeClasses[theme],
        positionClasses[position],
        stack ? "static" : "fixed"
      )}
    >
      {/* Icon */}
      <div className="text-2xl mr-4 flex justify-center items-center w-14 h-14 rounded-full bg-gray-600 text-white">
        {icon}
      </div>
      
      {/* Message */}
      <div className={clsx("flex-1 text-center text-lg font-medium", textColor[theme])}>
        {message}
      </div>
      
      {/* Action Button */}
      {actionButton && (
        <button
          onClick={actionButton.onClick}
          className="ml-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none"
        >
          {actionButton.label}
        </button>
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
    </motion.div>
  );
};

export default Toast_2;
