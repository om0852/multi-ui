import React, { useEffect } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";
import { animationVariants, ThemeClassesBorder, positionClasses, useToastTimer } from "./utils";
import { ToastProps } from "./toast-context";

interface ExtendedToastProps extends ToastProps {
  audio?: string;
}

const Toast_42: React.FC<ExtendedToastProps> = ({
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
      initial={{ x: 50, opacity: 0, scale: 0.9 }}
      animate={{ x: 0, opacity: 1, scale: 1 }}
      exit={{ x: -50, opacity: 0, scale: 0.9 }}
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
        "relative overflow-hidden rounded-lg",
        theme === 'dark'
          ? 'bg-gray-900 border border-emerald-500/30'
          : 'bg-white border border-emerald-500/30',
        "shadow-lg"
      )}>
        {/* Circuit Pattern Background */}
        <div className={clsx(
          "absolute inset-0",
          theme === 'dark'
            ? 'bg-[linear-gradient(45deg,transparent_25%,rgba(16,185,129,0.05)_25%,rgba(16,185,129,0.05)_50%,transparent_50%,transparent_75%,rgba(16,185,129,0.05)_75%)]'
            : 'bg-[linear-gradient(45deg,transparent_25%,rgba(16,185,129,0.1)_25%,rgba(16,185,129,0.1)_50%,transparent_50%,transparent_75%,rgba(16,185,129,0.1)_75%)]',
          "bg-[length:20px_20px]"
        )} />

        {/* Animated Circuit Paths */}
        <svg className="absolute inset-0 w-full h-full">
          {/* Horizontal Lines */}
          <motion.path
            d="M0 20 H320"
            stroke={theme === 'dark' ? 'rgba(16,185,129,0.2)' : 'rgba(16,185,129,0.3)'}
            strokeWidth="1"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <motion.path
            d="M0 40 H320"
            stroke={theme === 'dark' ? 'rgba(16,185,129,0.2)' : 'rgba(16,185,129,0.3)'}
            strokeWidth="1"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 0.5, repeat: Infinity }}
          />

          {/* Vertical Lines */}
          <motion.path
            d="M40 0 V80"
            stroke={theme === 'dark' ? 'rgba(16,185,129,0.2)' : 'rgba(16,185,129,0.3)'}
            strokeWidth="1"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 1, repeat: Infinity }}
          />
          <motion.path
            d="M280 0 V80"
            stroke={theme === 'dark' ? 'rgba(16,185,129,0.2)' : 'rgba(16,185,129,0.3)'}
            strokeWidth="1"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 1.5, repeat: Infinity }}
          />
        </svg>

        {/* Data Flow Effect */}
        <div className="absolute inset-0">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                x: ["0%", "100%"],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 2,
                delay: i * 0.5,
                repeat: Infinity,
                ease: "linear",
              }}
              className={clsx(
                "absolute h-px w-12",
                theme === 'dark'
                  ? 'bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent'
                  : 'bg-gradient-to-r from-transparent via-emerald-500/70 to-transparent'
              )}
              style={{
                top: `${20 + i * 20}%`,
              }}
            />
          ))}
        </div>

        <div className="relative p-4">
          <div className="flex items-start space-x-4">
            {/* Tech Icon */}
            <motion.div
              animate={{
                borderColor: ["rgba(16,185,129,0.3)", "rgba(16,185,129,0.7)", "rgba(16,185,129,0.3)"],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "linear",
              }}
              className={clsx(
                "flex-shrink-0 w-12 h-12",
                "border-2 rounded",
                "flex items-center justify-center",
                theme === 'dark'
                  ? 'bg-gray-800/50 text-emerald-400'
                  : 'bg-emerald-50 text-emerald-600'
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
                  "text-sm font-mono",
                  theme === 'dark' ? 'text-emerald-100' : 'text-emerald-900'
                )}
              >
                {message}
              </motion.p>

              {actionButton && (
                <motion.button
                  whileHover={{ scale: 1.05, x: 5 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={actionButton.onClick}
                  className={clsx(
                    "mt-3 px-4 py-1.5 text-sm font-mono rounded",
                    "border transition-all duration-200",
                    theme === 'dark'
                      ? 'border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/20'
                      : 'border-emerald-500/30 text-emerald-600 hover:bg-emerald-500/10'
                  )}
                >
                  {'>'} {actionButton.label}
                </motion.button>
              )}
            </div>

            {/* Close Button */}
            <motion.button
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              onClick={close}
              className={clsx(
                "flex-shrink-0 w-6 h-6",
                "flex items-center justify-center",
                "font-mono",
                theme === 'dark'
                  ? 'text-emerald-400 hover:text-emerald-300'
                  : 'text-emerald-600 hover:text-emerald-500'
              )}
            >
              ×
            </motion.button>
          </div>
        </div>

        {/* Progress Bar with Data Flow */}
        <div className="relative h-1">
          <motion.div
            initial={{ scaleX: 1 }}
            animate={{ scaleX: 0 }}
            transition={{ duration: duration / 1000, ease: "steps(100)" }}
            style={{ originX: 0 }}
            className={clsx(
              "absolute inset-0",
              theme === 'dark'
                ? 'bg-emerald-500'
                : 'bg-emerald-500'
            )}
          >
            {/* Data Pulse Effect */}
            <motion.div
              animate={{
                x: ["0%", "100%"],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                ease: "linear",
              }}
              className={clsx(
                "absolute inset-0",
                "bg-gradient-to-r from-transparent via-white/50 to-transparent"
              )}
            />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default React.memo(Toast_42); 