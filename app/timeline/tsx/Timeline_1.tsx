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
}

interface TimelineProps {
  data: TimelineItemProps[];
  theme?: 'light' | 'dark';
  layout?: 'left' | 'right' | 'alternate';
}

const itemVariants: Variants = {
  hidden: (isEven) => ({
    opacity: 0,
    x: isEven ? 50 : -50,
  }),
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

const iconVariants: Variants = {
  hidden: {
    scale: 0,
    opacity: 0,
  },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      delay: 0.2,
      duration: 0.3,
      ease: "backOut"
    }
  }
};

const TimelineItem: React.FC<TimelineItemProps & { 
  index: number; 
  theme: 'light' | 'dark';
  layout: 'left' | 'right' | 'alternate';
}> = ({
  title,
  description,
  date,
  icon,
  tags,
  link,
  index,
  theme,
  layout
}) => {
  const isEven = index % 2 === 0;
  const isAlternate = layout === 'alternate';
  const alignRight = layout === 'right' || (isAlternate && isEven);

  return (
    <motion.div
      custom={isEven}
      variants={itemVariants}
      className={clsx(
        "relative flex items-center gap-8 mb-12",
        alignRight ? "flex-row" : "flex-row-reverse",
        theme === 'dark' ? "text-white" : "text-gray-800"
      )}
    >
      {/* Connector Line */}
      <div className={clsx(
        "absolute left-1/2 top-0 w-0.5 h-full -translate-x-1/2",
        theme === 'dark' ? "bg-gray-700" : "bg-gray-200"
      )} />

      {/* Content */}
      <div className={clsx(
        "flex-1 relative",
        alignRight ? "text-right" : "text-left"
      )}>
        <motion.div
          className={clsx(
            "p-6 rounded-xl shadow-lg",
            theme === 'dark' 
              ? "bg-gray-800 hover:bg-gray-700" 
              : "bg-white hover:bg-gray-50",
            "transition-all duration-300 ease-in-out",
            "hover:shadow-xl transform hover:-translate-y-1"
          )}
        >
          {tags && tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-3">
              {tags.map((tag, i) => (
                <span
                  key={i}
                  className={clsx(
                    "px-2 py-1 rounded-md text-xs",
                    theme === 'dark' 
                      ? "bg-gray-700 text-gray-300" 
                      : "bg-gray-100 text-gray-600"
                  )}
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
          
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className={clsx(
            "text-sm mb-3",
            theme === 'dark' ? "text-gray-400" : "text-gray-600"
          )}>
            {description}
          </p>
          
          <time className={clsx(
            "text-sm font-medium",
            theme === 'dark' ? "text-gray-400" : "text-gray-500"
          )}>
            {date}
          </time>

          {link && (
            <a
              href={link}
              className={clsx(
                "inline-block mt-3 text-sm font-medium",
                theme === 'dark' 
                  ? "text-blue-400 hover:text-blue-300" 
                  : "text-blue-600 hover:text-blue-500"
              )}
            >
              Learn more →
            </a>
          )}
        </motion.div>
      </div>

      {/* Icon */}
      <motion.div
        variants={iconVariants}
        className={clsx(
          "w-12 h-12 rounded-full flex items-center justify-center z-10",
          theme === 'dark' 
            ? "bg-gray-700 text-blue-400" 
            : "bg-white text-blue-600",
          "shadow-lg",
          "border-4",
          theme === 'dark' ? "border-gray-800" : "border-white"
        )}
      >
        {icon || (
          <svg
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
        )}
      </motion.div>
    </motion.div>
  );
};

const Timeline: React.FC<TimelineProps> = ({
  data,
  theme = 'light',
  layout = 'alternate'
}) => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className={clsx(
        "max-w-6xl mx-auto px-4 py-12",
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
            layout={layout}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default Timeline;
