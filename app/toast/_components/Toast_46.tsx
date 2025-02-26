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

const Toast_46: React.FC<ExtendedToastProps> = ({
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
          initial: { x: 300, opacity: 0, scale: 0.95 },
          animate: { x: 0, opacity: 1, scale: 1 },
          exit: { x: 300, opacity: 0, scale: 0.95 },
          transition: { type: "spring", stiffness: 200, damping: 20 }
        };
      case "bounce":
        return {
          initial: { y: -50, opacity: 0, scale: 0.95 },
          animate: { y: 0, opacity: 1, scale: 1 },
          exit: { y: 50, opacity: 0, scale: 0.95 },
          transition: { type: "spring", stiffness: 300, damping: 15 }
        };
      default:
        return {
          initial: { opacity: 0, scale: 0.95 },
          animate: { opacity: 1, scale: 1 },
          exit: { opacity: 0, scale: 0.95 },
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
        stack ? "static" : "fixed"
      )}
    >
      {/* Minimalist Container */}
      <div className={clsx(
        "relative p-4 rounded-lg",
        theme === 'dark'
          ? 'bg-neutral-900'
          : 'bg-white',
        "shadow-[0_2px_8px_rgba(0,0,0,0.1)]",
        "border",
        theme === 'dark' ? 'border-neutral-800' : 'border-neutral-100'
      )}>
        {/* Accent Line */}
        <div className={clsx(
          "absolute top-0 left-0 w-1 h-full",
          theme === 'dark'
            ? 'bg-neutral-700'
            : 'bg-neutral-200'
        )} />

        {/* Progress Bar */}
        <motion.div
          initial={{ scaleX: 1 }}
          animate={{ scaleX: 0 }}
          transition={{ duration: duration / 1000, ease: "linear" }}
          style={{ originX: 0 }}
          className={clsx(
            "absolute bottom-0 left-0 right-0 h-px",
            theme === 'dark'
              ? 'bg-neutral-700'
              : 'bg-neutral-200'
          )}
        />

        <div className="relative flex items-start space-x-4 pl-3">
          {/* Icon */}
          {icon && (
            <motion.div
              animate={{ 
                y: [0, -2, 0],
                scale: [1, 1.05, 1]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className={clsx(
                "flex-shrink-0 w-8 h-8 rounded flex items-center justify-center",
                theme === 'dark'
                  ? 'text-neutral-400'
                  : 'text-neutral-600'
              )}
            >
              <span className="text-lg">{icon}</span>
            </motion.div>
          )}

          {/* Content */}
          <div className="flex-1 min-w-0 pt-0.5">
            <p className={clsx(
              "text-sm font-medium leading-5",
              theme === 'dark' ? 'text-neutral-200' : 'text-neutral-800'
            )}>
              {message}
            </p>

            {/* Action Button */}
            {actionButton && (
              <motion.button
                whileHover={{ x: 2 }}
                whileTap={{ scale: 0.98 }}
                onClick={actionButton.onClick}
                className={clsx(
                  "mt-2 text-xs font-medium",
                  theme === 'dark'
                    ? 'text-neutral-400 hover:text-neutral-200'
                    : 'text-neutral-600 hover:text-neutral-800',
                  "transition-colors duration-200"
                )}
              >
                {actionButton.label} →
              </motion.button>
            )}
          </div>

          {/* Close Button */}
          <motion.button
            onClick={close}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className={clsx(
              "flex-shrink-0 w-6 h-6 flex items-center justify-center rounded",
              theme === 'dark'
                ? 'text-neutral-500 hover:text-neutral-300'
                : 'text-neutral-400 hover:text-neutral-600',
              "transition-colors duration-200"
            )}
          >
            <span className="text-lg leading-none">×</span>
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default React.memo(Toast_46); 