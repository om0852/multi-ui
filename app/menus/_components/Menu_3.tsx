"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

type MenuItem = {
  label: string;
  href: string;
  badge?: string;
};

type MenuProps = {
  items: MenuItem[];
  className?: string;
};

export function Menu_3({ items, className = "" }: MenuProps) {
  return (
    <nav className={`p-3 bg-white rounded-2xl shadow-xl ${className}`}>
      <div className="space-y-1">
        {items.map((item, index) => (
          <motion.div
            key={item.href}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Link
              href={item.href}
              className="group flex items-center justify-between px-4 py-2 rounded-xl hover:bg-gray-50"
            >
              <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900">
                {item.label}
              </span>
              {item.badge && (
                <motion.span
                  className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: index * 0.1 + 0.2 }}
                >
                  {item.badge}
                </motion.span>
              )}
              <motion.div
                className="absolute inset-0 rounded-xl border-2 border-gray-200 pointer-events-none"
                initial={false}
                whileHover={{ scale: 1.02 }}
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
    { label: "Inbox", href: "/inbox", badge: "New" },
    { label: "Drafts", href: "/drafts", badge: "3" },
    { label: "Sent", href: "/sent" },
    { label: "Trash", href: "/trash" },
  ];

  return <Menu_3 items={items} />;
} 