"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

interface PolarAreaDataItem {
  label: string;
  value: number;
  color?: string;
}

interface PolarAreaChartProps {
  data: PolarAreaDataItem[];
  width?: number;
  height?: number;
  startAngle?: number;
  endAngle?: number;
  innerRadius?: number;
  animationDuration?: number;
  showLabels?: boolean;
  colorPalette?: string[];
}

export default function PolarAreaChart({
  data,
  width = 500,
  height = 500,
  startAngle = 0,
  endAngle = 360,
  innerRadius = 50,
  animationDuration = 0.8,
  showLabels = true,
  colorPalette = ['#3B82F6', '#10B981', '#F59E0B', '#EF4444', '#8B5CF6', '#EC4899', '#6366F1', '#14B8A6', '#F97316', '#06B6D4']
}: PolarAreaChartProps) {
  const [hoveredSegment, setHoveredSegment] = useState<number | null>(null);
  
  const center = { x: width / 2, y: height / 2 };
  const maxRadius = Math.min(width, height) / 2 - 40;
  const angleRange = endAngle - startAngle;
  
  // Calculate segment angles and paths
  const segments = data.map((item, index) => {
    const startAngleRad = ((startAngle + index * (angleRange / data.length)) * Math.PI) / 180;
    const endAngleRad = ((startAngle + (index + 1) * (angleRange / data.length)) * Math.PI) / 180;
    const radius = innerRadius + ((maxRadius - innerRadius) * item.value) / Math.max(...data.map(d => d.value));
    
    // Calculate path
    const path = [
      `M ${center.x + innerRadius * Math.cos(startAngleRad)} ${center.y + innerRadius * Math.sin(startAngleRad)}`,
      `L ${center.x + radius * Math.cos(startAngleRad)} ${center.y + radius * Math.sin(startAngleRad)}`,
      `A ${radius} ${radius} 0 0 1 ${center.x + radius * Math.cos(endAngleRad)} ${center.y + radius * Math.sin(endAngleRad)}`,
      `L ${center.x + innerRadius * Math.cos(endAngleRad)} ${center.y + innerRadius * Math.sin(endAngleRad)}`,
      `A ${innerRadius} ${innerRadius} 0 0 0 ${center.x + innerRadius * Math.cos(startAngleRad)} ${center.y + innerRadius * Math.sin(startAngleRad)}`,
      'Z'
    ].join(' ');
    
    // Calculate label position
    const labelAngle = (startAngleRad + endAngleRad) / 2;
    const labelRadius = radius * 0.7;
    const labelPos = {
      x: center.x + labelRadius * Math.cos(labelAngle),
      y: center.y + labelRadius * Math.sin(labelAngle)
    };
    
    return {
      path,
      labelPos,
      item,
      color: item.color || colorPalette[index % colorPalette.length]
    };
  });
  
  return (
    <div className="relative" style={{ width, height }}>
      <svg width={width} height={height}>
        {/* Background circle */}
        <circle
          cx={center.x}
          cy={center.y}
          r={maxRadius}
          fill="#f8fafc"
          stroke="#e2e8f0"
          strokeWidth="1"
        />
        
        {/* Segments */}
        {segments.map((segment, index) => {
          const isHovered = hoveredSegment === index;
          
          return (
            <g key={index}>
              <motion.path
                d={segment.path}
                fill={segment.color}
                fillOpacity={isHovered ? 0.9 : 0.7}
                stroke="white"
                strokeWidth={isHovered ? 2 : 1}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ 
                  scale: 1, 
                  opacity: 1,
                  transform: isHovered ? 'scale(1.02)' : 'scale(1)'
                }}
                transition={{ 
                  duration: animationDuration,
                  delay: index * 0.1,
                  type: 'spring',
                  stiffness: 100
                }}
                onMouseEnter={() => setHoveredSegment(index)}
                onMouseLeave={() => setHoveredSegment(null)}
              />
              
              {/* Labels */}
              {showLabels && (
                <motion.text
                  x={segment.labelPos.x}
                  y={segment.labelPos.y}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  className={`text-sm ${isHovered ? 'font-semibold' : 'font-normal'} fill-white`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: animationDuration + index * 0.1 }}
                >
                  {segment.item.label}
                </motion.text>
              )}
            </g>
          );
        })}
        
        {/* Center circle */}
        <circle
          cx={center.x}
          cy={center.y}
          r={innerRadius}
          fill="white"
          stroke="#e2e8f0"
          strokeWidth="1"
        />
      </svg>
      
      {/* Tooltip */}
      {hoveredSegment !== null && (
        <div
          className="absolute bg-white p-2 rounded shadow-lg text-sm"
          style={{
            left: segments[hoveredSegment].labelPos.x,
            top: segments[hoveredSegment].labelPos.y - 40,
            transform: 'translateX(-50%)'
          }}
        >
          <div className="font-medium">{segments[hoveredSegment].item.label}</div>
          <div>Value: {segments[hoveredSegment].item.value}</div>
        </div>
      )}
      
      {/* Legend */}
      <div className="absolute top-2 right-2 bg-white bg-opacity-90 p-2 rounded-md shadow-sm">
        <div className="text-sm font-medium text-gray-700 mb-1">Legend</div>
        <div className="flex flex-col gap-1">
          {segments.map((segment, i) => (
            <div key={i} className="flex items-center gap-2">
              <div 
                className="w-3 h-3 rounded-full" 
                style={{ backgroundColor: segment.color }}
              />
              <span className="text-xs text-gray-600">
                {segment.item.label}: {segment.item.value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Example Usage
const exampleData = [
  { label: "Marketing", value: 30 },
  { label: "Sales", value: 45 },
  { label: "Development", value: 25 },
];

export function Component() {
  return <PolarAreaChart data={exampleData} />;
} 