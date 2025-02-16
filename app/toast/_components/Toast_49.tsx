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

const Toast_49: React.FC<ExtendedToastProps> = ({
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
          initial: { x: 300, opacity: 0, rotate: -5 },
          animate: { x: 0, opacity: 1, rotate: 0 },
          exit: { x: 300, opacity: 0, rotate: 5 },
          transition: { type: "spring", stiffness: 200, damping: 20 }
        };
      case "bounce":
        return {
          initial: { y: -50, opacity: 0, scale: 0.9 },
          animate: { y: 0, opacity: 1, scale: 1 },
          exit: { y: 50, opacity: 0, scale: 0.9 },
          transition: { type: "spring", stiffness: 300, damping: 15 }
        };
      default:
        return {
          initial: { scale: 0.9, opacity: 0, rotate: -5 },
          animate: { scale: 1, opacity: 1, rotate: 0 },
          exit: { scale: 0.9, opacity: 0, rotate: 5 },
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
      {/* Gradient Container */}
      <div className={clsx(
        "relative p-4 rounded-2xl overflow-hidden",
        theme === 'dark'
          ? 'bg-gradient-to-br from-violet-600 via-fuchsia-500 to-pink-500'
          : 'bg-gradient-to-br from-violet-400 via-fuchsia-300 to-pink-300',
        "shadow-lg"
      )}>
        {/* Animated Gradient Overlay */}
        <motion.div
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
            opacity: [0.7, 0.5, 0.7]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          }}
          className={clsx(
            "absolute inset-0",
            "bg-gradient-to-tl",
            theme === 'dark'
              ? 'from-black/20 via-transparent to-white/10'
              : 'from-black/10 via-transparent to-white/20',
            "bg-[length:200%_200%]"
          )}
        />

        {/* Shimmer Effect */}
        <motion.div
          animate={{
            x: ['-100%', '100%'],
            opacity: [0, 0.1, 0]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className={clsx(
            "absolute inset-0 skew-x-12",
            "bg-gradient-to-r from-transparent via-white to-transparent"
          )}
        />

        {/* Progress Bar */}
        <motion.div
          initial={{ scaleX: 1 }}
          animate={{ scaleX: 0 }}
          transition={{ duration: duration / 1000, ease: "linear" }}
          style={{ originX: 0 }}
          className={clsx(
            "absolute bottom-0 left-0 right-0 h-1",
            theme === 'dark'
              ? 'bg-gradient-to-r from-white/30 via-white/20 to-white/30'
              : 'bg-gradient-to-r from-black/20 via-black/10 to-black/20'
          )}
        />

        <div className="relative flex items-start space-x-4">
          {/* Icon */}
          {icon && (
            <motion.div
              animate={{ 
                scale: [1, 1.1, 1],
                rotate: [0, 10, -10, 0]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className={clsx(
                "flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center",
                theme === 'dark'
                  ? 'bg-white/20 text-white'
                  : 'bg-black/10 text-black',
                "backdrop-blur-sm"
              )}
            >
              <span className="text-xl">{icon}</span>
            </motion.div>
          )}

          {/* Content */}
          <div className="flex-1 min-w-0 pt-1">
            <p className={clsx(
              "text-sm font-medium",
              theme === 'dark' ? 'text-white' : 'text-black'
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
                  "mt-3 px-4 py-1.5 text-xs font-medium rounded-lg",
                  theme === 'dark'
                    ? 'bg-white/20 text-white hover:bg-white/30'
                    : 'bg-black/10 text-black hover:bg-black/20',
                  "backdrop-blur-sm",
                  "transition-colors duration-200"
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
              "flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center",
              theme === 'dark'
                ? 'bg-white/20 text-white hover:bg-white/30'
                : 'bg-black/10 text-black hover:bg-black/20',
              "backdrop-blur-sm",
              "transition-colors duration-200"
            )}
          >
            ×
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default React.memo(Toast_49); 