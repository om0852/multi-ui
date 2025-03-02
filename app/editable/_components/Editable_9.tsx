'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface SlideEditContainerProps {
  initialContent: string
  onSave: (content: string) => void
  className?: string
}

export const SlideEditContainer: React.FC<SlideEditContainerProps> = ({
  initialContent,
  onSave,
  className = '',
}) => {
  const [isEditing, setIsEditing] = useState(false)
  const [content, setContent] = useState(initialContent)

  const handleSave = () => {
    onSave(content)
    setIsEditing(false)
  }

  const handleCancel = () => {
    setContent(initialContent)
    setIsEditing(false)
  }

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <motion.div
        initial={{ y: '100%' }}
        animate={{ y: isEditing ? '0%' : '100%' }}
        transition={{ type: 'spring', stiffness: 400, damping: 40 }}
        className="bg-gray-50 rounded-lg shadow-md p-6"
      >
        <div className="prose max-w-none text-gray-800">
          {content}
        </div>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsEditing(true)}
          className="absolute top-2 right-2 p-3 text-gray-600 hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-300 rounded-full"
          aria-label="Edit content"
        >
          <img
            src="https://img.icons8.com/ios-filled/50/000000/edit.png"
            alt="Edit"
            className="w-6 h-6"
          />
        </motion.button>
      </motion.div>

      <AnimatePresence>
        {isEditing && (
          <motion.div
            initial={{ y: '100%' }}
            animate={{ y: '0%' }}
            exit={{ y: '100%' }}
            transition={{ type: 'spring', stiffness: 400, damping: 40 }}
            className="absolute inset-0 bg-gray-200 rounded-lg shadow-md p-6"
          >
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-full h-full min-h-[150px] p-2 text-gray-800 border-2 border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
            />
            <div className="absolute bottom-4 right-4 flex space-x-4">
              <motion.button
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                onClick={handleCancel}
                className="p-3 text-gray-600 hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-300 rounded-full"
                aria-label="Cancel editing"
              >
                <img
                  src="https://img.icons8.com/ios-filled/50/000000/cancel.png"
                  alt="Cancel"
                  className="w-6 h-6"
                />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                onClick={handleSave}
                className="p-3 text-blue-600 hover:text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-400 rounded-full"
                aria-label="Save changes"
              >
                <img
                  src="https://img.icons8.com/ios-filled/50/000000/save.png"
                  alt="Save"
                  className="w-6 h-6"
                />
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
