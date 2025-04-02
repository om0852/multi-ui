"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

const PolarBarChart = ({ data, config, className }) => {
  const [hoveredBar, setHoveredBar] = useState(null);

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
  const barWidth = (2 * Math.PI * radius) / (data.length * 4);

  const polarToCartesian = (angle, r) => ({
    x: centerX + r * Math.cos(angle - Math.PI / 2),
    y: centerY + r * Math.sin(angle - Math.PI / 2),
  });

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

        {data.map((item, index) =>
          keys.map((key, keyIndex) => {
            const value = Number(item[key] || 0);
            const angle = index * angleStep;
            const r = (value / maxValue) * radius;
            const isHovered =
              hoveredBar?.key === key && hoveredBar?.index === index;

            const startAngle = angle - barWidth / 2;
            const endAngle = angle + barWidth / 2;

            const path = [
              `M ${polarToCartesian(startAngle, 0).x} ${polarToCartesian(startAngle, 0).y}`,
              `L ${polarToCartesian(startAngle, r).x} ${polarToCartesian(startAngle, r).y}`,
              `A ${r} ${r} 0 0 1 ${polarToCartesian(endAngle, r).x} ${polarToCartesian(endAngle, r).y}`,
              `L ${polarToCartesian(endAngle, 0).x} ${polarToCartesian(endAngle, 0).y}`,
              "Z",
            ].join(" ");

            return (
              <g key={`${index}-${key}`}>
                <motion.path
                  d={path}
                  fill={config[key].color}
                  opacity={0.7}
                  onMouseEnter={() => setHoveredBar({ key, index })}
                  onMouseLeave={() => setHoveredBar(null)}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 20,
                    delay: index * 0.1,
                  }}
                />
                {isHovered && (
                  <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                    <rect
                      x={polarToCartesian(angle, r).x - 45}
                      y={polarToCartesian(angle, r).y - 30}
                      width="90"
                      height="24"
                      fill="white"
                      rx="4"
                      filter="drop-shadow(0 1px 2px rgb(0 0 0 / 0.1))"
                    />
                    <text
                      x={polarToCartesian(angle, r).x}
                      y={polarToCartesian(angle, r).y - 14}
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
          })
        )}

        {data.map((item, index) => {
          const angle = index * angleStep;
          const labelPos = polarToCartesian(angle, radius + 30);
          return (
            <text
              key={index}
              x={labelPos.x}
              y={labelPos.y}
              fontSize="12"
              textAnchor="middle"
              fill="#64748b"
            >
              {item.label}
            </text>
          );
        })}

        <g transform={`translate(${width - 100}, 20)`}>
          {keys.map((key, index) => (
            <g key={key} transform={`translate(0, ${index * 25})`}>
              <rect width="12" height="12" fill={config[key].color} rx="2" />
              <text x="20" y="10" fontSize="12" fill="#64748b">
                {config[key].label}
              </text>
            </g>
          ))}
        </g>
      </svg>
    </div>
  );
};

export default PolarBarChart;
