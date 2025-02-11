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
      transition={{ 
        duration: 0.6,
        delay: index * 0.2,
        ease: [0.43, 0.13, 0.23, 0.96]
      }}
      className={clsx(
        "relative mb-16 pl-12",
        theme === 'dark' ? 'text-white' : 'text-gray-900'
      )}
    >
      {/* Timeline Line */}
      <div className="absolute left-0 top-0 bottom-0 w-1">
        <motion.div
          animate={{ 
            background: [
              "linear-gradient(to bottom, #ec4899, #8b5cf6)",
              "linear-gradient(to bottom, #8b5cf6, #3b82f6)",
              "linear-gradient(to bottom, #3b82f6, #ec4899)"
            ]
          }}
          transition={{ 
            duration: 3,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute inset-0"
        />
      </div>

      {/* Node */}
      <motion.div
        animate={{ 
          scale: [1, 1.2, 1],
          background: [
            "linear-gradient(45deg, #ec4899, #8b5cf6)",
            "linear-gradient(45deg, #8b5cf6, #3b82f6)",
            "linear-gradient(45deg, #3b82f6, #ec4899)"
          ]
        }}
        transition={{ 
          duration: 3,
          repeat: Infinity,
          ease: "linear"
        }}
        className={clsx(
          "absolute left-0 top-0 w-8 h-8 -translate-x-1/2",
          "flex items-center justify-center",
          "rounded-full",
          "text-white"
        )}
      >
        {icon}
      </motion.div>

      {/* Content Card */}
      <div className={clsx(
        "relative p-6 rounded-lg overflow-hidden",
        theme === 'dark' 
          ? 'bg-gray-900/80' 
          : 'bg-white/80',
        "backdrop-blur-sm",
        "border border-gray-200/20"
      )}>
        {/* Gradient Background */}
        <motion.div
          animate={{ 
            opacity: [0.1, 0.2, 0.1],
            background: [
              "linear-gradient(45deg, #ec489920, #8b5cf620)",
              "linear-gradient(45deg, #8b5cf620, #3b82f620)",
              "linear-gradient(45deg, #3b82f620, #ec489920)"
            ]
          }}
          transition={{ 
            duration: 3,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute inset-0"
        />

        {/* Content */}
        <div className="relative">
          {/* Date */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className={clsx(
              "inline-block px-4 py-1 mb-3 rounded-full",
              theme === 'dark' 
                ? 'bg-gray-800 text-white' 
                : 'bg-gray-100 text-gray-900',
              "border border-gray-700/20"
            )}
          >
            {date}
          </motion.div>

          {/* Title */}
          <h3 className={clsx(
            "text-xl font-bold mb-2",
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
            theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
          )}>
            {description}
          </p>

          {/* Tags */}
          {tags && tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {tags.map((tag, i) => (
                <motion.span
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  className={clsx(
                    "px-3 py-1 text-sm rounded-full",
                    theme === 'dark' 
                      ? 'bg-gray-800 text-white' 
                      : 'bg-gray-100 text-gray-900',
                    "border border-gray-700/20"
                  )}
                >
                  {tag}
                </motion.span>
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
                theme === 'dark' 
                  ? 'text-white hover:text-gray-300' 
                  : 'text-gray-900 hover:text-gray-700'
              )}
            >
              View Details
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </motion.a>
          )}
        </div>
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
      theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'
    )}>
      {/* Gradient Background */}
      <motion.div
        animate={{ 
          background: [
            "radial-gradient(circle at top left, #ec489910, transparent 70%)",
            "radial-gradient(circle at top right, #8b5cf610, transparent 70%)",
            "radial-gradient(circle at bottom right, #3b82f610, transparent 70%)",
            "radial-gradient(circle at bottom left, #ec489910, transparent 70%)"
          ]
        }}
        transition={{ 
          duration: 10,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute inset-0"
      />

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