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

export function Menu_5({ items, className = "" }: MenuProps) {
  return (
    <nav className={`p-4 bg-white rounded-xl shadow-lg ${className}`}>
      <div className="grid gap-2">
        {items.map((item, index) => (
          <motion.div
            key={item.href}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="group relative"
          >
            <Link
              href={item.href}
              className="block p-4 rounded-lg hover:bg-gray-50"
            >
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-900">
                  {item.label}
                </span>
                <motion.span
                  className="text-gray-400"
                  initial={false}
                  animate={{ x: 0 }}
                  whileHover={{ x: 4 }}
                >
                  →
                </motion.span>
              </div>
              {item.description && (
                <p className="mt-1 text-sm text-gray-500">
                  {item.description}
                </p>
              )}
              <motion.div
                className="absolute inset-0 border-2 border-indigo-500 rounded-lg pointer-events-none opacity-0"
                initial={false}
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
      label: "Account Settings",
      href: "/account",
      description: "Manage your account preferences and profile",
    },
    {
      label: "Team Members",
      href: "/team",
      description: "Add or remove team members and adjust roles",
    },
    {
      label: "Billing",
      href: "/billing",
      description: "View your subscription and payment history",
    },
  ];

  return <Menu_5 items={items} />;
} 