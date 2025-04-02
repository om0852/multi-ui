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

export function Breadcrumb_24({ items, className = "" }: BreadcrumbProps) {
  return (
    <nav className={`flex items-center ${className}`}>
      <div className="flex items-center bg-zinc-900 rounded-xl p-1.5">
        {items.map((item, index) => (
          <React.Fragment key={item.href}>
            <motion.div
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Link 
                href={item.href}
                className={`
                  relative px-3 py-1.5 text-sm font-medium rounded-lg
                  ${index === items.length - 1
                    ? "bg-white text-zinc-900"
                    : "text-zinc-400 hover:text-white"
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
                    className="absolute inset-0 bg-zinc-800 rounded-lg"
                    initial={false}
                    whileHover={{ opacity: 1 }}
                    animate={{ opacity: 0 }}
                  />
                )}
              </Link>
            </motion.div>
            {index < items.length - 1 && (
              <motion.div
                className="mx-2 text-zinc-600"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: index * 0.1 + 0.1 }}
              >
                →
              </motion.div>
            )}
          </React.Fragment>
        ))}
      </div>
    </nav>
  );
}

export function Component() {
  const items = [
    { label: "Projects", href: "/projects" },
    { label: "Design", href: "/design" },
    { label: "Website", href: "/website" },
  ];

  return <Breadcrumb_24 items={items} />;
} 