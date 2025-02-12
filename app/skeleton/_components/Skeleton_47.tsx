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
      {/* Base digital background */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            "linear-gradient(180deg, #000000, #001a00)",
            "linear-gradient(180deg, #001a00, #000000)",
          ],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Digital rain columns */}
      {Array.from({ length: 15 }).map((_, i) => (
        <motion.div
          key={`rain-${i}`}
          className="absolute"
          style={{
            width: "2px",
            background: "linear-gradient(180deg, transparent, #00ff00, transparent)",
            left: `${(i + 1) * 6}%`,
            height: "40%",
            opacity: 0.5,
          }}
          animate={{
            y: ["-100%", "200%"],
            opacity: [0, 0.5, 0],
          }}
          transition={{
            duration: 2 + Math.random() * 2,
            delay: i * 0.2,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}

      {/* Digital characters */}
      {Array.from({ length: 30 }).map((_, i) => (
        <motion.div
          key={`char-${i}`}
          className="absolute text-[8px] font-mono text-green-500"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            opacity: [0, 1, 0],
            y: [0, 100],
          }}
          transition={{
            duration: 1.5,
            delay: i * 0.1,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {String.fromCharCode(0x30A0 + Math.random() * 96)}
        </motion.div>
      ))}

      {/* Glowing trails */}
      {Array.from({ length: 8 }).map((_, i) => (
        <motion.div
          key={`trail-${i}`}
          className="absolute"
          style={{
            width: "1px",
            height: "30%",
            background: "linear-gradient(180deg, transparent, #00ff00, transparent)",
            left: `${(i + 1) * 12}%`,
            filter: "blur(1px)",
          }}
          animate={{
            y: ["-100%", "300%"],
            opacity: [0, 0.8, 0],
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
          backgroundImage: "radial-gradient(circle at 50% 50%, rgba(0, 255, 0, 0.1), transparent)",
          mixBlendMode: "screen",
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

      {/* CRT scan line effect */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(180deg, transparent, rgba(0, 255, 0, 0.03), transparent)",
          backgroundSize: "100% 2px",
        }}
        animate={{
          y: [0, 100],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </div>
  );
};

export default Skeleton; 