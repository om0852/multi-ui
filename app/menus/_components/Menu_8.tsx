"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

type MenuItem = {
  label: string;
  href: string;
  icon?: React.ReactNode;
};

type MenuProps = {
  items: MenuItem[];
  className?: string;
};

export function Menu_8({ items, className = "" }: MenuProps) {
  return (
    <nav className={`p-4 bg-slate-900 rounded-2xl ${className}`}>
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
              className="group flex items-center px-4 py-3 rounded-xl hover:bg-slate-800/50"
            >
              {item.icon && (
                <motion.span
                  className="mr-3 text-slate-400 group-hover:text-sky-400"
                  whileHover={{ scale: 1.1 }}
                >
                  {item.icon}
                </motion.span>
              )}
              <span className="text-sm font-medium text-slate-300 group-hover:text-white">
                {item.label}
              </span>
              <motion.div
                className="ml-auto opacity-0 group-hover:opacity-100 text-sky-400"
                initial={false}
                animate={{ x: 0 }}
                whileHover={{ x: 4 }}
              >
                →
              </motion.div>
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
      label: "Overview",
      href: "/overview",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
        </svg>
      ),
    },
    {
      label: "Projects",
      href: "/projects",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
        </svg>
      ),
    },
    {
      label: "Team",
      href: "/team",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
    },
  ];

  return <Menu_8 items={items} />;
} 