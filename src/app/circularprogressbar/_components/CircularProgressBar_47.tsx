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

  // Generate circuit paths
  const numCircuits = 12;
  const circuits = Array.from({ length: numCircuits }).map((_, i) => {
    const angle = (i * 360) / numCircuits;
    return { angle, delay: i * 0.2 };
  });

  return (
    <div className="relative flex items-center justify-center" style={{ width: size, height: size }}>
      {/* Neon effect definitions */}
      <svg style={{ position: 'absolute', width: 0, height: 0 }}>
        <defs>
          <filter id="neon-glow">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feFlood floodColor="#0ff" floodOpacity="0.5" result="color" />
            <feComposite in="color" in2="blur" operator="in" result="glow" />
            <feMerge>
              <feMergeNode in="glow" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <linearGradient id="neon-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00ffff" />
            <stop offset="50%" stopColor="#ff00ff" />
            <stop offset="100%" stopColor="#00ffff" />
          </linearGradient>
        </defs>
      </svg>

      {/* Circuit patterns */}
      {circuits.map((circuit, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            width: 2,
            height: radius / 2,
            background: "url(#neon-gradient)",
            left: "50%",
            top: "50%",
            transformOrigin: "bottom center",
            transform: `rotate(${circuit.angle}deg) translateY(-${radius * 1.2}px)`,
            filter: "url(#neon-glow)",
            opacity: percentage > (i / numCircuits) * 100 ? 1 : 0.2,
          }}
          animate={{
            opacity: percentage > (i / numCircuits) * 100 ? [0.5, 1, 0.5] : 0.2,
            height: [radius / 2, radius / 1.8, radius / 2],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            delay: circuit.delay,
            ease: "easeInOut",
          }}
        >
          <motion.div
            className="absolute -right-1 -top-1 w-2 h-2 rounded-full"
            style={{
              background: "#00ffff",
              filter: "url(#neon-glow)",
            }}
            animate={{
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              delay: circuit.delay,
            }}
          />
        </motion.div>
      ))}

      {/* Background Circle */}
      <svg className="absolute" width={size} height={size}>
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="#164e63"
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
          stroke="url(#neon-gradient)"
          strokeWidth={strokeWidth}
          strokeDasharray={`${circumference / 20} ${circumference / 40}`}
          strokeDashoffset={strokeDashoffset}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset }}
          transition={{ duration: 1.5 }}
          strokeLinecap="round"
          style={{ filter: "url(#neon-glow)" }}
        />
      </svg>

      {/* Center display */}
      <motion.div
        className="absolute rounded-full bg-cyan-900/30 flex items-center justify-center backdrop-blur-sm"
        style={{
          width: size - strokeWidth * 4,
          height: size - strokeWidth * 4,
          border: "1px solid rgba(0, 255, 255, 0.3)",
          boxShadow: "0 0 20px rgba(0, 255, 255, 0.2)",
        }}
      >
        {/* Cyber pattern */}
        <motion.div
          className="absolute w-full h-full"
          style={{
            background: `
              linear-gradient(90deg, transparent 50%, rgba(0, 255, 255, 0.1) 50%),
              linear-gradient(0deg, transparent 50%, rgba(0, 255, 255, 0.1) 50%)
            `,
            backgroundSize: "8px 8px",
          }}
          animate={{
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.span
          className="text-xl font-bold text-cyan-300"
          style={{ fontFamily: "'Orbitron', sans-serif" }}
          animate={{
            textShadow: [
              "0 0 5px #0ff",
              "0 0 20px #0ff",
              "0 0 5px #0ff",
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