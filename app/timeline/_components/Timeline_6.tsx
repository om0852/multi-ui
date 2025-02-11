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
  const gradientColors = [
    'from-blue-500 to-purple-500',
    'from-purple-500 to-pink-500',
    'from-pink-500 to-red-500',
    'from-red-500 to-orange-500',
    'from-orange-500 to-yellow-500'
  ];

  const currentGradient = gradientColors[index % gradientColors.length];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.5,
        delay: index * 0.2,
        ease: [0.43, 0.13, 0.23, 0.96]
      }}
      className="relative mb-12 last:mb-0"
    >
      {/* Gradient Line */}
      <div className={clsx(
        "absolute top-0 left-6 w-1 h-full",
        "bg-gradient-to-b",
        currentGradient,
        "rounded-full"
      )} />

      {/* Content Container */}
      <div className={clsx(
        "ml-16 p-6 rounded-xl",
        theme === 'dark' 
          ? 'bg-gray-800/50 backdrop-blur-sm' 
          : 'bg-white/50 backdrop-blur-sm',
        "border border-gray-200/10",
        "hover:transform hover:scale-[1.02] transition-all duration-300",
        "group"
      )}>
        {/* Icon */}
        <div className={clsx(
          "absolute left-3 -translate-y-1/2",
          "w-6 h-6 rounded-full",
          "flex items-center justify-center",
          "bg-gradient-to-br",
          currentGradient,
          "text-white",
          "transform transition-transform duration-300",
          "group-hover:scale-125"
        )}>
          {icon}
        </div>

        {/* Date */}
        <div className={clsx(
          "inline-block px-3 py-1 rounded-full text-sm mb-3",
          "bg-gradient-to-r",
          currentGradient,
          "text-white font-medium"
        )}>
          {date}
        </div>

        {/* Title */}
        <h3 className={clsx(
          "text-xl font-bold mb-2",
          theme === 'dark' ? 'text-white' : 'text-gray-900'
        )}>
          {title}
        </h3>

        {/* Description */}
        <p className={clsx(
          "text-base mb-4",
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
                  "px-2 py-1 text-xs rounded-full",
                  "bg-gradient-to-r",
                  currentGradient,
                  "text-white font-medium",
                  "opacity-75"
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
              "inline-flex items-center space-x-2",
              "text-sm font-medium",
              theme === 'dark' ? 'text-white' : 'text-gray-900',
              "hover:opacity-75 transition-opacity"
            )}
          >
            <span>Learn more</span>
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
                d="M9 5l7 7-7 7" 
              />
            </svg>
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
      "max-w-4xl mx-auto px-4 py-16",
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