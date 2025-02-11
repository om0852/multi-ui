'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface EditableContainerProps {
  initialContent: string
  onSave: (content: string) => void
  className?: string
  color?: 'yellow' | 'blue' | 'green' | 'pink'
}

export const EditableContainer: React.FC<EditableContainerProps> = ({
  initialContent,
  onSave,
  className = '',
  color = 'yellow',
}) => {
  const [isEditing, setIsEditing] = useState(false)
  const [content, setContent] = useState(initialContent)

  const colorClasses = {
    yellow: 'bg-yellow-100 shadow-yellow-200',
    blue: 'bg-blue-100 shadow-blue-200',
    green: 'bg-green-100 shadow-green-200',
    pink: 'bg-pink-100 shadow-pink-200',
  }

  const handleSave = () => {
    onSave(content)
    setIsEditing(false)
  }

  return (
    <motion.div
      className={`relative ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      style={{ transformOrigin: 'center top' }}
    >
      {/* Pin */}
      <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 bg-gray-300 rounded-full shadow-md z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-gray-400 rounded-full" />
      </div>

      {/* Note */}
      <motion.div
        className={`${colorClasses[color]} p-6 rounded-lg shadow-lg transform rotate-1`}
        whileHover={{ rotate: 0, scale: 1.02 }}
        transition={{ type: 'spring', stiffness: 300, damping: 25 }}
      >
        <AnimatePresence mode="wait">
          {isEditing ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-4"
            >
              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className={`w-full min-h-[120px] bg-transparent text-gray-700 focus:outline-none resize-none font-handwriting text-lg`}
                placeholder="Write your note..."
                style={{ fontFamily: 'Comic Sans MS, cursive' }}
              />
              <div className="flex justify-end space-x-2">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsEditing(false)}
                  className="px-3 py-1 text-sm text-gray-600 hover:text-gray-800"
                >
                  Cancel
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleSave}
                  className="px-3 py-1 text-sm bg-white/50 rounded hover:bg-white/70"
                >
                  Done
                </motion.button>
              </div>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsEditing(true)}
              className="cursor-pointer min-h-[120px]"
            >
              <p
                className="text-gray-700 text-lg whitespace-pre-wrap"
                style={{ fontFamily: 'Comic Sans MS, cursive' }}
              >
                {content || 'Click to add a note...'}
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Tape effect */}
        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-12 h-4 bg-white/30 blur-sm" />
      </motion.div>
    </motion.div>
  )
} 