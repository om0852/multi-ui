'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

interface DataPoint {
  x: number | string
  y: number
}

interface LineGraphProps {
  data: DataPoint[]
  width?: number
  height?: number
  lineColor?: string
  gradientStart?: string
  gradientEnd?: string
  dotColor?: string
}

export default function LineGraphDesign3({
  data,
  width = 600,
  height = 400,
  lineColor = '#EF4444',
  gradientStart = '#FEE2E2',
  gradientEnd = '#EF4444',
  dotColor = '#DC2626'
}: LineGraphProps) {
  const padding = 50
  const chartWidth = width - padding * 2
  const chartHeight = height - padding * 2

  const xValues = data.map(d => d.x)
  const yValues = data.map(d => d.y)

  const xScale = (x: number | string) => {
    const index = xValues.indexOf(x)
    return (index / (xValues.length - 1)) * chartWidth + padding
  }

  const yScale = (y: number) => {
    const minY = Math.min(...yValues)
    const maxY = Math.max(...yValues)
    return chartHeight - ((y - minY) / (maxY - minY)) * chartHeight + padding
  }

  const points = data.map(d => `${xScale(d.x)},${yScale(d.y)}`).join(' ')

  return (
    <div className="relative" style={{ width, height }}>
      <svg width={width} height={height}>
        {/* Gradient Background */}
        <defs>
          <linearGradient id="lineGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={gradientStart} />
            <stop offset="100%" stopColor={gradientEnd} />
          </linearGradient>
        </defs>

        <rect x="0" y="0" width={width} height={height} fill="url(#lineGradient)" opacity="0.2" />

        {/* Y-axis */}
        <line x1={padding} y1={padding} x2={padding} y2={height - padding} stroke="#E5E7EB" strokeWidth="1" />
        {/* X-axis */}
        <line x1={padding} y1={height - padding} x2={width - padding} y2={height - padding} stroke="#E5E7EB" strokeWidth="1" />

        {/* Smooth Data Line */}
        <motion.path
          d={`M ${points}`}
          fill="none"
          stroke={lineColor}
          strokeWidth="3"
          className="line-path"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 3, ease: "easeInOut" }}
        />

        {/* Data points with bouncing animation */}
        {data.map((d, i) => (
          <motion.circle
            key={i}
            cx={xScale(d.x)}
            cy={yScale(d.y)}
            r="6"
            fill={dotColor}
            initial={{ scale: 0, y: -20 }}
            animate={{ scale: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.2, type: 'spring', stiffness: 300 }}
          />
        ))}

        {/* X-axis labels with fade and slide-in animation */}
        {data.map((d, i) => (
          <motion.text
            key={i}
            x={xScale(d.x)}
            y={height - padding + 25}
            textAnchor="middle"
            className="text-xs fill-gray-700"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            {d.x}
          </motion.text>
        ))}

        {/* Y-axis labels with staggered fade-in animation */}
        {yValues.filter((_, i) => i % 2 === 0).map((y, i) => (
          <motion.text
            key={i}
            x={padding - 15}
            y={yScale(y)}
            textAnchor="end"
            dominantBaseline="middle"
            className="text-xs fill-gray-700"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: i * 0.2 }}
          >
            {y}
          </motion.text>
        ))}
      </svg>
    </div>
  )
}
