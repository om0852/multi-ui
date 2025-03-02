import React from "react";
import { motion } from "framer-motion";
import clsx from "clsx";
import { animationVariants, ThemeClassesBorder, positionClasses, useToastTimer } from "./utils";
import { ToastProps } from "./toast-context";

const Toast_23: React.FC<ToastProps> = ({
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
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={animationVariants[animationType]}
      transition={{ type: "spring", stiffness: 120, damping: 20 }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={clsx(
        "relative flex items-center justify-between p-4 rounded-xl shadow-2xl z-50",
        "w-[350px] min-h-[90px]",
        "backdrop-blur-md",
        theme === 'dark' 
          ? 'bg-gray-800 text-white border-gray-700' 
          : 'bg-white text-gray-900 border-gray-200',
        ThemeClassesBorder[theme],
        positionClasses[position],
        stack ? "static" : "fixed",
      )}
    >
      {/* Progress Bar */}
      <motion.div
        initial={{ scaleX: 1 }}
        animate={{ scaleX: 0 }}
        transition={{ duration: duration / 1000, ease: "linear" }}
        style={{ originX: 0 }}
        className={clsx(
          "absolute bottom-0 left-0 right-0 h-1",
          theme === 'dark' ? 'bg-blue-400' : 'bg-blue-500'
        )}
      />

      {/* Content Container */}
      <div className="flex items-center space-x-4 flex-1">
        {/* Icon with Pulse Effect */}
        <div className="relative">
          <div className="text-2xl">{icon}</div>
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className={clsx(
              "absolute inset-0 rounded-full -z-10 opacity-50",
              theme === 'dark' ? 'bg-blue-400' : 'bg-blue-500'
            )}
          />
        </div>

        {/* Message with Optional Title */}
        <div className="flex-1">
          <h6 className={clsx(
            "font-semibold",
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          )}>
            Notification
          </h6>
          <p className={clsx(
            "text-sm",
            theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
          )}>{message}</p>
        </div>

        {/* Actions Container */}
        <div className="flex items-center space-x-2">
          {actionButton && (
            <button
              onClick={actionButton.onClick}
              className={clsx(
                "px-3 py-1 text-sm font-medium text-white rounded-lg transition-colors",
                theme === 'dark' ? 'bg-blue-400 hover:bg-blue-500' : 'bg-blue-500 hover:bg-blue-600'
              )}
            >
              {actionButton.label}
            </button>
          )}

          {/* Close Button with Hover Effect */}
          <button
            onClick={close}
            className={clsx(
              "p-1 rounded-lg transition-colors",
              theme === 'dark' 
                ? 'hover:bg-gray-700 text-gray-400' 
                : 'hover:bg-gray-200 text-gray-600'
            )}
            aria-label="Close Toast"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default React.memo(Toast_23); 