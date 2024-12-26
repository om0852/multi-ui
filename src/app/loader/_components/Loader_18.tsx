"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

type LoaderProps = {}; // Add props if needed

const Loader: React.FC<LoaderProps> = () => {
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
        {/* Rotating Outer Circle */}
        <motion.div
          className="absolute w-20 h-20 border-4 border-t-transparent border-purple-500 rounded-full"
          animate={{
            rotate: 360,
          }}
          transition={{
            repeat: Infinity,
            duration: 1.5,
            ease: "linear",
          }}
        />
        {/* Rotating Inner Circle */}
        <motion.div
          className="absolute w-12 h-12 border-4 border-t-transparent border-blue-400 rounded-full"
          animate={{
            rotate: -360,
          }}
          transition={{
            repeat: Infinity,
            duration: 1.2,
            ease: "linear",
          }}
        />
        {/* Central Dot */}
        <div className="absolute w-4 h-4 bg-gradient-to-r from-pink-500 to-yellow-500 rounded-full" />
      </div>
    </div>
  );
};

export default Loader;
