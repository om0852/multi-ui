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

export function Breadcrumb_19({ items, className = "" }: BreadcrumbProps) {
  return (
    <nav className={`flex items-center ${className}`}>
      <div className="flex items-center bg-black rounded-xl p-1">
        {items.map((item, index) => (
          <React.Fragment key={item.href}>
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Link 
                href={item.href}
                className={`
                  relative px-3 py-1.5 text-sm font-medium rounded-lg
                  ${index === items.length - 1
                    ? "bg-white text-black"
                    : "text-white/80 hover:text-white hover:bg-white/10"
                  }
                  transition-all duration-200
                `}
              >
                <motion.span
                  whileHover={{ scale: 1.05 }}
                  className="relative z-10"
                >
                  {item.label}
                </motion.span>
              </Link>
            </motion.div>
            {index < items.length - 1 && (
              <motion.div
                className="mx-2 w-1 h-1 rounded-full bg-white/30"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: index * 0.1 + 0.1 }}
              />
            )}
          </React.Fragment>
        ))}
      </div>
    </nav>
  );
}

export function Component() {
  const items = [
    { label: "Portfolio", href: "/portfolio" },
    { label: "Projects", href: "/projects" },
    { label: "Details", href: "/details" },
  ];

  return <Breadcrumb_19 items={items} />;
} 