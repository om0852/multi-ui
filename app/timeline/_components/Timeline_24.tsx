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
        duration: 0.8,
        delay: index * 0.3,
        ease: [0.34, 1.56, 0.64, 1]
      }}
      className={clsx(
        "relative mb-16 last:mb-0 pl-10",
        theme === 'dark' ? 'text-blue-50' : 'text-blue-900'
      )}
    >
      {/* Liquid Line */}
      <div className="absolute left-0 top-0 bottom-0 w-1">
        <motion.div 
          animate={{ 
            background: [
              "linear-gradient(180deg, #60A5FA, #3B82F6, #2563EB)",
              "linear-gradient(180deg, #3B82F6, #2563EB, #60A5FA)",
              "linear-gradient(180deg, #2563EB, #60A5FA, #3B82F6)"
            ]
          }}
          transition={{ 
            duration: 3,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute inset-0 rounded-full"
          style={{
            filter: 'blur(1px)'
          }}
        />
      </div>

      {/* Liquid Bubble */}
      <motion.div
        animate={{ 
          scale: [1, 1.1, 1],
          rotate: [0, 5, -5, 0]
        }}
        transition={{ 
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className={clsx(
          "absolute left-0 top-0 -translate-x-[14px]",
          "w-8 h-8 rounded-full",
          "flex items-center justify-center",
          "overflow-hidden",
          theme === 'dark' ? 'bg-blue-900' : 'bg-blue-100'
        )}
        style={{
          boxShadow: theme === 'dark'
            ? '0 0 20px rgba(59, 130, 246, 0.3)'
            : '0 0 20px rgba(59, 130, 246, 0.2)'
        }}
      >
        {/* Liquid Wave Effect */}
        <motion.div
          animate={{ 
            y: [0, -10, 0],
            scaleY: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute inset-x-0 bottom-0 h-1/2"
          style={{
            background: theme === 'dark'
              ? 'linear-gradient(to bottom, transparent, rgba(59, 130, 246, 0.3))'
              : 'linear-gradient(to bottom, transparent, rgba(59, 130, 246, 0.2))'
          }}
        />
        <span className="relative text-sm z-10">{icon}</span>
      </motion.div>

      {/* Content Card */}
      <motion.div
        whileHover={{ scale: 1.02 }}
        className={clsx(
          "relative p-6 rounded-2xl overflow-hidden",
          theme === 'dark' 
            ? 'bg-blue-900/20 backdrop-blur-sm' 
            : 'bg-blue-50/80 backdrop-blur-sm',
          "border border-blue-200/20"
        )}
        style={{
          boxShadow: theme === 'dark'
            ? '0 8px 32px rgba(30, 58, 138, 0.2)'
            : '0 8px 32px rgba(59, 130, 246, 0.1)'
        }}
      >
        {/* Liquid Background Effect */}
        <motion.div
          animate={{ 
            scale: [1, 1.1, 1],
            rotate: [0, 2, -2, 0],
            opacity: [0.05, 0.1, 0.05]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute inset-0 pointer-events-none"
          style={{
            background: theme === 'dark'
              ? 'radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.3), transparent)'
              : 'radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.2), transparent)'
          }}
        />

        {/* Date */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className={clsx(
            "inline-block px-4 py-1 mb-3 rounded-full",
            theme === 'dark' 
              ? 'bg-blue-900/30 text-blue-200' 
              : 'bg-blue-100 text-blue-700'
          )}
        >
          {date}
        </motion.div>

        {/* Title */}
        <h3 className={clsx(
          "text-xl font-semibold mb-2",
          theme === 'dark' ? 'text-blue-100' : 'text-blue-900'
        )}>
          {title}
        </h3>

        {/* Category */}
        {category && (
          <div className={clsx(
            "text-sm mb-2 italic",
            theme === 'dark' ? 'text-blue-300' : 'text-blue-600'
          )}>
            {category}
          </div>
        )}

        {/* Description */}
        <p className={clsx(
          "mb-4",
          theme === 'dark' ? 'text-blue-200' : 'text-blue-700'
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
                  "px-3 py-1 text-sm rounded-full",
                  theme === 'dark' 
                    ? 'bg-blue-900/30 text-blue-200' 
                    : 'bg-blue-100 text-blue-700'
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
              "text-sm font-medium",
              theme === 'dark' ? 'text-blue-300' : 'text-blue-600'
            )}
          >
            Explore More
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ 
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              →
            </motion.span>
          </motion.a>
        )}
      </motion.div>
    </motion.div>
  );
};

const Timeline: React.FC<TimelineProps> = ({
  data,
  theme = 'light'
}) => {
  return (
    <div className={clsx(
      "relative max-w-3xl mx-auto p-8",
      theme === 'dark' ? 'bg-blue-950' : 'bg-blue-50'
    )}>
      {/* Background Wave Effect */}
      <motion.div
        animate={{ 
          backgroundPosition: ['0% 0%', '100% 100%'],
          scale: [1, 1.05, 1]
        }}
        transition={{ 
          duration: 10,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          background: theme === 'dark'
            ? 'radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.3), transparent)'
            : 'radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.2), transparent)',
          backgroundSize: '200% 200%'
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