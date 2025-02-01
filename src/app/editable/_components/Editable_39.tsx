'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface NotificationSetting {
  id: string
  title: string
  description: string
  enabled: boolean
}

interface ThemeSetting {
  id: string
  name: string
  value: string
  preview: string
}

interface PrivacySetting {
  id: string
  title: string
  description: string
  value: 'public' | 'friends' | 'private'
}

interface Editable_39Props {
  initialContent: string
  onSave: (content: string) => void
  className?: string
  username?: string
  email?: string
  avatar?: string
  notifications?: NotificationSetting[]
  theme?: string
  themes?: ThemeSetting[]
  privacySettings?: PrivacySetting[]
}

export const Editable_39: React.FC<Editable_39Props> = ({
  initialContent,
  onSave,
  className = '',
  username = 'johndoe',
  email = 'john@example.com',
  avatar = 'https://api.dicebear.com/7.x/avataaars/svg?seed=John',
  notifications = [
    {
      id: '1',
      title: 'Email Notifications',
      description: 'Receive email notifications for important updates',
      enabled: true,
    },
    {
      id: '2',
      title: 'Push Notifications',
      description: 'Get push notifications on your devices',
      enabled: false,
    },
    {
      id: '3',
      title: 'Weekly Digest',
      description: 'Receive a weekly summary of activities',
      enabled: true,
    },
  ],
  theme = 'light',
  themes = [
    { id: '1', name: 'Light', value: 'light', preview: '#ffffff' },
    { id: '2', name: 'Dark', value: 'dark', preview: '#1a1a1a' },
    { id: '3', name: 'System', value: 'system', preview: 'linear-gradient(to right, #ffffff 50%, #1a1a1a 50%)' },
  ],
  privacySettings = [
    {
      id: '1',
      title: 'Profile Visibility',
      description: 'Control who can see your profile',
      value: 'public',
    },
    {
      id: '2',
      title: 'Activity Status',
      description: 'Show when you\'re active',
      value: 'friends',
    },
    {
      id: '3',
      title: 'Search Visibility',
      description: 'Allow others to find you by email',
      value: 'private',
    },
  ],
}) => {
  const [activeTab, setActiveTab] = useState('profile')
  const [notificationPrefs, setNotificationPrefs] = useState(notifications)
  const [selectedTheme, setSelectedTheme] = useState(theme)
  const [privacy, setPrivacy] = useState(privacySettings)
  const [isEditing, setIsEditing] = useState(false)
  const [content, setContent] = useState(initialContent)

  const handleSave = () => {
    onSave(content)
    setIsEditing(false)
  }

  const tabs = [
    { id: 'profile', name: 'Profile', icon: 'user' },
    { id: 'notifications', name: 'Notifications', icon: 'bell' },
    { id: 'privacy', name: 'Privacy', icon: 'lock' },
    { id: 'theme', name: 'Theme', icon: 'paint' },
    { id: 'account', name: 'Account', icon: 'cog' },
  ]

  const getTabIcon = (icon: string) => {
    switch (icon) {
      case 'user':
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
        )
      case 'bell':
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
          </svg>
        )
      case 'lock':
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
        )
      case 'paint':
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
          </svg>
        )
      case 'cog':
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        )
      default:
        return null
    }
  }

  return (
    <motion.div
      className={`bg-white rounded-xl border border-gray-200 shadow-sm ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Settings header */}
      <div className="p-4 border-b border-gray-100">
        <h2 className="text-lg font-medium text-gray-900">Settings</h2>
      </div>

      {/* Settings navigation */}
      <div className="grid grid-cols-5 border-b border-gray-100">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center justify-center space-x-2 py-3 text-sm font-medium transition-colors ${
              activeTab === tab.id
                ? 'text-blue-600 border-b-2 border-blue-600'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            {getTabIcon(tab.icon)}
            <span>{tab.name}</span>
          </button>
        ))}
      </div>

      {/* Settings content */}
      <div className="p-6">
        <AnimatePresence mode="wait">
          {activeTab === 'profile' && (
            <motion.div
              key="profile"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-6"
            >
              <div className="flex items-center space-x-4">
                <img
                  src={avatar}
                  alt={username}
                  className="w-16 h-16 rounded-full"
                />
                <div>
                  <button className="px-4 py-2 text-sm bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                    Change Avatar
                  </button>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Username
                  </label>
                  <input
                    type="text"
                    value={username}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    value={email}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'notifications' && (
            <motion.div
              key="notifications"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-4"
            >
              {notificationPrefs.map((notification) => (
                <div
                  key={notification.id}
                  className="flex items-center justify-between py-3"
                >
                  <div>
                    <h3 className="text-sm font-medium text-gray-900">
                      {notification.title}
                    </h3>
                    <p className="text-sm text-gray-500">{notification.description}</p>
                  </div>
                  <button
                    onClick={() => {
                      setNotificationPrefs(
                        notificationPrefs.map((n) =>
                          n.id === notification.id
                            ? { ...n, enabled: !n.enabled }
                            : n
                        )
                      )
                    }}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                      notification.enabled ? 'bg-blue-500' : 'bg-gray-200'
                    }`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        notification.enabled ? 'translate-x-6' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>
              ))}
            </motion.div>
          )}

          {activeTab === 'privacy' && (
            <motion.div
              key="privacy"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-4"
            >
              {privacy.map((setting) => (
                <div key={setting.id} className="py-3">
                  <div className="flex justify-between items-center mb-2">
                    <div>
                      <h3 className="text-sm font-medium text-gray-900">
                        {setting.title}
                      </h3>
                      <p className="text-sm text-gray-500">{setting.description}</p>
                    </div>
                  </div>
                  <select
                    value={setting.value}
                    onChange={(e) => {
                      setPrivacy(
                        privacy.map((p) =>
                          p.id === setting.id
                            ? { ...p, value: e.target.value as typeof setting.value }
                            : p
                        )
                      )
                    }}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  >
                    <option value="public">Public</option>
                    <option value="friends">Friends Only</option>
                    <option value="private">Private</option>
                  </select>
                </div>
              ))}
            </motion.div>
          )}

          {activeTab === 'theme' && (
            <motion.div
              key="theme"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-4"
            >
              <div className="grid grid-cols-3 gap-4">
                {themes.map((themeOption) => (
                  <button
                    key={themeOption.id}
                    onClick={() => setSelectedTheme(themeOption.value)}
                    className={`p-4 rounded-lg border-2 transition-colors ${
                      selectedTheme === themeOption.value
                        ? 'border-blue-500'
                        : 'border-gray-200'
                    }`}
                  >
                    <div
                      className="w-full h-24 rounded-lg mb-2"
                      style={{ background: themeOption.preview }}
                    />
                    <p className="text-sm font-medium text-gray-900">
                      {themeOption.name}
                    </p>
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === 'account' && (
            <motion.div
              key="account"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-6"
            >
              <div className="space-y-4">
                <button className="w-full px-4 py-2 text-sm text-gray-600 bg-gray-100 rounded-lg hover:bg-gray-200">
                  Export Data
                </button>
                <button className="w-full px-4 py-2 text-sm text-white bg-red-500 rounded-lg hover:bg-red-600">
                  Delete Account
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Settings footer */}
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
            Save Changes
          </motion.button>
        </div>
      </div>
    </motion.div>
  )
} 