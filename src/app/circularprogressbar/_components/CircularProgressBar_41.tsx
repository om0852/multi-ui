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

  // Generate DNA nodes
  const numNodes = 24;
  const nodes = Array.from({ length: numNodes }).map((_, i) => {
    const angle = (i * 360) / numNodes;
    return { angle, delay: i * 0.1 };
  });

  return (
    <div className="relative flex items-center justify-center" style={{ width: size, height: size }}>
      {/* DNA gradient definitions */}
      <svg style={{ position: 'absolute', width: 0, height: 0 }}>
        <defs>
          <linearGradient id="dnaGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#06b6d4" />
            <stop offset="100%" stopColor="#3b82f6" />
          </linearGradient>
          <linearGradient id="dnaGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8b5cf6" />
            <stop offset="100%" stopColor="#d946ef" />
          </linearGradient>
        </defs>
      </svg>

      {/* DNA Helix Strands */}
      <motion.div
        className="absolute w-full h-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        {nodes.map((node, i) => (
          <React.Fragment key={i}>
            {/* First strand */}
            <motion.div
              className="absolute"
              style={{
                width: 6,
                height: 6,
                left: "50%",
                top: "50%",
                transform: `rotate(${node.angle}deg) translateY(-${radius}px)`,
              }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: percentage > (i / numNodes) * 100 ? [0.6, 1, 0.6] : 0.2,
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: node.delay,
              }}
            >
              <div
                className="w-full h-full rounded-full"
                style={{
                  background: "url(#dnaGradient1)",
                  boxShadow: "0 0 10px rgba(6, 182, 212, 0.5)",
                }}
              />
            </motion.div>
            {/* Second strand */}
            <motion.div
              className="absolute"
              style={{
                width: 6,
                height: 6,
                left: "50%",
                top: "50%",
                transform: `rotate(${node.angle + 180}deg) translateY(-${radius}px)`,
              }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: percentage > (i / numNodes) * 100 ? [0.6, 1, 0.6] : 0.2,
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: node.delay,
              }}
            >
              <div
                className="w-full h-full rounded-full"
                style={{
                  background: "url(#dnaGradient2)",
                  boxShadow: "0 0 10px rgba(139, 92, 246, 0.5)",
                }}
              />
            </motion.div>
          </React.Fragment>
        ))}
      </motion.div>

      {/* Background Circle */}
      <svg className="absolute" width={size} height={size}>
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="#1e293b"
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
          stroke="url(#dnaGradient1)"
          strokeWidth={strokeWidth}
          strokeDasharray={`${circumference / 24} ${circumference / 48}`}
          strokeDashoffset={strokeDashoffset}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset }}
          transition={{ duration: 1.5 }}
          strokeLinecap="round"
          style={{ filter: "drop-shadow(0 0 4px rgba(6, 182, 212, 0.5))" }}
        />
      </svg>

      {/* Center display */}
      <motion.div
        className="absolute rounded-full bg-slate-900/50 flex items-center justify-center backdrop-blur-sm"
        style={{
          width: size - strokeWidth * 4,
          height: size - strokeWidth * 4,
          border: "2px solid rgba(6, 182, 212, 0.2)",
        }}
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <motion.div
          className="absolute w-full h-full"
          style={{
            background: "radial-gradient(circle at center, transparent 30%, rgba(6, 182, 212, 0.1) 70%)",
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.span
          className="text-xl font-bold text-cyan-400"
          animate={{
            textShadow: [
              "0 0 4px rgba(6, 182, 212, 0.5)",
              "0 0 8px rgba(6, 182, 212, 0.8)",
              "0 0 4px rgba(6, 182, 212, 0.5)",
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