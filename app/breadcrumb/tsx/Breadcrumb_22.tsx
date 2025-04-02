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

export function Breadcrumb_22({ items, className = "" }: BreadcrumbProps) {
  return (
    <nav className={`flex items-center ${className}`}>
      <div className="flex items-center bg-lime-50 border border-lime-200 rounded-full px-3 py-1.5">
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
                  relative px-3 py-1 text-sm font-medium rounded-full
                  ${index === items.length - 1
                    ? "bg-lime-500 text-white shadow-sm shadow-lime-200"
                    : "text-lime-700 hover:text-lime-900"
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
                    className="absolute inset-0 bg-lime-100 rounded-full"
                    initial={false}
                    whileHover={{ opacity: 1 }}
                    animate={{ opacity: 0 }}
                  />
                )}
              </Link>
            </motion.div>
            {index < items.length - 1 && (
              <motion.svg
                className="w-4 h-4 mx-1 text-lime-400"
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
                  d="M9 5l7 7-7 7"
                />
              </motion.svg>
            )}
          </React.Fragment>
        ))}
      </div>
    </nav>
  );
}

export function Component() {
  const items = [
    { label: "Products", href: "/products" },
    { label: "Eco-friendly", href: "/eco-friendly" },
    { label: "Bamboo", href: "/bamboo" },
  ];

  return <Breadcrumb_22 items={items} />;
} 