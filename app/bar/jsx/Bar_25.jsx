"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

const IsometricBarChart = ({ data, config, className }) => {
  const [hoveredBar, setHoveredBar] = useState(null);

  const width = 800;
  const height = 500;
  const margin = { top: 40, right: 40, bottom: 60, left: 60 };

  const keys = Object.keys(config);
  const maxValue = Math.max(
    ...data.flatMap((item) => keys.map((key) => Number(item[key] || 0)))
  );

  const xScale = (index) =>
    margin.left + index * ((width - margin.left - margin.right) / data.length);
  const yScale = (value) =>
    height - margin.bottom - (value / maxValue) * (height - margin.top - margin.bottom);
  const barWidth = ((width - margin.left - margin.right) / (data.length * keys.length)) * 0.8;

  return (
    <div className="bg-white p-4 rounded-lg">
      <svg className={`w-full ${className}`} viewBox={`0 0 ${width} ${height}`}>
        {/* Grid and Labels */}
        {Array.from({ length: 5 }).map((_, i) => {
          const value = (maxValue / 5) * (i + 1);
          const y = yScale(value);
          return (
            <g key={i} opacity={0.3}>
              <line
                x1={margin.left}
                y1={y}
                x2={width - margin.right}
                y2={y}
                stroke="#94a3b8"
                strokeDasharray="4 2"
              />
              <text x={margin.left - 10} y={y + 5} fontSize="12" textAnchor="end">
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
            fill="#475569"
          >
            {item["month"]}
          </text>
        ))}
      </svg>
    </div>
  );
};

export default IsometricBarChart;
