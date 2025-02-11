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
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, rotateY: isEven ? 45 : -45, scale: 0.8 }}
      animate={{ opacity: 1, rotateY: 0, scale: 1 }}
      transition={{ 
        duration: 0.8,
        delay: index * 0.2,
        type: "spring",
        stiffness: 100
      }}
      className={clsx(
        "relative mb-16 last:mb-0",
        "perspective-1000"
      )}
    >
      {/* 3D Card */}
      <div className={clsx(
        "relative p-6 rounded-xl",
        theme === 'dark' 
          ? 'bg-gray-800 shadow-[0_0_15px_rgba(255,255,255,0.1)]' 
          : 'bg-white shadow-[0_0_15px_rgba(0,0,0,0.1)]',
        "transform-gpu preserve-3d hover:scale-[1.02] transition-transform duration-300",
        "group"
      )}>
        {/* 3D Elements */}
        <div className="absolute inset-0 transform-gpu preserve-3d">
          {/* Top Edge */}
          <div className={clsx(
            "absolute top-0 left-0 right-0 h-1 transform-gpu -translate-y-full",
            theme === 'dark' ? 'bg-gray-700' : 'bg-gray-200',
            "origin-bottom rotateX(90deg)"
          )} />
          
          {/* Bottom Edge */}
          <div className={clsx(
            "absolute bottom-0 left-0 right-0 h-1 transform-gpu translate-y-full",
            theme === 'dark' ? 'bg-gray-700' : 'bg-gray-200',
            "origin-top rotateX(-90deg)"
          )} />
        </div>

        {/* Icon with 3D Effect */}
        <motion.div
          whileHover={{ rotateY: 180 }}
          className={clsx(
            "absolute -top-8 left-6",
            "w-16 h-16 rounded-xl",
            theme === 'dark' ? 'bg-gray-700' : 'bg-gray-100',
            "flex items-center justify-center",
            "transform-gpu preserve-3d transition-transform duration-500",
            "shadow-lg"
          )}
        >
          <div className="absolute inset-0 backface-hidden">
            <div className="flex items-center justify-center h-full text-2xl">
              {icon}
            </div>
          </div>
          <div className={clsx(
            "absolute inset-0 backface-hidden transform-gpu rotateY(180deg)",
            "flex items-center justify-center",
            "text-sm font-bold",
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          )}>
            {category || 'Event'}
          </div>
        </motion.div>

        {/* Content */}
        <div className="ml-2">
          {/* Date */}
          <div className={clsx(
            "inline-block px-4 py-1 rounded-full text-sm mb-3",
            theme === 'dark' ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-600',
            "transform-gpu translate-z-2"
          )}>
            {date}
          </div>

          {/* Title */}
          <h3 className={clsx(
            "text-xl font-bold mb-2",
            theme === 'dark' ? 'text-white' : 'text-gray-900',
            "transform-gpu translate-z-4"
          )}>
            {title}
          </h3>

          {/* Description */}
          <p className={clsx(
            "text-base mb-4",
            theme === 'dark' ? 'text-gray-300' : 'text-gray-600',
            "transform-gpu translate-z-2"
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
                    "px-3 py-1 text-xs rounded-full",
                    theme === 'dark' ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-600',
                    "transform-gpu translate-z-2"
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
              whileHover={{ x: 5, z: 10 }}
              className={clsx(
                "inline-flex items-center space-x-2",
                "text-sm font-medium",
                theme === 'dark' ? 'text-blue-400' : 'text-blue-600',
                "transform-gpu translate-z-2"
              )}
            >
              <span>View Details</span>
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
        </div>
      </div>
    </motion.div>
  );
};

const Timeline: React.FC<TimelineProps> = ({
  data,
  theme = 'light',
}) => {
  return (
    <div className={clsx(
      "max-w-4xl mx-auto px-4 py-16",
      theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'
    )}>
      <div className="relative pt-10">
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