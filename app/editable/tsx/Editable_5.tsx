'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface RichTextEditableContainerProps {
  initialContent: string
  onSave: (content: string) => void
  className?: string
}

export const RichTextEditableContainer: React.FC<RichTextEditableContainerProps> = ({
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

  const handleContentChange = (e: React.ChangeEvent<HTMLDivElement>) => {
    setContent(e.target.innerHTML)
  }

  return (
    <motion.div
      className={`relative p-4 bg-white rounded-lg shadow-md ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <AnimatePresence mode="wait">
        {isEditing ? (
          <motion.div
            key="editing"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="mb-2 flex space-x-2">
              <button
                onClick={() => document.execCommand('bold')}
                className="p-1 rounded"
              >
                <span className="font-bold">B</span>
              </button>
              <button
                onClick={() => document.execCommand('italic')}
                className="p-1 rounded"
              >
                <span className="italic">I</span>
              </button>
              <button
                onClick={() => document.execCommand('underline')}
                className="p-1 rounded"
              >
                <span className="underline">U</span>
              </button>
            </div>
            <div
              contentEditable
              onInput={handleContentChange}
              dangerouslySetInnerHTML={{ __html: content }}
              className="prose max-w-none mb-2 p-2 border-2 border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <div className="flex justify-end space-x-2">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleCancel}
                className="px-3 py-1 text-sm text-gray-600 bg-gray-200 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
              >
                <span className="mr-1">❌</span>
                Cancel
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleSave}
                className="px-3 py-1 text-sm text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                <span className="mr-1">✔️</span>
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
            transition={{ duration: 0.2 }}
          >
            <div
              className="prose max-w-none text-gray-800"
              dangerouslySetInnerHTML={{ __html: content }}
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsEditing(true)}
              className="absolute top-2 right-2 p-1 text-blue-500 bg-white rounded-full hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              ✏️
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
