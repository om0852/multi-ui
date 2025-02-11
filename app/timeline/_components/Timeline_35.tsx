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
      initial={{ opacity: 0, y: 50, rotateX: -90 }}
      animate={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ 
        duration: 0.8,
        delay: index * 0.2,
        type: "spring",
        damping: 20
      }}
      className={clsx(
        "relative mb-16 pl-12",
        "perspective-1000",
        theme === 'dark' ? 'text-amber-100' : 'text-amber-900'
      )}
    >
      {/* Paper Timeline Line */}
      <div className={clsx(
        "absolute left-0 top-0 bottom-0 w-0.5",
        theme === 'dark' ? 'bg-amber-700' : 'bg-amber-200',
        "shadow-[2px_2px_4px_rgba(0,0,0,0.1)]"
      )}>
        {/* Folded Effect */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            animate={{ 
              rotateY: [0, 180, 360],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{ 
              duration: 3,
              delay: i * 0.6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className={clsx(
              "absolute w-2 h-2 -left-[3px]",
              "bg-gradient-to-r",
              theme === 'dark'
                ? 'from-amber-600 to-amber-800'
                : 'from-amber-100 to-amber-300',
              "transform-style-3d"
            )}
            style={{ top: `${i * 25}%` }}
          />
        ))}
      </div>

      {/* Paper Node */}
      <div className="absolute left-0 top-0">
        <motion.div
          animate={{ 
            rotate: [0, 360],
            boxShadow: [
              "2px 2px 4px rgba(0,0,0,0.1)",
              "4px 4px 8px rgba(0,0,0,0.15)",
              "2px 2px 4px rgba(0,0,0,0.1)"
            ]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          }}
          className={clsx(
            "w-8 h-8 -translate-x-1/2",
            "rounded-lg",
            "flex items-center justify-center",
            theme === 'dark' 
              ? 'bg-amber-800 text-amber-200' 
              : 'bg-amber-100 text-amber-700',
            "border border-amber-500/30",
            "transform-style-3d"
          )}
          style={{
            transform: "rotate3d(1, 1, 1, 45deg)"
          }}
        >
          {icon}
        </motion.div>
      </div>

      {/* Content Card */}
      <div className={clsx(
        "relative p-6 rounded-lg",
        theme === 'dark' 
          ? 'bg-amber-900/30' 
          : 'bg-amber-50',
        "border border-amber-500/20",
        "shadow-[4px_4px_8px_rgba(0,0,0,0.1)]",
        "before:absolute before:inset-0 before:bg-gradient-to-r",
        theme === 'dark'
          ? 'before:from-amber-800/10 before:to-amber-900/10'
          : 'before:from-amber-100/50 before:to-amber-200/50',
        "before:rounded-lg before:transform-style-3d",
        "group"
      )}>
        {/* Paper Fold Effect */}
        <div className={clsx(
          "absolute top-0 right-0 w-8 h-8",
          "bg-gradient-to-br",
          theme === 'dark'
            ? 'from-amber-800 to-amber-900'
            : 'from-amber-200 to-amber-300',
          "transform-origin-top-right",
          "transition-transform duration-300",
          "group-hover:scale-110"
        )} />

        {/* Content */}
        <div className="relative">
          {/* Date */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className={clsx(
              "inline-block px-4 py-1 mb-3",
              "rounded border border-amber-500/20",
              theme === 'dark' 
                ? 'bg-amber-800/50 text-amber-200' 
                : 'bg-amber-100 text-amber-700',
              "shadow-[2px_2px_4px_rgba(0,0,0,0.1)]"
            )}
          >
            {date}
          </motion.div>

          {/* Title */}
          <h3 className={clsx(
            "text-xl font-serif mb-2",
            theme === 'dark' ? 'text-amber-200' : 'text-amber-800'
          )}>
            {title}
          </h3>

          {/* Category */}
          {category && (
            <div className={clsx(
              "text-sm italic mb-2",
              theme === 'dark' ? 'text-amber-300' : 'text-amber-600'
            )}>
              ~ {category} ~
            </div>
          )}

          {/* Description */}
          <p className={clsx(
            "mb-4",
            theme === 'dark' ? 'text-amber-300' : 'text-amber-700'
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
                    rotate: [-2, 2]
                  }}
                  className={clsx(
                    "px-3 py-1 text-sm",
                    "rounded-sm border border-amber-500/20",
                    theme === 'dark' 
                      ? 'bg-amber-800/50 text-amber-200' 
                      : 'bg-amber-100 text-amber-700',
                    "shadow-[1px_1px_2px_rgba(0,0,0,0.1)]"
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
                textDecoration: "underline"
              }}
              className={clsx(
                "inline-flex items-center gap-2",
                "font-serif italic",
                theme === 'dark' 
                  ? 'text-amber-300 hover:text-amber-200' 
                  : 'text-amber-600 hover:text-amber-700'
              )}
            >
              Read More
              <motion.span
                animate={{ 
                  x: [0, 5, 0],
                  y: [0, -2, 0]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                ✧
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
      theme === 'dark' ? 'bg-amber-950' : 'bg-amber-50'
    )}>
      {/* Paper Texture Background */}
      <div className={clsx(
        "absolute inset-0",
        "bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))]",
        theme === 'dark'
          ? 'from-amber-900/50 via-amber-950 to-amber-950'
          : 'from-amber-100/50 via-amber-50 to-amber-50',
        "before:absolute before:inset-0",
        "before:bg-[url('data:image/svg+xml,...')]",
        "before:opacity-10"
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