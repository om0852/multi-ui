'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface User {
  id: string
  name: string
  avatar: string
  role?: string
}

interface Reaction {
  emoji: string
  count: number
  users: string[]
}

interface Comment {
  id: string
  content: string
  author: User
  timestamp: string
  edited?: boolean
  reactions: Reaction[]
  replies: Comment[]
  attachments?: {
    type: 'image' | 'file'
    url: string
    name: string
    size?: number
  }[]
  mentions?: User[]
}

interface Editable_49Props {
  initialContent: string
  onSave: (content: string) => void
  className?: string
  currentUser?: User
  comments?: Comment[]
}

export const Editable_49: React.FC<Editable_49Props> = ({
  initialContent,
  onSave,
  className = '',
  currentUser = {
    id: 'current',
    name: 'You',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=You',
    role: 'Author',
  },
  comments = [
    {
      id: '1',
      content: 'This is looking great! I especially like the attention to detail in the animations. 🎨',
      author: {
        id: 'john',
        name: 'John Doe',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=John',
        role: 'Designer',
      },
      timestamp: '2024-03-15T10:30:00',
      reactions: [
        { emoji: '👍', count: 3, users: ['alice', 'bob', 'current'] },
        { emoji: '🎉', count: 2, users: ['emma', 'current'] },
      ],
      replies: [
        {
          id: '1.1',
          content: 'Thanks John! The animations were definitely a priority for this iteration.',
          author: currentUser,
          timestamp: '2024-03-15T10:35:00',
          reactions: [
            { emoji: '❤️', count: 2, users: ['john', 'alice'] },
          ],
          replies: [],
        },
      ],
    },
    {
      id: '2',
      content: 'Could we add more contrast to the secondary buttons? @John what do you think?',
      author: {
        id: 'alice',
        name: 'Alice Smith',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Alice',
        role: 'Developer',
      },
      timestamp: '2024-03-15T11:15:00',
      reactions: [
        { emoji: '🤔', count: 1, users: ['john'] },
      ],
      replies: [],
      mentions: [
        {
          id: 'john',
          name: 'John Doe',
          avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=John',
        },
      ],
      attachments: [
        {
          type: 'image',
          url: 'https://picsum.photos/400/300',
          name: 'button-example.png',
        },
      ],
    },
  ],
}) => {
  const [newComment, setNewComment] = useState('')
  const [expandedReplies, setExpandedReplies] = useState<string[]>([])
  const [replyingTo, setReplyingTo] = useState<string | null>(null)
  const [content] = useState(initialContent)

  const handleSave = () => {
    onSave(content)
    setReplyingTo(null)
  }

  const toggleReply = (commentId: string) => {
    setReplyingTo(replyingTo === commentId ? null : commentId)
    setNewComment('')
  }

  const toggleReplies = (commentId: string) => {
    setExpandedReplies(prev =>
      prev.includes(commentId)
        ? prev.filter(id => id !== commentId)
        : [...prev, commentId]
    )
  }

  const handleReaction = (commentId: string, emoji: string) => {
    // Handle adding/removing reactions
    console.log('Toggle reaction:', emoji, 'for comment:', commentId)
  }

  const formatTimestamp = (timestamp: string) => {
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

  const renderComment = (comment: Comment, isReply = false) => (
    <motion.div
      key={comment.id}
      className={`flex space-x-4 ${isReply ? 'ml-12 mt-4' : 'py-6'}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <img
        src={comment.author.avatar}
        alt={comment.author.name}
        className="w-10 h-10 rounded-full flex-shrink-0"
      />
      <div className="flex-grow">
        <div className="flex items-start justify-between">
          <div>
            <div className="flex items-center space-x-2">
              <span className="font-medium text-gray-900">
                {comment.author.name}
              </span>
              {comment.author.role && (
                <span className="px-2 py-0.5 text-xs bg-gray-100 text-gray-600 rounded-full">
                  {comment.author.role}
                </span>
              )}
              <span className="text-sm text-gray-500">
                {formatTimestamp(comment.timestamp)}
              </span>
              {comment.edited && (
                <span className="text-sm text-gray-500">(edited)</span>
              )}
            </div>
            <div className="mt-1 text-gray-600">
              {comment.mentions?.map(user => (
                <span
                  key={user.id}
                  className="inline-flex items-center space-x-1 text-blue-500"
                >
                  @{user.name}{' '}
                </span>
              ))}
              {comment.content}
            </div>
          </div>
          <button className="p-1.5 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
            </svg>
          </button>
        </div>

        {/* Attachments */}
        {comment.attachments && comment.attachments.length > 0 && (
          <div className="mt-3 space-y-2">
            {comment.attachments.map((attachment, index) => (
              <div key={index} className="group relative">
                {attachment.type === 'image' ? (
                  <img
                    src={attachment.url}
                    alt={attachment.name}
                    className="rounded-lg max-h-64 object-cover"
                  />
                ) : (
                  <div className="flex items-center space-x-2 p-3 bg-gray-50 rounded-lg">
                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <span className="text-sm text-gray-600">{attachment.name}</span>
                    {attachment.size && (
                      <span className="text-xs text-gray-400">
                        ({Math.round(attachment.size / 1024)}KB)
                      </span>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Actions */}
        <div className="mt-3 flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            {comment.reactions.map((reaction, index) => (
              <button
                key={index}
                onClick={() => handleReaction(comment.id, reaction.emoji)}
                className={`inline-flex items-center space-x-1 px-2 py-1 text-sm rounded-full ${
                  reaction.users.includes(currentUser.id)
                    ? 'bg-blue-50 text-blue-600'
                    : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
                }`}
              >
                <span>{reaction.emoji}</span>
                <span>{reaction.count}</span>
              </button>
            ))}
            <button
              className="p-1.5 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-100"
              onClick={() => handleReaction(comment.id, '👍')}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </button>
          </div>
          <button
            onClick={() => toggleReply(comment.id)}
            className="text-sm text-gray-500 hover:text-gray-700"
          >
            Reply
          </button>
        </div>

        {/* Reply form */}
        <AnimatePresence>
          {replyingTo === comment.id && (
            <motion.div
              className="mt-4"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
            >
              <div className="flex space-x-4">
                <img
                  src={currentUser.avatar}
                  alt={currentUser.name}
                  className="w-8 h-8 rounded-full"
                />
                <div className="flex-grow">
                  <textarea
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    placeholder="Write a reply..."
                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                    rows={3}
                  />
                  <div className="mt-2 flex justify-end space-x-2">
                    <button
                      onClick={() => toggleReply(comment.id)}
                      className="px-3 py-1.5 text-sm text-gray-600 hover:text-gray-800"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={handleSave}
                      className="px-3 py-1.5 text-sm bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                      disabled={!newComment.trim()}
                    >
                      Reply
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Nested replies */}
        {comment.replies.length > 0 && (
          <>
            <button
              onClick={() => toggleReplies(comment.id)}
              className="mt-2 text-sm text-gray-500 hover:text-gray-700"
            >
              {expandedReplies.includes(comment.id)
                ? `Hide ${comment.replies.length} repl${comment.replies.length === 1 ? 'y' : 'ies'}`
                : `Show ${comment.replies.length} repl${comment.replies.length === 1 ? 'y' : 'ies'}`}
            </button>
            <AnimatePresence>
              {expandedReplies.includes(comment.id) && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  {comment.replies.map((reply) => renderComment(reply, true))}
                </motion.div>
              )}
            </AnimatePresence>
          </>
        )}
      </div>
    </motion.div>
  )

  return (
    <motion.div
      className={`bg-white rounded-xl border border-gray-200 shadow-sm ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Header */}
      <div className="p-4 border-b border-gray-100">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-medium text-gray-900">Discussion</h2>
          <div className="text-sm text-gray-500">
            {comments.length} comment{comments.length !== 1 ? 's' : ''}
          </div>
        </div>
      </div>

      {/* New comment form */}
      <div className="p-4 border-b border-gray-100">
        <div className="flex space-x-4">
          <img
            src={currentUser.avatar}
            alt={currentUser.name}
            className="w-10 h-10 rounded-full"
          />
          <div className="flex-grow">
            <textarea
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="Write a comment..."
              className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              rows={3}
            />
            <div className="mt-2 flex items-center justify-between">
              <div className="flex space-x-2">
                <button className="p-1.5 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </button>
                <button className="p-1.5 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                  </svg>
                </button>
              </div>
              <button
                onClick={handleSave}
                className="px-4 py-2 text-sm bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                disabled={!newComment.trim()}
              >
                Comment
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Comments list */}
      <div className="divide-y divide-gray-100">
        {comments.map((comment) => renderComment(comment))}
      </div>

      {/* Empty state */}
      {comments.length === 0 && (
        <div className="p-8 text-center">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 mb-4">
            <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          </div>
          <h3 className="text-sm font-medium text-gray-900 mb-1">
            No comments yet
          </h3>
          <p className="text-sm text-gray-500">
            Be the first to share your thoughts!
          </p>
        </div>
      )}
    </motion.div>
  )
} 