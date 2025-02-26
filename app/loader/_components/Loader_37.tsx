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
      <motion.div
        className="flex items-center justify-center w-20 h-20"
        style={{ backgroundColor: "#1E3A8A", borderRadius: "10%" }}
        animate={{
          rotate: [0, 90, 180, 270, 360], // Full rotation
          borderRadius: ["10%", "50%", "10%", "50%", "10%"], // Morph square to circle and back
          scale: [1, 1.2, 1], // Pulse effect
        }}
        transition={{
          repeat: Infinity,
          duration: 3, // Smooth animation over 3 seconds
          ease: "easeInOut",
        }}
      >
        <motion.div
          className="w-10 h-10 bg-green-500"
          style={{ clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)" }}
          animate={{
            rotate: [0, -360], // Counter-rotation for the diamond
            scale: [1, 1.5, 1], // Pulse effect for the diamond
          }}
          transition={{
            repeat: Infinity,
            duration: 2, // Faster animation for contrast
            ease: "easeInOut",
          }}
        />
      </motion.div>
    </div>
  );
};

export default Loader;
