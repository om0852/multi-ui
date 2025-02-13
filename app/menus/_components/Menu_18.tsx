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

export function Menu_18({ items, className = "" }: MenuProps) {
  return (
    <nav className={`p-4 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl ${className}`}>
      <div className="space-y-2">
        {items.map((item, index) => (
          <motion.div
            key={item.href}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Link
              href={item.href}
              className="group block p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors duration-200"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-medium text-white group-hover:text-sky-400 transition-colors">
                    {item.label}
                  </h3>
                  {item.description && (
                    <p className="mt-1 text-sm text-slate-400 group-hover:text-slate-300">
                      {item.description}
                    </p>
                  )}
                </div>
                <motion.div
                  className="text-slate-400 group-hover:text-sky-400"
                  initial={false}
                  animate={{ x: 0 }}
                  whileHover={{ x: 4 }}
                >
                  →
                </motion.div>
              </div>
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
      label: "Quick Start",
      href: "/quick-start",
      description: "Get up and running in minutes",
    },
    {
      label: "Components",
      href: "/components",
      description: "Explore our library of components",
    },
    {
      label: "Templates",
      href: "/templates",
      description: "Ready-to-use templates for your project",
    },
  ];

  return <Menu_18 items={items} />;
} 