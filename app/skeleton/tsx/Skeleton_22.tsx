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
        "relative overflow-hidden bg-slate-900",
        borderRadius,
        className
      )}
      style={{ width, height }}
    >
      {/* Mystical background */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(circle at center, rgba(124,58,237,0.2), rgba(31,41,55,0.1))",
        }}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Runic circles */}
      {Array.from({ length: 3 }).map((_, i) => (
        <motion.div
          key={`circle-${i}`}
          className="absolute rounded-full border border-violet-500/30"
          style={{
            width: `${60 - i * 15}%`,
            height: `${60 - i * 15}%`,
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
          }}
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 8 - i * 2,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}

      {/* Floating runes */}
      {Array.from({ length: 8 }).map((_, i) => (
        <motion.div
          key={`rune-${i}`}
          className="absolute text-violet-500/40 text-lg font-bold"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0.8, 1.2, 0.8],
            y: [-20, 0, -20],
          }}
          transition={{
            duration: 3,
            delay: i * 0.4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {["⚡", "✧", "⚘", "☆", "❈", "✺", "❋", "✤"][i]}
        </motion.div>
      ))}

      {/* Energy streams */}
      {Array.from({ length: 4 }).map((_, i) => (
        <motion.div
          key={`stream-${i}`}
          className="absolute h-px w-full"
          style={{
            top: `${25 * (i + 1)}%`,
            background: "linear-gradient(90deg, transparent, rgba(124,58,237,0.4), transparent)",
            filter: "blur(1px)",
          }}
          animate={{
            scaleX: [0, 1, 0],
            opacity: [0, 0.6, 0],
            x: ["-100%", "100%"],
          }}
          transition={{
            duration: 2.5,
            delay: i * 0.3,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}

      {/* Arcane symbols */}
      {Array.from({ length: 6 }).map((_, i) => (
        <motion.div
          key={`symbol-${i}`}
          className="absolute w-8 h-8 flex items-center justify-center text-violet-400/30"
          style={{
            left: `${(100 / 5) * i}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.5, 0.2],
            rotate: [0, 360],
          }}
          transition={{
            duration: 4,
            delay: i * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {["✴", "✶", "❋", "✺", "✧", "❈"][i]}
        </motion.div>
      ))}

      {/* Magical glow */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(circle at 50% 50%, transparent, rgba(124,58,237,0.1))",
          filter: "blur(20px)",
        }}
        animate={{
          opacity: [0.3, 0.6, 0.3],
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