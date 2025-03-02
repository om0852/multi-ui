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
        duration: 0.5,
        delay: index * 0.2,
        ease: [0.16, 1, 0.3, 1]
      }}
      className={clsx(
        "relative mb-16 pl-12",
        theme === 'dark' ? 'text-sky-300' : 'text-sky-600'
      )}
    >
      {/* Data Stream Line */}
      <div className="absolute left-0 top-0 bottom-0 w-0.5">
        <motion.div
          animate={{ 
            background: [
              "linear-gradient(to bottom, #0ea5e9, #0284c7, #0369a1)",
              "linear-gradient(to bottom, #0284c7, #0369a1, #0ea5e9)",
              "linear-gradient(to bottom, #0369a1, #0ea5e9, #0284c7)"
            ]
          }}
          transition={{ duration: 3, repeat: Infinity }}
          className="absolute inset-0"
        />
        
        {/* Data Particles */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            animate={{ 
              y: [0, "100%"],
              opacity: [0, 1, 0]
            }}
            transition={{ 
              duration: 2,
              delay: i * 0.6,
              repeat: Infinity
            }}
            className={clsx(
              "absolute w-2 h-2",
              theme === 'dark' ? 'bg-sky-400' : 'bg-sky-500',
              "rounded-full blur-[1px]"
            )}
          />
        ))}
      </div>

      {/* Holographic Node */}
      <motion.div
        animate={{ 
          boxShadow: [
            "0 0 20px rgba(14,165,233,0.3)",
            "0 0 40px rgba(14,165,233,0.5)",
            "0 0 20px rgba(14,165,233,0.3)"
          ]
        }}
        transition={{ duration: 2, repeat: Infinity }}
        className={clsx(
          "absolute left-0 top-0 w-8 h-8 -translate-x-1/2",
          "flex items-center justify-center",
          theme === 'dark' ? 'bg-sky-900' : 'bg-sky-100',
          "rounded-lg",
          "border border-sky-500/50",
          "backdrop-blur-sm"
        )}
      >
        {icon}
      </motion.div>

      {/* Content Card */}
      <div className={clsx(
        "relative p-6 rounded-lg",
        theme === 'dark' 
          ? 'bg-gray-900/80' 
          : 'bg-white/80',
        "backdrop-blur-md",
        "border border-sky-500/30",
        "before:absolute before:inset-0 before:bg-gradient-to-r",
        theme === 'dark'
          ? 'before:from-sky-500/5 before:to-blue-500/5'
          : 'before:from-sky-500/5 before:to-blue-500/5',
        "before:rounded-lg"
      )}>
        {/* Holographic Display */}
        <div className="absolute inset-0 overflow-hidden rounded-lg">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              animate={{ 
                y: ["0%", "100%"],
                opacity: [0, 0.3, 0]
              }}
              transition={{ 
                duration: 3 + i,
                delay: i * 0.5,
                repeat: Infinity
              }}
              className={clsx(
                "absolute w-full h-1",
                theme === 'dark' ? 'bg-sky-500/10' : 'bg-sky-600/10'
              )}
              style={{ top: `${i * 20}%` }}
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
                ? 'bg-sky-900/50 text-sky-300' 
                : 'bg-sky-100 text-sky-700',
              "border border-sky-500/30"
            )}
          >
            <span className="font-mono">{date}</span>
          </motion.div>

          {/* Title */}
          <h3 className={clsx(
            "text-xl font-bold mb-2",
            theme === 'dark' ? 'text-sky-300' : 'text-sky-700'
          )}>
            {title}
          </h3>

          {/* Category */}
          {category && (
            <div className={clsx(
              "text-sm mb-2",
              theme === 'dark' ? 'text-sky-400' : 'text-sky-600'
            )}>
              {category}
            </div>
          )}

          {/* Description */}
          <p className={clsx(
            "mb-4",
            theme === 'dark' ? 'text-sky-300' : 'text-sky-700'
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
                    boxShadow: "0 0 15px rgba(14,165,233,0.5)"
                  }}
                  className={clsx(
                    "px-3 py-1 text-sm rounded",
                    theme === 'dark' 
                      ? 'bg-sky-900/50 text-sky-300' 
                      : 'bg-sky-100 text-sky-700',
                    "border border-sky-500/30"
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
                  ? 'text-sky-400 hover:text-sky-300' 
                  : 'text-sky-600 hover:text-sky-700'
              )}
            >
              View Details
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
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
      {/* Holographic Background */}
      <motion.div
        animate={{ 
          opacity: [0.1, 0.2, 0.1],
          scale: [1, 1.1, 1]
        }}
        transition={{ duration: 5, repeat: Infinity }}
        className={clsx(
          "absolute inset-0",
          "bg-gradient-to-br",
          theme === 'dark'
            ? 'from-sky-500/10 via-blue-500/5 to-transparent'
            : 'from-sky-500/5 via-blue-500/5 to-transparent'
        )}
      />

      {/* Grid Lines */}
      <div className={clsx(
        "absolute inset-0",
        "bg-[linear-gradient(0deg,rgba(14,165,233,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(14,165,233,0.1)_1px,transparent_1px)]",
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