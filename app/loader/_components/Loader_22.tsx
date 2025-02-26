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
    <div className="flex justify-center items-center w-full h-screen bg-gray-900">
      <div className="relative flex items-center justify-center w-24 h-24">
        {/* Central Dot */}
        <div className="absolute w-4 h-4 bg-green-400 rounded-full"></div>

        {/* Inner Orbit */}
        <motion.div
          className="absolute w-16 h-16"
          animate={{
            rotate: 360,
          }}
          transition={{
            repeat: Infinity,
            duration: 3,
            ease: "linear",
          }}
        >
          <div className="w-4 h-4 bg-blue-400 rounded-full absolute top-0 left-1/2 transform -translate-x-1/2"></div>
        </motion.div>

        {/* Outer Orbit */}
        <motion.div
          className="absolute w-24 h-24"
          animate={{
            rotate: -360,
          }}
          transition={{
            repeat: Infinity,
            duration: 5,
            ease: "linear",
          }}
        >
          <div className="w-3 h-3 bg-pink-400 rounded-full absolute top-0 left-1/2 transform -translate-x-1/2"></div>
        </motion.div>
      </div>
    </div>
  );
};

export default Loader;
