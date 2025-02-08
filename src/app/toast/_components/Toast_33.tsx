import React, { useEffect } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";
import { animationVariants, ThemeClassesBorder, positionClasses, useToastTimer } from "./utils";
import { ToastProps } from "./toast-context";

interface ExtendedToastProps extends ToastProps {
  audio?: string;
}

const Toast_33: React.FC<ExtendedToastProps> = ({
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
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 100, opacity: 0 }}
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
      {/* HUD Container */}
      <div className={clsx(
        "relative rounded-lg overflow-hidden backdrop-blur-sm",
        theme === 'dark'
          ? 'bg-black/40 border border-emerald-500/30'
          : 'bg-white/40 border border-emerald-400/30'
      )}>
        {/* Scanning Line Effect */}
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
            "absolute inset-x-0 h-1/3 pointer-events-none",
            theme === 'dark'
              ? 'bg-gradient-to-b from-emerald-500/0 via-emerald-500/10 to-emerald-500/0'
              : 'bg-gradient-to-b from-emerald-400/0 via-emerald-400/10 to-emerald-400/0'
          )}
        />

        {/* HUD Corner Accents */}
        <div className="absolute inset-0">
          <div className={clsx(
            "absolute top-0 left-0 w-3 h-3 border-l-2 border-t-2",
            theme === 'dark' ? 'border-emerald-500' : 'border-emerald-400'
          )} />
          <div className={clsx(
            "absolute top-0 right-0 w-3 h-3 border-r-2 border-t-2",
            theme === 'dark' ? 'border-emerald-500' : 'border-emerald-400'
          )} />
          <div className={clsx(
            "absolute bottom-0 left-0 w-3 h-3 border-l-2 border-b-2",
            theme === 'dark' ? 'border-emerald-500' : 'border-emerald-400'
          )} />
          <div className={clsx(
            "absolute bottom-0 right-0 w-3 h-3 border-r-2 border-b-2",
            theme === 'dark' ? 'border-emerald-500' : 'border-emerald-400'
          )} />
        </div>

        {/* Content Container */}
        <div className="relative p-4">
          <div className="flex items-start space-x-3">
            {/* Icon with Scanning Effect */}
            <div className="relative flex-shrink-0">
              <motion.div
                animate={{
                  opacity: [1, 0.5, 1],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className={clsx(
                  "w-10 h-10 rounded-lg flex items-center justify-center",
                  theme === 'dark'
                    ? 'bg-emerald-900/30 text-emerald-400'
                    : 'bg-emerald-100/50 text-emerald-600'
                )}
              >
                <span className="text-2xl">{icon}</span>
              </motion.div>
              <motion.div
                animate={{
                  opacity: [0, 1, 0],
                  y: [0, 20, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className={clsx(
                  "absolute inset-0 rounded-lg",
                  theme === 'dark'
                    ? 'bg-gradient-to-b from-emerald-500/20 to-transparent'
                    : 'bg-gradient-to-b from-emerald-400/20 to-transparent'
                )}
              />
            </div>

            {/* Message with Typing Effect */}
            <div className="flex-1 min-w-0">
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className={clsx(
                  "text-sm font-mono",
                  theme === 'dark' ? 'text-emerald-400' : 'text-emerald-700'
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
                    "mt-2 px-4 py-1 text-xs font-mono rounded border",
                    theme === 'dark'
                      ? 'border-emerald-500/50 text-emerald-400 hover:bg-emerald-500/20'
                      : 'border-emerald-400/50 text-emerald-700 hover:bg-emerald-400/20'
                  )}
                >
                  {`> ${actionButton.label}`}
                </motion.button>
              )}
            </div>

            {/* Close Button */}
            <motion.button
              whileHover={{ rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              onClick={close}
              className={clsx(
                "flex-shrink-0 w-6 h-6 rounded flex items-center justify-center",
                theme === 'dark'
                  ? 'text-emerald-400 hover:bg-emerald-500/20'
                  : 'text-emerald-600 hover:bg-emerald-400/20'
              )}
            >
              ×
            </motion.button>
          </div>
        </div>

        {/* HUD Progress Bar */}
        <div className="relative h-1">
          <motion.div
            initial={{ scaleX: 1 }}
            animate={{ scaleX: 0 }}
            transition={{ duration: duration / 1000, ease: "linear" }}
            style={{ originX: 0 }}
            className={clsx(
              "absolute inset-0",
              theme === 'dark' ? 'bg-emerald-500' : 'bg-emerald-400'
            )}
          />
          {/* Progress Bar Segments */}
          <div className="absolute inset-0 flex">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className={clsx(
                  "flex-1 border-r",
                  theme === 'dark'
                    ? 'border-black/50'
                    : 'border-white/50'
                )}
              />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default React.memo(Toast_33);