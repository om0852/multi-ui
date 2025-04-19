'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

interface DataItem {
  id: string
  value: number
  color: string
  label: string
}

interface PieChartProps {
  data: DataItem[]
  width?: number
  height?: number
}

export default function PieChart({ data, width = 400, height = 400 }: PieChartProps) {
  const [selectedSlice, setSelectedSlice] = useState<string | null>(null)
  
  // Calculate total for percentages
  const total = data.reduce((sum, item) => sum + item.value, 0)
  
  // Calculate the SVG coordinates and paths
  const center = { x: width / 2, y: height / 2 }
  const radius = Math.min(width, height) / 2 - 40 // Leave space for labels
  
  let currentAngle = 0
  const slices = data.map(item => {
    const percentage = item.value / total
    const angle = percentage * 360
    
    // Calculate path for the slice
    const startAngle = currentAngle
    const endAngle = currentAngle + angle
    const startRad = (startAngle - 90) * (Math.PI / 180)
    const endRad = (endAngle - 90) * (Math.PI / 180)
    
    const x1 = center.x + radius * Math.cos(startRad)
    const y1 = center.y + radius * Math.sin(startRad)
    const x2 = center.x + radius * Math.cos(endRad)
    const y2 = center.y + radius * Math.sin(endRad)
    
    const largeArcFlag = angle > 180 ? 1 : 0
    
    // Calculate label position
    const labelRad = (startAngle + angle / 2 - 90) * (Math.PI / 180)
    const labelRadius = radius + 30
    const labelX = center.x + labelRadius * Math.cos(labelRad)
    const labelY = center.y + labelRadius * Math.sin(labelRad)
    
    const path = `M ${center.x} ${center.y} L ${x1} ${y1} A ${radius} ${radius} 0 ${largeArcFlag} 1 ${x2} ${y2} Z`
    
    currentAngle += angle
    
    return {
      ...item,
      path,
      labelX,
      labelY,
      percentage
    }
  })

  return (
    <div className="relative" style={{ width, height }}>
      <svg width={width} height={height}>
        {slices.map((slice) => (
          <g key={slice.id}>
            <motion.path
              d={slice.path}
              fill={slice.color}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{
                opacity: 1,
                scale: selectedSlice === slice.id ? 1.1 : 1,
              }}
              transition={{
                duration: 0.5,
                type: 'spring',
                stiffness: 300,
                damping: 25
              }}
              whileHover={{ scale: 1.15 }}
              onHoverStart={() => setSelectedSlice(slice.id)}
              onHoverEnd={() => setSelectedSlice(null)}
              className="cursor-pointer"
            />
            <motion.text
              x={slice.labelX}
              y={slice.labelY}
              textAnchor="middle"
              dominantBaseline="middle"
              initial={{ opacity: 0 }}
              animate={{
                opacity: selectedSlice === slice.id ? 1 : 0.8
              }}
              transition={{
                delay: 0.5,
                type: 'spring',
                stiffness: 300,
                damping: 30
              }}
              className="text-sm fill-gray-700 font-semibold"
            >
              {slice.label} ({Math.round(slice.percentage * 100)}%)
            </motion.text>
          </g>
        ))}
      </svg>
      
      {/* Legend */}
      <div className="absolute top-[-20vh] left-0 bg-white/80 p-4 rounded-lg backdrop-blur-sm">
        {data.map((item) => (
          <div key={item.id} className="flex items-center gap-2 mb-2">
            <div
              className="w-4 h-4 rounded"
              style={{ backgroundColor: item.color }}
            />
            <span className="text-sm text-gray-700">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
