import React, { useEffect } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";
import { animationVariants, ThemeClassesBorder, positionClasses, useToastTimer } from "./utils";
import { ToastProps } from "./toast-context";

interface ExtendedToastProps extends ToastProps {
  audio?: string;
}

const Toast_35: React.FC<ExtendedToastProps> = ({
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
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.8, opacity: 0 }}
      transition={{ type: "spring", stiffness: 400, damping: 30 }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={clsx(
        "relative z-50",
        "w-[320px]",
        positionClasses[position],
        stack ? "static" : "fixed",
      )}
    >
      {/* Glass Container */}
      <div className={clsx(
        "relative overflow-hidden rounded-xl",
        "backdrop-blur-xl backdrop-saturate-150",
        theme === 'dark'
          ? 'bg-white/10 border border-white/20'
          : 'bg-white/60 border border-white/40',
        "shadow-lg shadow-black/5"
      )}>
        {/* Glassmorphic Highlights */}
        <div className={clsx(
          "absolute inset-0",
          theme === 'dark'
            ? 'bg-gradient-to-br from-white/10 to-transparent'
            : 'bg-gradient-to-br from-white/40 to-transparent'
        )} />

        {/* Content Container */}
        <div className="relative p-4">
          <div className="flex items-start space-x-3">
            {/* Icon with Glass Effect */}
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className={clsx(
                "relative flex-shrink-0 w-12 h-12 rounded-lg",
                "backdrop-blur-md",
                theme === 'dark'
                  ? 'bg-white/20 text-white'
                  : 'bg-black/5 text-gray-800',
                "flex items-center justify-center"
              )}
            >
              <span className="text-2xl filter drop-shadow">{icon}</span>
              {/* Highlight Effect */}
              <div className={clsx(
                "absolute inset-0 rounded-lg",
                "bg-gradient-to-br from-white/30 to-transparent"
              )} />
            </motion.div>

            {/* Message Area */}
            <div className="flex-1 min-w-0">
              <motion.p
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                className={clsx(
                  "text-sm font-medium",
                  theme === 'dark' ? 'text-white' : 'text-gray-800'
                )}
              >
                {message}
              </motion.p>

              {/* Action Button */}
              {actionButton && (
                <motion.button
                  whileHover={{ scale: 1.02, y: -1 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={actionButton.onClick}
                  className={clsx(
                    "mt-2 px-4 py-1.5 text-sm rounded-lg",
                    "backdrop-blur-sm transition-all duration-200",
                    theme === 'dark'
                      ? 'bg-white/10 text-white hover:bg-white/20'
                      : 'bg-black/5 text-gray-800 hover:bg-black/10'
                  )}
                >
                  {actionButton.label}
                </motion.button>
              )}
            </div>

            {/* Close Button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={close}
              className={clsx(
                "flex-shrink-0 w-6 h-6 rounded-full",
                "backdrop-blur-sm flex items-center justify-center",
                theme === 'dark'
                  ? 'bg-white/10 text-white hover:bg-white/20'
                  : 'bg-black/5 text-gray-800 hover:bg-black/10'
              )}
            >
              ×
            </motion.button>
          </div>
        </div>

        {/* Progress Bar with Glass Effect */}
        <div className={clsx(
          "relative h-1",
          theme === 'dark' ? 'bg-white/5' : 'bg-black/5'
        )}>
          <motion.div
            initial={{ scaleX: 1 }}
            animate={{ scaleX: 0 }}
            transition={{ duration: duration / 1000, ease: "linear" }}
            style={{ originX: 0 }}
            className={clsx(
              "absolute inset-0",
              theme === 'dark'
                ? 'bg-gradient-to-r from-white/30 to-white/20'
                : 'bg-gradient-to-r from-black/20 to-black/10'
            )}
          />
        </div>

        {/* Shimmer Effect */}
        <motion.div
          animate={{
            x: ["0%", "100%"],
            opacity: [0, 0.5, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className={clsx(
            "absolute inset-0 w-1/2 skew-x-12",
            theme === 'dark'
              ? 'bg-gradient-to-r from-transparent via-white/10 to-transparent'
              : 'bg-gradient-to-r from-transparent via-white/40 to-transparent'
          )}
        />
      </div>
    </motion.div>
  );
};

export default React.memo(Toast_35); 