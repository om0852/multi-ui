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
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ 
        duration: 1,
        delay: index * 0.3,
        ease: "easeOut"
      }}
      className={clsx(
        "relative mb-16 pl-16",
        theme === 'dark' ? 'text-teal-100' : 'text-teal-900'
      )}
    >
      {/* Timeline Line with Liquid Effect */}
      <div className="absolute left-0 top-0 bottom-0 w-1">
        <motion.div
          animate={{ 
            height: ["100%", "90%", "100%"],
            y: ["0%", "5%", "0%"]
          }}
          transition={{ 
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className={clsx(
            "absolute w-full rounded-full",
            theme === 'dark' 
              ? 'bg-gradient-to-b from-teal-400 via-cyan-400 to-teal-400' 
              : 'bg-gradient-to-b from-teal-300 via-cyan-300 to-teal-300',
            "filter blur-[1px]"
          )}
        />
      </div>

      {/* Node with Morphing Effect */}
      <div className="absolute left-0 top-0">
        <motion.div
          animate={{ 
            borderRadius: ["50% 50% 50% 50%", "60% 40% 40% 60%", "40% 60% 60% 40%", "50% 50% 50% 50%"],
            rotate: [0, 90, 180, 270, 360]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          }}
          className={clsx(
            "w-10 h-10 -translate-x-1/2",
            "flex items-center justify-center",
            theme === 'dark' 
              ? 'bg-gradient-to-br from-teal-500 to-cyan-500' 
              : 'bg-gradient-to-br from-teal-300 to-cyan-300',
            "shadow-lg"
          )}
        >
          {icon}
        </motion.div>
      </div>

      {/* Content Card with Liquid Glass Effect */}
      <div className={clsx(
        "relative p-6 rounded-2xl overflow-hidden",
        theme === 'dark' 
          ? 'bg-gradient-to-br from-teal-900/40 to-cyan-900/40' 
          : 'bg-gradient-to-br from-teal-50/60 to-cyan-50/60',
        "backdrop-blur-md",
        "border border-teal-500/20"
      )}>
        {/* Animated Background Bubbles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              animate={{ 
                y: ["100%", "-100%"],
                x: [
                  `${Math.random() * 100}%`,
                  `${Math.random() * 100}%`
                ],
                scale: [1, 1.2, 0.8, 1],
                opacity: [0, 0.5, 0.3, 0]
              }}
              transition={{ 
                duration: 10 + i * 2,
                repeat: Infinity,
                ease: "linear",
                delay: i * 2
              }}
              className={clsx(
                "absolute w-20 h-20 rounded-full",
                theme === 'dark'
                  ? 'bg-gradient-to-br from-teal-500/10 to-cyan-500/10'
                  : 'bg-gradient-to-br from-teal-200/20 to-cyan-200/20',
                "filter blur-xl"
              )}
            />
          ))}
        </div>

        {/* Content */}
        <div className="relative">
          {/* Date Badge */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className={clsx(
              "inline-block px-4 py-1 mb-3 rounded-full",
              theme === 'dark' 
                ? 'bg-teal-900/50 text-teal-200' 
                : 'bg-teal-100 text-teal-700',
              "backdrop-blur-sm"
            )}
          >
            {date}
          </motion.div>

          {/* Title with Flow Effect */}
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
              "bg-gradient-to-r",
              theme === 'dark'
                ? 'from-teal-200 via-cyan-200 to-teal-200'
                : 'from-teal-700 via-cyan-700 to-teal-700',
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
              theme === 'dark' ? 'text-teal-300' : 'text-teal-600'
            )}>
              {category}
            </div>
          )}

          {/* Description */}
          <p className={clsx(
            "mb-4",
            theme === 'dark' ? 'text-teal-300' : 'text-teal-700'
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
                    y: -2
                  }}
                  className={clsx(
                    "px-3 py-1 text-sm rounded-full",
                    theme === 'dark' 
                      ? 'bg-teal-900/50 text-teal-200' 
                      : 'bg-teal-100 text-teal-700',
                    "backdrop-blur-sm"
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
              whileHover={{ scale: 1.02 }}
              className={clsx(
                "inline-flex items-center gap-2",
                "px-4 py-1 rounded-full",
                theme === 'dark'
                  ? 'bg-gradient-to-r from-teal-500 to-cyan-500 text-white'
                  : 'bg-gradient-to-r from-teal-400 to-cyan-400 text-white',
                "shadow-lg"
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
      {/* Liquid Background */}
      <div className={clsx(
        "absolute inset-0",
        "bg-gradient-to-b",
        theme === 'dark'
          ? 'from-gray-900 via-teal-900/20 to-cyan-900/20'
          : 'from-gray-50 via-teal-50/30 to-cyan-50/30'
      )}>
        {/* Animated Waves */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            animate={{ 
              y: ["0%", "100%"],
              opacity: [0.1, 0.3, 0.1],
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              duration: 10 + i * 2,
              repeat: Infinity,
              ease: "linear",
              delay: i * 3
            }}
            className={clsx(
              "absolute inset-0",
              "bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,0,0)_0%,rgba(0,128,128,0.1)_100%)]"
            )}
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