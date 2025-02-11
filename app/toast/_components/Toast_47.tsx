import React, { useEffect } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";
import { animationVariants, ThemeClassesBorder, positionClasses, useToastTimer } from "./utils";
import { ToastProps } from "./toast-context";

interface ExtendedToastProps extends ToastProps {
  audio?: string;
}

const Toast_47: React.FC<ExtendedToastProps> = ({
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
      initial={{ scale: 0.5, y: -20 }}
      animate={{ scale: 1, y: 0 }}
      exit={{ scale: 0.5, y: 20 }}
      transition={{ type: "spring", bounce: 0.5 }}
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
        "relative p-4 rounded-2xl",
        theme === 'dark'
          ? 'bg-gradient-to-br from-pink-500 via-purple-500 to-blue-500'
          : 'bg-gradient-to-br from-pink-300 via-purple-300 to-blue-300',
        "border-4 border-white/30",
        "shadow-lg shadow-pink-500/20"
      )}>
        {/* Candy Stripe Background */}
        <div className="absolute inset-0 overflow-hidden rounded-xl opacity-10">
          <motion.div
            animate={{ backgroundPosition: ["0px 0px", "20px 20px"] }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0"
            style={{
              backgroundImage: `repeating-linear-gradient(
                45deg,
                white 0px,
                white 10px,
                transparent 10px,
                transparent 20px
              )`
            }}
          />
        </div>

        {/* Bubble Animation */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -20],
              opacity: [0, 1, 0],
              scale: [1, 1.2, 0.8],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.4,
              ease: "easeOut",
            }}
            className="absolute w-3 h-3 rounded-full bg-white/30"
            style={{
              left: `${20 + i * 15}%`,
              bottom: "10%",
            }}
          />
        ))}

        <div className="relative flex items-start space-x-3">
          {/* Sweet Icon */}
          <motion.div
            animate={{
              rotate: [0, 10, -10, 0],
              scale: [1, 1.1, 0.9, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className={clsx(
              "flex-shrink-0 w-10 h-10 rounded-full",
              "flex items-center justify-center",
              "bg-white/20 backdrop-blur-sm",
              "text-white",
              "border-2 border-white/30"
            )}
          >
            <span className="text-xl">{icon}</span>
          </motion.div>

          {/* Content */}
          <div className="flex-1">
            <p className={clsx(
              "text-sm font-medium",
              "text-white"
            )}>
              {message}
            </p>

            {actionButton && (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={actionButton.onClick}
                className={clsx(
                  "mt-2 px-4 py-1.5 text-sm rounded-full",
                  "bg-white/20 backdrop-blur-sm",
                  "text-white",
                  "border border-white/30",
                  "hover:bg-white/30",
                  "transition-all duration-200"
                )}
              >
                {actionButton.label}
              </motion.button>
            )}
          </div>

          {/* Close Button */}
          <motion.button
            whileHover={{ rotate: 180, scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={close}
            className={clsx(
              "flex-shrink-0 w-6 h-6 rounded-full",
              "flex items-center justify-center",
              "bg-white/20 backdrop-blur-sm",
              "text-white",
              "border border-white/30",
              "hover:bg-white/30"
            )}
          >
            ×
          </motion.button>
        </div>

        {/* Sweet Progress Bar */}
        <div className="relative h-1.5 mt-3 bg-white/20 rounded-full overflow-hidden">
          <motion.div
            initial={{ scaleX: 1 }}
            animate={{ scaleX: 0 }}
            transition={{ duration: duration / 1000, ease: "linear" }}
            style={{ originX: 0 }}
            className="absolute inset-0 bg-white/50"
          >
            {/* Sparkle Effect */}
            <motion.div
              animate={{ x: ["0%", "100%"] }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              className="absolute inset-y-0 w-20 bg-gradient-to-r from-transparent via-white to-transparent"
            />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default React.memo(Toast_47); 