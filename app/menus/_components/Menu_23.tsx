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

export function Menu_23({ items, className = "" }: MenuProps) {
  return (
    <nav className={`p-4 bg-gradient-to-br from-teal-400 to-emerald-500 rounded-2xl ${className}`}>
      <div className="space-y-2">
        {items.map((item, index) => (
          <motion.div
            key={item.href}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Link
              href={item.href}
              className="group block p-4 rounded-xl bg-white/10 hover:bg-white/20 backdrop-blur-sm"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-medium text-white">
                    {item.label}
                  </h3>
                  {item.description && (
                    <p className="mt-1 text-sm text-white/70">
                      {item.description}
                    </p>
                  )}
                </div>
                <motion.div
                  className="text-white/60 group-hover:text-white"
                  initial={false}
                  animate={{ x: 0 }}
                  whileHover={{ x: 4 }}
                >
                  →
                </motion.div>
              </div>
              <motion.div
                className="absolute inset-0 border-2 border-white/20 rounded-xl pointer-events-none"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.2 }}
              />
            </Link>
          </motion.div>
        ))}
      </div>
    </nav>
  );
}

export function Component() {
  const items = [
    {
      label: "Documentation",
      href: "/docs",
      description: "Learn how to integrate our tools",
    },
    {
      label: "API Reference",
      href: "/api",
      description: "Detailed API documentation",
    },
    {
      label: "Examples",
      href: "/examples",
      description: "View example projects and code",
    },
  ];

  return <Menu_23 items={items} />;
} 