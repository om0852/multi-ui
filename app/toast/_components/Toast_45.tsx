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

const Toast_45: React.FC<ExtendedToastProps> = ({
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
          initial: { scale: 0.9, opacity: 0, rotateZ: -45 },
          animate: { scale: 1, opacity: 1, rotateZ: 0 },
          exit: { scale: 0.9, opacity: 0, rotateZ: 45 },
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
      {/* Crystal Container */}
      <div className={clsx(
        "relative p-4 rounded-lg overflow-hidden",
        theme === 'dark'
          ? 'bg-gradient-to-br from-gray-900/90 to-gray-800/90'
          : 'bg-gradient-to-br from-white/90 to-gray-50/90',
        "backdrop-blur-md",
        "before:absolute before:inset-0 before:bg-[linear-gradient(120deg,rgba(255,255,255,0.3)_0%,rgba(255,255,255,0)_100%)] before:transform before:rotate-45"
      )}>
        {/* Prismatic Effects */}
        <motion.div
          animate={{
            backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear"
          }}
          className={clsx(
            "absolute inset-0",
            "bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.1)_50%,transparent_75%)]",
            "bg-[length:200%_200%]"
          )}
        />

        {/* Crystal Facets */}
        <div className={clsx(
          "absolute inset-0",
          "bg-[linear-gradient(135deg,transparent_0%,rgba(255,255,255,0.05)_50%,transparent_100%)]"
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
              ? 'bg-gradient-to-r from-teal-500 via-cyan-400 to-teal-500'
              : 'bg-gradient-to-r from-teal-400 via-cyan-300 to-teal-400'
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
                ease: "linear"
              }}
              className={clsx(
                "flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center",
                "bg-gradient-to-br backdrop-blur-sm",
                theme === 'dark'
                  ? 'from-teal-500/20 to-cyan-400/20 text-teal-300'
                  : 'from-teal-400/20 to-cyan-300/20 text-teal-600',
                "border border-white/20"
              )}
            >
              <span className="text-xl transform-gpu">{icon}</span>
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
                whileHover={{ scale: 1.02, rotateX: 5 }}
                whileTap={{ scale: 0.98, rotateX: -5 }}
                onClick={actionButton.onClick}
                className={clsx(
                  "mt-2 text-xs font-medium px-4 py-1.5 rounded-lg",
                  "bg-gradient-to-r backdrop-blur-sm",
                  theme === 'dark'
                    ? 'from-teal-500/20 to-cyan-400/20 text-teal-300 hover:from-teal-500/30 hover:to-cyan-400/30'
                    : 'from-teal-400/20 to-cyan-300/20 text-teal-600 hover:from-teal-400/30 hover:to-cyan-300/30',
                  "border border-white/20"
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
              "backdrop-blur-sm",
              theme === 'dark'
                ? 'text-teal-300/70 hover:text-teal-300 bg-teal-500/10 hover:bg-teal-500/20'
                : 'text-teal-600/70 hover:text-teal-600 bg-teal-400/10 hover:bg-teal-400/20',
              "border border-white/20"
            )}
          >
            ×
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default React.memo(Toast_45); 