import React, { useEffect } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";
import { animationVariants, ThemeClassesBorder, positionClasses, useToastTimer } from "./utils";
import { ToastProps } from "./toast-context";

interface ExtendedToastProps extends ToastProps {
  audio?: string;
}

const Toast_45: React.FC<ExtendedToastProps> = ({
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
      initial={{ scale: 0, rotate: -15 }}
      animate={{ scale: 1, rotate: 0 }}
      exit={{ scale: 0, rotate: 15 }}
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
        theme === 'dark' ? 'bg-slate-900' : 'bg-white',
        "shadow-lg",
        "transform-style-preserve-3d"
      )}>
        {/* Origami Fold Lines */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full border-t border-l opacity-30" />
          <div className="absolute bottom-0 right-0 w-full h-full border-b border-r opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-br opacity-5" />
        </div>

        {/* Corner Folds */}
        <div className="absolute top-0 right-0 w-8 h-8">
          <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/10 transform rotate-45" />
        </div>
        <div className="absolute bottom-0 left-0 w-8 h-8">
          <div className="absolute inset-0 bg-gradient-to-tl from-transparent to-black/10 transform -rotate-45" />
        </div>

        <div className="relative flex items-start space-x-3">
          {/* Icon Container */}
          <motion.div
            whileHover={{ rotateY: 180 }}
            transition={{ duration: 0.6 }}
            className={clsx(
              "flex-shrink-0 w-10 h-10",
              "flex items-center justify-center",
              theme === 'dark' ? 'bg-slate-800' : 'bg-slate-100',
              "transform-style-preserve-3d"
            )}
          >
            <span className="text-xl">{icon}</span>
          </motion.div>

          {/* Content */}
          <div className="flex-1">
            <p className={clsx(
              "text-sm",
              theme === 'dark' ? 'text-white' : 'text-slate-900'
            )}>
              {message}
            </p>

            {actionButton && (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={actionButton.onClick}
                className={clsx(
                  "mt-2 px-4 py-1 text-sm",
                  theme === 'dark'
                    ? 'bg-slate-800 text-white hover:bg-slate-700'
                    : 'bg-slate-100 text-slate-900 hover:bg-slate-200',
                  "transition-all duration-200"
                )}
              >
                {actionButton.label}
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
              theme === 'dark' ? 'text-white' : 'text-slate-900',
              "transition-transform duration-200"
            )}
          >
            ×
          </motion.button>
        </div>

        {/* Progress Bar */}
        <motion.div
          initial={{ scaleX: 1 }}
          animate={{ scaleX: 0 }}
          transition={{ duration: duration / 1000, ease: "linear" }}
          style={{ originX: 0 }}
          className={clsx(
            "absolute bottom-0 left-0 right-0 h-0.5",
            theme === 'dark' ? 'bg-slate-600' : 'bg-slate-300'
          )}
        />
      </div>
    </motion.div>
  );
};

export default React.memo(Toast_45); 