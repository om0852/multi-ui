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

export function Breadcrumb_28({ items, className = "" }: BreadcrumbProps) {
  return (
    <nav className={`flex items-center ${className}`}>
      <div className="flex items-center bg-gray-900/95 backdrop-blur-sm rounded-xl p-1.5">
        {items.map((item, index) => (
          <React.Fragment key={item.href}>
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Link 
                href={item.href}
                className={`
                  relative px-3 py-1.5 text-sm font-medium rounded-lg
                  ${index === items.length - 1
                    ? "bg-gradient-to-r from-cyan-400 to-blue-400 text-white"
                    : "text-gray-400 hover:text-white"
                  }
                  transition-colors duration-200
                `}
              >
                <motion.span
                  whileHover={{ scale: 1.05 }}
                  className="relative z-10"
                >
                  {item.label}
                </motion.span>
                {index !== items.length - 1 && (
                  <motion.div
                    className="absolute inset-0 bg-gray-800 rounded-lg"
                    initial={false}
                    whileHover={{ opacity: 1 }}
                    animate={{ opacity: 0 }}
                  />
                )}
              </Link>
            </motion.div>
            {index < items.length - 1 && (
              <motion.div
                className="mx-2 text-gray-600"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: index * 0.1 + 0.1 }}
              >
                ›
              </motion.div>
            )}
          </React.Fragment>
        ))}
      </div>
    </nav>
  );
}

export function Component() {
  const items = [
    { label: "Dashboard", href: "/" },
    { label: "Settings", href: "/settings" },
    { label: "Profile", href: "/profile" },
  ];

  return <Breadcrumb_28 items={items} />;
} 