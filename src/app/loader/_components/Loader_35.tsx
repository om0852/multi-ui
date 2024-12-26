"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

type LoaderProps = {};

const Loader: React.FC<LoaderProps> = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="flex justify-center items-center w-full h-screen bg-gray-800">
      {/* Circle 1 - Red */}
      <motion.div
        className="w-12 h-12 rounded-full mx-2"
        style={{ backgroundColor: "#EF4444" }}
        animate={{
          y: [0, -40, 0], // Bounce up and down
        }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: 1,
          delay: 0, // No delay for this circle
          ease: "easeInOut",
        }}
      />

      {/* Circle 2 - Blue */}
      <motion.div
        className="w-12 h-12 rounded-full mx-2"
        style={{ backgroundColor: "#3B82F6" }}
        animate={{
          y: [0, -40, 0], // Bounce up and down
        }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: 1,
          delay: 0.2, // Slight delay for wave effect
          ease: "easeInOut",
        }}
      />

      {/* Circle 3 - Green */}
      <motion.div
        className="w-12 h-12 rounded-full mx-2"
        style={{ backgroundColor: "#22C55E" }}
        animate={{
          y: [0, -40, 0], // Bounce up and down
        }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: 1,
          delay: 0.4, // Slight delay for wave effect
          ease: "easeInOut",
        }}
      />

      {/* Circle 4 - Yellow */}
      <motion.div
        className="w-12 h-12 rounded-full mx-2"
        style={{ backgroundColor: "#FACC15" }}
        animate={{
          y: [0, -40, 0], // Bounce up and down
        }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: 1,
          delay: 0.6, // Slight delay for wave effect
          ease: "easeInOut",
        }}
      />

      {/* Circle 5 - Purple */}
      <motion.div
        className="w-12 h-12 rounded-full mx-2"
        style={{ backgroundColor: "#A855F7" }}
        animate={{
          y: [0, -40, 0], // Bounce up and down
        }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: 1,
          delay: 0.8, // Slight delay for wave effect
          ease: "easeInOut",
        }}
      />
    </div>
  );
};

export default Loader;
