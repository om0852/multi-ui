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

  // Generate wave bars
  const numBars = 40;
  const bars = Array.from({ length: numBars }).map((_, i) => {
    const angle = (i * 360) / numBars;
    return { angle, delay: i * 0.05 };
  });

  return (
    <div className="relative flex items-center justify-center" style={{ width: size, height: size }}>
      {/* Sound wave gradient */}
      <svg style={{ position: 'absolute', width: 0, height: 0 }}>
        <defs>
          <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ec4899" />
            <stop offset="50%" stopColor="#f472b6" />
            <stop offset="100%" stopColor="#ec4899" />
          </linearGradient>
          <filter id="wave-glow">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feFlood floodColor="#ec4899" floodOpacity="0.5" result="color" />
            <feComposite in="color" in2="blur" operator="in" result="glow" />
            <feMerge>
              <feMergeNode in="glow" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
      </svg>

      {/* Wave bars */}
      <motion.div
        className="absolute w-full h-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      >
        {bars.map((bar, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              width: 2,
              height: 12,
              background: "url(#waveGradient)",
              left: "50%",
              top: "50%",
              transformOrigin: "50% 50%",
              transform: `rotate(${bar.angle}deg) translateY(-${radius}px)`,
              filter: "url(#wave-glow)",
              opacity: percentage > (i / numBars) * 100 ? 1 : 0.2,
            }}
            animate={{
              height: [12, 24, 12],
              opacity: percentage > (i / numBars) * 100 ? [0.6, 1, 0.6] : 0.2,
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              delay: bar.delay,
              ease: "easeInOut",
            }}
          />
        ))}
      </motion.div>

      {/* Background Circle */}
      <svg className="absolute" width={size} height={size}>
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="#831843"
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
          stroke="url(#waveGradient)"
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset }}
          transition={{ duration: 1.5 }}
          strokeLinecap="round"
          style={{ filter: "url(#wave-glow)" }}
        />
      </svg>

      {/* Center display */}
      <motion.div
        className="absolute rounded-full bg-pink-900/30 flex items-center justify-center backdrop-blur-sm"
        style={{
          width: size - strokeWidth * 4,
          height: size - strokeWidth * 4,
          border: "1px solid rgba(236, 72, 153, 0.3)",
          overflow: "hidden",
        }}
      >
        {/* Animated wave background */}
        <motion.div
          className="absolute inset-0"
          style={{
            background: "radial-gradient(circle at center, rgba(236, 72, 153, 0.2) 0%, transparent 70%)",
          }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Equalizer bars */}
        <div className="flex space-x-1 absolute">
          {[1, 2, 3].map((_, i) => (
            <motion.div
              key={i}
              className="w-1 bg-pink-400"
              animate={{
                height: [8, 16, 8],
              }}
              transition={{
                duration: 0.5,
                repeat: Infinity,
                delay: i * 0.2,
                ease: "easeInOut",
              }}
              style={{
                filter: "url(#wave-glow)",
              }}
            />
          ))}
        </div>

        <motion.span
          className="text-xl font-bold text-pink-400 mt-6"
          animate={{
            textShadow: [
              "0 0 5px rgba(236, 72, 153, 0.5)",
              "0 0 10px rgba(236, 72, 153, 0.8)",
              "0 0 5px rgba(236, 72, 153, 0.5)",
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