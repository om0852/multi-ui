"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Loader = () => {
  const [mounted, setMounted] = useState(false);

  // Ensure the component only renders on the client after mount
  useEffect(() => {
    setMounted(true);
  }, []);

  // Prevent rendering on server-side during hydration
  if (!mounted) return null;

  return (
    <div className="flex justify-center items-center w-full h-screen">
      <div className="flex space-x-3">
        {/* Dot 1 */}
        <motion.div
          className="w-6 h-6 bg-blue-500 rounded-full"
          animate={{
            y: [0, -20, 0], // Bouncing effect by moving up and down
          }}
          transition={{
            repeat: Infinity,
            duration: 0.6,
            ease: "easeInOut",
            delay: 0.2, // Delay for staggered effect
          }}
        />
        {/* Dot 2 */}
        <motion.div
          className="w-6 h-6 bg-blue-500 rounded-full"
          animate={{
            y: [0, -20, 0], // Bouncing effect by moving up and down
          }}
          transition={{
            repeat: Infinity,
            duration: 0.6,
            ease: "easeInOut",
            delay: 0.4, // Delay for staggered effect
          }}
        />
        {/* Dot 3 */}
        <motion.div
          className="w-6 h-6 bg-blue-500 rounded-full"
          animate={{
            y: [0, -20, 0], // Bouncing effect by moving up and down
          }}
          transition={{
            repeat: Infinity,
            duration: 0.6,
            ease: "easeInOut",
            delay: 0.6, // Delay for staggered effect
          }}
        />
      </div>
    </div>
  );
};

export default Loader;
