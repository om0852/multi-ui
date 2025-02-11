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
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ 
        duration: 0.8,
        delay: index * 0.2,
        ease: [0.4, 0, 0.2, 1]
      }}
      className={clsx(
        "relative mb-12 pl-16",
        theme === 'dark' ? 'text-amber-300' : 'text-amber-700'
      )}
    >
      {/* Timeline Line */}
      <div className={clsx(
        "absolute left-6 top-0 bottom-0 w-1",
        theme === 'dark' ? 'bg-amber-800' : 'bg-amber-300',
        "border-l border-r",
        theme === 'dark' ? 'border-amber-600' : 'border-amber-500'
      )}>
        <motion.div
          animate={{ 
            y: [0, 100],
            opacity: [0, 1, 0]
          }}
          transition={{ 
            duration: 3,
            repeat: Infinity,
            ease: "linear"
          }}
          className={clsx(
            "absolute w-3 h-12 -left-1",
            theme === 'dark' 
              ? 'bg-gradient-to-b from-amber-500 via-amber-400 to-transparent'
              : 'bg-gradient-to-b from-amber-600 via-amber-500 to-transparent'
          )}
        />
      </div>

      {/* Gears */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ 
          duration: 10,
          repeat: Infinity,
          ease: "linear"
        }}
        className={clsx(
          "absolute left-0 top-0 w-12 h-12",
          theme === 'dark' ? 'text-amber-500' : 'text-amber-600'
        )}
      >
        <svg viewBox="0 0 24 24" className="w-full h-full">
          <path
            fill="currentColor"
            d="M12,15.5A3.5,3.5 0 0,1 8.5,12A3.5,3.5 0 0,1 12,8.5A3.5,3.5 0 0,1 15.5,12A3.5,3.5 0 0,1 12,15.5M19.43,12.97C19.47,12.65 19.5,12.33 19.5,12C19.5,11.67 19.47,11.34 19.43,11L21.54,9.37C21.73,9.22 21.78,8.95 21.66,8.73L19.66,5.27C19.54,5.05 19.27,4.96 19.05,5.05L16.56,6.05C16.04,5.66 15.5,5.32 14.87,5.07L14.5,2.42C14.46,2.18 14.25,2 14,2H10C9.75,2 9.54,2.18 9.5,2.42L9.13,5.07C8.5,5.32 7.96,5.66 7.44,6.05L4.95,5.05C4.73,4.96 4.46,5.05 4.34,5.27L2.34,8.73C2.21,8.95 2.27,9.22 2.46,9.37L4.57,11C4.53,11.34 4.5,11.67 4.5,12C4.5,12.33 4.53,12.65 4.57,12.97L2.46,14.63C2.27,14.78 2.21,15.05 2.34,15.27L4.34,18.73C4.46,18.95 4.73,19.03 4.95,18.95L7.44,17.94C7.96,18.34 8.5,18.68 9.13,18.93L9.5,21.58C9.54,21.82 9.75,22 10,22H14C14.25,22 14.46,21.82 14.5,21.58L14.87,18.93C15.5,18.67 16.04,18.34 16.56,17.94L19.05,18.95C19.27,19.03 19.54,18.95 19.66,18.73L21.66,15.27C21.78,15.05 21.73,14.78 21.54,14.63L19.43,12.97Z"
          />
        </svg>
      </motion.div>

      {/* Content Card */}
      <div className={clsx(
        "relative p-6 rounded-lg",
        theme === 'dark' 
          ? 'bg-gradient-to-br from-amber-950 to-amber-900' 
          : 'bg-gradient-to-br from-amber-50 to-amber-100',
        "border-2",
        theme === 'dark' ? 'border-amber-700' : 'border-amber-500',
        "shadow-[4px_4px_0px_0px]",
        theme === 'dark' ? 'shadow-amber-800' : 'shadow-amber-400'
      )}>
        {/* Rivets */}
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className={clsx(
              "absolute w-3 h-3 rounded-full",
              theme === 'dark' ? 'bg-amber-600' : 'bg-amber-500',
              "border",
              theme === 'dark' ? 'border-amber-400' : 'border-amber-600',
              i === 0 && "top-2 left-2",
              i === 1 && "top-2 right-2",
              i === 2 && "bottom-2 left-2",
              i === 3 && "bottom-2 right-2"
            )}
          />
        ))}

        {/* Date Badge */}
        <div className={clsx(
          "relative inline-block px-4 py-1 mb-3",
          theme === 'dark' 
            ? 'bg-amber-900 text-amber-300' 
            : 'bg-amber-200 text-amber-800',
          "border-2",
          theme === 'dark' ? 'border-amber-600' : 'border-amber-500',
          "rounded-sm"
        )}>
          <motion.div
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="font-serif"
          >
            {date}
          </motion.div>
        </div>

        {/* Title */}
        <h3 className={clsx(
          "text-xl font-bold mb-2 font-serif",
          theme === 'dark' ? 'text-amber-300' : 'text-amber-800'
        )}>
          {title}
        </h3>

        {/* Category */}
        {category && (
          <div className={clsx(
            "text-sm mb-2 italic font-serif",
            theme === 'dark' ? 'text-amber-400' : 'text-amber-700'
          )}>
            {category}
          </div>
        )}

        {/* Description */}
        <p className={clsx(
          "mb-4 font-serif",
          theme === 'dark' ? 'text-amber-200' : 'text-amber-700'
        )}>
          {description}
        </p>

        {/* Tags */}
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag, i) => (
              <motion.span
                key={i}
                whileHover={{ scale: 1.05 }}
                className={clsx(
                  "px-3 py-1 text-sm font-serif",
                  theme === 'dark' 
                    ? 'bg-amber-900 text-amber-300 border-amber-600' 
                    : 'bg-amber-100 text-amber-800 border-amber-500',
                  "border rounded-sm"
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
            whileHover={{ scale: 1.05 }}
            className={clsx(
              "inline-flex items-center gap-2 font-serif",
              theme === 'dark' ? 'text-amber-300' : 'text-amber-700'
            )}
          >
            Explore Further
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.span>
          </motion.a>
        )}
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
      theme === 'dark' ? 'bg-amber-950' : 'bg-amber-50'
    )}>
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            radial-gradient(circle at 1px 1px, ${theme === 'dark' ? '#fcd34d' : '#92400e'} 1px, transparent 0)
          `,
          backgroundSize: '20px 20px'
        }}
      />

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