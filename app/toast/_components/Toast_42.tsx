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

const Toast_42: React.FC<ExtendedToastProps> = ({
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
          initial: { x: 300, opacity: 0, rotate: -2 },
          animate: { x: 0, opacity: 1, rotate: 1 },
          exit: { x: 300, opacity: 0, rotate: 2 },
          transition: { type: "spring", stiffness: 200, damping: 20 }
        };
      case "bounce":
        return {
          initial: { scale: 0.9, y: -20, opacity: 0, rotate: -2 },
          animate: { scale: 1, y: 0, opacity: 1, rotate: 1 },
          exit: { scale: 0.9, y: -20, opacity: 0, rotate: 2 },
          transition: { type: "spring", stiffness: 300, damping: 15 }
        };
      default:
        return {
          initial: { scale: 0.9, opacity: 0, rotate: -2 },
          animate: { scale: 1, opacity: 1, rotate: 1 },
          exit: { scale: 0.9, opacity: 0, rotate: 2 },
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
      {/* Paper-like Container */}
      <div className={clsx(
        "relative p-4 rounded-lg",
        theme === 'dark'
          ? 'bg-gray-800'
          : 'bg-amber-50',
        "shadow-[2px_2px_10px_rgba(0,0,0,0.1)]",
        "border",
        theme === 'dark' ? 'border-gray-700' : 'border-amber-200/50',
        "before:absolute before:inset-0 before:bg-[radial-gradient(#fff_0.5px,transparent_1px)] before:bg-[size:16px_16px] before:opacity-5"
      )}>
        {/* Paper Texture */}
        <div className={clsx(
          "absolute inset-0 rounded-lg",
          "bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.05)_25%,rgba(255,255,255,0.05)_50%,transparent_50%,transparent_75%,rgba(255,255,255,0.05)_75%)]",
          "bg-[size:4px_4px]",
          "opacity-30"
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
              ? 'bg-gradient-to-r from-amber-600 to-orange-600'
              : 'bg-gradient-to-r from-amber-500 to-orange-500'
          )}
        />

        <div className="relative flex items-start space-x-3">
          {/* Icon */}
          {icon && (
            <motion.div
              animate={{ 
                rotate: [0, 5, -5, 0],
                scale: [1, 1.05, 0.95, 1]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className={clsx(
                "flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center",
                theme === 'dark'
                  ? 'bg-gray-700/80 text-amber-500'
                  : 'bg-amber-100/80 text-amber-700',
                "border",
                theme === 'dark' ? 'border-gray-600' : 'border-amber-200'
              )}
            >
              <span className="text-xl">{icon}</span>
            </motion.div>
          )}

          {/* Content */}
          <div className="flex-1 min-w-0">
            <p className={clsx(
              "text-sm font-medium",
              theme === 'dark' ? 'text-amber-100' : 'text-amber-900'
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
                  "border",
                  theme === 'dark'
                    ? 'bg-gray-700/80 text-amber-400 border-gray-600 hover:bg-gray-600/80'
                    : 'bg-amber-100/80 text-amber-800 border-amber-200 hover:bg-amber-200/80'
                )}
              >
                {actionButton.label}
              </motion.button>
            )}
          </div>

          {/* Close Button */}
          <motion.button
            onClick={close}
            whileHover={{ scale: 1.1, rotate: 90 }}
            whileTap={{ scale: 0.9 }}
            className={clsx(
              "flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-lg",
              "border",
              theme === 'dark'
                ? 'bg-gray-700/80 text-amber-400/70 hover:text-amber-400 border-gray-600'
                : 'bg-amber-100/80 text-amber-700/70 hover:text-amber-900 border-amber-200'
            )}
          >
            ×
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default React.memo(Toast_42); 