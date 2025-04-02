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

  // Generate spiral points
  const numPoints = 100;
  const spiralPoints = Array.from({ length: numPoints }).map((_, i) => {
    const angle = (i / numPoints) * Math.PI * 8;
    const radius = (i / numPoints) * (size / 2);
    const x = Math.cos(angle) * radius;
    const y = Math.sin(angle) * radius;
    return { x, y };
  });

  return (
    <div className="relative flex items-center justify-center" style={{ width: size, height: size }}>
      {/* Galaxy effect definitions */}
      <svg style={{ position: 'absolute', width: 0, height: 0 }}>
        <defs>
          <linearGradient id="galaxy-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#c084fc" stopOpacity="0.9">
              <animate
                attributeName="stop-color"
                values="#c084fc;#a855f7;#c084fc"
                dur="3s"
                repeatCount="indefinite"
              />
            </stop>
            <stop offset="100%" stopColor="#7c3aed" stopOpacity="1">
              <animate
                attributeName="stop-color"
                values="#7c3aed;#6d28d9;#7c3aed"
                dur="2s"
                repeatCount="indefinite"
              />
            </stop>
          </linearGradient>
          <filter id="galaxy-glow">
            <feGaussianBlur in="SourceGraphic" stdDeviation="2" />
            <feColorMatrix
              type="matrix"
              values="
                1.5 0 0 0 0
                0 1.5 0 0 0
                0 0 2 0 0
                0 0 0 2 0"
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
          border: `${strokeWidth}px solid rgba(124, 58, 237, 0.2)`,
          clipPath: "url(#container-clip)",
          background: "linear-gradient(to bottom, rgba(192, 132, 252, 0.1), rgba(124, 58, 237, 0.15))",
          backdropFilter: "blur(4px)",
        }}
      >
        {/* Galaxy fill */}
        <motion.div
          className="absolute bottom-0 w-full"
          initial={{ height: 0 }}
          animate={{ height: fillHeight }}
          transition={{ duration: 2, ease: "easeOut" }}
          style={{
            background: "url(#galaxy-gradient)",
            filter: "url(#galaxy-glow)",
          }}
        >
          {/* Spiral arm */}
          <motion.div
            className="absolute inset-0"
            animate={{ rotate: 360 }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {spiralPoints.map((point, i) => (
              <motion.div
                key={i}
                className="absolute"
                style={{
                  left: `${50 + (point.x / (size / 2)) * 50}%`,
                  top: `${50 + (point.y / (size / 2)) * 50}%`,
                  width: 2,
                  height: 2,
                  background: "#fff",
                  borderRadius: "50%",
                  filter: "url(#galaxy-glow)",
                  opacity: i / numPoints,
                }}
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [i / numPoints, (i / numPoints) * 1.5, i / numPoints],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.02,
                  ease: "easeInOut",
                }}
              />
            ))}
          </motion.div>

          {/* Stars */}
          {Array.from({ length: 30 }).map((_, i) => (
            <motion.div
              key={`star-${i}`}
              className="absolute"
              style={{
                width: 1 + Math.random() * 2,
                height: 1 + Math.random() * 2,
                background: "#fff",
                borderRadius: "50%",
                filter: "url(#galaxy-glow)",
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                scale: [0, 1, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 1 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: "easeInOut",
              }}
            />
          ))}

          {/* Nebula clouds */}
          {Array.from({ length: 3 }).map((_, i) => (
            <motion.div
              key={`nebula-${i}`}
              className="absolute"
              style={{
                width: size * 0.3,
                height: size * 0.3,
                background: "radial-gradient(circle, rgba(192, 132, 252, 0.2) 0%, transparent 70%)",
                filter: "url(#galaxy-glow)",
                left: `${20 + i * 25}%`,
                top: `${20 + i * 25}%`,
              }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 0.7, 0.5],
                rotate: [0, 360],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                delay: i * 2,
                ease: "linear",
              }}
            />
          ))}
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
            textShadow: "0 0 10px rgba(124, 58, 237, 0.8)",
          }}
          animate={{
            textShadow: [
              "0 0 10px rgba(124, 58, 237, 0.8)",
              "0 0 20px rgba(124, 58, 237, 1)",
              "0 0 10px rgba(124, 58, 237, 0.8)",
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