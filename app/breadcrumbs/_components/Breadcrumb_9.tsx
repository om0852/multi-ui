"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

type BreadcrumbItem = {
  label: string;
  href: string;
};

type BreadcrumbProps = {
  items: BreadcrumbItem[];
  className?: string;
};

export function Breadcrumb_9({ items, className = "" }: BreadcrumbProps) {
  return (
    <nav 
      className={`
        relative flex items-center bg-gradient-to-r from-purple-500 to-indigo-500
        p-1 rounded-lg ${className}
      `}
    >
      <div className="flex items-center space-x-1 bg-white rounded-md p-1">
        {items.map((item, index) => (
          <React.Fragment key={item.href}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
            >
              <Link 
                href={item.href}
                className={`
                  relative px-3 py-1 text-sm font-medium rounded-md
                  transition-colors duration-200
                  ${index === items.length - 1
                    ? "bg-gradient-to-r from-purple-500 to-indigo-500 text-white"
                    : "text-gray-600 hover:text-purple-600"
                  }
                `}
              >
                {item.label}
              </Link>
            </motion.div>
            {index < items.length - 1 && (
              <span className="text-gray-300">•</span>
            )}
          </React.Fragment>
        ))}
      </div>
      <motion.div
        className="absolute inset-0 rounded-lg"
        animate={{
          background: [
            "linear-gradient(45deg, #8b5cf6, #6366f1)",
            "linear-gradient(45deg, #6366f1, #8b5cf6)",
            "linear-gradient(45deg, #8b5cf6, #6366f1)",
          ],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{ zIndex: -1 }}
      />
    </nav>
  );
}

export function Component() {
  const items = [
    { label: "Gallery", href: "/gallery" },
    { label: "Albums", href: "/albums" },
    { label: "Photos", href: "/photos" },
  ];

  return (
    <div className="space-y-4">
      <Breadcrumb_9 items={items} />
    </div>
  );
} 