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

export function Breadcrumb_3({ items, className = "" }: BreadcrumbProps) {
  return (
    <nav className={`flex items-center ${className}`}>
      {items.map((item, index) => (
        <React.Fragment key={item.href}>
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Link 
              href={item.href}
              className={`
                inline-flex items-center h-8 px-4 text-sm
                ${index === items.length - 1
                  ? "bg-indigo-500 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }
                ${index === 0 ? "rounded-l-lg" : ""}
                ${index === items.length - 1 ? "rounded-r-lg" : ""}
                relative
              `}
            >
              {item.label}
              {index < items.length - 1 && (
                <svg
                  className="w-4 h-4 ml-2 text-gray-400"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              )}
            </Link>
          </motion.div>
        </React.Fragment>
      ))}
    </nav>
  );
}

export function Component() {
  const items = [
    { label: "Home", href: "/" },
    { label: "Products", href: "/products" },
    { label: "Electronics", href: "/electronics" },
  ];

  return (
    <div className="space-y-4">
      <Breadcrumb_3 items={items} />
    </div>
  );
} 