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

export function Breadcrumb_15({ items, className = "" }: BreadcrumbProps) {
  return (
    <nav className={`flex items-center ${className}`}>
      <motion.div
        className="flex items-center space-x-2 bg-white rounded-xl shadow-lg px-4 py-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {items.map((item, index) => (
          <React.Fragment key={item.href}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                href={item.href}
                className={`
                  relative px-3 py-1 text-sm font-medium rounded-lg
                  ${index === items.length - 1
                    ? "bg-violet-500 text-white"
                    : "text-gray-600 hover:bg-violet-50"
                  }
                  transition-colors duration-200
                `}
              >
                <span className="relative z-10">{item.label}</span>
                {index !== items.length - 1 && (
                  <motion.div
                    className="absolute inset-0 bg-violet-50 rounded-lg"
                    initial={false}
                    whileHover={{ opacity: 1 }}
                    animate={{ opacity: 0 }}
                  />
                )}
              </Link>
            </motion.div>
            {index < items.length - 1 && (
              <motion.svg
                className="w-4 h-4 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </motion.svg>
            )}
          </React.Fragment>
        ))}
      </motion.div>
    </nav>
  );
}

export function Component() {
  const items = [
    { label: "Account", href: "/account" },
    { label: "Settings", href: "/settings" },
    { label: "Privacy", href: "/privacy" },
  ];

  return <Breadcrumb_15 items={items} />;
} 