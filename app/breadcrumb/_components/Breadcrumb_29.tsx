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

export function Breadcrumb_29({ items, className = "" }: BreadcrumbProps) {
  return (
    <nav className={`flex items-center ${className}`}>
      <div className="flex items-center bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-0.5 rounded-lg">
        <div className="flex items-center bg-black rounded-md p-1">
          {items.map((item, index) => (
            <React.Fragment key={item.href}>
              <motion.div
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link 
                  href={item.href}
                  className={`
                    relative px-3 py-1.5 text-sm font-medium rounded-md
                    ${index === items.length - 1
                      ? "bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white"
                      : "text-gray-400 hover:text-white"
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
                <motion.div
                  className="mx-2 w-1 h-1 rounded-full bg-gray-800"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: index * 0.1 + 0.1 }}
                />
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
    { label: "Gallery", href: "/gallery" },
    { label: "Photos", href: "/photos" },
    { label: "Nature", href: "/nature" },
  ];

  return <Breadcrumb_29 items={items} />;
} 