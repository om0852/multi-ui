import React from "react";
import { motion } from "framer-motion";

interface LoaderProps {
  loadingName?: string;
}

const Loader: React.FC<LoaderProps> = ({ loadingName = "Loading" }) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
      {/* Waving Text */}
      <div className="relative text-3xl font-bold uppercase tracking-wide">
        {loadingName.split("").map((char, index) => (
          <motion.span
            key={index}
            className="inline-block"
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              delay: index * 0.1,
            }}
          >
            {char}
          </motion.span>
        ))}
        {/* Sliding Underline */}
        <motion.div
          className="absolute left-0 -bottom-2 h-1 bg-blue-500"
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
    </div>
  );
};

export default Loader;
