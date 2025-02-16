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
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.5,
        delay: index * 0.2,
        ease: "steps(5)"
      }}
      className={clsx(
        "relative mb-8 last:mb-0",
        "border-2 border-dashed",
        theme === 'dark' ? 'border-green-400' : 'border-green-600',
        "p-4"
      )}
    >
      {/* Pixel Corner Accents */}
      <div className="absolute top-0 left-0 w-2 h-2 bg-green-400" />
      <div className="absolute top-0 right-0 w-2 h-2 bg-green-400" />
      <div className="absolute bottom-0 left-0 w-2 h-2 bg-green-400" />
      <div className="absolute bottom-0 right-0 w-2 h-2 bg-green-400" />

      <div className="flex items-start gap-4">
        {/* Icon Container */}
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 0.5, repeat: Infinity, ease: "steps(3)" }}
          className={clsx(
            "flex-shrink-0 w-12 h-12",
            "border-2",
            theme === 'dark' ? 'border-green-400 bg-gray-800' : 'border-green-600 bg-white',
            "flex items-center justify-center"
          )}
        >
          {icon}
        </motion.div>

        <div className="flex-1">
          {/* Date Badge */}
          <div className={clsx(
            "inline-block px-3 py-1 mb-2",
            "border-2",
            theme === 'dark' ? 'border-green-400 text-green-400' : 'border-green-600 text-green-600',
            "text-sm font-bold"
          )}>
            [{date}]
          </div>

          {/* Title */}
          <h3 className={clsx(
            "text-xl font-bold mb-2",
            theme === 'dark' ? 'text-green-400' : 'text-green-600'
          )}>
            {title}
          </h3>

          {/* Category */}
          {category && (
            <div className={clsx(
              "text-sm mb-2",
              theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
            )}>
              &lt;{category}&gt;
            </div>
          )}

          {/* Description */}
          <p className={clsx(
            "mb-3",
            theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
          )}>
            {description}
          </p>

          {/* Tags */}
          {tags && tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-3">
              {tags.map((tag, i) => (
                <span
                  key={i}
                  className={clsx(
                    "px-2 py-1 text-xs",
                    "border",
                    theme === 'dark' 
                      ? 'border-green-400 text-green-400' 
                      : 'border-green-600 text-green-600'
                  )}
                >
                  [#{tag}]
                </span>
              ))}
            </div>
          )}

          {/* Link */}
          {link && (
            <motion.a
              href={link}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={clsx(
                "inline-flex items-center gap-2",
                "px-4 py-1",
                "border-2",
                theme === 'dark' 
                  ? 'border-green-400 text-green-400 hover:bg-green-400 hover:text-gray-900' 
                  : 'border-green-600 text-green-600 hover:bg-green-600 hover:text-white',
                "transition-colors duration-200"
              )}
            >
              PRESS START
              <span className="animate-pulse">▶</span>
            </motion.a>
          )}
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
      "max-w-4xl mx-auto p-8",
      theme === 'dark' ? 'bg-gray-900' : 'bg-gray-100',
      "border-4 border-double",
      theme === 'dark' ? 'border-green-400' : 'border-green-600'
    )}>
      {/* CRT Screen Effect */}
      <div className="relative">
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-transparent to-black opacity-10" />
        <div className="absolute inset-0 pointer-events-none bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyIiBoZWlnaHQ9IjIiPjxyZWN0IHdpZHRoPSIyIiBoZWlnaHQ9IjIiIGZpbGw9IiMwMDAiIGZpbGwtb3BhY2l0eT0iMC4wNSIvPjwvc3ZnPg==')] opacity-50" />

        {/* Timeline Items */}
        <div className="relative space-y-4">
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
    </div>
  );
};

export default Timeline; 