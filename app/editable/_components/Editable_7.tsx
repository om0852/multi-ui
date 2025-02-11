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
      textareaRef.current.setSelectionRange(
        textareaRef.current.value.length,
        textareaRef.current.value.length
      )
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
      className={`relative p-6 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl shadow-lg ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <AnimatePresence>
        {isEditing ? (
          <motion.div
            key="editing"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col space-y-4"
          >
            <textarea
              ref={textareaRef}
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-full h-32 p-3 text-gray-700 border-2 border-blue-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <div className="flex justify-between items-center">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleCancel}
                className="px-4 py-2 text-sm text-gray-600 bg-gray-300 rounded-md hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500"
              >
                Cancel
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleSave}
                className="px-4 py-2 text-sm text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
            className="group cursor-pointer"
            onClick={() => setIsEditing(true)}
          >
            <p className="text-gray-800 whitespace-pre-wrap">{content || 'Click to edit...'}</p>
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="absolute top-2 right-2 text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
            >
              <img
                src="https://img.icons8.com/ios-filled/50/000000/edit.png"
                alt="Edit"
                className="w-5 h-5"
              />
            </motion.span>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
