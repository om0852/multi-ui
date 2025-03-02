"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Loader = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="flex justify-center items-center w-full h-screen bg-gray-800">
      <div className="flex space-x-4">
        <motion.div
          className="w-2 h-12 bg-teal-500 rounded-full"
          animate={{
            y: [0, -20, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 1.2,
            ease: "easeInOut",
            repeatType: "loop",
            delay: 0.2,
          }}
        />
        <motion.div
          className="w-2 h-16 bg-orange-500 rounded-full"
          animate={{
            y: [0, -20, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 1.2,
            ease: "easeInOut",
            repeatType: "loop",
            delay: 0.4,
          }}
        />
        <motion.div
          className="w-2 h-20 bg-purple-500 rounded-full"
          animate={{
            y: [0, -20, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 1.2,
            ease: "easeInOut",
            repeatType: "loop",
            delay: 0.6,
          }}
        />
      </div>
    </div>
  );
};

export default Loader;
