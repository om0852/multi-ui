"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import dynamic from "next/dynamic";

const QRCode = dynamic(() => import("qrcode.react"), { ssr: false });

type ShareProps = {
  title?: string;
  url: string;
  className?: string;
};

const shareOptions = [
  {
    name: "Copy Link",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
    color: "bg-blue-500",
    action: "copy",
  },
  {
    name: "Share",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
      </svg>
    ),
    color: "bg-green-500",
    action: "share",
  },
  {
    name: "QR Code",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
      </svg>
    ),
    color: "bg-purple-500",
    action: "qr",
  },
];

export function Share_22({
  title = "Share this content",
  url,
  className = "",
}: ShareProps) {
  const [isOpen, setIsOpen] = React.useState(false);
  const [activeOption, setActiveOption] = React.useState<string | null>(null);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      const copyOption = shareOptions.find(opt => opt.action === "copy");
      if (copyOption) {
        copyOption.name = "Copied!";
        setTimeout(() => {
          copyOption.name = "Copy Link";
        }, 2000);
      }
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
      } catch (err) {
        console.error("Failed to share:", err);
      }
    } else {
      handleCopy();
    }
  };

  const handleAction = (action: string) => {
    switch (action) {
      case "copy":
        handleCopy();
        break;
      case "share":
        handleShare();
        break;
      case "qr":
        setActiveOption(action);
        break;
      default:
        break;
    }
  };

  return (
    <div className={`fixed bottom-6 right-6 ${className}`}>
      <AnimatePresence>
        {activeOption === "qr" && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="absolute bottom-20 right-0 p-4 bg-white dark:bg-gray-800 rounded-2xl shadow-xl"
          >
            <div className="flex flex-col items-center">
              <QRCode
                value={url}
                size={200}
                level="H"
                includeMargin
                className="rounded-xl"
              />
              <button
                onClick={() => setActiveOption(null)}
                className="mt-4 px-4 py-2 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
              >
                Close
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="absolute bottom-20 right-0 flex flex-col items-end space-y-4"
          >
            {shareOptions.map((option, index) => (
              <motion.button
                key={option.name}
                initial={{ opacity: 0, x: 20 }}
                animate={{ 
                  opacity: 1, 
                  x: 0,
                  transition: { delay: index * 0.1 }
                }}
                exit={{ 
                  opacity: 0, 
                  x: 20,
                  transition: { delay: (shareOptions.length - index - 1) * 0.1 }
                }}
                onClick={() => handleAction(option.action)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-xl text-white ${option.color}`}
              >
                <span className="text-sm font-medium">{option.name}</span>
                {option.icon}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white flex items-center justify-center shadow-lg"
      >
        <svg 
          className={`w-6 h-6 transform transition-transform ${isOpen ? "rotate-45" : ""}`} 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
        </svg>
      </motion.button>
    </div>
  );
}

export function Component() {
  return (
    <div className="min-h-[400px] relative">
      <Share_22 url="https://example.com/share-this" />
    </div>
  );
} 