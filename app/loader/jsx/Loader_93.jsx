"use client";

import React from "react";
import { motion } from "framer-motion";

const Loader = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-900 text-white">
      <div className="relative w-32 h-32">
        {/* First Half Circle */}
        <motion.div
          className="absolute w-16 h-16 border-8 border-t-8 border-red-500 rounded-full"
          style={{
            clipPath: "polygon(50% 50%, 0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          }}
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
            opacity: [0.5, 1, 0.5],
            x: [0, 20, 0],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatDelay: 0.5,
            ease: "easeInOut",
            times: [0, 0.5, 1],
          }}
        />

        {/* Second Half Circle */}
        <motion.div
          className="absolute w-16 h-16 border-8 border-t-8 border-blue-500 rounded-full"
          style={{
            clipPath: "polygon(50% 50%, 0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          }}
          animate={{
            rotate: [-360, 0],
            scale: [1, 1.1, 1],
            opacity: [0, 1, 0],
            x: [0, -20, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatDelay: 0.5,
            ease: "easeInOut",
            times: [0, 0.5, 1],
          }}
        />

        {/* Third Half Circle */}
        <motion.div
          className="absolute w-16 h-16 border-8 border-t-8 border-yellow-500 rounded-full"
          style={{
            clipPath: "polygon(50% 50%, 0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          }}
          animate={{
            rotate: [0, -360],
            scale: [1, 1.3, 1],
            opacity: [1, 0, 1],
            x: [0, 10, 0],
            y: [0, 10, 0],
          }}
          transition={{
            duration: 3.2,
            repeat: Infinity,
            repeatDelay: 0.5,
            ease: "easeInOut",
            times: [0, 0.5, 1],
          }}
        />

        {/* Fourth Half Circle */}
        <motion.div
          className="absolute w-16 h-16 border-8 border-t-8 border-green-500 rounded-full"
          style={{
            clipPath: "polygon(50% 50%, 0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          }}
          animate={{
            rotate: [360, 0],
            scale: [1, 1.4, 1],
            opacity: [0.5, 1, 0.5],
            x: [0, 15, 0],
            y: [0, 15, 0],
          }}
          transition={{
            duration: 2.8,
            repeat: Infinity,
            repeatDelay: 0.5,
            ease: "easeInOut",
            times: [0, 0.5, 1],
          }}
        />
      </div>
    </div>
  );
};

export default Loader; 