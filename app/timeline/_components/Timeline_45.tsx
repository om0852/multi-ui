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
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className={clsx(
        "relative mb-16 pl-12",
        theme === 'dark' ? 'text-cyan-400' : 'text-cyan-600'
      )}
    >
      {/* Timeline Line */}
      <div className="absolute left-0 top-0 bottom-0 w-0.5">
        <motion.div
          animate={{ 
            boxShadow: [
              "0 0 10px #0ff, 0 0 20px #0ff",
              "0 0 20px #0ff, 0 0 40px #0ff",
              "0 0 10px #0ff, 0 0 20px #0ff"
            ]
          }}
          transition={{ duration: 2, repeat: Infinity }}
          className={clsx(
            "absolute inset-0",
            theme === 'dark' ? 'bg-cyan-400' : 'bg-cyan-500'
          )}
        />
      </div>

      {/* Node */}
      <motion.div
        animate={{ 
          scale: [1, 1.2, 1],
          boxShadow: [
            "0 0 10px #0ff",
            "0 0 20px #0ff",
            "0 0 10px #0ff"
          ]
        }}
        transition={{ duration: 2, repeat: Infinity }}
        className={clsx(
          "absolute left-0 top-0 w-8 h-8 -translate-x-1/2",
          "flex items-center justify-center",
          theme === 'dark' ? 'bg-cyan-900' : 'bg-cyan-100',
          "border border-cyan-400",
          "rounded-lg"
        )}
      >
        {icon}
      </motion.div>

      {/* Content Card */}
      <div className={clsx(
        "relative p-6 rounded-lg",
        theme === 'dark' ? 'bg-gray-900/80' : 'bg-white/80',
        "border border-cyan-500/50",
        "backdrop-blur-sm"
      )}>
        {/* Digital Rain Effect */}
        <div className="absolute inset-0 overflow-hidden opacity-10">
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={i}
              animate={{ y: ["0%", "100%"] }}
              transition={{ 
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2
              }}
              className={clsx(
                "absolute w-px h-20",
                theme === 'dark' ? 'bg-cyan-400' : 'bg-cyan-500'
              )}
              style={{ left: `${i * 10}%` }}
            />
          ))}
        </div>

        {/* Content */}
        <div className="relative">
          {/* Date */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className={clsx(
              "inline-block px-4 py-1 mb-3 rounded",
              theme === 'dark' 
                ? 'bg-cyan-900/50 text-cyan-300' 
                : 'bg-cyan-100 text-cyan-700',
              "border border-cyan-500/30"
            )}
          >
            {date}
          </motion.div>

          {/* Title */}
          <motion.h3
            animate={{ 
              textShadow: [
                "0 0 4px #0ff",
                "0 0 8px #0ff",
                "0 0 4px #0ff"
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
            className={clsx(
              "text-xl font-bold mb-2",
              theme === 'dark' ? 'text-cyan-300' : 'text-cyan-700'
            )}
          >
            {title}
          </motion.h3>

          {/* Category */}
          {category && (
            <div className={clsx(
              "text-sm mb-2",
              theme === 'dark' ? 'text-cyan-400' : 'text-cyan-600'
            )}>
              {category}
            </div>
          )}

          {/* Description */}
          <p className={clsx(
            "mb-4",
            theme === 'dark' ? 'text-cyan-300' : 'text-cyan-700'
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
                    boxShadow: "0 0 10px #0ff"
                  }}
                  className={clsx(
                    "px-3 py-1 text-sm rounded",
                    theme === 'dark' 
                      ? 'bg-cyan-900/50 text-cyan-300' 
                      : 'bg-cyan-100 text-cyan-700',
                    "border border-cyan-500/30"
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
                  ? 'text-cyan-400 hover:text-cyan-300' 
                  : 'text-cyan-600 hover:text-cyan-700'
              )}
            >
              Access Data
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1, repeat: Infinity }}
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
      {/* Grid Background */}
      <div className={clsx(
        "absolute inset-0",
        "bg-[linear-gradient(0deg,rgba(0,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.1)_1px,transparent_1px)]",
        "bg-[size:20px_20px]"
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