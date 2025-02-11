"use client";

import React from "react";
import { motion } from "framer-motion";
import clsx from "clsx";

interface TimelineItemProps {
  title: string;
  description: string;
  date: string;
  icon?: React.ReactNode;
  category?: string;
  tags?: string[];
  link?: string;
}

interface TimelineProps {
  data: TimelineItemProps[];
  theme?: 'light' | 'dark';
  animated?: boolean;
}

const TimelineItem: React.FC<TimelineItemProps & { 
  index: number; 
  theme: 'light' | 'dark';
}> = ({
  title,
  description,
  date,
  icon,
  category,
  tags,
  link,
  index,
  theme
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ 
        duration: 0.6,
        delay: index * 0.2,
        ease: [0.25, 0.1, 0.25, 1]
      }}
      className={clsx(
        "relative mb-8 last:mb-0",
        "backdrop-blur-md bg-opacity-10",
        theme === 'dark' ? 'bg-blue-900' : 'bg-blue-50',
        "rounded-lg overflow-hidden",
        "shadow-[0_0_20px_rgba(6,182,212,0.3)]",
        "border border-cyan-500/30",
        "group"
      )}
    >
      {/* Neon Border Effect */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-50">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 animate-[gradient_3s_ease_infinite]" />
        </div>
      </div>

      {/* Content Container */}
      <div className="relative p-6">
        <div className="flex items-start gap-6">
          {/* Icon with Glow Effect */}
          <motion.div
            animate={{
              boxShadow: [
                "0 0 20px rgba(6,182,212,0.5)",
                "0 0 40px rgba(6,182,212,0.3)",
                "0 0 20px rgba(6,182,212,0.5)",
              ],
            }}
            transition={{ duration: 2, repeat: Infinity }}
            className={clsx(
              "flex-shrink-0 w-14 h-14 rounded-lg",
              "flex items-center justify-center",
              "bg-gradient-to-br from-cyan-900 to-blue-900",
              "border border-cyan-500/50",
              "text-cyan-400 text-2xl",
              "shadow-[0_0_15px_rgba(6,182,212,0.3)]",
              "group-hover:shadow-[0_0_30px_rgba(6,182,212,0.5)]",
              "transition-shadow duration-300"
            )}
          >
            {icon}
          </motion.div>

          <div className="flex-1 min-w-0">
            {/* Date with Cyber Effect */}
            <div className={clsx(
              "inline-flex items-center px-3 py-1 mb-3",
              "bg-gradient-to-r from-cyan-900 to-blue-900",
              "border border-cyan-500/50",
              "rounded-md",
              "text-cyan-400 text-sm",
              "shadow-[0_0_10px_rgba(6,182,212,0.2)]"
            )}>
              <span className="mr-2 text-cyan-500">⟨</span>
              {date}
              <span className="ml-2 text-cyan-500">⟩</span>
            </div>

            {/* Title with Glitch Effect */}
            <h3 className={clsx(
              "text-2xl font-bold mb-3",
              "bg-clip-text text-transparent",
              "bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500",
              "animate-[gradient_3s_ease_infinite]",
              "drop-shadow-[0_0_10px_rgba(6,182,212,0.5)]"
            )}>
              {title}
            </h3>

            {/* Category */}
            {category && (
              <div className={clsx(
                "inline-block mb-3 text-sm",
                "text-cyan-400"
              )}>
                {`<${category}/>`}
              </div>
            )}

            {/* Description */}
            <p className={clsx(
              "mb-4",
              theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
            )}>
              {description}
            </p>

            {/* Tags with Neon Effect */}
            {tags && tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-4">
                {tags.map((tag, i) => (
                  <span
                    key={i}
                    className={clsx(
                      "px-3 py-1 text-sm",
                      "bg-gradient-to-r from-cyan-900 to-blue-900",
                      "border border-cyan-500/50",
                      "rounded-full",
                      "text-cyan-400",
                      "shadow-[0_0_10px_rgba(6,182,212,0.2)]",
                      "hover:shadow-[0_0_15px_rgba(6,182,212,0.4)]",
                      "transition-shadow duration-300"
                    )}
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}

            {/* Link with Cyber Button Effect */}
            {link && (
              <motion.a
                href={link}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={clsx(
                  "inline-flex items-center gap-2 px-4 py-2",
                  "bg-gradient-to-r from-cyan-900 to-blue-900",
                  "border border-cyan-500/50",
                  "rounded-md",
                  "text-cyan-400",
                  "shadow-[0_0_15px_rgba(6,182,212,0.3)]",
                  "hover:shadow-[0_0_30px_rgba(6,182,212,0.5)]",
                  "transition-all duration-300",
                  "group/link"
                )}
              >
                <span>ACCESS</span>
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="text-cyan-500"
                >
                  →
                </motion.span>
              </motion.a>
            )}
          </div>
        </div>
      </div>

      {/* Animated Circuit Lines */}
      <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgdmlld0JveD0iMCAwIDQwIDQwIj48cGF0aCBkPSJNMCAwaDQwdjQwSDB6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTAgMGgyMHYyMEgweiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS13aWR0aD0iMSIvPjwvc3ZnPg==')] animate-[circuit_20s_linear_infinite]" />
      </div>
    </motion.div>
  );
};

const Timeline: React.FC<TimelineProps> = ({
  data,
  theme = 'light',
  animated = true,
}) => {
  return (
    <div className={clsx(
      "relative max-w-4xl mx-auto p-8",
      theme === 'dark' ? 'bg-gray-900' : 'bg-gray-100',
      "rounded-xl",
      "border border-cyan-500/30",
      "shadow-[0_0_50px_rgba(6,182,212,0.15)]"
    )}>
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48cGF0aCBkPSJNMCAwaDYwdjYwSDB6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTMwIDMwbDE1IDE1TTMwIDMwbC0xNSAxNU0zMCAzMGwxNS0xNU0zMCAzMGwtMTUtMTUiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2Utd2lkdGg9IjAuNSIvPjwvc3ZnPg==')] opacity-5" />

      {/* Content */}
      <div className="relative">
        {data.map((item, index) => (
          <TimelineItem
            key={index}
            {...item}
            index={index}
            theme={theme}
          />
        ))}
      </div>

      {/* Animated Scan Line */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 animate-scan">
          <div className="w-full h-1 bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />
        </div>
      </div>
    </div>
  );
};

export default Timeline; 