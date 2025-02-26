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
      <motion.div
        className="relative w-16 h-16 rounded-full border-t-4 border-t-blue-500 border-gray-200"
        animate={{
          rotate: 360,
        }}
        transition={{
          repeat: Infinity,
          duration: 1.2,
          ease: "linear",
        }}
      >
        {/* Segment 1 */}
        <motion.div
          className="absolute top-0 left-0 w-4 h-4 bg-blue-500 rounded-full"
          animate={{
            opacity: [0, 1, 0],
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{
            repeat: Infinity,
            duration: 1.2,
            ease: "easeInOut",
            delay: 0.1,
          }}
        />
        {/* Segment 2 */}
        <motion.div
          className="absolute top-0 right-0 w-4 h-4 bg-blue-500 rounded-full"
          animate={{
            opacity: [0, 1, 0],
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{
            repeat: Infinity,
            duration: 1.2,
            ease: "easeInOut",
            delay: 0.3,
          }}
        />
        {/* Segment 3 */}
        <motion.div
          className="absolute bottom-0 right-0 w-4 h-4 bg-blue-500 rounded-full"
          animate={{
            opacity: [0, 1, 0],
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{
            repeat: Infinity,
            duration: 1.2,
            ease: "easeInOut",
            delay: 0.5,
          }}
        />
        {/* Segment 4 */}
        <motion.div
          className="absolute bottom-0 left-0 w-4 h-4 bg-blue-500 rounded-full"
          animate={{
            opacity: [0, 1, 0],
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{
            repeat: Infinity,
            duration: 1.2,
            ease: "easeInOut",
            delay: 0.7,
          }}
        />
      </motion.div>
    </div>
  );
};

export default Loader;
