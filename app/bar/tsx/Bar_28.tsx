"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

interface FunnelDataItem {
  label: string;
  value: number;
  color?: string;
  description?: string;
}

interface FunnelChartProps {
  data: FunnelDataItem[];
  width?: number;
  height?: number;
  gapBetweenLevels?: number;
  animationDuration?: number;
  showPercentages?: boolean;
  colorPalette?: string[];
}

export default function FunnelChart({
  data,
  width = 800,
  height = 500,
  gapBetweenLevels = 4,
  animationDuration = 0.8,
  showPercentages = true,
  colorPalette = ['#3B82F6', '#10B981', '#F59E0B', '#EF4444', '#8B5CF6', '#EC4899', '#6366F1'],
  ...props
}: FunnelChartProps) {
  const [hoveredLevel, setHoveredLevel] = useState<number | null>(null);
  
  const margin = { top: 40, right: 160, bottom: 40, left: 160 };
  const chartWidth = width - margin.left - margin.right;
  const chartHeight = height - margin.top - margin.bottom;
  
  // Sort data by value in descending order
  const sortedData = [...data].sort((a, b) => b.value - a.value);
  const maxValue = sortedData[0].value;
  
  // Calculate dimensions for each level
  const levels = sortedData.map((item, index) => {
    const percentage = (item.value / maxValue) * 100;
    const levelHeight = (chartHeight - (data.length - 1) * gapBetweenLevels) / data.length;
    const y = margin.top + index * (levelHeight + gapBetweenLevels);
    const topWidth = chartWidth * (percentage / 100);
    const bottomWidth = index < data.length - 1 
      ? chartWidth * (sortedData[index + 1].value / maxValue)
      : topWidth * 0.2;
    
    return {
      item,
      y,
      height: levelHeight,
      topWidth,
      bottomWidth,
      percentage,
      dropoff: index > 0 ? ((sortedData[index - 1].value - item.value) / sortedData[index - 1].value) * 100 : 0
    };
  });
  
  return (
    <div className="relative bg-white" style={{ width, height }} {...props}>
      <svg width={width} height={height}>
        {/* Funnel levels */}
        {levels.map((level, index) => {
          const isHovered = hoveredLevel === index;
          const color = level.item.color || colorPalette[index % colorPalette.length];
          
          // Calculate trapezoid points
          const points = [
            // Top left
            `${margin.left + (chartWidth - level.topWidth) / 2},${level.y}`,
            // Top right
            `${margin.left + (chartWidth + level.topWidth) / 2},${level.y}`,
            // Bottom right
            `${margin.left + (chartWidth + level.bottomWidth) / 2},${level.y + level.height}`,
            // Bottom left
            `${margin.left + (chartWidth - level.bottomWidth) / 2},${level.y + level.height}`
          ].join(' ');
          
          return (
            <g key={index}>
              <motion.polygon
                points={points}
                fill={color}
                fillOpacity={isHovered ? 0.9 : 0.7}
                stroke={color}
                strokeWidth={isHovered ? 2 : 1}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ 
                  opacity: 1,
                  scale: 1,
                  transform: isHovered ? 'scale(1.02)' : 'scale(1)'
                }}
                transition={{ 
                  duration: animationDuration,
                  delay: index * 0.1,
                  type: 'spring',
                  stiffness: 100
                }}
                onMouseEnter={() => setHoveredLevel(index)}
                onMouseLeave={() => setHoveredLevel(null)}
              />
              
              {/* Left label */}
              <motion.text
                x={margin.left - 20}
                y={level.y + level.height / 2}
                textAnchor="end"
                dominantBaseline="middle"
                className={`text-sm ${isHovered ? 'font-semibold' : 'font-normal'} fill-gray-700`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: margin.left - 20 }}
                transition={{ duration: 0.3, delay: animationDuration + index * 0.1 }}
              >
                {level.item.label}
              </motion.text>
              
              {/* Right value and percentage */}
              <motion.text
                x={width - margin.right + 20}
                y={level.y + level.height / 2}
                textAnchor="start"
                dominantBaseline="middle"
                className="text-sm fill-gray-600"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: width - margin.right + 20 }}
                transition={{ duration: 0.3, delay: animationDuration + index * 0.1 }}
              >
                <tspan className={isHovered ? 'font-semibold' : 'font-normal'}>
                  {level.item.value.toLocaleString()}
                </tspan>
                {showPercentages && (
                  <tspan dx="8" className="text-xs fill-gray-400">
                    ({level.percentage.toFixed(1)}%)
                  </tspan>
                )}
              </motion.text>
            </g>
          );
        })}
      </svg>
      
      {/* Tooltip */}
      {hoveredLevel !== null && (
        <div
          className="absolute bg-white p-3 rounded shadow-lg text-sm z-10"
          style={{
            left: width / 2,
            top: levels[hoveredLevel].y + levels[hoveredLevel].height / 2,
            transform: 'translate(-50%, -50%)'
          }}
        >
          <div className="font-medium">{levels[hoveredLevel].item.label}</div>
          <div>Value: {levels[hoveredLevel].item.value.toLocaleString()}</div>
          <div>Conversion: {levels[hoveredLevel].percentage.toFixed(1)}%</div>
          {hoveredLevel > 0 && (
            <div className="text-red-500">
              Dropoff: {levels[hoveredLevel].dropoff.toFixed(1)}%
            </div>
          )}
          {levels[hoveredLevel].item.description && (
            <div className="mt-1 text-xs text-gray-500">
              {levels[hoveredLevel].item.description}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

// Example Usage
const exampleData: FunnelDataItem[] = [
  { label: "Visitors", value: 1000 },
  { label: "Leads", value: 200 },
  { label: "Proposals", value: 100 },
  { label: "Negotiations", value: 50 },
  { label: "Closed Deals", value: 20 },
];

export function Component() {
  return <FunnelChart data={exampleData} width={800} height={500} />;
} 