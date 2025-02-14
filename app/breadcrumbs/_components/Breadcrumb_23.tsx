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

export function Breadcrumb_23({ items, className = "" }: BreadcrumbProps) {
  return (
    <nav className={`flex items-center ${className}`}>
      <div className="flex items-center bg-gradient-to-r from-sky-400 to-blue-500 p-0.5 rounded-lg">
        <div className="flex items-center bg-white rounded-md p-1">
          {items.map((item, index) => (
            <React.Fragment key={item.href}>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link 
                  href={item.href}
                  className={`
                    group relative px-3 py-1.5 text-sm font-medium rounded-md
                    ${index === items.length - 1
                      ? "text-sky-600 bg-sky-50"
                      : "text-gray-600 hover:text-sky-600"
                    }
                  `}
                >
                  {item.label}
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-sky-400 origin-left"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.2 }}
                  />
                </Link>
              </motion.div>
              {index < items.length - 1 && (
                <motion.div
                  className="mx-2 text-gray-400 transform rotate-12 text-sm"
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
    { label: "Services", href: "/services" },
    { label: "Cloud", href: "/cloud" },
    { label: "Storage", href: "/storage" },
  ];

  return <Breadcrumb_23 items={items} />;
} 