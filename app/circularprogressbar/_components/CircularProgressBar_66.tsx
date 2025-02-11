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

  // Generate circuit paths
  const numPaths = 16;
  const paths = Array.from({ length: numPaths }).map((_, i) => ({
    angle: (i * 360) / numPaths,
    length: 20 + Math.random() * 20,
    delay: i * 0.2,
    type: Math.random() > 0.5 ? "straight" : "angled",
  }));

  return (
    <div className="relative flex items-center justify-center" style={{ width: size, height: size }}>
      {/* Circuit effect definitions */}
      <svg style={{ position: 'absolute', width: 0, height: 0 }}>
        <defs>
          <linearGradient id="circuit-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#10b981">
              <animate
                attributeName="stop-color"
                values="#10b981;#059669;#10b981"
                dur="3s"
                repeatCount="indefinite"
              />
            </stop>
            <stop offset="50%" stopColor="#059669">
              <animate
                attributeName="stop-color"
                values="#059669;#047857;#059669"
                dur="3s"
                repeatCount="indefinite"
              />
            </stop>
            <stop offset="100%" stopColor="#047857">
              <animate
                attributeName="stop-color"
                values="#047857;#10b981;#047857"
                dur="3s"
                repeatCount="indefinite"
              />
            </stop>
          </linearGradient>
          <filter id="circuit-glow">
            <feGaussianBlur stdDeviation="1" result="blur" />
            <feFlood floodColor="#10b981" floodOpacity="0.5" result="color" />
            <feComposite in="color" in2="blur" operator="in" result="glow" />
            <feMerge>
              <feMergeNode in="glow" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <pattern id="circuit-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <path
              d="M5 10 h10 M10 5 v10"
              stroke="#047857"
              strokeWidth="0.5"
              fill="none"
              opacity="0.2"
            />
          </pattern>
        </defs>
      </svg>

      {/* Circuit paths */}
      {paths.map((path, i) => (
        <React.Fragment key={i}>
          <motion.div
            className="absolute"
            style={{
              width: path.type === "straight" ? 2 : 10,
              height: path.length,
              background: path.type === "straight" 
                ? "#10b981"
                : "transparent",
              borderLeft: path.type === "angled" ? "2px solid #10b981" : "none",
              borderBottom: path.type === "angled" ? "2px solid #10b981" : "none",
              left: "50%",
              top: "50%",
              marginLeft: -1,
              marginTop: -path.length / 2,
              transform: `rotate(${path.angle}deg) translateY(-${radius * 0.8}px)`,
              opacity: percentage > (i / numPaths) * 100 ? 1 : 0.2,
              filter: "url(#circuit-glow)",
            }}
          >
            {/* Data pulse */}
            <motion.div
              className="absolute"
              style={{
                width: "100%",
                height: 4,
                background: "#10b981",
                borderRadius: "2px",
                filter: "url(#circuit-glow)",
              }}
              animate={{
                y: percentage > (i / numPaths) * 100 ? [0, path.length, 0] : 0,
                opacity: percentage > (i / numPaths) * 100 ? [1, 0, 1] : 0.2,
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: path.delay,
                ease: "linear",
              }}
            />
          </motion.div>
          {/* Circuit node */}
          <motion.div
            className="absolute"
            style={{
              width: 6,
              height: 6,
              background: "#10b981",
              borderRadius: "50%",
              left: "50%",
              top: "50%",
              marginLeft: -3,
              marginTop: -3,
              transform: `rotate(${path.angle}deg) translateY(-${radius * 0.8}px)`,
              filter: "url(#circuit-glow)",
              opacity: percentage > (i / numPaths) * 100 ? 1 : 0.2,
            }}
            animate={{
              scale: percentage > (i / numPaths) * 100 ? [1, 1.5, 1] : 1,
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: path.delay,
              ease: "easeInOut",
            }}
          />
        </React.Fragment>
      ))}

      {/* Circuit background */}
      <motion.div
        className="absolute w-full h-full"
        style={{
          background: "url(#circuit-pattern)",
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
          stroke="#064e3b"
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
          stroke="url(#circuit-gradient)"
          strokeWidth={strokeWidth}
          strokeDasharray={`${circumference / 32} ${circumference / 32}`}
          strokeDashoffset={strokeDashoffset}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset }}
          transition={{ duration: 1.5 }}
          strokeLinecap="round"
          style={{ filter: "url(#circuit-glow)" }}
        />
      </svg>

      {/* Center display */}
      <motion.div
        className="absolute rounded-full bg-emerald-900/30 flex items-center justify-center backdrop-blur-sm overflow-hidden"
        style={{
          width: size - strokeWidth * 4,
          height: size - strokeWidth * 4,
          border: "2px solid rgba(16, 185, 129, 0.3)",
          boxShadow: "0 0 20px rgba(16, 185, 129, 0.2)",
        }}
      >
        {/* Circuit core */}
        <motion.div
          className="absolute w-full h-full"
          style={{
            background: "radial-gradient(circle at center, rgba(16, 185, 129, 0.2) 0%, transparent 70%)",
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
          className="text-xl font-bold text-emerald-300"
          style={{ fontFamily: "'Courier New', monospace" }}
          animate={{
            textShadow: [
              "0 0 5px rgba(16, 185, 129, 0.5)",
              "0 0 15px rgba(16, 185, 129, 0.8)",
              "0 0 5px rgba(16, 185, 129, 0.5)",
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