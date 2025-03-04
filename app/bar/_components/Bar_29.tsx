"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

interface CirclePackingNode {
  id: string;
  label: string;
  value: number;
  color?: string;
  children?: CirclePackingNode[];
}

interface CirclePackingChartProps {
  data: CirclePackingNode;
  width?: number;
  height?: number;
  padding?: number;
  animationDuration?: number;
  colorPalette?: string[];
}

interface Circle {
  x: number;
  y: number;
  r: number;
  node: CirclePackingNode;
  children?: Circle[];
}

export default function CirclePackingChart({
  data,
  width = 800,
  height = 800,
  padding = 2,
  animationDuration = 0.8,
  colorPalette = ['#3B82F6', '#10B981', '#F59E0B', '#EF4444', '#8B5CF6', '#EC4899', '#6366F1']
}: CirclePackingChartProps) {
  const [hoveredCircle, setHoveredCircle] = useState<Circle | null>(null);
  
  // Pack circles algorithm
  function packCircles(node: CirclePackingNode, availableRadius: number): Circle {
    if (!node.children || node.children.length === 0) {
      return {
        x: 0,
        y: 0,
        r: Math.sqrt(node.value),
        node
      };
    }
    
    // Pack children first
    const children = node.children.map(child => 
      packCircles(child, Math.sqrt(child.value))
    );
    
    // Calculate total area needed
    const totalArea = children.reduce((sum, circle) => 
      sum + Math.PI * circle.r * circle.r, 0
    );
    
    // Scale children to fit available space
    const scale = Math.sqrt(node.value / totalArea);
    children.forEach(circle => {
      circle.r *= scale;
      circle.x *= scale;
      circle.y *= scale;
    });
    
    // Position circles
    let currentX = 0;
    let currentY = 0;
    let rowHeight = 0;
    
    children.forEach(circle => {
      if (currentX + 2 * circle.r > availableRadius) {
        currentX = 0;
        currentY += rowHeight + padding;
        rowHeight = 0;
      }
      
      circle.x = currentX + circle.r;
      circle.y = currentY + circle.r;
      
      currentX += 2 * circle.r + padding;
      rowHeight = Math.max(rowHeight, 2 * circle.r);
    });
    
    return {
      x: 0,
      y: 0,
      r: availableRadius,
      node,
      children
    };
  }
  
  // Pack the circles starting from root
  const rootRadius = Math.min(width, height) / 2 - 40;
  const packedData = packCircles(data, rootRadius);
  
  // Center the visualization
  const centerX = width / 2;
  const centerY = height / 2;
  
  // Recursive function to render circles
  function renderCircle(circle: Circle, depth: number = 0) {
    const color = circle.node.color || colorPalette[depth % colorPalette.length];
    const isHovered = hoveredCircle === circle;
    
    return (
      <g key={circle.node.id}>
        <motion.circle
          cx={centerX + circle.x}
          cy={centerY + circle.y}
          r={circle.r}
          fill={color}
          fillOpacity={isHovered ? 0.9 : 0.7}
          stroke={color}
          strokeWidth={isHovered ? 2 : 1}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ 
            scale: 1,
            opacity: 1,
            transform: isHovered ? 'scale(1.02)' : 'scale(1)'
          }}
          transition={{ 
            duration: animationDuration,
            delay: depth * 0.1,
            type: 'spring',
            stiffness: 100
          }}
          onMouseEnter={() => setHoveredCircle(circle)}
          onMouseLeave={() => setHoveredCircle(null)}
        />
        
        {/* Label for larger circles */}
        {circle.r > 30 && (
          <motion.text
            x={centerX + circle.x}
            y={centerY + circle.y}
            textAnchor="middle"
            dominantBaseline="middle"
            className={`text-sm ${isHovered ? 'font-semibold' : 'font-normal'} fill-white`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: animationDuration + depth * 0.1 }}
          >
            {circle.node.label}
          </motion.text>
        )}
        
        {/* Render children */}
        {circle.children?.map(child => renderCircle(child, depth + 1))}
      </g>
    );
  }
  
  return (
    <div className="relative" style={{ width, height }}>
      <svg width={width} height={height}>
        {renderCircle(packedData)}
      </svg>
      
      {/* Tooltip */}
      {hoveredCircle && (
        <div
          className="absolute bg-white p-3 rounded shadow-lg text-sm z-10"
          style={{
            left: centerX + hoveredCircle.x,
            top: centerY + hoveredCircle.y - hoveredCircle.r - 20,
            transform: 'translate(-50%, -100%)'
          }}
        >
          <div className="font-medium">{hoveredCircle.node.label}</div>
          <div>Value: {hoveredCircle.node.value.toLocaleString()}</div>
          {hoveredCircle.children && (
            <div className="text-xs text-gray-500 mt-1">
              Children: {hoveredCircle.children.length}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

// Example Usage
const exampleData: CirclePackingNode = {
  id: "root",
  label: "Root",
  value: 1000,
  children: [
    {
      id: "sales",
      label: "Sales",
      value: 500,
    },
    {
      id: "refunds",
      label: "Refunds",
      value: -200,
    },
    {
      id: "fees",
      label: "Fees",
      value: -100,
    },
  ],
};

export function Component() {
  return <CirclePackingChart data={exampleData} />;
} 