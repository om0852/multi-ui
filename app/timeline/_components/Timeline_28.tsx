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
        "relative mb-8 pl-8",
        theme === 'dark' ? 'text-green-400' : 'text-emerald-600'
      )}
    >
      {/* Timeline Line */}
      <div className={clsx(
        "absolute left-0 top-0 bottom-0 w-2",
        theme === 'dark' ? 'bg-green-900' : 'bg-emerald-200',
        "border-2 border-dashed",
        theme === 'dark' ? 'border-green-700' : 'border-emerald-400'
      )}>
        <motion.div
          animate={{ 
            y: [0, 100],
            opacity: [0, 1, 0]
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            ease: "steps(4)"
          }}
          className={clsx(
            "w-full h-4",
            theme === 'dark' ? 'bg-green-400' : 'bg-emerald-500'
          )}
        />
      </div>

      {/* Node */}
      <motion.div
        animate={{ 
          scale: [1, 1.2, 1],
          rotate: [0, 90, 180, 270, 360]
        }}
        transition={{ 
          duration: 2,
          repeat: Infinity,
          ease: "steps(5)"
        }}
        className={clsx(
          "absolute left-0 w-6 h-6 -translate-x-2",
          theme === 'dark' ? 'bg-green-400' : 'bg-emerald-500',
          "border-2",
          theme === 'dark' ? 'border-green-700' : 'border-emerald-600'
        )}
      >
        {icon && (
          <span className="flex items-center justify-center h-full text-xs">
            {icon}
          </span>
        )}
      </motion.div>

      {/* Content Card */}
      <div className={clsx(
        "p-4",
        theme === 'dark' ? 'bg-gray-900' : 'bg-white',
        "border-2",
        theme === 'dark' ? 'border-green-700' : 'border-emerald-500',
        "shadow-[4px_4px_0px_0px]",
        theme === 'dark' ? 'shadow-green-700' : 'shadow-emerald-500'
      )}>
        {/* Date Badge */}
        <div className={clsx(
          "inline-block px-3 py-1 mb-2",
          theme === 'dark' ? 'bg-green-900 text-green-400' : 'bg-emerald-100 text-emerald-700',
          "border-2",
          theme === 'dark' ? 'border-green-700' : 'border-emerald-500'
        )}>
          <motion.span
            animate={{ opacity: [1, 0.5, 1] }}
            transition={{ duration: 1, repeat: Infinity, ease: "steps(3)" }}
          >
            {date}
          </motion.span>
        </div>

        {/* Title */}
        <h3 className={clsx(
          "text-xl font-bold mb-2 font-mono",
          theme === 'dark' ? 'text-green-400' : 'text-emerald-700'
        )}>
          {title}
        </h3>

        {/* Category */}
        {category && (
          <div className={clsx(
            "text-sm mb-2 font-mono",
            theme === 'dark' ? 'text-green-500' : 'text-emerald-600'
          )}>
            [CATEGORY: {category}]
          </div>
        )}

        {/* Description */}
        <p className={clsx(
          "mb-4 font-mono",
          theme === 'dark' ? 'text-green-300' : 'text-emerald-600'
        )}>
          {description}
        </p>

        {/* Tags */}
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag, i) => (
              <motion.span
                key={i}
                whileHover={{ scale: 1.1 }}
                className={clsx(
                  "px-2 py-1 text-sm font-mono",
                  theme === 'dark' 
                    ? 'bg-green-900 text-green-400 border-green-700' 
                    : 'bg-emerald-100 text-emerald-700 border-emerald-500',
                  "border-2"
                )}
              >
                &lt;{tag}&gt;
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
              "inline-flex items-center gap-2 font-mono",
              theme === 'dark' ? 'text-green-400' : 'text-emerald-600'
            )}
          >
            [PRESS START]
            <motion.span
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 1, repeat: Infinity, ease: "steps(2)" }}
            >
              →
            </motion.span>
          </motion.a>
        )}
      </div>
    </motion.div>
  );
};

const Timeline: React.FC<TimelineProps> = ({
  data,
  theme = 'light',
}) => {
  return (
    <div className={clsx(
      "relative max-w-3xl mx-auto p-8",
      theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'
    )}>
      {/* Background Grid */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(to right, ${theme === 'dark' ? '#22c55e' : '#059669'} 1px, transparent 1px),
            linear-gradient(to bottom, ${theme === 'dark' ? '#22c55e' : '#059669'} 1px, transparent 1px)
          `,
          backgroundSize: '20px 20px'
        }}
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