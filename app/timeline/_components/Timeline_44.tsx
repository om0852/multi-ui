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
        theme === 'dark' ? 'text-amber-800' : 'text-amber-900'
      )}
    >
      {/* Timeline Line with Ink Effect */}
      <div className="absolute left-0 top-0 bottom-0 w-1">
        <motion.div
          animate={{ 
            opacity: [0.7, 0.9, 0.7]
          }}
          transition={{ 
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className={clsx(
            "absolute inset-0",
            theme === 'dark' ? 'bg-amber-800' : 'bg-amber-900',
            "bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))]",
            "from-amber-700 via-amber-800 to-amber-900"
          )}
        />
      </div>

      {/* Node with Wax Seal Effect */}
      <div className="absolute left-0 top-0">
        <motion.div
          whileHover={{ scale: 1.1 }}
          className={clsx(
            "w-10 h-10 -translate-x-1/2",
            "flex items-center justify-center rounded-full",
            theme === 'dark' 
              ? 'bg-gradient-to-br from-red-800 to-red-900' 
              : 'bg-gradient-to-br from-red-700 to-red-800',
            "border-2",
            theme === 'dark' ? 'border-amber-700' : 'border-amber-800',
            "shadow-lg"
          )}
        >
          {icon}
        </motion.div>
      </div>

      {/* Content Card with Parchment Effect */}
      <div className={clsx(
        "relative p-6 rounded-sm overflow-hidden",
        theme === 'dark' 
          ? 'bg-gradient-to-br from-amber-100 to-amber-200' 
          : 'bg-gradient-to-br from-amber-50 to-amber-100',
        "border border-amber-300",
        "shadow-md"
      )}>
        {/* Parchment Texture */}
        <div className={clsx(
          "absolute inset-0",
          "opacity-20",
          "bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSIjZmZmZmZmIj48L3JlY3Q+CjxwYXRoIGQ9Ik0wIDVMNSAwWk02IDRMNCA2Wk0tMSAxTDEgLTFaIiBzdHJva2U9IiNjY2MiIHN0cm9rZS13aWR0aD0iMSI+PC9wYXRoPgo8L3N2Zz4=')]"
        )} />

        {/* Torn Edge Effect */}
        <div className={clsx(
          "absolute top-0 left-0 right-0 h-2",
          "bg-[linear-gradient(45deg,transparent_25%,rgba(0,0,0,0.1)_25%,rgba(0,0,0,0.1)_75%,transparent_75%)]",
          "bg-[length:4px_4px]"
        )} />

        {/* Content */}
        <div className="relative">
          {/* Date Badge */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className={clsx(
              "inline-block px-4 py-1 mb-3",
              "font-serif italic",
              theme === 'dark' 
                ? 'text-amber-900' 
                : 'text-amber-800',
              "border-b-2 border-amber-300"
            )}
          >
            {date}
          </motion.div>

          {/* Title with Calligraphy Style */}
          <motion.h3
            className={clsx(
              "text-xl font-serif font-bold mb-2",
              "first-letter:text-3xl first-letter:font-bold",
              theme === 'dark' ? 'text-amber-900' : 'text-amber-950'
            )}
          >
            {title}
          </motion.h3>

          {/* Category */}
          {category && (
            <div className={clsx(
              "text-sm mb-2 font-serif italic",
              theme === 'dark' ? 'text-amber-800' : 'text-amber-900'
            )}>
              {category}
            </div>
          )}

          {/* Description */}
          <p className={clsx(
            "mb-4 font-serif",
            theme === 'dark' ? 'text-amber-800' : 'text-amber-900'
          )}>
            {description}
          </p>

          {/* Tags */}
          {tags && tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {tags.map((tag, i) => (
                <motion.span
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  className={clsx(
                    "px-3 py-1 text-sm font-serif italic",
                    theme === 'dark' 
                      ? 'text-amber-900' 
                      : 'text-amber-800',
                    "border-b border-amber-300"
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
                "px-4 py-1",
                "font-serif italic",
                theme === 'dark'
                  ? 'text-amber-900'
                  : 'text-amber-800',
                "border-b-2 border-amber-300"
              )}
            >
              Read More
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

        {/* Ink Splatter Effects */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ 
              scale: [1, 1.1, 1],
              opacity: [0.1, 0.15, 0.1]
            }}
            transition={{ 
              duration: 3,
              repeat: Infinity,
              delay: i * 1
            }}
            className={clsx(
              "absolute w-12 h-12",
              "rounded-full",
              "bg-amber-900/10",
              "mix-blend-multiply"
            )}
            style={{
              left: `${20 + i * 30}%`,
              top: `${60 + (i % 2) * 20}%`,
              transform: `rotate(${i * 45}deg)`
            }}
          />
        ))}
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
      theme === 'dark' ? 'bg-amber-100' : 'bg-amber-50'
    )}>
      {/* Parchment Background */}
      <div className={clsx(
        "absolute inset-0",
        "bg-gradient-to-b",
        theme === 'dark'
          ? 'from-amber-100 via-amber-200 to-amber-100'
          : 'from-amber-50 via-amber-100 to-amber-50'
      )}>
        {/* Texture Overlay */}
        <div className={clsx(
          "absolute inset-0",
          "opacity-20",
          "bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSIjZmZmZmZmIj48L3JlY3Q+CjxwYXRoIGQ9Ik0wIDVMNSAwWk02IDRMNCA2Wk0tMSAxTDEgLTFaIiBzdHJva2U9IiNjY2MiIHN0cm9rZS13aWR0aD0iMSI+PC9wYXRoPgo8L3N2Zz4=')]"
        )} />

        {/* Coffee Stain Effects */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ 
              scale: [1, 1.1, 1],
              opacity: [0.05, 0.08, 0.05]
            }}
            transition={{ 
              duration: 5,
              repeat: Infinity,
              delay: i * 2
            }}
            className={clsx(
              "absolute w-24 h-24",
              "rounded-full",
              "bg-amber-900/10",
              "mix-blend-multiply"
            )}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              transform: `rotate(${i * 72}deg)`
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