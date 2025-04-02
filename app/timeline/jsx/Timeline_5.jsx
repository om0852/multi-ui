"use client";
import React from "react";
import { motion } from "framer-motion";
import clsx from "clsx";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

const TimelineItem = ({
  title,
  description,
  date,
  icon,
  tags,
  link,
  index,
  theme
}) => {
  return (
    <motion.div
      variants={itemVariants}
      className={clsx(
        "flex gap-4 mb-10 last:mb-0",
        theme === 'dark' ? "text-white" : "text-gray-800"
      )}
    >
      {/* Left Column - Date and Line */}
      <div className="flex flex-col items-center">
        {/* Date Bubble */}
        <div className={clsx(
          "flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-center text-xs font-medium leading-tight",
          theme === 'dark' 
            ? "bg-indigo-500/20 text-indigo-300 border border-indigo-500/30" 
            : "bg-indigo-100 text-indigo-700 border border-indigo-200"
        )}>
          {date}
        </div>
        
        {/* Vertical Line */}
        <div className={clsx(
          "w-px grow mt-2",
          theme === 'dark' ? "bg-gray-700" : "bg-gray-200"
        )} />
      </div>

      {/* Right Column - Content */}
      <div className={clsx(
        "flex-1 p-5 rounded-lg",
        theme === 'dark' 
          ? "bg-gray-800/50 border border-gray-700" 
          : "bg-white border border-gray-200 shadow-sm"
      )}>
        {/* Title with Icon */}
        <div className="flex items-center gap-2 mb-3">
          {icon && (
            <span className={clsx(
              "flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full text-xs",
              theme === 'dark' 
                ? "bg-indigo-500/20 text-indigo-300" 
                : "bg-indigo-100 text-indigo-700"
            )}>
              {icon}
            </span>
          )}
          <h3 className="text-lg font-bold">{title}</h3>
        </div>

        {/* Description */}
        <p className={clsx(
          "text-sm mb-4",
          theme === 'dark' ? "text-gray-300" : "text-gray-600"
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
                  "inline-block text-xs px-2 py-1 rounded-full",
                  theme === 'dark' 
                    ? "bg-gray-700 text-gray-300" 
                    : "bg-gray-100 text-gray-700"
                )}
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Link */}
        {link && (
          <a
            href={link}
            className={clsx(
              "inline-flex items-center text-sm font-medium",
              theme === 'dark' 
                ? "text-indigo-300 hover:text-indigo-200" 
                : "text-indigo-600 hover:text-indigo-700"
            )}
          >
            <span>Read more</span>
            <svg className="ml-1 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        )}
      </div>
    </motion.div>
  );
};

const Timeline = ({
  data,
  theme = 'light'
}) => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className={clsx(
        "max-w-2xl mx-auto px-4 py-16",
        theme === 'dark' ? "bg-gray-900" : "bg-gray-50"
      )}
    >
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
    </motion.div>
  );
};

export default Timeline; 