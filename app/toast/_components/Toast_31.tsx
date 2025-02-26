import React, { useEffect } from "react";
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

const Toast_31: React.FC<ExtendedToastProps> = ({
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

  const getAnimationConfig = () => {
    switch (animationType) {
      case "slide":
        return {
          initial: { x: -100, opacity: 0 },
          animate: { x: 0, opacity: 1 },
          exit: { x: -100, opacity: 0 },
          transition: { type: "spring", stiffness: 200, damping: 20 }
        };
      case "zoom":
        return {
          initial: { scale: 0.5, opacity: 0 },
          animate: { scale: 1, opacity: 1 },
          exit: { scale: 0.5, opacity: 0 },
          transition: { type: "spring", stiffness: 300, damping: 25 }
        };
      default:
        return {
          initial: { y: -50, opacity: 0 },
          animate: { y: 0, opacity: 1 },
          exit: { y: 50, opacity: 0 },
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
        "w-[320px]",
        positionClasses[position],
        stack ? "static" : "fixed",
      )}
    >
      {/* Minimalist Container */}
      <div className={clsx(
        "relative p-4 rounded-lg",
        theme === 'dark'
          ? 'bg-gray-800 border border-gray-700'
          : 'bg-white border border-gray-200',
        "shadow-lg"
      )}>
        {/* Progress Bar */}
        <motion.div
          initial={{ scaleX: 1 }}
          animate={{ scaleX: 0 }}
          transition={{ duration: duration / 1000, ease: "linear" }}
          style={{ originX: 0 }}
          className={clsx(
            "absolute bottom-0 left-0 right-0 h-0.5",
            theme === 'dark' ? 'bg-gray-600' : 'bg-gray-300'
          )}
        />

        <div className="flex items-start space-x-3">
          {/* Icon */}
          {icon && (
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className={clsx(
                "flex-shrink-0 w-8 h-8 rounded-md flex items-center justify-center",
                theme === 'dark'
                  ? 'bg-gray-700'
                  : 'bg-gray-100'
              )}
            >
              <span className="text-lg">{icon}</span>
            </motion.div>
          )}

          {/* Content */}
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
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={actionButton.onClick}
                className={clsx(
                  "mt-2 text-xs font-medium px-3 py-1 rounded-md transition-colors",
                  theme === 'dark'
                    ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
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
              "flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-md",
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

export default React.memo(Toast_31); 