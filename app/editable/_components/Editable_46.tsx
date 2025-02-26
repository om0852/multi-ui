'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface CalendarEvent {
  id: string
  title: string
  start: string
  end: string
  type: 'meeting' | 'task' | 'reminder' | 'holiday'
  description?: string
  location?: string
  attendees?: {
    name: string
    avatar: string
    status: 'accepted' | 'declined' | 'pending'
  }[]
  color: string
}

interface Editable_46Props {
  initialContent: string
  onSave: (content: string) => void
  className?: string
  events?: CalendarEvent[]
  view?: 'month' | 'week' | 'day'
}

export const Editable_46: React.FC<Editable_46Props> = ({
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
    {
      id: '3',
      title: 'Lunch Break',
      start: '2024-03-15T12:00:00',
      end: '2024-03-15T13:00:00',
      type: 'reminder',
      color: '#10B981',
    },
    {
      id: '4',
      title: 'Company Holiday',
      start: '2024-03-17T00:00:00',
      end: '2024-03-17T23:59:59',
      type: 'holiday',
      color: '#8B5CF6',
    },
  ],
  view = 'month',
}) => {
  const [selectedView, setSelectedView] = useState(view)
  const [selectedDate, setSelectedDate] = useState(new Date())
  const [selectedEvent, setSelectedEvent] = useState<CalendarEvent | null>(null)
  const [content] = useState(initialContent)

  const handleSaveEvent = () => {
    onSave(content)
    setSelectedEvent(null)
  }

  const views = [
    { value: 'month', label: 'Month' },
    { value: 'week', label: 'Week' },
    { value: 'day', label: 'Day' },
  ]

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear()
    const month = date.getMonth()
    const firstDay = new Date(year, month, 1)
    const lastDay = new Date(year, month + 1, 0)
    const days = []
    
    for (let day = new Date(firstDay); day <= lastDay; day.setDate(day.getDate() + 1)) {
      days.push({
        date: new Date(day),
        events: events.filter(event => {
          const eventStart = new Date(event.start)
          return eventStart.toDateString() === day.toDateString()
        })
      })
    }
    return days
  }

  const getEventsForDate = (date: Date) => {
    return events.filter(event => {
      const eventStart = new Date(event.start)
      return (
        eventStart.getFullYear() === date.getFullYear() &&
        eventStart.getMonth() === date.getMonth() &&
        eventStart.getDate() === date.getDate()
      )
    })
  }

  const formatTime = (date: string) => {
    return new Date(date).toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
    })
  }

  const getEventTypeIcon = (type: CalendarEvent['type']) => {
    switch (type) {
      case 'meeting':
        return (
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
        )
      case 'task':
        return (
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
          </svg>
        )
      case 'reminder':
        return (
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
          </svg>
        )
      case 'holiday':
        return (
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
          </svg>
        )
    }
  }

  return (
    <motion.div
      className={`bg-white rounded-xl border border-gray-200 shadow-sm ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Calendar header */}
      <div className="p-4 border-b border-gray-100">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-4">
            <h2 className="text-lg font-medium text-gray-900">
              {selectedDate.toLocaleString('default', { month: 'long', year: 'numeric' })}
            </h2>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setSelectedDate(new Date(selectedDate.setMonth(selectedDate.getMonth() - 1)))}
                className="p-1.5 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={() => setSelectedDate(new Date())}
                className="px-3 py-1.5 text-sm text-gray-600 hover:text-gray-800 rounded-lg hover:bg-gray-100"
              >
                Today
              </button>
              <button
                onClick={() => setSelectedDate(new Date(selectedDate.setMonth(selectedDate.getMonth() + 1)))}
                className="p-1.5 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <div className="flex p-1 bg-gray-100 rounded-lg">
              {views.map((v) => (
                <button
                  key={v.value}
                  onClick={() => setSelectedView(v.value as typeof view)}
                  className={`px-3 py-1.5 text-sm rounded-lg ${
                    selectedView === v.value
                      ? 'bg-white text-gray-900 shadow-sm'
                      : 'text-gray-600 hover:text-gray-800'
                  }`}
                >
                  {v.label}
                </button>
              ))}
            </div>
            <button
              onClick={() => setSelectedEvent({
                id: '',
                title: '',
                start: '',
                end: '',
                type: 'meeting',
                color: '#3B82F6',
              })}
              className="px-4 py-2 text-sm bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            >
              Add Event
            </button>
          </div>
        </div>
      </div>

      {/* Calendar grid */}
      <div className="p-4">
        <div className="grid grid-cols-7 gap-px bg-gray-200">
          {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day) => (
            <div key={day} className="p-2 text-sm font-medium text-gray-900 text-center bg-gray-50">
              {day}
            </div>
          ))}
          {getDaysInMonth(selectedDate).map((dateObj, index) => {
            const isToday = dateObj.date.toDateString() === new Date().toDateString()
            const isCurrentMonth = dateObj.date.getMonth() === selectedDate.getMonth()
            const dayEvents = getEventsForDate(dateObj.date)

            return (
              <motion.div
                key={index}
                className={`min-h-[120px] p-2 bg-white ${
                  isCurrentMonth ? '' : 'bg-gray-50'
                }`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.01 }}
              >
                <div className="flex items-center justify-between mb-1">
                  <span
                    className={`text-sm font-medium ${
                      isToday
                        ? 'w-6 h-6 flex items-center justify-center bg-blue-500 text-white rounded-full'
                        : isCurrentMonth
                        ? 'text-gray-900'
                        : 'text-gray-400'
                    }`}
                  >
                    {dateObj.date.getDate()}
                  </span>
                  {dayEvents.length > 0 && (
                    <span className="text-xs text-gray-500">{dayEvents.length} events</span>
                  )}
                </div>
                <div className="space-y-1">
                  {dayEvents.map((event) => (
                    <motion.button
                      key={event.id}
                      onClick={() => setSelectedEvent(event)}
                      className="w-full text-left"
                      whileHover={{ scale: 1.02 }}
                    >
                      <div
                        className="px-2 py-1 text-xs rounded-lg flex items-center space-x-1"
                        style={{ backgroundColor: `${event.color}20`, color: event.color }}
                      >
                        {getEventTypeIcon(event.type)}
                        <span className="truncate">{event.title}</span>
                      </div>
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>

      {/* Event modal */}
      <AnimatePresence>
        {selectedEvent && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedEvent(null)}
          >
            <motion.div
              className="bg-white rounded-lg p-6 w-full max-w-md"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="flex items-center space-x-2">
                    <span
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: selectedEvent.color }}
                    />
                    <h3 className="text-lg font-medium text-gray-900">
                      {selectedEvent.title}
                    </h3>
                  </div>
                  <p className="text-sm text-gray-500 mt-1">
                    {formatTime(selectedEvent.start)} - {formatTime(selectedEvent.end)}
                  </p>
                </div>
                <button
                  onClick={() => setSelectedEvent(null)}
                  className="p-1.5 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              {selectedEvent.description && (
                <p className="text-sm text-gray-600 mb-4">{selectedEvent.description}</p>
              )}
              {selectedEvent.location && (
                <div className="flex items-center space-x-2 text-sm text-gray-600 mb-4">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>{selectedEvent.location}</span>
                </div>
              )}
              {selectedEvent.attendees && selectedEvent.attendees.length > 0 && (
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-gray-900 mb-2">Attendees</h4>
                  <div className="space-y-2">
                    {selectedEvent.attendees.map((attendee, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <img
                            src={attendee.avatar}
                            alt={attendee.name}
                            className="w-6 h-6 rounded-full"
                          />
                          <span className="text-sm text-gray-600">{attendee.name}</span>
                        </div>
                        <span
                          className={`text-xs px-2 py-1 rounded-full ${
                            attendee.status === 'accepted'
                              ? 'bg-green-100 text-green-800'
                              : attendee.status === 'declined'
                              ? 'bg-red-100 text-red-800'
                              : 'bg-yellow-100 text-yellow-800'
                          }`}
                        >
                          {attendee.status}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              <div className="flex justify-end space-x-2">
                <button
                  onClick={() => setSelectedEvent(null)}
                  className="px-4 py-2 text-sm text-gray-600 hover:text-gray-800"
                >
                  Close
                </button>
                <button
                  onClick={handleSaveEvent}
                  className="px-4 py-2 text-sm bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                >
                  Save Changes
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
} 