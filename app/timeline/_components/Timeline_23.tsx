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
        duration: 0.5,
        delay: index * 0.2,
        ease: [0.4, 0, 0.2, 1]
      }}
      className={clsx(
        "relative mb-12 last:mb-0 pl-8",
        theme === 'dark' ? 'text-white' : 'text-gray-900'
      )}
    >
      {/* Neon Line */}
      <motion.div 
        className="absolute left-0 top-0 bottom-0 w-0.5"
        style={{
          background: 'linear-gradient(180deg, #FF1CF7, #00F0FF)',
          boxShadow: '0 0 15px rgba(255, 28, 247, 0.5), 0 0 30px rgba(0, 240, 255, 0.5)'
        }}
      >
        <motion.div
          animate={{ 
            y: [0, 100, 0],
            opacity: [0.5, 1, 0.5]
          }}
          transition={{ 
            duration: 3,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(180deg, transparent, #00F0FF, transparent)'
          }}
        />
      </motion.div>

      {/* Neon Circle */}
      <motion.div
        className={clsx(
          "absolute left-0 w-6 h-6 -translate-x-[11px]",
          "rounded-full",
          "flex items-center justify-center",
          "border-2",
          theme === 'dark' ? 'bg-gray-900' : 'bg-white',
          "overflow-hidden"
        )}
        style={{
          borderColor: '#FF1CF7',
          boxShadow: '0 0 10px rgba(255, 28, 247, 0.5), 0 0 20px rgba(255, 28, 247, 0.3)'
        }}
      >
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.5, 1, 0.5]
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="text-sm"
        >
          {icon}
        </motion.div>
      </motion.div>

      {/* Content Card */}
      <motion.div
        whileHover={{ scale: 1.02 }}
        className={clsx(
          "relative p-6 rounded-lg",
          theme === 'dark' 
            ? 'bg-gray-900/50 backdrop-blur-sm' 
            : 'bg-white/80 backdrop-blur-sm',
          "border border-transparent",
          "overflow-hidden"
        )}
        style={{
          boxShadow: theme === 'dark'
            ? '0 0 20px rgba(255, 28, 247, 0.1), 0 0 40px rgba(0, 240, 255, 0.1)'
            : '0 0 20px rgba(255, 28, 247, 0.05), 0 0 40px rgba(0, 240, 255, 0.05)'
        }}
      >
        {/* Neon Border Effect */}
        <motion.div
          animate={{ 
            background: [
              'linear-gradient(90deg, #FF1CF7, #00F0FF, #FF1CF7)',
              'linear-gradient(180deg, #FF1CF7, #00F0FF, #FF1CF7)',
              'linear-gradient(270deg, #FF1CF7, #00F0FF, #FF1CF7)',
              'linear-gradient(0deg, #FF1CF7, #00F0FF, #FF1CF7)'
            ]
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute inset-0 opacity-20"
        />

        {/* Date */}
        <div className={clsx(
          "inline-block px-3 py-1 mb-3 rounded-full text-sm",
          theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'
        )}>
          <motion.span
            animate={{ 
              color: ['#FF1CF7', '#00F0FF', '#FF1CF7']
            }}
            transition={{ 
              duration: 4,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            {date}
          </motion.span>
        </div>

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
                whileHover={{ scale: 1.1 }}
                className={clsx(
                  "px-2 py-1 text-xs rounded-full",
                  theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'
                )}
                style={{
                  textShadow: theme === 'dark' 
                    ? '0 0 5px rgba(255, 28, 247, 0.5)'
                    : 'none'
                }}
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
              "text-sm font-medium",
              theme === 'dark' ? 'text-cyan-400' : 'text-cyan-600'
            )}
            style={{
              textShadow: theme === 'dark'
                ? '0 0 5px rgba(0, 240, 255, 0.5)'
                : 'none'
            }}
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
      </motion.div>
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
      {/* Background Glow */}
      <motion.div
        animate={{ 
          opacity: [0.1, 0.2, 0.1],
          scale: [1, 1.1, 1]
        }}
        transition={{ 
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute inset-0 pointer-events-none"
        style={{
          background: theme === 'dark'
            ? 'radial-gradient(circle at 50% 50%, rgba(255, 28, 247, 0.1), rgba(0, 240, 255, 0.1), transparent)'
            : 'radial-gradient(circle at 50% 50%, rgba(255, 28, 247, 0.05), rgba(0, 240, 255, 0.05), transparent)'
        }}
      />

      {/* Timeline Items */}
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