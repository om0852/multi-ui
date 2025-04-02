"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

type BreadcrumbItem = {
  label: string;
  href: string;
};

type BreadcrumbProps = {
  items: BreadcrumbItem[];
  className?: string;
};

export function Breadcrumb_16({ items, className = "" }: BreadcrumbProps) {
  const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null);

  return (
    <nav className={`flex items-center ${className}`}>
      <div className="flex items-center space-x-2 bg-gradient-to-r from-teal-500 to-cyan-500 p-1 rounded-lg">
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
                  relative px-3 py-1.5 text-sm font-medium rounded-md
                  ${index === items.length - 1
                    ? "bg-white text-teal-600"
                    : "text-white hover:bg-white/10"
                  }
                  transition-colors duration-200
                `}
              >
                {item.label}
                <AnimatePresence>
                  {hoveredIndex === index && (
                    <motion.div
                      className="absolute inset-0 bg-white/10 rounded-md"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      layoutId="hover"
                    />
                  )}
                </AnimatePresence>
              </Link>
            </motion.div>
            {index < items.length - 1 && (
              <svg
                className="w-4 h-4 text-white/70"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            )}
          </React.Fragment>
        ))}
      </div>
    </nav>
  );
}

export function Component() {
  const items = [
    { label: "Home", href: "/" },
    { label: "Features", href: "/features" },
    { label: "Pricing", href: "/pricing" },
  ];

  return <Breadcrumb_16 items={items} />;
} 