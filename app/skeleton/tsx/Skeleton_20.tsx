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
      {/* Base data stream background */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(0deg,
            rgba(16, 185, 129, 0.05) 25%,
            rgba(5, 150, 105, 0.05) 50%,
            rgba(4, 120, 87, 0.05) 75%,
            rgba(6, 95, 70, 0.05) 100%
          )`,
          backgroundSize: "100% 400%",
        }}
        animate={{
          backgroundPosition: ["0% 0%", "0% 100%"],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Data flow lines */}
      {Array.from({ length: 10 }).map((_, i) => (
        <motion.div
          key={`flow-${i}`}
          className="absolute h-px bg-emerald-500/20"
          style={{
            width: `${20 + Math.random() * 60}%`,
            left: `${Math.random() * 100}%`,
            top: `${(100 / 10) * i}%`,
          }}
          animate={{
            scaleX: [0, 1, 0],
            opacity: [0, 0.5, 0],
            x: ["-100%", "200%"],
          }}
          transition={{
            duration: 2 + Math.random() * 2,
            repeat: Infinity,
            delay: i * 0.2,
            ease: "linear",
          }}
        />
      ))}

      {/* Binary code particles */}
      {Array.from({ length: 20 }).map((_, i) => (
        <motion.div
          key={`binary-${i}`}
          className="absolute text-[8px] font-mono text-emerald-500/30"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          initial={{ opacity: 0, y: -20 }}
          animate={{
            opacity: [0, 1, 0],
            y: [0, 100],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: i * 0.3,
            ease: "linear",
          }}
        >
          {Math.random() > 0.5 ? "1" : "0"}
        </motion.div>
      ))}

      {/* Data packets */}
      {Array.from({ length: 8 }).map((_, i) => (
        <motion.div
          key={`packet-${i}`}
          className="absolute w-2 h-2 rounded-full bg-emerald-400/30"
          style={{
            boxShadow: "0 0 8px rgba(16, 185, 129, 0.3)",
          }}
          animate={{
            x: ["-100%", "200%"],
            y: [
              Math.sin(i) * 20,
              Math.sin(i + 1) * 20,
              Math.sin(i + 2) * 20,
            ],
            scale: [1, 1.2, 1],
            opacity: [0, 0.8, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: i * 0.4,
            ease: "linear",
          }}
        />
      ))}

      {/* Connection nodes */}
      {Array.from({ length: 6 }).map((_, i) => (
        <motion.div
          key={`node-${i}`}
          className="absolute w-1 h-1 rounded-full bg-emerald-400"
          style={{
            left: `${(100 / 5) * i}%`,
            top: `${Math.random() * 100}%`,
            boxShadow: "0 0 12px rgba(16, 185, 129, 0.5)",
          }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: i * 0.3,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Data stream waves */}
      {Array.from({ length: 3 }).map((_, i) => (
        <motion.div
          key={`wave-${i}`}
          className="absolute inset-0"
          style={{
            background: `repeating-linear-gradient(
              ${90 * i}deg,
              transparent,
              transparent 20px,
              rgba(16, 185, 129, 0.03) 20px,
              rgba(16, 185, 129, 0.03) 40px
            )`,
          }}
          animate={{
            x: ["-100%", "100%"],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            delay: i * 2,
            ease: "linear",
          }}
        />
      ))}

      {/* Overlay gradient */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(circle at center, transparent 30%, rgba(17, 24, 39, 0.7))",
        }}
        animate={{
          opacity: [0.5, 0.7, 0.5],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
};

export default Skeleton; 