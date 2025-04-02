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

  // Generate matrix characters
  const matrixChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789".split("");
  const numDrops = 16;
  const drops = Array.from({ length: numDrops }).map((_, i) => {
    const angle = (i * 360) / numDrops;
    return { angle, delay: i * 0.2, chars: Array.from({ length: 3 }).map(() => matrixChars[Math.floor(Math.random() * matrixChars.length)]) };
  });

  return (
    <div className="relative flex items-center justify-center" style={{ width: size, height: size }}>
      {/* Matrix effect definitions */}
      <svg style={{ position: 'absolute', width: 0, height: 0 }}>
        <defs>
          <filter id="matrix-glow">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feFlood floodColor="#22c55e" floodOpacity="0.5" result="color" />
            <feComposite in="color" in2="blur" operator="in" result="glow" />
            <feMerge>
              <feMergeNode in="glow" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
      </svg>

      {/* Digital rain effect */}
      {drops.map((drop, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            left: "50%",
            top: "50%",
            transform: `rotate(${drop.angle}deg) translateY(-${radius}px)`,
          }}
        >
          {drop.chars.map((char, j) => (
            <motion.div
              key={j}
              className="absolute left-1/2 -translate-x-1/2 font-mono text-xs"
              style={{
                color: "#22c55e",
                textShadow: "0 0 5px #22c55e",
                opacity: percentage > (i / numDrops) * 100 ? 1 : 0.3,
              }}
              animate={{
                y: [-20, 20],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: drop.delay + j * 0.3,
                ease: "linear",
              }}
            >
              {char}
            </motion.div>
          ))}
        </motion.div>
      ))}

      {/* Background Circle */}
      <svg className="absolute" width={size} height={size}>
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="#064e3b"
          strokeWidth={strokeWidth}
          className="opacity-30"
        />
      </svg>

      {/* Progress Circle */}
      <svg className="absolute" width={size} height={size}>
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="#22c55e"
          strokeWidth={strokeWidth}
          strokeDasharray={`${circumference / 32} ${circumference / 32}`}
          strokeDashoffset={strokeDashoffset}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset }}
          transition={{ duration: 1.5 }}
          strokeLinecap="round"
          style={{ filter: "url(#matrix-glow)" }}
        />
      </svg>

      {/* Center display */}
      <motion.div
        className="absolute rounded-full bg-green-900/30 flex items-center justify-center backdrop-blur-sm overflow-hidden"
        style={{
          width: size - strokeWidth * 4,
          height: size - strokeWidth * 4,
          border: "1px solid rgba(34, 197, 94, 0.3)",
        }}
      >
        {/* Matrix rain background */}
        <motion.div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(180deg, transparent, rgba(34, 197, 94, 0.1))",
          }}
          animate={{
            y: [-size, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        <motion.span
          className="text-xl font-mono font-bold text-green-400 relative z-10"
          animate={{
            textShadow: [
              "0 0 5px rgba(34, 197, 94, 0.5)",
              "0 0 10px rgba(34, 197, 94, 0.8)",
              "0 0 5px rgba(34, 197, 94, 0.5)",
            ],
          }}
          transition={{
            duration: 1.5,
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