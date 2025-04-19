'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface EditableContainerProps {
  initialContent: string
  onSave: (content: string) => void
  className?: string
  username?: string
  avatar?: string
}

export const EditableContainer: React.FC<EditableContainerProps> = ({
  initialContent,
  onSave,
  className = '',
  username = 'User',
  avatar = 'https://api.dicebear.com/7.x/avataaars/svg?seed=Felix',
}) => {
  const [isEditing, setIsEditing] = useState(false)
  const [content, setContent] = useState(initialContent)

  const handleSave = () => {
    onSave(content)
    setIsEditing(false)
  }

  return (
    <motion.div
      className={`bg-white rounded-xl shadow-sm border border-gray-100 ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Header */}
      <div className="flex items-center space-x-3 p-4 border-b border-gray-100">
        <img
          src={avatar}
          alt={username}
          className="w-10 h-10 rounded-full"
        />
        <div>
          <h3 className="font-medium text-gray-900">{username}</h3>
          <p className="text-xs text-gray-500">Just now</p>
        </div>
      </div>

      {/* Content */}
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
              className="w-full min-h-[100px] text-gray-700 placeholder-gray-400 focus:outline-none resize-none"
              placeholder="What's on your mind?"
            />
            <div className="flex items-center justify-between mt-4 pt-3 border-t border-gray-100">
              <div className="flex items-center space-x-2">
                <span className="text-xs text-gray-400">
                  Press Enter to post
                </span>
              </div>
              <div className="flex space-x-2">
                <button
                  onClick={() => setIsEditing(false)}
                  className="px-4 py-2 text-sm text-gray-500 hover:text-gray-700"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSave}
                  className="px-4 py-2 text-sm bg-blue-500 text-white rounded-full hover:bg-blue-600"
                >
                  Post
                </button>
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="p-4 group cursor-pointer"
            onClick={() => setIsEditing(true)}
          >
            <p className="text-gray-700">
              {content || "What's on your mind?"}
            </p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-4 flex items-center justify-between text-gray-400 text-sm"
            >
              <div className="flex items-center space-x-4">
                <button className="flex items-center space-x-1 hover:text-blue-500">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                  <span>Like</span>
                </button>
                <button className="flex items-center space-x-1 hover:text-blue-500">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  <span>Comment</span>
                </button>
              </div>
              <button className="flex items-center space-x-1 hover:text-blue-500">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                </svg>
                <span>Share</span>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
} 