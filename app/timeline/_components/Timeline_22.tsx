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
        ease: [0.34, 1.56, 0.64, 1]
      }}
      className={clsx(
        "relative mb-16 last:mb-0 pl-12",
        theme === 'dark' ? 'text-rose-50' : 'text-rose-900'
      )}
    >
      {/* Watercolor Line */}
      <div className="absolute left-0 top-0 bottom-0 w-1">
        <motion.div 
          animate={{ 
            background: [
              "linear-gradient(to bottom, #FDA4AF, #FB7185, #F43F5E)",
              "linear-gradient(to bottom, #FB7185, #F43F5E, #FDA4AF)",
              "linear-gradient(to bottom, #F43F5E, #FDA4AF, #FB7185)"
            ],
            filter: [
              "blur(2px)",
              "blur(3px)",
              "blur(2px)"
            ]
          }}
          transition={{ 
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute inset-0"
        />
      </div>

      {/* Paint Drop */}
      <div className="absolute left-0 top-0 -translate-x-1/2">
        <motion.div
          animate={{ 
            scale: [1, 1.1, 1],
            rotate: [0, 5, -5, 0]
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className={clsx(
            "w-8 h-8",
            "flex items-center justify-center",
            theme === 'dark' 
              ? 'bg-rose-900 text-rose-200' 
              : 'bg-rose-100 text-rose-700',
            "rounded-[40%_60%_60%_40%/40%_40%_60%_60%]",
            "relative overflow-hidden",
            "border-2 border-rose-500/30",
            "before:absolute before:inset-0",
            "before:bg-gradient-to-br before:from-white/20 before:to-transparent"
          )}
        >
          {icon}
        </motion.div>
      </div>

      {/* Content Card */}
      <div className={clsx(
        "relative p-6 overflow-hidden",
        "rounded-[20px_40px_30px_50px/30px_30px_40px_30px]",
        theme === 'dark' 
          ? 'bg-rose-900/30 backdrop-blur-sm' 
          : 'bg-rose-50/80 backdrop-blur-sm',
        "border border-rose-500/20",
        "group"
      )}>
        {/* Watercolor Background */}
        <motion.div
          animate={{ 
            scale: [1, 1.05, 1],
            rotate: [0, 1, -1, 0],
            opacity: [0.1, 0.15, 0.1]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className={clsx(
            "absolute inset-0",
            "bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))]",
            "from-rose-400/20 via-pink-500/20 to-rose-600/20",
            "group-hover:opacity-20",
            "transition-opacity duration-500",
            "filter blur-xl"
          )}
        />

        {/* Content */}
        <div className="relative">
          {/* Date */}
          <div className={clsx(
            "inline-block px-4 py-1 mb-3",
            "rounded-[10px_20px_15px_25px/15px_15px_20px_15px]",
            theme === 'dark' 
              ? 'bg-rose-800/50 text-rose-200' 
              : 'bg-rose-100 text-rose-700',
            "border border-rose-500/20"
          )}>
            <motion.span
              animate={{ 
                opacity: [1, 0.7, 1]
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              {date}
            </motion.span>
          </div>

          {/* Title */}
          <h3 className={clsx(
            "text-xl font-medium mb-2",
            theme === 'dark' ? 'text-rose-200' : 'text-rose-800'
          )}>
            {title}
          </h3>

          {/* Category */}
          {category && (
            <div className={clsx(
              "text-sm mb-2 italic",
              theme === 'dark' ? 'text-rose-300' : 'text-rose-600'
            )}>
              {category}
            </div>
          )}

          {/* Description */}
          <p className={clsx(
            "mb-4",
            theme === 'dark' ? 'text-rose-300' : 'text-rose-700'
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
                    y: -2,
                    rotate: [-1, 1, -1]
                  }}
                  className={clsx(
                    "px-3 py-1 text-sm",
                    "rounded-[8px_16px_12px_20px/12px_12px_16px_12px]",
                    theme === 'dark' 
                      ? 'bg-rose-800/50 text-rose-200' 
                      : 'bg-rose-100 text-rose-700',
                    "border border-rose-500/20"
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
                "text-sm italic",
                theme === 'dark' 
                  ? 'text-rose-300 hover:text-rose-200' 
                  : 'text-rose-600 hover:text-rose-700',
                "transition-colors duration-300"
              )}
            >
              View Artwork
              <motion.span
                animate={{ 
                  x: [0, 4, 0],
                  y: [0, -2, 0],
                  rotate: [0, 15, 0]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                ~
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
      theme === 'dark' ? 'bg-rose-950' : 'bg-rose-50'
    )}>
      {/* Watercolor Background */}
      <motion.div
        animate={{ 
          scale: [1, 1.02, 1],
          rotate: [0, 0.5, -0.5, 0]
        }}
        transition={{ 
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className={clsx(
          "absolute inset-0",
          "bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))]",
          theme === 'dark'
            ? 'from-rose-900/50 via-rose-950 to-rose-950'
            : 'from-rose-100/50 via-rose-50 to-rose-50',
          "filter blur-3xl"
        )}
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