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
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ 
        duration: 0.4,
        delay: index * 0.1,
        ease: "easeOut"
      }}
      className={clsx(
        "relative mb-8 last:mb-0",
        "grid grid-cols-[1fr_auto_2fr] gap-4",
        theme === 'dark' ? 'text-white' : 'text-gray-900'
      )}
    >
      {/* Date Column */}
      <div className={clsx(
        "text-right text-sm font-mono",
        theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
      )}>
        {date}
      </div>

      {/* Icon Column */}
      <div className="relative flex justify-center">
        {/* Vertical Line */}
        <div className={clsx(
          "absolute top-0 bottom-0 w-px",
          theme === 'dark' ? 'bg-gray-700' : 'bg-gray-200'
        )} />

        {/* Icon Container */}
        <motion.div
          whileHover={{ scale: 1.1 }}
          className={clsx(
            "relative w-8 h-8",
            "flex items-center justify-center",
            "rounded-sm",
            theme === 'dark' ? 'bg-gray-800' : 'bg-white',
            "border",
            theme === 'dark' ? 'border-gray-700' : 'border-gray-200',
            "transform-gpu"
          )}
        >
          {icon}
        </motion.div>
      </div>

      {/* Content Column */}
      <div className={clsx(
        "p-4",
        theme === 'dark' ? 'bg-gray-800/50' : 'bg-white',
        "border",
        theme === 'dark' ? 'border-gray-700' : 'border-gray-200'
      )}>
        {/* Title */}
        <h3 className={clsx(
          "text-lg font-medium mb-2",
          "flex items-center justify-between"
        )}>
          <span>{title}</span>
          {category && (
            <span className={clsx(
              "text-xs px-2 py-1",
              "border",
              theme === 'dark' ? 'border-gray-700 text-gray-400' : 'border-gray-200 text-gray-600'
            )}>
              {category}
            </span>
          )}
        </h3>

        {/* Description */}
        <p className={clsx(
          "text-sm mb-4",
          theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
        )}>
          {description}
        </p>

        {/* Tags Grid */}
        {tags && tags.length > 0 && (
          <div className="grid grid-cols-3 gap-2 mb-4">
            {tags.map((tag, i) => (
              <span
                key={i}
                className={clsx(
                  "text-xs px-2 py-1 text-center",
                  "border",
                  theme === 'dark' 
                    ? 'border-gray-700 text-gray-400' 
                    : 'border-gray-200 text-gray-600'
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
            whileHover={{ x: 4 }}
            className={clsx(
              "inline-flex items-center gap-2",
              "text-sm",
              theme === 'dark' 
                ? 'text-blue-400 hover:text-blue-300' 
                : 'text-blue-600 hover:text-blue-700'
            )}
          >
            View Details
            <span className="font-mono">→</span>
          </motion.a>
        )}
      </div>
    </motion.div>
  );
};

const Timeline: React.FC<TimelineProps> = ({
  data,
  theme = 'light'
}) => {
  return (
    <div className={clsx(
      "max-w-4xl mx-auto p-8",
      theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'
    )}>
      {/* Grid Background */}
      <div className={clsx(
        "absolute inset-0",
        "bg-grid-pattern",
        theme === 'dark' ? 'opacity-5' : 'opacity-10'
      )} />

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