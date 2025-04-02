import React from "react";
import { motion } from "framer-motion";

interface LoaderProps {
  loadingName?: string;
}

const Loader: React.FC<LoaderProps> = ({ loadingName = "Loading" }) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
      <div className="relative text-4xl font-bold uppercase">
        {loadingName.split("").map((char, index) => (
          <span key={index} className="relative inline-block">
            {char}
            <motion.div
              className="absolute left-0 -bottom-1 h-1 bg-blue-500"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                repeat: Infinity,
                repeatDelay: loadingName.length * 0.1,
                ease: "easeInOut",
              }}
            />
          </span>
        ))}
      </div>
    </div>
  );
};

export default Loader;
