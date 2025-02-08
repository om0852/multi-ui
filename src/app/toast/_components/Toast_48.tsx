import React, { useEffect } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";
import { animationVariants, ThemeClassesBorder, positionClasses, useToastTimer } from "./utils";
import { ToastProps } from "./toast-context";

interface ExtendedToastProps extends ToastProps {
  audio?: string;
}

const Toast_48: React.FC<ExtendedToastProps> = ({
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
      initial={{ x: 50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -50, opacity: 0 }}
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
        "relative p-4",
        theme === 'dark' ? 'bg-gray-900' : 'bg-gray-100',
        "before:absolute before:inset-0 before:bg-gradient-to-r before:from-blue-500/20 before:via-purple-500/20 before:to-red-500/20",
        "overflow-hidden"
      )}>
        {/* Glitch Layers */}
        <motion.div
          animate={{
            x: [0, -5, 5, -2, 0],
            opacity: [1, 0.8, 0.9, 0.7, 1],
          }}
          transition={{
            duration: 0.2,
            repeat: Infinity,
            repeatDelay: 3,
          }}
          className={clsx(
            "absolute inset-0 z-10",
            theme === 'dark'
              ? 'bg-blue-500/20'
              : 'bg-blue-500/10',
            "mix-blend-screen"
          )}
        />
        <motion.div
          animate={{
            x: [0, 5, -5, 2, 0],
            opacity: [1, 0.9, 0.7, 0.8, 1],
          }}
          transition={{
            duration: 0.2,
            repeat: Infinity,
            repeatDelay: 3,
          }}
          className={clsx(
            "absolute inset-0 z-20",
            theme === 'dark'
              ? 'bg-red-500/20'
              : 'bg-red-500/10',
            "mix-blend-screen"
          )}
        />

        {/* Scan Lines */}
        <div className="absolute inset-0 bg-[linear-gradient(transparent_0%,rgba(255,255,255,0.1)_50%,transparent_100%)] bg-[length:100%_4px]" />

        {/* Digital Noise */}
        <motion.div
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute inset-0 opacity-[0.02] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iLjc1IiBzdGl0Y2hUaWxlcz0ic3RpdGNoIi8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjMwMCIgaGVpZ2h0PSIzMDAiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iMC4wNSIvPjwvc3ZnPg==')]" />

        <div className="relative flex items-start space-x-3">
          {/* Glitched Icon */}
          <motion.div
            animate={{
              x: [0, -2, 2, -1, 0],
              y: [0, 1, -1, 1, 0],
            }}
            transition={{
              duration: 0.2,
              repeat: Infinity,
              repeatDelay: 2,
            }}
            className={clsx(
              "flex-shrink-0 w-10 h-10",
              "flex items-center justify-center",
              theme === 'dark'
                ? 'bg-gray-800 text-white'
                : 'bg-gray-200 text-gray-900',
              "relative"
            )}
          >
            <span className="relative z-10 text-xl">{icon}</span>
            <motion.span
              animate={{
                opacity: [0, 1, 0],
                x: [-2, 2, -2],
              }}
              transition={{
                duration: 0.2,
                repeat: Infinity,
                repeatDelay: 2,
              }}
              className="absolute inset-0 flex items-center justify-center text-xl text-red-500"
            >
              {icon}
            </motion.span>
            <motion.span
              animate={{
                opacity: [0, 1, 0],
                x: [2, -2, 2],
              }}
              transition={{
                duration: 0.2,
                repeat: Infinity,
                repeatDelay: 2,
              }}
              className="absolute inset-0 flex items-center justify-center text-xl text-blue-500"
            >
              {icon}
            </motion.span>
          </motion.div>

          {/* Content */}
          <div className="flex-1">
            <motion.p
              animate={{
                x: [0, -1, 1, -0.5, 0],
              }}
              transition={{
                duration: 0.2,
                repeat: Infinity,
                repeatDelay: 3,
              }}
              className={clsx(
                "text-sm font-mono",
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              )}
            >
              {message}
            </motion.p>

            {actionButton && (
              <motion.button
                whileHover={{
                  x: [-2, 2, -1, 1, 0],
                  transition: { duration: 0.2 },
                }}
                onClick={actionButton.onClick}
                className={clsx(
                  "mt-2 px-4 py-1.5 text-sm font-mono",
                  theme === 'dark'
                    ? 'bg-gray-800 text-white hover:bg-gray-700'
                    : 'bg-gray-200 text-gray-900 hover:bg-gray-300',
                  "relative overflow-hidden"
                )}
              >
                <span className="relative z-10">{actionButton.label}</span>
                <motion.div
                  animate={{
                    opacity: [0, 0.5, 0],
                    x: [-100, 100],
                  }}
                  transition={{
                    duration: 0.5,
                    repeat: Infinity,
                    repeatDelay: 2,
                  }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                />
              </motion.button>
            )}
          </div>

          {/* Close Button */}
          <motion.button
            whileHover={{
              scale: [1, 1.2, 0.8, 1.1, 1],
              transition: { duration: 0.2 },
            }}
            onClick={close}
            className={clsx(
              "flex-shrink-0 w-6 h-6",
              "flex items-center justify-center",
              "font-mono",
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            )}
          >
            ×
          </motion.button>
        </div>

        {/* Glitched Progress Bar */}
        <div className="relative h-0.5 mt-3">
          <motion.div
            initial={{ scaleX: 1 }}
            animate={{ scaleX: 0 }}
            transition={{ duration: duration / 1000, ease: "steps(50)" }}
            style={{ originX: 0 }}
            className={clsx(
              "absolute inset-0",
              theme === 'dark'
                ? 'bg-white'
                : 'bg-gray-900'
            )}
          >
            <motion.div
              animate={{
                opacity: [1, 0.5, 1],
                x: [-2, 2, -2],
              }}
              transition={{
                duration: 0.2,
                repeat: Infinity,
              }}
              className="absolute inset-0 bg-red-500 mix-blend-screen"
            />
            <motion.div
              animate={{
                opacity: [1, 0.5, 1],
                x: [2, -2, 2],
              }}
              transition={{
                duration: 0.2,
                repeat: Infinity,
              }}
              className="absolute inset-0 bg-blue-500 mix-blend-screen"
            />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default React.memo(Toast_48); 