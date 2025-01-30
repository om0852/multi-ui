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

  // Generate origami triangles
  const numTriangles = 8;
  const triangles = Array.from({ length: numTriangles }).map((_, i) => {
    const angle = (i * 360) / numTriangles;
    return { angle, delay: i * 0.15 };
  });

  return (
    <div className="relative flex items-center justify-center" style={{ width: size, height: size }}>
      {/* Origami gradient definitions */}
      <svg style={{ position: 'absolute', width: 0, height: 0 }}>
        <defs>
          <linearGradient id="origamiGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0ea5e9" />
            <stop offset="100%" stopColor="#2dd4bf" />
          </linearGradient>
          <linearGradient id="origamiGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2dd4bf" />
            <stop offset="100%" stopColor="#0ea5e9" />
          </linearGradient>
        </defs>
      </svg>

      {/* Origami pattern */}
      {triangles.map((triangle, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            width: 0,
            height: 0,
            borderLeft: `${radius / 3}px solid transparent`,
            borderRight: `${radius / 3}px solid transparent`,
            borderBottom: `${radius / 2}px solid`,
            borderBottomColor: i % 2 === 0 ? "#0ea5e9" : "#2dd4bf",
            transformOrigin: "50% 100%",
            transform: `rotate(${triangle.angle}deg) translateY(-${radius * 0.8}px)`,
            opacity: percentage > (i / numTriangles) * 100 ? 1 : 0.2,
          }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: percentage > (i / numTriangles) * 100 ? [0.7, 1, 0.7] : 0.2,
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: triangle.delay,
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
          stroke="url(#origamiGradient1)"
          strokeWidth={strokeWidth}
          strokeDasharray={`${circumference / 16} ${circumference / 32}`}
          strokeDashoffset={strokeDashoffset}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset }}
          transition={{ duration: 1.5 }}
          strokeLinecap="round"
        />
      </svg>

      {/* Center display */}
      <motion.div
        className="absolute rounded-full overflow-hidden flex items-center justify-center"
        style={{
          width: size - strokeWidth * 4,
          height: size - strokeWidth * 4,
          background: "linear-gradient(135deg, rgba(14, 165, 233, 0.15), rgba(45, 212, 191, 0.15))",
          backdropFilter: "blur(4px)",
          border: "1px solid rgba(14, 165, 233, 0.2)",
        }}
      >
        {/* Geometric background pattern */}
        <div className="absolute inset-0">
          {[0, 45, 90, 135].map((rotation, i) => (
            <motion.div
              key={i}
              className="absolute inset-0"
              style={{
                borderTop: "1px solid rgba(14, 165, 233, 0.1)",
                transform: `rotate(${rotation}deg)`,
              }}
              animate={{
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.5,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        <motion.span
          className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-teal-400"
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