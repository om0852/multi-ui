"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

type MenuItem = {
  label: string;
  href: string;
  description?: string;
};

type MenuProps = {
  items: MenuItem[];
  className?: string;
};

export function Menu_2({ items, className = "" }: MenuProps) {
  return (
    <nav className={`p-4 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-xl ${className}`}>
      <ul className="space-y-1">
        {items.map((item, index) => (
          <motion.li
            key={item.href}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Link
              href={item.href}
              className="block p-3 rounded-lg bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors duration-200"
            >
              <div className="text-white font-medium">{item.label}</div>
              {item.description && (
                <div className="mt-1 text-sm text-white/70">{item.description}</div>
              )}
              <motion.div
                className="mt-2 h-0.5 bg-white/30"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.2 }}
              />
            </Link>
          </motion.li>
        ))}
      </ul>
    </nav>
  );
}

export function Component() {
  const items = [
    {
      label: "Getting Started",
      href: "/getting-started",
      description: "Learn the basics and get up to speed",
    },
    {
      label: "Documentation",
      href: "/docs",
      description: "Detailed API references and guides",
    },
    {
      label: "Examples",
      href: "/examples",
      description: "View sample projects and code snippets",
    },
  ];

  return <Menu_2 items={items} />;
} 