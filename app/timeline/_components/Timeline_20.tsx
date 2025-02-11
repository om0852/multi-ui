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

const circuitAnimation = {
  initial: { pathLength: 0, opacity: 0 },
  animate: { 
    pathLength: 1,
    opacity: 1,
    transition: {
      duration: 1.5,
      ease: "easeInOut"
    }
  }
};

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
        duration: 0.5,
        delay: index * 0.2,
        type: "spring",
        stiffness: 100
      }}
      className={clsx(
        "relative mb-12 last:mb-0 pl-12",
        theme === 'dark' ? 'text-cyan-50' : 'text-cyan-900'
      )}
    >
      {/* Circuit Line */}
      <div className="absolute left-0 top-0 bottom-0 w-1">
        <motion.div 
          initial={{ height: 0 }}
          animate={{ height: "100%" }}
          transition={{ duration: 0.5 }}
          className={clsx(
            "w-full",
            theme === 'dark' ? 'bg-cyan-500' : 'bg-cyan-600',
            "opacity-50"
          )}
        />
        
        {/* Circuit Dots */}
        <motion.div
          animate={{ 
            y: [0, "100%"],
            opacity: [0, 1, 0]
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            ease: "linear"
          }}
          className={clsx(
            "absolute top-0 w-full",
            "flex flex-col gap-2"
          )}
        >
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className={clsx(
                "w-1 h-1 rounded-full",
                theme === 'dark' ? 'bg-cyan-400' : 'bg-cyan-500'
              )}
            />
          ))}
        </motion.div>
      </div>

      {/* Node Point */}
      <div className="absolute left-0 top-0 -translate-x-1/2">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ 
            type: "spring",
            stiffness: 200,
            damping: 10
          }}
          className={clsx(
            "w-8 h-8 rounded-lg",
            "flex items-center justify-center",
            theme === 'dark' 
              ? 'bg-cyan-900 text-cyan-400' 
              : 'bg-cyan-100 text-cyan-600',
            "border-2",
            theme === 'dark' ? 'border-cyan-500' : 'border-cyan-400',
            "relative"
          )}
        >
          {/* Circuit Pattern */}
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 32 32"
          >
            <motion.path
              d="M8 8 L24 8 L24 24 L8 24 L8 8"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              strokeDasharray="0 1"
              variants={circuitAnimation}
              initial="initial"
              animate="animate"
              className="opacity-20"
            />
          </svg>
          {icon}
        </motion.div>
      </div>

      {/* Content Card */}
      <div className={clsx(
        "relative p-6 rounded-lg",
        theme === 'dark' 
          ? 'bg-cyan-900/30 backdrop-blur-sm' 
          : 'bg-cyan-50/80 backdrop-blur-sm',
        "border",
        theme === 'dark' ? 'border-cyan-500/30' : 'border-cyan-200',
        "group"
      )}>
        {/* Circuit Board Pattern */}
        <div className={clsx(
          "absolute inset-0 opacity-5 group-hover:opacity-10",
          "transition-opacity duration-500",
          "bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgdmlld0JveD0iMCAwIDQwIDQwIj48cGF0aCBkPSJNMCAwIGg0MCB2NDAgaC00MHoiIGZpbGw9Im5vbmUiLz48cGF0aCBkPSJNMCAwIGgyMCB2MjAgaDIwIHYyMCBoLTQweiIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS13aWR0aD0iMC41IiBmaWxsPSJub25lIi8+PC9zdmc+')]",
          theme === 'dark' ? 'text-cyan-400' : 'text-cyan-600'
        )} />

        {/* Content */}
        <div className="relative">
          {/* Date */}
          <div className={clsx(
            "inline-block px-4 py-1 mb-3 rounded-md",
            "font-mono text-sm",
            theme === 'dark' 
              ? 'bg-cyan-800/50 text-cyan-300' 
              : 'bg-cyan-100 text-cyan-700',
            "border",
            theme === 'dark' ? 'border-cyan-500/30' : 'border-cyan-200'
          )}>
            <motion.span
              animate={{ 
                opacity: [1, 0.5, 1],
                scale: [1, 0.98, 1]
              }}
              transition={{ 
                duration: 2,
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
            theme === 'dark' ? 'text-cyan-300' : 'text-cyan-800'
          )}>
            {title}
          </h3>

          {/* Category */}
          {category && (
            <div className={clsx(
              "text-sm mb-2 font-mono",
              theme === 'dark' ? 'text-cyan-400' : 'text-cyan-600'
            )}>
              {`<${category}/>`}
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
                  whileHover={{ y: -2 }}
                  className={clsx(
                    "px-3 py-1 text-sm rounded-md",
                    "font-mono",
                    theme === 'dark' 
                      ? 'bg-cyan-800/50 text-cyan-300' 
                      : 'bg-cyan-100 text-cyan-700',
                    "border",
                    theme === 'dark' ? 'border-cyan-500/30' : 'border-cyan-200'
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
                "text-sm font-mono",
                theme === 'dark' 
                  ? 'text-cyan-400 hover:text-cyan-300' 
                  : 'text-cyan-600 hover:text-cyan-700',
                "group"
              )}
            >
              $ ./view-details
              <motion.span
                animate={{ 
                  opacity: [1, 0, 1],
                }}
                transition={{ 
                  duration: 1,
                  repeat: Infinity,
                  ease: "steps(1)"
                }}
                className="inline-block"
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
  animated = true,
}) => {
  return (
    <div className={clsx(
      "relative max-w-3xl mx-auto p-8",
      theme === 'dark' ? 'bg-cyan-950' : 'bg-cyan-50'
    )}>
      {/* Circuit Background */}
      <div className={clsx(
        "absolute inset-0",
        "bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))]",
        theme === 'dark'
          ? 'from-cyan-900/30 via-cyan-950 to-cyan-950'
          : 'from-cyan-100/50 via-cyan-50 to-cyan-50'
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