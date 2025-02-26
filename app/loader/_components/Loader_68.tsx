"use client";

import React from "react";
import { motion } from "framer-motion";

const Loader: React.FC = () => {
  return (
    <div className="flex justify-center items-center w-full h-screen bg-gray-900">
      <motion.div
        className="flex space-x-2"
        animate={{
          rotate: [0, 0, 180, 180], // Similar to `@keyframes l2-0`
        }}
        transition={{
          repeat: Infinity,
          duration: 1,
          ease: "easeInOut",
        }}
      >
        {Array.from({ length: 2 }).map((_, index) => (
          <motion.div
            key={index}
            className="w-6 h-6 rounded-full border-2 border-white"
            style={{ transformOrigin: "center" }}
            animate={{
              x: index === 0 ? [0, 10, 0] : [0, -10, 0], // Movement similar to `@keyframes l2-1`
            }}
            transition={{
              repeat: Infinity,
              duration: 1,
              delay: index * 0.1,
              ease: "easeInOut",
            }}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default Loader;
