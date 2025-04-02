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

const Toast_44: React.FC<ExtendedToastProps> = ({
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
          initial: { x: 300, opacity: 0, skewX: -10 },
          animate: { x: 0, opacity: 1, skewX: 0 },
          exit: { x: 300, opacity: 0, skewX: 10 },
          transition: { type: "spring", stiffness: 200, damping: 20 }
        };
      case "bounce":
        return {
          initial: { scale: 0.9, y: -20, opacity: 0, skewY: -5 },
          animate: { scale: 1, y: 0, opacity: 1, skewY: 0 },
          exit: { scale: 0.9, y: -20, opacity: 0, skewY: 5 },
          transition: { type: "spring", stiffness: 300, damping: 15 }
        };
      default:
        return {
          initial: { scale: 0.9, opacity: 0, skewX: -10 },
          animate: { scale: 1, opacity: 1, skewX: 0 },
          exit: { scale: 0.9, opacity: 0, skewX: 10 },
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
      {/* Geometric Container */}
      <div className={clsx(
        "relative p-4 rounded-lg overflow-hidden",
        theme === 'dark'
          ? 'bg-gray-800'
          : 'bg-white',
        "shadow-lg"
      )}>
        {/* Geometric Patterns */}
        <div className="absolute inset-0">
          {/* Triangles */}
          <div className={clsx(
            "absolute top-0 right-0 w-16 h-16",
            "bg-gradient-to-br",
            theme === 'dark'
              ? 'from-indigo-500/20 to-transparent'
              : 'from-indigo-400/20 to-transparent',
            "clip-path-triangle"
          )} />
          <div className={clsx(
            "absolute bottom-0 left-0 w-16 h-16",
            "bg-gradient-to-tr",
            theme === 'dark'
              ? 'from-indigo-500/20 to-transparent'
              : 'from-indigo-400/20 to-transparent',
            "clip-path-triangle-inverted"
          )} />
        </div>

        {/* Progress Bar */}
        <motion.div
          initial={{ scaleX: 1 }}
          animate={{ scaleX: 0 }}
          transition={{ duration: duration / 1000, ease: "linear" }}
          style={{ originX: 0 }}
          className={clsx(
            "absolute bottom-0 left-0 right-0 h-1",
            theme === 'dark'
              ? 'bg-gradient-to-r from-indigo-600 to-violet-600'
              : 'bg-gradient-to-r from-indigo-500 to-violet-500'
          )}
        />

        <div className="relative flex items-start space-x-3">
          {/* Icon */}
          {icon && (
            <motion.div
              animate={{ 
                rotate: [0, 90, 180, 270, 360],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                rotate: {
                  duration: 4,
                  repeat: Infinity,
                  ease: "linear"
                },
                scale: {
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
              }}
              className={clsx(
                "flex-shrink-0 w-10 h-10 flex items-center justify-center",
                "bg-gradient-to-br",
                theme === 'dark'
                  ? 'from-indigo-500 to-violet-600 text-white'
                  : 'from-indigo-400 to-violet-500 text-white',
                "clip-path-octagon"
              )}
            >
              <span className="text-xl">{icon}</span>
            </motion.div>
          )}

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
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={actionButton.onClick}
                className={clsx(
                  "mt-2 text-xs font-medium px-4 py-1.5",
                  "bg-gradient-to-r",
                  theme === 'dark'
                    ? 'from-indigo-600 to-violet-600 text-white hover:from-indigo-500 hover:to-violet-500'
                    : 'from-indigo-500 to-violet-500 text-white hover:from-indigo-400 hover:to-violet-400',
                  "clip-path-parallelogram"
                )}
              >
                {actionButton.label}
              </motion.button>
            )}
          </div>

          {/* Close Button */}
          <motion.button
            onClick={close}
            whileHover={{ scale: 1.1, rotate: 90 }}
            whileTap={{ scale: 0.9 }}
            className={clsx(
              "flex-shrink-0 w-8 h-8 flex items-center justify-center",
              theme === 'dark'
                ? 'text-white/70 hover:text-white'
                : 'text-gray-600 hover:text-gray-900',
              "clip-path-diamond"
            )}
          >
            ×
          </motion.button>
        </div>
      </div>

      <style jsx global>{`
        .clip-path-triangle {
          clip-path: polygon(100% 0, 0 0, 100% 100%);
        }
        .clip-path-triangle-inverted {
          clip-path: polygon(0 100%, 100% 100%, 0 0);
        }
        .clip-path-octagon {
          clip-path: polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%);
        }
        .clip-path-parallelogram {
          clip-path: polygon(10% 0%, 100% 0%, 90% 100%, 0% 100%);
        }
        .clip-path-diamond {
          clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
        }
      `}</style>
    </motion.div>
  );
};

export default React.memo(Toast_44); 