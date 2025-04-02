'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'

export const Editable_45 = ({
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
          { label: 'Current Year', data: [30000, 45000, 42000, 50000, 48000, 55000], color: '#3B82F6' },
          { label: 'Previous Year', data: [25000, 38000, 35000, 45000, 40000, 48000], color: '#9CA3AF' },
        ],
      },
      period: '30d',
      comparison: { value: 55000, change: 12.5, trend: 'up' },
    },
    {
      id: '2',
      title: 'User Engagement',
      type: 'bar',
      data: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [{ label: 'Active Users', data: [1200, 1500, 1800, 1600, 2000, 1700, 1400], color: '#10B981' }],
      },
      period: '7d',
      comparison: { value: 1600, change: -5.2, trend: 'down' },
    },
  ],
}) => {
  const [selectedPeriod, setSelectedPeriod] = useState('30d')
  const [content] = useState(initialContent)

  const handleSave = () => {
    onSave(content)
  }

  const periods = [
    { value: '1d', label: '24 Hours' },
    { value: '7d', label: '7 Days' },
    { value: '30d', label: '30 Days' },
    { value: '90d', label: '90 Days' },
    { value: '1y', label: '1 Year' },
  ]

  return (
    <motion.div className={`bg-white rounded-xl border border-gray-200 shadow-sm ${className}`} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
      <div className="flex items-center justify-between p-4 border-b border-gray-100">
        <h2 className="text-lg font-medium text-gray-900">Analytics Dashboard</h2>
        <select value={selectedPeriod} onChange={(e) => setSelectedPeriod(e.target.value)} className="px-3 py-1.5 text-sm bg-gray-50 border border-gray-200 rounded-lg">
          {periods.map((period) => (
            <option key={period.value} value={period.value}>{period.label}</option>
          ))}
        </select>
        <button onClick={handleSave} className="px-4 py-2 text-sm bg-blue-500 text-white rounded-lg hover:bg-blue-600">Save Changes</button>
      </div>
      <div className="p-4 grid grid-cols-2 gap-4">
        {charts.map((chart) => (
          <motion.div key={chart.id} className="p-4 bg-gray-50 rounded-lg" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <h3 className="text-sm font-medium text-gray-900">{chart.title}</h3>
            {chart.comparison && <span className="text-2xl font-semibold text-gray-900">{chart.comparison.value}</span>}
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}
