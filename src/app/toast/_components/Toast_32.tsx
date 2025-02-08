import React, { useEffect } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";
import { animationVariants, ThemeClassesBorder, positionClasses, useToastTimer } from "./utils";
import { ToastProps } from "./toast-context";

interface ExtendedToastProps extends ToastProps {
  audio?: string;
}

const Toast_32: React.FC<ExtendedToastProps> = ({
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
      initial={{ scale: 0.9, y: -20, opacity: 0 }}
      animate={{ scale: 1, y: 0, opacity: 1 }}
      exit={{ scale: 0.9, y: -20, opacity: 0 }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={clsx(
        "relative z-50",
        "w-[300px]",
        positionClasses[position],
        stack ? "static" : "fixed",
      )}
    >
      {/* Paper Container */}
      <div className={clsx(
        "relative rounded-lg shadow-lg",
        theme === 'dark'
          ? 'bg-gray-800 shadow-gray-900/50'
          : 'bg-white shadow-gray-200/50'
      )}>
        {/* Paper Texture */}
        <div className={clsx(
          "absolute inset-0 opacity-5 pointer-events-none",
          "bg-[radial-gradient(#000_1px,transparent_1px)]",
          "[background-size:4px_4px]"
        )} />

        {/* Content Container */}
        <div className="relative p-4">
          <div className="flex items-start space-x-3">
            {/* Icon */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 10,
              }}
              className={clsx(
                "flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center",
                theme === 'dark'
                  ? 'bg-gray-700 text-gray-300'
                  : 'bg-gray-100 text-gray-600'
              )}
            >
              {icon}
            </motion.div>

            {/* Message */}
            <div className="flex-1 min-w-0">
              <motion.p
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className={clsx(
                  "text-sm",
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                )}
              >
                {message}
              </motion.p>

              {/* Action Button */}
              {actionButton && (
                <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={actionButton.onClick}
                  className={clsx(
                    "mt-2 px-3 py-1 text-xs rounded-md transition-colors",
                    theme === 'dark'
                      ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  )}
                >
                  {actionButton.label}
                </motion.button>
              )}
            </div>

            {/* Close Button */}
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={close}
              className={clsx(
                "flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center",
                theme === 'dark'
                  ? 'text-gray-400 hover:text-gray-300'
                  : 'text-gray-500 hover:text-gray-600'
              )}
            >
              ×
            </motion.button>
          </div>
        </div>

        {/* Progress Line */}
        <div className="relative h-0.5 overflow-hidden">
          <motion.div
            initial={{ scaleX: 1 }}
            animate={{ scaleX: 0 }}
            transition={{ duration: duration / 1000, ease: "linear" }}
            style={{ originX: 0 }}
            className={clsx(
              "absolute inset-0",
              theme === 'dark' ? 'bg-gray-600' : 'bg-gray-300'
            )}
          />
        </div>

        {/* Paper Edge */}
        <div className={clsx(
          "absolute -bottom-1 left-0 right-0 h-1 rounded-b-lg",
          theme === 'dark'
            ? 'bg-gradient-to-r from-gray-700 via-gray-800 to-gray-700'
            : 'bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100'
        )} />
      </div>
    </motion.div>
  );
};

export default React.memo(Toast_32); 