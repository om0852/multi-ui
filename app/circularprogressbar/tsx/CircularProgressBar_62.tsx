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

  // Generate candy sprinkles
  const numSprinkles = 30;
  const sprinkles = Array.from({ length: numSprinkles }).map((_, i) => ({
    x: Math.random() * size,
    y: Math.random() * size,
    rotation: Math.random() * 360,
    scale: 0.8 + Math.random() * 0.4,
    delay: i * 0.1,
    color: [
      "#f472b6", // pink
      "#fb7185", // rose
      "#60a5fa", // blue
      "#34d399", // emerald
      "#fbbf24", // amber
    ][Math.floor(Math.random() * 5)],
  }));

  return (
    <div className="relative flex items-center justify-center" style={{ width: size, height: size }}>
      {/* Candy effect definitions */}
      <svg style={{ position: 'absolute', width: 0, height: 0 }}>
        <defs>
          <linearGradient id="candy-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ec4899">
              <animate
                attributeName="stop-color"
                values="#ec4899;#f472b6;#ec4899"
                dur="3s"
                repeatCount="indefinite"
              />
            </stop>
            <stop offset="50%" stopColor="#f472b6">
              <animate
                attributeName="stop-color"
                values="#f472b6;#f9a8d4;#f472b6"
                dur="3s"
                repeatCount="indefinite"
              />
            </stop>
            <stop offset="100%" stopColor="#f9a8d4">
              <animate
                attributeName="stop-color"
                values="#f9a8d4;#ec4899;#f9a8d4"
                dur="3s"
                repeatCount="indefinite"
              />
            </stop>
          </linearGradient>
          <filter id="sugar-sparkle">
            <feGaussianBlur stdDeviation="1" result="blur" />
            <feSpecularLighting
              in="blur"
              specularExponent="20"
              lightingColor="#fff"
              surfaceScale="2"
              result="specular"
            >
              <fePointLight x="-5000" y="-10000" z="20000" />
            </feSpecularLighting>
            <feComposite
              in="SourceGraphic"
              in2="specular"
              operator="arithmetic"
              k1="0"
              k2="1"
              k3="1"
              k4="0"
            />
          </filter>
        </defs>
      </svg>

      {/* Candy sprinkles */}
      {sprinkles.map((sprinkle, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            width: 6,
            height: 2,
            background: sprinkle.color,
            borderRadius: "1px",
            left: sprinkle.x,
            top: sprinkle.y,
            transform: `rotate(${sprinkle.rotation}deg)`,
            opacity: percentage > (i / numSprinkles) * 100 ? 1 : 0.2,
          }}
          animate={{
            scale: percentage > (i / numSprinkles) * 100 ? [sprinkle.scale, sprinkle.scale * 1.2, sprinkle.scale] : sprinkle.scale,
            opacity: percentage > (i / numSprinkles) * 100 ? [1, 0.8, 1] : 0.2,
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            delay: sprinkle.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Sugar coating effect */}
      <motion.div
        className="absolute w-full h-full"
        style={{
          background: "radial-gradient(circle at center, rgba(249, 168, 212, 0.2) 0%, transparent 70%)",
          filter: "url(#sugar-sparkle)",
        }}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.5, 0.8, 0.5],
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
          stroke="#be185d"
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
          stroke="url(#candy-gradient)"
          strokeWidth={strokeWidth}
          strokeDasharray={`${circumference / 16} ${circumference / 32}`}
          strokeDashoffset={strokeDashoffset}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset }}
          transition={{ duration: 1.5 }}
          strokeLinecap="round"
          style={{ filter: "url(#sugar-sparkle)" }}
        />
      </svg>

      {/* Center display */}
      <motion.div
        className="absolute rounded-full bg-pink-900/30 flex items-center justify-center backdrop-blur-sm overflow-hidden"
        style={{
          width: size - strokeWidth * 4,
          height: size - strokeWidth * 4,
          border: "2px solid rgba(249, 168, 212, 0.3)",
          boxShadow: "0 0 20px rgba(249, 168, 212, 0.3)",
        }}
      >
        {/* Sweet swirl */}
        <motion.div
          className="absolute w-full h-full"
          style={{
            background: `
              repeating-conic-gradient(
                from 0deg,
                rgba(249, 168, 212, 0.1) 0deg 10deg,
                transparent 10deg 20deg
              )
            `,
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
          className="text-xl font-bold text-pink-300"
          animate={{
            scale: [1, 1.1, 1],
            textShadow: [
              "0 0 5px rgba(249, 168, 212, 0.5)",
              "0 0 15px rgba(249, 168, 212, 0.8)",
              "0 0 5px rgba(249, 168, 212, 0.5)",
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