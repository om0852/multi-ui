"use client";
import React from "react";
import { motion } from "framer-motion";

const DiagonalZigZagSeparator: React.FC = () => {
  return (
    <motion.div
      className="relative w-full h-1"
      style={{
        backgroundImage: "linear-gradient(45deg, transparent 25%, #4ade80 25%, #4ade80 50%, transparent 50%, transparent 75%, #4ade80 75%, #4ade80)",
        backgroundSize: "20px 20px",
      }}
      animate={{ backgroundPosition: "100% 100%" }}
      transition={{ duration: 2, ease: "easeInOut", loop: Infinity }}
    />
  );
};

export default DiagonalZigZagSeparator;
