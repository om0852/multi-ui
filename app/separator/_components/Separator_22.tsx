"use client";
import React from "react";
import { motion } from "framer-motion";

interface SeparatorProps {
  orientation?: "horizontal" | "vertical";
  thickness?: number;
  length?: string;
  color?: string;
  animated?: boolean;
}

const MusicNotesSeparator: React.FC<SeparatorProps> = ({
  orientation = "horizontal",
  thickness = 24,
  length = "100%",
  color = "#ec4899",
  animated = true,
}) => {
  const isHorizontal = orientation === "horizontal";
  const notes = 8;
  const noteSize = thickness / 2;

  const getNoteSymbol = (index: number) => {
    const symbols = ["♪", "♫", "♬", "♩"];
    return symbols[index % symbols.length];
  };

  return (
    <div
      className="relative overflow-hidden"
      style={{
        width: isHorizontal ? length : `${thickness}px`,
        height: isHorizontal ? `${thickness}px` : length,
        backgroundColor: `${color}11`,
        borderRadius: "4px",
      }}
    >
      {/* Base Line */}
      {[1, 2, 3, 4, 5].map((line) => (
        <div
          key={line}
          className="absolute"
          style={{
            width: "100%",
            height: "1px",
            backgroundColor: `${color}33`,
            top: `${line * 20}%`,
          }}
        />
      ))}

      {/* Notes */}
      {[...Array(notes)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute font-serif"
          style={{
            fontSize: noteSize,
            color: color,
            left: `${(i * 100) / (notes - 1)}%`,
            top: "50%",
            transform: "translate(-50%, -50%)",
          }}
          animate={
            animated
              ? {
                  y: [0, -thickness / 2, 0],
                  rotate: [0, i % 2 === 0 ? 20 : -20, 0],
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 1, 0.5],
                }
              : {}
          }
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: i * 0.2,
            ease: "easeInOut",
          }}
        >
          {getNoteSymbol(i)}
        </motion.div>
      ))}

      {/* Flowing Effect */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(90deg, ${color}00, ${color}22, ${color}00)`,
        }}
        animate={
          animated
            ? {
                x: ["-100%", "100%"],
              }
            : {}
        }
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Sparkle Effect */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(circle at 50% 50%, ${color}00, ${color}11, ${color}00)`,
        }}
        animate={
          animated
            ? {
                scale: [0.8, 1.2, 0.8],
                opacity: [0, 0.3, 0],
              }
            : {}
        }
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
};

export default MusicNotesSeparator; 