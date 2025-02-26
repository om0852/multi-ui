import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";

interface NotificationOption {
  id: number;
  label: string;
  value: string;
  type: 'alert' | 'update' | 'message';
  priority: 'high' | 'medium' | 'low';
  content: string;
  timestamp: string;
  isUnread: boolean;
  sender?: {
    name: string;
    avatar: string;
  };
  actions?: {
    label: string;
    type: 'primary' | 'secondary';
    onClick?: () => void;
  }[];
}

interface DropdownProps {
  options?: NotificationOption[];
  placeholder?: string;
  value?: string;
  onSelect?: (value: string) => void;
  onChange?: (value: string) => void;
}

const Dropdown_79: React.FC<DropdownProps> = ({
  options = [
    {
      id: 1,
      label: 'Security Alert',
      value: 'security-alert',
      type: 'alert',
      priority: 'high',
      content: 'Unusual login attempt detected from new device',
      timestamp: '2024-03-22T10:30:00',
      isUnread: true,
      actions: [
        { label: 'Review Activity', type: 'primary' },
        { label: 'Ignore', type: 'secondary' }
      ]
    },
    {
      id: 2,
      label: 'New Message',
      value: 'new-message',
      type: 'message',
      priority: 'medium',
      content: 'Sarah shared a new project update',
      timestamp: '2024-03-22T09:45:00',
      isUnread: true,
      sender: {
        name: 'Sarah Wilson',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80'
      },
      actions: [
        { label: 'Reply', type: 'primary' },
        { label: 'Mark as Read', type: 'secondary' }
      ]
    },
    {
      id: 3,
      label: 'System Update',
      value: 'system-update',
      type: 'update',
      priority: 'low',
      content: 'New version 2.1.0 is available for installation',
      timestamp: '2024-03-22T08:15:00',
      isUnread: false,
      actions: [
        { label: 'Update Now', type: 'primary' },
        { label: 'Later', type: 'secondary' }
      ]
    },
    {
      id: 4,
      label: 'Task Completed',
      value: 'task-complete',
      type: 'message',
      priority: 'medium',
      content: 'Project milestone achieved: Phase 1 complete',
      timestamp: '2024-03-21T16:20:00',
      isUnread: false,
      sender: {
        name: 'Alex Chen',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80'
      },
      actions: [
        { label: 'View Details', type: 'primary' }
      ]
    }
  ],
  placeholder = "Notifications",
  value,
  onSelect,
  onChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState<string | undefined>(value);
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const handleSelect = (value: string) => {
    setSelectedValue(value);
    setIsOpen(false);
    if (onSelect) onSelect(value);
    if (onChange) onChange(value);
  };

  const getTypeInfo = (type: NotificationOption['type']) => {
    switch (type) {
      case 'alert':
        return {
          icon: (
            <motion.svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </motion.svg>
          ),
          color: 'text-amber-500 bg-amber-100 dark:bg-amber-900/30'
        };
      case 'update':
        return {
          icon: (
            <motion.svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </motion.svg>
          ),
          color: 'text-blue-500 bg-blue-100 dark:bg-blue-900/30'
        };
      case 'message':
        return {
          icon: (
            <motion.svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              animate={{ y: [-1, 1, -1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
            </motion.svg>
          ),
          color: 'text-emerald-500 bg-emerald-100 dark:bg-emerald-900/30'
        };
    }
  };

  const getPriorityColor = (priority: NotificationOption['priority']) => {
    switch (priority) {
      case 'high':
        return 'text-red-500';
      case 'medium':
        return 'text-amber-500';
      case 'low':
        return 'text-blue-500';
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

  const unreadCount = options.filter(option => option.isUnread).length;

  return (
    <div className="relative w-[32rem]">
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileTap={{ scale: 0.98 }}
        className="w-full px-4 py-2.5 flex items-center justify-between rounded-lg bg-white dark:bg-gray-800 shadow-sm border border-gray-200 dark:border-gray-700 hover:border-violet-500 dark:hover:border-violet-500 transition-colors duration-200"
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
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center"
              >
                <span className="text-xs text-white font-medium">
                  {unreadCount}
                </span>
              </motion.div>
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
            <div className="px-4 py-2 border-b border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-between">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Recent Notifications
                </h3>
                {unreadCount > 0 && (
                  <button className="text-sm text-violet-500 hover:text-violet-600 dark:hover:text-violet-400">
                    Mark all as read
                  </button>
                )}
              </div>
            </div>
            <div className="px-2 py-2">
              {options.map((option) => (
                <motion.div
                  key={option.id}
                  onClick={() => handleSelect(option.value)}
                  onHoverStart={() => setHoveredId(option.id)}
                  onHoverEnd={() => setHoveredId(null)}
                  className={`w-full p-4 rounded-lg cursor-pointer ${
                    option.isUnread ? 'bg-violet-50 dark:bg-violet-900/10' :
                    hoveredId === option.id ? 'bg-gray-50 dark:bg-gray-900/50' : ''
                  }`}
                >
                  <div className="flex items-start gap-3">
                    {option.sender ? (
                      <div className="flex-shrink-0 w-10 h-10 rounded-full overflow-hidden">
                        <img
                          src={option.sender.avatar}
                          alt={option.sender.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ) : (
                      <div className={`flex-shrink-0 w-10 h-10 rounded-full ${getTypeInfo(option.type).color} flex items-center justify-center`}>
                        {getTypeInfo(option.type).icon}
                      </div>
                    )}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className={`font-medium ${
                            option.isUnread
                              ? 'text-gray-900 dark:text-white'
                              : 'text-gray-600 dark:text-gray-300'
                          }`}>
                            {option.label}
                          </h3>
                          <p className={`mt-1 text-sm ${
                            option.isUnread
                              ? 'text-gray-600 dark:text-gray-300'
                              : 'text-gray-500 dark:text-gray-400'
                          }`}>
                            {option.content}
                          </p>
                        </div>
                        <span className={`text-xs ${getPriorityColor(option.priority)}`}>
                          {formatTimestamp(option.timestamp)}
                        </span>
                      </div>

                      {option.actions && (
                        <div className="mt-3 flex items-center gap-2">
                          {option.actions.map((action, index) => (
                            <button
                              key={index}
                              onClick={(e) => {
                                e.stopPropagation();
                                if (action.onClick) action.onClick();
                              }}
                              className={`px-3 py-1.5 text-sm font-medium rounded-lg ${
                                action.type === 'primary'
                                  ? 'bg-violet-500 text-white hover:bg-violet-600 dark:hover:bg-violet-400'
                                  : 'text-violet-500 hover:bg-violet-50 dark:hover:bg-violet-900/30'
                              }`}
                            >
                              {action.label}
                            </button>
                          ))}
                        </div>
                      )}
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

export default Dropdown_79; 