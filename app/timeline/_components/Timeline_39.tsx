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
        duration: 0.8,
        delay: index * 0.2,
        ease: [0.43, 0.13, 0.23, 0.96]
      }}
      className={clsx(
        "relative mb-16 pl-16",
        theme === 'dark' ? 'text-pink-100' : 'text-pink-900'
      )}
    >
      {/* Timeline Line with Neon Effect */}
      <div className="absolute left-0 top-0 bottom-0 w-1">
        <motion.div
          animate={{ 
            boxShadow: [
              "0 0 10px #FF1493, 0 0 20px #FF1493, 0 0 30px #FF1493",
              "0 0 15px #FF1493, 0 0 25px #FF1493, 0 0 35px #FF1493",
              "0 0 10px #FF1493, 0 0 20px #FF1493, 0 0 30px #FF1493"
            ]
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            ease: "linear"
          }}
          className={clsx(
            "absolute inset-0",
            theme === 'dark' ? 'bg-pink-500' : 'bg-pink-400'
          )}
        />
      </div>

      {/* Node with Neon Pulse */}
      <div className="absolute left-0 top-0">
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            boxShadow: [
              "0 0 10px #FF1493, 0 0 20px #FF1493",
              "0 0 20px #FF1493, 0 0 30px #FF1493",
              "0 0 10px #FF1493, 0 0 20px #FF1493"
            ]
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className={clsx(
            "w-10 h-10 -translate-x-1/2",
            "flex items-center justify-center rounded-full",
            theme === 'dark' 
              ? 'bg-pink-900 text-pink-200' 
              : 'bg-pink-100 text-pink-700',
            "border-2",
            theme === 'dark' ? 'border-pink-500' : 'border-pink-400'
          )}
        >
          {icon}
        </motion.div>
      </div>

      {/* Content Card with Retro Wave Style */}
      <div className={clsx(
        "relative p-6 rounded-lg",
        theme === 'dark' 
          ? 'bg-gradient-to-br from-purple-900/80 via-pink-900/80 to-indigo-900/80' 
          : 'bg-gradient-to-br from-purple-100 via-pink-100 to-indigo-100',
        "border border-pink-500/30",
        "backdrop-blur-sm"
      )}>
        {/* Grid Background */}
        <div className={clsx(
          "absolute inset-0 rounded-lg",
          "bg-[linear-gradient(0deg,rgba(255,20,147,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,20,147,0.1)_1px,transparent_1px)]",
          "bg-[size:20px_20px]",
          "opacity-20"
        )} />

        {/* Content */}
        <div className="relative">
          {/* Date Badge */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className={clsx(
              "inline-block px-4 py-1 mb-3 rounded",
              theme === 'dark' 
                ? 'bg-pink-900/50 text-pink-200' 
                : 'bg-pink-100 text-pink-700',
              "border border-pink-500/30"
            )}
          >
            {date}
          </motion.div>

          {/* Title with Neon Effect */}
          <motion.h3
            animate={{ 
              textShadow: [
                "0 0 4px #FF1493",
                "0 0 8px #FF1493",
                "0 0 4px #FF1493"
              ]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              ease: "linear"
            }}
            className={clsx(
              "text-xl font-bold mb-2",
              theme === 'dark' ? 'text-pink-200' : 'text-pink-800'
            )}
          >
            {title}
          </motion.h3>

          {/* Category */}
          {category && (
            <div className={clsx(
              "text-sm mb-2",
              theme === 'dark' ? 'text-pink-300' : 'text-pink-600'
            )}>
              {category}
            </div>
          )}

          {/* Description */}
          <p className={clsx(
            "mb-4",
            theme === 'dark' ? 'text-pink-300' : 'text-pink-700'
          )}>
            {description}
          </p>

          {/* Tags */}
          {tags && tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {tags.map((tag, i) => (
                <motion.span
                  key={i}
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 0 10px #FF1493"
                  }}
                  className={clsx(
                    "px-3 py-1 text-sm rounded",
                    theme === 'dark' 
                      ? 'bg-pink-900/50 text-pink-200' 
                      : 'bg-pink-100 text-pink-700',
                    "border border-pink-500/30"
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
                theme === 'dark' 
                  ? 'text-pink-300 hover:text-pink-200' 
                  : 'text-pink-600 hover:text-pink-700'
              )}
            >
              Explore
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ 
                  duration: 1,
                  repeat: Infinity,
                  ease: "linear"
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
}) => {
  return (
    <div className={clsx(
      "relative max-w-3xl mx-auto p-8",
      theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'
    )}>
      {/* Retro Wave Background */}
      <div className={clsx(
        "absolute inset-0",
        "bg-gradient-to-b",
        theme === 'dark'
          ? 'from-purple-900 via-pink-900 to-indigo-900'
          : 'from-purple-100 via-pink-100 to-indigo-100'
      )}>
        {/* Sun Effect */}
        <div className={clsx(
          "absolute bottom-0 left-1/2 -translate-x-1/2",
          "w-96 h-48",
          "bg-gradient-to-t",
          theme === 'dark'
            ? 'from-pink-500/20 to-transparent'
            : 'from-pink-300/20 to-transparent',
          "rounded-full blur-2xl"
        )} />

        {/* Grid Lines */}
        <div className={clsx(
          "absolute inset-0",
          "bg-[linear-gradient(0deg,rgba(255,20,147,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,20,147,0.1)_1px,transparent_1px)]",
          "bg-[size:40px_40px]",
          "perspective-1000"
        )} />
      </div>

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