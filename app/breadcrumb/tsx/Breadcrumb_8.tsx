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

export function Breadcrumb_8({ items, className = "" }: BreadcrumbProps) {
  return (
    <nav className={`flex items-center ${className}`}>
      {items.map((item, index) => (
        <React.Fragment key={item.href}>
          <motion.div
            className="relative perspective-1000"
            initial={{ opacity: 0, rotateX: -90 }}
            animate={{ opacity: 1, rotateX: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            whileHover={{ scale: 1.05, y: -2 }}
          >
            <Link 
              href={item.href}
              className={`
                inline-block px-4 py-2 text-sm font-medium
                ${index === items.length - 1
                  ? "bg-indigo-500 text-white shadow-lg"
                  : "bg-white text-gray-600 hover:text-indigo-600"
                }
                rounded-md transform-gpu
              `}
            >
              {item.label}
            </Link>
            <motion.div
              className="absolute inset-0 bg-indigo-100 rounded-md -z-10"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1, y: 2 }}
            />
          </motion.div>
          {index < items.length - 1 && (
            <motion.div
              className="mx-2 text-gray-400"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: index * 0.1 + 0.2 }}
            >
              →
            </motion.div>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
}

export function Component() {
  const items = [
    { label: "Projects", href: "/projects" },
    { label: "Web Design", href: "/web-design" },
    { label: "Dashboard", href: "/dashboard" },
  ];

  return (
    <div className="space-y-4">
      <Breadcrumb_8 items={items} />
    </div>
  );
} 