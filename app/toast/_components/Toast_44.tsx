import React, { useEffect } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";
import { animationVariants, ThemeClassesBorder, positionClasses, useToastTimer } from "./utils";
import { ToastProps } from "./toast-context";

interface ExtendedToastProps extends ToastProps {
  audio?: string;
}

const Toast_44: React.FC<ExtendedToastProps> = ({
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
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.8, opacity: 0 }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
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
        "relative p-4 rounded-lg overflow-hidden",
        theme === 'dark' ? 'bg-gray-900' : 'bg-gray-800',
        "shadow-[0_0_20px_rgba(0,255,255,0.3)]",
        "border border-cyan-400",
        "animate-[pulse_2s_ease-in-out_infinite]"
      )}>
        {/* Neon Glow Effect */}
        <div className="absolute inset-0 opacity-50">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 animate-[gradient_3s_ease_infinite]" />
        </div>

        <div className="relative flex items-start space-x-3">
          {/* Icon with Neon Effect */}
          <motion.div
            animate={{
              boxShadow: [
                "0 0 20px rgba(0,255,255,0.5)",
                "0 0 40px rgba(0,255,255,0.3)",
                "0 0 20px rgba(0,255,255,0.5)",
              ],
            }}
            transition={{ duration: 2, repeat: Infinity }}
            className={clsx(
              "flex-shrink-0 w-10 h-10 rounded-lg",
              "flex items-center justify-center",
              "bg-gray-800 text-cyan-400",
              "border border-cyan-400"
            )}
          >
            <span className="text-xl filter drop-shadow-[0_0_8px_rgba(0,255,255,0.8)]">
              {icon}
            </span>
          </motion.div>

          {/* Content */}
          <div className="flex-1">
            <p className={clsx(
              "text-sm font-medium mb-2",
              "text-white",
              "filter drop-shadow-[0_0_8px_rgba(0,255,255,0.5)]"
            )}>
              {message}
            </p>

            {actionButton && (
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(0,255,255,0.5)" }}
                whileTap={{ scale: 0.95 }}
                onClick={actionButton.onClick}
                className={clsx(
                  "px-4 py-1 text-sm rounded-lg",
                  "bg-gray-800 text-cyan-400",
                  "border border-cyan-400",
                  "hover:bg-gray-700",
                  "transition-all duration-300",
                  "shadow-[0_0_10px_rgba(0,255,255,0.3)]"
                )}
              >
                {actionButton.label}
              </motion.button>
            )}
          </div>

          {/* Close Button */}
          <motion.button
            whileHover={{ scale: 1.1, boxShadow: "0 0 20px rgba(0,255,255,0.5)" }}
            whileTap={{ scale: 0.9 }}
            onClick={close}
            className={clsx(
              "flex-shrink-0 w-8 h-8 rounded-lg",
              "flex items-center justify-center",
              "bg-gray-800 text-cyan-400",
              "border border-cyan-400",
              "hover:bg-gray-700",
              "transition-all duration-300"
            )}
          >
            ×
          </motion.button>
        </div>

        {/* Progress Bar */}
        <motion.div
          initial={{ scaleX: 1 }}
          animate={{ scaleX: 0 }}
          transition={{ duration: duration / 1000, ease: "linear" }}
          style={{ originX: 0 }}
          className={clsx(
            "absolute bottom-0 left-0 right-0 h-0.5",
            "bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500",
            "shadow-[0_0_10px_rgba(0,255,255,0.5)]"
          )}
        />
      </div>
    </motion.div>
  );
};

export default React.memo(Toast_44); 