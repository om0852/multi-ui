"use client";
import React from "react";
import { motion, Variants } from "framer-motion";
import clsx from "clsx";

interface TimelineItemProps {
  title: string;
  description: string;
  date: string;
  icon?: React.ReactNode;
  tags?: string[];
  link?: string;
  color?: string;
}

interface TimelineProps {
  data: TimelineItemProps[];
  theme?: 'light' | 'dark';
}

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.9
  },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: i * 0.1,
      duration: 0.3,
      ease: "easeOut"
    }
  })
};

const colors = {
  red: {
    bg: 'bg-red-500',
    text: 'text-red-500',
    hover: 'hover:bg-red-600',
    border: 'border-red-500'
  },
  blue: {
    bg: 'bg-blue-500',
    text: 'text-blue-500',
    hover: 'hover:bg-blue-600',
    border: 'border-blue-500'
  },
  green: {
    bg: 'bg-green-500',
    text: 'text-green-500',
    hover: 'hover:bg-green-600',
    border: 'border-green-500'
  },
  purple: {
    bg: 'bg-purple-500',
    text: 'text-purple-500',
    hover: 'hover:bg-purple-600',
    border: 'border-purple-500'
  },
  yellow: {
    bg: 'bg-yellow-500',
    text: 'text-yellow-500',
    hover: 'hover:bg-yellow-600',
    border: 'border-yellow-500'
  }
};

const TimelineItem: React.FC<TimelineItemProps & { 
  index: number; 
  theme: 'light' | 'dark';
}> = ({
  title,
  description,
  date,
  icon,
  tags,
  link,
  color = 'blue',
  index,
  theme
}) => {
  const colorClasses = colors[color as keyof typeof colors];

  return (
    <motion.div
      custom={index}
      variants={itemVariants}
      className={clsx(
        "group relative p-6 rounded-lg",
        theme === 'dark' ? 'bg-gray-800' : 'bg-white',
        "hover:shadow-xl transition-shadow duration-300",
        "border-l-4",
        colorClasses.border
      )}
    >
      {/* Metro Corner */}
      <div className={clsx(
        "absolute top-0 right-0 w-8 h-8",
        colorClasses.bg,
        "transition-all duration-300 group-hover:w-full group-hover:h-full group-hover:opacity-10"
      )} />

      {/* Icon */}
      <div className={clsx(
        "relative w-12 h-12 rounded-lg mb-4",
        theme === 'dark' ? 'bg-gray-700' : 'bg-gray-100',
        "flex items-center justify-center",
        colorClasses.text
      )}>
        {icon || (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
        )}
      </div>

      {/* Date */}
      <time className={clsx(
        "inline-block px-2 py-1 text-xs font-mono mb-2",
        theme === 'dark' ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-600'
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
                "px-2 py-1 text-xs font-medium rounded",
                theme === 'dark' ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-600'
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
            colorClasses.text,
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
  theme = 'light'
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((item, index) => (
          <TimelineItem
            key={index}
            {...item}
            color={['red', 'blue', 'green', 'purple', 'yellow'][index % 5] as string}
            index={index}
            theme={theme}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default Timeline;
