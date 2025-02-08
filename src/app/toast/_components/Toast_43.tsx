import React, { useEffect } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";
import { animationVariants, ThemeClassesBorder, positionClasses, useToastTimer } from "./utils";
import { ToastProps } from "./toast-context";

interface ExtendedToastProps extends ToastProps {
  audio?: string;
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
      const audioElement = new Audio(audio);
      audioElement.play();
    }
  }, [audio]);

  return (
    <motion.div
      initial={{ x: -50, opacity: 0, rotateY: 90 }}
      animate={{ x: 0, opacity: 1, rotateY: 0 }}
      exit={{ x: 50, opacity: 0, rotateY: -90 }}
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
        "relative overflow-hidden",
        theme === 'dark'
          ? 'bg-black border-2 border-rose-500'
          : 'bg-gray-100 border-2 border-rose-400',
        "shadow-[0_0_20px_rgba(244,63,94,0.5)]"
      )}>
        {/* Glitch Effect Layers */}
        <motion.div
          animate={{
            x: [0, -5, 5, -5, 0],
            opacity: [1, 0.8, 0.9, 0.7, 1],
          }}
          transition={{
            duration: 0.5,
            repeat: Infinity,
            repeatDelay: 5,
          }}
          className={clsx(
            "absolute inset-0 z-10",
            theme === 'dark'
              ? 'bg-rose-500/20'
              : 'bg-rose-400/20',
            "mix-blend-overlay"
          )}
        />
        <motion.div
          animate={{
            x: [0, 5, -5, 5, 0],
            opacity: [1, 0.9, 0.7, 0.8, 1],
          }}
          transition={{
            duration: 0.5,
            repeat: Infinity,
            repeatDelay: 5,
          }}
          className={clsx(
            "absolute inset-0 z-20",
            theme === 'dark'
              ? 'bg-cyan-500/20'
              : 'bg-cyan-400/20',
            "mix-blend-overlay"
          )}
        />

        {/* Scanline Effect */}
        <motion.div
          animate={{
            y: ["0%", "100%"],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "linear",
          }}
          className={clsx(
            "absolute inset-0 z-30",
            "bg-gradient-to-b from-transparent via-white/5 to-transparent",
            "pointer-events-none"
          )}
        />

        {/* Content Container */}
        <div className="relative z-40 p-4">
          <div className="flex items-start space-x-4">
            {/* Cyberpunk Icon */}
            <motion.div
              animate={{
                boxShadow: [
                  "0 0 20px rgba(244,63,94,0.5)",
                  "0 0 30px rgba(244,63,94,0.7)",
                  "0 0 20px rgba(244,63,94,0.5)",
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "linear",
              }}
              className={clsx(
                "flex-shrink-0 w-12 h-12",
                "flex items-center justify-center",
                "border border-rose-500",
                theme === 'dark'
                  ? 'bg-black/50 text-rose-400'
                  : 'bg-white/50 text-rose-500',
                "relative"
              )}
            >
              <span className="text-2xl relative z-10">{icon}</span>
              {/* Icon Glitch Effect */}
              <motion.span
                animate={{
                  x: [0, 2, -2, 0],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 0.3,
                  repeat: Infinity,
                  repeatDelay: 5,
                }}
                className="absolute inset-0 flex items-center justify-center text-2xl text-cyan-400"
              >
                {icon}
              </motion.span>
            </motion.div>

            {/* Content */}
            <div className="flex-1">
              <motion.p
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                className={clsx(
                  "text-sm font-mono",
                  theme === 'dark' ? 'text-rose-100' : 'text-rose-900'
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
                    "mt-3 px-4 py-1.5 text-sm font-mono",
                    "border border-rose-500",
                    "transition-all duration-200",
                    theme === 'dark'
                      ? 'bg-black/50 text-rose-400 hover:bg-rose-500/20'
                      : 'bg-white/50 text-rose-500 hover:bg-rose-400/20',
                    "shadow-[0_0_10px_rgba(244,63,94,0.3)]"
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
                  ? 'text-rose-400 hover:text-rose-300'
                  : 'text-rose-500 hover:text-rose-400'
              )}
            >
              ×
            </motion.button>
          </div>
        </div>

        {/* Cyberpunk Progress Bar */}
        <div className="relative h-1 bg-black">
          <motion.div
            initial={{ scaleX: 1 }}
            animate={{ scaleX: 0 }}
            transition={{ duration: duration / 1000, ease: "linear" }}
            style={{ originX: 0 }}
            className={clsx(
              "absolute inset-0",
              "bg-gradient-to-r from-rose-500 via-purple-500 to-cyan-500"
            )}
          >
            {/* Glitch Effect */}
            <motion.div
              animate={{
                x: ["0%", "100%"],
                opacity: [0.5, 1, 0.5],
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

        {/* Corner Accents */}
        <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-cyan-500" />
        <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-cyan-500" />
        <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-cyan-500" />
        <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-cyan-500" />
      </div>
    </motion.div>
  );
};

export default React.memo(Toast_43); 