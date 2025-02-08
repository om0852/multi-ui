import React, { useEffect } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";
import { animationVariants, ThemeClassesBorder, positionClasses, useToastTimer } from "./utils";
import { ToastProps } from "./toast-context";

interface ExtendedToastProps extends ToastProps {
  audio?: string;
}

const Toast_29: React.FC<ExtendedToastProps> = ({
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
      const sound = new Audio(audio);
      sound.play().catch(error => console.log('Audio playback failed:', error));
    }
  }, [audio]);

  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0, opacity: 0 }}
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
      {/* Gaming-style Container */}
      <div className={clsx(
        "relative overflow-hidden rounded-lg",
        theme === 'dark' 
          ? 'bg-gray-900 border-2 border-cyan-500' 
          : 'bg-white border-2 border-cyan-400'
      )}>
        {/* Neon Glow Effect */}
        <div className={clsx(
          "absolute inset-0",
          theme === 'dark'
            ? 'shadow-[inset_0_0_20px_rgba(6,182,212,0.5)]'
            : 'shadow-[inset_0_0_20px_rgba(34,211,238,0.3)]'
        )} />

        {/* Content Container */}
        <div className="relative p-4">
          <div className="flex items-start space-x-3">
            {/* Animated Icon */}
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 360],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className={clsx(
                "flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center",
                theme === 'dark'
                  ? 'bg-cyan-900/50 text-cyan-400'
                  : 'bg-cyan-100 text-cyan-600'
              )}
            >
              <span className="text-2xl">{icon}</span>
            </motion.div>

            {/* Message */}
            <div className="flex-1 min-w-0">
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={clsx(
                  "text-sm font-medium",
                  theme === 'dark' ? 'text-cyan-300' : 'text-cyan-700'
                )}
              >
                {message}
              </motion.p>

              {/* Action Button */}
              {actionButton && (
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={actionButton.onClick}
                  className={clsx(
                    "mt-2 px-4 py-1 text-xs font-medium rounded-lg",
                    theme === 'dark'
                      ? 'bg-cyan-900/50 text-cyan-300 hover:bg-cyan-800/50'
                      : 'bg-cyan-100 text-cyan-700 hover:bg-cyan-200'
                  )}
                >
                  {actionButton.label}
                </motion.button>
              )}
            </div>

            {/* Close Button */}
            <motion.button
              whileHover={{ rotate: 180 }}
              whileTap={{ scale: 0.9 }}
              onClick={close}
              className={clsx(
                "flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center",
                theme === 'dark'
                  ? 'text-cyan-400 hover:bg-cyan-900/50'
                  : 'text-cyan-600 hover:bg-cyan-100'
              )}
            >
              ×
            </motion.button>
          </div>
        </div>

        {/* Progress Bar */}
        <motion.div
          initial={{ scaleX: 1 }}
          animate={{ scaleX: 0 }}
          transition={{ duration: duration / 1000, ease: "linear" }}
          style={{ originX: 0 }}
          className={clsx(
            "absolute bottom-0 left-0 right-0 h-1",
            theme === 'dark' ? 'bg-cyan-500' : 'bg-cyan-400'
          )}
        />

        {/* Pixel Corner Accents */}
        <div className={clsx(
          "absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2",
          theme === 'dark' ? 'border-cyan-400' : 'border-cyan-500'
        )} />
        <div className={clsx(
          "absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2",
          theme === 'dark' ? 'border-cyan-400' : 'border-cyan-500'
        )} />
        <div className={clsx(
          "absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2",
          theme === 'dark' ? 'border-cyan-400' : 'border-cyan-500'
        )} />
        <div className={clsx(
          "absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2",
          theme === 'dark' ? 'border-cyan-400' : 'border-cyan-500'
        )} />
      </div>
    </motion.div>
  );
};

export default React.memo(Toast_29); 