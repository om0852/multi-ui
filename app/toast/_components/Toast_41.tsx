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

const Toast_41: React.FC<ExtendedToastProps> = ({
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
          initial: { x: 300, opacity: 0, rotateY: -45 },
          animate: { x: 0, opacity: 1, rotateY: 0 },
          exit: { x: 300, opacity: 0, rotateY: 45 },
          transition: { type: "spring", stiffness: 200, damping: 20 }
        };
      case "bounce":
        return {
          initial: { scale: 0.9, y: -20, opacity: 0, rotateX: -45 },
          animate: { scale: 1, y: 0, opacity: 1, rotateX: 0 },
          exit: { scale: 0.9, y: -20, opacity: 0, rotateX: 45 },
          transition: { type: "spring", stiffness: 300, damping: 15 }
        };
      default:
        return {
          initial: { scale: 0.9, opacity: 0, rotateY: -45 },
          animate: { scale: 1, opacity: 1, rotateY: 0 },
          exit: { scale: 0.9, opacity: 0, rotateY: 45 },
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
        "perspective-[1000px]"
      )}
    >
      {/* 3D Card Container */}
      <div className={clsx(
        "relative p-4 rounded-2xl transform-gpu",
        theme === 'dark'
          ? 'bg-gradient-to-br from-gray-800 to-gray-900'
          : 'bg-gradient-to-br from-gray-50 to-white',
        "shadow-[0_10px_20px_rgba(0,0,0,0.2)]",
        "border",
        theme === 'dark' ? 'border-gray-700' : 'border-gray-200'
      )}>
        {/* 3D Lighting Effect */}
        <div className={clsx(
          "absolute inset-0 rounded-2xl",
          "bg-gradient-to-tr",
          theme === 'dark'
            ? 'from-transparent via-gray-800/50 to-white/5'
            : 'from-transparent via-gray-50/50 to-white/80'
        )} />

        {/* Progress Bar */}
        <motion.div
          initial={{ scaleX: 1 }}
          animate={{ scaleX: 0 }}
          transition={{ duration: duration / 1000, ease: "linear" }}
          style={{ originX: 0 }}
          className={clsx(
            "absolute bottom-0 left-0 right-0 h-1 rounded-full",
            theme === 'dark'
              ? 'bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600'
              : 'bg-gradient-to-r from-blue-500 via-blue-400 to-blue-500'
          )}
        />

        <div className="relative flex items-start space-x-3">
          {/* Icon */}
          {icon && (
            <motion.div
              animate={{ 
                rotateY: [0, 180, 360],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className={clsx(
                "flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center",
                theme === 'dark'
                  ? 'bg-gray-700/80 text-white shadow-lg'
                  : 'bg-white/80 text-gray-900 shadow-md',
                "transform-gpu preserve-3d"
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
                whileHover={{ scale: 1.02, translateZ: 10 }}
                whileTap={{ scale: 0.98, translateZ: 5 }}
                onClick={actionButton.onClick}
                className={clsx(
                  "mt-2 text-xs font-medium px-4 py-2 rounded-lg",
                  "transform-gpu transition-all duration-200",
                  theme === 'dark'
                    ? 'bg-gray-700/80 text-white hover:bg-gray-600/80 shadow-lg'
                    : 'bg-white/80 text-gray-900 hover:bg-gray-50/80 shadow-md'
                )}
              >
                {actionButton.label}
              </motion.button>
            )}
          </div>

          {/* Close Button */}
          <motion.button
            onClick={close}
            whileHover={{ scale: 1.1, rotateZ: 180 }}
            whileTap={{ scale: 0.9 }}
            className={clsx(
              "flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-lg",
              "transform-gpu transition-all duration-200",
              theme === 'dark'
                ? 'bg-gray-700/80 text-white/70 hover:text-white hover:bg-gray-600/80'
                : 'bg-white/80 text-gray-600 hover:text-gray-900 hover:bg-gray-50/80'
            )}
          >
            ×
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default React.memo(Toast_41); 