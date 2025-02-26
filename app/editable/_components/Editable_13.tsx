'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'

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

  const handleSave = () => {
    onSave(content)
    setIsEditing(false)
  }

  return (
    <div className={`perspective-1000 ${className}`}>
      <motion.div
        className="relative w-full h-[200px]"
        animate={{ rotateY: isEditing ? 180 : 0 }}
        transition={{ duration: 0.6 }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Front side */}
        <motion.div
          className={`absolute w-full h-full p-4 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl shadow-md cursor-pointer
            ${isEditing ? 'backface-hidden' : ''}`}
          onClick={() => setIsEditing(true)}
        >
          <div className="flex items-center justify-between">
            <p className="text-emerald-700 font-medium">Click to edit</p>
            <svg
              className="w-5 h-5 text-emerald-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
              />
            </svg>
          </div>
          <p className="mt-3 text-gray-600">{content || 'Empty content...'}</p>
        </motion.div>

        {/* Back side */}
        <motion.div
          className={`absolute w-full h-full p-4 bg-white rounded-xl shadow-md
            ${!isEditing ? 'backface-hidden' : ''}`}
          style={{ transform: 'rotateY(180deg)' }}
        >
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full h-[120px] p-2 text-gray-700 border border-emerald-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-300 resize-none"
            placeholder="Enter your content..."
          />
          <div className="flex justify-end mt-2 space-x-2">
            <button
              onClick={() => setIsEditing(false)}
              className="px-4 py-1 text-sm text-gray-600 hover:text-gray-800"
            >
              Cancel
            </button>
            <button
              onClick={handleSave}
              className="px-4 py-1 text-sm text-white bg-emerald-500 rounded-md hover:bg-emerald-600"
            >
              Save
            </button>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
} 