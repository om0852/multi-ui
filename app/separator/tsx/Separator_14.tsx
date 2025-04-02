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

const SoundWaveSeparator: React.FC<SeparatorProps> = ({
  orientation = "horizontal",
  thickness = 24,
  length = "100%",
  color = "#06b6d4",
  animated = true,
}) => {
  const isHorizontal = orientation === "horizontal";
  const bars = 20;
  const barWidth = 4;
  const gap = 4;

  return (
    <div
      className="relative overflow-hidden"
      style={{
        width: isHorizontal ? length : `${thickness}px`,
        height: isHorizontal ? `${thickness}px` : length,
        backgroundColor: `${color}11`,
        borderRadius: "4px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: `${gap}px`,
      }}
    >
      {[...Array(bars)].map((_, index) => {
        const maxHeight = thickness * 0.8;
        const minHeight = thickness * 0.2;
        const heightVariations = [
          maxHeight * 0.4,
          maxHeight * 0.8,
          maxHeight * 0.6,
          maxHeight * 0.9,
          maxHeight * 0.5,
          maxHeight * 0.7,
          maxHeight * 0.3,
        ];
        const randomHeight = heightVariations[index % heightVariations.length];

        return (
          <motion.div
            key={index}
            style={{
              width: isHorizontal ? `${barWidth}px` : "100%",
              height: isHorizontal ? "100%" : `${barWidth}px`,
              backgroundColor: color,
              borderRadius: "2px",
            }}
            animate={
              animated
                ? {
                    scaleY: isHorizontal
                      ? [
                          minHeight / thickness,
                          randomHeight / thickness,
                          minHeight / thickness,
                        ]
                      : 1,
                    scaleX: isHorizontal
                      ? 1
                      : [
                          minHeight / thickness,
                          randomHeight / thickness,
                          minHeight / thickness,
                        ],
                    opacity: [0.5, 1, 0.5],
                  }
                : {}
            }
            transition={{
              duration: 1.5,
              repeat: Infinity,
              delay: index * 0.1,
              ease: "easeInOut",
            }}
          />
        );
      })}
      <motion.div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(${
            isHorizontal ? "90deg" : "0deg"
          }, transparent, ${color}22, transparent)`,
        }}
        animate={
          animated
            ? {
                x: isHorizontal ? ["-100%", "100%"] : 0,
                y: isHorizontal ? 0 : ["-100%", "100%"],
              }
            : {}
        }
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </div>
  );
};

export default SoundWaveSeparator; 