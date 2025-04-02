'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'

export const Editable_37 = ({
  initialContent,
  onSave,
  className = '',
  eventTitle = 'New Event',
  startDate = new Date().toISOString(),
  endDate = new Date(Date.now() + 3600000).toISOString(),
  location = '',
  isOnline = true,
  meetingLink = 'https://meet.google.com/abc-defg-hij',
  attendees = [
    {
      id: '1',
      name: 'John Doe',
      email: 'john@example.com',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=John',
      status: 'accepted',
    },
    {
      id: '2',
      name: 'Alice Smith',
      email: 'alice@example.com',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Alice',
      status: 'pending',
    },
  ],
  reminderTime = '15min',
}) => {
  const [title, setTitle] = useState(eventTitle)
  const [start, setStart] = useState(startDate)
  const [end, setEnd] = useState(endDate)
  const [eventLocation, setEventLocation] = useState(location)
  const [online, setOnline] = useState(isOnline)
  const [link, setLink] = useState(meetingLink)
  const [eventAttendees] = useState(attendees)
  const [reminder, setReminder] = useState(reminderTime)
  const [content, setContent] = useState(initialContent)

  const handleSave = () => {
    onSave(content)
  }

  const getStatusColor = (status) => {
    switch (status) {
      case 'accepted':
        return 'bg-green-100 text-green-800'
      case 'declined':
        return 'bg-red-100 text-red-800'
      case 'tentative':
        return 'bg-yellow-100 text-yellow-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <motion.div
      className={`bg-white rounded-xl border border-gray-200 shadow-sm ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="p-4 border-b border-gray-100">
        <div className="flex items-center justify-between mb-4">
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="text-xl font-semibold text-gray-900 bg-transparent border-none focus:outline-none focus:ring-0"
            placeholder="Event title"
          />
        </div>
      </div>

      <div className="p-4 space-y-4">
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full min-h-[100px] p-3 bg-gray-50 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
          placeholder="Add event description..."
        />
      </div>

      <div className="p-4 border-t border-gray-100">
        <div className="flex justify-end space-x-2">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => {
              setTitle(eventTitle)
              setStart(startDate)
              setEnd(endDate)
              setEventLocation(location)
              setOnline(isOnline)
              setLink(meetingLink)
              setContent(initialContent)
              setReminder(reminderTime)
            }}
            className="px-4 py-2 text-sm text-gray-600 hover:text-gray-800"
          >
            Cancel
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleSave}
            className="px-4 py-2 text-sm bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          >
            Save Event
          </motion.button>
        </div>
      </div>
    </motion.div>
  )
}
