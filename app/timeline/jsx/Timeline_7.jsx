"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";

const TimelineItem = ({
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
  const [isExpanded, setIsExpanded] = useState(false);
  
  // Determine category color
  const getCategoryColor = (category) => {
    if (!category) return theme === 'dark' ? 'border-gray-700' : 'border-gray-200';
    
    const categoryColors = {
      work: theme === 'dark' ? 'border-blue-500' : 'border-blue-500',
      education: theme === 'dark' ? 'border-green-500' : 'border-green-500',
      project: theme === 'dark' ? 'border-purple-500' : 'border-purple-500',
      achievement: theme === 'dark' ? 'border-yellow-500' : 'border-yellow-500',
      personal: theme === 'dark' ? 'border-red-500' : 'border-red-500',
    };
    
    return categoryColors[category.toLowerCase()] || (theme === 'dark' ? 'border-gray-700' : 'border-gray-200');
  };

  const categoryColor = getCategoryColor(category);
  
  return (
    <div className="mb-12 last:mb-0">
      {/* Date */}
      <div className={clsx(
        "mb-3 font-mono text-sm",
        theme === 'dark' ? "text-gray-400" : "text-gray-500"
      )}>
        {date}
      </div>
      
      {/* Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: index * 0.1 }}
        className={clsx(
          "rounded-lg border-l-4 overflow-hidden",
          categoryColor,
          theme === 'dark' 
            ? "bg-gray-800 shadow-lg" 
            : "bg-white shadow-md"
        )}
      >
        {/* Header - Always visible */}
        <div 
          className="p-4 cursor-pointer"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              {/* Icon */}
              {icon && (
                <div className={clsx(
                  "flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center",
                  theme === 'dark' ? "bg-gray-700" : "bg-gray-100"
                )}>
                  <span className="text-sm">{icon}</span>
                </div>
              )}
              
              {/* Title */}
              <h3 className={clsx(
                "font-bold",
                theme === 'dark' ? "text-white" : "text-gray-900"
              )}>
                {title}
              </h3>
            </div>
            
            {/* Category Badge */}
            {category && (
              <span className={clsx(
                "px-2 py-1 text-xs rounded-full",
                theme === 'dark'
                  ? "bg-gray-700 text-gray-300"
                  : "bg-gray-100 text-gray-700"
              )}>
                {category}
              </span>
            )}
          </div>
          
          {/* Preview of description */}
          <p className={clsx(
            "mt-2 text-sm line-clamp-2",
            theme === 'dark' ? "text-gray-400" : "text-gray-600"
          )}>
            {description}
          </p>
          
          {/* Expand/Collapse button */}
          <button 
            className={clsx(
              "mt-2 text-xs flex items-center",
              theme === 'dark' ? "text-gray-400" : "text-gray-500"
            )}
          >
            {isExpanded ? "Show less" : "Show more"}
            <motion.svg
              animate={{ rotate: isExpanded ? 180 : 0 }}
              className="ml-1 w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </motion.svg>
          </button>
        </div>
        
        {/* Expandable Content */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className={clsx(
                "px-4 pb-4 border-t",
                theme === 'dark' ? "border-gray-700" : "border-gray-200"
              )}
            >
              {/* Tags */}
              {tags && tags.length > 0 && (
                <div className="pt-3 flex flex-wrap gap-2 mb-3">
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
                      #{tag}
                    </span>
                  ))}
                </div>
              )}
              
              {/* Link */}
              {link && (
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={clsx(
                    "inline-flex items-center text-sm font-medium",
                    theme === 'dark' 
                      ? "text-blue-400 hover:text-blue-300" 
                      : "text-blue-600 hover:text-blue-700"
                  )}
                >
                  View details
                  <svg className="ml-1 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

const Timeline = ({
  data,
  theme = 'light'
}) => {
  return (
    <div className={clsx(
      "max-w-2xl mx-auto px-4 py-16",
      theme === 'dark' ? "bg-gray-900" : "bg-gray-50"
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