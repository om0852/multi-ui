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
      {/* Base circuit pattern */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: `
            linear-gradient(90deg, transparent 50%, rgba(0,255,255,0.1) 50%),
            linear-gradient(0deg, transparent 50%, rgba(0,255,255,0.1) 50%)
          `,
          backgroundSize: "20px 20px",
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

      {/* Circuit paths */}
      {Array.from({ length: 4 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute h-[2px]"
          style={{
            top: `${25 * (i + 1)}%`,
            left: 0,
            right: 0,
            background: "linear-gradient(90deg, transparent, #0ff, transparent)",
          }}
          animate={{
            x: ["-100%", "100%"],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 2,
            delay: i * 0.3,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}

      {/* Vertical circuit paths */}
      {Array.from({ length: 3 }).map((_, i) => (
        <motion.div
          key={`v-${i}`}
          className="absolute w-[2px]"
          style={{
            left: `${33 * (i + 1)}%`,
            top: 0,
            bottom: 0,
            background: "linear-gradient(0deg, transparent, #0ff, transparent)",
          }}
          animate={{
            y: ["-100%", "100%"],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 2,
            delay: i * 0.4,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}

      {/* Energy nodes */}
      {Array.from({ length: 6 }).map((_, i) => (
        <motion.div
          key={`node-${i}`}
          className="absolute w-2 h-2 rounded-full bg-cyan-400"
          style={{
            left: `${(i % 3) * 33 + 33}%`,
            top: `${Math.floor(i / 3) * 50 + 25}%`,
          }}
          animate={{
            boxShadow: [
              "0 0 10px #0ff",
              "0 0 20px #0ff",
              "0 0 10px #0ff",
            ],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 1.5,
            delay: i * 0.2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Overlay glow */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(circle at 50% 50%, rgba(0,255,255,0.1), transparent)",
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