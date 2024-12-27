import React from "react";
import { motion } from "framer-motion";

interface LoaderProps {
  loadingName?: string;
}

const Loader: React.FC<LoaderProps> = ({ loadingName = "Loading" }) => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-900 text-white">
      <motion.div
        className="text-5xl font-bold uppercase"
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        {loadingName}
      </motion.div>
    </div>
  );
};

export default Loader;
