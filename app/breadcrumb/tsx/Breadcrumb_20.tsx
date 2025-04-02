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

export function Breadcrumb_20({ items, className = "" }: BreadcrumbProps) {
  return (
    <nav className={`flex items-center ${className}`}>
      <div className="flex items-center bg-gradient-to-br from-amber-500 via-orange-500 to-red-500 p-1 rounded-lg">
        <div className="flex items-center space-x-1 bg-white/95 backdrop-blur-sm rounded-md p-1">
          {items.map((item, index) => (
            <React.Fragment key={item.href}>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link 
                  href={item.href}
                  className={`
                    relative px-3 py-1.5 text-sm font-medium rounded-md
                    ${index === items.length - 1
                      ? "bg-gradient-to-r from-amber-500 to-red-500 text-white"
                      : "text-gray-700 hover:text-amber-600"
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
                  className="w-4 h-4 text-amber-500"
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
                    d="M13 5l7 7-7 7"
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
    { label: "Menu", href: "/menu" },
    { label: "Categories", href: "/categories" },
    { label: "Items", href: "/items" },
  ];

  return <Breadcrumb_20 items={items} />;
} 