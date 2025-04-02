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

const Toast_50: React.FC<ExtendedToastProps> = ({
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
          initial: { y: -50, opacity: 0, scale: 0.9, rotateX: -45 },
          animate: { y: 0, opacity: 1, scale: 1, rotateX: 0 },
          exit: { y: 50, opacity: 0, scale: 0.9, rotateX: 45 },
          transition: { type: "spring", stiffness: 300, damping: 15 }
        };
      default:
        return {
          initial: { scale: 0.9, opacity: 0, z: -100 },
          animate: { scale: 1, opacity: 1, z: 0 },
          exit: { scale: 0.9, opacity: 0, z: -100 },
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
      style={{ perspective: "1000px" }}
    >
      {/* 3D Card Container */}
      <motion.div
        whileHover={{ scale: 1.02, rotateY: 5 }}
        className={clsx(
          "relative p-4 rounded-2xl overflow-hidden",
          theme === 'dark'
            ? 'bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800'
            : 'bg-gradient-to-br from-slate-100 via-white to-slate-100',
          "shadow-2xl",
          "transform-style-preserve-3d"
        )}
      >
        {/* 3D Layer Effects */}
        <div className={clsx(
          "absolute inset-0",
          theme === 'dark'
            ? 'bg-gradient-to-br from-cyan-500/10 via-transparent to-purple-500/10'
            : 'bg-gradient-to-br from-cyan-300/10 via-transparent to-purple-300/10',
          "transform translate-z-[-20px]"
        )} />

        {/* Floating Particles */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -20, 0],
              x: [0, 10, 0],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 3,
              delay: i * 0.2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className={clsx(
              "absolute w-2 h-2 rounded-full",
              theme === 'dark'
                ? 'bg-white/10'
                : 'bg-black/5',
              `top-${Math.floor(Math.random() * 100)}%`,
              `left-${Math.floor(Math.random() * 100)}%`
            )}
          />
        ))}

        {/* Progress Bar */}
        <motion.div
          initial={{ scaleX: 1 }}
          animate={{ scaleX: 0 }}
          transition={{ duration: duration / 1000, ease: "linear" }}
          style={{ originX: 0 }}
          className={clsx(
            "absolute bottom-0 left-0 right-0 h-1",
            theme === 'dark'
              ? 'bg-gradient-to-r from-cyan-500/30 via-white/20 to-purple-500/30'
              : 'bg-gradient-to-r from-cyan-300/30 via-black/10 to-purple-300/30'
          )}
        />

        <div className="relative flex items-start space-x-4">
          {/* Icon */}
          {icon && (
            <motion.div
              animate={{ 
                rotateY: [0, 360],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                rotateY: {
                  duration: 6,
                  repeat: Infinity,
                  ease: "linear"
                },
                scale: {
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
              }}
              className={clsx(
                "flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center",
                theme === 'dark'
                  ? 'bg-white/10 text-white'
                  : 'bg-black/5 text-black',
                "backdrop-blur-sm",
                "transform-style-preserve-3d"
              )}
            >
              <span className="text-xl transform translate-z-[10px]">{icon}</span>
            </motion.div>
          )}

          {/* Content */}
          <div className="flex-1 min-w-0 pt-1">
            <p className={clsx(
              "text-sm font-medium transform translate-z-[5px]",
              theme === 'dark' ? 'text-white' : 'text-black'
            )}>
              {message}
            </p>

            {/* Action Button */}
            {actionButton && (
              <motion.button
                whileHover={{ scale: 1.05, translateZ: 15 }}
                whileTap={{ scale: 0.95 }}
                onClick={actionButton.onClick}
                className={clsx(
                  "mt-3 px-4 py-1.5 text-xs font-medium rounded-lg",
                  theme === 'dark'
                    ? 'bg-white/10 text-white hover:bg-white/20'
                    : 'bg-black/5 text-black hover:bg-black/10',
                  "backdrop-blur-sm",
                  "transition-colors duration-200",
                  "transform-style-preserve-3d"
                )}
              >
                {actionButton.label}
              </motion.button>
            )}
          </div>

          {/* Close Button */}
          <motion.button
            onClick={close}
            whileHover={{ scale: 1.1, rotate: 90, translateZ: 10 }}
            whileTap={{ scale: 0.9 }}
            className={clsx(
              "flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center",
              theme === 'dark'
                ? 'bg-white/10 text-white hover:bg-white/20'
                : 'bg-black/5 text-black hover:bg-black/10',
              "backdrop-blur-sm",
              "transition-colors duration-200",
              "transform-style-preserve-3d"
            )}
          >
            ×
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default React.memo(Toast_50); 