"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

type BreadcrumbItem = {
  label: string;
  href: string;
  children?: BreadcrumbItem[];
};

type BreadcrumbProps = {
  items: BreadcrumbItem[];
  className?: string;
};

export function Breadcrumb_4({ items, className = "" }: BreadcrumbProps) {
  const [activeDropdown, setActiveDropdown] = React.useState<string | null>(null);

  return (
    <nav className={`flex items-center space-x-1 ${className}`}>
      {items.map((item, index) => (
        <React.Fragment key={item.href}>
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <button
                className={`
                  flex items-center px-3 py-1.5 text-sm rounded
                  ${index === items.length - 1
                    ? "bg-indigo-50 text-indigo-600"
                    : "text-gray-600 hover:text-gray-900"
                  }
                `}
                onMouseEnter={() => item.children && setActiveDropdown(item.href)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link href={item.href}>{item.label}</Link>
                {item.children && (
                  <svg
                    className="w-4 h-4 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                )}
              </button>
              {item.children && activeDropdown === item.href && (
                <motion.div
                  className="absolute left-0 mt-1 w-48 bg-white rounded-md shadow-lg py-1"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                >
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      {child.label}
                    </Link>
                  ))}
                </motion.div>
              )}
            </motion.div>
          </div>
          {index < items.length - 1 && (
            <span className="text-gray-400">/</span>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
}

export function Component() {
  const items = [
    { label: "Home", href: "/" },
    {
      label: "Products",
      href: "/products",
      children: [
        { label: "Electronics", href: "/products/electronics" },
        { label: "Clothing", href: "/products/clothing" },
        { label: "Books", href: "/products/books" },
      ],
    },
    { label: "Electronics", href: "/electronics" },
  ];

  return (
    <div className="space-y-4">
      <Breadcrumb_4 items={items} />
    </div>
  );
} 