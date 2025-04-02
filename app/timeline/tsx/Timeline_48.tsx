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
      initial={{ opacity: 0, y: 50, rotateX: -10 }}
      animate={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ 
        duration: 0.6,
        delay: index * 0.2,
        type: "spring",
        stiffness: 100
      }}
      className={clsx(
        "relative mb-16 pl-12",
        "perspective-1000",
        theme === 'dark' ? 'text-white' : 'text-gray-900'
      )}
    >
      {/* Timeline Line */}
      <div className="absolute left-0 top-0 bottom-0 w-0.5">
        <motion.div
          animate={{ 
            height: ["0%", "100%"],
            opacity: [0, 1]
          }}
          transition={{ duration: 0.5 }}
          className={clsx(
            "absolute inset-0",
            theme === 'dark' ? 'bg-blue-500' : 'bg-blue-400'
          )}
        />
      </div>

      {/* Node */}
      <motion.div
        whileHover={{ scale: 1.2, rotate: 180 }}
        className={clsx(
          "absolute left-0 top-0 w-8 h-8 -translate-x-1/2",
          "flex items-center justify-center",
          theme === 'dark' ? 'bg-blue-500' : 'bg-blue-400',
          "rounded-lg",
          "transform-gpu transition-transform duration-300"
        )}
      >
        {icon}
      </motion.div>

      {/* Content Card */}
      <motion.div
        whileHover={{ 
          scale: 1.02,
          rotateX: 5,
          z: 20
        }}
        className={clsx(
          "relative p-6 rounded-lg",
          theme === 'dark' 
            ? 'bg-gray-800/90' 
            : 'bg-white/90',
          "backdrop-blur-sm",
          "border border-blue-500/20",
          "shadow-lg",
          "transform-gpu transition-all duration-300"
        )}
      >
        {/* Floating Elements */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            animate={{ 
              y: [-10, 10],
              rotate: [0, 360],
              scale: [0.8, 1.2, 0.8]
            }}
            transition={{ 
              duration: 4 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5
            }}
            className={clsx(
              "absolute w-8 h-8",
              "rounded-full",
              theme === 'dark' 
                ? 'bg-blue-500/10' 
                : 'bg-blue-400/10',
              "pointer-events-none"
            )}
            style={{
              left: `${20 + i * 30}%`,
              top: `${20 + (i % 2) * 40}%`
            }}
          />
        ))}

        {/* Content */}
        <div className="relative">
          {/* Date */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className={clsx(
              "inline-block px-4 py-1 mb-3 rounded-lg",
              theme === 'dark' 
                ? 'bg-blue-500/20 text-blue-300' 
                : 'bg-blue-100 text-blue-700',
              "border border-blue-500/30"
            )}
          >
            {date}
          </motion.div>

          {/* Title */}
          <h3 className={clsx(
            "text-xl font-bold mb-2",
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          )}>
            {title}
          </h3>

          {/* Category */}
          {category && (
            <div className={clsx(
              "text-sm mb-2",
              theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
            )}>
              {category}
            </div>
          )}

          {/* Description */}
          <p className={clsx(
            "mb-4",
            theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
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
                    "px-3 py-1 text-sm rounded-lg",
                    theme === 'dark' 
                      ? 'bg-blue-500/20 text-blue-300' 
                      : 'bg-blue-100 text-blue-700',
                    "border border-blue-500/30"
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
                x: 5,
                textShadow: "0 0 8px rgba(59,130,246,0.5)"
              }}
              className={clsx(
                "inline-flex items-center gap-2",
                theme === 'dark' 
                  ? 'text-blue-400 hover:text-blue-300' 
                  : 'text-blue-600 hover:text-blue-700'
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
      </motion.div>
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
      {/* Floating Background Elements */}
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={i}
          animate={{ 
            y: [-20, 20],
            x: [-10, 10],
            rotate: [0, 360],
            scale: [0.8, 1.2, 0.8]
          }}
          transition={{ 
            duration: 8 + Math.random() * 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.5
          }}
          className={clsx(
            "absolute w-16 h-16",
            "rounded-full",
            theme === 'dark' 
              ? 'bg-blue-500/5' 
              : 'bg-blue-400/5',
            "pointer-events-none"
          )}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`
          }}
        />
      ))}

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