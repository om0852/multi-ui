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

const Toast_25: React.FC<ExtendedToastProps> = ({
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
      case "bounce":
        return {
          initial: { rotateX: -45, opacity: 0, y: -30 },
          animate: { rotateX: 0, opacity: 1, y: 0 },
          exit: { rotateX: 45, opacity: 0, y: 30 },
          transition: { type: "spring", stiffness: 300, damping: 15 }
        };
      case "slide":
        return {
          initial: { x: 300, opacity: 0 },
          animate: { x: 0, opacity: 1 },
          exit: { x: 300, opacity: 0 },
          transition: { type: "spring", stiffness: 200, damping: 20 }
        };
      default:
        return {
          initial: { rotateX: -90, opacity: 0, y: -50 },
          animate: { rotateX: 0, opacity: 1, y: 0 },
          exit: { rotateX: 90, opacity: 0, y: 50 },
          transition: { type: "spring", stiffness: 150, damping: 15 }
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
      {/* Card Container */}
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
              <button
                onClick={actionButton.onClick}
                className={clsx(
                  "mt-2 text-xs font-medium px-2 py-1 rounded",
                  theme === 'dark'
                    ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                )}
              >
                {actionButton.label}
              </button>
            )}
          </div>

          {/* Close Button */}
          <button
            onClick={close}
            className={clsx(
              "flex-shrink-0 w-5 h-5 flex items-center justify-center rounded-full",
              theme === 'dark'
                ? 'text-gray-400 hover:text-white hover:bg-gray-700'
                : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100'
            )}
          >
            ×
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default React.memo(Toast_25); 