import React, { useEffect } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";
import { animationVariants, ThemeClassesBorder, positionClasses, useToastTimer } from "./utils";
import { ToastProps } from "./toast-context";

interface ExtendedToastProps extends ToastProps {
  audio?: string;
}

const Toast_41: React.FC<ExtendedToastProps> = ({
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
      initial={{ scale: 0.8, opacity: 0, rotate: -10 }}
      animate={{ scale: 1, opacity: 1, rotate: 0 }}
      exit={{ scale: 0.8, opacity: 0, rotate: 10 }}
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
        "relative overflow-hidden rounded-2xl",
        theme === 'dark'
          ? 'bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900'
          : 'bg-gradient-to-br from-slate-100 via-purple-100 to-slate-100',
        "border border-purple-500/30",
        "shadow-lg shadow-purple-500/20"
      )}>
        {/* Star Field Background */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                scale: [0.5, 1, 0.5],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 2 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
              className={clsx(
                "absolute w-1 h-1 rounded-full",
                theme === 'dark' ? 'bg-white' : 'bg-purple-500'
              )}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>

        {/* Nebula Effect */}
        <motion.div
          animate={{
            opacity: [0.3, 0.5, 0.3],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className={clsx(
            "absolute inset-0",
            "bg-[radial-gradient(ellipse_at_center,rgba(167,139,250,0.2)_0%,transparent_70%)]"
          )}
        />

        {/* Constellation Lines */}
        <svg className="absolute inset-0 w-full h-full">
          <motion.path
            d="M10 10 L50 50 L90 30 L130 70"
            stroke={theme === 'dark' ? 'rgba(167,139,250,0.2)' : 'rgba(147,51,234,0.2)'}
            strokeWidth="1"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </svg>

        <div className="relative p-4">
          <div className="flex items-start space-x-4">
            {/* Cosmic Icon */}
            <motion.div
              animate={{
                rotate: 360,
                scale: [1, 1.1, 1],
              }}
              transition={{
                rotate: {
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                },
                scale: {
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
              className={clsx(
                "flex-shrink-0 w-12 h-12 rounded-full",
                "flex items-center justify-center",
                "bg-gradient-to-br from-purple-500/20 to-transparent",
                theme === 'dark' ? 'text-purple-300' : 'text-purple-600'
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
                  "text-sm",
                  theme === 'dark' ? 'text-purple-100' : 'text-purple-900'
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
                      ? 'bg-purple-500/20 text-purple-300 hover:bg-purple-500/30'
                      : 'bg-purple-500/10 text-purple-700 hover:bg-purple-500/20'
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
                  ? 'text-purple-300 hover:bg-purple-500/20'
                  : 'text-purple-700 hover:bg-purple-500/10'
              )}
            >
              ×
            </motion.button>
          </div>
        </div>

        {/* Cosmic Progress Ring */}
        <div className="relative h-1">
          <motion.div
            initial={{ scaleX: 1 }}
            animate={{ scaleX: 0 }}
            transition={{ duration: duration / 1000, ease: "linear" }}
            style={{ originX: 0 }}
            className={clsx(
              "absolute inset-0",
              theme === 'dark'
                ? 'bg-gradient-to-r from-purple-500 via-fuchsia-500 to-purple-500'
                : 'bg-gradient-to-r from-purple-400 via-fuchsia-400 to-purple-400'
            )}
          >
            {/* Sparkle Effect */}
            <motion.div
              animate={{
                x: ["0%", "100%"],
              }}
              transition={{
                duration: 1.5,
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

export default React.memo(Toast_41); 