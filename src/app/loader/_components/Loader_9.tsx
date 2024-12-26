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
      <div className="relative w-20 h-12">
        {/* Text animation */}
        <motion.span
          className="absolute top-0 left-0 text-lg text-purple-300 font-semibold tracking-wide"
          animate={{
            letterSpacing: ["1px", "2px", "1px"],
            x: ["0px", "26px", "32px", "0px", "0px"],
          }}
          transition={{
            repeat: Infinity, // Make sure it loops infinitely
            duration: 3.5,
            ease: "easeInOut",
          }}
        >
          loading
        </motion.span>

        {/* Loader ball animation */}
        <motion.div
          className="absolute bottom-0 left-0 bg-purple-500 rounded-full w-4 h-4"
          animate={{
            x: ["0px", "64px", "0px", "64px", "0px"],
            width: ["16px", "100%", "16px", "100%", "16px"],
          }}
          transition={{
            repeat: Infinity, // Ensure this also loops infinitely
            duration: 3.5,
            ease: "easeInOut",
          }}
        >
          {/* Inner loader animation */}
          <motion.div
            className="absolute top-0 left-0 w-full h-full bg-purple-200 rounded-full"
            animate={{
              width: ["16px", "80%", "100%", "80%", "16px"],
              x: ["0px", "0%", "0px", "15px", "0px"],
            }}
            transition={{
              repeat: Infinity, // Ensure this loops infinitely as well
              duration: 3.5,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Loader;
