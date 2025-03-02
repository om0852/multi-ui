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
        "relative overflow-hidden bg-purple-950",
        borderRadius,
        className
      )}
      style={{ width, height }}
    >
      {/* Mystical background */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            "radial-gradient(circle at 30% 50%, #581c87, #3b0764, #2e1065)",
            "radial-gradient(circle at 70% 50%, #3b0764, #581c87, #2e1065)",
          ],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Floating runes */}
      {Array.from({ length: 15 }).map((_, i) => (
        <motion.div
          key={`rune-${i}`}
          className="absolute text-purple-300/40 font-runic text-lg"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            opacity: [0, 0.4, 0],
            scale: [0.8, 1.2, 0.8],
            rotate: [0, 360],
          }}
          transition={{
            duration: 4 + Math.random() * 2,
            delay: i * 0.3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {String.fromCharCode(0x16A0 + Math.floor(Math.random() * 76))}
        </motion.div>
      ))}

      {/* Energy circles */}
      {Array.from({ length: 4 }).map((_, i) => (
        <motion.div
          key={`circle-${i}`}
          className="absolute rounded-full border border-purple-400/30"
          style={{
            width: `${40 + i * 20}%`,
            height: `${40 + i * 20}%`,
            left: `${50 - (20 + i * 10)}%`,
            top: `${50 - (20 + i * 10)}%`,
          }}
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 8 + i * 2,
            delay: i * 0.5,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}

      {/* Magical particles */}
      {Array.from({ length: 20 }).map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute rounded-full bg-purple-300"
          style={{
            width: "2px",
            height: "2px",
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            scale: [0, 1.5, 0],
            opacity: [0, 0.8, 0],
            x: [0, (Math.random() - 0.5) * 50],
            y: [0, (Math.random() - 0.5) * 50],
          }}
          transition={{
            duration: 3,
            delay: i * 0.2,
            repeat: Infinity,
            ease: "easeOut",
          }}
        />
      ))}

      {/* Arcane symbols */}
      {Array.from({ length: 6 }).map((_, i) => (
        <motion.div
          key={`symbol-${i}`}
          className="absolute"
          style={{
            width: "20px",
            height: "20px",
            border: "1px solid rgba(216, 180, 254, 0.3)",
            transform: `rotate(${i * 60}deg)`,
            left: `${20 + i * 10}%`,
            top: "40%",
          }}
          animate={{
            rotate: [i * 60, i * 60 + 360],
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 6,
            delay: i * 0.4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Mystical glow */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(circle at 50% 50%, rgba(216, 180, 254, 0.15), transparent)",
          mixBlendMode: "screen",
        }}
        animate={{
          opacity: [0.3, 0.6, 0.3],
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