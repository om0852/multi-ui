'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export const Editable_39 = ({
  initialContent,
  onSave,
  className = '',
  username = 'johndoe',
  email = 'john@example.com',
  avatar = 'https://api.dicebear.com/7.x/avataaars/svg?seed=John',
  notifications = [
    { id: '1', title: 'Email Notifications', description: 'Receive email notifications for important updates', enabled: true },
    { id: '2', title: 'Push Notifications', description: 'Get push notifications on your devices', enabled: false },
    { id: '3', title: 'Weekly Digest', description: 'Receive a weekly summary of activities', enabled: true },
  ],
  theme = 'light',
  themes = [
    { id: '1', name: 'Light', value: 'light', preview: '#ffffff' },
    { id: '2', name: 'Dark', value: 'dark', preview: '#1a1a1a' },
    { id: '3', name: 'System', value: 'system', preview: 'linear-gradient(to right, #ffffff 50%, #1a1a1a 50%)' },
  ],
  privacySettings = [
    { id: '1', title: 'Profile Visibility', description: 'Control who can see your profile', value: 'public' },
    { id: '2', title: 'Activity Status', description: 'Show when you\'re active', value: 'friends' },
    { id: '3', title: 'Search Visibility', description: 'Allow others to find you by email', value: 'private' },
  ],
}) => {
  const [activeTab, setActiveTab] = useState('profile')
  const [selectedTheme, setSelectedTheme] = useState(theme)
  const [notificationPrefs, setNotificationPrefs] = useState(notifications)
  const [privacy, setPrivacy] = useState(privacySettings)
  const [content] = useState(initialContent)

  const handleSave = () => {
    onSave(content)
  }

  return (
    <motion.div className={`bg-white rounded-xl border border-gray-200 shadow-sm ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}>
      <div className="p-4 border-b border-gray-100">
        <h2 className="text-lg font-medium text-gray-900">Settings</h2>
      </div>
      <div className="p-6">
        <AnimatePresence mode="wait">
          {activeTab === 'profile' && (
            <motion.div key="profile" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <div className="flex items-center space-x-4">
                <img src={avatar} alt={username} className="w-16 h-16 rounded-full" />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <div className="p-4 border-t border-gray-100">
        <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} onClick={handleSave} className="px-4 py-2 text-sm bg-blue-500 text-white rounded-lg hover:bg-blue-600">
          Save Changes
        </motion.button>
      </div>
    </motion.div>
  )
}
