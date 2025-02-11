"use client";

import React from "react";
import { motion } from "framer-motion";

const TriangleSquareLoader: React.FC = () => {
  return (
    <div className="flex justify-center items-center w-full h-screen bg-gray-900">
      <motion.div
        className="relative w-20 h-20"
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          duration: 2,
          ease: "linear",
        }}
      >
        {[...Array(4)].map((_, index) => (
          <motion.div
            key={index}
            className="absolute w-10 h-10 bg-blue-500"
            style={{
              clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)", // Triangle shape
              transformOrigin: "50% 50%",
            }}
            animate={{
              rotate: [0, 360],
            }}
            transition={{
              repeat: Infinity,
              duration: 2,
              ease: "easeInOut",
              delay: index * 0.5,
            }}
            initial={{
              rotate: index * 90,
              x: index % 2 === 0 ? "-50%" : "50%",
              y: index < 2 ? "-50%" : "50%",
            }}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default TriangleSquareLoader;
