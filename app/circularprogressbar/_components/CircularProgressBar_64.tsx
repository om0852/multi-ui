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

  // Generate gears
  const numGears = 8;
  const gears = Array.from({ length: numGears }).map((_, i) => ({
    angle: (i * 360) / numGears,
    scale: 0.8 + Math.random() * 0.4,
    teeth: 8 + Math.floor(Math.random() * 4),
    rotation: i % 2 === 0 ? 1 : -1, // Alternate rotation direction
    delay: i * 0.2,
  }));

  return (
    <div className="relative flex items-center justify-center" style={{ width: size, height: size }}>
      {/* Steampunk effect definitions */}
      <svg style={{ position: 'absolute', width: 0, height: 0 }}>
        <defs>
          <linearGradient id="brass-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#b45309">
              <animate
                attributeName="stop-color"
                values="#b45309;#92400e;#b45309"
                dur="4s"
                repeatCount="indefinite"
              />
            </stop>
            <stop offset="50%" stopColor="#92400e">
              <animate
                attributeName="stop-color"
                values="#92400e;#78350f;#92400e"
                dur="4s"
                repeatCount="indefinite"
              />
            </stop>
            <stop offset="100%" stopColor="#78350f">
              <animate
                attributeName="stop-color"
                values="#78350f;#b45309;#78350f"
                dur="4s"
                repeatCount="indefinite"
              />
            </stop>
          </linearGradient>
          <filter id="metal-texture">
            <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" result="noise" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0
                      0 0 0 0 0
                      0 0 0 0 0
                      0 0 0 0.1 0"
              in="noise"
              result="coloredNoise"
            />
            <feComposite operator="in" in="coloredNoise" in2="SourceGraphic" />
          </filter>
          <pattern id="gear-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <circle cx="10" cy="10" r="8" fill="none" stroke="#92400e" strokeWidth="1" />
            <circle cx="10" cy="10" r="3" fill="#92400e" />
          </pattern>
        </defs>
      </svg>

      {/* Gears */}
      {gears.map((gear, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            width: 24,
            height: 24,
            left: "50%",
            top: "50%",
            marginLeft: -12,
            marginTop: -12,
            transform: `rotate(${gear.angle}deg) translateY(-${radius * 0.8}px)`,
            opacity: percentage > (i / numGears) * 100 ? 1 : 0.2,
          }}
        >
          <motion.svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            style={{
              filter: "url(#metal-texture)",
            }}
            animate={{
              rotate: percentage > (i / numGears) * 100 ? [0, 360 * gear.rotation] : 0,
              scale: percentage > (i / numGears) * 100 ? [gear.scale, gear.scale * 1.1, gear.scale] : gear.scale,
            }}
            transition={{
              rotate: {
                duration: 10,
                repeat: Infinity,
                ease: "linear",
              },
              scale: {
                duration: 2,
                repeat: Infinity,
                delay: gear.delay,
                ease: "easeInOut",
              },
            }}
          >
            <path
              d={`
                M12 2 L14 3 L16 2 L17 4 L19 4 L19 6 L21 7 L20 9 L21 11 L19 12
                L20 14 L18 15 L17 17 L15 17 L14 19 L12 18 L10 19 L9 17 L7 17
                L6 15 L4 14 L5 12 L3 11 L4 9 L3 7 L5 6 L5 4 L7 4 L8 2 L10 3 Z
              `}
              fill="#92400e"
              stroke="#78350f"
              strokeWidth="1"
            />
            <circle cx="12" cy="12" r="4" fill="#78350f" />
          </motion.svg>
        </motion.div>
      ))}

      {/* Mechanical texture */}
      <motion.div
        className="absolute w-full h-full"
        style={{
          background: "url(#gear-pattern)",
          opacity: 0.1,
        }}
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 60,
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
          stroke="#78350f"
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
          stroke="url(#brass-gradient)"
          strokeWidth={strokeWidth}
          strokeDasharray={`${circumference / 24} ${circumference / 48}`}
          strokeDashoffset={strokeDashoffset}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset }}
          transition={{ duration: 1.5 }}
          strokeLinecap="round"
          style={{ filter: "url(#metal-texture)" }}
        />
      </svg>

      {/* Center display */}
      <motion.div
        className="absolute rounded-full bg-amber-900/30 flex items-center justify-center backdrop-blur-sm overflow-hidden"
        style={{
          width: size - strokeWidth * 4,
          height: size - strokeWidth * 4,
          border: "2px solid rgba(180, 83, 9, 0.3)",
          boxShadow: "0 0 20px rgba(180, 83, 9, 0.2)",
        }}
      >
        {/* Mechanical core */}
        <motion.div
          className="absolute w-full h-full"
          style={{
            background: "radial-gradient(circle at center, rgba(180, 83, 9, 0.2) 0%, transparent 70%)",
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
          className="text-xl font-bold text-amber-300"
          style={{ fontFamily: "'Courier New', monospace" }}
          animate={{
            textShadow: [
              "0 0 5px rgba(180, 83, 9, 0.5)",
              "0 0 15px rgba(180, 83, 9, 0.8)",
              "0 0 5px rgba(180, 83, 9, 0.5)",
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