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
      {/* Base matrix background */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(180deg, rgba(16,185,129,0.1) 0%, rgba(16,185,129,0.05) 100%)",
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

      {/* Digital rain columns */}
      {Array.from({ length: 10 }).map((_, i) => (
        <motion.div
          key={`rain-${i}`}
          className="absolute w-4 text-[8px] font-mono text-emerald-500/30 whitespace-pre"
          style={{
            left: `${(100 / 10) * i}%`,
            top: 0,
          }}
          initial={{ y: "-100%" }}
          animate={{
            y: ["0%", "100%"],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            ease: "linear",
            delay: i * 0.2,
          }}
        >
          {Array.from({ length: 20 }).map(() => 
            Math.random() > 0.5 ? "1" : "0"
          ).join("\n")}
        </motion.div>
      ))}

      {/* Horizontal scan effect */}
      <motion.div
        className="absolute inset-0 bg-emerald-500/5"
        animate={{
          y: ["-100%", "100%"],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          height: "50%",
        }}
      />

      {/* Matrix code overlay */}
      {Array.from({ length: 15 }).map((_, i) => (
        <motion.div
          key={`code-${i}`}
          className="absolute text-[10px] font-mono text-emerald-400/40"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0.8, 1, 0.8],
          }}
          transition={{
            duration: 1.5,
            delay: i * 0.1,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {Math.random() > 0.5 ? "1" : "0"}
        </motion.div>
      ))}

      {/* Glitch effect */}
      <motion.div
        className="absolute inset-0"
        animate={{
          clipPath: [
            "inset(0 0 0 0)",
            "inset(10% 0 20% 0)",
            "inset(0 0 0 0)",
          ],
          x: [0, -10, 10, 0],
        }}
        transition={{
          duration: 0.2,
          repeat: Infinity,
          repeatDelay: 3,
          ease: "linear",
        }}
      >
        <div className="absolute inset-0 bg-emerald-500/10" />
      </motion.div>

      {/* CRT flicker */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-500/5 to-transparent"
        animate={{
          opacity: [0, 0.1, 0],
        }}
        transition={{
          duration: 0.1,
          repeat: Infinity,
          repeatDelay: 1,
          ease: "linear",
        }}
      />

      {/* Scan lines */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "repeating-linear-gradient(0deg, rgba(0,0,0,0.1) 0px, rgba(0,0,0,0.1) 1px, transparent 1px, transparent 2px)",
          backgroundSize: "100% 2px",
        }}
      />
    </div>
  );
};

export default Skeleton; 