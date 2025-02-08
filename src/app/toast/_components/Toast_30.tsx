import React, { useEffect } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";
import { animationVariants, ThemeClassesBorder, positionClasses, useToastTimer } from "./utils";
import { ToastProps } from "./toast-context";

interface ExtendedToastProps extends ToastProps {
  audio?: string;
}

const Toast_30: React.FC<ExtendedToastProps> = ({
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
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -100, opacity: 0 }}
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
      {/* Terminal Container */}
      <div className={clsx(
        "relative rounded-md overflow-hidden",
        theme === 'dark' 
          ? 'bg-black border border-green-500' 
          : 'bg-gray-900 border border-green-400'
      )}>
        {/* Terminal Header */}
        <div className={clsx(
          "px-3 py-1 flex items-center justify-between",
          theme === 'dark' ? 'bg-green-900/20' : 'bg-green-800/20'
        )}>
          <div className="flex space-x-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
          </div>
          <span className={clsx(
            "text-xs font-mono",
            theme === 'dark' ? 'text-green-500' : 'text-green-400'
          )}>
            notification.sh
          </span>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={close}
            className="text-gray-400 hover:text-gray-300"
          >
            ×
          </motion.button>
        </div>

        {/* Content */}
        <div className="p-4 font-mono">
          <div className="flex items-start space-x-3">
            {/* Command Prompt */}
            <div className={clsx(
              "flex-shrink-0",
              theme === 'dark' ? 'text-green-500' : 'text-green-400'
            )}>
              {icon} ~$
            </div>

            {/* Message with Typing Effect */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex-1"
            >
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className={clsx(
                  "text-sm",
                  theme === 'dark' ? 'text-green-500' : 'text-green-400'
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
                    "mt-2 px-3 py-1 text-xs border rounded",
                    theme === 'dark'
                      ? 'border-green-500 text-green-500 hover:bg-green-500/20'
                      : 'border-green-400 text-green-400 hover:bg-green-400/20'
                  )}
                >
                  {actionButton.label}
                </motion.button>
              )}
            </motion.div>
          </div>
        </div>

        {/* Progress Bar */}
        <motion.div
          initial={{ scaleX: 1 }}
          animate={{ scaleX: 0 }}
          transition={{ duration: duration / 1000, ease: "linear" }}
          style={{ originX: 0 }}
          className={clsx(
            "absolute bottom-0 left-0 right-0 h-0.5",
            theme === 'dark' ? 'bg-green-500' : 'bg-green-400'
          )}
        />

        {/* Scan Line Effect */}
        <motion.div
          animate={{
            opacity: [0.1, 0.2, 0.1],
            y: [0, 300, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute inset-0 bg-gradient-to-b from-transparent via-green-500/10 to-transparent pointer-events-none"
        />
      </div>
    </motion.div>
  );
};

export default React.memo(Toast_30); 