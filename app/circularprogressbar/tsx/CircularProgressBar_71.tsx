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
    size: 20 + Math.random() * 10,
    teeth: 8 + Math.floor(Math.random() * 4),
    speed: 5 + Math.random() * 5,
    direction: i % 2 === 0 ? 1 : -1,
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
                dur="3s"
                repeatCount="indefinite"
              />
            </stop>
            <stop offset="50%" stopColor="#d97706">
              <animate
                attributeName="stop-color"
                values="#d97706;#b45309;#d97706"
                dur="3s"
                repeatCount="indefinite"
              />
            </stop>
            <stop offset="100%" stopColor="#92400e">
              <animate
                attributeName="stop-color"
                values="#92400e;#d97706;#92400e"
                dur="3s"
                repeatCount="indefinite"
              />
            </stop>
          </linearGradient>
          <filter id="metal-texture">
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
                      0 0 0 0.1 0"
              in="noise"
              result="coloredNoise"
            />
            <feComposite operator="in" in="coloredNoise" in2="SourceGraphic" />
          </filter>
          <pattern id="rivet-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <circle cx="10" cy="10" r="2" fill="#92400e" opacity="0.3" />
          </pattern>
        </defs>
      </svg>

      {/* Gears */}
      {gears.map((gear, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            width: gear.size,
            height: gear.size,
            left: "50%",
            top: "50%",
            marginLeft: -gear.size / 2,
            marginTop: -gear.size / 2,
            transform: `rotate(${gear.angle}deg) translateY(-${radius * 0.7}px)`,
            opacity: percentage > (i / numGears) * 100 ? 1 : 0.3,
          }}
        >
          <motion.div
            style={{
              width: "100%",
              height: "100%",
              background: "url(#brass-gradient)",
              borderRadius: "50%",
              position: "relative",
              filter: "url(#metal-texture)",
            }}
            animate={{
              rotate: percentage > (i / numGears) * 100 ? [0, 360 * gear.direction] : 0,
            }}
            transition={{
              duration: gear.speed,
              repeat: Infinity,
              ease: "linear",
              delay: gear.delay,
            }}
          >
            {Array.from({ length: gear.teeth }).map((_, j) => (
              <div
                key={j}
                style={{
                  position: "absolute",
                  width: "30%",
                  height: "10%",
                  background: "url(#brass-gradient)",
                  left: "85%",
                  top: "45%",
                  transform: `rotate(${(j * 360) / gear.teeth}deg)`,
                  transformOrigin: "0% 50%",
                  filter: "url(#metal-texture)",
                }}
              />
            ))}
            <div
              style={{
                position: "absolute",
                width: "30%",
                height: "30%",
                background: "#92400e",
                borderRadius: "50%",
                left: "35%",
                top: "35%",
                filter: "url(#metal-texture)",
              }}
            />
          </motion.div>
        </motion.div>
      ))}

      {/* Rivet texture */}
      <motion.div
        className="absolute w-full h-full"
        style={{
          background: "url(#rivet-pattern)",
          opacity: 0.5,
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
            filter: "url(#metal-texture)",
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