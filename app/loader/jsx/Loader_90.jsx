"use client";

import React from "react";
import { motion } from "framer-motion";

const Loader = ({ loadingName = "Loading" }) => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-900 text-white">
      <div className="relative text-5xl font-bold uppercase">
        {loadingName.split("").map((char, index) => (
          <motion.span
            key={index}
            className="relative inline-block overflow-hidden"
          >
            <motion.span
              className="inline-block"
              initial={{ y: "100%" }}
              animate={{ y: "0%" }}
              transition={{
                duration: 0.5,
                delay: index * 0.2,
                repeat: Infinity,
                repeatDelay: 0.4,
                type: "spring",
                stiffness: 100,
              }}
            >
              {char}
            </motion.span>
          </motion.span>
        ))}
      </div>
    </div>
  );
};

export default Loader; 