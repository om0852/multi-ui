import React, { useEffect } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";
import { animationVariants, ThemeClassesBorder, positionClasses, useToastTimer } from "./utils";
import { ToastProps } from "./toast-context";

interface ExtendedToastProps extends ToastProps {
  audio?: string;
}

const Toast_46: React.FC<ExtendedToastProps> = ({
  message,
  close,
  icon,
  position = "top-right",
  theme = "dark",
  duration = 4000,
  animationType = "slide",
  autoDismiss = true,
  onHoverPause = true,
  actionButton,
  stack,
  audio
}) => {
  const { handleMouseEnter, handleMouseLeave } = useToastTimer(
    autoDismiss,
    duration,
    close,
    onHoverPause
  );

  useEffect(() => {
    if (audio) {
      const audioElement = new Audio(audio);
      audioElement.play();
    }
  }, [audio]);

  return (
    <motion.div
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 50, opacity: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={clsx(
        "relative z-50",
        "w-[320px]",
        positionClasses[position],
        stack ? "static" : "fixed",
      )}
    >
      <div className={clsx(
        "relative p-4 rounded",
        theme === 'dark' ? 'bg-amber-900/90' : 'bg-amber-100',
        "border-4 border-double border-amber-700",
        "shadow-[inset_0_0_10px_rgba(0,0,0,0.3)]"
      )}>
        {/* Mechanical Corner Rivets */}
        <div className="absolute top-2 left-2 w-2 h-2 rounded-full bg-amber-700 shadow-inner" />
        <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-amber-700 shadow-inner" />
        <div className="absolute bottom-2 left-2 w-2 h-2 rounded-full bg-amber-700 shadow-inner" />
        <div className="absolute bottom-2 right-2 w-2 h-2 rounded-full bg-amber-700 shadow-inner" />

        {/* Gear Pattern Background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-12 h-12 border-4 border-amber-700 rounded-full" />
          <div className="absolute bottom-0 right-0 w-16 h-16 border-4 border-amber-700 rounded-full" />
        </div>

        <div className="relative flex items-start space-x-3">
          {/* Mechanical Icon Container */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className={clsx(
              "flex-shrink-0 w-10 h-10 rounded-full",
              "flex items-center justify-center",
              "bg-amber-800 text-amber-200",
              "border-2 border-amber-700",
              "shadow-[inset_0_0_5px_rgba(0,0,0,0.5)]"
            )}
          >
            <span className="text-xl">{icon}</span>
          </motion.div>

          {/* Content */}
          <div className="flex-1">
            <p className={clsx(
              "text-sm font-serif",
              theme === 'dark' ? 'text-amber-100' : 'text-amber-900'
            )}>
              {message}
            </p>

            {actionButton && (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={actionButton.onClick}
                className={clsx(
                  "mt-2 px-4 py-1 text-sm rounded",
                  "bg-amber-800 text-amber-200",
                  "border border-amber-700",
                  "hover:bg-amber-700",
                  "shadow-[inset_0_0_5px_rgba(0,0,0,0.3)]",
                  "transition-all duration-200"
                )}
              >
                {actionButton.label}
              </motion.button>
            )}
          </div>

          {/* Close Button */}
          <motion.button
            whileHover={{ rotate: 90 }}
            whileTap={{ scale: 0.9 }}
            onClick={close}
            className={clsx(
              "flex-shrink-0 w-6 h-6 rounded-full",
              "flex items-center justify-center",
              "bg-amber-800 text-amber-200",
              "border border-amber-700",
              "hover:bg-amber-700",
              "shadow-[inset_0_0_5px_rgba(0,0,0,0.3)]"
            )}
          >
            ×
          </motion.button>
        </div>

        {/* Mechanical Progress Gear */}
        <div className="relative h-1 mt-3 bg-amber-800/30 rounded">
          <motion.div
            initial={{ scaleX: 1 }}
            animate={{ scaleX: 0 }}
            transition={{ duration: duration / 1000, ease: "steps(100)" }}
            style={{ originX: 0 }}
            className={clsx(
              "absolute inset-0",
              "bg-gradient-to-r from-amber-700 to-amber-500",
              "shadow-[0_0_5px_rgba(217,119,6,0.5)]"
            )}
          >
            {/* Moving Gear Effect */}
            <motion.div
              animate={{ x: ["0%", "100%"] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="absolute top-1/2 -translate-y-1/2 w-2 h-2 bg-amber-300 rounded-full shadow-[0_0_5px_rgba(217,119,6,0.5)]"
            />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default React.memo(Toast_46); 