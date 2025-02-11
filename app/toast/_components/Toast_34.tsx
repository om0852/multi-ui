import React, { useEffect } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";
import { animationVariants, ThemeClassesBorder, positionClasses, useToastTimer } from "./utils";
import { ToastProps } from "./toast-context";

interface ExtendedToastProps extends ToastProps {
  audio?: string;
}

const Toast_34: React.FC<ExtendedToastProps> = ({
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

  return (
    <motion.div
      initial={{ y: -20, opacity: 0, rotateX: 45 }}
      animate={{ y: 0, opacity: 1, rotateX: 0 }}
      exit={{ y: 20, opacity: 0, rotateX: -45 }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={clsx(
        "relative z-50",
        "w-[320px]",
        positionClasses[position],
        stack ? "static" : "fixed",
      )}
    >
      {/* Main Container */}
      <div className={clsx(
        "relative overflow-hidden rounded-2xl p-4",
        theme === 'dark'
          ? 'bg-gradient-to-br from-violet-900/90 via-indigo-900/90 to-purple-900/90'
          : 'bg-gradient-to-br from-violet-100 via-indigo-100 to-purple-100',
        "backdrop-blur-lg shadow-2xl",
        "transform-gpu perspective-1000"
      )}>
        {/* Floating Orbs */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className={clsx(
              "absolute w-16 h-16 rounded-full blur-xl",
              theme === 'dark'
                ? 'bg-violet-500/30'
                : 'bg-violet-300/30'
            )}
            animate={{
              x: [0, 30, 0],
              y: [0, -30, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 4,
              delay: i * 0.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              left: `${i * 30}%`,
              top: `${i * 20}%`,
            }}
          />
        ))}

        {/* Content Container */}
        <div className="relative flex items-start space-x-4">
          {/* Icon */}
          <motion.div
            animate={{
              rotate: [0, 10, -10, 0],
              scale: [1, 1.1, 0.9, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className={clsx(
              "flex-shrink-0 w-12 h-12 rounded-2xl flex items-center justify-center",
              theme === 'dark'
                ? 'bg-violet-800/50 text-violet-200'
                : 'bg-violet-200/50 text-violet-700'
            )}
          >
            <span className="text-2xl">{icon}</span>
          </motion.div>

          {/* Message */}
          <div className="flex-1 min-w-0">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={clsx(
                "text-sm font-medium",
                theme === 'dark' ? 'text-white' : 'text-gray-800'
              )}
            >
              {message}
            </motion.p>

            {/* Action Button */}
            {actionButton && (
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={actionButton.onClick}
                className={clsx(
                  "mt-3 px-4 py-1.5 text-sm rounded-xl",
                  "transition-colors duration-200",
                  theme === 'dark'
                    ? 'bg-violet-800/50 text-violet-200 hover:bg-violet-700/50'
                    : 'bg-violet-200/50 text-violet-700 hover:bg-violet-300/50'
                )}
              >
                {actionButton.label}
              </motion.button>
            )}
          </div>

          {/* Close Button */}
          <motion.button
            whileHover={{ scale: 1.2, rotate: 180 }}
            whileTap={{ scale: 0.8 }}
            onClick={close}
            className={clsx(
              "flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center",
              theme === 'dark'
                ? 'text-violet-200 hover:bg-violet-800/50'
                : 'text-violet-700 hover:bg-violet-200/50'
            )}
          >
            ×
          </motion.button>
        </div>

        {/* Progress Ring */}
        <svg
          className="absolute bottom-2 right-2 w-6 h-6"
          viewBox="0 0 24 24"
        >
          <motion.circle
            cx="12"
            cy="12"
            r="10"
            fill="none"
            strokeWidth="2"
            stroke={theme === 'dark' ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.1)'}
          />
          <motion.circle
            cx="12"
            cy="12"
            r="10"
            fill="none"
            strokeWidth="2"
            stroke={theme === 'dark' ? '#8B5CF6' : '#6D28D9'}
            strokeLinecap="round"
            initial={{ pathLength: 1 }}
            animate={{ pathLength: 0 }}
            transition={{ duration: duration / 1000, ease: "linear" }}
          />
        </svg>
      </div>
    </motion.div>
  );
};

export default React.memo(Toast_34); 