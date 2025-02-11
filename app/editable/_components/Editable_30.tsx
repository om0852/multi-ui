'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface Label {
  id: number
  text: string
  color: 'red' | 'blue' | 'green' | 'yellow' | 'purple'
}

interface Editable_30Props {
  initialContent: string
  onSave: (content: string) => void
  className?: string
  dueDate?: string
  assignee?: string
  labels?: Label[]
  status?: 'todo' | 'in-progress' | 'review' | 'done'
}

export const Editable_30: React.FC<Editable_30Props> = ({
  initialContent,
  onSave,
  className = '',
  dueDate = '2024-03-31',
  assignee = 'John Doe',
  labels = [
    { id: 1, text: 'Feature', color: 'blue' },
    { id: 2, text: 'High Priority', color: 'red' },
  ],
  status = 'in-progress',
}) => {
  const [isEditing, setIsEditing] = useState(false)
  const [content, setContent] = useState(initialContent)
  const [cardLabels, setCardLabels] = useState<Label[]>(labels)

  const handleSave = () => {
    onSave(content)
    setIsEditing(false)
  }

  const labelColors = {
    red: 'bg-red-100 text-red-800',
    blue: 'bg-blue-100 text-blue-800',
    green: 'bg-green-100 text-green-800',
    yellow: 'bg-yellow-100 text-yellow-800',
    purple: 'bg-purple-100 text-purple-800',
  }

  const statusColors = {
    'todo': 'bg-gray-100 text-gray-800',
    'in-progress': 'bg-blue-100 text-blue-800',
    'review': 'bg-yellow-100 text-yellow-800',
    'done': 'bg-green-100 text-green-800',
  }

  return (
    <motion.div
      className={`bg-white rounded-xl border border-gray-200 shadow-sm ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      drag
      dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
      whileDrag={{ scale: 1.05, zIndex: 1 }}
    >
      {/* Card header */}
      <div className="p-4 border-b border-gray-100">
        <div className="flex items-center justify-between mb-3">
          <div className={`px-2 py-1 text-xs font-medium rounded-full ${statusColors[status]}`}>
            {status.charAt(0).toUpperCase() + status.slice(1).replace('-', ' ')}
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-xs text-gray-500">#{Math.floor(Math.random() * 1000)}</span>
            <button className="text-gray-400 hover:text-gray-600">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
              </svg>
            </button>
          </div>
        </div>
        <div className="flex flex-wrap gap-2 mb-3">
          {cardLabels.map((label) => (
            <span
              key={label.id}
              className={`px-2 py-1 text-xs font-medium rounded-full ${labelColors[label.color]}`}
            >
              {label.text}
            </span>
          ))}
        </div>
      </div>

      <AnimatePresence mode="wait">
        {isEditing ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="p-4"
          >
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-full min-h-[100px] p-3 bg-gray-50 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
              placeholder="Add card description..."
            />
            <div className="flex justify-end space-x-2 mt-3">
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
                Save Card
              </motion.button>
            </div>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsEditing(true)}
            className="p-4 cursor-pointer group"
          >
            <p className="text-gray-700 mb-4">
              {content || 'Click to add card description...'}
            </p>
            <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="p-2 bg-blue-50 rounded-full">
                <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                </svg>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Card footer */}
      <div className="px-4 py-3 bg-gray-50 border-t border-gray-100 rounded-b-xl">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="flex items-center text-sm text-gray-500">
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span>{dueDate}</span>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <div className="flex -space-x-2">
              <img
                src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${assignee}`}
                alt={assignee}
                className="w-6 h-6 rounded-full border-2 border-white"
              />
            </div>
            <div className="flex items-center text-gray-400 space-x-2">
              <button className="hover:text-gray-600">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </button>
              <button className="hover:text-gray-600">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
} 