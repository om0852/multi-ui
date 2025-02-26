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

  // Generate glitch segments
  const numSegments = 10;
  const segments = Array.from({ length: numSegments }).map((_, i) => ({
    offset: (i * circumference) / numSegments,
    delay: i * 0.1,
  }));

  return (
    <div className="relative flex items-center justify-center" style={{ width: size, height: size }}>
      {/* Holographic effect definitions */}
      <svg style={{ position: 'absolute', width: 0, height: 0 }}>
        <defs>
          <linearGradient id="holo-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ff00ff">
              <animate
                attributeName="stop-color"
                values="#ff00ff; #00ffff; #ff00ff"
                dur="3s"
                repeatCount="indefinite"
              />
            </stop>
            <stop offset="50%" stopColor="#00ffff">
              <animate
                attributeName="stop-color"
                values="#00ffff; #ff00ff; #00ffff"
                dur="3s"
                repeatCount="indefinite"
              />
            </stop>
            <stop offset="100%" stopColor="#ff00ff">
              <animate
                attributeName="stop-color"
                values="#ff00ff; #00ffff; #ff00ff"
                dur="3s"
                repeatCount="indefinite"
              />
            </stop>
          </linearGradient>
          <filter id="holo-glitch">
            <feTurbulence baseFrequency="0.15" numOctaves="3" result="noise" seed="1">
              <animate
                attributeName="seed"
                values="1;10;1"
                dur="1s"
                repeatCount="indefinite"
              />
            </feTurbulence>
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="2" />
          </filter>
          <filter id="holo-chromatic">
            <feOffset in="SourceGraphic" dx="2" dy="0" result="red" />
            <feOffset in="SourceGraphic" dx="-2" dy="0" result="blue" />
            <feMerge>
              <feMergeNode in="blue" />
              <feMergeNode in="SourceGraphic" />
              <feMergeNode in="red" />
            </feMerge>
          </filter>
        </defs>
      </svg>

      {/* Glitch overlay */}
      <motion.div
        className="absolute w-full h-full"
        style={{
          background: "url(#holo-gradient)",
          opacity: 0.1,
          filter: "url(#holo-glitch)",
        }}
        animate={{
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Holographic segments */}
      {segments.map((segment, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            width: 2,
            height: radius * 0.8,
            background: "url(#holo-gradient)",
            left: "50%",
            top: "50%",
            transformOrigin: "bottom",
            transform: `rotate(${(360 * i) / numSegments}deg) translateY(-${radius * 1.1}px)`,
            filter: "url(#holo-chromatic)",
            opacity: percentage > (i / numSegments) * 100 ? 1 : 0.2,
          }}
          animate={{
            opacity: percentage > (i / numSegments) * 100 ? [0.4, 1, 0.4] : 0.2,
            height: [radius * 0.8, radius * 0.9, radius * 0.8],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: segment.delay,
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
          stroke="#1e1b4b"
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
          stroke="url(#holo-gradient)"
          strokeWidth={strokeWidth}
          strokeDasharray={`${circumference / 20} ${circumference / 40}`}
          strokeDashoffset={strokeDashoffset}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset }}
          transition={{ duration: 1.5 }}
          strokeLinecap="round"
          style={{ filter: "url(#holo-chromatic)" }}
        />
      </svg>

      {/* Center display */}
      <motion.div
        className="absolute rounded-full bg-indigo-900/10 flex items-center justify-center backdrop-blur-sm overflow-hidden"
        style={{
          width: size - strokeWidth * 4,
          height: size - strokeWidth * 4,
          border: "2px solid rgba(255, 255, 255, 0.1)",
          background: "linear-gradient(135deg, rgba(255, 0, 255, 0.1), rgba(0, 255, 255, 0.1))",
        }}
      >
        {/* Holographic core */}
        <motion.div
          className="absolute w-full h-full"
          style={{
            background: "url(#holo-gradient)",
            opacity: 0.1,
            filter: "url(#holo-glitch)",
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
          className="text-xl font-bold text-white relative z-10"
          style={{ filter: "url(#holo-chromatic)" }}
          animate={{
            textShadow: [
              "0 0 5px rgba(255, 0, 255, 0.5)",
              "0 0 15px rgba(0, 255, 255, 0.8)",
              "0 0 5px rgba(255, 0, 255, 0.5)",
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