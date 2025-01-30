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

  // Generate sparkles
  const numSparkles = 20;
  const sparkles = Array.from({ length: numSparkles }).map((_, i) => ({
    size: 3 + Math.random() * 6,
    angle: Math.random() * 360,
    distance: (radius * 0.5) + Math.random() * (radius * 0.3),
    delay: i * 0.2,
    duration: 1 + Math.random() * 2,
    color: [
      "#c084fc", // purple-400
      "#e879f9", // fuchsia-400
      "#f0abfc", // pink-400
    ][Math.floor(Math.random() * 3)],
  }));

  return (
    <div className="relative flex items-center justify-center" style={{ width: size, height: size }}>
      {/* Magic effect definitions */}
      <svg style={{ position: 'absolute', width: 0, height: 0 }}>
        <defs>
          <linearGradient id="magic-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#c084fc">
              <animate
                attributeName="stop-color"
                values="#c084fc;#a855f7;#c084fc"
                dur="3s"
                repeatCount="indefinite"
              />
            </stop>
            <stop offset="50%" stopColor="#e879f9">
              <animate
                attributeName="stop-color"
                values="#e879f9;#d946ef;#e879f9"
                dur="3s"
                repeatCount="indefinite"
              />
            </stop>
            <stop offset="100%" stopColor="#f0abfc">
              <animate
                attributeName="stop-color"
                values="#f0abfc;#e879f9;#f0abfc"
                dur="3s"
                repeatCount="indefinite"
              />
            </stop>
          </linearGradient>
          <filter id="magic-glow">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feFlood floodColor="#c084fc" floodOpacity="0.5" result="color" />
            <feComposite in="color" in2="blur" operator="in" result="glow" />
            <feMerge>
              <feMergeNode in="glow" />
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <pattern id="magic-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <path
              d="M20 0 L40 20 L20 40 L0 20 Z"
              fill="none"
              stroke="#c084fc"
              strokeWidth="0.5"
              opacity="0.2"
            >
              <animate
                attributeName="stroke-dasharray"
                values="0,1000;1000,0;0,1000"
                dur="3s"
                repeatCount="indefinite"
              />
            </path>
          </pattern>
        </defs>
      </svg>

      {/* Sparkles */}
      {sparkles.map((sparkle, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            width: sparkle.size,
            height: sparkle.size,
            left: "50%",
            top: "50%",
            marginLeft: -sparkle.size / 2,
            marginTop: -sparkle.size / 2,
            background: sparkle.color,
            clipPath: "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
            filter: "url(#magic-glow)",
            transform: `rotate(${sparkle.angle}deg) translateY(-${sparkle.distance}px)`,
            opacity: percentage > (i / numSparkles) * 100 ? 1 : 0,
          }}
          animate={{
            scale: percentage > (i / numSparkles) * 100 ? [1, 1.5, 0.5, 1] : 1,
            opacity: percentage > (i / numSparkles) * 100 ? [1, 0.5, 1] : 0,
            rotate: percentage > (i / numSparkles) * 100 ? [0, 180, 360] : 0,
          }}
          transition={{
            duration: sparkle.duration,
            repeat: Infinity,
            delay: sparkle.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Magic pattern */}
      <motion.div
        className="absolute w-full h-full"
        style={{
          background: "url(#magic-pattern)",
          opacity: 0.2,
        }}
        animate={{
          rotate: [0, 360],
          scale: [1, 1.1, 1],
        }}
        transition={{
          rotate: {
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          },
          scale: {
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
      />

      {/* Background Circle */}
      <svg className="absolute" width={size} height={size}>
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="#581c87"
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
          stroke="url(#magic-gradient)"
          strokeWidth={strokeWidth}
          strokeDasharray={`${circumference / 16} ${circumference / 32}`}
          strokeDashoffset={strokeDashoffset}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset }}
          transition={{ duration: 1.5 }}
          strokeLinecap="round"
          style={{ filter: "url(#magic-glow)" }}
        />
      </svg>

      {/* Center display */}
      <motion.div
        className="absolute rounded-full bg-purple-900/30 flex items-center justify-center backdrop-blur-sm overflow-hidden"
        style={{
          width: size - strokeWidth * 4,
          height: size - strokeWidth * 4,
          border: "2px solid rgba(192, 132, 252, 0.3)",
          boxShadow: "0 0 20px rgba(192, 132, 252, 0.2)",
        }}
      >
        {/* Magic core */}
        <motion.div
          className="absolute w-full h-full"
          style={{
            background: "radial-gradient(circle at center, rgba(192, 132, 252, 0.2) 0%, transparent 70%)",
            filter: "url(#magic-glow)",
          }}
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            rotate: {
              duration: 10,
              repeat: Infinity,
              ease: "linear",
            },
            scale: {
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
        />

        <motion.span
          className="text-xl font-bold text-purple-300"
          animate={{
            textShadow: [
              "0 0 5px rgba(192, 132, 252, 0.5)",
              "0 0 15px rgba(192, 132, 252, 0.8)",
              "0 0 5px rgba(192, 132, 252, 0.5)",
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