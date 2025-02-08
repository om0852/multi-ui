import React from "react";
import { motion } from "framer-motion";
import clsx from "clsx";
import { animationVariants, ThemeClassesBorder, positionClasses, useToastTimer } from "./utils";
import { ToastProps } from "./toast-context";

const Toast_25: React.FC<ToastProps> = ({
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
}) => {
  const { handleMouseEnter, handleMouseLeave } = useToastTimer(
    autoDismiss,
    duration,
    close,
    onHoverPause
  );

  return (
    <motion.div
      initial={{ rotateX: -90, opacity: 0, y: -50 }}
      animate={{ rotateX: 0, opacity: 1, y: 0 }}
      exit={{ rotateX: 90, opacity: 0, y: 50 }}
      transition={{ type: "spring", stiffness: 150, damping: 15 }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={clsx(
        "relative z-50",
        "w-[320px]",
        positionClasses[position],
        stack ? "static" : "fixed",
      )}
    >
      {/* Card Container */}
      <div className={clsx(
        "relative overflow-hidden rounded-lg shadow-lg",
        theme === 'dark' ? 'bg-gray-800' : 'bg-white',
        "transform-gpu perspective-1000"
      )}>
        {/* Progress Bar */}
        <motion.div
          initial={{ scaleX: 1, opacity: 0.7 }}
          animate={{ scaleX: 0, opacity: 1 }}
          transition={{ duration: duration / 1000, ease: "linear" }}
          style={{ originX: 0 }}
          className={clsx(
            "absolute top-0 left-0 right-0 h-1",
            theme === 'dark' ? 'bg-indigo-400' : 'bg-indigo-500'
          )}
        />

        {/* Content */}
        <div className="p-4">
          {/* Header */}
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center space-x-2">
              <span className={clsx(
                "flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center",
                theme === 'dark' ? 'bg-indigo-900/50' : 'bg-indigo-100'
              )}>
                {icon}
              </span>
              <h6 className={clsx(
                "font-semibold",
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              )}>
                Notification
              </h6>
            </div>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={close}
              className={clsx(
                "w-6 h-6 rounded-full flex items-center justify-center",
                theme === 'dark' 
                  ? 'hover:bg-gray-700 text-gray-400' 
                  : 'hover:bg-gray-100 text-gray-500'
              )}
            >
              ×
            </motion.button>
          </div>

          {/* Message */}
          <p className={clsx(
            "text-sm mb-3",
            theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
          )}>
            {message}
          </p>

          {/* Action Button */}
          {actionButton && (
            <div className="flex justify-end">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={actionButton.onClick}
                className={clsx(
                  "px-3 py-1 text-sm font-medium rounded-full",
                  theme === 'dark'
                    ? 'bg-indigo-900/50 text-indigo-200 hover:bg-indigo-900/70'
                    : 'bg-indigo-100 text-indigo-700 hover:bg-indigo-200'
                )}
              >
                {actionButton.label}
              </motion.button>
            </div>
          )}
        </div>

        {/* Bottom Border Gradient */}
        <div className={clsx(
          "h-1 bg-gradient-to-r",
          theme === 'dark'
            ? 'from-indigo-500 via-purple-500 to-pink-500'
            : 'from-indigo-400 via-purple-400 to-pink-400'
        )} />
      </div>
    </motion.div>
  );
};

export default React.memo(Toast_25); 