'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

interface DataItem {
  label: string
  value: number
  color: string
}

interface RadialBarChartProps {
  data: DataItem[]
  width?: number
  height?: number
  innerRadius?: number
  animationDuration?: number
  showLabels?: boolean
  showValues?: boolean
}

export default function RadialBarChart({
  data,
  width = 500,
  height = 500,
  innerRadius = 80,
  animationDuration = 0.8,
  showLabels = true,
  showValues = true,
  ...props
}: RadialBarChartProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  
  const centerX = width / 2
  const centerY = height / 2
  const outerRadius = Math.min(centerX, centerY) - 20
  
  // Find the maximum value for scaling
  const maxValue = Math.max(...data.map(item => item.value))
  
  // Calculate the angle for each segment
  const anglePerSegment = (2 * Math.PI) / data.length
  
  return (
    <div className="relative bg-white" style={{ width, height }} {...props}>
      <svg width={width} height={height}>
        {/* Background circle */}
        <circle
          cx={centerX}
          cy={centerY}
          r={outerRadius}
          fill="none"
          stroke="#f3f4f6"
          strokeWidth="1"
        />
        
        {/* Inner circle */}
        <circle
          cx={centerX}
          cy={centerY}
          r={innerRadius}
          fill="#f9fafb"
          stroke="#e5e7eb"
          strokeWidth="1"
        />
        
        {/* Radial bars */}
        {data.map((item, index) => {
          const angle = index * anglePerSegment - Math.PI / 2
          const normalizedValue = item.value / maxValue
          const barRadius = innerRadius + (outerRadius - innerRadius) * normalizedValue
          
          const x1 = centerX + innerRadius * Math.cos(angle)
          const y1 = centerY + innerRadius * Math.sin(angle)
          const x2 = centerX + barRadius * Math.cos(angle)
          const y2 = centerY + barRadius * Math.sin(angle)
          
          const isHovered = hoveredIndex === index
          
          return (
            <g key={index}>
              {/* Background line */}
              <line
                x1={x1}
                y1={y1}
                x2={centerX + outerRadius * Math.cos(angle)}
                y2={centerY + outerRadius * Math.sin(angle)}
                stroke="#e5e7eb"
                strokeWidth="2"
              />
              
              {/* Value line with animation */}
              <motion.line
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke={item.color}
                strokeWidth={isHovered ? "4" : "3"}
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: animationDuration, delay: index * 0.1 }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              />
              
              {/* Dot at the end of the line */}
              <motion.circle
                cx={x2}
                cy={y2}
                r={isHovered ? 6 : 4}
                fill={item.color}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3, delay: animationDuration + index * 0.1 }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              />
            </g>
          )
        })}
        
        {/* Center text */}
        <text
          x={centerX}
          y={centerY}
          textAnchor="middle"
          dominantBaseline="middle"
          className="text-lg font-semibold fill-gray-700"
        >
          {hoveredIndex !== null ? data[hoveredIndex].label : 'Metrics'}
        </text>
        
        {/* Labels */}
        {showLabels && data.map((item, index) => {
          const angle = index * anglePerSegment - Math.PI / 2
          const labelRadius = outerRadius + 20
          const x = centerX + labelRadius * Math.cos(angle)
          const y = centerY + labelRadius * Math.sin(angle)
          
          const isHovered = hoveredIndex === index
          
          return (
            <motion.text
              key={index}
              x={x}
              y={y}
              textAnchor="middle"
              dominantBaseline="middle"
              className={`text-sm ${isHovered ? 'font-semibold' : 'font-normal'} fill-gray-700`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: animationDuration + 0.2 + index * 0.05 }}
            >
              {item.label}
            </motion.text>
          )
        })}
        
        {/* Values */}
        {showValues && hoveredIndex !== null && (
          <motion.text
            x={centerX}
            y={centerY + 20}
            textAnchor="middle"
            className="text-sm fill-gray-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
          >
            {data[hoveredIndex].value}
          </motion.text>
        )}
      </svg>
    </div>
  )
}
