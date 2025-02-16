import React, { useEffect } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";
import { 
  positionClasses, 
  useToastTimer,
  ToastProps,
  ToastAnimationType,
  ToastTheme
} from "./utils";

interface ExtendedToastProps extends Omit<ToastProps, 'theme' | 'animationType'> {
  audio?: string;
  theme?: ToastTheme;
  animationType?: ToastAnimationType;
}

const Toast_24: React.FC<ExtendedToastProps> = ({
  message,
  close,
  icon,
  position = "bottom-center",
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
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 50, opacity: 0 }}
      transition={{ 
        type: "spring", 
        stiffness: animationType === "bounce" ? 300 : 200, 
        damping: animationType === "bounce" ? 15 : 20 
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={clsx(
        "relative p-4 z-50",
        "w-[300px]",
        theme === 'dark' ? 'bg-gray-900' : 'bg-white',
        positionClasses[position],
        stack ? "static" : "fixed",
        "rounded-lg overflow-hidden",
        "before:absolute before:inset-0 before:p-[2px] before:bg-gradient-to-r before:from-pink-500 before:via-purple-500 before:to-blue-500",
        "before:rounded-lg before:-z-10 before:content-['']",
        "after:absolute after:inset-[2px] after:bg-inherit after:rounded-lg after:-z-10 after:content-['']"
      )}
    >
      {/* Progress Ring */}
      <motion.div
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ duration: duration / 1000, ease: "linear" }}
        className="absolute -right-1 -top-1 w-6 h-6"
      >
        <svg viewBox="0 0 24 24" className="w-full h-full">
          <circle
            cx="12"
            cy="12"
            r="10"
            stroke={theme === 'dark' ? '#4B5563' : '#E5E7EB'}
            strokeWidth="2"
            fill="none"
          />
          <motion.circle
            cx="12"
            cy="12"
            r="10"
            stroke={theme === 'dark' ? '#60A5FA' : '#3B82F6'}
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 1 }}
            animate={{ pathLength: 0 }}
            transition={{ duration: duration / 1000, ease: "linear" }}
          />
        </svg>
      </motion.div>

      <div className="flex items-start space-x-3">
        {/* Icon */}
        <div className={clsx(
          "flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center",
          theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'
        )}>
          <span className="text-lg">{icon}</span>
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <p className={clsx(
            "text-sm font-medium",
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          )}>
            {message}
          </p>

          {/* Action Button */}
          {actionButton && (
            <button
              onClick={actionButton.onClick}
              className={clsx(
                "mt-2 text-xs font-medium px-2 py-1 rounded",
                theme === 'dark' 
                  ? 'bg-gray-800 text-gray-300 hover:bg-gray-700' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              )}
            >
              {actionButton.label}
            </button>
          )}
        </div>

        {/* Close Button */}
        <button
          onClick={close}
          className={clsx(
            "flex-shrink-0 w-5 h-5 flex items-center justify-center rounded-full",
            theme === 'dark' 
              ? 'text-gray-400 hover:text-white hover:bg-gray-800' 
              : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100'
          )}
        >
          ×
        </button>
      </div>
    </motion.div>
  );
};

export default React.memo(Toast_24); 