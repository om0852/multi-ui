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

export function Breadcrumb_14({ items, className = "" }: BreadcrumbProps) {
  return (
    <nav 
      className={`
        relative flex items-center bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500
        p-0.5 rounded-lg ${className}
      `}
    >
      <motion.div
        className="absolute inset-0 rounded-lg opacity-50"
        animate={{
          backgroundImage: [
            "linear-gradient(45deg, #ec4899, #ef4444, #f59e0b)",
            "linear-gradient(45deg, #f59e0b, #ec4899, #ef4444)",
            "linear-gradient(45deg, #ef4444, #f59e0b, #ec4899)",
          ],
        }}
        transition={{ duration: 4, repeat: Infinity }}
      />
      <div className="flex items-center space-x-1 bg-white rounded-md p-1">
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
                  relative px-3 py-1 text-sm font-medium rounded-md
                  ${index === items.length - 1
                    ? "bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500"
                    : "text-gray-600 hover:text-pink-500"
                  }
                `}
              >
                {item.label}
              </Link>
            </motion.div>
            {index < items.length - 1 && (
              <span className="text-gray-300">•</span>
            )}
          </React.Fragment>
        ))}
      </div>
    </nav>
  );
}

export function Component() {
  const items = [
    { label: "Gallery", href: "/gallery" },
    { label: "Collections", href: "/collections" },
    { label: "Featured", href: "/featured" },
  ];

  return <Breadcrumb_14 items={items} />;
} 