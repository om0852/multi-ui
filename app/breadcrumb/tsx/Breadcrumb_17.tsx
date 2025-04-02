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

export function Breadcrumb_17({ items, className = "" }: BreadcrumbProps) {
  return (
    <nav className={`flex items-center ${className}`}>
      <div className="flex items-center bg-white rounded-lg shadow-lg p-1">
        {items.map((item, index) => (
          <React.Fragment key={item.href}>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="relative"
            >
              <Link 
                href={item.href}
                className={`
                  relative px-4 py-2 text-sm font-medium rounded-md
                  ${index === items.length - 1
                    ? "bg-rose-500 text-white"
                    : "text-gray-600 hover:text-rose-500"
                  }
                  transition-colors duration-200
                `}
              >
                <motion.span
                  initial={false}
                  whileHover={{ scale: 1.05 }}
                  className="relative z-10"
                >
                  {item.label}
                </motion.span>
                {index !== items.length - 1 && (
                  <motion.div
                    className="absolute inset-0 bg-rose-50 rounded-md"
                    initial={false}
                    whileHover={{ opacity: 1 }}
                    animate={{ opacity: 0 }}
                  />
                )}
              </Link>
            </motion.div>
            {index < items.length - 1 && (
              <motion.div
                className="mx-2 w-px h-4 bg-gray-200"
                initial={{ height: 0 }}
                animate={{ height: 16 }}
                transition={{ delay: index * 0.1 + 0.1 }}
              />
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
    { label: "Analytics", href: "/analytics" },
    { label: "Reports", href: "/reports" },
  ];

  return <Breadcrumb_17 items={items} />;
} 