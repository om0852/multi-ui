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

export function Menu_10({ items, className = "" }: MenuProps) {
  const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null);

  return (
    <nav className={`p-4 bg-white rounded-xl shadow-lg ${className}`}>
      <div className="space-y-2">
        {items.map((item, index) => (
          <motion.div
            key={item.href}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            onHoverStart={() => setHoveredIndex(index)}
            onHoverEnd={() => setHoveredIndex(null)}
            className="relative"
          >
            <Link
              href={item.href}
              className="block p-4 rounded-lg hover:bg-gray-50 transition-colors duration-200"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-medium text-gray-900">
                    {item.label}
                  </h3>
                  {item.description && (
                    <p className="mt-1 text-sm text-gray-500">
                      {item.description}
                    </p>
                  )}
                </div>
                <AnimatePresence>
                  {hoveredIndex === index && (
                    <motion.div
                      className="flex items-center text-blue-500"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              <motion.div
                className="absolute inset-0 border-2 border-blue-500 rounded-lg pointer-events-none"
                initial={{ opacity: 0 }}
                animate={{ opacity: hoveredIndex === index ? 0.1 : 0 }}
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
      label: "Account Settings",
      href: "/account",
      description: "Manage your account preferences",
    },
    {
      label: "Team Members",
      href: "/team",
      description: "Add or remove team members",
    },
    {
      label: "Billing",
      href: "/billing",
      description: "View your subscription details",
    },
  ];

  return <Menu_10 items={items} />;
} 