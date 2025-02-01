'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface Notification {
  id: string
  type: 'info' | 'success' | 'warning' | 'error' | 'mention' | 'activity'
  title: string
  message: string
  timestamp: string
  read: boolean
  actionUrl?: string
  sender?: {
    name: string
    avatar: string
  }
  metadata?: {
    [key: string]: string
  }
}

interface NotificationGroup {
  date: string
  notifications: Notification[]
}

interface Editable_47Props {
  initialContent: string
  onSave: (content: string) => void
  className?: string
  notifications?: Notification[]
}

export const Editable_47: React.FC<Editable_47Props> = ({
  initialContent,
  onSave,
  className = '',
  notifications = [
    {
      id: '1',
      type: 'mention',
      title: 'New mention',
      message: '@johndoe mentioned you in a comment',
      timestamp: '2024-03-15T10:30:00',
      read: false,
      actionUrl: '/comments/123',
      sender: {
        name: 'John Doe',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=John',
      },
      metadata: {
        project: 'Website Redesign',
        comment: 'What do you think about this design?',
      },
    },
    {
      id: '2',
      type: 'success',
      title: 'Deploy successful',
      message: 'Your changes have been deployed to production',
      timestamp: '2024-03-15T09:45:00',
      read: true,
      metadata: {
        commit: 'abc123',
        environment: 'production',
      },
    },
    {
      id: '3',
      type: 'warning',
      title: 'Storage limit',
      message: 'You are approaching your storage limit',
      timestamp: '2024-03-14T15:20:00',
      read: false,
      actionUrl: '/settings/storage',
      metadata: {
        usage: '85%',
        limit: '100GB',
      },
    },
    {
      id: '4',
      type: 'activity',
      title: 'New activity',
      message: 'Alice Smith shared a document with you',
      timestamp: '2024-03-14T14:30:00',
      read: false,
      actionUrl: '/documents/456',
      sender: {
        name: 'Alice Smith',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Alice',
      },
      metadata: {
        document: 'Q4 Report.pdf',
        access: 'Edit',
      },
    },
    {
      id: '5',
      type: 'error',
      title: 'Build failed',
      message: 'The latest build failed due to test errors',
      timestamp: '2024-03-14T11:15:00',
      read: true,
      actionUrl: '/builds/789',
      metadata: {
        build: '#1234',
        error: 'Test suite failed',
      },
    },
  ],
}) => {
  const [selectedFilter, setSelectedFilter] = useState<Notification['type'] | 'all'>('all')
  const [isEditing, setIsEditing] = useState(false)
  const [content, setContent] = useState(initialContent)

  const handleSave = () => {
    onSave(content)
    setIsEditing(false)
  }

  const filters: { value: typeof selectedFilter; label: string; icon: JSX.Element }[] = [
    {
      value: 'all',
      label: 'All',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      ),
    },
    {
      value: 'mention',
      label: 'Mentions',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
        </svg>
      ),
    },
    {
      value: 'activity',
      label: 'Activity',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
  ]

  const getNotificationIcon = (type: Notification['type']) => {
    switch (type) {
      case 'info':
        return (
          <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        )
      case 'success':
        return (
          <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        )
      case 'warning':
        return (
          <svg className="w-5 h-5 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
        )
      case 'error':
        return (
          <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        )
      case 'mention':
        return (
          <svg className="w-5 h-5 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
          </svg>
        )
      case 'activity':
        return (
          <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        )
    }
  }

  const groupNotificationsByDate = (notifications: Notification[]): NotificationGroup[] => {
    const groups: { [key: string]: Notification[] } = {}
    
    notifications
      .filter(n => selectedFilter === 'all' || n.type === selectedFilter)
      .forEach(notification => {
        const date = new Date(notification.timestamp).toLocaleDateString()
        if (!groups[date]) {
          groups[date] = []
        }
        groups[date].push(notification)
      })

    return Object.entries(groups)
      .map(([date, notifications]) => ({
        date,
        notifications: notifications.sort((a, b) => 
          new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
        ),
      }))
      .sort((a, b) => 
        new Date(b.date).getTime() - new Date(a.date).getTime()
      )
  }

  const formatTime = (timestamp: string) => {
    return new Date(timestamp).toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
    })
  }

  const notificationGroups = groupNotificationsByDate(notifications)
  const unreadCount = notifications.filter(n => !n.read).length

  return (
    <motion.div
      className={`bg-white rounded-xl border border-gray-200 shadow-sm ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Header */}
      <div className="p-4 border-b border-gray-100">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-lg font-medium text-gray-900">Notifications</h2>
            {unreadCount > 0 && (
              <p className="text-sm text-gray-500 mt-1">
                {unreadCount} unread notification{unreadCount !== 1 ? 's' : ''}
              </p>
            )}
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setIsEditing(true)}
              className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </button>
          </div>
        </div>
        <div className="flex space-x-2">
          {filters.map((filter) => (
            <button
              key={filter.value}
              onClick={() => setSelectedFilter(filter.value)}
              className={`flex items-center space-x-2 px-3 py-1.5 text-sm rounded-lg ${
                selectedFilter === filter.value
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {filter.icon}
              <span>{filter.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Notification list */}
      <div className="divide-y divide-gray-100">
        {notificationGroups.map((group) => (
          <div key={group.date} className="p-4">
            <h3 className="text-sm font-medium text-gray-500 mb-3">
              {new Date(group.date).toLocaleDateString(undefined, {
                weekday: 'long',
                month: 'long',
                day: 'numeric',
              })}
            </h3>
            <div className="space-y-4">
              {group.notifications.map((notification) => (
                <motion.div
                  key={notification.id}
                  className={`flex items-start space-x-4 p-3 rounded-lg ${
                    notification.read ? 'bg-white' : 'bg-blue-50'
                  }`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  {notification.sender ? (
                    <img
                      src={notification.sender.avatar}
                      alt={notification.sender.name}
                      className="w-10 h-10 rounded-full"
                    />
                  ) : (
                    <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100">
                      {getNotificationIcon(notification.type)}
                    </div>
                  )}
                  <div className="flex-grow min-w-0">
                    <div className="flex items-start justify-between">
                      <div>
                        <h4 className="text-sm font-medium text-gray-900">
                          {notification.title}
                        </h4>
                        <p className="text-sm text-gray-500 mt-0.5">
                          {notification.message}
                        </p>
                      </div>
                      <span className="text-xs text-gray-400 whitespace-nowrap ml-4">
                        {formatTime(notification.timestamp)}
                      </span>
                    </div>
                    {notification.metadata && Object.keys(notification.metadata).length > 0 && (
                      <div className="flex flex-wrap gap-2 mt-2">
                        {Object.entries(notification.metadata).map(([key, value]) => (
                          <span
                            key={key}
                            className="inline-flex items-center px-2 py-0.5 text-xs font-medium bg-gray-100 text-gray-800 rounded"
                          >
                            {key}: {value}
                          </span>
                        ))}
                      </div>
                    )}
                    {notification.actionUrl && (
                      <div className="mt-2">
                        <a
                          href={notification.actionUrl}
                          className="inline-flex items-center space-x-1 text-sm text-blue-500 hover:text-blue-600"
                        >
                          <span>View details</span>
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </a>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Empty state */}
      {notificationGroups.length === 0 && (
        <div className="p-8 text-center">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 mb-4">
            <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
          </div>
          <h3 className="text-sm font-medium text-gray-900 mb-1">
            No notifications
          </h3>
          <p className="text-sm text-gray-500">
            You're all caught up! Check back later for new notifications.
          </p>
        </div>
      )}
    </motion.div>
  )
} 