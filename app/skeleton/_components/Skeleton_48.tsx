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
        "relative overflow-hidden bg-slate-950",
        borderRadius,
        className
      )}
      style={{ width, height }}
    >
      {/* Night sky background */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            "radial-gradient(circle at 30% 50%, #020617, #0f172a, #1e293b)",
            "radial-gradient(circle at 70% 50%, #0f172a, #020617, #1e293b)",
          ],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Stars */}
      {Array.from({ length: 50 }).map((_, i) => (
        <motion.div
          key={`star-${i}`}
          className="absolute rounded-full bg-white"
          style={{
            width: `${1 + Math.random()}px`,
            height: `${1 + Math.random()}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            opacity: [0.2, 0.8, 0.2],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 1 + Math.random() * 2,
            delay: i * 0.1,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Aurora waves */}
      {Array.from({ length: 4 }).map((_, i) => (
        <motion.div
          key={`aurora-${i}`}
          className="absolute"
          style={{
            width: "150%",
            height: "40%",
            background: `linear-gradient(90deg, 
              transparent,
              rgba(${i % 2 ? "134, 239, 172" : "52, 211, 153"}, 0.2),
              rgba(${i % 2 ? "94, 234, 212" : "45, 212, 191"}, 0.3),
              rgba(${i % 2 ? "52, 211, 153" : "134, 239, 172"}, 0.2),
              transparent
            )`,
            top: `${20 + i * 15}%`,
            left: "-25%",
            filter: "blur(20px)",
          }}
          animate={{
            x: ["-10%", "10%", "-10%"],
            y: [0, 10, 0],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 8 + i * 2,
            delay: i * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Light particles */}
      {Array.from({ length: 20 }).map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute rounded-full"
          style={{
            width: "4px",
            height: "4px",
            background: "rgba(134, 239, 172, 0.8)",
            filter: "blur(1px)",
            left: `${Math.random() * 100}%`,
            top: `${30 + Math.random() * 40}%`,
          }}
          animate={{
            x: [0, (Math.random() - 0.5) * 50],
            y: [0, (Math.random() - 0.5) * 30],
            opacity: [0, 1, 0],
            scale: [0, 1.5, 0],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            delay: i * 0.2,
            repeat: Infinity,
            ease: "easeOut",
          }}
        />
      ))}

      {/* Aurora glow */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(circle at 50% 40%, rgba(134, 239, 172, 0.1), transparent 70%)",
          mixBlendMode: "screen",
        }}
        animate={{
          opacity: [0.3, 0.6, 0.3],
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