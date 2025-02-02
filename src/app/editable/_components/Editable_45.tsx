'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface ChartData {
  id: string
  title: string
  type: 'line' | 'bar' | 'pie' | 'area'
  data: {
    labels: string[]
    datasets: {
      label: string
      data: number[]
      color: string
    }[]
  }
  period: '1d' | '7d' | '30d' | '90d' | '1y'
  comparison?: {
    value: number
    change: number
    trend: 'up' | 'down' | 'neutral'
  }
}

interface Editable_45Props {
  initialContent: string
  onSave: (content: string) => void
  className?: string
  charts?: ChartData[]
}

export const Editable_45: React.FC<Editable_45Props> = ({
  initialContent,
  onSave,
  className = '',
  charts = [
    {
      id: '1',
      title: 'Revenue Overview',
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [
          {
            label: 'Current Year',
            data: [30000, 45000, 42000, 50000, 48000, 55000],
            color: '#3B82F6',
          },
          {
            label: 'Previous Year',
            data: [25000, 38000, 35000, 45000, 40000, 48000],
            color: '#9CA3AF',
          },
        ],
      },
      period: '30d',
      comparison: {
        value: 55000,
        change: 12.5,
        trend: 'up',
      },
    },
    {
      id: '2',
      title: 'User Engagement',
      type: 'bar',
      data: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [
          {
            label: 'Active Users',
            data: [1200, 1500, 1800, 1600, 2000, 1700, 1400],
            color: '#10B981',
          },
        ],
      },
      period: '7d',
      comparison: {
        value: 1600,
        change: -5.2,
        trend: 'down',
      },
    },
    {
      id: '3',
      title: 'Traffic Sources',
      type: 'pie',
      data: {
        labels: ['Direct', 'Organic', 'Referral', 'Social'],
        datasets: [
          {
            label: 'Traffic',
            data: [35, 25, 20, 20],
            color: '#6366F1',
          },
        ],
      },
      period: '30d',
    },
    {
      id: '4',
      title: 'Conversion Rate',
      type: 'area',
      data: {
        labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
        datasets: [
          {
            label: 'Conversion',
            data: [2.5, 3.2, 2.8, 3.5],
            color: '#F59E0B',
          },
        ],
      },
      period: '30d',
      comparison: {
        value: 3.5,
        change: 0.8,
        trend: 'up',
      },
    },
  ],
}) => {
  const [selectedPeriod, setSelectedPeriod] = useState<ChartData['period']>('30d')
  const [isEditing, setIsEditing] = useState(false)
  const [content, setContent] = useState(initialContent)

  const handleSave = () => {
    onSave(content)
    setIsEditing(false)
  }

  const periods = [
    { value: '1d', label: '24 Hours' },
    { value: '7d', label: '7 Days' },
    { value: '30d', label: '30 Days' },
    { value: '90d', label: '90 Days' },
    { value: '1y', label: '1 Year' },
  ]

  const getChartPath = (data: number[], height: number, type: ChartData['type']) => {
    const max = Math.max(...data) * 1.1
    const min = Math.min(...data) * 0.9
    const range = max - min
    const width = 100 // percentage
    const points = data.map((d, i) => ({
      x: (i / (data.length - 1)) * width,
      y: ((d - min) / range) * height,
    }))

    if (type === 'area') {
      return `M${points.map(p => `${p.x},${height - p.y}`).join(' L')} L${width},${height} L0,${height} Z`
    }

    return `M${points.map(p => `${p.x},${height - p.y}`).join(' L')}`
  }

  const formatNumber = (num: number) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M'
    }
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'K'
    }
    return num.toFixed(1)
  }

  return (
    <motion.div
      className={`bg-white rounded-xl border border-gray-200 shadow-sm ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Dashboard header */}
      <div className="p-4 border-b border-gray-100">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-medium text-gray-900">Analytics Dashboard</h2>
          <div className="flex items-center space-x-2">
            <select
              value={selectedPeriod}
              onChange={(e) => setSelectedPeriod(e.target.value as ChartData['period'])}
              className="px-3 py-1.5 text-sm bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              {periods.map((period) => (
                <option key={period.value} value={period.value}>
                  {period.label}
                </option>
              ))}
            </select>
            <button
              onClick={() => setIsEditing(true)}
              className="px-4 py-2 text-sm bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            >
              Export Data
            </button>
          </div>
        </div>
      </div>

      {/* Charts grid */}
      <div className="p-4">
        <div className="grid grid-cols-2 gap-4">
          {charts.map((chart) => (
            <motion.div
              key={chart.id}
              className="p-4 bg-gray-50 rounded-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-sm font-medium text-gray-900">{chart.title}</h3>
                  {chart.comparison && (
                    <div className="flex items-baseline space-x-2 mt-1">
                      <span className="text-2xl font-semibold text-gray-900">
                        {formatNumber(chart.comparison.value)}
                      </span>
                      <span
                        className={`text-sm font-medium ${
                          chart.comparison.trend === 'up'
                            ? 'text-green-600'
                            : chart.comparison.trend === 'down'
                            ? 'text-red-600'
                            : 'text-gray-600'
                        }`}
                      >
                        {chart.comparison.change > 0 ? '+' : ''}
                        {chart.comparison.change}%
                      </span>
                    </div>
                  )}
                </div>
                <button className="p-1.5 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                  </svg>
                </button>
              </div>
              <div className="relative h-48">
                {chart.type === 'pie' ? (
                  <div className="flex items-center justify-center h-full">
                    <div className="w-32 h-32 rounded-full border-8 border-blue-500 relative">
                      {chart.data.datasets[0].data.map((value, index) => {
                        const offset = chart.data.datasets[0].data
                          .slice(0, index)
                          .reduce((sum, v) => sum + v, 0)
                        const percentage = (value / chart.data.datasets[0].data.reduce((sum, v) => sum + v, 0)) * 100
                        return (
                          <div
                            key={index}
                            className="absolute inset-0"
                            style={{
                              transform: `rotate(${offset * 3.6}deg)`,
                              clipPath: `polygon(50% 50%, 50% 0, ${50 + percentage * 0.5}% 0)`,
                              backgroundColor: chart.data.datasets[0].color,
                            }}
                          />
                        )
                      })}
                    </div>
                  </div>
                ) : (
                  <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    {chart.type === 'bar' ? (
                      chart.data.datasets.map((dataset, datasetIndex) =>
                        dataset.data.map((value, index) => {
                          const barWidth = 100 / dataset.data.length * 0.8
                          const barSpacing = 100 / dataset.data.length
                          const barHeight = (value / Math.max(...dataset.data)) * 100
                          return (
                            <motion.rect
                              key={`${datasetIndex}-${index}`}
                              x={index * barSpacing}
                              y={100 - barHeight}
                              width={barWidth}
                              height={barHeight}
                              fill={dataset.color}
                              initial={{ height: 0, y: 100 }}
                              animate={{ height: barHeight, y: 100 - barHeight }}
                              transition={{ duration: 0.5, delay: index * 0.1 }}
                            />
                          )
                        })
                      )
                    ) : (
                      chart.data.datasets.map((dataset, index) => (
                        <motion.path
                          key={index}
                          d={getChartPath(dataset.data, 100, chart.type)}
                          fill={chart.type === 'area' ? `${dataset.color}20` : 'none'}
                          stroke={dataset.color}
                          strokeWidth="2"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ duration: 1 }}
                        />
                      ))
                    )}
                  </svg>
                )}
              </div>
              <div className="mt-4">
                <div className="flex items-center justify-center space-x-4">
                  {chart.data.datasets.map((dataset, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div
                        className="w-3 h-3 rounded-full"
                        style={{ backgroundColor: dataset.color }}
                      />
                      <span className="text-xs text-gray-600">{dataset.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  )
} 