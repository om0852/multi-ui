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

export function Breadcrumb_13({ items, className = "" }: BreadcrumbProps) {
  return (
    <nav className={`flex items-center ${className}`}>
      {items.map((item, index) => (
        <React.Fragment key={item.href}>
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
          >
            <Link 
              href={item.href}
              className={`
                group relative inline-flex items-center px-4 py-2 text-sm font-medium
                ${index === items.length - 1
                  ? "text-emerald-600"
                  : "text-gray-600"
                }
              `}
            >
              <span className="relative z-10">{item.label}</span>
              <motion.div
                className="absolute inset-0 rounded-md bg-emerald-50 opacity-0 -z-10"
                whileHover={{ opacity: 1, scale: 1.05 }}
                transition={{ duration: 0.2 }}
              />
              <motion.div
                className="absolute right-0 h-0.5 bg-emerald-500"
                initial={{ width: 0 }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.2 }}
              />
            </Link>
          </motion.div>
          {index < items.length - 1 && (
            <motion.div
              className="mx-2 text-gray-400 rotate-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.1 + 0.1 }}
            >
              /
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
    { label: "Tasks", href: "/tasks" },
    { label: "Details", href: "/details" },
  ];

  return <Breadcrumb_13 items={items} />;
} 