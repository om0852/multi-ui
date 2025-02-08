import React from "react";
import { motion } from "framer-motion";
import clsx from "clsx";
import { animationVariants, ThemeClassesBorder, positionClasses, useToastTimer } from "./utils";
import { ToastProps } from "./toast-context";

const Toast_26: React.FC<ToastProps> = ({
  message,
  close,
  icon,
  position = "bottom-right",
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
      initial={{ scale: 0, opacity: 0 }}
      animate={{ 
        scale: 1, 
        opacity: 1,
        y: [0, -10, 0],
        transition: {
          y: {
            repeat: Infinity,
            duration: 2,
            ease: "easeInOut"
          }
        }
      }}
      exit={{ scale: 0, opacity: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={clsx(
        "relative z-50",
        "w-[280px]",
        positionClasses[position],
        stack ? "static" : "fixed",
      )}
    >
      {/* Bubble Container */}
      <div className={clsx(
        "relative rounded-full p-4 shadow-lg backdrop-blur-sm",
        theme === 'dark' 
          ? 'bg-gray-900/90 text-white' 
          : 'bg-white/90 text-gray-900',
      )}>
        {/* Floating Bubbles Background */}
        <div className="absolute inset-0 overflow-hidden rounded-full">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className={clsx(
                "absolute w-16 h-16 rounded-full opacity-10",
                theme === 'dark' ? 'bg-blue-400' : 'bg-blue-500'
              )}
              initial={{ x: -20, y: -20 }}
              animate={{
                x: [0, 20, 0],
                y: [0, -20, 0],
              }}
              transition={{
                duration: 3,
                delay: i * 0.4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              style={{
                left: `${i * 30}%`,
                top: `${i * 20}%`,
              }}
            />
          ))}
        </div>

        {/* Content */}
        <div className="relative flex items-center space-x-3">
          {/* Icon */}
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className={clsx(
              "flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center",
              theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'
            )}
          >
            <span className="text-xl">{icon}</span>
          </motion.div>

          {/* Message */}
          <div className="flex-1">
            <p className="text-sm font-medium">{message}</p>
            {actionButton && (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={actionButton.onClick}
                className={clsx(
                  "mt-2 text-xs font-medium px-3 py-1 rounded-full",
                  theme === 'dark'
                    ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
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
              "flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center",
              theme === 'dark'
                ? 'hover:bg-gray-800 text-gray-400'
                : 'hover:bg-gray-100 text-gray-500'
            )}
          >
            ×
          </motion.button>
        </div>

        {/* Progress Ring */}
        <svg
          className="absolute -right-2 -top-2 w-8 h-8"
          viewBox="0 0 32 32"
        >
          <motion.circle
            cx="16"
            cy="16"
            r="14"
            stroke={theme === 'dark' ? '#60A5FA' : '#3B82F6'}
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 1 }}
            animate={{ pathLength: 0 }}
            transition={{ duration: duration / 1000, ease: "linear" }}
          />
        </svg>
      </div>
    </motion.div>
  );
};

export default React.memo(Toast_26); 