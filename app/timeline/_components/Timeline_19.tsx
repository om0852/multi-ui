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
        duration: 0.6,
        delay: index * 0.2,
        ease: [0.34, 1.56, 0.64, 1]
      }}
      className={clsx(
        "relative mb-12 last:mb-0 pl-8",
        theme === 'dark' ? 'text-emerald-50' : 'text-emerald-900'
      )}
    >
      {/* Vine Line */}
      <div className="absolute left-0 top-0 bottom-0 w-px">
        <motion.div 
          animate={{ 
            background: [
              "linear-gradient(to bottom, #059669, #10B981, #34D399)",
              "linear-gradient(to bottom, #10B981, #34D399, #059669)",
              "linear-gradient(to bottom, #34D399, #059669, #10B981)"
            ]
          }}
          transition={{ 
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute inset-0"
        />
      </div>

      {/* Leaf Node */}
      <div className="absolute left-0 top-0 -translate-x-1/2">
        <motion.div
          whileHover={{ rotate: 45 }}
          className={clsx(
            "w-6 h-6",
            "flex items-center justify-center",
            "rounded-full",
            theme === 'dark' 
              ? 'bg-emerald-800 text-emerald-200' 
              : 'bg-emerald-100 text-emerald-700',
            "border-2 border-emerald-500",
            "transform-gpu transition-transform duration-300",
            "before:absolute before:inset-0 before:rounded-full",
            "before:bg-gradient-to-br before:from-emerald-400/20 before:to-transparent"
          )}
        >
          {icon}
        </motion.div>
      </div>

      {/* Content Card */}
      <div className={clsx(
        "relative p-6 rounded-2xl overflow-hidden",
        theme === 'dark' 
          ? 'bg-emerald-900/30 backdrop-blur-sm' 
          : 'bg-emerald-50/80 backdrop-blur-sm',
        "border border-emerald-500/20",
        "group"
      )}>
        {/* Organic Shape Background */}
        <div className={clsx(
          "absolute inset-0 opacity-10 group-hover:opacity-20",
          "transition-opacity duration-500",
          "bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))]",
          "from-emerald-400 via-emerald-500 to-emerald-600"
        )} />

        {/* Content */}
        <div className="relative">
          {/* Date */}
          <div className={clsx(
            "inline-block px-4 py-1 mb-3 rounded-full",
            "text-sm",
            theme === 'dark' 
              ? 'bg-emerald-800/50 text-emerald-200' 
              : 'bg-emerald-100 text-emerald-700',
            "border border-emerald-500/20"
          )}>
            {date}
          </div>

          {/* Title */}
          <h3 className={clsx(
            "text-xl font-medium mb-2",
            theme === 'dark' ? 'text-emerald-200' : 'text-emerald-800'
          )}>
            {title}
          </h3>

          {/* Category */}
          {category && (
            <div className={clsx(
              "text-sm mb-2",
              theme === 'dark' ? 'text-emerald-400' : 'text-emerald-600'
            )}>
              {category}
            </div>
          )}

          {/* Description */}
          <p className={clsx(
            "mb-4",
            theme === 'dark' ? 'text-emerald-300' : 'text-emerald-700'
          )}>
            {description}
          </p>

          {/* Tags */}
          {tags && tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {tags.map((tag, i) => (
                <motion.span
                  key={i}
                  whileHover={{ y: -2 }}
                  className={clsx(
                    "px-3 py-1 text-sm rounded-full",
                    theme === 'dark' 
                      ? 'bg-emerald-800/50 text-emerald-200' 
                      : 'bg-emerald-100 text-emerald-700',
                    "border border-emerald-500/20",
                    "transform-gpu transition-colors duration-300"
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
                  ? 'text-emerald-400 hover:text-emerald-300' 
                  : 'text-emerald-600 hover:text-emerald-700',
                "transition-colors duration-300"
              )}
            >
              Learn More
              <motion.span
                animate={{ 
                  x: [0, 4, 0],
                  y: [0, -2, 0]
                }}
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
      theme === 'dark' ? 'bg-emerald-950' : 'bg-emerald-50'
    )}>
      {/* Nature Pattern Background */}
      <div className={clsx(
        "absolute inset-0",
        "bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))]",
        theme === 'dark'
          ? 'from-emerald-900/50 via-emerald-950 to-emerald-950'
          : 'from-emerald-100/50 via-emerald-50 to-emerald-50'
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