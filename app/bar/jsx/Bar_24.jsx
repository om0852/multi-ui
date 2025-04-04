"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

const NeonBarChart = ({ data, config, className }) => {
  const [hoveredBar, setHoveredBar] = useState(null);

  const width = 600;
  const height = 400;
  const margin = { top: 20, right: 20, bottom: 50, left: 50 };

  const keys = Object.keys(config);
  const maxValue = Math.max(
    ...data.flatMap((item) => keys.map((key) => Number(item[key] || 0)))
  );

  const xScale = (index) =>
    margin.left + index * ((width - margin.left - margin.right) / data.length);
  const yScale = (value) =>
    height - margin.bottom - (value / maxValue) * (height - margin.top - margin.bottom);
  const barWidth = (width - margin.left - margin.right) / (data.length * keys.length);

  return (
    <div className="bg-gray-900 p-4 rounded-lg">
      <svg className={`w-full ${className}`} viewBox={`0 0 ${width} ${height}`}>
        <defs>
          {keys.map((key) => (
            <filter key={`glow-${key}`} id={`glow-${key}`}>
              <feGaussianBlur stdDeviation="3" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          ))}
        </defs>

        {/* Grid Lines */}
        {Array.from({ length: 5 }).map((_, i) => {
          const value = (maxValue / 5) * (i + 1);
          const y = yScale(value);
          return (
            <g key={i}>
              <line
                x1={margin.left}
                y1={y}
                x2={width - margin.right}
                y2={y}
                stroke="#374151"
                strokeWidth="1"
              />
              <text
                x={margin.left - 10}
                y={y + 5}
                fontSize="12"
                fill="#e5e7eb"
                textAnchor="end"
              >
                {Math.round(value)}
              </text>
            </g>
          );
        })}

        {/* X-axis labels */}
        {data.map((item, index) => (
          <text
            key={index}
            x={xScale(index) + (keys.length * barWidth) / 2}
            y={height - margin.bottom + 20}
            textAnchor="middle"
            fontSize="12"
            fill="#e5e7eb"
          >
            {item["month"]}
          </text>
        ))}

        {/* Bars */}
        {data.map((item, index) =>
          keys.map((key, keyIndex) => {
            const value = Number(item[key] || 0);
            const isHovered = hoveredBar?.key === key && hoveredBar?.index === index;

            return (
              <g
                key={`${index}-${key}`}
                onMouseEnter={() => setHoveredBar({ key, index })}
                onMouseLeave={() => setHoveredBar(null)}
              >
                <motion.rect
                  x={xScale(index) + keyIndex * barWidth}
                  y={yScale(value)}
                  width={barWidth - 4}
                  height={height - margin.bottom - yScale(value)}
                  fill={config[key].color}
                  filter={isHovered ? `url(#glow-${key})` : undefined}
                  stroke={config[key].glowColor}
                  strokeWidth={isHovered ? 2 : 1}
                  initial={{ height: 0 }}
                  animate={{ height: height - margin.bottom - yScale(value) }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                    ease: "backOut",
                  }}
                />
                {isHovered && (
                  <motion.g
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <text
                      x={xScale(index) + keyIndex * barWidth + (barWidth - 4) / 2}
                      y={yScale(value) - 10}
                      textAnchor="middle"
                      fontSize="12"
                      fill={config[key].glowColor}
                      filter={`url(#glow-${key})`}
                    >
                      {`${config[key].label}: ${value}`}
                    </text>
                  </motion.g>
                )}
              </g>
            );
          })
        )}
      </svg>
    </div>
  );
};

export default NeonBarChart;
