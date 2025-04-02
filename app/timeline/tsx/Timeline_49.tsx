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
      transition={{ 
        duration: 0.4,
        delay: index * 0.1,
        ease: "steps(4)"
      }}
      className={clsx(
        "relative mb-8 pl-12",
        "font-mono",
        theme === 'dark' ? 'text-green-400' : 'text-green-700'
      )}
    >
      {/* Timeline Line */}
      <div className="absolute left-0 top-0 bottom-0 w-px">
        <motion.div
          animate={{ 
            opacity: [0.3, 1, 0.3]
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            ease: "steps(3)"
          }}
          className={clsx(
            "absolute inset-0",
            theme === 'dark' ? 'bg-green-500' : 'bg-green-600'
          )}
        />
      </div>

      {/* Node */}
      <motion.div
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.5, 1, 0.5]
        }}
        transition={{ 
          duration: 1,
          repeat: Infinity,
          ease: "steps(3)"
        }}
        className={clsx(
          "absolute left-0 top-0 w-6 h-6 -translate-x-1/2",
          "flex items-center justify-center",
          theme === 'dark' ? 'bg-green-900' : 'bg-green-100',
          "border-2",
          theme === 'dark' ? 'border-green-500' : 'border-green-600'
        )}
      >
        {icon}
      </motion.div>

      {/* Content Card */}
      <div className={clsx(
        "relative p-4",
        theme === 'dark' ? 'bg-gray-900' : 'bg-gray-100',
        "border-2",
        theme === 'dark' ? 'border-green-500' : 'border-green-600'
      )}>
        {/* Scanlines Effect */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className={clsx(
                "absolute w-full h-px",
                theme === 'dark' ? 'bg-green-500/10' : 'bg-green-600/10'
              )}
              style={{ top: `${i * 5}%` }}
            />
          ))}
        </div>

        {/* Content */}
        <div className="relative">
          {/* Date */}
          <div className={clsx(
            "mb-2 text-sm",
            theme === 'dark' ? 'text-green-500' : 'text-green-600'
          )}>
            <motion.span
              animate={{ opacity: [1, 0, 1] }}
              transition={{ 
                duration: 1,
                repeat: Infinity,
                ease: "steps(2)"
              }}
            >
              &gt;
            </motion.span>
            {" "}
            {date}
          </div>

          {/* Title */}
          <motion.h3
            animate={{ 
              opacity: [0.7, 1, 0.7]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              ease: "steps(3)"
            }}
            className={clsx(
              "text-lg font-bold mb-2",
              theme === 'dark' ? 'text-green-400' : 'text-green-700'
            )}
          >
            {title}
          </motion.h3>

          {/* Category */}
          {category && (
            <div className={clsx(
              "text-sm mb-2",
              theme === 'dark' ? 'text-green-500' : 'text-green-600'
            )}>
              # {category}
            </div>
          )}

          {/* Description */}
          <p className={clsx(
            "mb-4 whitespace-pre-wrap",
            theme === 'dark' ? 'text-green-300' : 'text-green-800'
          )}>
            {description}
          </p>

          {/* Tags */}
          {tags && tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {tags.map((tag, i) => (
                <motion.span
                  key={i}
                  animate={{ 
                    opacity: [0.7, 1, 0.7]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    ease: "steps(3)",
                    delay: i * 0.2
                  }}
                  className={clsx(
                    "px-2 py-1 text-xs",
                    theme === 'dark' 
                      ? 'bg-green-900 text-green-400' 
                      : 'bg-green-100 text-green-700',
                    "border",
                    theme === 'dark' ? 'border-green-500' : 'border-green-600'
                  )}
                >
                  [{tag}]
                </motion.span>
              ))}
            </div>
          )}

          {/* Link */}
          {link && (
            <motion.a
              href={link}
              className={clsx(
                "inline-flex items-center gap-2",
                theme === 'dark' 
                  ? 'text-green-400 hover:text-green-300' 
                  : 'text-green-700 hover:text-green-800'
              )}
            >
              $ ./open-link
              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ 
                  duration: 1,
                  repeat: Infinity,
                  ease: "steps(2)"
                }}
              >
                _
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
      "relative max-w-3xl mx-auto p-8 font-mono",
      theme === 'dark' ? 'bg-gray-900' : 'bg-gray-100'
    )}>
      {/* Terminal Background */}
      <div className="absolute inset-0">
        {/* Scanlines */}
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className={clsx(
              "absolute w-full h-px",
              theme === 'dark' ? 'bg-green-500/5' : 'bg-green-600/5'
            )}
            style={{ top: `${i * 2}%` }}
          />
        ))}

        {/* CRT Flicker */}
        <motion.div
          animate={{ 
            opacity: [0.02, 0.04, 0.02]
          }}
          transition={{ 
            duration: 0.5,
            repeat: Infinity,
            ease: "steps(3)"
          }}
          className={clsx(
            "absolute inset-0",
            theme === 'dark' 
              ? 'bg-green-500/5' 
              : 'bg-green-600/5'
          )}
        />
      </div>

      {/* Content */}
      <div className="relative">
        <motion.div
          animate={{ opacity: [1, 0, 1] }}
          transition={{ 
            duration: 1,
            repeat: Infinity,
            ease: "steps(2)"
          }}
          className={clsx(
            "mb-8 text-sm",
            theme === 'dark' ? 'text-green-500' : 'text-green-600'
          )}
        >
          &gt; Loading timeline data...
        </motion.div>

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