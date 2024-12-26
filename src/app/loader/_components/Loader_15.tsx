"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

type LoaderProps = {}; // You can add props here if needed in the future

const Loader: React.FC<LoaderProps> = () => {
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
        {/* Rotating Circle 1 with Pulsing */}
        <motion.div
          className="absolute w-8 h-8 border-4 border-blue-500 rounded-full"
          animate={{
            rotate: 360,
            scale: [1, 1.2, 1], // Add scale pulsing effect
          }}
          transition={{
            repeat: Infinity,
            duration: 1.2,
            ease: "linear",
            repeatType: "loop",
          }}
        />
        {/* Rotating Circle 2 with Pulse and Delay */}
        <motion.div
          className="absolute w-8 h-8 border-4 border-green-500 rounded-full"
          animate={{
            rotate: -360,
            scale: [1, 1.2, 1], // Add scale pulsing effect
          }}
          transition={{
            repeat: Infinity,
            duration: 1.4,
            ease: "linear",
            repeatType: "loop",
          }}
        />
        {/* Rotating Circle 3 with Staggered Scaling */}
        <motion.div
          className="absolute w-8 h-8 border-4 border-red-500 rounded-full"
          animate={{
            rotate: 360,
            scale: [1, 0.8, 1], // Scale down and up to create more variation
          }}
          transition={{
            repeat: Infinity,
            duration: 1.6,
            ease: "linear",
            repeatType: "loop",
          }}
        />
        {/* Rotating Circle 4 with Bounce */}
        <motion.div
          className="absolute w-8 h-8 border-4 border-yellow-500 rounded-full"
          animate={{
            rotate: -360,
            y: ["0%", "-20%", "0%"], // Add vertical bounce effect
          }}
          transition={{
            repeat: Infinity,
            duration: 1.8,
            ease: "easeInOut",
            repeatType: "loop",
          }}
        />
      </div>
    </div>
  );
};

export default Loader;
