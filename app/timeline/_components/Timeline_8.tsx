"use client";

import React, { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
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
  const itemRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: itemRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8]);
  const rotate = useTransform(scrollYProgress, [0, 1], [10, -10]);

  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={itemRef}
      style={{
        opacity,
        scale,
        y: isEven ? y : useTransform(y, (value) => -value)
      }}
      className={clsx(
        "relative mb-32 last:mb-0",
        isEven ? "ml-[5%]" : "ml-[15%]"
      )}
    >
      {/* Background Shapes */}
      <motion.div
        style={{ rotate }}
        className={clsx(
          "absolute -inset-4 rounded-2xl opacity-10",
          theme === 'dark' ? 'bg-blue-500' : 'bg-blue-200'
        )}
      />

      {/* Content Card */}
      <div className={clsx(
        "relative p-6 rounded-xl",
        theme === 'dark' 
          ? 'bg-gray-800 shadow-[0_0_30px_rgba(0,0,0,0.3)]' 
          : 'bg-white shadow-[0_0_30px_rgba(0,0,0,0.1)]',
        "transform-gpu hover:scale-[1.02] transition-transform duration-300"
      )}>
        {/* Icon */}
        <motion.div
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.5 }}
          className={clsx(
            "absolute -top-6 left-6",
            "w-12 h-12 rounded-xl",
            theme === 'dark' ? 'bg-gray-700' : 'bg-gray-100',
            "flex items-center justify-center",
            "shadow-lg"
          )}
        >
          {icon}
        </motion.div>

        {/* Content */}
        <div className="ml-2 mt-4">
          {/* Date */}
          <div className={clsx(
            "inline-block px-4 py-1 rounded-full text-sm mb-3",
            theme === 'dark' ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-600'
          )}>
            {date}
          </div>

          {/* Title */}
          <h3 className={clsx(
            "text-xl font-bold mb-2",
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          )}>
            {title}
          </h3>

          {/* Description */}
          <p className={clsx(
            "text-base mb-4",
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
                  whileHover={{ scale: 1.1 }}
                  className={clsx(
                    "px-3 py-1 text-xs rounded-full",
                    theme === 'dark' ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-600'
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
                "inline-flex items-center space-x-2",
                "text-sm font-medium",
                theme === 'dark' ? 'text-blue-400' : 'text-blue-600'
              )}
            >
              <span>Explore</span>
              <motion.svg 
                className="w-4 h-4" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
                whileHover={{ x: 3 }}
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M14 5l7 7m0 0l-7 7m7-7H3" 
                />
              </motion.svg>
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
      "max-w-5xl mx-auto px-4 py-16",
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