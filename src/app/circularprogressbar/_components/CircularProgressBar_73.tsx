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

  // Generate bubbles
  const numBubbles = 15;
  const bubbles = Array.from({ length: numBubbles }).map((_, i) => ({
    size: 4 + Math.random() * 8,
    startAngle: Math.random() * 360,
    speed: 3 + Math.random() * 2,
    delay: i * 0.3,
    opacity: 0.3 + Math.random() * 0.4,
  }));

  return (
    <div className="relative flex items-center justify-center" style={{ width: size, height: size }}>
      {/* Ocean effect definitions */}
      <svg style={{ position: 'absolute', width: 0, height: 0 }}>
        <defs>
          <linearGradient id="water-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0ea5e9">
              <animate
                attributeName="stop-color"
                values="#0ea5e9;#0284c7;#0ea5e9"
                dur="3s"
                repeatCount="indefinite"
              />
            </stop>
            <stop offset="50%" stopColor="#0284c7">
              <animate
                attributeName="stop-color"
                values="#0284c7;#0369a1;#0284c7"
                dur="3s"
                repeatCount="indefinite"
              />
            </stop>
            <stop offset="100%" stopColor="#0369a1">
              <animate
                attributeName="stop-color"
                values="#0369a1;#0ea5e9;#0369a1"
                dur="3s"
                repeatCount="indefinite"
              />
            </stop>
          </linearGradient>
          <filter id="water-blur">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feColorMatrix
              in="blur"
              type="matrix"
              values="1 0 0 0 0
                      0 1 0 0 0
                      0 0 1 0 0
                      0 0 0 0.6 0"
            />
          </filter>
          <pattern id="wave-pattern" x="0" y="0" width="40" height="10" patternUnits="userSpaceOnUse">
            <path
              d="M0 5 Q10 0, 20 5 Q30 10, 40 5"
              fill="none"
              stroke="#0284c7"
              strokeWidth="1"
              opacity="0.2"
            >
              <animate
                attributeName="d"
                values="M0 5 Q10 0, 20 5 Q30 10, 40 5;
                        M0 5 Q10 10, 20 5 Q30 0, 40 5;
                        M0 5 Q10 0, 20 5 Q30 10, 40 5"
                dur="3s"
                repeatCount="indefinite"
              />
            </path>
          </pattern>
        </defs>
      </svg>

      {/* Bubbles */}
      {bubbles.map((bubble, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            width: bubble.size,
            height: bubble.size,
            borderRadius: "50%",
            background: "rgba(255, 255, 255, 0.8)",
            filter: "url(#water-blur)",
            left: "50%",
            top: "50%",
            marginLeft: -bubble.size / 2,
            marginTop: -bubble.size / 2,
            opacity: percentage > (i / numBubbles) * 100 ? bubble.opacity : 0,
          }}
          animate={{
            y: percentage > (i / numBubbles) * 100 
              ? [radius * 0.8, -radius * 0.8]
              : radius * 0.8,
            x: percentage > (i / numBubbles) * 100
              ? [
                  Math.cos(bubble.startAngle * (Math.PI / 180)) * radius * 0.6,
                  Math.cos((bubble.startAngle + 180) * (Math.PI / 180)) * radius * 0.6,
                ]
              : Math.cos(bubble.startAngle * (Math.PI / 180)) * radius * 0.6,
            scale: percentage > (i / numBubbles) * 100 ? [1, 1.2, 0.8] : 1,
          }}
          transition={{
            duration: bubble.speed,
            repeat: Infinity,
            delay: bubble.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Wave pattern */}
      <motion.div
        className="absolute w-full h-full"
        style={{
          background: "url(#wave-pattern)",
          opacity: 0.3,
        }}
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 3,
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
          stroke="url(#water-gradient)"
          strokeWidth={strokeWidth}
          strokeDasharray={`${circumference / 12} ${circumference / 24}`}
          strokeDashoffset={strokeDashoffset}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset }}
          transition={{ duration: 1.5 }}
          strokeLinecap="round"
          style={{ filter: "url(#water-blur)" }}
        />
      </svg>

      {/* Center display */}
      <motion.div
        className="absolute rounded-full bg-sky-900/30 flex items-center justify-center backdrop-blur-sm overflow-hidden"
        style={{
          width: size - strokeWidth * 4,
          height: size - strokeWidth * 4,
          border: "2px solid rgba(14, 165, 233, 0.3)",
          boxShadow: "0 0 20px rgba(14, 165, 233, 0.2)",
        }}
      >
        {/* Water core */}
        <motion.div
          className="absolute w-full h-full"
          style={{
            background: "radial-gradient(circle at center, rgba(14, 165, 233, 0.2) 0%, transparent 70%)",
            filter: "url(#water-blur)",
          }}
          animate={{
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.span
          className="text-xl font-bold text-sky-300"
          animate={{
            textShadow: [
              "0 0 5px rgba(14, 165, 233, 0.5)",
              "0 0 15px rgba(14, 165, 233, 0.8)",
              "0 0 5px rgba(14, 165, 233, 0.5)",
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