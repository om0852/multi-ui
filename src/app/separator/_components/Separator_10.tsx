"use client";
import React from "react";
import { motion } from "framer-motion";

const PulseEffectSeparator: React.FC = () => {
  return (
    <motion.div
      className="w-full h-2 bg-blue-500"
      animate={{ scaleX: [1, 1.5, 1] }}
      transition={{
        duration: 1,
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeInOut",
      }}
    />
  );
};

export default PulseEffectSeparator;
