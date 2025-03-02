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

const Toast_48: React.FC<ExtendedToastProps> = ({
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
          initial: { x: 300, opacity: 0, backdropFilter: "blur(0px)" },
          animate: { x: 0, opacity: 1, backdropFilter: "blur(16px)" },
          exit: { x: 300, opacity: 0, backdropFilter: "blur(0px)" },
          transition: { type: "spring", stiffness: 200, damping: 20 }
        };
      case "bounce":
        return {
          initial: { y: -50, opacity: 0, backdropFilter: "blur(0px)" },
          animate: { y: 0, opacity: 1, backdropFilter: "blur(16px)" },
          exit: { y: 50, opacity: 0, backdropFilter: "blur(0px)" },
          transition: { type: "spring", stiffness: 300, damping: 15 }
        };
      default:
        return {
          initial: { opacity: 0, backdropFilter: "blur(0px)" },
          animate: { opacity: 1, backdropFilter: "blur(16px)" },
          exit: { opacity: 0, backdropFilter: "blur(0px)" },
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
      {/* Glassmorphic Container */}
      <div className={clsx(
        "relative p-4 rounded-2xl overflow-hidden",
        theme === 'dark'
          ? 'bg-black/20'
          : 'bg-white/20',
        "backdrop-blur-xl",
        "border",
        theme === 'dark'
          ? 'border-white/10'
          : 'border-white/30',
        "shadow-lg shadow-black/5"
      )}>
        {/* Glass Reflection */}
        <div className={clsx(
          "absolute -inset-1 rounded-2xl",
          "bg-gradient-to-br",
          theme === 'dark'
            ? 'from-white/5 via-transparent to-black/5'
            : 'from-white/40 via-transparent to-black/5'
        )} />

        {/* Glass Highlight */}
        <div className={clsx(
          "absolute top-0 left-0 right-0 h-px",
          theme === 'dark'
            ? 'bg-gradient-to-r from-transparent via-white/10 to-transparent'
            : 'bg-gradient-to-r from-transparent via-white/30 to-transparent'
        )} />

        {/* Progress Bar */}
        <div className={clsx(
          "absolute bottom-0 left-0 right-0 h-px overflow-hidden",
          theme === 'dark'
            ? 'bg-white/5'
            : 'bg-black/5'
        )}>
          <motion.div
            initial={{ scaleX: 1 }}
            animate={{ scaleX: 0 }}
            transition={{ duration: duration / 1000, ease: "linear" }}
            style={{ originX: 0 }}
            className={clsx(
              "h-full w-full",
              theme === 'dark'
                ? 'bg-white/20'
                : 'bg-black/20'
            )}
          />
        </div>

        <div className="relative flex items-start space-x-4">
          {/* Icon */}
          {icon && (
            <motion.div
              animate={{ 
                scale: [1, 1.05, 1],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className={clsx(
                "flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center",
                theme === 'dark'
                  ? 'bg-white/10 text-white/80'
                  : 'bg-black/10 text-black/80',
                "backdrop-blur-sm",
                "border",
                theme === 'dark'
                  ? 'border-white/10'
                  : 'border-black/10'
              )}
            >
              <span className="text-xl">{icon}</span>
            </motion.div>
          )}

          {/* Content */}
          <div className="flex-1 min-w-0 pt-1">
            <p className={clsx(
              "text-sm font-medium",
              theme === 'dark' ? 'text-white/90' : 'text-black/90'
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
                  "backdrop-blur-sm",
                  theme === 'dark'
                    ? 'bg-white/10 text-white/80 hover:bg-white/20'
                    : 'bg-black/10 text-black/80 hover:bg-black/20',
                  "border",
                  theme === 'dark'
                    ? 'border-white/10'
                    : 'border-black/10',
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
              "backdrop-blur-sm",
              theme === 'dark'
                ? 'bg-white/10 text-white/80 hover:bg-white/20'
                : 'bg-black/10 text-black/80 hover:bg-black/20',
              "border",
              theme === 'dark'
                ? 'border-white/10'
                : 'border-black/10',
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

export default React.memo(Toast_48); 