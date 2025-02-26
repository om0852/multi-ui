'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'

interface Attendee {
  id: string
  name: string
  email: string
  avatar: string
  status: 'pending' | 'accepted' | 'declined' | 'tentative'
}

interface Editable_37Props {
  initialContent: string
  onSave: (content: string) => void
  className?: string
  eventTitle?: string
  startDate?: string
  endDate?: string
  location?: string
  isOnline?: boolean
  meetingLink?: string
  attendees?: Attendee[]
  reminderTime?: '5min' | '15min' | '30min' | '1hour' | '1day'
}

export const Editable_37: React.FC<Editable_37Props> = ({
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
  const [isEditing, setIsEditing] = useState(false)
  const [title, setTitle] = useState(eventTitle)
  const [start, setStart] = useState(startDate)
  const [end, setEnd] = useState(endDate)
  const [eventLocation, setEventLocation] = useState(location)
  const [online, setOnline] = useState(isOnline)
  const [link, setLink] = useState(meetingLink)
  const [eventAttendees] = useState<Attendee[]>(attendees)
  const [reminder, setReminder] = useState(reminderTime)
  const [content, setContent] = useState(initialContent)

  const handleSave = () => {
    onSave(content)
  }

  const getStatusColor = (status: Attendee['status']) => {
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
      {/* Event header */}
      <div className="p-4 border-b border-gray-100">
        <div className="flex items-center justify-between mb-4">
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="text-xl font-semibold text-gray-900 bg-transparent border-none focus:outline-none focus:ring-0"
            placeholder="Event title"
          />
          <div className="flex items-center space-x-2">
            <button className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
              </svg>
            </button>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Start</label>
            <input
              type="datetime-local"
              value={new Date(start).toISOString().slice(0, 16)}
              onChange={(e) => setStart(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">End</label>
            <input
              type="datetime-local"
              value={new Date(end).toISOString().slice(0, 16)}
              onChange={(e) => setEnd(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
        </div>
      </div>

      {/* Event details */}
      <div className="p-4 space-y-4">
        {/* Location/Meeting Link */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <label className="text-sm font-medium text-gray-700">Location</label>
            <button
              onClick={() => setOnline(!online)}
              className={`text-sm px-3 py-1 rounded-full ${
                online ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-800'
              }`}
            >
              {online ? 'Online Meeting' : 'Physical Location'}
            </button>
          </div>
          {online ? (
            <input
              type="text"
              value={link}
              onChange={(e) => setLink(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Meeting link"
            />
          ) : (
            <input
              type="text"
              value={eventLocation}
              onChange={(e) => setEventLocation(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter location"
            />
          )}
        </div>

        {/* Attendees */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Attendees</label>
          <div className="space-y-2">
            {eventAttendees.map((attendee) => (
              <motion.div
                key={attendee.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex items-center justify-between p-2 bg-gray-50 rounded-lg"
              >
                <div className="flex items-center space-x-3">
                  <img
                    src={attendee.avatar}
                    alt={attendee.name}
                    className="w-8 h-8 rounded-full"
                  />
                  <div>
                    <p className="text-sm font-medium text-gray-900">{attendee.name}</p>
                    <p className="text-xs text-gray-500">{attendee.email}</p>
                  </div>
                </div>
                <span className={`text-xs px-2 py-1 rounded-full ${getStatusColor(attendee.status)}`}>
                  {attendee.status}
                </span>
              </motion.div>
            ))}
            <button className="w-full p-2 text-sm text-gray-500 border border-dashed border-gray-300 rounded-lg hover:bg-gray-50">
              + Add attendee
            </button>
          </div>
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full min-h-[100px] p-3 bg-gray-50 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
            placeholder="Add event description..."
          />
        </div>

        {/* Reminder */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Reminder</label>
          <select
            value={reminder}
            onChange={(e) => setReminder(e.target.value as typeof reminderTime)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value="5min">5 minutes before</option>
            <option value="15min">15 minutes before</option>
            <option value="30min">30 minutes before</option>
            <option value="1hour">1 hour before</option>
            <option value="1day">1 day before</option>
          </select>
        </div>
      </div>

      {/* Footer */}
      <div className="p-4 border-t border-gray-100">
        <div className="flex justify-end space-x-2">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setIsEditing(false)}
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