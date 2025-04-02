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
      {/* Bat */}
      <motion.div
        className="absolute bg-gray-600 w-32 h-6 rounded-full"
        animate={{
          x: [0, 120, 0], // Bat moves left to right
        }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: 1.5,
          ease: "easeInOut",
        }}
      />
      {/* Ball */}
      <motion.div
        className="absolute bg-white w-6 h-6 rounded-full"
        animate={{
          y: [0, -40, 0], // Ball moves up and down
          x: [120, 160, 120], // Ball moves horizontally as bat swings
        }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: 1.5,
          ease: "easeInOut",
        }}
      />
    </div>
  );
};

export default Loader;
