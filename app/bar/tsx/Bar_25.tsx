"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

interface BubbleDataItem {
    label: string;
  value: number;
  category: string;
  color?: string;
}

interface BubbleChartProps {
  data: BubbleDataItem[];
  width?: number;
  height?: number;
  minRadius?: number;
  maxRadius?: number;
  animationDuration?: number;
  showLabels?: boolean;
  colorMap?: Record<string, string>;
}

export default function BubbleChart({
  data,
  width = 700,
  height = 500,
  minRadius = 20,
  maxRadius = 80,
  animationDuration = 1.2,
  showLabels = true,
  colorMap = {
    'Category A': '#3B82F6',
    'Category B': '#10B981',
    'Category C': '#F59E0B',
    'Category D': '#8B5CF6',
    'Category E': '#EC4899'
  }
}: BubbleChartProps) {
  const [hoveredBubble, setHoveredBubble] = useState<number | null>(null);
  
  const padding = 40;
  const chartWidth = width - padding * 2;
  const chartHeight = height - padding * 2;
  
  // Find min and max values for scaling
  const minValue = Math.min(...data.map(item => item.value));
  const maxValue = Math.max(...data.map(item => item.value));
  
  // Group data by category
  const categorizedData = data.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {} as Record<string, BubbleDataItem[]>);
  
  // Calculate positions for each bubble
  const bubblePositions = data.map((item) => {
    // Scale the value to a radius between minRadius and maxRadius
    const radius = minRadius + ((item.value - minValue) / (maxValue - minValue)) * (maxRadius - minRadius);
    
    // Calculate position based on category
    const categories = Object.keys(categorizedData);
    const categoryIndex = categories.indexOf(item.category);
    const categoryCount = categories.length;
    
    // Calculate x position based on category
    const xSection = chartWidth / categoryCount;
    const xBase = padding + (categoryIndex + 0.5) * xSection;
    
    // Calculate y position with some randomness but keep within bounds
    const itemsInCategory = categorizedData[item.category].length;
    const itemIndex = categorizedData[item.category].indexOf(item);
    const ySection = chartHeight / (itemsInCategory + 1);
    const yBase = padding + (itemIndex + 1) * ySection;
    
    // Add some randomness to x position within the section
    const xRandom = (Math.random() - 0.5) * (xSection * 0.5);
    const x = Math.max(padding + radius, Math.min(width - padding - radius, xBase + xRandom));
    
    // Add some randomness to y position
    const yRandom = (Math.random() - 0.5) * (ySection * 0.5);
    const y = Math.max(padding + radius, Math.min(height - padding - radius, yBase + yRandom));
    
    return { x, y, radius };
  });
  
  // Extract unique categories for the legend
  const categories = Array.from(new Set(data.map(item => item.category)));

  return (
    <div className="relative" style={{ width, height }}>
      <svg width={width} height={height}>
        {/* Background grid */}
        <rect
          x={padding}
          y={padding}
          width={chartWidth}
          height={chartHeight}
          fill="#f9fafb"
          stroke="#e5e7eb"
          strokeWidth="1"
          rx="8"
        />
        
        {/* Category labels */}
        {Object.keys(categorizedData).map((category, index) => {
          const xSection = chartWidth / Object.keys(categorizedData).length;
          const x = padding + (index + 0.5) * xSection;
          
          return (
            <text
              key={category}
              x={x}
              y={height - 10}
              textAnchor="middle"
              className="text-sm font-medium fill-gray-700"
            >
              {category}
              </text>
          );
        })}

        {/* Bubbles */}
        {data.map((item, index) => {
          const { x, y, radius } = bubblePositions[index];
          const isHovered = hoveredBubble === index;
          const color = item.color || colorMap[item.category] || '#3B82F6';

            return (
            <g key={index}>
              <motion.circle
                cx={x}
                cy={y}
                r={radius}
                fill={color}
                fillOpacity={isHovered ? 0.9 : 0.7}
                stroke={color}
                strokeWidth={isHovered ? 3 : 1}
                initial={{ r: 0, opacity: 0 }}
                animate={{ r: radius, opacity: 1 }}
                transition={{ 
                  duration: animationDuration,
                  delay: index * 0.05,
                  type: 'spring',
                  stiffness: 100
                }}
                onMouseEnter={() => setHoveredBubble(index)}
                onMouseLeave={() => setHoveredBubble(null)}
              />
              
              {/* Label */}
              {showLabels && (
                <motion.text
                  x={x}
                  y={y}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  className={`text-xs ${isHovered ? 'font-semibold' : 'font-normal'} fill-white`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ 
                    duration: 0.3,
                    delay: animationDuration + index * 0.05
                  }}
                >
                  {item.label}
                </motion.text>
              )}
              
              {/* Value */}
                {isHovered && (
                <motion.text
                  x={x}
                  y={y + 15}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  className="text-xs fill-white"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.2 }}
                  >
                  {item.value}
                </motion.text>
                )}
              </g>
            );
        })}
      </svg>
      
      {/* Legend */}
      <div className="absolute top-2 right-2 bg-white bg-opacity-90 p-2 rounded-md shadow-sm">
        <div className="text-sm font-medium text-gray-700 mb-1">Categories</div>
        <div className="flex flex-col gap-1">
          {categories.map((category, i) => (
            <div key={i} className="flex items-center gap-2">
              <div 
                className="w-3 h-3 rounded-full" 
                style={{ backgroundColor: colorMap[category] || '#3B82F6' }}
              />
              <span className="text-xs text-gray-600">{category}</span>
            </div>
          ))}
        </div>
      </div>
      
      {/* Tooltip */}
      {hoveredBubble !== null && (
        <div
          className="absolute bg-white p-2 rounded shadow-lg text-sm z-10"
          style={{
            left: bubblePositions[hoveredBubble].x,
            top: bubblePositions[hoveredBubble].y - bubblePositions[hoveredBubble].radius - 40,
            transform: 'translateX(-50%)'
          }}
        >
          <div className="font-medium">{data[hoveredBubble].label}</div>
          <div>Value: {data[hoveredBubble].value}</div>
          <div>Category: {data[hoveredBubble].category}</div>
        </div>
      )}
    </div>
  );
}

// Example Usage
const exampleData = [
  { label: "Product A", value: 85, category: "Category A" },
  { label: "Product B", value: 65, category: "Category A" },
  { label: "Product C", value: 120, category: "Category B" },
  { label: "Product D", value: 45, category: "Category B" },
  { label: "Product E", value: 90, category: "Category C" },
  { label: "Product F", value: 70, category: "Category C" },
  { label: "Product G", value: 110, category: "Category D" },
  { label: "Product H", value: 55, category: "Category D" },
  { label: "Product I", value: 75, category: "Category E" },
  { label: "Product J", value: 100, category: "Category E" },
];

export function Component() {
  return <BubbleChart data={exampleData} width={700} height={500} />;
} 