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

export function Breadcrumb_11({ items, className = "" }: BreadcrumbProps) {
  const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null);

  return (
    <nav className={`flex items-center ${className}`}>
      {items.map((item, index) => (
        <React.Fragment key={item.href}>
          <motion.div
            className="relative"
            onHoverStart={() => setHoveredIndex(index)}
            onHoverEnd={() => setHoveredIndex(null)}
          >
            <Link 
              href={item.href}
              className={`
                relative px-3 py-1.5 text-sm font-medium
                ${index === items.length - 1
                  ? "text-indigo-600"
                  : "text-gray-600"
                }
              `}
            >
              {hoveredIndex === index && (
                <motion.span
                  className="absolute inset-0 bg-indigo-50 rounded-md -z-10"
                  layoutId="hover-background"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                />
              )}
              {item.label}
            </Link>
            {hoveredIndex === index && (
              <motion.div
                className="absolute -bottom-1 left-0 right-0 h-0.5 bg-indigo-500"
                layoutId="underline"
              />
            )}
          </motion.div>
          {index < items.length - 1 && (
            <span className="mx-2 text-gray-400">/</span>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
}

export function Component() {
  const items = [
    { label: "Home", href: "/" },
    { label: "Shop", href: "/shop" },
    { label: "Products", href: "/products" },
  ];

  return <Breadcrumb_11 items={items} />;
} 