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

export function Breadcrumb_26({ items, className = "" }: BreadcrumbProps) {
  return (
    <nav className={`flex items-center ${className}`}>
      <div className="flex items-center bg-gradient-to-r from-purple-800 to-indigo-900 p-1.5 rounded-2xl">
        <div className="flex items-center space-x-1">
          {items.map((item, index) => (
            <React.Fragment key={item.href}>
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link 
                  href={item.href}
                  className={`
                    relative px-4 py-2 text-sm font-medium rounded-xl
                    ${index === items.length - 1
                      ? "bg-white text-purple-900"
                      : "text-purple-200 hover:text-white"
                    }
                    transition-all duration-200
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
                      className="absolute inset-0 bg-white/10 rounded-xl"
                      initial={false}
                      whileHover={{ opacity: 1 }}
                      animate={{ opacity: 0 }}
                    />
                  )}
                </Link>
              </motion.div>
              {index < items.length - 1 && (
                <motion.div
                  className="w-2 h-2 rounded-full bg-purple-700"
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
    { label: "Portfolio", href: "/portfolio" },
    { label: "Work", href: "/work" },
    { label: "Projects", href: "/projects" },
  ];

  return <Breadcrumb_26 items={items} />;
} 