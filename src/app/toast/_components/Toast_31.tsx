import React, { useEffect } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";
import { animationVariants, ThemeClassesBorder, positionClasses, useToastTimer } from "./utils";
import { ToastProps } from "./toast-context";

interface ExtendedToastProps extends ToastProps {
  audio?: string;
}

const Toast_31: React.FC<ExtendedToastProps> = ({
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
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 50, opacity: 0 }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
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
        "relative rounded-lg overflow-hidden backdrop-blur-xl",
        theme === 'dark'
          ? 'bg-violet-900/20 border border-violet-500/50'
          : 'bg-violet-50/30 border border-violet-200/50'
      )}>
        {/* Holographic Overlay */}
        <motion.div
          animate={{
            background: [
              "linear-gradient(45deg, rgba(167,139,250,0.1) 0%, rgba(139,92,246,0.1) 100%)",
              "linear-gradient(45deg, rgba(139,92,246,0.1) 0%, rgba(167,139,250,0.1) 100%)",
            ],
          }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0"
        />

        {/* Floating Particles */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className={clsx(
              "absolute w-1 h-1 rounded-full",
              theme === 'dark' ? 'bg-violet-400/30' : 'bg-violet-300/30'
            )}
            animate={{
              y: [0, -20, 0],
              x: [0, 10, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 2,
              delay: i * 0.4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              left: `${20 + i * 15}%`,
              top: `${50 + i * 10}%`,
            }}
          />
        ))}

        {/* Content Container */}
        <div className="relative p-4">
          <div className="flex items-start space-x-3">
            {/* Holographic Icon */}
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.8, 1, 0.8],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className={clsx(
                "flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center",
                theme === 'dark'
                  ? 'bg-violet-900/30 text-violet-300'
                  : 'bg-violet-100/50 text-violet-600'
              )}
            >
              <span className="text-2xl filter drop-shadow-lg">{icon}</span>
            </motion.div>

            {/* Message */}
            <div className="flex-1 min-w-0">
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={clsx(
                  "text-sm font-medium",
                  theme === 'dark' ? 'text-violet-200' : 'text-violet-800'
                )}
              >
                {message}
              </motion.p>

              {/* Action Button */}
              {actionButton && (
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={actionButton.onClick}
                  className={clsx(
                    "mt-2 px-4 py-1 text-xs font-medium rounded-lg backdrop-blur-sm",
                    theme === 'dark'
                      ? 'bg-violet-900/30 text-violet-300 hover:bg-violet-800/30'
                      : 'bg-violet-100/50 text-violet-700 hover:bg-violet-200/50'
                  )}
                >
                  {actionButton.label}
                </motion.button>
              )}
            </div>

            {/* Close Button */}
            <motion.button
              whileHover={{ rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              onClick={close}
              className={clsx(
                "flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center",
                theme === 'dark'
                  ? 'text-violet-300 hover:bg-violet-800/30'
                  : 'text-violet-600 hover:bg-violet-100/50'
              )}
            >
              ×
            </motion.button>
          </div>
        </div>

        {/* Holographic Progress Ring */}
        <svg className="absolute -right-3 -top-3 w-8 h-8 rotate-[-90deg]">
          <motion.circle
            cx="16"
            cy="16"
            r="12"
            fill="none"
            strokeWidth="2"
            stroke={theme === 'dark' ? 'rgb(167,139,250)' : 'rgb(139,92,246)'}
            strokeDasharray="75"
            initial={{ strokeDashoffset: 0 }}
            animate={{ strokeDashoffset: 75 }}
            transition={{ duration: duration / 1000, ease: "linear" }}
          />
        </svg>

        {/* Holographic Lines */}
        <div className={clsx(
          "absolute inset-0 pointer-events-none",
          theme === 'dark'
            ? 'bg-gradient-to-b from-violet-500/5 via-transparent to-violet-500/5'
            : 'bg-gradient-to-b from-violet-200/10 via-transparent to-violet-200/10'
        )} />
      </div>
    </motion.div>
  );
};

export default React.memo(Toast_31); 