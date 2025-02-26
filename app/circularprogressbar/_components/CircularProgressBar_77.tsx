import React from "react";
import { motion } from "framer-motion";

interface CircularProgressBarProps {
  value: number;
  max: number;
  size?: number;
  strokeWidth?: number;
}

const CircularProgressBar: React.FC<CircularProgressBarProps> = ({
  value,
  max,
  size = 100,
  strokeWidth = 8,
}) => {
  const radius = (size - strokeWidth) / 2;
  const percentage = (value / max) * 100;
  const fillHeight = (percentage / 100) * size;

  return (
    <div className="relative flex items-center justify-center" style={{ width: size, height: size }}>
      {/* Lava effect definitions */}
      <svg style={{ position: 'absolute', width: 0, height: 0 }}>
        <defs>
          <linearGradient id="lava-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#ff4d00" stopOpacity="0.9">
              <animate
                attributeName="stop-color"
                values="#ff4d00;#ff6b00;#ff4d00"
                dur="3s"
                repeatCount="indefinite"
              />
            </stop>
            <stop offset="100%" stopColor="#ff0000" stopOpacity="1">
              <animate
                attributeName="stop-color"
                values="#ff0000;#ff2b00;#ff0000"
                dur="2s"
                repeatCount="indefinite"
              />
            </stop>
          </linearGradient>
          <filter id="lava-glow">
            <feGaussianBlur in="SourceGraphic" stdDeviation="4" />
            <feColorMatrix
              type="matrix"
              values="
                1 0 0 0 0
                0 0.5 0 0 0
                0 0 0 0 0
                0 0 0 1 0"
            />
          </filter>
          <clipPath id="container-clip">
            <circle cx={size / 2} cy={size / 2} r={radius} />
          </clipPath>
        </defs>
      </svg>

      {/* Container */}
      <div 
        className="absolute rounded-full overflow-hidden"
        style={{
          width: size,
          height: size,
          border: `${strokeWidth}px solid rgba(64, 32, 0, 0.3)`,
          clipPath: "url(#container-clip)",
          background: "linear-gradient(to bottom, rgba(64, 32, 0, 0.2), rgba(32, 16, 0, 0.3))",
        }}
      >
        {/* Lava fill */}
        <motion.div
          className="absolute bottom-0 w-full"
          initial={{ height: 0 }}
          animate={{ height: fillHeight }}
          transition={{ duration: 2, ease: "easeOut" }}
          style={{
            background: "url(#lava-gradient)",
            filter: "url(#lava-glow)",
          }}
        >
          {/* Lava bubbles */}
          {Array.from({ length: 12 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full"
              style={{
                width: 6 + Math.random() * 8,
                height: 6 + Math.random() * 8,
                left: `${Math.random() * 100}%`,
                bottom: "0%",
                background: "radial-gradient(circle at 30% 30%, #ffdb4d, #ff4d00)",
                boxShadow: "0 0 10px #ff4d00",
              }}
              animate={{
                y: [0, -size * 0.6],
                x: [0, (Math.random() - 0.5) * 30],
                scale: [1, 0.2],
                opacity: [0.8, 0],
              }}
              transition={{
                duration: 1.5 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: "easeOut",
              }}
            />
          ))}

          {/* Lava surface */}
          <motion.div
            className="absolute w-full h-4 bottom-0"
            style={{
              background: "url(#lava-gradient)",
              filter: "url(#lava-glow)",
            }}
            animate={{
              scaleY: [1, 1.2, 1],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      </div>

      {/* Percentage display */}
      <motion.div
        className="absolute z-10 flex items-center justify-center"
        style={{
          width: size - strokeWidth * 4,
          height: size - strokeWidth * 4,
        }}
      >
        <motion.span
          className="text-xl font-bold text-white"
          style={{
            textShadow: "0 2px 8px rgba(255,77,0,0.6)",
          }}
          animate={{
            opacity: [1, 0.8, 1],
            textShadow: [
              "0 2px 8px rgba(255,77,0,0.6)",
              "0 2px 12px rgba(255,77,0,0.8)",
              "0 2px 8px rgba(255,77,0,0.6)",
            ],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {Math.round(percentage)}%
        </motion.span>
      </motion.div>
    </div>
  );
};

export default CircularProgressBar; 