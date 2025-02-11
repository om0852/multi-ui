"use client";
import React from "react";
import { motion, Variants } from "framer-motion";
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

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 50,
    rotateX: 45,
    scale: 0.9
  },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    rotateX: 0,
    scale: 1,
    transition: {
      delay: i * 0.15,
      duration: 0.5,
      type: "spring",
      stiffness: 100
    }
  })
};

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
      custom={index}
      variants={itemVariants}
      whileHover={{ 
        scale: 1.02,
        rotateX: 5,
        transition: { duration: 0.2 }
      }}
      className={clsx(
        "relative p-6 rounded-xl",
        "transform-gpu perspective-1000",
        theme === 'dark' 
          ? 'bg-gray-800/40 backdrop-blur-lg border border-gray-700/50'
          : 'bg-white/40 backdrop-blur-lg border border-gray-200/50',
        "shadow-lg hover:shadow-2xl transition-all duration-300",
        "before:absolute before:inset-0 before:rounded-xl",
        theme === 'dark'
          ? 'before:bg-gradient-to-br before:from-purple-500/10 before:to-blue-500/10'
          : 'before:bg-gradient-to-br before:from-purple-500/5 before:to-blue-500/5',
        "before:pointer-events-none"
      )}
    >
      {/* Floating Orb */}
      <div className={clsx(
        "absolute -top-3 -right-3 w-6 h-6 rounded-full",
        "animate-pulse",
        theme === 'dark'
          ? 'bg-purple-500/30 shadow-lg shadow-purple-500/20'
          : 'bg-purple-400/30 shadow-lg shadow-purple-400/20'
      )} />

      {/* Icon */}
      <div className={clsx(
        "relative w-12 h-12 rounded-lg mb-4",
        "flex items-center justify-center",
        theme === 'dark' 
          ? 'bg-gray-700/50 text-purple-400'
          : 'bg-gray-100/50 text-purple-500'
      )}>
        {icon || (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
        )}
      </div>

      {/* Date */}
      <time className={clsx(
        "inline-block px-3 py-1 text-xs font-mono mb-2 rounded-full",
        theme === 'dark'
          ? 'bg-gray-700/50 text-gray-300'
          : 'bg-gray-100/50 text-gray-600'
      )}>
        {date}
      </time>

      {/* Title */}
      <h3 className={clsx(
        "text-xl font-bold mb-2",
        theme === 'dark' ? 'text-white' : 'text-gray-900'
      )}>
        {title}
      </h3>

      {/* Description */}
      <p className={clsx(
        "text-sm mb-4",
        theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
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
                "px-2 py-1 text-xs font-medium rounded-full",
                theme === 'dark'
                  ? 'bg-gray-700/50 text-gray-300'
                  : 'bg-gray-100/50 text-gray-600'
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
            "inline-flex items-center space-x-1 text-sm font-medium",
            theme === 'dark' ? 'text-purple-400' : 'text-purple-500',
            "hover:underline"
          )}
        >
          <span>Learn more</span>
          <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </a>
      )}
    </motion.div>
  );
};

const Timeline: React.FC<TimelineProps> = ({
  data,
  theme = 'light',
  animated = true,
}) => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className={clsx(
        "max-w-7xl mx-auto px-4 py-16",
        theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'
      )}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
