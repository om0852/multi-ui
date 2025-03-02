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
        }, 1500); // Reset the copied state after 1.5 seconds
      })
      .catch((error) => {
        console.error("Failed to copy text: ", error);
      });
  };

  return (
    <motion.button
      onClick={handleCopy}
      className={`flex items-center justify-center p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-gray-100 dark:bg-gray-800 text-sm text-gray-600 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.3 }}
    >
      {/* Clipboard Icon */}
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className="w-5 h-5 mr-2"
        initial={{ opacity: 1 }}
        animate={{ opacity: copied ? 0 : 1 }}
        transition={{ duration: 0.3 }}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M12 8c4.418 0 8 3.582 8 8H4c0-4.418 3.582-8 8-8zm0 4a4 4 0 100 8 4 4 0 000-8z"
        />
      </motion.svg>

      {/* Feedback text */}
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: copied ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="text-sm font-medium"
      >
        Copied!
      </motion.span>

      {/* Default "Copy" text */}
      {!copied && (
        <motion.span
          initial={{ opacity: 1 }}
          animate={{ opacity: copied ? 0 : 1 }}
          transition={{ duration: 0.3 }}
          className="text-sm font-medium"
        >
          Copy
        </motion.span>
      )}
    </motion.button>
  );
};

export default ClipboardButton;
