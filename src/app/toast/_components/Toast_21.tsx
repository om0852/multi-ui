import React, { useEffect } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";
import { animationVariants, ThemeClassesBorder, positionClasses, useToastTimer } from "./utils";
import { ToastProps } from "./toast-context";

const Toast_21: React.FC<ToastProps> = ({
  message,
  close,
  icon,
  position = "top-right",
  theme = "dark", // Default theme
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

  // Add audio functionality
  useEffect(() => {
    const audioUrl = "https://raw.githubusercontent.com/om0852/multi-ui/main/public/audio/toast_sound_7.mp3"; // URL for the notification sound
    const audio = new Audio(audioUrl);

    // Play the sound when the toast appears
    audio.play().catch((err) => {
    });

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
        `flex items-center justify-between p-4 z-50`,
        "w-full h-[50px]", // Full width and small height
        ThemeClassesBorder[theme],  // Background gradient based on theme
        positionClasses[position],
        stack ? "static" : "fixed",
        "top-0 left-0" // Attach to the top of the screen
      )}
    >
      {/* Icon */}
      <div className="text-xl mr-4">
        {icon}
      </div>

      {/* Message */}
      <div className={clsx("flex-1 text-black text-center text-base font-medium")}>
        {message}
      </div>

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
        {/* Using provided icon URL for close button */}
        <img
          src={"https://img.icons8.com/?size=100&id=6483&format=png&color=000000"}
          alt="Close Icon"
          className="w-6 h-6 object-contain"
        />
      </button>
    </motion.div>
  );
};

// Wrap the component with React.memo for memoization
export default React.memo(Toast_21);
