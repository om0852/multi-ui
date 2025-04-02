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
      <div className="relative w-32 h-32">
        {/* First rotating circle */}
        <motion.div
          className="absolute w-8 h-8 bg-blue-500 rounded-full"
          animate={{
            rotate: 360,
            scale: [1, 1.5, 1], // Pulse scale effect
          }}
          transition={{
            repeat: Infinity,
            duration: 1.5,
            ease: "easeInOut",
            repeatType: "loop",
          }}
        />
        {/* Second rotating circle with staggered rotation */}
        <motion.div
          className="absolute w-8 h-8 bg-green-500 rounded-full"
          animate={{
            rotate: -360,
            scale: [1, 1.5, 1], // Pulse scale effect
          }}
          transition={{
            repeat: Infinity,
            duration: 1.8,
            ease: "easeInOut",
            repeatType: "loop",
          }}
        />
        {/* Third circle with expanding and contracting size */}
        <motion.div
          className="absolute w-8 h-8 bg-red-500 rounded-full"
          animate={{
            scale: [1, 1.8, 1], // Expanding and contracting effect
            opacity: [1, 0.5, 1], // Fading in and out
          }}
          transition={{
            repeat: Infinity,
            duration: 2,
            ease: "easeInOut",
            repeatType: "loop",
          }}
        />
        {/* Fourth rotating circle with bouncing effect */}
        <motion.div
          className="absolute w-8 h-8 bg-yellow-500 rounded-full"
          animate={{
            rotate: 360,
            y: ["0%", "-20%", "0%"], // Vertical bounce effect
          }}
          transition={{
            repeat: Infinity,
            duration: 1.6,
            ease: "easeInOut",
            repeatType: "loop",
          }}
        />
      </div>
    </div>
  );
};

export default Loader;
