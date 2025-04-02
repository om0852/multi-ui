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
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.5,
        delay: index * 0.15,
        ease: "easeOut"
      }}
      className={clsx(
        "relative mb-12 last:mb-0 pl-8",
        theme === 'dark' ? 'text-white' : 'text-gray-900'
      )}
    >
      {/* Paper Cut Line */}
      <div className="absolute left-0 top-0 bottom-0 w-px">
        <div className={clsx(
          "absolute inset-0",
          theme === 'dark' ? 'bg-white/20' : 'bg-black/20',
          "transform -skew-x-12"
        )} />
        <div className={clsx(
          "absolute inset-0 -left-[2px]",
          theme === 'dark' ? 'bg-white/20' : 'bg-black/20',
          "transform skew-x-12"
        )} />
      </div>

      {/* Paper Cut Circle */}
      <div className="absolute left-0 top-0 -translate-x-1/2">
        <div className={clsx(
          "w-6 h-6 rounded-full",
          theme === 'dark' ? 'bg-gray-800' : 'bg-white',
          "shadow-lg",
          "border-2",
          theme === 'dark' ? 'border-white/20' : 'border-black/20',
          "transform hover:scale-110",
          "transition-transform duration-300"
        )}>
          <div className={clsx(
            "absolute inset-0 rounded-full",
            "bg-gradient-to-br",
            theme === 'dark' 
              ? 'from-white/10 to-transparent' 
              : 'from-black/10 to-transparent'
          )} />
        </div>
      </div>

      {/* Content Card */}
      <div className={clsx(
        "relative p-6 rounded-lg",
        theme === 'dark' ? 'bg-gray-800' : 'bg-white',
        "shadow-lg",
        "before:absolute before:inset-0 before:rounded-lg",
        theme === 'dark'
          ? 'before:bg-gradient-to-r before:from-white/5 before:to-transparent'
          : 'before:bg-gradient-to-r before:from-black/5 before:to-transparent',
        "before:transform before:skew-y-1",
        "hover:transform hover:-translate-y-1",
        "transition-transform duration-300"
      )}>
        {/* Top Fold Effect */}
        <div className={clsx(
          "absolute -top-1 left-4 right-4 h-2",
          theme === 'dark' ? 'bg-gray-700' : 'bg-gray-100',
          "transform -skew-x-45"
        )} />

        {/* Right Fold Effect */}
        <div className={clsx(
          "absolute -right-1 top-4 bottom-4 w-2",
          theme === 'dark' ? 'bg-gray-700' : 'bg-gray-100',
          "transform -skew-y-45"
        )} />

        <div className="flex items-start gap-4">
          {/* Icon */}
          <motion.div
            whileHover={{ scale: 1.1, rotate: -5 }}
            className={clsx(
              "flex-shrink-0 w-12 h-12 rounded-lg",
              "flex items-center justify-center",
              theme === 'dark' ? 'bg-gray-700' : 'bg-gray-100',
              "shadow-inner",
              "transform-gpu hover:shadow-lg",
              "transition-all duration-300"
            )}
          >
            {icon}
          </motion.div>

          <div className="flex-1">
            {/* Date */}
            <div className={clsx(
              "inline-block px-3 py-1 mb-3",
              "text-sm",
              theme === 'dark' ? 'text-gray-400' : 'text-gray-600',
              "border-l-2",
              theme === 'dark' ? 'border-gray-600' : 'border-gray-300'
            )}>
              {date}
            </div>

            {/* Title */}
            <h3 className={clsx(
              "text-xl font-medium mb-2",
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            )}>
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
                      "px-3 py-1 text-sm",
                      theme === 'dark' 
                        ? 'bg-gray-700 text-gray-300' 
                        : 'bg-gray-100 text-gray-600',
                      "rounded border",
                      theme === 'dark' 
                        ? 'border-gray-600' 
                        : 'border-gray-200',
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
                  "text-sm font-medium",
                  theme === 'dark' 
                    ? 'text-blue-400 hover:text-blue-300' 
                    : 'text-blue-600 hover:text-blue-700',
                  "transition-colors duration-300"
                )}
              >
                Read More
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
                    d="M14 5l7 7m0 0l-7 7m7-7H3" 
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
      <div className="relative py-8">
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