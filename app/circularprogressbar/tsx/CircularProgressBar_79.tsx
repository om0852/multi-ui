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

  // Generate crystal points
  const crystalPoints = Array.from({ length: 8 }).map((_, i) => {
    const angle = (i / 8) * Math.PI * 2;
    const x = Math.cos(angle) * radius;
    const y = Math.sin(angle) * radius;
    return { x, y };
  });

  return (
    <div className="relative flex items-center justify-center" style={{ width: size, height: size }}>
      {/* Crystal effect definitions */}
      <svg style={{ position: 'absolute', width: 0, height: 0 }}>
        <defs>
          <linearGradient id="crystal-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#a5f3fc" stopOpacity="0.9">
              <animate
                attributeName="stop-color"
                values="#a5f3fc;#7dd3fc;#a5f3fc"
                dur="3s"
                repeatCount="indefinite"
              />
            </stop>
            <stop offset="100%" stopColor="#0ea5e9" stopOpacity="1">
              <animate
                attributeName="stop-color"
                values="#0ea5e9;#0284c7;#0ea5e9"
                dur="2s"
                repeatCount="indefinite"
              />
            </stop>
          </linearGradient>
          <filter id="crystal-glow">
            <feGaussianBlur in="SourceGraphic" stdDeviation="2" />
            <feColorMatrix
              type="matrix"
              values="
                1 0 0 0 0
                0 1 0 0 0
                0 0 1.5 0 0
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
          border: `${strokeWidth}px solid rgba(14, 165, 233, 0.2)`,
          clipPath: "url(#container-clip)",
          background: "linear-gradient(to bottom, rgba(186, 230, 253, 0.1), rgba(14, 165, 233, 0.15))",
          backdropFilter: "blur(4px)",
        }}
      >
        {/* Crystal fill */}
        <motion.div
          className="absolute bottom-0 w-full"
          initial={{ height: 0 }}
          animate={{ height: fillHeight }}
          transition={{ duration: 2, ease: "easeOut" }}
          style={{
            background: "url(#crystal-gradient)",
            filter: "url(#crystal-glow)",
          }}
        >
          {/* Crystal formations */}
          {crystalPoints.map((point, i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{
                left: `${50 + (point.x / radius) * 45}%`,
                bottom: `${50 + (point.y / radius) * 45}%`,
                width: 0,
                height: 0,
              }}
              initial={{ scale: 0 }}
              animate={{
                scale: [0, 1, 0.8],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.2,
                ease: "easeInOut",
              }}
            >
              <div
                style={{
                  width: 0,
                  height: 0,
                  borderLeft: "10px solid transparent",
                  borderRight: "10px solid transparent",
                  borderBottom: "20px solid rgba(186, 230, 253, 0.6)",
                  filter: "url(#crystal-glow)",
                  transform: `rotate(${45 * i}deg)`,
                }}
              />
            </motion.div>
          ))}

          {/* Sparkles */}
          {Array.from({ length: 10 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{
                width: 4,
                height: 4,
                borderRadius: "50%",
                background: "#fff",
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                scale: [0, 1, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: "easeInOut",
              }}
            />
          ))}
        </motion.div>

        {/* Crystal surface */}
        <motion.div
          className="absolute w-full"
          style={{
            height: 2,
            bottom: `${percentage}%`,
            background: "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.8), transparent)",
          }}
          animate={{
            opacity: [0.4, 0.8, 0.4],
            x: ["-100%", "100%"],
          }}
          transition={{
            opacity: {
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            },
            x: {
              duration: 3,
              repeat: Infinity,
              ease: "linear",
            },
          }}
        />
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
            textShadow: "0 2px 8px rgba(14, 165, 233, 0.6)",
          }}
          animate={{
            opacity: [1, 0.8, 1],
            textShadow: [
              "0 2px 8px rgba(14, 165, 233, 0.6)",
              "0 2px 12px rgba(14, 165, 233, 0.8)",
              "0 2px 8px rgba(14, 165, 233, 0.6)",
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