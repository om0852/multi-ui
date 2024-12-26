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
      <div className="relative w-24 h-24">
        {/* Outer ring spinning */}
        <motion.div
          className="absolute border-4 border-t-blue-500 rounded-full w-24 h-24"
          animate={{
            rotate: 360,
          }}
          transition={{
            repeat: Infinity,
            duration: 2,
            ease: "linear",
          }}
        />
        {/* Inner rotating circle with bounce */}
        <motion.div
          className="absolute w-8 h-8 bg-red-500 rounded-full top-8 left-8"
          animate={{
            rotate: 360,
            y: ["0%", "-30%", "0%"], // Vertical bounce effect
          }}
          transition={{
            repeat: Infinity,
            duration: 1.2,
            ease: "easeInOut",
          }}
        />
        {/* Circle expanding and contracting */}
        <motion.div
          className="absolute w-8 h-8 bg-yellow-500 rounded-full top-8 left-8"
          animate={{
            scale: [1, 1.5, 1], // Expand and contract effect
            opacity: [1, 0.3, 1], // Fading in and out
          }}
          transition={{
            repeat: Infinity,
            duration: 1.5,
            ease: "easeInOut",
          }}
        />
        {/* Rotating square */}
        <motion.div
          className="absolute w-8 h-8 bg-green-500 top-8 left-8"
          animate={{
            rotate: 360,
          }}
          transition={{
            repeat: Infinity,
            duration: 2.5,
            ease: "linear",
          }}
        />
      </div>
    </div>
  );
};

export default Loader;
