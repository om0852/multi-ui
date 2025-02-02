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

  // Generate stars
  const numStars = 30;
  const stars = Array.from({ length: numStars }).map((_, i) => ({
    x: Math.random() * size,
    y: Math.random() * size,
    size: Math.random() * 2 + 1,
    delay: Math.random() * 3,
  }));

  return (
    <div className="relative flex items-center justify-center" style={{ width: size, height: size }}>
      {/* Cosmic effect definitions */}
      <svg style={{ position: 'absolute', width: 0, height: 0 }}>
        <defs>
          <linearGradient id="nebula-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#c084fc" />
            <stop offset="50%" stopColor="#6366f1" />
            <stop offset="100%" stopColor="#2563eb" />
          </linearGradient>
          <filter id="star-glow">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feColorMatrix
              in="blur"
              type="matrix"
              values="1 0 0 0 1
                      0 1 0 0 1
                      0 0 1 0 1
                      0 0 0 3 -1"
            />
          </filter>
          <filter id="nebula-texture">
            <feTurbulence type="fractalNoise" baseFrequency="0.01" numOctaves="3" result="noise" />
            <feColorMatrix
              in="noise"
              type="matrix"
              values="0 0 0 0 0
                      0 0 0 0 0
                      0 0 0 0 0
                      0 0 0 0.5 0"
            />
          </filter>
        </defs>
      </svg>

      {/* Stars */}
      {stars.map((star, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-white"
          style={{
            width: star.size,
            height: star.size,
            left: star.x,
            top: star.y,
            filter: "url(#star-glow)",
            opacity: percentage > (i / numStars) * 100 ? 1 : 0.2,
          }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: percentage > (i / numStars) * 100 ? [0.5, 1, 0.5] : 0.2,
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: star.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Nebula effect */}
      <motion.div
        className="absolute w-full h-full"
        style={{
          background: "url(#nebula-gradient)",
          filter: "url(#nebula-texture)",
          opacity: 0.1,
        }}
        animate={{
          rotate: 360,
          scale: [1, 1.1, 1],
        }}
        transition={{
          rotate: {
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          },
          scale: {
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
      />

      {/* Galaxy swirls */}
      <motion.div
        className="absolute w-full h-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      >
        {Array.from({ length: 3 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-full h-full"
            style={{
              background: `
                radial-gradient(
                  ellipse at center,
                  transparent 0%,
                  rgba(${i === 0 ? "192, 132, 252" : i === 1 ? "99, 102, 241" : "37, 99, 235"}, 0.1) 50%,
                  transparent 100%
                )
              `,
              transform: `rotate(${i * 120}deg) scale(${0.8 + i * 0.1})`,
            }}
            animate={{
              rotate: [0, 360],
              scale: [0.8 + i * 0.1, 0.9 + i * 0.1, 0.8 + i * 0.1],
            }}
            transition={{
              rotate: {
                duration: 15 + i * 5,
                repeat: Infinity,
                ease: "linear",
              },
              scale: {
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
          />
        ))}
      </motion.div>

      {/* Background Circle */}
      <svg className="absolute" width={size} height={size}>
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="#1e1b4b"
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
          stroke="url(#nebula-gradient)"
          strokeWidth={strokeWidth}
          strokeDasharray={`${circumference / 20} ${circumference / 40}`}
          strokeDashoffset={strokeDashoffset}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset }}
          transition={{ duration: 1.5 }}
          strokeLinecap="round"
          style={{ filter: "url(#star-glow)" }}
        />
      </svg>

      {/* Center display */}
      <motion.div
        className="absolute rounded-full bg-indigo-900/30 flex items-center justify-center backdrop-blur-sm overflow-hidden"
        style={{
          width: size - strokeWidth * 4,
          height: size - strokeWidth * 4,
          border: "1px solid rgba(99, 102, 241, 0.3)",
        }}
      >
        {/* Cosmic core */}
        <motion.div
          className="absolute w-full h-full"
          style={{
            background: "radial-gradient(circle at center, rgba(192, 132, 252, 0.2) 0%, transparent 70%)",
          }}
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.span
          className="text-xl font-bold text-indigo-300"
          animate={{
            textShadow: [
              "0 0 5px rgba(99, 102, 241, 0.5)",
              "0 0 20px rgba(99, 102, 241, 0.8)",
              "0 0 5px rgba(99, 102, 241, 0.5)",
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