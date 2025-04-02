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

export function Breadcrumb_21({ items, className = "" }: BreadcrumbProps) {
  return (
    <nav className={`flex items-center ${className}`}>
      <div className="flex items-center bg-slate-900 rounded-2xl p-1.5">
        {items.map((item, index) => (
          <React.Fragment key={item.href}>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Link 
                href={item.href}
                className={`
                  relative px-4 py-2 text-sm font-medium rounded-xl
                  ${index === items.length - 1
                    ? "bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 text-white"
                    : "text-slate-400 hover:text-white"
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
                    className="absolute inset-0 bg-slate-800/50 rounded-xl"
                    initial={false}
                    whileHover={{ opacity: 1 }}
                    animate={{ opacity: 0 }}
                  />
                )}
              </Link>
            </motion.div>
            {index < items.length - 1 && (
              <motion.div
                className="mx-2 w-1.5 h-1.5 rounded-full bg-slate-700"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
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

  return <Breadcrumb_21 items={items} />;
} 