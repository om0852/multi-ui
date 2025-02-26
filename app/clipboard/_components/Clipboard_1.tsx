"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

interface ClipboardProps {
  text: string; // The text to be copied to the clipboard
  className?: string; // Custom class for the container
}

const Clipboard: React.FC<ClipboardProps> = ({ text, className = "" }) => {
  const [copied, setCopied] = useState(false);

  // Function to copy text to clipboard
  const handleCopy = () => {
    navigator.clipboard.writeText(text)
      .then(() => {
        setCopied(true);
        setTimeout(() => {
          setCopied(false);
        }, 2000); // Reset the copied state after 2 seconds
      })
      .catch((error) => {
        console.error("Failed to copy text: ", error);
      });
  };

  return (
    <div className={`flex items-center space-x-4 ${className}`}>
      {/* Text display */}
      <motion.div
        className="text-lg font-medium text-gray-800 dark:text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        {text}
      </motion.div>

      {/* Copy Button */}
      <motion.button
        onClick={handleCopy}
        className="p-2 rounded bg-blue-500 text-white hover:bg-blue-600 focus:outline-none"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.2 }}
      >
        {copied ? (
          <span className="text-sm">Copied!</span>
        ) : (
          <span className="text-sm">Copy</span>
        )}
      </motion.button>
    </div>
  );
};

export default Clipboard;
