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
      {/* Deep space background */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            "radial-gradient(circle at 30% 50%, #581c87, #3b0764, #1e1b4b)",
            "radial-gradient(circle at 70% 50%, #3b0764, #581c87, #1e1b4b)",
          ],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Nebula formations */}
      {Array.from({ length: 3 }).map((_, i) => (
        <motion.div
          key={`nebula-${i}`}
          className="absolute inset-0"
          style={{
            background: `radial-gradient(circle at ${50 + (i - 1) * 30}% ${50 + (i - 1) * 20}%, rgba(192, 132, 252, 0.15), transparent 60%)`,
            filter: "blur(30px)",
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
            rotate: [0, 360],
          }}
          transition={{
            duration: 15,
            delay: i * 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Cosmic dust particles */}
      {Array.from({ length: 30 }).map((_, i) => (
        <motion.div
          key={`dust-${i}`}
          className="absolute rounded-full"
          style={{
            width: `${1 + Math.random() * 2}px`,
            height: `${1 + Math.random() * 2}px`,
            background: "rgba(216, 180, 254, 0.6)",
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            filter: "blur(0.5px)",
          }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.7, 0.3],
            x: [0, Math.random() * 20 - 10],
            y: [0, Math.random() * 20 - 10],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            delay: i * 0.1,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Energy waves */}
      {Array.from({ length: 4 }).map((_, i) => (
        <motion.div
          key={`wave-${i}`}
          className="absolute w-full h-full"
          style={{
            border: "1px solid rgba(216, 180, 254, 0.1)",
            borderRadius: "50%",
            transform: `scale(${0.5 + i * 0.1})`,
          }}
          animate={{
            scale: [0.5 + i * 0.1, 0.7 + i * 0.1, 0.5 + i * 0.1],
            opacity: [0.1, 0.3, 0.1],
            rotate: [0, 360],
          }}
          transition={{
            duration: 10 - i,
            delay: i * 0.5,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}

      {/* Cosmic rays */}
      {Array.from({ length: 5 }).map((_, i) => (
        <motion.div
          key={`ray-${i}`}
          className="absolute"
          style={{
            width: "100%",
            height: "1px",
            background: "linear-gradient(90deg, transparent, rgba(216, 180, 254, 0.2), transparent)",
            transform: `rotate(${i * 36}deg)`,
            transformOrigin: "center",
          }}
          animate={{
            opacity: [0, 0.5, 0],
            scale: [1, 1.2, 1],
            rotate: [`${i * 36}deg`, `${i * 36 + 180}deg`],
          }}
          transition={{
            duration: 5,
            delay: i * 0.3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Space glow */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(circle at 50% 50%, rgba(216, 180, 254, 0.1), transparent 70%)",
          mixBlendMode: "screen",
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