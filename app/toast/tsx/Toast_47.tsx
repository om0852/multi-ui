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

const Toast_47: React.FC<ExtendedToastProps> = ({
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
      {/* Neumorphic Container */}
      <div className={clsx(
        "relative p-4 rounded-2xl",
        theme === 'dark'
          ? 'bg-[#2a2a2a]'
          : 'bg-[#e0e0e0]',
        theme === 'dark'
          ? 'shadow-[8px_8px_16px_#1a1a1a,-8px_-8px_16px_#3a3a3a]'
          : 'shadow-[8px_8px_16px_#bebebe,-8px_-8px_16px_#ffffff]'
      )}>
        {/* Inner Shadow Effect */}
        <div className={clsx(
          "absolute inset-0 rounded-2xl",
          theme === 'dark'
            ? 'shadow-[inset_1px_1px_2px_#1a1a1a,inset_-1px_-1px_2px_#3a3a3a]'
            : 'shadow-[inset_1px_1px_2px_#bebebe,inset_-1px_-1px_2px_#ffffff]'
        )} />

        {/* Progress Bar */}
        <div className={clsx(
          "absolute bottom-2 left-4 right-4 h-1 rounded-full overflow-hidden",
          theme === 'dark'
            ? 'bg-[#1a1a1a] shadow-[inset_1px_1px_2px_#000000]'
            : 'bg-[#d0d0d0] shadow-[inset_1px_1px_2px_#a0a0a0]'
        )}>
          <motion.div
            initial={{ scaleX: 1 }}
            animate={{ scaleX: 0 }}
            transition={{ duration: duration / 1000, ease: "linear" }}
            style={{ originX: 0 }}
            className={clsx(
              "h-full w-full rounded-full",
              theme === 'dark'
                ? 'bg-gradient-to-r from-[#404040] to-[#303030]'
                : 'bg-gradient-to-r from-[#f0f0f0] to-[#e0e0e0]'
            )}
          />
        </div>

        <div className="relative flex items-start space-x-4">
          {/* Icon */}
          {icon && (
            <motion.div
              animate={{ 
                scale: [1, 1.05, 1]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className={clsx(
                "flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center",
                theme === 'dark'
                  ? 'bg-[#2a2a2a] shadow-[3px_3px_6px_#1a1a1a,-3px_-3px_6px_#3a3a3a]'
                  : 'bg-[#e0e0e0] shadow-[3px_3px_6px_#bebebe,-3px_-3px_6px_#ffffff]',
                theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
              )}
            >
              <span className="text-xl">{icon}</span>
            </motion.div>
          )}

          {/* Content */}
          <div className="flex-1 min-w-0 pt-1">
            <p className={clsx(
              "text-sm font-medium",
              theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
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
                    ? 'bg-[#2a2a2a] shadow-[2px_2px_4px_#1a1a1a,-2px_-2px_4px_#3a3a3a] text-gray-400'
                    : 'bg-[#e0e0e0] shadow-[2px_2px_4px_#bebebe,-2px_-2px_4px_#ffffff] text-gray-600',
                  "active:shadow-[inset_2px_2px_4px_#1a1a1a,inset_-2px_-2px_4px_#3a3a3a]"
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
              "flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center",
              theme === 'dark'
                ? 'bg-[#2a2a2a] shadow-[2px_2px_4px_#1a1a1a,-2px_-2px_4px_#3a3a3a] text-gray-400'
                : 'bg-[#e0e0e0] shadow-[2px_2px_4px_#bebebe,-2px_-2px_4px_#ffffff] text-gray-600',
              "active:shadow-[inset_2px_2px_4px_#1a1a1a,inset_-2px_-2px_4px_#3a3a3a]"
            )}
          >
            ×
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default React.memo(Toast_47); 