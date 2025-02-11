import React, { useEffect } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";
import { animationVariants, ThemeClassesBorder, positionClasses, useToastTimer } from "./utils";
import { ToastProps } from "./toast-context";

interface ExtendedToastProps extends ToastProps {
  audio?: string;
}

const Toast_38: React.FC<ExtendedToastProps> = ({
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
      initial={{ x: 100, opacity: 0, skewX: -20 }}
      animate={{ x: 0, opacity: 1, skewX: 0 }}
      exit={{ x: -100, opacity: 0, skewX: 20 }}
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
      {/* Brutalist Container */}
      <div className={clsx(
        "relative",
        theme === 'dark'
          ? 'bg-white'
          : 'bg-black',
        "transform-gpu"
      )}>
        {/* Geometric Shapes */}
        <div className="absolute -inset-1">
          <div className={clsx(
            "absolute top-0 left-0 w-4 h-4",
            theme === 'dark' ? 'bg-black' : 'bg-white'
          )} />
          <div className={clsx(
            "absolute top-0 right-0 w-4 h-4",
            theme === 'dark' ? 'bg-black' : 'bg-white'
          )} />
          <div className={clsx(
            "absolute bottom-0 left-0 w-4 h-4",
            theme === 'dark' ? 'bg-black' : 'bg-white'
          )} />
          <div className={clsx(
            "absolute bottom-0 right-0 w-4 h-4",
            theme === 'dark' ? 'bg-black' : 'bg-white'
          )} />
        </div>

        {/* Content Container */}
        <div className={clsx(
          "relative p-4 border-4",
          theme === 'dark' ? 'border-black' : 'border-white'
        )}>
          <div className="flex items-start space-x-4">
            {/* Icon */}
            <motion.div
              animate={{
                rotate: [0, 90, 180, 270, 360],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "linear",
              }}
              className={clsx(
                "flex-shrink-0 w-12 h-12",
                "flex items-center justify-center",
                "font-mono text-2xl font-black",
                theme === 'dark' ? 'text-black' : 'text-white'
              )}
            >
              {icon}
            </motion.div>

            {/* Message Area */}
            <div className="flex-1 min-w-0">
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className={clsx(
                  "text-sm font-mono font-bold uppercase tracking-wider",
                  theme === 'dark' ? 'text-black' : 'text-white'
                )}
              >
                {message}
              </motion.p>

              {/* Action Button */}
              {actionButton && (
                <motion.button
                  whileHover={{ scale: 1.05, x: 5 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={actionButton.onClick}
                  className={clsx(
                    "mt-3 px-4 py-2",
                    "text-sm font-mono font-bold uppercase",
                    "border-2 transition-transform duration-200",
                    theme === 'dark'
                      ? 'border-black text-black hover:bg-black hover:text-white'
                      : 'border-white text-white hover:bg-white hover:text-black'
                  )}
                >
                  {actionButton.label}
                </motion.button>
              )}
            </div>

            {/* Close Button */}
            <motion.button
              whileHover={{ scale: 1.2, rotate: 90 }}
              whileTap={{ scale: 0.8 }}
              onClick={close}
              className={clsx(
                "flex-shrink-0 w-8 h-8",
                "flex items-center justify-center",
                "font-mono text-xl font-black",
                theme === 'dark'
                  ? 'text-black hover:bg-black hover:text-white'
                  : 'text-white hover:bg-white hover:text-black',
                "transition-colors duration-200"
              )}
            >
              ×
            </motion.button>
          </div>
        </div>

        {/* Progress Bar */}
        <div className={clsx(
          "relative h-2",
          theme === 'dark' ? 'bg-black' : 'bg-white'
        )}>
          <motion.div
            initial={{ scaleX: 1 }}
            animate={{ scaleX: 0 }}
            transition={{ duration: duration / 1000, ease: "steps(20)" }}
            style={{ originX: 0 }}
            className={clsx(
              "absolute inset-0",
              theme === 'dark' ? 'bg-white' : 'bg-black'
            )}
          />
        </div>

        {/* Diagonal Lines */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: 2,
                delay: i * 0.2,
                repeat: Infinity,
                ease: "linear",
              }}
              className={clsx(
                "absolute w-full h-px rotate-45",
                theme === 'dark' ? 'bg-black/20' : 'bg-white/20'
              )}
              style={{
                top: `${i * 10}%`,
                left: `-${i * 10}%`,
              }}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default React.memo(Toast_38); 