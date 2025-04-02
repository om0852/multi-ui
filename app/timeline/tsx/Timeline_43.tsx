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
              "0 0 10px #ff00ff, 0 0 20px #ff00ff",
              "0 0 20px #ff00ff, 0 0 40px #ff00ff",
              "0 0 10px #ff00ff, 0 0 20px #ff00ff"
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

      {/* Node with Synthwave Sun Effect */}
      <div className="absolute left-0 top-0">
        <motion.div
          animate={{ 
            boxShadow: [
              "0 0 20px #ff00ff, inset 0 0 10px #ff00ff",
              "0 0 40px #ff00ff, inset 0 0 20px #ff00ff",
              "0 0 20px #ff00ff, inset 0 0 10px #ff00ff"
            ]
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            ease: "linear"
          }}
          className={clsx(
            "w-10 h-10 -translate-x-1/2",
            "flex items-center justify-center rounded-full",
            theme === 'dark' 
              ? 'bg-gradient-to-br from-pink-500 to-purple-500' 
              : 'bg-gradient-to-br from-pink-400 to-purple-400'
          )}
        >
          {icon}
        </motion.div>
      </div>

      {/* Content Card with Synthwave Style */}
      <div className={clsx(
        "relative p-6 rounded-lg overflow-hidden",
        theme === 'dark' 
          ? 'bg-gradient-to-br from-purple-900/80 to-pink-900/80' 
          : 'bg-gradient-to-br from-purple-50/90 to-pink-50/90',
        "backdrop-blur-sm",
        "border border-pink-500/30"
      )}>
        {/* Grid Background */}
        <div className={clsx(
          "absolute inset-0",
          "bg-[linear-gradient(0deg,rgba(255,0,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,0,255,0.1)_1px,transparent_1px)]",
          "bg-[size:20px_20px]",
          "perspective-1000"
        )}>
          <motion.div
            animate={{ 
              transform: [
                "perspective(1000px) rotateX(60deg) translateY(0%)",
                "perspective(1000px) rotateX(60deg) translateY(100%)"
              ]
            }}
            transition={{ 
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute inset-0"
          />
        </div>

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
                "0 0 4px #ff00ff, 0 0 8px #ff00ff",
                "0 0 8px #ff00ff, 0 0 16px #ff00ff",
                "0 0 4px #ff00ff, 0 0 8px #ff00ff"
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
                    boxShadow: "0 0 15px #ff00ff"
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
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 0 20px #ff00ff"
              }}
              className={clsx(
                "inline-flex items-center gap-2",
                "px-4 py-1 rounded",
                theme === 'dark'
                  ? 'bg-gradient-to-r from-pink-500/20 to-purple-500/20 text-pink-200'
                  : 'bg-gradient-to-r from-pink-400/20 to-purple-400/20 text-pink-700',
                "border border-pink-500/30"
              )}
            >
              Explore
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ 
                  duration: 1.5,
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
      {/* Synthwave Background */}
      <div className={clsx(
        "absolute inset-0",
        "bg-gradient-to-b",
        theme === 'dark'
          ? 'from-purple-900 via-pink-900 to-purple-900'
          : 'from-purple-50 via-pink-50 to-purple-50'
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
          "bg-[linear-gradient(0deg,rgba(255,0,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,0,255,0.1)_1px,transparent_1px)]",
          "bg-[size:40px_40px]",
          "perspective-1000"
        )}>
          <motion.div
            animate={{ 
              transform: [
                "perspective(1000px) rotateX(60deg) translateY(0%)",
                "perspective(1000px) rotateX(60deg) translateY(100%)"
              ]
            }}
            transition={{ 
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute inset-0"
          />
        </div>
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