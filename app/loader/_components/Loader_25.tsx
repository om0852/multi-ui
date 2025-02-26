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
      <motion.div
        className="relative w-24 h-24"
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          duration: 2,
          ease: "linear",
        }}
      >
        {/* Rotating arcs */}
        <motion.div
          className="absolute top-0 left-0 w-1/2 h-1/2 bg-blue-400 rounded-full origin-bottom-right"
          animate={{ scale: [1, 1.2, 1], opacity: [1, 0.6, 1] }}
          transition={{
            repeat: Infinity,
            duration: 1,
            repeatType: "loop",
            delay: 0,
          }}
        />
        <motion.div
          className="absolute top-0 left-0 w-1/2 h-1/2 bg-green-400 rounded-full origin-bottom-left"
          animate={{ scale: [1, 1.2, 1], opacity: [1, 0.6, 1] }}
          transition={{
            repeat: Infinity,
            duration: 1,
            repeatType: "loop",
            delay: 0.5,
          }}
        />
        <motion.div
          className="absolute top-0 left-0 w-1/2 h-1/2 bg-purple-400 rounded-full origin-top-left"
          animate={{ scale: [1, 1.2, 1], opacity: [1, 0.6, 1] }}
          transition={{
            repeat: Infinity,
            duration: 1,
            repeatType: "loop",
            delay: 1,
          }}
        />
        <motion.div
          className="absolute top-0 left-0 w-1/2 h-1/2 bg-yellow-400 rounded-full origin-top-right"
          animate={{ scale: [1, 1.2, 1], opacity: [1, 0.6, 1] }}
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
