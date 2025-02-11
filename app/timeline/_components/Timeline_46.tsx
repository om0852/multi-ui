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
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className={clsx(
        "relative mb-12 pl-8",
        theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
      )}
    >
      {/* Timeline Line */}
      <div className="absolute left-0 top-0 bottom-0 w-px">
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: "100%" }}
          transition={{ duration: 0.5 }}
          className={clsx(
            "absolute inset-0",
            theme === 'dark' ? 'bg-gray-700' : 'bg-gray-300'
          )}
        />
      </div>

      {/* Node */}
      <motion.div
        whileHover={{ scale: 1.1 }}
        className={clsx(
          "absolute left-0 top-0 w-2 h-2 -translate-x-1/2",
          theme === 'dark' ? 'bg-gray-300' : 'bg-gray-700',
          "rounded-full"
        )}
      />

      {/* Content */}
      <div className={clsx(
        "p-4",
        theme === 'dark' ? 'bg-gray-900' : 'bg-white',
        "border",
        theme === 'dark' ? 'border-gray-800' : 'border-gray-200'
      )}>
        {/* Date */}
        <div className={clsx(
          "text-sm mb-2",
          theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
        )}>
          {date}
        </div>

        {/* Title */}
        <h3 className={clsx(
          "text-lg font-medium mb-2",
          theme === 'dark' ? 'text-gray-200' : 'text-gray-800'
        )}>
          {title}
        </h3>

        {/* Category */}
        {category && (
          <div className={clsx(
            "text-sm mb-2",
            theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
          )}>
            {category}
          </div>
        )}

        {/* Description */}
        <p className={clsx(
          "mb-4",
          theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
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
                  "px-2 py-1 text-xs",
                  theme === 'dark' 
                    ? 'bg-gray-800 text-gray-300' 
                    : 'bg-gray-100 text-gray-700'
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
              "inline-flex items-center gap-2 text-sm",
              theme === 'dark' 
                ? 'text-gray-300 hover:text-white' 
                : 'text-gray-700 hover:text-black'
            )}
          >
            View Details
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
      "max-w-2xl mx-auto p-8",
      theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'
    )}>
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