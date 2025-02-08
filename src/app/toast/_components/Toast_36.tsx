import React, { useEffect } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";
import { animationVariants, ThemeClassesBorder, positionClasses, useToastTimer } from "./utils";
import { ToastProps } from "./toast-context";

interface ExtendedToastProps extends ToastProps {
  audio?: string;
}

const Toast_36: React.FC<ExtendedToastProps> = ({
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
      initial={{ x: 50, opacity: 0, scale: 0.9 }}
      animate={{ x: 0, opacity: 1, scale: 1 }}
      exit={{ x: 50, opacity: 0, scale: 0.9 }}
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
      {/* Material Card */}
      <div className={clsx(
        "relative overflow-hidden rounded-lg",
        theme === 'dark'
          ? 'bg-gray-800 shadow-lg shadow-black/20'
          : 'bg-white shadow-lg shadow-black/10',
        "transition-shadow duration-300 ease-in-out"
      )}>
        {/* Elevation Effect */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className={clsx(
            "absolute inset-0",
            theme === 'dark'
              ? 'bg-gradient-to-b from-white/5 to-transparent'
              : 'bg-gradient-to-b from-black/5 to-transparent'
          )}
        />

        {/* Content Container */}
        <div className="relative p-4">
          <div className="flex items-start space-x-3">
            {/* Icon with Ripple */}
            <div className="relative">
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className={clsx(
                  "flex-shrink-0 w-10 h-10 rounded-full",
                  "flex items-center justify-center",
                  theme === 'dark'
                    ? 'bg-gray-700 text-gray-200'
                    : 'bg-gray-100 text-gray-700'
                )}
              >
                <span className="text-xl">{icon}</span>
              </motion.div>
              {/* Ripple Effect */}
              <motion.div
                initial={{ scale: 0, opacity: 0.5 }}
                animate={{ scale: 2, opacity: 0 }}
                transition={{
                  repeat: Infinity,
                  duration: 1.5,
                  ease: "easeOut",
                }}
                className={clsx(
                  "absolute inset-0 rounded-full",
                  theme === 'dark'
                    ? 'bg-gray-600'
                    : 'bg-gray-200'
                )}
              />
            </div>

            {/* Message Area */}
            <div className="flex-1 min-w-0">
              <motion.p
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                className={clsx(
                  "text-sm",
                  theme === 'dark' ? 'text-gray-200' : 'text-gray-700'
                )}
              >
                {message}
              </motion.p>

              {/* Action Button */}
              {actionButton && (
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={actionButton.onClick}
                  className={clsx(
                    "mt-2 px-4 py-1 text-sm font-medium rounded",
                    "transition-colors duration-200",
                    theme === 'dark'
                      ? 'bg-gray-700 text-gray-200 hover:bg-gray-600'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
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
                "flex items-center justify-center",
                "transition-colors duration-200",
                theme === 'dark'
                  ? 'text-gray-400 hover:bg-gray-700'
                  : 'text-gray-500 hover:bg-gray-100'
              )}
            >
              ×
            </motion.button>
          </div>
        </div>

        {/* Linear Progress */}
        <div className={clsx(
          "relative h-0.5",
          theme === 'dark' ? 'bg-gray-700' : 'bg-gray-100'
        )}>
          <motion.div
            initial={{ scaleX: 1 }}
            animate={{ scaleX: 0 }}
            transition={{ duration: duration / 1000, ease: "linear" }}
            style={{ originX: 0 }}
            className={clsx(
              "absolute inset-0",
              theme === 'dark' ? 'bg-blue-500' : 'bg-blue-600'
            )}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default React.memo(Toast_36); 