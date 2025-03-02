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

  const getAnimationConfig = () => {
    switch (animationType) {
      case "slide":
        return {
          initial: { x: -100, opacity: 0 },
          animate: { x: 0, opacity: 1 },
          exit: { x: -100, opacity: 0 },
          transition: { type: "spring", stiffness: 200, damping: 20 }
        };
      case "fade":
        return {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          exit: { opacity: 0 },
          transition: { duration: 0.2 }
        };
      default:
        return {
          initial: { x: -100, opacity: 0 },
          animate: { x: 0, opacity: 1 },
          exit: { x: -100, opacity: 0 },
          transition: { type: "spring", stiffness: 200, damping: 20 }
        };
    }
  };

  const animation = getAnimationConfig();

  return (
    <motion.div
      {...animation}
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
        <div className="relative p-4">
          <div className="flex items-start space-x-3">
            {/* Icon */}
            {icon && (
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className={clsx(
                  "flex-shrink-0 w-8 h-8 rounded-none flex items-center justify-center",
                  theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'
                )}
              >
                <span className="text-lg">{icon}</span>
              </motion.div>
            )}

            {/* Content */}
            <div className="flex-1 min-w-0">
              <p className={clsx(
                "text-sm font-mono",
                theme === 'dark' ? 'text-black' : 'text-white'
              )}>
                {message}
              </p>

              {/* Action Button */}
              {actionButton && (
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={actionButton.onClick}
                  className={clsx(
                    "mt-2 text-xs font-mono px-3 py-1",
                    theme === 'dark'
                      ? 'bg-black text-white hover:bg-gray-900'
                      : 'bg-white text-black hover:bg-gray-100'
                  )}
                >
                  {actionButton.label}
                </motion.button>
              )}
            </div>

            {/* Close Button */}
            <motion.button
              onClick={close}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className={clsx(
                "flex-shrink-0 w-6 h-6 flex items-center justify-center",
                theme === 'dark'
                  ? 'text-black hover:bg-black hover:text-white'
                  : 'text-white hover:bg-white hover:text-black'
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
              "absolute bottom-0 left-0 right-0 h-1",
              theme === 'dark' ? 'bg-black' : 'bg-white'
            )}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default React.memo(Toast_30); 