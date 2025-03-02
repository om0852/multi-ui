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

const Toast_37: React.FC<ExtendedToastProps> = ({
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
          initial: { x: 300, opacity: 0 },
          animate: { x: 0, opacity: 1 },
          exit: { x: 300, opacity: 0 },
          transition: { type: "spring", stiffness: 200, damping: 20 }
        };
      case "bounce":
        return {
          initial: { scale: 0.9, y: -20, opacity: 0 },
          animate: { scale: 1, y: 0, opacity: 1 },
          exit: { scale: 0.9, y: -20, opacity: 0 },
          transition: { type: "spring", stiffness: 300, damping: 15 }
        };
      default:
        return {
          initial: { scale: 0.9, opacity: 0 },
          animate: { scale: 1, opacity: 1 },
          exit: { scale: 0.9, opacity: 0 },
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
      {/* Neon Container */}
      <div className={clsx(
        "relative p-4 rounded-lg",
        theme === 'dark'
          ? 'bg-gray-900 border border-pink-500 shadow-[0_0_20px_rgba(236,72,153,0.5)]'
          : 'bg-gray-100 border border-pink-400 shadow-[0_0_20px_rgba(244,114,182,0.3)]',
        "overflow-hidden"
      )}>
        {/* Neon Glow Effect */}
        <div className={clsx(
          "absolute inset-0 blur-sm pointer-events-none",
          theme === 'dark'
            ? 'bg-gradient-to-br from-pink-500/20 via-purple-500/20 to-blue-500/20'
            : 'bg-gradient-to-br from-pink-400/20 via-purple-400/20 to-blue-400/20'
        )} />

        {/* Progress Bar */}
        <motion.div
          initial={{ scaleX: 1 }}
          animate={{ scaleX: 0 }}
          transition={{ duration: duration / 1000, ease: "linear" }}
          style={{ originX: 0 }}
          className={clsx(
            "absolute bottom-0 left-0 right-0 h-0.5",
            theme === 'dark'
              ? 'bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500'
              : 'bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400'
          )}
        />

        <div className="relative flex items-start space-x-3">
          {/* Icon */}
          {icon && (
            <motion.div
              animate={{ 
                scale: [1, 1.1, 1],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className={clsx(
                "flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center",
                theme === 'dark'
                  ? 'bg-gray-800 border border-pink-500 text-pink-500'
                  : 'bg-gray-200 border border-pink-400 text-pink-600'
              )}
            >
              <span className="text-xl">{icon}</span>
            </motion.div>
          )}

          {/* Content */}
          <div className="flex-1 min-w-0">
            <p className={clsx(
              "text-sm font-medium",
              theme === 'dark' ? 'text-pink-500' : 'text-pink-600'
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
                  "mt-2 text-xs font-medium px-4 py-1.5 rounded-lg",
                  theme === 'dark'
                    ? 'bg-gray-800 border border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-gray-900'
                    : 'bg-gray-200 border border-pink-400 text-pink-600 hover:bg-pink-400 hover:text-gray-900'
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
              "flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-lg",
              theme === 'dark'
                ? 'bg-gray-800 border border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-gray-900'
                : 'bg-gray-200 border border-pink-400 text-pink-600 hover:bg-pink-400 hover:text-gray-900'
            )}
          >
            ×
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default React.memo(Toast_37); 