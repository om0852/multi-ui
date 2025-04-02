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
      {/* Base crystal layer */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            "linear-gradient(135deg, #164e63 0%, #083344 50%, #164e63 100%)",
            "linear-gradient(135deg, #083344 0%, #164e63 50%, #083344 100%)",
          ],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Crystal structures */}
      {Array.from({ length: 6 }).map((_, i) => (
        <motion.div
          key={`crystal-${i}`}
          className="absolute"
          style={{
            width: "40%",
            height: "40%",
            left: `${(i % 3) * 30}%`,
            top: `${Math.floor(i / 3) * 60}%`,
            clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
            background: "linear-gradient(135deg, rgba(103, 232, 249, 0.1), rgba(34, 211, 238, 0.2))",
            transformOrigin: "center",
          }}
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 45, 0],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4,
            delay: i * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Light refractions */}
      {Array.from({ length: 8 }).map((_, i) => (
        <motion.div
          key={`refraction-${i}`}
          className="absolute"
          style={{
            width: "2px",
            height: "100%",
            background: "linear-gradient(to bottom, transparent, rgba(103, 232, 249, 0.3), transparent)",
            left: `${(i + 1) * 12}%`,
            transform: `rotate(${i * 45}deg)`,
            transformOrigin: "center",
          }}
          animate={{
            opacity: [0, 0.8, 0],
            scale: [1, 1.2, 1],
            x: [-10, 10, -10],
          }}
          transition={{
            duration: 3,
            delay: i * 0.2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Crystal facets */}
      {Array.from({ length: 4 }).map((_, i) => (
        <motion.div
          key={`facet-${i}`}
          className="absolute w-full h-full"
          style={{
            border: "1px solid rgba(103, 232, 249, 0.1)",
            transform: `rotate(${i * 45}deg) scale(0.8)`,
            transformOrigin: "center",
          }}
          animate={{
            rotate: [`${i * 45}deg`, `${i * 45 + 180}deg`],
            scale: [0.8, 1, 0.8],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 8,
            delay: i * 1,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}

      {/* Sparkles */}
      {Array.from({ length: 15 }).map((_, i) => (
        <motion.div
          key={`sparkle-${i}`}
          className="absolute w-1 h-1 rounded-full bg-cyan-200"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            scale: [0, 1, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 1.5,
            delay: i * 0.2,
            repeat: Infinity,
            ease: "easeOut",
          }}
        />
      ))}

      {/* Crystal glow */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(circle at 50% 50%, rgba(103, 232, 249, 0.15), transparent)",
          filter: "blur(20px)",
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