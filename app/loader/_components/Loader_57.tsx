"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const LoaderThirty: React.FC = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="flex justify-center items-center w-full h-screen bg-gray-900">
      <motion.div
        className="relative w-24 h-24 flex justify-center items-center"
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          repeat: Infinity,
          duration: 2.5,
          ease: "easeInOut",
        }}
      >
        <motion.div
          className="absolute border-4 border-blue-500 rounded-full"
          style={{ width: 80, height: 80 }}
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            repeat: Infinity,
            duration: 1.5,
            delay: 0.2,
          }}
        />
        <motion.div
          className="absolute border-4 border-red-500 rounded-full"
          style={{ width: 60, height: 60 }}
          animate={{
            scale: [1, 1.5, 1],
          }}
          transition={{
            repeat: Infinity,
            duration: 1.8,
            delay: 0.4,
          }}
        />
      </motion.div>
    </div>
  );
};

export default LoaderThirty;
