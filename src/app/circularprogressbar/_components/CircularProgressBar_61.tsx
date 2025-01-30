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

  // Generate neon flickers
  const numFlickers = 12;
  const flickers = Array.from({ length: numFlickers }).map((_, i) => ({
    angle: (i * 360) / numFlickers,
    delay: i * 0.1,
    duration: 0.5 + Math.random() * 0.5,
  }));

  return (
    <div className="relative flex items-center justify-center" style={{ width: size, height: size }}>
      {/* Neon effect definitions */}
      <svg style={{ position: 'absolute', width: 0, height: 0 }}>
        <defs>
          <linearGradient id="neon-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f0abfc">
              <animate
                attributeName="stop-color"
                values="#f0abfc;#e879f9;#f0abfc"
                dur="2s"
                repeatCount="indefinite"
              />
            </stop>
            <stop offset="50%" stopColor="#e879f9">
              <animate
                attributeName="stop-color"
                values="#e879f9;#d946ef;#e879f9"
                dur="2s"
                repeatCount="indefinite"
              />
            </stop>
            <stop offset="100%" stopColor="#d946ef">
              <animate
                attributeName="stop-color"
                values="#d946ef;#f0abfc;#d946ef"
                dur="2s"
                repeatCount="indefinite"
              />
            </stop>
          </linearGradient>
          <filter id="neon-glow">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feFlood floodColor="#f0abfc" floodOpacity="0.5" result="color" />
            <feComposite in="color" in2="blur" operator="in" result="glow" />
            <feMerge>
              <feMergeNode in="glow" />
              <feMergeNode in="glow" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
      </svg>

      {/* Neon flickers */}
      {flickers.map((flicker, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            width: 4,
            height: 20,
            background: "#f0abfc",
            filter: "url(#neon-glow)",
            left: "50%",
            top: "50%",
            marginLeft: -2,
            marginTop: -10,
            transform: `rotate(${flicker.angle}deg) translateY(-${radius * 0.8}px)`,
            opacity: percentage > (i / numFlickers) * 100 ? 1 : 0.1,
          }}
          animate={{
            opacity: percentage > (i / numFlickers) * 100 ? [1, 0.5, 1] : 0.1,
            scale: percentage > (i / numFlickers) * 100 ? [1, 1.2, 1] : 1,
          }}
          transition={{
            duration: flicker.duration,
            repeat: Infinity,
            delay: flicker.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Electric effect */}
      <motion.div
        className="absolute w-full h-full"
        style={{
          background: "radial-gradient(circle at center, rgba(240, 171, 252, 0.2) 0%, transparent 70%)",
          filter: "url(#neon-glow)",
        }}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Background Circle */}
      <svg className="absolute" width={size} height={size}>
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="#701a75"
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
          strokeDasharray={`${circumference / 32} ${circumference / 32}`}
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
        className="absolute rounded-full bg-fuchsia-900/30 flex items-center justify-center backdrop-blur-sm overflow-hidden"
        style={{
          width: size - strokeWidth * 4,
          height: size - strokeWidth * 4,
          border: "2px solid rgba(240, 171, 252, 0.3)",
          boxShadow: "0 0 20px rgba(240, 171, 252, 0.3)",
        }}
      >
        {/* Electric core */}
        <motion.div
          className="absolute w-full h-full"
          style={{
            background: "radial-gradient(circle at center, rgba(240, 171, 252, 0.3) 0%, transparent 70%)",
            filter: "url(#neon-glow)",
          }}
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.span
          className="text-xl font-bold text-fuchsia-300"
          animate={{
            textShadow: [
              "0 0 5px rgba(240, 171, 252, 0.5)",
              "0 0 15px rgba(240, 171, 252, 0.8)",
              "0 0 5px rgba(240, 171, 252, 0.5)",
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