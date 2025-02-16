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

const bubbleVariants = {
  initial: { scale: 0.8, opacity: 0 },
  animate: { 
    scale: 1, 
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15
    }
  },
  hover: { 
    scale: 1.05,
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  }
};

const floatingAnimation = {
  y: [-5, 5],
  transition: {
    duration: 2,
    repeat: Infinity,
    repeatType: "reverse" as const,
    ease: "easeInOut"
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
      whileHover="hover"
      variants={bubbleVariants}
      custom={index}
      className={clsx(
        "relative mb-12 last:mb-0",
        theme === 'dark' ? 'text-white' : 'text-gray-900'
      )}
    >
      {/* Background Bubbles */}
      <motion.div 
        animate={floatingAnimation}
        className="absolute -z-10 w-full h-full"
      >
        <div className={clsx(
          "absolute -top-4 -right-4 w-24 h-24 rounded-full opacity-20",
          theme === 'dark' ? 'bg-blue-400' : 'bg-blue-300'
        )} />
        <div className={clsx(
          "absolute -bottom-4 -left-4 w-16 h-16 rounded-full opacity-20",
          theme === 'dark' ? 'bg-purple-400' : 'bg-purple-300'
        )} />
      </motion.div>

      {/* Main Content Bubble */}
      <div className={clsx(
        "relative p-6 rounded-3xl",
        theme === 'dark' 
          ? 'bg-gray-800/80 backdrop-blur-lg' 
          : 'bg-white/80 backdrop-blur-lg',
        "border",
        theme === 'dark' ? 'border-white/10' : 'border-black/10',
        "shadow-lg"
      )}>
        <div className="flex items-start gap-4">
          {/* Icon Bubble */}
          <motion.div
            whileHover={{ scale: 1.1, rotate: 10 }}
            className={clsx(
              "flex-shrink-0 w-14 h-14 rounded-full",
              "flex items-center justify-center",
              theme === 'dark' 
                ? 'bg-gray-700 text-white' 
                : 'bg-gray-100 text-gray-900',
              "shadow-lg",
              "border-2",
              theme === 'dark' ? 'border-white/10' : 'border-black/10',
              "relative"
            )}
          >
            {/* Icon Shine Effect */}
            <div className={clsx(
              "absolute inset-0 rounded-full",
              "bg-gradient-to-br",
              theme === 'dark' 
                ? 'from-white/20 to-transparent' 
                : 'from-black/10 to-transparent'
            )} />
            <div className="relative">
              {icon}
            </div>
          </motion.div>

          <div className="flex-1">
            {/* Date Bubble */}
            <motion.div
              animate={floatingAnimation}
              className={clsx(
                "inline-block px-4 py-1 mb-3 rounded-full",
                theme === 'dark' 
                  ? 'bg-gray-700/80 text-gray-300' 
                  : 'bg-gray-100/80 text-gray-600',
                "text-sm",
                "backdrop-blur-sm"
              )}
            >
              {date}
            </motion.div>

            {/* Title */}
            <h3 className={clsx(
              "text-xl font-medium mb-2",
              theme === 'dark' ? 'text-white/90' : 'text-gray-900'
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
                  <motion.span
                    key={i}
                    animate={floatingAnimation}
                    className={clsx(
                      "px-3 py-1 text-sm rounded-full",
                      theme === 'dark' 
                        ? 'bg-gray-700/80 text-gray-300' 
                        : 'bg-gray-100/80 text-gray-600',
                      "backdrop-blur-sm",
                      "border",
                      theme === 'dark' ? 'border-white/10' : 'border-black/10'
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
                  theme === 'dark' 
                    ? 'text-blue-400 hover:text-blue-300' 
                    : 'text-blue-600 hover:text-blue-700',
                  "transition-colors duration-300"
                )}
              >
                Explore
                <motion.span
                  animate={{ x: [0, 3, 0] }}
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
          </div>
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
      "relative max-w-3xl mx-auto p-8",
      theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'
    )}>
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5" />

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