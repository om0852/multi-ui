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
        "relative overflow-hidden bg-gray-950",
        borderRadius,
        className
      )}
      style={{ width, height }}
    >
      {/* Base circuit layer */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: `
            linear-gradient(90deg, transparent 50%, rgba(6,182,212,0.05) 50%),
            linear-gradient(0deg, transparent 50%, rgba(6,182,212,0.05) 50%)
          `,
          backgroundSize: "30px 30px",
        }}
        animate={{
          backgroundPosition: ["0px 0px", "30px 30px"],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Circuit paths */}
      {Array.from({ length: 6 }).map((_, i) => (
        <motion.div
          key={`path-${i}`}
          className="absolute h-[2px]"
          style={{
            width: "40%",
            background: "linear-gradient(90deg, transparent, rgba(6,182,212,0.3), transparent)",
            left: `${(i % 3) * 30}%`,
            top: `${Math.floor(i / 3) * 60 + 20}%`,
          }}
          animate={{
            x: ["-100%", "200%"],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 3,
            delay: i * 0.4,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}

      {/* Vertical paths */}
      {Array.from({ length: 4 }).map((_, i) => (
        <motion.div
          key={`vpath-${i}`}
          className="absolute w-[2px]"
          style={{
            height: "40%",
            background: "linear-gradient(0deg, transparent, rgba(6,182,212,0.3), transparent)",
            left: `${i * 30 + 10}%`,
            top: "30%",
          }}
          animate={{
            y: ["-100%", "200%"],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 3,
            delay: i * 0.5,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}

      {/* Data nodes */}
      {Array.from({ length: 8 }).map((_, i) => (
        <motion.div
          key={`node-${i}`}
          className="absolute w-2 h-2 rounded-full bg-cyan-500"
          style={{
            left: `${(i % 4) * 30 + 10}%`,
            top: `${Math.floor(i / 4) * 60 + 20}%`,
            filter: "blur(1px)",
          }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.7, 0.3],
            boxShadow: [
              "0 0 5px rgba(6,182,212,0.5)",
              "0 0 15px rgba(6,182,212,0.8)",
              "0 0 5px rgba(6,182,212,0.5)",
            ],
          }}
          transition={{
            duration: 2,
            delay: i * 0.3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Energy pulses */}
      {Array.from({ length: 4 }).map((_, i) => (
        <motion.div
          key={`pulse-${i}`}
          className="absolute rounded-full"
          style={{
            width: "60px",
            height: "60px",
            border: "1px solid rgba(6,182,212,0.3)",
            left: `${(i % 2) * 60 + 20}%`,
            top: `${Math.floor(i / 2) * 40 + 30}%`,
          }}
          animate={{
            scale: [0, 2],
            opacity: [0.5, 0],
          }}
          transition={{
            duration: 2,
            delay: i * 0.5,
            repeat: Infinity,
            ease: "easeOut",
          }}
        />
      ))}

      {/* Circuit grid overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            linear-gradient(90deg, rgba(6,182,212,0.05) 1px, transparent 1px),
            linear-gradient(0deg, rgba(6,182,212,0.05) 1px, transparent 1px)
          `,
          backgroundSize: "15px 15px",
        }}
      />

      {/* Glow overlay */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(circle at center, transparent, rgba(0,0,0,0.5))",
        }}
        animate={{
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
};

export default Skeleton; 