'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface Editable_33Props {
  initialContent: string
  onSave: (content: string) => void
  className?: string
  username?: string
  userHandle?: string
  avatar?: string
  attachedImage?: string
  likes?: number
  reposts?: number
  comments?: number
}

export const Editable_33: React.FC<Editable_33Props> = ({
  initialContent,
  onSave,
  className = '',
  username = 'John Doe',
  userHandle = '@johndoe',
  avatar = 'https://api.dicebear.com/7.x/avataaars/svg?seed=John',
  attachedImage = '',
  likes = 42,
  reposts = 12,
  comments = 8,
}) => {
  const [isEditing, setIsEditing] = useState(false)
  const [content, setContent] = useState(initialContent)
  const [isLiked, setIsLiked] = useState(false)
  const [isReposted, setIsReposted] = useState(false)
  const [likeCount, setLikeCount] = useState(likes)
  const [repostCount, setRepostCount] = useState(reposts)

  const handleSave = () => {
    onSave(content)
    setIsEditing(false)
  }

  const handleLike = () => {
    setIsLiked(!isLiked)
    setLikeCount(isLiked ? likeCount - 1 : likeCount + 1)
  }

  const handleRepost = () => {
    setIsReposted(!isReposted)
    setRepostCount(isReposted ? repostCount - 1 : repostCount + 1)
  }

  return (
    <motion.div
      className={`bg-white rounded-xl border border-gray-200 shadow-sm ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Post header */}
      <div className="p-4 flex items-start space-x-3">
        <img
          src={avatar}
          alt={username}
          className="w-12 h-12 rounded-full"
        />
        <div className="flex-grow">
          <div className="flex items-center space-x-2">
            <span className="font-semibold text-gray-900">{username}</span>
            <span className="text-gray-500">{userHandle}</span>
            <span className="text-gray-400">·</span>
            <span className="text-gray-500">Just now</span>
          </div>

          <AnimatePresence mode="wait">
            {isEditing ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="mt-2"
              >
                <textarea
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  className="w-full p-3 bg-gray-50 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
                  placeholder="What's happening?"
                  rows={4}
                />
                <div className="flex justify-between items-center mt-3">
                  <div className="flex items-center space-x-2">
                    <button className="p-2 text-blue-500 hover:bg-blue-50 rounded-full transition-colors">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </button>
                    <button className="p-2 text-blue-500 hover:bg-blue-50 rounded-full transition-colors">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </button>
                  </div>
                  <div className="flex items-center space-x-2">
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
                      className="px-4 py-2 text-sm bg-blue-500 text-white rounded-full hover:bg-blue-600"
                    >
                      Post
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
                className="mt-2 cursor-pointer group"
              >
                <p className="text-gray-900 whitespace-pre-wrap">
                  {content || 'What\'s happening?'}
                </p>
                {attachedImage && (
                  <img
                    src={attachedImage}
                    alt="Post attachment"
                    className="mt-3 rounded-xl border border-gray-200 w-full object-cover"
                  />
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Post actions */}
      <div className="px-4 py-3 border-t border-gray-100">
        <div className="flex items-center justify-around">
          <button className="flex items-center space-x-2 text-gray-500 hover:text-blue-500 group">
            <div className="p-2 rounded-full group-hover:bg-blue-50 transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
            <span>{comments}</span>
          </button>
          <button
            onClick={handleRepost}
            className={`flex items-center space-x-2 ${isReposted ? 'text-green-500' : 'text-gray-500 hover:text-green-500'} group`}
          >
            <div className="p-2 rounded-full group-hover:bg-green-50 transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
            </div>
            <span>{repostCount}</span>
          </button>
          <button
            onClick={handleLike}
            className={`flex items-center space-x-2 ${isLiked ? 'text-red-500' : 'text-gray-500 hover:text-red-500'} group`}
          >
            <div className="p-2 rounded-full group-hover:bg-red-50 transition-colors">
              <svg className="w-5 h-5" fill={isLiked ? 'currentColor' : 'none'} stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <span>{likeCount}</span>
          </button>
          <button className="flex items-center space-x-2 text-gray-500 hover:text-blue-500 group">
            <div className="p-2 rounded-full group-hover:bg-blue-50 transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
              </svg>
            </div>
          </button>
        </div>
      </div>
    </motion.div>
  )
} 