'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'

export const Editable_47 = ({
  initialContent,
  onSave,
  className = '',
  notifications = []
}) => {
  const [selectedFilter, setSelectedFilter] = useState('all')
  const [content] = useState(initialContent)

  const handleSave = () => {
    onSave(content)
  }

  const filters = [
    { value: 'all', label: 'All' },
    { value: 'mention', label: 'Mentions' },
    { value: 'activity', label: 'Activity' }
  ]

  const groupNotificationsByDate = (notifications) => {
    const groups = {}
    
    notifications
      .filter(n => selectedFilter === 'all' || n.type === selectedFilter)
      .forEach(notification => {
        const date = new Date(notification.timestamp).toLocaleDateString()
        if (!groups[date]) groups[date] = []
        groups[date].push(notification)
      })

    return Object.entries(groups)
      .map(([date, notifications]) => ({
        date,
        notifications: notifications.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp))
      }))
      .sort((a, b) => new Date(b.date) - new Date(a.date))
  }

  const formatTime = (timestamp) => new Date(timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })

  const notificationGroups = groupNotificationsByDate(notifications)
  const unreadCount = notifications.filter(n => !n.read).length

  return (
    <motion.div className={`bg-white rounded-xl border border-gray-200 shadow-sm ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}>

      <div className="p-4 border-b border-gray-100">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-medium text-gray-900">Notifications</h2>
          {unreadCount > 0 && <p className="text-sm text-gray-500">{unreadCount} unread</p>}
        </div>
        <div className="flex space-x-2">
          {filters.map(filter => (
            <button key={filter.value} onClick={() => setSelectedFilter(filter.value)}
              className={`px-3 py-1.5 text-sm rounded-lg ${selectedFilter === filter.value ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-600'}`}>{filter.label}
            </button>
          ))}
        </div>
      </div>

      <div className="divide-y divide-gray-100">
        {notificationGroups.map(group => (
          <div key={group.date} className="p-4">
            <h3 className="text-sm font-medium text-gray-500 mb-3">{group.date}</h3>
            <div className="space-y-4">
              {group.notifications.map(notification => (
                <motion.div key={notification.id} className={`flex items-start space-x-4 p-3 rounded-lg ${notification.read ? 'bg-white' : 'bg-blue-50'}`}
                  initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
                  <div className="flex-grow min-w-0">
                    <h4 className="text-sm font-medium text-gray-900">{notification.title}</h4>
                    <p className="text-sm text-gray-500 mt-0.5">{notification.message}</p>
                    {notification.actionUrl && <a href={notification.actionUrl} className="text-sm text-blue-500">View details</a>}
                  </div>
                  <span className="text-xs text-gray-400 ml-4">{formatTime(notification.timestamp)}</span>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {notificationGroups.length === 0 && <div className="p-8 text-center">No notifications</div>}
    </motion.div>
  )
}
