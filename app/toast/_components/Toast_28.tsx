import React from "react";
import { motion } from "framer-motion";
import clsx from "clsx";
import { animationVariants, ThemeClassesBorder, positionClasses, useToastTimer } from "./utils";
import { ToastProps } from "./toast-context";

const Toast_28: React.FC<ToastProps> = ({
  message,
  close,
  icon,
  position = "top-center",
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
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.8, opacity: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={clsx(
        "relative z-50",
        "w-[300px]",
        positionClasses[position],
        stack ? "static" : "fixed",
      )}
    >
      {/* Main Container */}
      <div className={clsx(
        "relative overflow-hidden rounded-2xl p-1",
        theme === 'dark'
          ? 'bg-gray-800 shadow-[inset_-2px_-2px_4px_rgba(255,255,255,0.1),inset_2px_2px_4px_rgba(0,0,0,0.5)]'
          : 'bg-gray-100 shadow-[inset_-2px_-2px_4px_rgba(255,255,255,0.7),inset_2px_2px_4px_rgba(0,0,0,0.2)]'
      )}>
        {/* Content Container */}
        <div className={clsx(
          "rounded-xl p-4",
          theme === 'dark'
            ? 'bg-gray-900 shadow-[4px_4px_8px_rgba(0,0,0,0.5),-4px_-4px_8px_rgba(255,255,255,0.1)]'
            : 'bg-white shadow-[4px_4px_8px_rgba(0,0,0,0.1),-4px_-4px_8px_rgba(255,255,255,0.9)]'
        )}>
          <div className="flex items-start space-x-3">
            {/* Icon with Pulse Effect */}
            <motion.div
              animate={{
                boxShadow: [
                  "0 0 0 0px rgba(59, 130, 246, 0.5)",
                  "0 0 0 4px rgba(59, 130, 246, 0)",
                ],
              }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className={clsx(
                "flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center",
                theme === 'dark'
                  ? 'bg-gray-800 shadow-[inset_1px_1px_2px_rgba(255,255,255,0.1),-1px_-1px_2px_rgba(0,0,0,0.5)]'
                  : 'bg-gray-50 shadow-[inset_1px_1px_2px_rgba(0,0,0,0.1),-1px_-1px_2px_rgba(255,255,255,0.9)]'
              )}
            >
              {icon}
            </motion.div>

            {/* Message */}
            <div className="flex-1 min-w-0">
              <p className={clsx(
                "text-sm font-medium",
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              )}>
                {message}
              </p>

              {/* Action Button */}
              {actionButton && (
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={actionButton.onClick}
                  className={clsx(
                    "mt-2 text-xs font-medium px-4 py-1.5 rounded-lg transition-all duration-200",
                    theme === 'dark'
                      ? 'bg-gray-800 text-gray-300 shadow-[2px_2px_4px_rgba(0,0,0,0.5),-2px_-2px_4px_rgba(255,255,255,0.1)] hover:shadow-[1px_1px_2px_rgba(0,0,0,0.5),-1px_-1px_2px_rgba(255,255,255,0.1)]'
                      : 'bg-gray-50 text-gray-700 shadow-[2px_2px_4px_rgba(0,0,0,0.1),-2px_-2px_4px_rgba(255,255,255,0.9)] hover:shadow-[1px_1px_2px_rgba(0,0,0,0.1),-1px_-1px_2px_rgba(255,255,255,0.9)]'
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
                "flex-shrink-0 rounded-lg p-1.5",
                theme === 'dark'
                  ? 'text-gray-400 shadow-[2px_2px_4px_rgba(0,0,0,0.5),-2px_-2px_4px_rgba(255,255,255,0.1)]'
                  : 'text-gray-500 shadow-[2px_2px_4px_rgba(0,0,0,0.1),-2px_-2px_4px_rgba(255,255,255,0.9)]'
              )}
            >
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </motion.button>
          </div>
        </div>

        {/* Circular Progress */}
        <svg className="absolute bottom-1 right-1 w-4 h-4">
          <motion.circle
            initial={{ pathLength: 1 }}
            animate={{ pathLength: 0 }}
            transition={{ duration: duration / 1000, ease: "linear" }}
            stroke={theme === 'dark' ? '#60A5FA' : '#3B82F6'}
            strokeWidth={2}
            fill="none"
            r={6}
            cx={8}
            cy={8}
            strokeLinecap="round"
          />
        </svg>
      </div>
    </motion.div>
  );
};

export default React.memo(Toast_28); 