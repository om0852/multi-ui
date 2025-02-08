import React, { useEffect } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";
import { animationVariants, ThemeClassesBorder, positionClasses, useToastTimer } from "./utils";
import { ToastProps } from "./toast-context";

interface ExtendedToastProps extends ToastProps {
  audio?: string;
}

const Toast_49: React.FC<ExtendedToastProps> = ({
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
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.9, opacity: 0 }}
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
        "relative p-4 rounded-lg",
        theme === 'dark' ? 'bg-gray-900' : 'bg-white',
        "shadow-lg",
        "overflow-hidden"
      )}>
        {/* Ink Splatter Background */}
        <div className="absolute inset-0">
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.1 }}
            transition={{ duration: 0.5 }}
            className={clsx(
              "absolute -right-4 -top-4 w-32 h-32 rounded-full",
              theme === 'dark'
                ? 'bg-indigo-500'
                : 'bg-indigo-400',
              "filter blur-xl"
            )}
          />
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className={clsx(
              "absolute -left-4 -bottom-4 w-32 h-32 rounded-full",
              theme === 'dark'
                ? 'bg-purple-500'
                : 'bg-purple-400',
              "filter blur-xl"
            )}
          />
        </div>

        {/* Ink Flow Animation */}
        <motion.div
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
          }}
          className={clsx(
            "absolute inset-0 opacity-20",
            "bg-[radial-gradient(circle,rgba(0,0,0,0.1)_1px,transparent_1px)]",
            "bg-[length:16px_16px]"
          )}
        />

        <div className="relative flex items-start space-x-3">
          {/* Icon with Ink Effect */}
          <motion.div
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.2 },
            }}
            className={clsx(
              "flex-shrink-0 w-10 h-10 rounded-lg",
              "flex items-center justify-center",
              theme === 'dark'
                ? 'bg-gray-800 text-white'
                : 'bg-gray-100 text-gray-900',
              "relative overflow-hidden"
            )}
          >
            <span className="relative z-10 text-xl">{icon}</span>
            <motion.div
              animate={{
                y: [0, -100],
                opacity: [0.5, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "linear",
              }}
              className={clsx(
                "absolute inset-0",
                theme === 'dark'
                  ? 'bg-gradient-to-t from-indigo-500/20 to-transparent'
                  : 'bg-gradient-to-t from-indigo-400/20 to-transparent'
              )}
            />
          </motion.div>

          {/* Content */}
          <div className="flex-1">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={clsx(
                "text-sm",
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              )}
            >
              {message}
            </motion.p>

            {actionButton && (
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={actionButton.onClick}
                className={clsx(
                  "mt-2 px-4 py-1.5 text-sm rounded-lg",
                  theme === 'dark'
                    ? 'bg-gray-800 text-white hover:bg-gray-700'
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200',
                  "relative overflow-hidden"
                )}
              >
                <span className="relative z-10">{actionButton.label}</span>
                <motion.div
                  animate={{
                    y: [50, -50],
                    opacity: [0.2, 0],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className={clsx(
                    "absolute inset-0",
                    theme === 'dark'
                      ? 'bg-gradient-to-t from-indigo-500/20 to-transparent'
                      : 'bg-gradient-to-t from-indigo-400/20 to-transparent'
                  )}
                />
              </motion.button>
            )}
          </div>

          {/* Close Button */}
          <motion.button
            whileHover={{ rotate: 90 }}
            whileTap={{ scale: 0.9 }}
            onClick={close}
            className={clsx(
              "flex-shrink-0 w-6 h-6",
              "flex items-center justify-center",
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            )}
          >
            ×
          </motion.button>
        </div>

        {/* Ink Progress Bar */}
        <div className="relative h-1 mt-3">
          <div className={clsx(
            "absolute inset-0 rounded-full",
            theme === 'dark'
              ? 'bg-gray-800'
              : 'bg-gray-200'
          )} />
          <motion.div
            initial={{ scaleX: 1 }}
            animate={{ scaleX: 0 }}
            transition={{ duration: duration / 1000, ease: "linear" }}
            style={{ originX: 0 }}
            className={clsx(
              "absolute inset-0 rounded-full",
              theme === 'dark'
                ? 'bg-gradient-to-r from-indigo-500 to-purple-500'
                : 'bg-gradient-to-r from-indigo-400 to-purple-400'
            )}
          >
            {/* Ink Flow Effect */}
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

export default React.memo(Toast_49); 