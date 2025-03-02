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

export function Breadcrumb_18({ items, className = "" }: BreadcrumbProps) {
  return (
    <nav className={`flex items-center ${className}`}>
      <div className="flex items-center bg-gradient-to-r from-fuchsia-600 to-pink-600 p-0.5 rounded-xl">
        <div className="flex items-center bg-white rounded-lg p-1">
          {items.map((item, index) => (
            <React.Fragment key={item.href}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link 
                  href={item.href}
                  className={`
                    relative px-3 py-1.5 text-sm font-medium rounded-md
                    ${index === items.length - 1
                      ? "bg-gradient-to-r from-fuchsia-600 to-pink-600 text-white"
                      : "text-gray-600 hover:text-fuchsia-600"
                    }
                  `}
                >
                  <motion.span whileHover={{ scale: 1.05 }}>
                    {item.label}
                  </motion.span>
                </Link>
              </motion.div>
              {index < items.length - 1 && (
                <motion.div
                  className="mx-2 text-gray-300 transform rotate-12"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.1 + 0.1 }}
                >
                  /
                </motion.div>
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
    { label: "Store", href: "/store" },
    { label: "Products", href: "/products" },
    { label: "Categories", href: "/categories" },
  ];

  return <Breadcrumb_18 items={items} />;
} 