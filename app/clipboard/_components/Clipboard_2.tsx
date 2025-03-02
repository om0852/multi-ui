"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

interface ClipboardButtonProps {
  text: string; // The text to be copied to the clipboard
  className?: string; // Custom class for styling
}

const ClipboardButton: React.FC<ClipboardButtonProps> = ({ text, className = "" }) => {
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
    <motion.button
      onClick={handleCopy}
      className={`relative p-4 rounded-lg transition-all ${className}`}
      whileHover={{
        scale: 1.1,
        rotate: 5,
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
      }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.3 }}
    >
      {/* Clipboard Icon */}
      <motion.span
        className="absolute inset-0 flex justify-center items-center bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg transition-all"
        initial={{ opacity: 0 }}
        animate={{ opacity: copied ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <span className="text-sm">{copied ? "Copied!" : "Copy"}</span>
      </motion.span>

      {/* Default Text */}
      {!copied && (
        <motion.span
          className="absolute inset-0 flex justify-center items-center text-white font-medium"
          initial={{ opacity: 1 }}
          animate={{ opacity: copied ? 0 : 1 }}
          transition={{ duration: 0.3 }}
        >
          Copy
        </motion.span>
      )}
    </motion.button>
  );
};

export default ClipboardButton;
