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
  layout?: 'left' | 'right' | 'alternate';
  animated?: boolean;
}

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    x: -20
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut"
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
  category,
  tags,
  link,
  index,
  theme,
  layout
}) => {
  return (
    <motion.div
      variants={itemVariants}
      className={clsx(
        "relative pl-8 pb-12 last:pb-0",
        theme === 'dark' ? "text-white" : "text-gray-800"
      )}
    >
      {/* Dot */}
      <div className={clsx(
        "absolute left-0 w-3 h-3 rounded-full",
        theme === 'dark' ? "bg-white" : "bg-black",
        "-translate-x-[6px]"
      )} />

      {/* Vertical Line */}
      <div className={clsx(
        "absolute left-0 top-3 w-px h-[calc(100%-12px)]",
        theme === 'dark' ? "bg-gray-700" : "bg-gray-200",
        "-translate-x-[1px]"
      )} />

      {/* Content */}
      <div className="space-y-3">
        {/* Date */}
        <div className={clsx(
          "text-sm font-mono",
          theme === 'dark' ? "text-gray-400" : "text-gray-500"
        )}>
          {date}
        </div>

        {/* Title */}
        <h3 className="text-lg font-medium">{title}</h3>

        {/* Description */}
        <p className={clsx(
          "text-sm",
          theme === 'dark' ? "text-gray-400" : "text-gray-600"
        )}>
          {description}
        </p>

        {/* Tags */}
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, i) => (
              <span
                key={i}
                className={clsx(
                  "inline-block text-xs",
                  theme === 'dark' ? "text-gray-400" : "text-gray-500"
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
            className={clsx(
              "inline-block text-sm border-b",
              theme === 'dark' 
                ? "text-white border-white hover:text-gray-300 hover:border-gray-300" 
                : "text-black border-black hover:text-gray-600 hover:border-gray-600",
              "transition-colors duration-200"
            )}
          >
            Read more
          </a>
        )}
      </div>
    </motion.div>
  );
};

const Timeline: React.FC<TimelineProps> = ({
  data,
  theme = 'light',
  layout = 'left',
  animated = true,
}) => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className={clsx(
        "max-w-2xl mx-auto px-4 py-16",
        theme === 'dark' ? "bg-gray-900" : "bg-white"
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
