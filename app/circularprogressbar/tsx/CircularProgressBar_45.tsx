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

  // Generate gear teeth
  const numTeeth = 20;
  const teeth = Array.from({ length: numTeeth }).map((_, i) => {
    const angle = (i * 360) / numTeeth;
    return { angle, delay: i * 0.1 };
  });

  return (
    <div className="relative flex items-center justify-center" style={{ width: size, height: size }}>
      {/* Metallic gradients */}
      <svg style={{ position: 'absolute', width: 0, height: 0 }}>
        <defs>
          <linearGradient id="gearGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#94a3b8" />
            <stop offset="50%" stopColor="#64748b" />
            <stop offset="100%" stopColor="#475569" />
          </linearGradient>
          <filter id="gear-shadow">
            <feDropShadow dx="2" dy="2" stdDeviation="2" floodColor="#0f172a" floodOpacity="0.3" />
          </filter>
        </defs>
      </svg>

      {/* Rotating outer gear */}
      <motion.div
        className="absolute w-full h-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        {teeth.map((tooth, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              width: 12,
              height: 20,
              background: "url(#gearGradient)",
              left: "50%",
              top: "50%",
              marginLeft: -6,
              transformOrigin: "50% 50%",
              transform: `rotate(${tooth.angle}deg) translateY(-${radius + 5}px)`,
              filter: "url(#gear-shadow)",
              opacity: percentage > (i / numTeeth) * 100 ? 1 : 0.3,
            }}
            animate={{
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              delay: tooth.delay,
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
          stroke="#334155"
          strokeWidth={strokeWidth}
          className="opacity-30"
        />
      </svg>

      {/* Progress Circle */}
      <svg className="absolute" width={size} height={size}>
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="url(#gearGradient)"
          strokeWidth={strokeWidth}
          strokeDasharray={`${circumference / 40} ${circumference / 40}`}
          strokeDashoffset={strokeDashoffset}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset }}
          transition={{ duration: 1.5 }}
          strokeLinecap="round"
          style={{ filter: "url(#gear-shadow)" }}
        />
      </svg>

      {/* Center gear */}
      <motion.div
        className="absolute rounded-full overflow-hidden flex items-center justify-center"
        style={{
          width: size - strokeWidth * 4,
          height: size - strokeWidth * 4,
          background: "linear-gradient(135deg, #94a3b8, #475569)",
          boxShadow: "inset 2px 2px 6px rgba(15, 23, 42, 0.3)",
        }}
        animate={{ rotate: -360 }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      >
        {/* Inner gear pattern */}
        {[0, 45, 90, 135].map((rotation, i) => (
          <motion.div
            key={i}
            className="absolute inset-0"
            style={{
              borderTop: "2px solid rgba(148, 163, 184, 0.3)",
              transform: `rotate(${rotation}deg)`,
            }}
          />
        ))}

        {/* Bolt pattern */}
        {[0, 60, 120, 180, 240, 300].map((rotation, i) => (
          <motion.div
            key={i}
            className="absolute w-3 h-3 rounded-full bg-slate-700"
            style={{
              transform: `rotate(${rotation}deg) translateY(-${(size - strokeWidth * 6) / 4}px)`,
              boxShadow: "inset 1px 1px 2px rgba(15, 23, 42, 0.5)",
            }}
          />
        ))}

        <motion.span
          className="text-xl font-bold text-slate-200 relative z-10"
          animate={{
            textShadow: [
              "1px 1px 2px rgba(15, 23, 42, 0.5)",
              "2px 2px 4px rgba(15, 23, 42, 0.7)",
              "1px 1px 2px rgba(15, 23, 42, 0.5)",
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