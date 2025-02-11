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

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
    scale: 0.95
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15
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
  const isEven = index % 2 === 0;
  const isAlternate = layout === 'alternate';
  const alignRight = layout === 'right' || (isAlternate && isEven);

  return (
    <motion.div
      variants={cardVariants}
      className={clsx(
        "relative mb-16 last:mb-0",
        alignRight ? "ml-auto" : "mr-auto",
        "w-full md:w-[calc(50%-2rem)]"
      )}
    >
      {/* Card */}
      <div className={clsx(
        "relative p-6 rounded-2xl",
        theme === 'dark' 
          ? "bg-gray-800 shadow-[0_0_25px_rgba(0,0,0,0.3)]" 
          : "bg-white shadow-[0_0_25px_rgba(0,0,0,0.1)]",
        "before:absolute before:w-4 before:h-4 before:rotate-45",
        alignRight 
          ? "before:-left-2" 
          : "before:-right-2",
        theme === 'dark'
          ? "before:bg-gray-800"
          : "before:bg-white",
        "hover:transform hover:-translate-y-1 transition-transform duration-300"
      )}>
        {/* Date Badge */}
        <div className={clsx(
          "absolute top-0 px-4 py-1 rounded-full text-sm font-semibold",
          alignRight ? "-left-2" : "-right-2",
          "-top-4",
          theme === 'dark'
            ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white"
            : "bg-gradient-to-r from-blue-500 to-purple-500 text-white"
        )}>
          {date}
        </div>

        {/* Icon */}
        <div className={clsx(
          "w-12 h-12 rounded-full flex items-center justify-center mb-4",
          theme === 'dark'
            ? "bg-gray-700 text-blue-400"
            : "bg-blue-100 text-blue-600"
        )}>
          {icon || (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
          )}
        </div>

        {/* Content */}
        <div>
          {category && (
            <span className={clsx(
              "inline-block px-3 py-1 rounded-full text-xs font-medium mb-2",
              theme === 'dark'
                ? "bg-gray-700 text-gray-300"
                : "bg-gray-100 text-gray-600"
            )}>
              {category}
            </span>
          )}

          <h3 className={clsx(
            "text-xl font-bold mb-2",
            theme === 'dark' ? "text-white" : "text-gray-900"
          )}>
            {title}
          </h3>

          <p className={clsx(
            "text-sm mb-4",
            theme === 'dark' ? "text-gray-400" : "text-gray-600"
          )}>
            {description}
          </p>

          {tags && tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
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

          {link && (
            <a
              href={link}
              className={clsx(
                "inline-flex items-center text-sm font-medium",
                theme === 'dark'
                  ? "text-blue-400 hover:text-blue-300"
                  : "text-blue-600 hover:text-blue-500"
              )}
            >
              Learn more
              <svg className="w-4 h-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const Timeline: React.FC<TimelineProps> = ({
  data,
  theme = 'light',
  layout = 'alternate',
  animated = true,
}) => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className={clsx(
        "max-w-7xl mx-auto px-4 py-16",
        theme === 'dark' ? "bg-gray-900" : "bg-gray-50"
      )}
    >
      {/* Timeline Line */}
      <div className="relative">
        <div className={clsx(
          "absolute left-1/2 top-0 w-px h-full -translate-x-1/2",
          theme === 'dark' 
            ? "bg-gradient-to-b from-blue-600 via-purple-600 to-pink-600"
            : "bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500"
        )} />

        {/* Timeline Items */}
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
      </div>
    </motion.div>
  );
};

export default Timeline;
