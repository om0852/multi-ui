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
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.2 }}
      className={clsx(
        "relative mb-12 last:mb-0 pl-8",
        theme === 'dark' ? 'text-sepia-100' : 'text-sepia-900'
      )}
    >
      {/* Vertical Line */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-sepia-300 opacity-50" />

      {/* Date Circle */}
      <div className={clsx(
        "absolute left-0 top-0 -translate-x-1/2",
        "w-6 h-6 rounded-full",
        "border-2 border-sepia-400",
        theme === 'dark' ? 'bg-sepia-800' : 'bg-sepia-100',
        "flex items-center justify-center"
      )}>
        {icon}
      </div>

      {/* Content Card */}
      <div className={clsx(
        "relative p-6 rounded-lg",
        theme === 'dark' 
          ? 'bg-sepia-900/80 border border-sepia-700' 
          : 'bg-sepia-50 border border-sepia-200',
        "before:absolute before:inset-0 before:bg-texture-paper before:opacity-10 before:mix-blend-overlay",
        "overflow-hidden"
      )}>
        {/* Header */}
        <div className="mb-4 border-b border-sepia-300/30 pb-4">
          <div className={clsx(
            "text-xs uppercase tracking-widest mb-1",
            theme === 'dark' ? 'text-sepia-400' : 'text-sepia-600'
          )}>
            {date}
          </div>
          <h3 className={clsx(
            "font-serif text-xl font-bold",
            theme === 'dark' ? 'text-sepia-100' : 'text-sepia-900'
          )}>
            {title}
          </h3>
          {category && (
            <div className={clsx(
              "text-sm italic mt-1",
              theme === 'dark' ? 'text-sepia-400' : 'text-sepia-600'
            )}>
              {category}
            </div>
          )}
        </div>

        {/* Description */}
        <p className={clsx(
          "text-sm leading-relaxed font-serif",
          theme === 'dark' ? 'text-sepia-300' : 'text-sepia-700'
        )}>
          {description}
        </p>

        {/* Tags */}
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-4">
            {tags.map((tag, i) => (
              <span
                key={i}
                className={clsx(
                  "px-2 py-1 text-xs rounded",
                  "border border-sepia-300",
                  theme === 'dark' 
                    ? 'bg-sepia-800 text-sepia-200' 
                    : 'bg-sepia-100 text-sepia-700'
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
              "inline-flex items-center gap-2 mt-4",
              "text-sm font-serif italic underline-offset-4",
              theme === 'dark' 
                ? 'text-sepia-300 hover:text-sepia-200' 
                : 'text-sepia-700 hover:text-sepia-900'
            )}
          >
            Read More
            <span>→</span>
          </motion.a>
        )}
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
      "relative max-w-3xl mx-auto p-8",
      theme === 'dark' ? 'bg-sepia-950' : 'bg-sepia-50',
      "before:absolute before:inset-0 before:bg-texture-paper before:opacity-5 before:mix-blend-overlay"
    )}>
      {/* Decorative Border */}
      <div className="absolute inset-4 border border-sepia-300/30" />

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