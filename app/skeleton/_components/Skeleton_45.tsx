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
        "relative overflow-hidden bg-cyan-950",
        borderRadius,
        className
      )}
      style={{ width, height }}
    >
      {/* Cave background */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            "radial-gradient(circle at 30% 50%, #164e63, #083344, #042f2e)",
            "radial-gradient(circle at 70% 50%, #083344, #164e63, #042f2e)",
          ],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Crystal formations */}
      {Array.from({ length: 6 }).map((_, i) => (
        <motion.div
          key={`crystal-${i}`}
          className="absolute"
          style={{
            width: "30%",
            height: "40%",
            background: "linear-gradient(135deg, rgba(103, 232, 249, 0.2), rgba(34, 211, 238, 0.1))",
            clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
            left: `${(i % 3) * 35}%`,
            top: `${Math.floor(i / 3) * 45 + 10}%`,
          }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
            rotate: [0, 10, 0],
          }}
          transition={{
            duration: 5,
            delay: i * 0.8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Light refractions */}
      {Array.from({ length: 15 }).map((_, i) => (
        <motion.div
          key={`refraction-${i}`}
          className="absolute"
          style={{
            width: "4px",
            height: "4px",
            background: "rgba(103, 232, 249, 0.6)",
            borderRadius: "50%",
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            filter: "blur(1px)",
            boxShadow: "0 0 8px rgba(103, 232, 249, 0.8)",
          }}
          animate={{
            scale: [0, 1.5, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 2 + Math.random() * 2,
            delay: i * 0.2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Mineral veins */}
      {Array.from({ length: 8 }).map((_, i) => (
        <motion.div
          key={`vein-${i}`}
          className="absolute"
          style={{
            width: "2px",
            height: "30%",
            background: "linear-gradient(to bottom, transparent, rgba(103, 232, 249, 0.3), transparent)",
            left: `${(i + 1) * 12}%`,
            top: "35%",
            transform: `rotate(${i * 45}deg)`,
          }}
          animate={{
            opacity: [0.2, 0.5, 0.2],
            scaleY: [1, 1.2, 1],
          }}
          transition={{
            duration: 4,
            delay: i * 0.3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Crystal glow */}
      {Array.from({ length: 4 }).map((_, i) => (
        <motion.div
          key={`glow-${i}`}
          className="absolute"
          style={{
            width: "40%",
            height: "40%",
            background: "radial-gradient(circle at center, rgba(103, 232, 249, 0.1), transparent 70%)",
            filter: "blur(15px)",
            left: `${(i % 2) * 60}%`,
            top: `${Math.floor(i / 2) * 60}%`,
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 6,
            delay: i * 1,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Cave atmosphere */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(circle at 50% 50%, rgba(103, 232, 249, 0.05), transparent)",
          mixBlendMode: "screen",
        }}
        animate={{
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