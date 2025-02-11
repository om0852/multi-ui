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
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ 
        duration: 0.6,
        delay: index * 0.15,
        ease: [0.43, 0.13, 0.23, 0.96]
      }}
      className={clsx(
        "relative mb-16 pl-12",
        theme === 'dark' ? 'text-indigo-100' : 'text-indigo-900'
      )}
    >
      {/* Geometric Timeline Line */}
      <div className="absolute left-0 top-0 bottom-0 w-0.5">
        <motion.div
          animate={{ 
            background: [
              "linear-gradient(to bottom, #6366F1, #4F46E5, #4338CA)",
              "linear-gradient(to bottom, #4F46E5, #4338CA, #6366F1)",
              "linear-gradient(to bottom, #4338CA, #6366F1, #4F46E5)"
            ]
          }}
          transition={{ 
            duration: 3,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute inset-0"
        />

        {/* Geometric Shapes */}
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            animate={{ 
              rotate: [0, 180, 360],
              scale: [1, 1.2, 1]
            }}
            transition={{ 
              duration: 4,
              delay: i * 1,
              repeat: Infinity,
              ease: "linear"
            }}
            className={clsx(
              "absolute w-3 h-3 -left-1",
              theme === 'dark' 
                ? 'bg-indigo-500' 
                : 'bg-indigo-400',
              i % 2 === 0 ? "rotate-45" : ""
            )}
            style={{ 
              top: `${i * 30}%`,
              clipPath: i % 2 === 0 
                ? "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)"
                : "polygon(0% 0%, 100% 0%, 50% 100%)"
            }}
          />
        ))}
      </div>

      {/* Node */}
      <div className="absolute left-0 top-0">
        <motion.div
          animate={{ 
            rotate: [0, 90, 180, 270, 360],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          }}
          className={clsx(
            "w-8 h-8 -translate-x-1/2",
            "flex items-center justify-center",
            theme === 'dark' 
              ? 'bg-indigo-900 text-indigo-200' 
              : 'bg-indigo-100 text-indigo-700',
            "border-2 border-indigo-500"
          )}
          style={{
            clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)"
          }}
        >
          <div className="relative z-10">{icon}</div>
        </motion.div>
      </div>

      {/* Content Card */}
      <div className={clsx(
        "relative p-6",
        theme === 'dark' 
          ? 'bg-indigo-900/30' 
          : 'bg-indigo-50/80',
        "border border-indigo-500/20",
        "before:absolute before:inset-0",
        "before:bg-gradient-to-r",
        theme === 'dark'
          ? 'before:from-indigo-800/10 before:to-indigo-900/10'
          : 'before:from-indigo-100/50 before:to-indigo-200/50',
        "group"
      )}
      style={{
        clipPath: "polygon(0% 0%, 95% 0%, 100% 5%, 100% 100%, 5% 100%, 0% 95%)"
      }}>
        {/* Geometric Pattern Background */}
        <div className="absolute inset-0 overflow-hidden opacity-10">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              animate={{ 
                rotate: [0, 360],
                scale: [1, 1.5, 1]
              }}
              transition={{ 
                duration: 10,
                delay: i * 2,
                repeat: Infinity,
                ease: "linear"
              }}
              className={clsx(
                "absolute w-20 h-20",
                theme === 'dark'
                  ? 'border-indigo-400'
                  : 'border-indigo-600',
                "border-2"
              )}
              style={{
                left: `${i * 25}%`,
                top: `${i * 20}%`,
                transform: `rotate(${i * 45}deg)`
              }}
            />
          ))}
        </div>

        {/* Content */}
        <div className="relative">
          {/* Date */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className={clsx(
              "inline-block px-4 py-1 mb-3",
              theme === 'dark' 
                ? 'bg-indigo-800/50 text-indigo-200' 
                : 'bg-indigo-100 text-indigo-700',
              "border border-indigo-500/20"
            )}
            style={{
              clipPath: "polygon(5% 0%, 100% 0%, 95% 100%, 0% 100%)"
            }}
          >
            {date}
          </motion.div>

          {/* Title */}
          <h3 className={clsx(
            "text-xl font-medium mb-2",
            theme === 'dark' ? 'text-indigo-200' : 'text-indigo-800'
          )}>
            {title}
          </h3>

          {/* Category */}
          {category && (
            <div className={clsx(
              "text-sm mb-2",
              theme === 'dark' ? 'text-indigo-300' : 'text-indigo-600'
            )}>
              ◆ {category} ◆
            </div>
          )}

          {/* Description */}
          <p className={clsx(
            "mb-4",
            theme === 'dark' ? 'text-indigo-300' : 'text-indigo-700'
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
                    theme === 'dark' 
                      ? 'bg-indigo-800/50 text-indigo-200' 
                      : 'bg-indigo-100 text-indigo-700',
                    "border border-indigo-500/20"
                  )}
                  style={{
                    clipPath: "polygon(10% 0%, 100% 0%, 90% 100%, 0% 100%)"
                  }}
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
                  ? 'text-indigo-300 hover:text-indigo-200' 
                  : 'text-indigo-600 hover:text-indigo-700'
              )}
            >
              View Details
              <motion.span
                animate={{ 
                  x: [0, 5, 0],
                  rotate: [0, 180, 360]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                ◆
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
      theme === 'dark' ? 'bg-indigo-950' : 'bg-indigo-50'
    )}>
      {/* Geometric Background */}
      <div className={clsx(
        "absolute inset-0",
        "bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))]",
        theme === 'dark'
          ? 'from-indigo-900/50 via-indigo-950 to-indigo-950'
          : 'from-indigo-100/50 via-indigo-50 to-indigo-50'
      )}>
        {/* Grid Pattern */}
        <div className={clsx(
          "absolute inset-0",
          "bg-[linear-gradient(0deg,rgba(99,102,241,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.1)_1px,transparent_1px)]",
          "bg-[size:20px_20px]"
        )} />

        {/* Floating Shapes */}
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            animate={{ 
              rotate: [0, 360],
              scale: [0.8, 1.2, 0.8],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{ 
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
            className={clsx(
              "absolute w-8 h-8",
              theme === 'dark'
                ? 'border-indigo-400/20'
                : 'border-indigo-600/20',
              "border-2"
            )}
            style={{ 
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              transform: `rotate(${Math.random() * 360}deg)`,
              clipPath: i % 2 === 0
                ? "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)"
                : "polygon(0% 0%, 100% 0%, 50% 100%)"
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