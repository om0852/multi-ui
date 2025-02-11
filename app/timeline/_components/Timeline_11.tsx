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
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.5,
        delay: index * 0.1,
        ease: "easeOut"
      }}
      className={clsx(
        "relative mb-8 last:mb-0",
        "backdrop-blur-xl",
        theme === 'dark' 
          ? 'bg-white/5 hover:bg-white/10' 
          : 'bg-black/5 hover:bg-black/10',
        "rounded-2xl",
        "border",
        theme === 'dark' ? 'border-white/10' : 'border-black/10',
        "transition-all duration-300",
        "group"
      )}
    >
      <div className="p-6">
        <div className="flex items-start gap-4">
          {/* Icon */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className={clsx(
              "flex-shrink-0 w-12 h-12 rounded-xl",
              "flex items-center justify-center",
              "backdrop-blur-xl",
              theme === 'dark' 
                ? 'bg-white/10 text-white/80' 
                : 'bg-black/5 text-black/80',
              "text-xl",
              "transition-transform duration-300"
            )}
          >
            {icon}
          </motion.div>

          <div className="flex-1 min-w-0">
            {/* Date */}
            <div className={clsx(
              "inline-block mb-2 text-sm",
              theme === 'dark' ? 'text-white/60' : 'text-black/60'
            )}>
              {date}
            </div>

            {/* Title */}
            <h3 className={clsx(
              "text-xl font-light mb-2",
              theme === 'dark' ? 'text-white/90' : 'text-black/90'
            )}>
              {title}
            </h3>

            {/* Category */}
            {category && (
              <div className={clsx(
                "text-sm mb-2",
                theme === 'dark' ? 'text-white/60' : 'text-black/60'
              )}>
                {category}
              </div>
            )}

            {/* Description */}
            <p className={clsx(
              "mb-4 font-light",
              theme === 'dark' ? 'text-white/70' : 'text-black/70'
            )}>
              {description}
            </p>

            {/* Tags */}
            {tags && tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-4">
                {tags.map((tag, i) => (
                  <span
                    key={i}
                    className={clsx(
                      "px-3 py-1 text-sm rounded-full",
                      "backdrop-blur-xl",
                      theme === 'dark' 
                        ? 'bg-white/5 text-white/70' 
                        : 'bg-black/5 text-black/70',
                      "transition-colors duration-300"
                    )}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}

            {/* Link */}
            {link && (
              <motion.a
                href={link}
                whileHover={{ x: 5 }}
                className={clsx(
                  "inline-flex items-center gap-2",
                  "text-sm",
                  theme === 'dark' ? 'text-white/80' : 'text-black/80',
                  "transition-colors duration-300",
                  "hover:opacity-70"
                )}
              >
                Learn more
                <svg 
                  className="w-4 h-4" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={1.5} 
                    d="M17 8l4 4m0 0l-4 4m4-4H3" 
                  />
                </svg>
              </motion.a>
            )}
          </div>
        </div>
      </div>

      {/* Glass Reflection Effect */}
      <div className={clsx(
        "absolute inset-0 rounded-2xl",
        "bg-gradient-to-b from-white/5 to-transparent",
        "pointer-events-none"
      )} />
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
      theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50',
      "min-h-screen"
    )}>
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-rose-100/20 via-teal-100/20 to-indigo-100/20 dark:from-rose-900/20 dark:via-teal-900/20 dark:to-indigo-900/20" />

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
    </div>
  );
};

export default Timeline; 