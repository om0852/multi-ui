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

  // Generate pixel segments
  const numPixels = 16;
  const pixels = Array.from({ length: numPixels }).map((_, i) => {
    const angle = (i * 360) / numPixels;
    return { angle, delay: i * 0.1 };
  });

  return (
    <div className="relative flex items-center justify-center" style={{ width: size, height: size }}>
      {/* Retro effect definitions */}
      <svg style={{ position: 'absolute', width: 0, height: 0 }}>
        <defs>
          <pattern id="pixel-pattern" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
            <rect width="2" height="2" fill="currentColor" />
            <rect x="2" y="2" width="2" height="2" fill="currentColor" />
          </pattern>
          <linearGradient id="retro-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4ade80" />
            <stop offset="50%" stopColor="#22c55e" />
            <stop offset="100%" stopColor="#16a34a" />
          </linearGradient>
        </defs>
      </svg>

      {/* Pixel segments */}
      {pixels.map((pixel, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            width: 8,
            height: 8,
            background: "#4ade80",
            left: "50%",
            top: "50%",
            marginLeft: -4,
            marginTop: -4,
            transform: `rotate(${pixel.angle}deg) translateY(-${radius * 1.1}px)`,
            opacity: percentage > (i / numPixels) * 100 ? 1 : 0.2,
          }}
          animate={{
            scale: percentage > (i / numPixels) * 100 ? [1, 1.2, 1] : 1,
          }}
          transition={{
            duration: 0.5,
            repeat: Infinity,
            delay: pixel.delay,
            ease: "steps(2)",
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
          stroke="#166534"
          strokeWidth={strokeWidth}
          className="opacity-20"
          strokeDasharray="4 4"
        />
      </svg>

      {/* Progress Circle */}
      <svg className="absolute" width={size} height={size}>
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="url(#retro-gradient)"
          strokeWidth={strokeWidth}
          strokeDasharray="8 8"
          strokeDashoffset={strokeDashoffset}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset }}
          transition={{ duration: 1.5, ease: "steps(20)" }}
          strokeLinecap="square"
        />
      </svg>

      {/* Center display */}
      <motion.div
        className="absolute rounded-none flex items-center justify-center overflow-hidden"
        style={{
          width: size - strokeWidth * 4,
          height: size - strokeWidth * 4,
          border: "4px solid #4ade80",
          background: "#166534",
          imageRendering: "pixelated",
        }}
      >
        {/* Pixel background */}
        <motion.div
          className="absolute w-full h-full opacity-20"
          style={{
            background: "url(#pixel-pattern)",
          }}
          animate={{
            backgroundPosition: ["0px 0px", "4px 4px", "0px 0px"],
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: "steps(2)",
          }}
        />

        <motion.span
          className="text-xl font-bold text-green-300"
          style={{ fontFamily: "'Press Start 2P', monospace" }}
          animate={{
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 0.5,
            repeat: Infinity,
            ease: "steps(2)",
          }}
        >
          {Math.round(percentage)}%
        </motion.span>

        {/* Power indicators */}
        {Array.from({ length: 4 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-green-400"
            style={{
              transform: `rotate(${i * 90}deg) translateY(-${(size - strokeWidth * 6) / 2}px)`,
            }}
            animate={{
              opacity: percentage > (i / 4) * 100 ? [1, 0.5, 1] : 0.2,
            }}
            transition={{
              duration: 0.5,
              repeat: Infinity,
              delay: i * 0.1,
              ease: "steps(2)",
            }}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default CircularProgressBar; 