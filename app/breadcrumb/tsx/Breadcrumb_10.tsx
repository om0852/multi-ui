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

export function Breadcrumb_10({ items, className = "" }: BreadcrumbProps) {
  return (
    <nav className={`flex items-center ${className}`}>
      {items.map((item, index) => (
        <React.Fragment key={item.href}>
          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -4 }}
          >
            <Link 
              href={item.href}
              className={`
                relative inline-flex items-center px-4 py-2 text-sm font-medium
                bg-white rounded-lg shadow-lg
                ${index === items.length - 1
                  ? "text-indigo-600"
                  : "text-gray-600 hover:text-indigo-600"
                }
              `}
            >
              {item.label}
              <motion.div
                className="absolute inset-0 rounded-lg bg-indigo-50"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.2 }}
                style={{ zIndex: -1 }}
              />
              <motion.div
                className="absolute -inset-1 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 opacity-20"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 0.2 }}
                transition={{ duration: 0.2 }}
                style={{ zIndex: -2, filter: "blur(8px)" }}
              />
            </Link>
          </motion.div>
          {index < items.length - 1 && (
            <svg
              className="w-5 h-5 mx-3 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 5l7 7-7 7"
              />
            </svg>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
}

export function Component() {
  const items = [
    { label: "Settings", href: "/settings" },
    { label: "Profile", href: "/profile" },
    { label: "Security", href: "/security" },
  ];

  return (
    <div className="space-y-4">
      <Breadcrumb_10 items={items} />
    </div>
  );
} 