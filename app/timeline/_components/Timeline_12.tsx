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
      initial={{ opacity: 0, y: 50, rotateX: -10 }}
      animate={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ 
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.23, 1, 0.32, 1]
      }}
      className={clsx(
        "relative mb-16 last:mb-0",
        "transform perspective-1000",
        theme === 'dark' ? 'text-white' : 'text-gray-900'
      )}
    >
      {/* Stacked Background Cards */}
      <div className={clsx(
        "absolute inset-0 -bottom-2 -right-2",
        theme === 'dark' ? 'bg-gray-700' : 'bg-gray-200',
        "rounded-xl transform rotate-2"
      )} />
      <div className={clsx(
        "absolute inset-0 -bottom-1 -right-1",
        theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100',
        "rounded-xl transform rotate-1"
      )} />

      {/* Main Card */}
      <div className={clsx(
        "relative p-6 rounded-xl",
        theme === 'dark' ? 'bg-gray-900' : 'bg-white',
        "shadow-xl",
        "transform-gpu hover:-translate-y-1 hover:rotate-1",
        "transition-transform duration-300"
      )}>
        <div className="flex items-start gap-4">
          {/* Icon */}
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            className={clsx(
              "flex-shrink-0 w-12 h-12 rounded-lg",
              "flex items-center justify-center",
              theme === 'dark' 
                ? 'bg-gray-800 text-white' 
                : 'bg-gray-100 text-gray-900',
              "shadow-lg",
              "transform-gpu hover:shadow-xl",
              "transition-all duration-300"
            )}
          >
            {icon}
          </motion.div>

          <div className="flex-1">
            {/* Date */}
            <div className={clsx(
              "inline-block px-3 py-1 mb-3 text-sm rounded-full",
              theme === 'dark' 
                ? 'bg-gray-800 text-gray-300' 
                : 'bg-gray-100 text-gray-600'
            )}>
              {date}
            </div>

            {/* Title */}
            <h3 className="text-xl font-semibold mb-2">
              {title}
            </h3>

            {/* Category */}
            {category && (
              <div className={clsx(
                "text-sm mb-2",
                theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
              )}>
                {category}
              </div>
            )}

            {/* Description */}
            <p className={clsx(
              "mb-4",
              theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
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
                      theme === 'dark'
                        ? 'bg-gray-800 text-gray-300'
                        : 'bg-gray-100 text-gray-600',
                      "transform-gpu hover:-translate-y-0.5",
                      "transition-transform duration-300"
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
                  "font-medium",
                  theme === 'dark' 
                    ? 'text-blue-400 hover:text-blue-300' 
                    : 'text-blue-600 hover:text-blue-700',
                  "transition-colors duration-300"
                )}
              >
                View Details
                <svg 
                  className="w-4 h-4" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M13 7l5 5m0 0l-5 5m5-5H6" 
                  />
                </svg>
              </motion.a>
            )}
          </div>
        </div>
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
      "max-w-3xl mx-auto p-8",
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