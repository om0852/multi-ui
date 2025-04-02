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

  // Generate paper folds
  const numFolds = 16;
  const folds = Array.from({ length: numFolds }).map((_, i) => ({
    angle: (i * 360) / numFolds,
    scale: 0.9 + Math.random() * 0.2,
    delay: i * 0.1,
    color: i % 2 === 0 ? "#f472b6" : "#fb7185", // Alternate pink shades
  }));

  return (
    <div className="relative flex items-center justify-center" style={{ width: size, height: size }}>
      {/* Paper effect definitions */}
      <svg style={{ position: 'absolute', width: 0, height: 0 }}>
        <defs>
          <linearGradient id="paper-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f472b6">
              <animate
                attributeName="stop-color"
                values="#f472b6;#fb7185;#f472b6"
                dur="3s"
                repeatCount="indefinite"
              />
            </stop>
            <stop offset="50%" stopColor="#fb7185">
              <animate
                attributeName="stop-color"
                values="#fb7185;#f43f5e;#fb7185"
                dur="3s"
                repeatCount="indefinite"
              />
            </stop>
            <stop offset="100%" stopColor="#f43f5e">
              <animate
                attributeName="stop-color"
                values="#f43f5e;#f472b6;#f43f5e"
                dur="3s"
                repeatCount="indefinite"
              />
            </stop>
          </linearGradient>
          <filter id="paper-texture">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.8"
              numOctaves="4"
              result="noise"
            />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0
                      0 0 0 0 0
                      0 0 0 0 0
                      0 0 0 0.05 0"
              in="noise"
              result="coloredNoise"
            />
            <feComposite operator="in" in="coloredNoise" in2="SourceGraphic" />
          </filter>
          <pattern id="fold-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <path
              d="M0 10 L20 0 M0 20 L20 10"
              stroke="rgba(244, 114, 182, 0.1)"
              strokeWidth="0.5"
              fill="none"
            />
          </pattern>
        </defs>
      </svg>

      {/* Paper folds */}
      {folds.map((fold, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            width: 30,
            height: 30,
            background: fold.color,
            clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
            left: "50%",
            top: "50%",
            marginLeft: -15,
            marginTop: -15,
            transform: `rotate(${fold.angle}deg) translateY(-${radius * 0.8}px)`,
            opacity: percentage > (i / numFolds) * 100 ? 0.1 : 0.05,
            filter: "url(#paper-texture)",
          }}
          animate={{
            scale: percentage > (i / numFolds) * 100 ? [fold.scale, fold.scale * 1.1, fold.scale] : fold.scale,
            opacity: percentage > (i / numFolds) * 100 ? [0.1, 0.15, 0.1] : 0.05,
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: fold.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Paper texture */}
      <motion.div
        className="absolute w-full h-full"
        style={{
          background: "url(#fold-pattern)",
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
          stroke="url(#paper-gradient)"
          strokeWidth={strokeWidth}
          strokeDasharray={`${circumference / 32} ${circumference / 32}`}
          strokeDashoffset={strokeDashoffset}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset }}
          transition={{ duration: 1.5 }}
          strokeLinecap="round"
          style={{ filter: "url(#paper-texture)" }}
        />
      </svg>

      {/* Center display */}
      <motion.div
        className="absolute rounded-full bg-pink-900/30 flex items-center justify-center backdrop-blur-sm overflow-hidden"
        style={{
          width: size - strokeWidth * 4,
          height: size - strokeWidth * 4,
          border: "2px solid rgba(244, 114, 182, 0.3)",
          boxShadow: "0 0 20px rgba(244, 114, 182, 0.2)",
        }}
      >
        {/* Paper core */}
        <motion.div
          className="absolute w-full h-full"
          style={{
            background: "radial-gradient(circle at center, rgba(244, 114, 182, 0.2) 0%, transparent 70%)",
            filter: "url(#paper-texture)",
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
          style={{ fontFamily: "'Courier New', monospace" }}
          animate={{
            textShadow: [
              "0 0 5px rgba(244, 114, 182, 0.5)",
              "0 0 15px rgba(244, 114, 182, 0.8)",
              "0 0 5px rgba(244, 114, 182, 0.5)",
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