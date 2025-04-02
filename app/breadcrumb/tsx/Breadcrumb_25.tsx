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

export function Breadcrumb_25({ items, className = "" }: BreadcrumbProps) {
  return (
    <nav className={`flex items-center ${className}`}>
      <div className="flex items-center bg-gradient-to-r from-emerald-500 to-teal-500 p-0.5 rounded-lg">
        <div className="flex items-center bg-white/95 backdrop-blur-sm rounded-md p-1">
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
                    relative px-3 py-1.5 text-sm font-medium rounded-md
                    ${index === items.length - 1
                      ? "bg-gradient-to-r from-emerald-500 to-teal-500 text-white"
                      : "text-gray-700 hover:text-emerald-600"
                    }
                    transition-colors duration-200
                  `}
                >
                  <motion.span whileHover={{ scale: 1.05 }}>
                    {item.label}
                  </motion.span>
                </Link>
              </motion.div>
              {index < items.length - 1 && (
                <motion.div
                  className="mx-2 w-1.5 h-1.5 rounded-full bg-emerald-200"
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
    { label: "Shop", href: "/shop" },
    { label: "Plants", href: "/plants" },
    { label: "Indoor", href: "/indoor" },
  ];

  return <Breadcrumb_25 items={items} />;
} 