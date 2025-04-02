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

export function Breadcrumb_12({ items, className = "" }: BreadcrumbProps) {
  return (
    <nav className={`flex items-center ${className}`}>
      <div className="relative bg-white shadow-lg rounded-full px-2 py-1">
        <div className="flex items-center space-x-1">
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
                    relative px-3 py-1 text-sm font-medium rounded-full
                    transition-colors duration-200
                    ${index === items.length - 1
                      ? "bg-gradient-to-r from-sky-500 to-indigo-500 text-white"
                      : "hover:bg-gray-100 text-gray-600"
                    }
                  `}
                >
                  {item.label}
                </Link>
              </motion.div>
              {index < items.length - 1 && (
                <motion.div
                  className="w-1 h-1 rounded-full bg-gray-300"
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
    { label: "Dashboard", href: "/" },
    { label: "Settings", href: "/settings" },
    { label: "Profile", href: "/profile" },
  ];

  return <Breadcrumb_12 items={items} />;
} 