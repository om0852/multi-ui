import React, { useEffect } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";
import { animationVariants, ThemeClassesBorder, positionClasses, useToastTimer } from "./utils";
import { ToastProps } from "./toast-context";

interface ExtendedToastProps extends ToastProps {
  audio?: string;
}

const Toast_50: React.FC<ExtendedToastProps> = ({
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
      initial={{ opacity: 0, y: -20, rotateX: 45 }}
      animate={{ opacity: 1, y: 0, rotateX: 0 }}
      exit={{ opacity: 0, y: 20, rotateX: -45 }}
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
        theme === 'dark'
          ? 'bg-gray-900/40 backdrop-blur-xl'
          : 'bg-white/40 backdrop-blur-xl',
        "border border-white/20",
        "shadow-[0_0_20px_rgba(255,255,255,0.1)]",
        "overflow-hidden"
      )}>
        {/* Crystal Facets */}
        <div className="absolute inset-0">
          <motion.div
            animate={{
              opacity: [0.1, 0.2, 0.1],
              rotate: [0, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute inset-0 bg-[conic-gradient(from_0deg,transparent,rgba(255,255,255,0.1),transparent)]"
          />
          <motion.div
            animate={{
              opacity: [0.05, 0.15, 0.05],
              rotate: [360, 0],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent,rgba(255,255,255,0.1))]"
          />
        </div>

        {/* Light Refraction */}
        <motion.div
          animate={{
            x: ["0%", "100%"],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12"
        />

        <div className="relative flex items-start space-x-3">
          {/* Crystal Icon Container */}
          <motion.div
            whileHover={{
              scale: 1.1,
              rotateY: 180,
              transition: { duration: 0.6 },
            }}
            className={clsx(
              "flex-shrink-0 w-10 h-10 rounded-lg",
              "flex items-center justify-center",
              theme === 'dark'
                ? 'bg-white/10'
                : 'bg-black/5',
              "border border-white/20",
              "backdrop-blur-sm",
              "relative overflow-hidden"
            )}
          >
            <span className={clsx(
              "relative z-10 text-xl",
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            )}>
              {icon}
            </span>
            <motion.div
              animate={{
                backgroundPosition: ["0% 0%", "100% 100%"],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"
            />
          </motion.div>

          {/* Content */}
          <div className="flex-1">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className={clsx(
                "text-sm",
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              )}
            >
              {message}
            </motion.p>

            {actionButton && (
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 20px rgba(255,255,255,0.2)",
                }}
                whileTap={{ scale: 0.95 }}
                onClick={actionButton.onClick}
                className={clsx(
                  "mt-2 px-4 py-1.5 text-sm rounded-lg",
                  theme === 'dark'
                    ? 'bg-white/10 text-white hover:bg-white/20'
                    : 'bg-black/5 text-gray-900 hover:bg-black/10',
                  "backdrop-blur-sm",
                  "border border-white/20",
                  "transition-all duration-300"
                )}
              >
                {actionButton.label}
              </motion.button>
            )}
          </div>

          {/* Close Button */}
          <motion.button
            whileHover={{
              rotate: 180,
              scale: 1.1,
              boxShadow: "0 0 10px rgba(255,255,255,0.2)",
            }}
            whileTap={{ scale: 0.9 }}
            onClick={close}
            className={clsx(
              "flex-shrink-0 w-6 h-6 rounded-full",
              "flex items-center justify-center",
              theme === 'dark'
                ? 'bg-white/10 text-white hover:bg-white/20'
                : 'bg-black/5 text-gray-900 hover:bg-black/10',
              "backdrop-blur-sm",
              "border border-white/20"
            )}
          >
            ×
          </motion.button>
        </div>

        {/* Crystal Progress Bar */}
        <div className="relative h-1 mt-3">
          <div className={clsx(
            "absolute inset-0 rounded-full",
            theme === 'dark'
              ? 'bg-white/5'
              : 'bg-black/5'
          )} />
          <motion.div
            initial={{ scaleX: 1 }}
            animate={{ scaleX: 0 }}
            transition={{ duration: duration / 1000, ease: "linear" }}
            style={{ originX: 0 }}
            className={clsx(
              "absolute inset-0 rounded-full",
              "bg-gradient-to-r from-white/30 to-white/10",
              "backdrop-blur-sm"
            )}
          >
            {/* Prismatic Effect */}
            <motion.div
              animate={{
                x: ["0%", "100%"],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
            />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default React.memo(Toast_50); 