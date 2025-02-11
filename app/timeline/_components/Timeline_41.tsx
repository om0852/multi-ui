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
        duration: 0.8,
        delay: index * 0.2,
        ease: [0.43, 0.13, 0.23, 0.96]
      }}
      className={clsx(
        "relative mb-16 pl-16",
        theme === 'dark' ? 'text-violet-100' : 'text-violet-900'
      )}
    >
      {/* Timeline Line with Crystal Effect */}
      <div className="absolute left-0 top-0 bottom-0 w-1">
        <motion.div
          animate={{ 
            background: [
              "linear-gradient(180deg, rgba(139,92,246,0.5) 0%, rgba(168,85,247,0.5) 50%, rgba(139,92,246,0.5) 100%)",
              "linear-gradient(180deg, rgba(168,85,247,0.5) 0%, rgba(139,92,246,0.5) 50%, rgba(168,85,247,0.5) 100%)",
              "linear-gradient(180deg, rgba(139,92,246,0.5) 0%, rgba(168,85,247,0.5) 50%, rgba(139,92,246,0.5) 100%)"
            ]
          }}
          transition={{ 
            duration: 3,
            repeat: Infinity,
            ease: "linear"
          }}
          className={clsx(
            "absolute inset-0",
            "backdrop-blur-sm",
            theme === 'dark' ? 'bg-violet-500/30' : 'bg-violet-400/30',
            "border-l border-r border-violet-500/30"
          )}
        />
      </div>

      {/* Node with Prism Effect */}
      <div className="absolute left-0 top-0">
        <motion.div
          animate={{ 
            rotate: [0, 360],
            boxShadow: [
              "0 0 20px rgba(139,92,246,0.3), inset 0 0 10px rgba(139,92,246,0.3)",
              "0 0 30px rgba(168,85,247,0.3), inset 0 0 15px rgba(168,85,247,0.3)",
              "0 0 20px rgba(139,92,246,0.3), inset 0 0 10px rgba(139,92,246,0.3)"
            ]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          }}
          className={clsx(
            "w-10 h-10 -translate-x-1/2",
            "flex items-center justify-center",
            "bg-gradient-to-br from-violet-500/20 to-purple-500/20",
            "backdrop-blur-md",
            "border border-violet-500/30",
            "transform-style-preserve-3d"
          )}
          style={{
            clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)"
          }}
        >
          {icon}
        </motion.div>
      </div>

      {/* Content Card with Crystal Effect */}
      <div className={clsx(
        "relative p-6 rounded-lg overflow-hidden",
        theme === 'dark' 
          ? 'bg-gradient-to-br from-violet-900/30 to-purple-900/30' 
          : 'bg-gradient-to-br from-violet-50/80 to-purple-50/80',
        "backdrop-blur-md",
        "border border-violet-500/20"
      )}>
        {/* Prismatic Reflections */}
        <div className="absolute inset-0">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              animate={{ 
                opacity: [0.1, 0.3, 0.1],
                rotate: [0, 360],
                scale: [1, 1.2, 1]
              }}
              transition={{ 
                duration: 8,
                repeat: Infinity,
                ease: "linear",
                delay: i * 2
              }}
              className={clsx(
                "absolute w-full h-full",
                "bg-gradient-to-br from-violet-500/5 via-purple-500/5 to-fuchsia-500/5",
                "mix-blend-overlay"
              )}
              style={{
                clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                transform: `rotate(${i * 60}deg)`
              }}
            />
          ))}
        </div>

        {/* Content */}
        <div className="relative">
          {/* Date Badge */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className={clsx(
              "inline-block px-4 py-1 mb-3 rounded",
              theme === 'dark' 
                ? 'bg-violet-900/50 text-violet-200' 
                : 'bg-violet-100 text-violet-700',
              "backdrop-blur-sm",
              "border border-violet-500/20"
            )}
          >
            {date}
          </motion.div>

          {/* Title with Rainbow Effect */}
          <motion.h3
            animate={{ 
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
            }}
            transition={{ 
              duration: 5,
              repeat: Infinity,
              ease: "linear"
            }}
            className={clsx(
              "text-xl font-bold mb-2",
              "bg-gradient-to-r from-violet-400 via-purple-400 to-fuchsia-400",
              "bg-clip-text text-transparent",
              "bg-[size:200%]"
            )}
          >
            {title}
          </motion.h3>

          {/* Category */}
          {category && (
            <div className={clsx(
              "text-sm mb-2",
              theme === 'dark' ? 'text-violet-300' : 'text-violet-600'
            )}>
              {category}
            </div>
          )}

          {/* Description */}
          <p className={clsx(
            "mb-4",
            theme === 'dark' ? 'text-violet-300' : 'text-violet-700'
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
                    boxShadow: "0 0 15px rgba(139,92,246,0.3)"
                  }}
                  className={clsx(
                    "px-3 py-1 text-sm rounded",
                    theme === 'dark' 
                      ? 'bg-violet-900/50 text-violet-200' 
                      : 'bg-violet-100 text-violet-700',
                    "backdrop-blur-sm",
                    "border border-violet-500/20"
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
                boxShadow: "0 0 20px rgba(139,92,246,0.3)"
              }}
              className={clsx(
                "inline-flex items-center gap-2",
                "px-4 py-1 rounded",
                theme === 'dark'
                  ? 'bg-gradient-to-r from-violet-500/20 to-purple-500/20 text-violet-200'
                  : 'bg-gradient-to-r from-violet-400/20 to-purple-400/20 text-violet-700',
                "backdrop-blur-sm",
                "border border-violet-500/20"
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
  animated = true,
}) => {
  return (
    <div className={clsx(
      "relative max-w-3xl mx-auto p-8",
      theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'
    )}>
      {/* Crystal Background */}
      <div className={clsx(
        "absolute inset-0",
        "bg-gradient-to-b",
        theme === 'dark'
          ? 'from-gray-900 via-violet-900/5 to-purple-900/5'
          : 'from-gray-50 via-violet-50/20 to-purple-50/20'
      )}>
        {/* Prismatic Patterns */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            animate={{ 
              rotate: [0, 360],
              scale: [1, 1.1, 1],
              opacity: [0.1, 0.2, 0.1]
            }}
            transition={{ 
              duration: 20,
              repeat: Infinity,
              ease: "linear",
              delay: i * 4
            }}
            className={clsx(
              "absolute inset-0",
              "bg-gradient-to-br from-violet-500/5 via-purple-500/5 to-fuchsia-500/5",
              "mix-blend-overlay"
            )}
            style={{
              clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
              transform: `rotate(${i * 72}deg) scale(${1 + i * 0.2})`
            }}
          />
        ))}
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