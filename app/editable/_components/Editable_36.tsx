'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'

interface Message {
  id: string
  content: string
  timestamp: string
  status: 'sent' | 'delivered' | 'read'
  type: 'text' | 'file'
  fileUrl?: string
  fileName?: string
  isSent: boolean
}

interface Comment {
  id: string;
  content: string;
  timestamp: string;
  author: string;
}

interface Editable_36Props {
  initialContent: string
  onSave: (content: string) => void
  className?: string
  messages?: Message[]
  recipientName?: string
  recipientAvatar?: string
  isTyping?: boolean
}

export const Editable_36: React.FC<Editable_36Props> = ({
  initialContent,
  onSave,
  className = '',
  messages = [
    {
      id: '1',
      content: 'Hey, how are you?',
      timestamp: '10:30 AM',
      status: 'read',
      type: 'text',
      isSent: false,
    },
    {
      id: '2',
      content: 'I\'m good, thanks! Just working on some new features.',
      timestamp: '10:31 AM',
      status: 'read',
      type: 'text',
      isSent: true,
    },
    {
      id: '3',
      content: 'Project Documentation.pdf',
      timestamp: '10:32 AM',
      status: 'delivered',
      type: 'file',
      fileUrl: '#',
      fileName: 'Project Documentation.pdf',
      isSent: true,
    },
  ],
  recipientName = 'Alice Smith',
  recipientAvatar = 'https://api.dicebear.com/7.x/avataaars/svg?seed=Alice',
  isTyping = false,
}) => {
  const [content, setContent] = useState(initialContent)
  const [chatMessages, setChatMessages] = useState<Message[]>(messages)
  const [isEmojiPickerOpen, setIsEmojiPickerOpen] = useState(false)
  const [newComment, setNewComment] = useState('')
  const [comments, setComments] = useState<Comment[]>([])

  const handleSave = () => {
    if (content.trim()) {
      const newMessage: Message = {
        id: Date.now().toString(),
        content: content,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        status: 'sent',
        type: 'text',
        isSent: true,
      }
      setChatMessages([...chatMessages, newMessage])
      onSave(content)
      setContent('')
    }
  }

  const handleAddComment = (e: React.FormEvent) => {
    e.preventDefault()
    if (!newComment.trim()) return
    
    const comment: Comment = {
      id: Date.now().toString(),
      content: newComment,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      author: 'You' // Or get from props/context
    }
    
    setComments(prev => [...prev, comment])
    setNewComment('')
  }

  const getStatusIcon = (status: Message['status']) => {
    switch (status) {
      case 'sent':
        return (
          <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        )
      case 'delivered':
        return (
          <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7M5 13l4 4L19 7" />
          </svg>
        )
      case 'read':
        return (
          <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7M5 13l4 4L19 7" />
          </svg>
        )
      default:
        return null
    }
  }

  return (
    <motion.div
      className={`bg-white rounded-xl border border-gray-200 shadow-sm ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Chat header */}
      <div className="p-4 border-b border-gray-100">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img
              src={recipientAvatar}
              alt={recipientName}
              className="w-10 h-10 rounded-full"
            />
            <div>
              <h3 className="font-medium text-gray-900">{recipientName}</h3>
              <span className="text-sm text-gray-500">
                {isTyping ? 'typing...' : 'Active now'}
              </span>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <button className="p-2 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-100">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </button>
            <button className="p-2 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-100">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            </button>
            <button className="p-2 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-100">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Chat messages */}
      <div className="p-4 space-y-4 max-h-[400px] overflow-y-auto">
        {chatMessages.map((message) => (
          <motion.div
            key={message.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`flex ${message.isSent ? 'justify-end' : 'justify-start'}`}
          >
            <div className={`max-w-[70%] ${message.isSent ? 'order-2' : 'order-1'}`}>
              {message.type === 'text' ? (
                <div
                  className={`px-4 py-2 rounded-2xl ${
                    message.isSent
                      ? 'bg-blue-500 text-white'
                      : 'bg-gray-100 text-gray-900'
                  }`}
                >
                  <p className="text-sm">{message.content}</p>
                </div>
              ) : (
                <div className="bg-white border border-gray-200 rounded-lg p-3">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-gray-100 rounded-lg">
                      <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">{message.fileName}</p>
                      <p className="text-xs text-gray-500">PDF Document</p>
                    </div>
                  </div>
                </div>
              )}
              <div className={`flex items-center space-x-1 mt-1 text-xs text-gray-400 ${message.isSent ? 'justify-end' : 'justify-start'}`}>
                <span>{message.timestamp}</span>
                {message.isSent && getStatusIcon(message.status)}
              </div>
            </div>
          </motion.div>
        ))}
        {isTyping && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex justify-start"
          >
            <div className="bg-gray-100 rounded-full px-4 py-2">
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
              </div>
            </div>
          </motion.div>
        )}
      </div>

      {/* Chat input */}
      <div className="p-4 border-t border-gray-100">
        <div className="flex items-end space-x-2">
          <div className="flex-grow">
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault()
                  handleSave()
                }
              }}
              className="w-full p-3 bg-gray-50 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
              placeholder="Type a message..."
              rows={1}
            />
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setIsEmojiPickerOpen(!isEmojiPickerOpen)}
              className="p-2 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-100"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </button>
            <button className="p-2 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-100">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
              </svg>
            </button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleSave}
              className="p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Comment form */}
      <div className="mt-4 border-t border-gray-100 pt-4">
        <h3 className="text-sm font-medium text-gray-900 mb-4">Comments</h3>
        
        {/* Comments list */}
        <div className="space-y-4 mb-4">
          {comments.map(comment => (
            <div key={comment.id} className="flex space-x-3">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
                  <span className="text-sm font-medium text-gray-600">
                    {comment.author[0]}
                  </span>
                </div>
              </div>
              <div>
                <div className="flex items-center space-x-2">
                  <span className="text-sm font-medium text-gray-900">{comment.author}</span>
                  <span className="text-xs text-gray-500">{comment.timestamp}</span>
                </div>
                <p className="text-sm text-gray-600">{comment.content}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Comment form */}
        <form onSubmit={handleAddComment}>
          <div className="flex gap-2">
            <input
              type="text"
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="Add a comment..."
              className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button
              type="submit"
              className="px-4 py-2 text-sm bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            >
              Comment
            </button>
          </div>
        </form>
      </div>
    </motion.div>
  )
} 