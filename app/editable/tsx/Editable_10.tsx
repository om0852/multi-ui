'use client'

import React, { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface EditableContainerProps {
  initialContent: string
  onSave: (content: string) => void
  className?: string
}

export const EditableContainer: React.FC<EditableContainerProps> = ({
  initialContent,
  onSave,
  className = '',
}) => {
  const [isEditing, setIsEditing] = useState(false)
  const [content, setContent] = useState(initialContent)
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  useEffect(() => {
    if (isEditing && textareaRef.current) {
      textareaRef.current.focus()
    }
  }, [isEditing])

  const handleSave = () => {
    onSave(content)
    setIsEditing(false)
  }

  const handleCancel = () => {
    setContent(initialContent)
    setIsEditing(false)
  }

  return (
    <motion.div
      className={`relative p-4 bg-white rounded-lg shadow-md ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <AnimatePresence>
        {isEditing ? (
          <motion.div
            key="editing"
            initial={{ x: '100%' }}
            animate={{ x: '0%' }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.3 }}
            className="flex flex-col space-y-3"
          >
            <textarea
              ref={textareaRef}
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-full h-32 p-3 text-gray-800 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <div className="flex justify-between items-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleCancel}
                className="px-4 py-2 text-sm text-gray-600 bg-gray-200 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
              >
                Cancel
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleSave}
                className="px-4 py-2 text-sm text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                Save
              </motion.button>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="viewing"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="cursor-pointer"
            onClick={() => setIsEditing(true)}
          >
            <p className="text-gray-800">{content || 'Click to edit...'}</p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute top-2 right-2"
            >
              <img
                src="https://img.icons8.com/ios-filled/50/000000/edit.png"
                alt="Edit"
                className="w-6 h-6 text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
