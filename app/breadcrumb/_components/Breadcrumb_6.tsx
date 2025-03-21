"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

type BreadcrumbItem = {
  label: string;
  href: string;
};

type BreadcrumbProps = {
  items: BreadcrumbItem[];
  className?: string;
};

export function Breadcrumb_6({ items, className = "" }: BreadcrumbProps) {
  const [isCollapsed, setIsCollapsed] = React.useState(false);
  const [isHovered, setIsHovered] = React.useState(false);

  React.useEffect(() => {
    const handleResize = () => {
      setIsCollapsed(window.innerWidth < 640);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (isCollapsed && !isHovered) {
    const firstItem = items[0];
    const lastItem = items[items.length - 1];
    
    return (
      <nav
        className={`relative ${className}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="flex items-center space-x-2">
          <Link
            href={firstItem.href}
            className="text-sm text-gray-600 hover:text-gray-900"
          >
            {firstItem.label}
          </Link>
          <span className="text-gray-400">...</span>
          <Link
            href={lastItem.href}
            className="text-sm font-medium text-indigo-600"
          >
            {lastItem.label}
          </Link>
        </div>
      </nav>
    );
  }

  return (
    <AnimatePresence>
      <nav
        className={`flex flex-wrap items-center gap-2 ${className}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {items.map((item, index) => (
          <motion.div
            key={item.href}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 10 }}
            transition={{ delay: index * 0.1 }}
          >
            <Link
              href={item.href}
              className={`
                text-sm
                ${index === items.length - 1
                  ? "font-medium text-indigo-600"
                  : "text-gray-600 hover:text-gray-900"
                }
              `}
            >
              {item.label}
            </Link>
            {index < items.length - 1 && (
              <span className="mx-2 text-gray-400">/</span>
            )}
          </motion.div>
        ))}
      </nav>
    </AnimatePresence>
  );
}

export function Component() {
  const items = [
    { label: "Home", href: "/" },
    { label: "Documentation", href: "/docs" },
    { label: "Components", href: "/components" },
    { label: "Breadcrumbs", href: "/breadcrumbs" },
  ];

  return (
    <div className="space-y-4">
      <Breadcrumb_6 items={items} />
    </div>
  );
} 