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

  // Generate cogs
  const numCogs = 8;
  const cogs = Array.from({ length: numCogs }).map((_, i) => {
    const angle = (i * 360) / numCogs;
    return { angle, delay: i * 0.2 };
  });

  return (
    <div className="relative flex items-center justify-center" style={{ width: size, height: size }}>
      {/* Steampunk effect definitions */}
      <svg style={{ position: 'absolute', width: 0, height: 0 }}>
        <defs>
          <linearGradient id="brass-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#b45309" />
            <stop offset="50%" stopColor="#92400e" />
            <stop offset="100%" stopColor="#78350f" />
          </linearGradient>
          <filter id="brass-texture">
            <feTurbulence type="fractalNoise" baseFrequency="0.5" numOctaves="2" result="noise" />
            <feColorMatrix
              in="noise"
              type="matrix"
              values="0.3 0 0 0 0
                      0.2 0.2 0 0 0
                      0.1 0.1 0.1 0 0
                      0 0 0 0.5 0"
            />
          </filter>
          <filter id="steam">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feColorMatrix
              in="blur"
              type="matrix"
              values="1 0 0 0 1
                      0 1 0 0 1
                      0 0 1 0 1
                      0 0 0 0.3 0"
            />
          </filter>
        </defs>
      </svg>

      {/* Steam particles */}
      {Array.from({ length: 5 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-white/20"
          style={{
            width: 8,
            height: 8,
            left: size / 2 + Math.cos(i * Math.PI / 2.5) * radius,
            top: size / 2 + Math.sin(i * Math.PI / 2.5) * radius,
            filter: "url(#steam)",
          }}
          animate={{
            scale: [1, 2, 0],
            opacity: [0, 0.5, 0],
            y: [0, -20],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: i * 0.4,
            ease: "easeOut",
          }}
        />
      ))}

      {/* Rotating cogs */}
      {cogs.map((cog, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            width: 16,
            height: 16,
            left: "50%",
            top: "50%",
            marginLeft: -8,
            marginTop: -8,
            background: "url(#brass-gradient)",
            clipPath: "polygon(50% 0%, 63% 38%, 100% 38%, 69% 59%, 82% 100%, 50% 76%, 18% 100%, 31% 59%, 0% 38%, 37% 38%)",
            transformOrigin: "center",
            transform: `rotate(${cog.angle}deg) translateY(-${radius * 1.1}px)`,
            opacity: percentage > (i / numCogs) * 100 ? 1 : 0.2,
          }}
          animate={{
            rotate: [cog.angle, cog.angle + 360],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear",
            delay: cog.delay,
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
          stroke="#78350f"
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
          stroke="url(#brass-gradient)"
          strokeWidth={strokeWidth}
          strokeDasharray={`${circumference / 12} ${circumference / 24}`}
          strokeDashoffset={strokeDashoffset}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset }}
          transition={{ duration: 1.5 }}
          strokeLinecap="round"
          style={{ filter: "url(#brass-texture)" }}
        />
      </svg>

      {/* Center display */}
      <motion.div
        className="absolute rounded-full bg-amber-900/30 flex items-center justify-center backdrop-blur-sm"
        style={{
          width: size - strokeWidth * 4,
          height: size - strokeWidth * 4,
          border: "2px solid rgba(180, 83, 9, 0.5)",
          boxShadow: "inset 0 0 20px rgba(120, 53, 15, 0.5)",
        }}
      >
        {/* Rivets */}
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full"
            style={{
              background: "url(#brass-gradient)",
              transform: `rotate(${i * 45}deg) translateY(-${(size - strokeWidth * 6) / 2}px)`,
              filter: "url(#brass-texture)",
            }}
          />
        ))}

        <motion.span
          className="text-xl font-bold"
          style={{
            fontFamily: "'Pirata One', cursive",
            color: "#b45309",
            textShadow: "1px 1px 2px rgba(0, 0, 0, 0.3)",
          }}
          animate={{
            scale: [1, 1.1, 1],
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