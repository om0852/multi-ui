import React, { useEffect } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";
import { animationVariants, ThemeClassesBorder, positionClasses, useToastTimer } from "./utils";
import { ToastProps } from "./toast-context";

interface ExtendedToastProps extends ToastProps {
  audio?: string;
}

const Toast_40: React.FC<ExtendedToastProps> = ({
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
      const audioElement = new Audio(audio);
      audioElement.play();
    }
  }, [audio]);

  return (
    <motion.div
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 20, opacity: 0 }}
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
      <div className={clsx(
        "relative overflow-hidden rounded-xl",
        theme === 'dark'
          ? 'bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900'
          : 'bg-gradient-to-br from-purple-100 via-indigo-100 to-blue-100',
        "shadow-lg"
      )}>
        {/* Animated Gradient Background */}
        <motion.div
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear",
          }}
          className={clsx(
            "absolute inset-0",
            theme === 'dark'
              ? 'bg-[radial-gradient(circle,rgba(129,140,248,0.2)_1px,transparent_1px)] bg-[length:16px_16px]'
              : 'bg-[radial-gradient(circle,rgba(99,102,241,0.2)_1px,transparent_1px)] bg-[length:16px_16px]'
          )}
        />

        {/* Flowing Liquid Effect */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className={clsx(
            "absolute inset-0",
            theme === 'dark'
              ? 'bg-gradient-to-t from-transparent via-indigo-500/10 to-transparent'
              : 'bg-gradient-to-t from-transparent via-indigo-500/20 to-transparent'
          )}
        />

        <div className="relative p-4">
          <div className="flex items-start space-x-4">
            {/* Animated Icon */}
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 10, -10, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className={clsx(
                "flex-shrink-0 w-12 h-12 rounded-lg",
                "flex items-center justify-center",
                theme === 'dark'
                  ? 'bg-indigo-500/20 text-indigo-300'
                  : 'bg-indigo-500/10 text-indigo-600'
              )}
            >
              <span className="text-2xl">{icon}</span>
            </motion.div>

            {/* Content */}
            <div className="flex-1">
              <motion.p
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                className={clsx(
                  "text-sm font-medium",
                  theme === 'dark' ? 'text-white' : 'text-gray-800'
                )}
              >
                {message}
              </motion.p>

              {actionButton && (
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={actionButton.onClick}
                  className={clsx(
                    "mt-3 px-4 py-1.5 text-sm rounded-lg",
                    "backdrop-blur-sm transition-all duration-200",
                    theme === 'dark'
                      ? 'bg-indigo-500/20 text-indigo-300 hover:bg-indigo-500/30'
                      : 'bg-indigo-500/10 text-indigo-600 hover:bg-indigo-500/20'
                  )}
                >
                  {actionButton.label}
                </motion.button>
              )}
            </div>

            {/* Close Button */}
            <motion.button
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              onClick={close}
              className={clsx(
                "flex-shrink-0 w-6 h-6 rounded-full",
                "flex items-center justify-center",
                theme === 'dark'
                  ? 'text-indigo-300 hover:bg-indigo-500/20'
                  : 'text-indigo-600 hover:bg-indigo-500/10'
              )}
            >
              ×
            </motion.button>
          </div>
        </div>

        {/* Liquid Progress Bar */}
        <div className="relative h-1">
          <motion.div
            initial={{ scaleX: 1 }}
            animate={{ scaleX: 0 }}
            transition={{ duration: duration / 1000, ease: "linear" }}
            style={{ originX: 0 }}
            className={clsx(
              "absolute inset-0",
              theme === 'dark'
                ? 'bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500'
                : 'bg-gradient-to-r from-purple-400 via-indigo-400 to-blue-400'
            )}
          >
            <motion.div
              animate={{
                x: ["0%", "100%"],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "linear",
              }}
              className={clsx(
                "absolute inset-0",
                "bg-gradient-to-r from-transparent via-white/30 to-transparent"
              )}
            />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default React.memo(Toast_40); 