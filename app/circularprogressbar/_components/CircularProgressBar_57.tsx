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
  const numStars = 24;
  const stars = Array.from({ length: numStars }).map((_, i) => {
    const angle = (i * 360) / numStars;
    const distance = radius * (0.8 + Math.random() * 0.4);
    return {
      angle,
      distance,
      size: Math.random() * 3 + 1,
      delay: i * 0.1,
    };
  });

  return (
    <div className="relative flex items-center justify-center" style={{ width: size, height: size }}>
      {/* Constellation effect definitions */}
      <svg style={{ position: 'absolute', width: 0, height: 0 }}>
        <defs>
          <linearGradient id="zodiac-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#c084fc" />
            <stop offset="50%" stopColor="#a855f7" />
            <stop offset="100%" stopColor="#7e22ce" />
          </linearGradient>
          <filter id="star-glow">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feColorMatrix
              in="blur"
              type="matrix"
              values="1 0 0 0 1
                      0 1 0 0 1
                      0 0 1 0 1
                      0 0 0 2 -0.5"
            />
          </filter>
          <pattern id="constellation-pattern" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
            <path
              d="M25 10 L40 40 L10 40 Z"
              fill="none"
              stroke="rgba(192, 132, 252, 0.2)"
              strokeWidth="0.5"
            />
          </pattern>
        </defs>
      </svg>

      {/* Constellation lines */}
      <motion.div
        className="absolute w-full h-full"
        style={{
          background: "url(#constellation-pattern)",
        }}
        animate={{
          rotate: 360,
          scale: [1, 1.1, 1],
        }}
        transition={{
          rotate: {
            duration: 60,
            repeat: Infinity,
            ease: "linear",
          },
          scale: {
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
      />

      {/* Stars */}
      {stars.map((star, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-white"
          style={{
            width: star.size,
            height: star.size,
            left: "50%",
            top: "50%",
            marginLeft: -star.size / 2,
            marginTop: -star.size / 2,
            transform: `rotate(${star.angle}deg) translateY(-${star.distance}px)`,
            filter: "url(#star-glow)",
            opacity: percentage > (i / numStars) * 100 ? 1 : 0.2,
          }}
          animate={{
            scale: percentage > (i / numStars) * 100 ? [1, 1.5, 1] : 1,
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

      {/* Background Circle */}
      <svg className="absolute" width={size} height={size}>
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="#581c87"
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
          stroke="url(#zodiac-gradient)"
          strokeWidth={strokeWidth}
          strokeDasharray={`${circumference / 12} ${circumference / 24}`}
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
        className="absolute rounded-full bg-purple-900/30 flex items-center justify-center backdrop-blur-sm overflow-hidden"
        style={{
          width: size - strokeWidth * 4,
          height: size - strokeWidth * 4,
          border: "2px solid rgba(192, 132, 252, 0.3)",
        }}
      >
        {/* Zodiac symbol */}
        <motion.div
          className="absolute w-full h-full"
          style={{
            background: "radial-gradient(circle at center, rgba(192, 132, 252, 0.2) 0%, transparent 70%)",
          }}
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 360, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        <motion.span
          className="text-xl font-bold text-purple-300"
          animate={{
            textShadow: [
              "0 0 5px rgba(192, 132, 252, 0.5)",
              "0 0 15px rgba(192, 132, 252, 0.8)",
              "0 0 5px rgba(192, 132, 252, 0.5)",
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