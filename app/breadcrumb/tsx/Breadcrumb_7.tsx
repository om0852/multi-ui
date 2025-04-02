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

export function Breadcrumb_7({ items, className = "" }: BreadcrumbProps) {
  const pathRef = React.useRef<SVGPathElement>(null);
  const [pathLength, setPathLength] = React.useState(0);

  React.useEffect(() => {
    if (pathRef.current) {
      setPathLength(pathRef.current.getTotalLength());
    }
  }, []);

  return (
    <nav className={`relative ${className}`}>
      <div className="flex items-center relative z-10">
        {items.map((item, index) => (
          <React.Fragment key={item.href}>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.2 }}
            >
              <Link
                href={item.href}
                className={`
                  relative px-3 py-1 text-sm font-medium rounded-full
                  ${index === items.length - 1
                    ? "bg-indigo-500 text-white"
                    : "text-gray-600 hover:text-indigo-600"
                  }
                `}
              >
                {item.label}
              </Link>
            </motion.div>
            {index < items.length - 1 && (
              <span className="mx-3" />
            )}
          </React.Fragment>
        ))}
      </div>

      <svg
        className="absolute top-1/2 left-0 w-full -translate-y-1/2 -z-10"
        height="8"
        style={{ filter: "drop-shadow(0 1px 1px rgb(0 0 0 / 0.05))" }}
      >
        <motion.path
          ref={pathRef}
          d={`M0,4 ${items.map((_, i) => `h${i === 0 ? 24 : 48}`).join(" ")}`}
          fill="none"
          stroke="#e2e8f0"
          strokeWidth="2"
          strokeDasharray={pathLength}
          strokeDashoffset={pathLength}
          animate={{ strokeDashoffset: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        />
        <motion.path
          d={`M0,4 ${items.map((_, i) => `h${i === 0 ? 24 : 48}`).join(" ")}`}
          fill="none"
          stroke="#6366f1"
          strokeWidth="2"
          strokeDasharray={pathLength}
          strokeDashoffset={pathLength}
          animate={{ strokeDashoffset: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />
      </svg>
    </nav>
  );
}

export function Component() {
  const items = [
    { label: "Start", href: "/" },
    { label: "Process", href: "/process" },
    { label: "Review", href: "/review" },
    { label: "Complete", href: "/complete" },
  ];

  return (
    <div className="space-y-4 p-4">
      <Breadcrumb_7 items={items} />
    </div>
  );
} 