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

const Toast_43: React.FC<ExtendedToastProps> = ({
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
      {/* Holographic Container */}
      <div className={clsx(
        "relative p-4 rounded-2xl overflow-hidden backdrop-blur-xl",
        theme === 'dark'
          ? 'bg-gray-900/40'
          : 'bg-white/40',
        "border border-white/20",
        "shadow-[0_8px_32px_rgba(31,38,135,0.37)]"
      )}>
        {/* Rainbow Gradient */}
        <motion.div
          animate={{
            backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
          className={clsx(
            "absolute inset-0",
            "bg-gradient-to-r from-violet-500/20 via-fuchsia-500/20 via-blue-500/20 via-green-500/20 via-yellow-500/20 via-orange-500/20 to-red-500/20",
            "bg-[size:200%_auto]",
            "mix-blend-overlay"
          )}
        />

        {/* Holographic Pattern */}
        <div className={clsx(
          "absolute inset-0",
          "bg-[radial-gradient(circle_at_center,white_0.5px,transparent_1px)]",
          "bg-[size:8px_8px]",
          "opacity-10"
        )} />

        {/* Progress Bar */}
        <motion.div
          initial={{ scaleX: 1 }}
          animate={{ scaleX: 0 }}
          transition={{ duration: duration / 1000, ease: "linear" }}
          style={{ originX: 0 }}
          className={clsx(
            "absolute bottom-0 left-0 right-0 h-0.5",
            "bg-gradient-to-r from-violet-500 via-fuchsia-500 to-violet-500",
            "bg-[size:200%_auto]"
          )}
        />

        <div className="relative flex items-start space-x-3">
          {/* Icon */}
          {icon && (
            <motion.div
              animate={{ 
                rotateY: [0, 360],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                rotateY: {
                  duration: 3,
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
                "flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center backdrop-blur-xl",
                theme === 'dark'
                  ? 'bg-white/10 text-white'
                  : 'bg-black/5 text-black',
                "border border-white/20"
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
                  "mt-2 text-xs font-medium px-4 py-1.5 rounded-lg backdrop-blur-xl",
                  theme === 'dark'
                    ? 'bg-white/10 text-white hover:bg-white/20 border border-white/20'
                    : 'bg-black/5 text-gray-900 hover:bg-black/10 border border-black/10'
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
              "flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-lg backdrop-blur-xl",
              theme === 'dark'
                ? 'bg-white/10 text-white/70 hover:text-white hover:bg-white/20 border border-white/20'
                : 'bg-black/5 text-gray-600 hover:text-gray-900 hover:bg-black/10 border border-black/10'
            )}
          >
            ×
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default React.memo(Toast_43); 