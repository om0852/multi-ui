'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'

export const Editable_30 = ({
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
  const [cardLabels] = useState(labels)
  const [content] = useState(initialContent)

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
    todo: 'bg-gray-100 text-gray-800',
    'in-progress': 'bg-blue-100 text-blue-800',
    review: 'bg-yellow-100 text-yellow-800',
    done: 'bg-green-100 text-green-800',
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

      {isEditing ? (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="p-4">
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full min-h-[100px] p-3 bg-gray-50 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
            placeholder="Add card description..."
          />
          <div className="flex justify-end space-x-2 mt-3">
            <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} onClick={() => setIsEditing(false)} className="px-4 py-2 text-sm text-gray-600 hover:text-gray-800">
              Cancel
            </motion.button>
            <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} onClick={handleSave} className="px-4 py-2 text-sm bg-blue-500 text-white rounded-lg hover:bg-blue-600">
              Save Card
            </motion.button>
          </div>
        </motion.div>
      ) : (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setIsEditing(true)} className="p-4 cursor-pointer group">
          <p className="text-gray-700 mb-4">{content || 'Click to add card description...'}</p>
        </motion.div>
      )}
    </motion.div>
  )
}
