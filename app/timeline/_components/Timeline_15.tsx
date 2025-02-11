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

const gradientVariants = {
  initial: { 
    opacity: 0,
    scale: 0.95,
    y: 20
  },
  animate: { 
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1]
    }
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
  category,
  tags,
  link,
  index,
  theme
}) => {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={gradientVariants}
      custom={index}
      className={clsx(
        "relative mb-12 last:mb-0",
        theme === 'dark' ? 'text-white' : 'text-gray-900'
      )}
    >
      {/* Gradient Line */}
      <div className="absolute left-0 top-0 bottom-0 w-1">
        <div className={clsx(
          "absolute inset-0",
          "bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500",
          "animate-gradient-y"
        )} />
      </div>

      {/* Content Container */}
      <div className={clsx(
        "relative ml-8 p-6 rounded-xl overflow-hidden",
        theme === 'dark' 
          ? 'bg-gray-800/90 backdrop-blur-xl' 
          : 'bg-white/90 backdrop-blur-xl',
        "border",
        theme === 'dark' ? 'border-white/10' : 'border-black/10',
        "group"
      )}>
        {/* Background Gradient */}
        <div className={clsx(
          "absolute inset-0 opacity-10 group-hover:opacity-20",
          "transition-opacity duration-500",
          "bg-[conic-gradient(at_bottom_left,_var(--tw-gradient-stops))]",
          "from-blue-500 via-purple-500 to-pink-500"
        )} />

        {/* Content */}
        <div className="relative">
          <div className="flex items-start gap-4">
            {/* Icon */}
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              className={clsx(
                "flex-shrink-0 w-12 h-12 rounded-xl",
                "flex items-center justify-center",
                "bg-gradient-to-br from-blue-500 to-purple-500",
                "text-white",
                "shadow-lg shadow-blue-500/20",
                "transform-gpu hover:shadow-xl hover:shadow-purple-500/30",
                "transition-shadow duration-300"
              )}
            >
              {icon}
            </motion.div>

            <div className="flex-1">
              {/* Date */}
              <div className={clsx(
                "inline-block px-4 py-1 mb-3 rounded-full",
                "text-sm",
                "bg-gradient-to-r from-blue-500/10 to-purple-500/10",
                "border border-blue-500/20",
                theme === 'dark' ? 'text-blue-300' : 'text-blue-700'
              )}>
                {date}
              </div>

              {/* Title */}
              <h3 className={clsx(
                "text-xl font-medium mb-2",
                "bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent"
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
                theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
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
                        "px-3 py-1 text-sm rounded-full",
                        "bg-gradient-to-r from-blue-500/10 to-purple-500/10",
                        "border border-blue-500/20",
                        theme === 'dark' ? 'text-blue-300' : 'text-blue-700',
                        "transform-gpu hover:-translate-y-0.5",
                        "transition-transform duration-300"
                      )}
                    >
                      {tag}
                    </span>
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
                    "bg-gradient-to-r from-blue-500 to-purple-500",
                    "bg-clip-text text-transparent",
                    "hover:from-blue-400 hover:to-purple-400",
                    "transition-all duration-300"
                  )}
                >
                  Discover More
                  <motion.span
                    animate={{ 
                      x: [0, 4, 0],
                      opacity: [1, 0.7, 1]
                    }}
                    transition={{ 
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    →
                  </motion.span>
                </motion.a>
              )}
            </div>
          </div>
        </div>
      </div>
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
      {/* Background Gradient */}
      <div className={clsx(
        "absolute inset-0",
        "bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))]",
        "from-blue-500/5 via-purple-500/5 to-pink-500/5"
      )} />

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