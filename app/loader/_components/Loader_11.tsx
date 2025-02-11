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
      <div className="flex space-x-4">
        {/* Circle 1 */}
        <motion.div
          className="w-6 h-6 bg-purple-500 rounded-full"
          animate={{
            scale: [1, 1.5, 1], // Pulsing effect by scaling the circle
          }}
          transition={{
            repeat: Infinity,
            duration: 1,
            ease: "easeInOut",
            delay: 0.2, // Delay for staggered effect
          }}
        />
        {/* Circle 2 */}
        <motion.div
          className="w-6 h-6 bg-purple-500 rounded-full"
          animate={{
            scale: [1, 1.5, 1], // Pulsing effect by scaling the circle
          }}
          transition={{
            repeat: Infinity,
            duration: 1,
            ease: "easeInOut",
            delay: 0.4, // Delay for staggered effect
          }}
        />
        {/* Circle 3 */}
        <motion.div
          className="w-6 h-6 bg-purple-500 rounded-full"
          animate={{
            scale: [1, 1.5, 1], // Pulsing effect by scaling the circle
          }}
          transition={{
            repeat: Infinity,
            duration: 1,
            ease: "easeInOut",
            delay: 0.6, // Delay for staggered effect
          }}
        />
      </div>
    </div>
  );
};

export default Loader;
