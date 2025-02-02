'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface Option {
  id: number
  text: string
  votes: number
}

interface Editable_28Props {
  initialContent: string
  onSave: (content: string) => void
  className?: string
  totalVotes?: number
  options?: Option[]
}

export const Editable_28: React.FC<Editable_28Props> = ({
  initialContent,
  onSave,
  className = '',
  totalVotes = 0,
  options = [
    { id: 1, text: 'Option 1', votes: 0 },
    { id: 2, text: 'Option 2', votes: 0 },
    { id: 3, text: 'Option 3', votes: 0 },
  ],
}) => {
  const [isEditing, setIsEditing] = useState(false)
  const [content, setContent] = useState(initialContent)
  const [pollOptions, setPollOptions] = useState<Option[]>(options)

  const handleSave = () => {
    onSave(content)
    setIsEditing(false)
  }

  const getPercentage = (votes: number) => {
    if (totalVotes === 0) return 0
    return Math.round((votes / totalVotes) * 100)
  }

  return (
    <motion.div
      className={`bg-white rounded-xl border border-violet-100 shadow-sm ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Poll header */}
      <div className="p-4 border-b border-violet-100">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <svg className="w-5 h-5 text-violet-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
            </svg>
            <span className="font-medium text-gray-900">Poll</span>
          </div>
          <span className="text-sm text-gray-500">{totalVotes} votes</span>
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
            <div className="space-y-4">
              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="w-full p-3 bg-gray-50 rounded-lg border border-violet-100 focus:outline-none focus:ring-2 focus:ring-violet-200 resize-none"
                placeholder="Enter your poll question..."
              />
              <div className="space-y-2">
                {pollOptions.map((option, index) => (
                  <input
                    key={option.id}
                    type="text"
                    value={option.text}
                    onChange={(e) => {
                      const newOptions = [...pollOptions]
                      newOptions[index].text = e.target.value
                      setPollOptions(newOptions)
                    }}
                    className="w-full p-2 bg-gray-50 border border-violet-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-200"
                    placeholder={`Option ${index + 1}`}
                  />
                ))}
              </div>
            </div>
            <div className="flex justify-between mt-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  setPollOptions([...pollOptions, { id: pollOptions.length + 1, text: '', votes: 0 }])
                }}
                className="px-4 py-2 text-sm text-violet-600 hover:text-violet-700"
              >
                + Add Option
              </motion.button>
              <div className="space-x-2">
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
                  className="px-4 py-2 text-sm bg-violet-500 text-white rounded-lg hover:bg-violet-600"
                >
                  Save Poll
                </motion.button>
              </div>
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
            <h3 className="font-medium text-gray-900 mb-4">
              {content || 'Click to add poll question...'}
            </h3>
            <div className="space-y-3">
              {pollOptions.map((option) => (
                <div key={option.id} className="relative">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm text-gray-700">{option.text}</span>
                    <span className="text-sm text-gray-500">{getPercentage(option.votes)}%</span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-violet-500"
                      initial={{ width: 0 }}
                      animate={{ width: `${getPercentage(option.votes)}%` }}
                      transition={{ duration: 0.5, ease: 'easeOut' }}
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="p-2 bg-violet-50 rounded-full">
                <svg className="w-4 h-4 text-violet-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                </svg>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Poll footer */}
      <div className="bg-violet-50 px-4 py-3 border-t border-violet-100">
        <div className="flex items-center justify-between text-sm">
          <div className="text-gray-500">
            {totalVotes} {totalVotes === 1 ? 'vote' : 'votes'}
          </div>
          <div className="flex items-center space-x-3">
            <button className="text-violet-600 hover:text-violet-700">Share Poll</button>
            <button className="text-violet-600 hover:text-violet-700">End Poll</button>
          </div>
        </div>
      </div>
    </motion.div>
  )
} 