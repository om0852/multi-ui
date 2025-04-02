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

  // Generate DNA base pairs
  const numPairs = 24;
  const pairs = Array.from({ length: numPairs }).map((_, i) => ({
    angle: (i * 360) / numPairs,
    scale: 0.8 + Math.random() * 0.4,
    delay: i * 0.1,
    color: i % 2 === 0 ? "#2563eb" : "#7c3aed", // Alternate colors
  }));

  return (
    <div className="relative flex items-center justify-center" style={{ width: size, height: size }}>
      {/* DNA effect definitions */}
      <svg style={{ position: 'absolute', width: 0, height: 0 }}>
        <defs>
          <linearGradient id="dna-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2563eb">
              <animate
                attributeName="stop-color"
                values="#2563eb;#1d4ed8;#2563eb"
                dur="3s"
                repeatCount="indefinite"
              />
            </stop>
            <stop offset="50%" stopColor="#7c3aed">
              <animate
                attributeName="stop-color"
                values="#7c3aed;#6d28d9;#7c3aed"
                dur="3s"
                repeatCount="indefinite"
              />
            </stop>
            <stop offset="100%" stopColor="#2563eb">
              <animate
                attributeName="stop-color"
                values="#2563eb;#1d4ed8;#2563eb"
                dur="3s"
                repeatCount="indefinite"
              />
            </stop>
          </linearGradient>
          <filter id="glow-effect">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feFlood floodColor="#2563eb" floodOpacity="0.5" result="color" />
            <feComposite in="color" in2="blur" operator="in" result="glow" />
            <feMerge>
              <feMergeNode in="glow" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
      </svg>

      {/* DNA strands */}
      {pairs.map((pair, i) => (
        <React.Fragment key={i}>
          {/* First strand */}
          <motion.div
            className="absolute"
            style={{
              width: 16,
              height: 4,
              background: pair.color,
              borderRadius: "2px",
              left: "50%",
              top: "50%",
              marginLeft: -8,
              marginTop: -2,
              transform: `rotate(${pair.angle}deg) translateY(-${radius * 0.8}px)`,
              opacity: percentage > (i / numPairs) * 100 ? 1 : 0.2,
              filter: "url(#glow-effect)",
            }}
            animate={{
              scale: percentage > (i / numPairs) * 100 ? [pair.scale, pair.scale * 1.2, pair.scale] : pair.scale,
              opacity: percentage > (i / numPairs) * 100 ? [1, 0.8, 1] : 0.2,
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: pair.delay,
              ease: "easeInOut",
            }}
          />
          {/* Connecting line */}
          <motion.div
            className="absolute"
            style={{
              width: 2,
              height: 12,
              background: `linear-gradient(${pair.angle}deg, ${pair.color}, transparent)`,
              left: "50%",
              top: "50%",
              marginLeft: -1,
              marginTop: -6,
              transform: `rotate(${pair.angle}deg) translateY(-${radius * 0.8}px)`,
              opacity: percentage > (i / numPairs) * 100 ? 0.5 : 0.1,
            }}
            animate={{
              height: percentage > (i / numPairs) * 100 ? [12, 16, 12] : 12,
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: pair.delay,
              ease: "easeInOut",
            }}
          />
        </React.Fragment>
      ))}

      {/* Molecular background */}
      <motion.div
        className="absolute w-full h-full"
        style={{
          background: "radial-gradient(circle at center, rgba(37, 99, 235, 0.1) 0%, transparent 70%)",
        }}
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Background Circle */}
      <svg className="absolute" width={size} height={size}>
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="#1e3a8a"
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
          stroke="url(#dna-gradient)"
          strokeWidth={strokeWidth}
          strokeDasharray={`${circumference / 24} ${circumference / 48}`}
          strokeDashoffset={strokeDashoffset}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset }}
          transition={{ duration: 1.5 }}
          strokeLinecap="round"
          style={{ filter: "url(#glow-effect)" }}
        />
      </svg>

      {/* Center display */}
      <motion.div
        className="absolute rounded-full bg-blue-900/30 flex items-center justify-center backdrop-blur-sm overflow-hidden"
        style={{
          width: size - strokeWidth * 4,
          height: size - strokeWidth * 4,
          border: "2px solid rgba(37, 99, 235, 0.3)",
          boxShadow: "0 0 20px rgba(37, 99, 235, 0.2)",
        }}
      >
        {/* DNA core */}
        <motion.div
          className="absolute w-full h-full"
          style={{
            background: "radial-gradient(circle at center, rgba(37, 99, 235, 0.2) 0%, transparent 70%)",
          }}
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        <motion.span
          className="text-xl font-bold text-blue-300"
          animate={{
            textShadow: [
              "0 0 5px rgba(37, 99, 235, 0.5)",
              "0 0 15px rgba(37, 99, 235, 0.8)",
              "0 0 5px rgba(37, 99, 235, 0.5)",
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