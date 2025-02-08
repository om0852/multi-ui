import React, { useEffect } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";
import { animationVariants, ThemeClassesBorder, positionClasses, useToastTimer } from "./utils";
import { ToastProps } from "./toast-context";

interface ExtendedToastProps extends ToastProps {
  audio?: string;
}

const Toast_39: React.FC<ExtendedToastProps> = ({
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
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0, opacity: 0 }}
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
      <div className={clsx(
        "relative p-4",
        theme === 'dark' ? 'bg-gray-900' : 'bg-white',
        "border-4 border-dashed",
        theme === 'dark' ? 'border-cyan-400' : 'border-cyan-500',
        "shadow-[4px_4px_0px_0px] shadow-cyan-500",
      )}>
        {/* Pixel Corner Accents */}
        <div className="absolute top-0 left-0 w-3 h-3 bg-cyan-500" />
        <div className="absolute top-0 right-0 w-3 h-3 bg-cyan-500" />
        <div className="absolute bottom-0 left-0 w-3 h-3 bg-cyan-500" />
        <div className="absolute bottom-0 right-0 w-3 h-3 bg-cyan-500" />

        <div className="flex items-start space-x-3">
          {/* Pixelated Icon */}
          <motion.div
            animate={{ rotate: [0, 90, 180, 270, 360] }}
            transition={{ duration: 2, repeat: Infinity, ease: "steps(8)" }}
            className={clsx(
              "flex-shrink-0 w-10 h-10",
              "border-2 border-cyan-500",
              "flex items-center justify-center",
              theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'
            )}
          >
            <span className="text-xl">{icon}</span>
          </motion.div>

          {/* Content */}
          <div className="flex-1">
            <p className={clsx(
              "font-pixel text-sm",
              theme === 'dark' ? 'text-white' : 'text-gray-900',
              "mb-2"
            )}>
              {message}
            </p>

            {actionButton && (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={actionButton.onClick}
                className={clsx(
                  "px-4 py-1 text-sm",
                  "border-2 border-cyan-500",
                  theme === 'dark'
                    ? 'bg-gray-800 text-cyan-400 hover:bg-gray-700'
                    : 'bg-gray-100 text-cyan-600 hover:bg-gray-200'
                )}
              >
                [{actionButton.label}]
              </motion.button>
            )}
          </div>

          {/* Close Button */}
          <button
            onClick={close}
            className={clsx(
              "w-8 h-8 flex items-center justify-center",
              "border-2 border-cyan-500",
              theme === 'dark'
                ? 'bg-gray-800 text-cyan-400 hover:bg-gray-700'
                : 'bg-gray-100 text-cyan-600 hover:bg-gray-200'
            )}
          >
            ×
          </button>
        </div>

        {/* Progress Bar */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-800">
          <motion.div
            initial={{ width: "100%" }}
            animate={{ width: "0%" }}
            transition={{ duration: duration / 1000, ease: "steps(100)" }}
            className={clsx(
              "h-full",
              theme === 'dark' ? 'bg-cyan-400' : 'bg-cyan-500'
            )}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default React.memo(Toast_39); 