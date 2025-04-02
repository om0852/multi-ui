import React, { useEffect } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";
import { animationVariants, ThemeClassesBorder, positionClasses, useToastTimer } from "./utils";

const Toast_21 = ({
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
  const toastPosition = position || "top-right";
  const toastTheme = theme || "dark";
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

  // Add audio functionality
  useEffect(() => {
    const audioUrl =
      "https://raw.githubusercontent.com/om0852/multi-ui/main/public/audio/toast_sound_7.mp3";
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
        "flex items-center justify-between p-4 z-50",
        "w-full h-[50px]", // Full width and small height
        ThemeClassesBorder[toastTheme], // Background gradient based on theme
        positionClasses[toastPosition],
        stack ? "static" : "fixed",
        "top-0 left-0" // Attach to the top of the screen
      )}
    >
      {/* Icon */}
      <div className="text-xl mr-4">{icon || "🔔"}</div>

      {/* Message */}
      <div className="flex-1 text-black text-center text-base font-medium">
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
        <img
          src="https://img.icons8.com/?size=100&id=6483&format=png&color=000000"
          alt="Close Icon"
          className="w-6 h-6 object-contain"
        />
      </button>
    </motion.div>
  );
};

// Wrap the component with React.memo for memoization
export default React.memo(Toast_21);
