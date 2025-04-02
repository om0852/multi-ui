"use client";
import React from "react";
import { motion } from "framer-motion";
import clsx from "clsx";

const colorMap = {
  blue: {
    light: {
      bg: "bg-blue-50",
      border: "border-blue-200",
      dot: "bg-blue-500",
      text: "text-blue-600",
      hover: "hover:bg-blue-100"
    },
    dark: {
      bg: "bg-blue-900/20",
      border: "border-blue-800",
      dot: "bg-blue-500",
      text: "text-blue-400",
      hover: "hover:bg-blue-900/40"
    }
  },
  green: {
    light: {
      bg: "bg-green-50",
      border: "border-green-200",
      dot: "bg-green-500",
      text: "text-green-600",
      hover: "hover:bg-green-100"
    },
    dark: {
      bg: "bg-green-900/20",
      border: "border-green-800",
      dot: "bg-green-500",
      text: "text-green-400",
      hover: "hover:bg-green-900/40"
    }
  },
  red: {
    light: {
      bg: "bg-red-50",
      border: "border-red-200",
      dot: "bg-red-500",
      text: "text-red-600",
      hover: "hover:bg-red-100"
    },
    dark: {
      bg: "bg-red-900/20",
      border: "border-red-800",
      dot: "bg-red-500",
      text: "text-red-400",
      hover: "hover:bg-red-900/40"
    }
  },
  purple: {
    light: {
      bg: "bg-purple-50",
      border: "border-purple-200",
      dot: "bg-purple-500",
      text: "text-purple-600",
      hover: "hover:bg-purple-100"
    },
    dark: {
      bg: "bg-purple-900/20",
      border: "border-purple-800",
      dot: "bg-purple-500",
      text: "text-purple-400",
      hover: "hover:bg-purple-900/40"
    }
  },
  gray: {
    light: {
      bg: "bg-gray-50",
      border: "border-gray-200",
      dot: "bg-gray-500",
      text: "text-gray-600",
      hover: "hover:bg-gray-100"
    },
    dark: {
      bg: "bg-gray-800/40",
      border: "border-gray-700",
      dot: "bg-gray-500",
      text: "text-gray-400",
      hover: "hover:bg-gray-800/60"
    }
  }
};

const TimelineItem = ({
  title,
  description,
  date,
  icon,
  tags,
  link,
  color = 'blue',
  index,
  theme
}) => {
  const colorClasses = colorMap[color]?.[theme] || colorMap.blue[theme];
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="relative pl-6 pb-8 last:pb-0"
    >
      {/* Dot */}
      <div className={clsx(
        "absolute left-0 w-3 h-3 rounded-full -translate-x-[6px] z-10",
        colorClasses.dot
      )} />

      {/* Vertical Line */}
      <div className={clsx(
        "absolute top-0 left-0 w-px h-full -translate-x-[5px]",
        theme === 'dark' ? "bg-gray-700" : "bg-gray-200"
      )} />

      {/* Content Card */}
      <div className={clsx(
        "p-4 rounded-lg border transition-colors",
        colorClasses.bg,
        colorClasses.border,
        colorClasses.hover
      )}>
        {/* Date */}
        <div className={clsx(
          "text-sm font-medium mb-1",
          colorClasses.text
        )}>
          {date}
        </div>

        {/* Title */}
        <h3 className={clsx(
          "text-lg font-bold mb-2",
          theme === 'dark' ? "text-white" : "text-gray-900"
        )}>
          {title}
        </h3>

        {/* Description */}
        <p className={clsx(
          "text-sm mb-3",
          theme === 'dark' ? "text-gray-300" : "text-gray-600"
        )}>
          {description}
        </p>

        {/* Tags */}
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-3">
            {tags.map((tag, i) => (
              <span
                key={i}
                className={clsx(
                  "inline-block text-xs px-2 py-0.5 rounded-full",
                  theme === 'dark' 
                    ? "bg-gray-800 text-gray-300" 
                    : "bg-gray-200 text-gray-700"
                )}
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Link */}
        {link && (
          <a
            href={link}
            className={clsx(
              "inline-block text-sm font-medium",
              colorClasses.text
            )}
          >
            Learn more →
          </a>
        )}
      </div>
    </motion.div>
  );
};

const Timeline = ({
  data,
  theme = 'light'
}) => {
  return (
    <div className={clsx(
      "max-w-2xl mx-auto px-4 py-16",
      theme === 'dark' ? "bg-gray-900 text-white" : "bg-white text-gray-900"
    )}>
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