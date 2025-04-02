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

const Toast_27: React.FC<ExtendedToastProps> = ({
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
      case "slide":
        return {
          initial: { x: 300, opacity: 0 },
          animate: { x: 0, opacity: 1 },
          exit: { x: 300, opacity: 0 },
          transition: { type: "spring", stiffness: 200, damping: 20 }
        };
      case "fade":
        return {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          exit: { opacity: 0 },
          transition: { type: "spring", stiffness: 200, damping: 20 }
        };
      default:
        return {
          initial: { y: -50, opacity: 0 },
          animate: { y: 0, opacity: 1 },
          exit: { y: -50, opacity: 0 },
          transition: { type: "spring", stiffness: 200, damping: 20 }
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
        "relative overflow-hidden",
        theme === 'dark' ? 'bg-gray-900' : 'bg-white',
        "shadow-lg rounded-lg"
      )}>
        {/* Glowing Border */}
        <motion.div
          animate={{
            background: [
              "linear-gradient(0deg, #3B82F6, #8B5CF6)",
              "linear-gradient(90deg, #8B5CF6, #EC4899)",
              "linear-gradient(180deg, #EC4899, #3B82F6)",
              "linear-gradient(270deg, #3B82F6, #8B5CF6)",
            ],
          }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute inset-0 p-[1px] rounded-lg"
        >
          <div className={clsx(
            "absolute inset-0 rounded-lg",
            theme === 'dark' ? 'bg-gray-900' : 'bg-white'
          )} />
        </motion.div>

        {/* Content Container */}
        <div className="relative p-4">
          <div className="flex items-start space-x-3">
            {/* Icon */}
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className={clsx(
                "flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center",
                theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'
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
                    "mt-2 text-xs font-medium px-3 py-1 rounded-lg",
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
              onClick={close}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className={clsx(
                "flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full",
                theme === 'dark'
                  ? 'text-gray-400 hover:text-white hover:bg-gray-800'
                  : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100'
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
            "absolute bottom-0 left-0 right-0 h-0.5",
            theme === 'dark' ? 'bg-blue-400' : 'bg-blue-500'
          )}
        />
      </div>
    </motion.div>
  );
};

export default React.memo(Toast_27); 