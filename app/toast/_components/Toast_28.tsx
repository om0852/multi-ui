import React from "react";
import { motion } from "framer-motion";
import clsx from "clsx";
import { 
  positionClasses, 
  useToastTimer,
  ToastProps,
  ToastAnimationType,
  ToastTheme
} from "./utils";

interface ExtendedToastProps extends Omit<ToastProps, 'theme' | 'animationType'> {
  audio?: string;
  theme?: ToastTheme;
  animationType?: ToastAnimationType;
}

const Toast_28: React.FC<ExtendedToastProps> = ({
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

  const getAnimationConfig = () => {
    switch (animationType) {
      case "zoom":
        return {
          initial: { scale: 0.5, opacity: 0 },
          animate: { scale: 1, opacity: 1 },
          exit: { scale: 0.5, opacity: 0 },
          transition: { type: "spring", stiffness: 350, damping: 25 }
        };
      case "slide":
        return {
          initial: { x: 300, opacity: 0 },
          animate: { x: 0, opacity: 1 },
          exit: { x: 300, opacity: 0 },
          transition: { type: "spring", stiffness: 300, damping: 25 }
        };
      default:
        return {
          initial: { scale: 0.8, opacity: 0 },
          animate: { scale: 1, opacity: 1 },
          exit: { scale: 0.8, opacity: 0 },
          transition: { type: "spring", stiffness: 300, damping: 25 }
        };
    }
  };

  const animation = getAnimationConfig();

  return (
    <motion.div
      {...animation}
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
        "relative p-4 rounded-lg shadow-lg",
        theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-900',
        "border border-gray-200 dark:border-gray-700"
      )}>
        {/* Progress Bar */}
        <motion.div
          initial={{ scaleX: 1 }}
          animate={{ scaleX: 0 }}
          transition={{ duration: duration / 1000, ease: "linear" }}
          style={{ originX: 0 }}
          className={clsx(
            "absolute bottom-0 left-0 right-0 h-1",
            theme === 'dark' ? 'bg-blue-500' : 'bg-blue-600'
          )}
        />

        <div className="flex items-start space-x-3">
          {/* Icon */}
          {icon && (
            <div className={clsx(
              "flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center",
              theme === 'dark' ? 'bg-gray-700' : 'bg-gray-100'
            )}>
              <span className="text-lg">{icon}</span>
            </div>
          )}

          {/* Content */}
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium">
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
            onClick={close}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className={clsx(
              "flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full",
              theme === 'dark'
                ? 'text-gray-400 hover:text-white hover:bg-gray-700'
                : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100'
            )}
          >
            ×
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default React.memo(Toast_28); 