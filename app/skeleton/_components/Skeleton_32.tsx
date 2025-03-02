"use client";

import React from "react";
import { motion } from "framer-motion";
import clsx from "clsx";

interface SkeletonProps {
  width: string;
  height: string;
  borderRadius?: string;
  className?: string;
}

const Skeleton: React.FC<SkeletonProps> = ({
  width,
  height,
  borderRadius = "rounded-md",
  className = "",
}) => {
  return (
    <div
      className={clsx(
        "relative overflow-hidden bg-gray-900",
        borderRadius,
        className
      )}
      style={{ width, height }}
    >
      {/* Base digital background */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: `
            linear-gradient(90deg, transparent 50%, rgba(0, 255, 0, 0.03) 50%),
            linear-gradient(0deg, transparent 50%, rgba(0, 255, 0, 0.03) 50%)
          `,
          backgroundSize: "4px 4px",
        }}
      />

      {/* Binary streams */}
      {Array.from({ length: 8 }).map((_, i) => (
        <motion.div
          key={`stream-${i}`}
          className="absolute font-mono text-xs"
          style={{
            color: "rgba(0, 255, 0, 0.15)",
            left: `${(i * 12) + 4}%`,
            top: "-20%",
            writingMode: "vertical-rl",
            textOrientation: "upright",
          }}
          initial={{ y: "-100%" }}
          animate={{
            y: ["0%", "200%"],
          }}
          transition={{
            duration: 10 + Math.random() * 5,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {Array.from({ length: 20 }).map(() => Math.round(Math.random())).join("")}
        </motion.div>
      ))}

      {/* Data packets */}
      {Array.from({ length: 6 }).map((_, i) => (
        <motion.div
          key={`packet-${i}`}
          className="absolute h-1 bg-green-500/20"
          style={{
            width: "20%",
            top: `${(i * 16) + 10}%`,
          }}
          animate={{
            x: ["-100%", "200%"],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 4,
            delay: i * 0.5,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}

      {/* Connection nodes */}
      {Array.from({ length: 12 }).map((_, i) => (
        <motion.div
          key={`node-${i}`}
          className="absolute w-1 h-1 rounded-full bg-green-400/40"
          style={{
            left: `${(i % 4) * 30 + 5}%`,
            top: `${Math.floor(i / 4) * 40 + 10}%`,
          }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: 2,
            delay: i * 0.2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Data flow lines */}
      {Array.from({ length: 5 }).map((_, i) => (
        <motion.div
          key={`flow-${i}`}
          className="absolute w-full h-px"
          style={{
            top: `${20 + i * 15}%`,
            background: "linear-gradient(90deg, transparent, rgba(0, 255, 0, 0.2), transparent)",
          }}
          animate={{
            x: ["-100%", "100%"],
            opacity: [0, 0.5, 0],
          }}
          transition={{
            duration: 3,
            delay: i * 0.4,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}

      {/* Digital noise overlay */}
      <motion.div
        className="absolute inset-0"
        style={{
          backgroundImage: "repeating-radial-gradient(circle at 30% 30%, rgba(0, 255, 0, 0.05) 0%, transparent 1%)",
          backgroundSize: "4px 4px",
        }}
        animate={{
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
};

export default Skeleton; 