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
        {/* Block 1 */}
        <motion.div
          className="w-8 h-8 bg-blue-500"
          animate={{
            rotate: [-30, 30, -30], // Swinging pendulum motion
          }}
          transition={{
            repeat: Infinity,
            duration: 1.5,
            ease: "easeInOut",
          }}
        />
        {/* Block 2 */}
        <motion.div
          className="w-8 h-8 bg-green-500"
          animate={{
            rotate: [30, -30, 30], // Opposite direction swing
          }}
          transition={{
            repeat: Infinity,
            duration: 1.5,
            ease: "easeInOut",
          }}
        />
        {/* Block 3 */}
        <motion.div
          className="w-8 h-8 bg-red-500"
          animate={{
            rotate: [-30, 30, -30], // Same as block 1
          }}
          transition={{
            repeat: Infinity,
            duration: 1.5,
            ease: "easeInOut",
          }}
        />
      </div>
    </div>
  );
};

export default Loader;
