import React from "react";
import { motion } from "framer-motion";
import clsx from "clsx";
import { animationVariants, themeClasses, positionClasses, textColor, useToastTimer } from "./utils";
import { ToastProps } from "./toast-context";

const Toast_4: React.FC<ToastProps> = ({
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
        themeClasses[theme],  // Dynamically apply background color based on theme
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
        <h4 className={clsx("text-lg font-semibold", textColor[theme])}>{message}</h4>
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

export default React.memo(Toast_4);
