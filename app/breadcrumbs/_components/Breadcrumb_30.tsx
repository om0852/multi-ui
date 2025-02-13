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

export function Breadcrumb_30({ items, className = "" }: BreadcrumbProps) {
  return (
    <nav className={`flex items-center ${className}`}>
      <div className="flex items-center bg-gradient-to-br from-green-400 to-cyan-400 p-1 rounded-xl">
        <div className="flex items-center bg-white/95 backdrop-blur-sm rounded-lg p-1">
          {items.map((item, index) => (
            <React.Fragment key={item.href}>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link 
                  href={item.href}
                  className={`
                    relative px-3 py-1.5 text-sm font-medium rounded-lg
                    ${index === items.length - 1
                      ? "bg-gradient-to-r from-green-400 to-cyan-400 text-white"
                      : "text-gray-600 hover:text-green-500"
                    }
                    transition-colors duration-200
                  `}
                >
                  <motion.span whileHover={{ scale: 1.05 }}>
                    {item.label}
                  </motion.span>
                </Link>
              </motion.div>
              {index < items.length - 1 && (
                <motion.svg
                  className="w-4 h-4 mx-2 text-green-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: index * 0.1 + 0.1 }}
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
        </div>
      </div>
    </nav>
  );
}

export function Component() {
  const items = [
    { label: "Store", href: "/store" },
    { label: "Garden", href: "/garden" },
    { label: "Tools", href: "/tools" },
  ];

  return <Breadcrumb_30 items={items} />;
} 