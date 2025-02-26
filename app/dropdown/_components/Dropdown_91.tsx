import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";

interface NotificationOption {
  id: number;
  type: 'message' | 'alert' | 'update' | 'reminder' | 'mention';
  priority: 'high' | 'medium' | 'low';
  title: string;
  message: string;
  timestamp: string;
  read: boolean;
  sender: {
    name: string;
    avatar: string;
    role: string;
  };
  actions?: {
    label: string;
    type: 'primary' | 'secondary' | 'danger';
  }[];
  metadata?: {
    project?: string;
    category?: string;
    link?: string;
  };
  status?: 'available' | 'busy' | 'offline';
}

interface DropdownProps {
  options?: NotificationOption[];
  placeholder?: string;
  value?: string;
  onSelect?: (value: number) => void;
  onChange?: (value: number) => void;
}

const Dropdown_91: React.FC<DropdownProps> = ({
  options = [
    {
      id: 1,
      type: 'message',
      priority: 'high',
      title: 'New Project Collaboration',
      message: 'Sarah invited you to collaborate on "Design System v2"',
      timestamp: '2024-03-15T10:30:00Z',
      read: false,
      sender: {
        name: 'Sarah Chen',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=50',
        role: 'Design Lead'
      },
      actions: [
        { label: 'Accept', type: 'primary' },
        { label: 'Decline', type: 'danger' }
      ],
      metadata: {
        project: 'Design System v2',
        category: 'Collaboration'
      }
    },
    {
      id: 2,
      type: 'alert',
      priority: 'high',
      title: 'Security Alert',
      message: 'Unusual login attempt detected from new device',
      timestamp: '2024-03-15T09:45:00Z',
      read: false,
      sender: {
        name: 'Security System',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50',
        role: 'System'
      },
      actions: [
        { label: 'Review Activity', type: 'primary' },
        { label: 'Ignore', type: 'secondary' }
      ],
      metadata: {
        category: 'Security',
        link: '/security/activity'
      }
    },
    {
      id: 3,
      type: 'update',
      priority: 'medium',
      title: 'System Update Available',
      message: 'New version 2.4.0 is available with performance improvements',
      timestamp: '2024-03-15T08:15:00Z',
      read: true,
      sender: {
        name: 'System Updates',
        avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=50',
        role: 'System'
      },
      actions: [
        { label: 'Update Now', type: 'primary' },
        { label: 'Later', type: 'secondary' }
      ],
      metadata: {
        category: 'System',
        link: '/system/updates'
      }
    },
    {
      id: 4,
      type: 'mention',
      priority: 'medium',
      title: 'Mentioned in Discussion',
      message: '@alex.turner mentioned you in "Q1 Planning Discussion"',
      timestamp: '2024-03-15T07:30:00Z',
      read: false,
      sender: {
        name: 'Alex Turner',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50',
        role: 'Product Manager'
      },
      metadata: {
        project: 'Q1 Planning',
        category: 'Discussion',
        link: '/discussions/q1-planning'
      }
    }
  ],
  placeholder = "Notifications",
  onSelect,
  onChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const handleSelect = (id: number) => {
    setIsOpen(false);
    if (onSelect) onSelect(id);
    if (onChange) onChange(id);
  };

  const getTypeIcon = (type: NotificationOption['type']) => {
    switch (type) {
      case 'message':
        return (
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        );
      case 'alert':
        return (
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
        );
      case 'update':
        return (
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
        );
      case 'reminder':
        return (
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        );
      case 'mention':
        return (
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
          </svg>
        );
    }
  };

  const getPriorityColor = (priority: NotificationOption['priority']) => {
    switch (priority) {
      case 'high':
        return 'text-rose-500 bg-rose-100 dark:bg-rose-900/30';
      case 'medium':
        return 'text-amber-500 bg-amber-100 dark:bg-amber-900/30';
      case 'low':
        return 'text-emerald-500 bg-emerald-100 dark:bg-emerald-900/30';
    }
  };

  const getActionColor = (type: 'primary' | 'secondary' | 'danger') => {
    switch (type) {
      case 'primary':
        return 'text-white bg-indigo-500 hover:bg-indigo-600 dark:hover:bg-indigo-400';
      case 'secondary':
        return 'text-gray-700 bg-gray-100 hover:bg-gray-200 dark:text-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700';
      case 'danger':
        return 'text-white bg-rose-500 hover:bg-rose-600 dark:hover:bg-rose-400';
    }
  };

  const formatTimestamp = (timestamp: string) => {
    const date = new Date(timestamp);
    const now = new Date();
    const diff = now.getTime() - date.getTime();
    const minutes = Math.floor(diff / 60000);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (minutes < 60) {
      return `${minutes}m ago`;
    } else if (hours < 24) {
      return `${hours}h ago`;
    } else {
      return `${days}d ago`;
    }
  };

  const unreadCount = options.filter(option => !option.read).length;

  const getStatusInfo = (status: NotificationOption['status']) => {
    if (!status) {
      return {
        color: 'text-gray-500 bg-gray-100 dark:bg-gray-900/30',
        label: 'Unknown'
      };
    }

    switch (status) {
      case 'available':
        return {
          color: 'text-emerald-500 bg-emerald-100 dark:bg-emerald-900/30',
          label: 'Available'
        };
      case 'busy':
        return {
          color: 'text-amber-500 bg-amber-100 dark:bg-amber-900/30',
          label: 'Busy'
        };
      case 'offline':
        return {
          color: 'text-gray-500 bg-gray-100 dark:bg-gray-900/30',
          label: 'Offline'
        };
      default:
        return {
          color: 'text-gray-500 bg-gray-100 dark:bg-gray-900/30',
          label: 'Unknown'
        };
    }
  };

  return (
    <div className="relative w-[32rem]">
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileTap={{ scale: 0.98 }}
        className="w-full px-4 py-2.5 flex items-center justify-between rounded-lg bg-white dark:bg-gray-800 shadow-sm border border-gray-200 dark:border-gray-700 hover:border-indigo-500 dark:hover:border-indigo-500 transition-colors duration-200"
      >
        <div className="flex items-center gap-3">
          <div className="relative">
            <svg 
              className="w-6 h-6 text-gray-500 dark:text-gray-400" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" 
              />
            </svg>
            {unreadCount > 0 && (
              <span className="absolute -top-1 -right-1 w-4 h-4 text-xs font-medium flex items-center justify-center text-white bg-rose-500 rounded-full">
                {unreadCount}
              </span>
            )}
          </div>
          <span className="font-medium text-gray-900 dark:text-white">
            {placeholder}
          </span>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
        >
          <svg 
            className="w-5 h-5 text-gray-500 dark:text-gray-400" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M19 9l-7 7-7-7" 
            />
          </svg>
        </motion.div>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.96 }}
            animate={{ 
              opacity: 1,
              y: 0,
              scale: 1,
              transition: {
                type: "spring",
                stiffness: 500,
                damping: 30
              }
            }}
            exit={{ 
              opacity: 0,
              y: 8,
              scale: 0.96,
              transition: { duration: 0.15 }
            }}
            className="absolute w-full mt-2 py-2 bg-white dark:bg-gray-800 shadow-xl rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden z-50"
          >
            <div className="px-2">
              {options.map((option) => (
                <motion.div
                  key={option.id}
                  onClick={() => handleSelect(option.id)}
                  onHoverStart={() => setHoveredId(option.id)}
                  onHoverEnd={() => setHoveredId(null)}
                  className={`w-full p-4 rounded-lg cursor-pointer ${
                    hoveredId === option.id
                      ? 'bg-gray-50 dark:bg-gray-900/50'
                      : ''
                  } ${
                    !option.read
                      ? 'bg-indigo-50/50 dark:bg-indigo-900/20'
                      : ''
                  }`}
                >
                  <div className="space-y-4">
                    {/* Header */}
                    <div className="flex items-start gap-4">
                      <div className={`p-2 rounded-full ${getPriorityColor(option.priority)}`}>
                        {getTypeIcon(option.type)}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between">
                          <div>
                            <h3 className="font-medium text-gray-900 dark:text-white">
                              {option.title}
                            </h3>
                            <p className="text-sm text-gray-600 dark:text-gray-300">
                              {option.message}
                            </p>
                          </div>
                          <span className="text-xs text-gray-500 dark:text-gray-400">
                            {formatTimestamp(option.timestamp)}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Sender */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full overflow-hidden">
                          <img
                            src={option.sender.avatar}
                            alt={option.sender.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-900 dark:text-white">
                            {option.sender.name}
                          </p>
                          <p className="text-xs text-gray-500 dark:text-gray-400">
                            {option.sender.role}
                          </p>
                        </div>
                      </div>
                      {option.metadata?.category && (
                        <span className="px-2.5 py-1 text-xs font-medium text-gray-600 dark:text-gray-300 bg-gray-100 dark:bg-gray-900/50 rounded-full">
                          {option.metadata.category}
                        </span>
                      )}
                    </div>

                    {/* Actions */}
                    {option.actions && (
                      <div className="flex items-center gap-2">
                        {option.actions.map((action, index) => (
                          <button
                            key={index}
                            className={`px-3 py-1.5 text-sm font-medium rounded-lg transition-colors duration-200 ${getActionColor(action.type)}`}
                          >
                            {action.label}
                          </button>
                        ))}
                      </div>
                    )}

                    {/* Metadata */}
                    {option.metadata && (
                      <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                        {option.metadata.project && (
                          <div className="flex items-center gap-1">
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                            </svg>
                            {option.metadata.project}
                          </div>
                        )}
                        {option.metadata.link && (
                          <div className="flex items-center gap-1">
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                            </svg>
                            View Details
                          </div>
                        )}
                      </div>
                    )}

                    {/* Status */}
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500 dark:text-gray-400">
                        Status:
                      </span>
                      <span className={`px-2.5 py-1 text-xs font-medium text-gray-600 dark:text-gray-300 bg-gray-100 dark:bg-gray-900/50 rounded-full ${getStatusInfo(option.status).color}`}>
                        {getStatusInfo(option.status).label}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Dropdown_91; 