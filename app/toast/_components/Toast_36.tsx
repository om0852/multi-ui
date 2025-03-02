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

const Toast_36: React.FC<ExtendedToastProps> = ({
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
      {/* Retro Container */}
      <div className={clsx(
        "relative p-4 rounded-lg border-2",
        theme === 'dark'
          ? 'bg-gray-900 border-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.5)]'
          : 'bg-gray-100 border-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.3)]'
      )}>
        {/* Scanline Effect */}
        <motion.div
          animate={{
            y: ['-100%', '100%'],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "linear"
          }}
          className={clsx(
            "absolute inset-0 pointer-events-none",
            theme === 'dark'
              ? 'bg-gradient-to-b from-cyan-500/0 via-cyan-500/10 to-cyan-500/0'
              : 'bg-gradient-to-b from-cyan-400/0 via-cyan-400/10 to-cyan-400/0'
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
            theme === 'dark' ? 'bg-cyan-500' : 'bg-cyan-400'
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
                "flex-shrink-0 w-10 h-10 rounded border-2 flex items-center justify-center",
                theme === 'dark'
                  ? 'bg-gray-800 border-cyan-500 text-cyan-500'
                  : 'bg-gray-200 border-cyan-400 text-cyan-600'
              )}
            >
              <span className="text-xl">{icon}</span>
            </motion.div>
          )}

          {/* Content */}
          <div className="flex-1 min-w-0">
            <p className={clsx(
              "text-sm font-medium font-mono",
              theme === 'dark' ? 'text-cyan-500' : 'text-cyan-600'
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
                  "mt-2 text-xs font-mono font-medium px-4 py-1.5 rounded border-2",
                  theme === 'dark'
                    ? 'bg-gray-800 border-cyan-500 text-cyan-500 hover:bg-cyan-500 hover:text-gray-900'
                    : 'bg-gray-200 border-cyan-400 text-cyan-600 hover:bg-cyan-400 hover:text-gray-900'
                )}
              >
                {`> ${actionButton.label}`}
              </motion.button>
            )}
          </div>

          {/* Close Button */}
          <motion.button
            onClick={close}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className={clsx(
              "flex-shrink-0 w-8 h-8 flex items-center justify-center rounded border-2",
              theme === 'dark'
                ? 'bg-gray-800 border-cyan-500 text-cyan-500 hover:bg-cyan-500 hover:text-gray-900'
                : 'bg-gray-200 border-cyan-400 text-cyan-600 hover:bg-cyan-400 hover:text-gray-900'
            )}
          >
            ×
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default React.memo(Toast_36); 