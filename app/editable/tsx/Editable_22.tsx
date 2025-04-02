'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface Editable_22Props {
  initialContent: string
  onSave: (content: string) => void
  className?: string
  position?: 'left' | 'right'
}

export const Editable_22: React.FC<Editable_22Props> = ({
  initialContent,
  onSave,
  className = '',
  position = 'right',
}) => {
  const [isEditing, setIsEditing] = useState(false)
  const [content, setContent] = useState(initialContent)

  const handleSave = () => {
    onSave(content)
    setIsEditing(false)
  }

  const bubbleClasses = position === 'right'
    ? 'bg-blue-500 text-white ml-auto rounded-t-2xl rounded-l-2xl'
    : 'bg-gray-100 text-gray-800 mr-auto rounded-t-2xl rounded-r-2xl'

  return (
    <motion.div
      className={`max-w-[80%] ${position === 'right' ? 'ml-auto' : 'mr-auto'} ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <AnimatePresence mode="wait">
        {isEditing ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="space-y-2"
          >
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-full min-h-[100px] p-4 bg-white border border-gray-200 rounded-2xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
              placeholder="Type your message..."
            />
            <div className={`flex justify-${position === 'right' ? 'end' : 'start'} space-x-2`}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsEditing(false)}
                className="px-4 py-2 text-sm text-gray-600 hover:text-gray-800"
              >
                Cancel
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleSave}
                className="px-4 py-2 text-sm bg-blue-500 text-white rounded-full hover:bg-blue-600"
              >
                Send
              </motion.button>
            </div>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsEditing(true)}
            className={`group cursor-pointer p-4 ${bubbleClasses}`}
          >
            <p className="break-words">
              {content || 'Click to add message...'}
            </p>
            <div className={`flex justify-${position === 'right' ? 'end' : 'start'} mt-1`}>
              <span className="text-xs opacity-60">
                {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
} 