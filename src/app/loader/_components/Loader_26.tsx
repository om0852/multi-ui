"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

type LoaderProps = {};

const Loader: React.FC<LoaderProps> = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="flex justify-center items-center w-full h-screen bg-gray-800">
      <motion.div
        className="relative flex space-x-4"
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          duration: 3,
          ease: "linear",
        }}
      >
        <motion.div
          className="w-8 h-8 bg-blue-400 rounded-full"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [1, 0.5, 1],
          }}
          transition={{
            repeat: Infinity,
            duration: 1,
            repeatType: "loop",
            delay: 0,
          }}
        />
        <motion.div
          className="w-8 h-8 bg-green-400 rounded-full"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [1, 0.5, 1],
          }}
          transition={{
            repeat: Infinity,
            duration: 1,
            repeatType: "loop",
            delay: 0.5,
          }}
        />
        <motion.div
          className="w-8 h-8 bg-purple-400 rounded-full"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [1, 0.5, 1],
          }}
          transition={{
            repeat: Infinity,
            duration: 1,
            repeatType: "loop",
            delay: 1,
          }}
        />
        <motion.div
          className="w-8 h-8 bg-yellow-400 rounded-full"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [1, 0.5, 1],
          }}
          transition={{
            repeat: Infinity,
            duration: 1,
            repeatType: "loop",
            delay: 1.5,
          }}
        />
      </motion.div>
    </div>
  );
};

export default Loader;
