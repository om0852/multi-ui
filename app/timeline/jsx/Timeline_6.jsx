"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";

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
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className={clsx(
      "relative pl-8 pb-10 last:pb-0",
      theme === 'dark' ? "text-white" : "text-gray-800"
    )}>
      {/* Dot */}
      <motion.div 
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: index * 0.1, duration: 0.3 }}
        className={clsx(
          "absolute left-0 w-4 h-4 rounded-full -translate-x-[8px] z-10",
          theme === 'dark' ? "bg-indigo-500" : "bg-indigo-600"
        )} 
      />

      {/* Vertical Line */}
      <motion.div 
        initial={{ height: 0 }}
        animate={{ height: "100%" }}
        transition={{ delay: index * 0.1, duration: 0.5 }}
        className={clsx(
          "absolute top-0 left-0 w-px -translate-x-[6px]",
          theme === 'dark' ? "bg-gray-700" : "bg-gray-300"
        )} 
      />

      {/* Date */}
      <div className={clsx(
        "text-sm font-semibold mb-2",
        theme === 'dark' ? "text-indigo-300" : "text-indigo-600"
      )}>
        {date}
      </div>

      {/* Content Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.1 + 0.2, duration: 0.4 }}
        className={clsx(
          "rounded-lg overflow-hidden cursor-pointer",
          theme === 'dark' ? "bg-gray-800" : "bg-white",
          theme === 'dark' ? "shadow-[0_4px_20px_rgba(0,0,0,0.3)]" : "shadow-[0_4px_20px_rgba(0,0,0,0.1)]"
        )}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {/* Header */}
        <div className={clsx(
          "p-4 flex items-center gap-3",
          isExpanded && (theme === 'dark' ? "border-b border-gray-700" : "border-b border-gray-200")
        )}>
          {/* Icon */}
          {icon && (
            <div className={clsx(
              "flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center",
              theme === 'dark' ? "bg-gray-700" : "bg-gray-100"
            )}>
              <span className="text-lg">{icon}</span>
            </div>
          )}
          
          {/* Title */}
          <h3 className="text-lg font-bold flex-1">{title}</h3>
          
          {/* Expand Icon */}
          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            className={clsx(
              "w-6 h-6 flex items-center justify-center rounded-full",
              theme === 'dark' ? "bg-gray-700" : "bg-gray-100"
            )}
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="16" 
              height="16" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </motion.div>
        </div>

        {/* Expandable Content */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="p-4">
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
                    onClick={(e) => e.stopPropagation()}
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
      theme === 'dark' ? "bg-gray-900" : "bg-white"
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