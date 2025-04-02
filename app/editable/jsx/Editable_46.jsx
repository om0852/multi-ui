'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Editable_46 = ({
  initialContent,
  onSave,
  className = '',
  events = [
    {
      id: '1',
      title: 'Team Meeting',
      start: '2024-03-15T10:00:00',
      end: '2024-03-15T11:00:00',
      type: 'meeting',
      description: 'Weekly team sync',
      location: 'Conference Room A',
      attendees: [
        {
          name: 'John Doe',
          avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=John',
          status: 'accepted',
        },
        {
          name: 'Alice Smith',
          avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Alice',
          status: 'pending',
        },
      ],
      color: '#3B82F6',
    },
    {
      id: '2',
      title: 'Project Deadline',
      start: '2024-03-15T00:00:00',
      end: '2024-03-15T23:59:59',
      type: 'task',
      description: 'Submit final deliverables',
      color: '#EF4444',
    },
  ],
  view = 'month',
}) => {
  const [selectedView, setSelectedView] = useState(view)
  const [selectedDate, setSelectedDate] = useState(new Date())
  const [selectedEvent, setSelectedEvent] = useState(null)
  const [content] = useState(initialContent)

  const handleSaveEvent = () => {
    onSave(content)
    setSelectedEvent(null)
  }

  return (
    <motion.div
      className={`bg-white rounded-xl border border-gray-200 shadow-sm ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="p-4 border-b border-gray-100">
        <h2 className="text-lg font-medium text-gray-900">
          {selectedDate.toLocaleString('default', { month: 'long', year: 'numeric' })}
        </h2>
      </div>
    </motion.div>
  )
}

export default Editable_46
