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

  // Generate lightning points
  const numPoints = 8;
  const points = Array.from({ length: numPoints }).map((_, i) => {
    const angle = (i * 360) / numPoints;
    return { angle, delay: i * 0.15 };
  });

  return (
    <div className="relative flex items-center justify-center" style={{ width: size, height: size }}>
      {/* Neon effect definitions */}
      <svg style={{ position: 'absolute', width: 0, height: 0 }}>
        <defs>
          <filter id="neonGlow">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feFlood floodColor="#2dd4bf" floodOpacity="0.5" result="color" />
            <feComposite in="color" in2="blur" operator="in" result="glow" />
            <feMerge>
              <feMergeNode in="glow" />
              <feMergeNode in="glow" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
      </svg>

      {/* Lightning effects */}
      {points.map((point, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            width: 4,
            height: 15,
            background: "#2dd4bf",
            transformOrigin: "center",
            transform: `rotate(${point.angle}deg) translateY(-${radius + 5}px)`,
            boxShadow: "0 0 10px #2dd4bf, 0 0 20px #2dd4bf, 0 0 30px #2dd4bf",
          }}
          animate={{
            opacity: [0, 1, 0],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 0.5,
            repeat: Infinity,
            delay: point.delay,
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
          stroke="#134e4a"
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
          stroke="#2dd4bf"
          strokeWidth={strokeWidth}
          strokeDasharray={`${circumference / 30} ${circumference / 30}`}
          strokeDashoffset={strokeDashoffset}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset }}
          transition={{ duration: 1.5 }}
          strokeLinecap="round"
          style={{ filter: "url(#neonGlow)" }}
        />
      </svg>

      {/* Electric arcs */}
      <motion.div
        className="absolute w-full h-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      >
        {[0, 120, 240].map((rotation, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-teal-400"
            style={{
              top: "50%",
              left: "50%",
              transform: `rotate(${rotation}deg) translateX(${radius}px)`,
              boxShadow: "0 0 10px #2dd4bf, 0 0 20px #2dd4bf",
            }}
            animate={{
              scale: [1, 2, 1],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              delay: i * 0.3,
            }}
          />
        ))}
      </motion.div>

      {/* Center display */}
      <motion.div
        className="absolute rounded-full bg-teal-900/50 flex items-center justify-center backdrop-blur-sm"
        style={{
          width: size - strokeWidth * 4,
          height: size - strokeWidth * 4,
          border: "2px solid rgba(45, 212, 191, 0.3)",
          boxShadow: "inset 0 0 20px rgba(45, 212, 191, 0.3)",
        }}
        animate={{
          boxShadow: [
            "inset 0 0 20px rgba(45, 212, 191, 0.3)",
            "inset 0 0 40px rgba(45, 212, 191, 0.5)",
            "inset 0 0 20px rgba(45, 212, 191, 0.3)",
          ],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <motion.span
          className="text-xl font-bold text-teal-300"
          animate={{
            textShadow: [
              "0 0 5px rgba(45, 212, 191, 0.5)",
              "0 0 20px rgba(45, 212, 191, 0.8)",
              "0 0 5px rgba(45, 212, 191, 0.5)",
            ],
          }}
          transition={{
            duration: 1,
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