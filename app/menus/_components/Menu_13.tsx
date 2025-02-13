"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
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

export function Menu_13({ items, className = "" }: MenuProps) {
  const [activeIndex, setActiveIndex] = React.useState<number | null>(null);

  return (
    <nav className={`p-4 bg-gradient-to-br from-amber-100 to-orange-100 rounded-xl ${className}`}>
      <div className="space-y-2">
        {items.map((item, index) => (
          <motion.div
            key={item.href}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            onHoverStart={() => setActiveIndex(index)}
            onHoverEnd={() => setActiveIndex(null)}
            className="relative"
          >
            <Link
              href={item.href}
              className="block p-4 rounded-lg bg-white/50 backdrop-blur-sm hover:bg-white/80 transition-all duration-200"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-medium text-amber-900">
                    {item.label}
                  </h3>
                  {item.description && (
                    <p className="mt-1 text-sm text-amber-700/70">
                      {item.description}
                    </p>
                  )}
                </div>
                <AnimatePresence>
                  {activeIndex === index && (
                    <motion.div
                      className="flex items-center text-amber-600"
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.5 }}
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </motion.div>
                  )}
                </AnimatePresence>
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
      label: "Getting Started",
      href: "/start",
      description: "Learn the basics of our platform",
    },
    {
      label: "Documentation",
      href: "/docs",
      description: "Detailed guides and API references",
    },
    {
      label: "Examples",
      href: "/examples",
      description: "View sample projects and templates",
    },
  ];

  return <Menu_13 items={items} />;
} 