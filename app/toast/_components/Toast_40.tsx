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

const Toast_40: React.FC<ExtendedToastProps> = ({
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
      {/* Frosted Glass Container */}
      <div className={clsx(
        "relative p-4 rounded-2xl backdrop-blur-lg",
        theme === 'dark'
          ? 'bg-white/10'
          : 'bg-black/5',
        "border border-white/20 shadow-lg"
      )}>
        {/* Shimmer Effect */}
        <motion.div
          animate={{
            opacity: [0.4, 0.8, 0.4],
            backgroundPosition: ['200% 50%', '-200% 50%']
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear"
          }}
          className={clsx(
            "absolute inset-0 rounded-2xl",
            "bg-gradient-to-r from-transparent via-white/10 to-transparent",
            "bg-[size:200%_100%]",
            "pointer-events-none"
          )}
        />

        {/* Progress Bar */}
        <motion.div
          initial={{ scaleX: 1 }}
          animate={{ scaleX: 0 }}
          transition={{ duration: duration / 1000, ease: "linear" }}
          style={{ originX: 0 }}
          className={clsx(
            "absolute bottom-0 left-0 right-0 h-0.5",
            theme === 'dark'
              ? 'bg-gradient-to-r from-white/40 via-white/60 to-white/40'
              : 'bg-gradient-to-r from-black/20 via-black/40 to-black/20'
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
                "flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center backdrop-blur-md",
                theme === 'dark'
                  ? 'bg-white/10 text-white'
                  : 'bg-black/5 text-black'
              )}
            >
              <span className="text-xl">{icon}</span>
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
                  "mt-2 text-xs font-medium px-4 py-1.5 rounded-lg backdrop-blur-md",
                  theme === 'dark'
                    ? 'bg-white/10 text-white hover:bg-white/20'
                    : 'bg-black/5 text-gray-900 hover:bg-black/10'
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
              "flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-lg backdrop-blur-md",
              theme === 'dark'
                ? 'text-white/70 hover:text-white bg-white/10 hover:bg-white/20'
                : 'text-gray-600 hover:text-gray-900 bg-black/5 hover:bg-black/10'
            )}
          >
            ×
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default React.memo(Toast_40);