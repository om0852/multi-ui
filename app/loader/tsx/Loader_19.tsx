"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Loader = () => {
  const [mounted, setMounted] = useState(false);

  // Ensure the component renders only on the client
  useEffect(() => {
    setMounted(true);
  }, []);

  // Prevent server-side rendering during hydration
  if (!mounted) return null;

  return (
    <div className="flex justify-center items-center w-full h-screen bg-gray-900">
      <div className="relative flex items-center justify-center">
        {/* Pulsing Ring */}
        <motion.div
          className="absolute w-24 h-24 border-4 border-blue-500 rounded-full opacity-50"
          animate={{
            scale: [1, 1.4],
            opacity: [0.5, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 1.5,
            ease: "easeInOut",
          }}
        />

        {/* Inner Ring */}
        <motion.div
          className="absolute w-16 h-16 border-4 border-purple-500 rounded-full"
          animate={{
            rotate: 360,
          }}
          transition={{
            repeat: Infinity,
            duration: 1.5,
            ease: "linear",
          }}
        />

        {/* Bouncing Dot */}
        <motion.div
          className="absolute w-6 h-6 bg-gradient-to-r from-pink-500 to-yellow-500 rounded-full"
          animate={{
            y: [0, -20, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 0.8,
            ease: "easeInOut",
          }}
        />
      </div>
    </div>
  );
};

export default Loader;
