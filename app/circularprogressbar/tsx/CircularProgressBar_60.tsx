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
  const circumference = 2 * Math.PI * radius;
  const percentage = (value / max) * 100;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  // Generate raindrops
  const numDrops = 15;
  const drops = Array.from({ length: numDrops }).map((_, i) => ({
    x: Math.random() * size,
    y: -10,
    size: Math.random() * 3 + 2,
    delay: i * 0.2,
    duration: 1 + Math.random(),
  }));

  // Generate clouds
  const numClouds = 3;
  const clouds = Array.from({ length: numClouds }).map((_, i) => ({
    scale: 0.8 + Math.random() * 0.4,
    x: (i * size) / numClouds,
    delay: i * 0.5,
  }));

  return (
    <div className="relative flex items-center justify-center" style={{ width: size, height: size }}>
      {/* Weather effect definitions */}
      <svg style={{ position: 'absolute', width: 0, height: 0 }}>
        <defs>
          <linearGradient id="weather-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0ea5e9">
              <animate
                attributeName="stop-color"
                values="#0ea5e9;#0284c7;#0ea5e9"
                dur="4s"
                repeatCount="indefinite"
              />
            </stop>
            <stop offset="50%" stopColor="#0284c7">
              <animate
                attributeName="stop-color"
                values="#0284c7;#0369a1;#0284c7"
                dur="4s"
                repeatCount="indefinite"
              />
            </stop>
            <stop offset="100%" stopColor="#0369a1">
              <animate
                attributeName="stop-color"
                values="#0369a1;#0ea5e9;#0369a1"
                dur="4s"
                repeatCount="indefinite"
              />
            </stop>
          </linearGradient>
          <filter id="cloud-filter">
            <feGaussianBlur stdDeviation="3" />
            <feColorMatrix
              type="matrix"
              values="1 0 0 0 0
                      0 1 0 0 0
                      0 0 1 0 0
                      0 0 0 0.5 0"
            />
          </filter>
        </defs>
      </svg>

      {/* Clouds */}
      {clouds.map((cloud, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            width: 40,
            height: 20,
            background: "white",
            borderRadius: "20px",
            filter: "url(#cloud-filter)",
            opacity: percentage > (i / numClouds) * 100 ? 0.8 : 0.2,
          }}
          initial={{ x: cloud.x, y: 10 }}
          animate={{
            x: [cloud.x - 10, cloud.x + 10, cloud.x - 10],
            scale: [cloud.scale, cloud.scale * 1.1, cloud.scale],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: cloud.delay,
            ease: "easeInOut",
          }}
        >
          <div
            className="absolute"
            style={{
              width: 20,
              height: 20,
              background: "white",
              borderRadius: "50%",
              top: -10,
              left: 5,
            }}
          />
          <div
            className="absolute"
            style={{
              width: 20,
              height: 20,
              background: "white",
              borderRadius: "50%",
              top: -8,
              right: 5,
            }}
          />
        </motion.div>
      ))}

      {/* Raindrops */}
      {drops.map((drop, i) => (
        <motion.div
          key={i}
          className="absolute bg-sky-400"
          style={{
            width: 2,
            height: drop.size,
            left: drop.x,
            opacity: percentage > (i / numDrops) * 100 ? 0.6 : 0.1,
            borderRadius: "2px",
          }}
          initial={{ y: drop.y }}
          animate={{
            y: size,
            opacity: [0.6, 0],
          }}
          transition={{
            duration: drop.duration,
            repeat: Infinity,
            delay: drop.delay,
            ease: "linear",
          }}
        />
      ))}

      {/* Background Circle */}
      <svg className="absolute" width={size} height={size}>
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="#0c4a6e"
          strokeWidth={strokeWidth}
          className="opacity-20"
        />
      </svg>

      {/* Progress Circle */}
      <svg className="absolute" width={size} height={size}>
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="url(#weather-gradient)"
          strokeWidth={strokeWidth}
          strokeDasharray={`${circumference / 24} ${circumference / 48}`}
          strokeDashoffset={strokeDashoffset}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset }}
          transition={{ duration: 1.5 }}
          strokeLinecap="round"
        />
      </svg>

      {/* Center display */}
      <motion.div
        className="absolute rounded-full bg-sky-900/30 flex items-center justify-center backdrop-blur-sm overflow-hidden"
        style={{
          width: size - strokeWidth * 4,
          height: size - strokeWidth * 4,
          border: "2px solid rgba(14, 165, 233, 0.3)",
        }}
      >
        {/* Rain effect in the center */}
        <motion.div
          className="absolute w-full h-full"
          style={{
            background: "linear-gradient(0deg, rgba(14, 165, 233, 0.2) 0%, transparent 100%)",
          }}
          animate={{
            y: [-20, 20],
            opacity: [0.3, 0.1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        <motion.span
          className="text-xl font-bold text-sky-300"
          animate={{
            textShadow: [
              "0 0 5px rgba(14, 165, 233, 0.5)",
              "0 0 15px rgba(14, 165, 233, 0.8)",
              "0 0 5px rgba(14, 165, 233, 0.5)",
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