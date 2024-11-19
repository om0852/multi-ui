import React from "react";
import { motion } from "framer-motion";

type ToastProps = {
  message: string;
  close: () => void;
};

const Toast_1: React.FC<ToastProps> = ({ message, close }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 300 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 300 }}
      transition={{ type: "spring", stiffness: 100, damping: 15 }}
      className="flex items-center p-4 bg-blue-500 text-white rounded shadow-md border-l-4 border-blue-700"
    >
      <span className="flex-1">{message}</span>
      <button
        onClick={close}
        className="ml-4 text-lg font-bold focus:outline-none hover:opacity-80"
        aria-label="Close Toast"
      >
        ×
      </button>
    </motion.div>
  );
};

export default Toast_1;
