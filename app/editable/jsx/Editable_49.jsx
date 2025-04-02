'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export const Editable_49 = ({
  initialContent,
  onSave,
  className = '',
  currentUser = {
    id: 'current',
    name: 'You',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=You',
    role: 'Author',
  },
  comments = [],
}) => {
  const [newComment, setNewComment] = useState('')
  const [expandedReplies, setExpandedReplies] = useState([])
  const [replyingTo, setReplyingTo] = useState(null)
  const [content] = useState(initialContent)

  const handleSave = () => {
    onSave(content)
    setReplyingTo(null)
  }

  const toggleReply = (commentId) => {
    setReplyingTo(replyingTo === commentId ? null : commentId)
    setNewComment('')
  }

  const toggleReplies = (commentId) => {
    setExpandedReplies((prev) =>
      prev.includes(commentId) ? prev.filter((id) => id !== commentId) : [...prev, commentId]
    )
  }

  const handleReaction = (commentId, emoji) => {
    console.log('Toggle reaction:', emoji, 'for comment:', commentId)
  }

  const formatTimestamp = (timestamp) => {
    const date = new Date(timestamp)
    const now = new Date()
    const diff = now.getTime() - date.getTime()
    const minutes = Math.floor(diff / 60000)
    const hours = Math.floor(minutes / 60)
    const days = Math.floor(hours / 24)

    if (minutes < 60) {
      return `${minutes}m ago`
    } else if (hours < 24) {
      return `${hours}h ago`
    } else if (days < 7) {
      return `${days}d ago`
    } else {
      return date.toLocaleDateString()
    }
  }

  return (
    <motion.div
      className={`bg-white rounded-xl border border-gray-200 shadow-sm ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="p-4 border-b border-gray-100">
        <h2 className="text-lg font-medium text-gray-900">Discussion</h2>
      </div>

      <div className="p-4 border-b border-gray-100">
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Write a comment..."
          className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          rows={3}
        />
        <button
          onClick={handleSave}
          className="px-4 py-2 text-sm bg-blue-500 text-white rounded-lg hover:bg-blue-600 mt-2"
          disabled={!newComment.trim()}
        >
          Comment
        </button>
      </div>
    </motion.div>
  )
}
