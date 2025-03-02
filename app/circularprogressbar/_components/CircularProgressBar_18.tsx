import React from "react";
import { motion } from "framer-motion";

interface CircularProgressBarProps {
  value: number;
  max: number;
  size?: number;
}

const CircularProgressBar: React.FC<CircularProgressBarProps> = ({
  value,
  max,
  size = 100,
}) => {
  const percentage = (value / max) * 100;
  const waveHeight = size * (1 - percentage / 100);

  return (
    <div className="relative flex items-center justify-center" style={{ width: size, height: size }}>
      {/* Container circle */}
      <div className="absolute w-full h-full rounded-full border-4 border-violet-800 overflow-hidden bg-violet-950">
        {/* Liquid wave effect */}
        <motion.div
          className="absolute w-[200%] left-[-50%]"
          style={{ top: waveHeight }}
          animate={{
            translateX: ["0%", "50%"],
          }}
          transition={{
            repeat: Infinity,
            duration: 2,
            ease: "linear",
          }}
        >
          <svg
            viewBox="0 0 400 100"
            preserveAspectRatio="none"
            style={{ width: "100%", height: "40px" }}
          >
            <path
              d="M0,50 C100,20 200,80 400,50 L400,100 L0,100 Z"
              fill="rgba(139, 92, 246, 0.5)"
            />
          </svg>
        </motion.div>
        <motion.div
          className="absolute w-[200%] left-[-50%]"
          style={{ top: waveHeight }}
          animate={{
            translateX: ["50%", "0%"],
          }}
          transition={{
            repeat: Infinity,
            duration: 3,
            ease: "linear",
          }}
        >
          <svg
            viewBox="0 0 400 100"
            preserveAspectRatio="none"
            style={{ width: "100%", height: "40px" }}
          >
            <path
              d="M0,50 C100,80 200,20 400,50 L400,100 L0,100 Z"
              fill="rgba(139, 92, 246, 0.8)"
            />
          </svg>
        </motion.div>
      </div>

      {/* Percentage display */}
      <motion.div
        className="absolute bg-violet-900/50 rounded-full backdrop-blur-sm flex items-center justify-center"
        style={{ width: size * 0.6, height: size * 0.6 }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", delay: 0.2 }}
      >
        <motion.div
          className="text-2xl font-bold text-white flex flex-col items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <span>{Math.round(percentage)}%</span>
          <span className="text-xs text-violet-200">filled</span>
        </motion.div>
      </motion.div>

      {/* Shine effect */}
      <motion.div
        className="absolute w-full h-full rounded-full"
        style={{
          background: "linear-gradient(45deg, transparent 40%, rgba(255,255,255,0.2) 45%, transparent 50%)",
        }}
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </div>
  );
};

export default CircularProgressBar; 