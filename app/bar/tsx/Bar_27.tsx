"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

interface WaterfallDataItem {
  label: string;
  value: number;
  color?: string;
  isTotal?: boolean;
}

interface WaterfallChartProps {
  data: WaterfallDataItem[];
  width?: number;
  height?: number;
  barWidth?: number;
  animationDuration?: number;
  showConnectors?: boolean;
  colorPalette?: {
    positive: string;
    negative: string;
    total: string;
  };
}

export default function WaterfallChart({
  data,
  width = 800,
  height = 500,
  barWidth = 40,
  animationDuration = 0.8,
  showConnectors = true,
  colorPalette = {
    positive: '#10B981',
    negative: '#EF4444',
    total: '#3B82F6'
  }
}: WaterfallChartProps) {
  const [hoveredBar, setHoveredBar] = useState<number | null>(null);
  
  const margin = { top: 40, right: 40, bottom: 60, left: 60 };
  const chartWidth = width - margin.left - margin.right;
  const chartHeight = height - margin.top - margin.bottom;
  
  // Calculate running total and find min/max values
  let runningTotal = 0;
  const totals = data.map(item => {
    if (item.isTotal) {
      return item.value;
    }
    runningTotal += item.value;
    return runningTotal;
  });
  
  const minValue = Math.min(0, ...totals);
  const maxValue = Math.max(...totals);
  const valueRange = maxValue - minValue;
  
  // Calculate bar positions and dimensions
  const bars = data.map((item, index) => {
    const previousTotal = index === 0 ? 0 : totals[index - 1];
    const x = margin.left + (chartWidth / (data.length + 1)) * (index + 1);
    
    let y, barHeight;
    if (item.isTotal) {
      y = margin.top + chartHeight - ((item.value - minValue) / valueRange) * chartHeight;
      barHeight = ((item.value - minValue) / valueRange) * chartHeight;
    } else {
      const start = previousTotal;
      const end = start + item.value;
      const startY = margin.top + chartHeight - ((start - minValue) / valueRange) * chartHeight;
      const endY = margin.top + chartHeight - ((end - minValue) / valueRange) * chartHeight;
      y = item.value >= 0 ? endY : startY;
      barHeight = Math.abs(startY - endY);
    }
    
    return {
      x,
      y,
      width: barWidth,
      height: barHeight,
      item,
      previousTotal,
      total: item.isTotal ? item.value : previousTotal + item.value
    };
  });
  
  return (
    <div className="relative" style={{ width, height }}>
      <svg width={width} height={height}>
        {/* Grid lines */}
        {Array.from({ length: 6 }).map((_, i) => {
          const y = margin.top + (chartHeight / 5) * i;
          const value = maxValue - (valueRange / 5) * i;
          
          return (
            <g key={i}>
              <line
                x1={margin.left}
                y1={y}
                x2={width - margin.right}
                y2={y}
                stroke="#e2e8f0"
                strokeWidth="1"
                strokeDasharray="4 2"
              />
              <text
                x={margin.left - 10}
                y={y}
                textAnchor="end"
                dominantBaseline="middle"
                className="text-xs fill-gray-500"
              >
                {value.toFixed(0)}
              </text>
            </g>
          );
        })}
        
        {/* Connectors */}
        {showConnectors && bars.map((bar, index) => {
          if (index === 0) return null;
          const previousBar = bars[index - 1];
          
          return (
            <motion.line
              key={`connector-${index}`}
              x1={previousBar.x + barWidth}
              y1={previousBar.y}
              x2={bar.x}
              y2={bar.y}
              stroke="#94A3B8"
              strokeWidth="1"
              strokeDasharray="4 2"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: animationDuration, delay: index * 0.1 }}
            />
          );
        })}
        
        {/* Bars */}
        {bars.map((bar, index) => {
          const isHovered = hoveredBar === index;
          const color = bar.item.color || (
            bar.item.isTotal ? colorPalette.total :
            bar.item.value >= 0 ? colorPalette.positive :
            colorPalette.negative
          );
          
          return (
            <g key={index}>
              <motion.rect
                x={bar.x}
                y={bar.y}
                width={bar.width}
                height={bar.height}
                fill={color}
                fillOpacity={isHovered ? 0.9 : 0.7}
                stroke={color}
                strokeWidth={isHovered ? 2 : 1}
                initial={{ scaleY: 0, opacity: 0 }}
                animate={{ scaleY: 1, opacity: 1 }}
                transition={{ 
                  duration: animationDuration,
                  delay: index * 0.1,
                  type: 'spring',
                  stiffness: 100
                }}
                onMouseEnter={() => setHoveredBar(index)}
                onMouseLeave={() => setHoveredBar(null)}
              />
              
              {/* Bar value */}
              <motion.text
                x={bar.x + barWidth / 2}
                y={bar.y - 8}
                textAnchor="middle"
                className={`text-xs ${isHovered ? 'font-semibold' : 'font-normal'} fill-gray-700`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: animationDuration + index * 0.1 }}
              >
                {bar.item.value >= 0 ? '+' : ''}{bar.item.value}
              </motion.text>
              
              {/* X-axis labels */}
              <motion.text
                x={bar.x + barWidth / 2}
                y={height - margin.bottom + 20}
                textAnchor="middle"
                className="text-xs fill-gray-500"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: animationDuration + index * 0.1 }}
              >
                {bar.item.label}
              </motion.text>
            </g>
          );
        })}
      </svg>
      
      {/* Tooltip */}
      {hoveredBar !== null && (
        <div
          className="absolute bg-white p-2 rounded shadow-lg text-sm z-10"
          style={{
            left: bars[hoveredBar].x + barWidth / 2,
            top: bars[hoveredBar].y - 40,
            transform: 'translateX(-50%)'
          }}
        >
          <div className="font-medium">{bars[hoveredBar].item.label}</div>
          <div>Change: {bars[hoveredBar].item.value >= 0 ? '+' : ''}{bars[hoveredBar].item.value}</div>
          <div>Total: {bars[hoveredBar].total}</div>
        </div>
      )}
    </div>
  );
}

// Example Usage
const exampleData: WaterfallDataItem[] = [
  { label: "Jan", value: 1200, isTotal: true },
  { label: "Feb", value: 1400, isTotal: true },
  { label: "Mar", value: 1100, isTotal: true },
  { label: "Apr", value: 1600, isTotal: true },
  { label: "May", value: 1800, isTotal: true },
  { label: "Jun", value: 2000, isTotal: true },
];

export function Component() {
  return <WaterfallChart data={exampleData} width={800} height={500} />;
} 