import React, { useEffect } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";
import { animationVariants, ThemeClassesBorder, positionClasses, useToastTimer } from "./utils";
import { ToastProps } from "./toast-context";

interface ExtendedToastProps extends ToastProps {
  audio?: string;
}

const Toast_37: React.FC<ExtendedToastProps> = ({
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
      initial={{ y: -50, opacity: 0, rotateX: 90 }}
      animate={{ y: 0, opacity: 1, rotateX: 0 }}
      exit={{ y: 50, opacity: 0, rotateX: -90 }}
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
      {/* Retro Container */}
      <div className={clsx(
        "relative overflow-hidden rounded-lg",
        theme === 'dark'
          ? 'bg-black border-2 border-pink-500'
          : 'bg-gray-900 border-2 border-cyan-400',
        "shadow-[0_0_20px_rgba(236,72,153,0.5)]"
      )}>
        {/* Grid Background */}
        <div className={clsx(
          "absolute inset-0",
          "bg-[linear-gradient(transparent_1px,_transparent_1px),_linear-gradient(90deg,_transparent_1px,_transparent_1px)]",
          "bg-[size:20px_20px]",
          theme === 'dark'
            ? '[background-image:linear-gradient(rgba(236,72,153,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(236,72,153,0.1)_1px,transparent_1px)]'
            : '[background-image:linear-gradient(rgba(34,211,238,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.1)_1px,transparent_1px)]'
        )}>
          {/* Moving Grid Animation */}
          <motion.div
            animate={{
              y: [0, 20],
              x: [0, 20],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(45deg, ${theme === 'dark' ? 'rgba(236,72,153,0.1)' : 'rgba(34,211,238,0.1)'} 25%, transparent 25%)`,
              backgroundSize: '20px 20px',
            }}
          />
        </div>

        {/* Content Container */}
        <div className="relative p-4">
          <div className="flex items-start space-x-3">
            {/* Neon Icon */}
            <motion.div
              animate={{
                textShadow: [
                  "0 0 7px #fff, 0 0 10px #fff, 0 0 21px #fff, 0 0 42px #ec4899, 0 0 82px #ec4899, 0 0 92px #ec4899",
                  "0 0 7px #fff, 0 0 10px #fff, 0 0 21px #fff, 0 0 42px #ec4899, 0 0 72px #ec4899, 0 0 82px #ec4899",
                  "0 0 7px #fff, 0 0 10px #fff, 0 0 21px #fff, 0 0 42px #ec4899, 0 0 82px #ec4899, 0 0 92px #ec4899",
                ],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className={clsx(
                "flex-shrink-0 w-12 h-12 rounded-lg",
                "flex items-center justify-center",
                theme === 'dark'
                  ? 'text-pink-500'
                  : 'text-cyan-400',
                "text-2xl font-bold",
                "shadow-[0_0_10px_rgba(236,72,153,0.5)]"
              )}
            >
              {icon}
            </motion.div>

            {/* Message Area */}
            <div className="flex-1 min-w-0">
              <motion.p
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                className={clsx(
                  "text-sm font-bold",
                  theme === 'dark'
                    ? 'text-pink-500'
                    : 'text-cyan-400',
                  "text-shadow-[0_0_5px_rgba(236,72,153,0.5)]"
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
                    "mt-2 px-4 py-1.5 text-sm font-bold rounded",
                    "border transition-all duration-200",
                    theme === 'dark'
                      ? 'border-pink-500 text-pink-500 hover:bg-pink-500/20'
                      : 'border-cyan-400 text-cyan-400 hover:bg-cyan-400/20',
                    "shadow-[0_0_10px_rgba(236,72,153,0.3)]"
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
                  ? 'text-pink-500 hover:bg-pink-500/20'
                  : 'text-cyan-400 hover:bg-cyan-400/20'
              )}
            >
              ×
            </motion.button>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="relative h-1">
          <motion.div
            initial={{ scaleX: 1 }}
            animate={{ scaleX: 0 }}
            transition={{ duration: duration / 1000, ease: "linear" }}
            style={{ originX: 0 }}
            className={clsx(
              "absolute inset-0",
              theme === 'dark'
                ? 'bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500'
                : 'bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400',
              "shadow-[0_0_10px_rgba(236,72,153,0.5)]"
            )}
          />
        </div>

        {/* Scan Line Effect */}
        <motion.div
          animate={{
            y: ["0%", "100%", "0%"],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "linear",
          }}
          className={clsx(
            "absolute inset-x-0 h-1/2 pointer-events-none",
            theme === 'dark'
              ? 'bg-gradient-to-b from-transparent via-pink-500/10 to-transparent'
              : 'bg-gradient-to-b from-transparent via-cyan-400/10 to-transparent'
          )}
        />
      </div>
    </motion.div>
  );
};

export default React.memo(Toast_37); 