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
        "relative overflow-hidden bg-white/5 backdrop-blur-sm",
        borderRadius,
        className
      )}
      style={{ width, height }}
    >
      {/* Holographic base */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            "linear-gradient(45deg, rgba(255,0,0,0.1), rgba(255,255,0,0.1), rgba(0,255,0,0.1), rgba(0,255,255,0.1), rgba(0,0,255,0.1), rgba(255,0,255,0.1))",
            "linear-gradient(45deg, rgba(255,0,255,0.1), rgba(255,0,0,0.1), rgba(255,255,0,0.1), rgba(0,255,0,0.1), rgba(0,255,255,0.1), rgba(0,0,255,0.1))",
          ],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Rainbow stripes */}
      {Array.from({ length: 10 }).map((_, i) => (
        <motion.div
          key={`stripe-${i}`}
          className="absolute w-full"
          style={{
            height: "10%",
            top: `${i * 10}%`,
            background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)",
            filter: "blur(1px)",
          }}
          animate={{
            opacity: [0, 0.5, 0],
            x: ["-100%", "100%"],
          }}
          transition={{
            duration: 3,
            delay: i * 0.2,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}

      {/* Prismatic patterns */}
      {Array.from({ length: 6 }).map((_, i) => (
        <motion.div
          key={`prism-${i}`}
          className="absolute"
          style={{
            width: "50%",
            height: "50%",
            left: `${(i % 3) * 25}%`,
            top: `${Math.floor(i / 3) * 50}%`,
            background: "linear-gradient(135deg, rgba(255,255,255,0.1), transparent)",
            backdropFilter: "blur(5px)",
            WebkitBackdropFilter: "blur(5px)",
          }}
          animate={{
            opacity: [0.3, 0.6, 0.3],
            rotate: [0, 360],
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{
            duration: 8,
            delay: i * 0.5,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}

      {/* Holographic particles */}
      {Array.from({ length: 30 }).map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute rounded-full"
          style={{
            width: "2px",
            height: "2px",
            background: "white",
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            filter: "blur(1px)",
          }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1.5, 0],
            x: [0, Math.random() * 50 - 25],
            y: [0, Math.random() * 50 - 25],
          }}
          transition={{
            duration: 2,
            delay: i * 0.1,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Color shift overlay */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(45deg, rgba(255,0,255,0.1), rgba(0,255,255,0.1))",
          mixBlendMode: "color",
        }}
        animate={{
          opacity: [0.3, 0.7, 0.3],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Iridescent glow */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(circle at 50% 50%, rgba(255,255,255,0.2), transparent 70%)",
          mixBlendMode: "screen",
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
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