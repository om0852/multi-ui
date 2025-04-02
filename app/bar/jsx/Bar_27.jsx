"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

const RadialBarChart = ({ data, config, className }) => {
  const [hoveredSegment, setHoveredSegment] = useState(null);

  const width = 800;
  const height = 500;
  const centerX = width / 2;
  const centerY = height / 2;
  const radius = Math.min(width, height) / 3;
  const keys = Object.keys(config);

  const maxValue = Math.max(
    ...data.flatMap((item) => keys.map((key) => Number(item[key] || 0)))
  );

  const angleStep = (2 * Math.PI) / data.length;

  const getCoordinates = (angle, value) => {
    const r = (value / maxValue) * radius;
    return {
      x: centerX + r * Math.cos(angle - Math.PI / 2),
      y: centerY + r * Math.sin(angle - Math.PI / 2),
    };
  };

  return (
    <div className="bg-white p-4 rounded-lg">
      <svg className={`w-full ${className}`} viewBox={`0 0 ${width} ${height}`}>
        {[0.2, 0.4, 0.6, 0.8, 1].map((scale) => (
          <circle
            key={scale}
            cx={centerX}
            cy={centerY}
            r={radius * scale}
            fill="none"
            stroke="#e2e8f0"
            strokeWidth="1"
            strokeDasharray="4 2"
          />
        ))}

        {[0.2, 0.4, 0.6, 0.8, 1].map((scale) => (
          <text
            key={scale}
            x={centerX + 10}
            y={centerY - radius * scale}
            fontSize="12"
            fill="#64748b"
          >
            {Math.round(maxValue * scale)}
          </text>
        ))}

        {keys.map((key) => (
          <g key={key}>
            {data.map((item, index) => {
              const angle = index * angleStep;
              const value = Number(item[key] || 0);
              const coords = getCoordinates(angle, value);
              const nextIndex = (index + 1) % data.length;
              const nextValue = Number(data[nextIndex][key] || 0);
              const nextCoords = getCoordinates(nextIndex * angleStep, nextValue);
              const isHovered = hoveredSegment?.key === key && hoveredSegment?.index === index;

              return (
                <g key={index}>
                  <motion.path
                    d={`
                      M ${centerX} ${centerY}
                      L ${coords.x} ${coords.y}
                      A ${radius} ${radius} 0 0 1 ${nextCoords.x} ${nextCoords.y}
                      Z
                    `}
                    fill={config[key].color}
                    fillOpacity={0.2}
                    stroke={config[key].color}
                    strokeWidth="2"
                    onMouseEnter={() => setHoveredSegment({ key, index })}
                    onMouseLeave={() => setHoveredSegment(null)}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  />
                  {isHovered && (
                    <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                      <rect
                        x={coords.x - 45}
                        y={coords.y - 25}
                        width="90"
                        height="24"
                        fill="white"
                        rx="4"
                        filter="drop-shadow(0 1px 2px rgb(0 0 0 / 0.1))"
                      />
                      <text
                        x={coords.x}
                        y={coords.y - 8}
                        fontSize="12"
                        textAnchor="middle"
                        fill="#1e293b"
                      >
                        {`${config[key].label}: ${value}`}
                      </text>
                    </motion.g>
                  )}
                </g>
              );
            })}
          </g>
        ))}

        {data.map((item, index) => {
          const angle = index * angleStep;
          const labelRadius = radius + 30;
          const x = centerX + labelRadius * Math.cos(angle - Math.PI / 2);
          const y = centerY + labelRadius * Math.sin(angle - Math.PI / 2);
          return (
            <text
              key={index}
              x={x}
              y={y}
              fontSize="12"
              textAnchor="middle"
              fill="#64748b"
              dominantBaseline="middle"
            >
              {item.month}
            </text>
          );
        })}
      </svg>
    </div>
  );
};

export default RadialBarChart;