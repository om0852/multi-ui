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

  // Generate lightning points
  const lightningPoints = Array.from({ length: 6 }).map((_, i) => {
    const angle = (i / 6) * Math.PI * 2;
    const x = Math.cos(angle) * radius;
    const y = Math.sin(angle) * radius;
    return { x, y };
  });

  return (
    <div className="relative flex items-center justify-center" style={{ width: size, height: size }}>
      {/* Electric effect definitions */}
      <svg style={{ position: 'absolute', width: 0, height: 0 }}>
        <defs>
          <linearGradient id="electric-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#818cf8" stopOpacity="0.9">
              <animate
                attributeName="stop-color"
                values="#818cf8;#6366f1;#818cf8"
                dur="0.5s"
                repeatCount="indefinite"
              />
            </stop>
            <stop offset="100%" stopColor="#4f46e5" stopOpacity="1">
              <animate
                attributeName="stop-color"
                values="#4f46e5;#4338ca;#4f46e5"
                dur="0.5s"
                repeatCount="indefinite"
              />
            </stop>
          </linearGradient>
          <filter id="electric-glow">
            <feGaussianBlur in="SourceGraphic" stdDeviation="2" />
            <feColorMatrix
              type="matrix"
              values="
                1.5 0 0 0 0
                0 1.5 0 0 0
                0 0 2 0 0
                0 0 0 3 0"
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
          border: `${strokeWidth}px solid rgba(79, 70, 229, 0.2)`,
          clipPath: "url(#container-clip)",
          background: "linear-gradient(to bottom, rgba(129, 140, 248, 0.1), rgba(79, 70, 229, 0.15))",
          backdropFilter: "blur(4px)",
        }}
      >
        {/* Electric charge fill */}
        <motion.div
          className="absolute bottom-0 w-full"
          initial={{ height: 0 }}
          animate={{ height: fillHeight }}
          transition={{ duration: 1, ease: "easeOut" }}
          style={{
            background: "url(#electric-gradient)",
            filter: "url(#electric-glow)",
          }}
        >
          {/* Lightning bolts */}
          {lightningPoints.map((point, i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{
                left: `${50 + (point.x / radius) * 45}%`,
                bottom: `${50 + (point.y / radius) * 45}%`,
                width: 2,
                height: 20,
                background: "#fff",
                filter: "url(#electric-glow)",
                transformOrigin: "center",
              }}
              animate={{
                rotate: [0, 45, -45, 0],
                scale: [1, 1.5, 0.8, 1],
                opacity: [1, 0.8, 1],
              }}
              transition={{
                duration: 0.3,
                repeat: Infinity,
                delay: i * 0.1,
                ease: "easeInOut",
              }}
            />
          ))}

          {/* Electric particles */}
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.div
              key={`particle-${i}`}
              className="absolute"
              style={{
                width: 2,
                height: 2,
                background: "#fff",
                borderRadius: "50%",
                filter: "url(#electric-glow)",
                left: `${Math.random() * 100}%`,
                bottom: `${Math.random() * 100}%`,
              }}
              animate={{
                scale: [0, 1, 0],
                opacity: [0, 1, 0],
                y: [0, -10],
                x: [0, (Math.random() - 0.5) * 20],
              }}
              transition={{
                duration: 0.5,
                repeat: Infinity,
                delay: Math.random() * 0.5,
                ease: "easeOut",
              }}
            />
          ))}

          {/* Electric arcs */}
          {Array.from({ length: 3 }).map((_, i) => (
            <motion.div
              key={`arc-${i}`}
              className="absolute w-full"
              style={{
                height: 1,
                bottom: `${30 + i * 20}%`,
                background: "#fff",
                filter: "url(#electric-glow)",
                transformOrigin: "left",
              }}
              animate={{
                scaleX: [1, 1.2, 0.8, 1],
                opacity: [0.5, 1, 0.5],
                x: ["-10%", "10%", "-10%"],
              }}
              transition={{
                duration: 0.3,
                repeat: Infinity,
                delay: i * 0.1,
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
            textShadow: "0 0 10px rgba(79, 70, 229, 0.8)",
          }}
          animate={{
            textShadow: [
              "0 0 10px rgba(79, 70, 229, 0.8)",
              "0 0 20px rgba(79, 70, 229, 1)",
              "0 0 10px rgba(79, 70, 229, 0.8)",
            ],
          }}
          transition={{
            duration: 0.5,
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