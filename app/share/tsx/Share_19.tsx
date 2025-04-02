"use client";

import React from "react";
import { motion } from "framer-motion";

type ShareProps = {
  title?: string;
  url: string;
  stats?: {
    shares: number;
    likes: number;
    comments: number;
  };
  onShare?: () => void;
  onLike?: () => void;
  onClose?: () => void;
  className?: string;
};

export default function Share_19({
  title = "Share this content",
  url,
  stats = { shares: 0, likes: 0, comments: 0 },
  onShare,
  onLike,
  onClose,
  className = "",
}: ShareProps) {
  const [copied, setCopied] = React.useState(false);
  const [liked, setLiked] = React.useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title,
          url,
        });
        onShare?.();
      } catch (err) {
        console.error("Failed to share:", err);
      }
    } else {
      handleCopy();
    }
  };

  const handleLike = () => {
    setLiked(!liked);
    onLike?.();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      className={`bg-white dark:bg-gray-800 rounded-2xl shadow-xl ${className}`}
    >
      <div className="p-6">
        <div className="flex items-start justify-between">
          <motion.h3
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-lg font-semibold text-gray-900 dark:text-white"
          >
            {title}
          </motion.h3>
          {onClose && (
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="text-gray-400 hover:text-gray-500 dark:text-gray-500 dark:hover:text-gray-400"
              onClick={onClose}
            >
              <span className="sr-only">Close</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </motion.button>
          )}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mt-4 flex justify-between items-center"
        >
          <div className="flex space-x-6">
            <div className="flex items-center">
              <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                {stats.shares} shares
              </span>
            </div>
            <div className="flex items-center">
              <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                {stats.likes} likes
              </span>
            </div>
            <div className="flex items-center">
              <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                {stats.comments} comments
              </span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-6 grid grid-cols-3 gap-3"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center justify-center px-4 py-3 rounded-xl text-white bg-gradient-to-r from-blue-500 to-blue-600"
            onClick={handleCopy}
          >
            {copied ? (
              <motion.span
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                Copied!
              </motion.span>
            ) : (
              <>
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                Copy
              </>
            )}
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center justify-center px-4 py-3 rounded-xl text-white bg-gradient-to-r from-green-500 to-green-600"
            onClick={handleShare}
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
            </svg>
            Share
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`flex items-center justify-center px-4 py-3 rounded-xl text-white ${
              liked
                ? "bg-gradient-to-r from-pink-500 to-red-500"
                : "bg-gradient-to-r from-gray-500 to-gray-600"
            }`}
            onClick={handleLike}
          >
            <svg
              className={`w-5 h-5 mr-2 transition-transform ${liked ? "scale-110" : ""}`}
              fill={liked ? "currentColor" : "none"}
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
            {liked ? "Liked" : "Like"}
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
}

export function Component() {
  return (
    <div className="p-4">
      <Share_19
        url="https://example.com/share-this"
        stats={{
          shares: 128,
          likes: 456,
          comments: 89,
        }}
        onClose={() => console.log("closed")}
      />
    </div>
  );
} 