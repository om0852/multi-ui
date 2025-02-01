import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";

interface EventOption {
  id: number;
  title: string;
  value: string;
  type: 'meeting' | 'deadline' | 'reminder' | 'event' | 'task';
  startDate: string;
  endDate: string;
  location?: {
    type: 'online' | 'office' | 'external';
    name: string;
    link?: string;
  };
  attendees: {
    name: string;
    avatar: string;
    role: string;
    status: 'accepted' | 'pending' | 'declined';
  }[];
  description: string;
  priority: 'high' | 'medium' | 'low';
  recurring?: {
    frequency: 'daily' | 'weekly' | 'monthly';
    endDate: string;
  };
  reminders: {
    time: string;
    type: 'email' | 'notification' | 'slack';
  }[];
}

interface DropdownProps {
  options?: EventOption[];
  placeholder?: string;
  value?: string;
  onSelect?: (value: string) => void;
  onChange?: (value: string) => void;
}

const Dropdown_93: React.FC<DropdownProps> = ({
  options = [
    {
      id: 1,
      title: 'Team Sprint Planning',
      value: 'sprint-planning',
      type: 'meeting',
      startDate: '2024-03-18T10:00:00Z',
      endDate: '2024-03-18T11:30:00Z',
      location: {
        type: 'online',
        name: 'Zoom Meeting',
        link: 'https://zoom.us/j/123456789'
      },
      attendees: [
        {
          name: 'Sarah Chen',
          avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=50',
          role: 'Product Manager',
          status: 'accepted'
        },
        {
          name: 'Alex Turner',
          avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50',
          role: 'Tech Lead',
          status: 'accepted'
        },
        {
          name: 'Emily Johnson',
          avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=50',
          role: 'Designer',
          status: 'pending'
        }
      ],
      description: 'Bi-weekly sprint planning meeting to discuss upcoming tasks and priorities',
      priority: 'high',
      recurring: {
        frequency: 'weekly',
        endDate: '2024-06-30T00:00:00Z'
      },
      reminders: [
        { time: '1 hour', type: 'notification' },
        { time: '15 minutes', type: 'slack' }
      ]
    },
    {
      id: 2,
      title: 'Project Deadline',
      value: 'project-deadline',
      type: 'deadline',
      startDate: '2024-03-20T00:00:00Z',
      endDate: '2024-03-20T23:59:59Z',
      attendees: [
        {
          name: 'Development Team',
          avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50',
          role: 'Team',
          status: 'accepted'
        }
      ],
      description: 'Final submission deadline for the Q1 project deliverables',
      priority: 'high',
      reminders: [
        { time: '1 day', type: 'email' },
        { time: '4 hours', type: 'notification' }
      ]
    },
    {
      id: 3,
      title: 'Team Building Event',
      value: 'team-building',
      type: 'event',
      startDate: '2024-03-22T14:00:00Z',
      endDate: '2024-03-22T17:00:00Z',
      location: {
        type: 'external',
        name: 'Central Park',
      },
      attendees: [
        {
          name: 'All Staff',
          avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=50',
          role: 'Team',
          status: 'pending'
        }
      ],
      description: 'Outdoor team building activities and games',
      priority: 'medium',
      reminders: [
        { time: '1 day', type: 'email' },
        { time: '2 hours', type: 'notification' }
      ]
    }
  ],
  placeholder = "Select Event",
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

  const getSelectedOption = () => {
    return options.find(option => option.value === selectedValue);
  };

  const getEventTypeIcon = (type: EventOption['type']) => {
    switch (type) {
      case 'meeting':
        return (
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
        );
      case 'deadline':
        return (
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        );
      case 'reminder':
        return (
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
          </svg>
        );
      case 'event':
        return (
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        );
      case 'task':
        return (
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
          </svg>
        );
    }
  };

  const getPriorityColor = (priority: EventOption['priority']) => {
    switch (priority) {
      case 'high':
        return 'text-rose-500 bg-rose-100 dark:bg-rose-900/30';
      case 'medium':
        return 'text-amber-500 bg-amber-100 dark:bg-amber-900/30';
      case 'low':
        return 'text-emerald-500 bg-emerald-100 dark:bg-emerald-900/30';
    }
  };

  const getStatusColor = (status: EventOption['attendees'][0]['status']) => {
    switch (status) {
      case 'accepted':
        return 'text-emerald-500 bg-emerald-100 dark:bg-emerald-900/30';
      case 'pending':
        return 'text-amber-500 bg-amber-100 dark:bg-amber-900/30';
      case 'declined':
        return 'text-rose-500 bg-rose-100 dark:bg-rose-900/30';
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    });
  };

  const formatDuration = (startDate: string, endDate: string) => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const diff = end.getTime() - start.getTime();
    const hours = Math.floor(diff / 3600000);
    const minutes = Math.floor((diff % 3600000) / 60000);
    
    if (hours === 0) {
      return `${minutes}m`;
    } else if (minutes === 0) {
      return `${hours}h`;
    } else {
      return `${hours}h ${minutes}m`;
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
          {getSelectedOption() ? (
            <>
              <div className={`p-2 rounded-lg ${getPriorityColor(getSelectedOption()!.priority)}`}>
                {getEventTypeIcon(getSelectedOption()!.type)}
              </div>
              <div>
                <span className="font-medium text-gray-900 dark:text-white block">
                  {getSelectedOption()?.title}
                </span>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {formatDate(getSelectedOption()!.startDate)}
                </span>
              </div>
            </>
          ) : (
            <span className="font-medium text-gray-500 dark:text-gray-400">
              {placeholder}
            </span>
          )}
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
                  onClick={() => handleSelect(option.value)}
                  onHoverStart={() => setHoveredId(option.id)}
                  onHoverEnd={() => setHoveredId(null)}
                  className={`w-full p-4 rounded-lg cursor-pointer ${
                    hoveredId === option.id
                      ? 'bg-gray-50 dark:bg-gray-900/50'
                      : ''
                  }`}
                >
                  <div className="space-y-4">
                    {/* Header */}
                    <div className="flex items-start gap-4">
                      <div className={`p-2 rounded-lg ${getPriorityColor(option.priority)}`}>
                        {getEventTypeIcon(option.type)}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between">
                          <div>
                            <h3 className="font-medium text-gray-900 dark:text-white">
                              {option.title}
                            </h3>
                            <div className="flex items-center gap-2 mt-1">
                              <span className="text-sm text-gray-500 dark:text-gray-400">
                                {formatDate(option.startDate)}
                              </span>
                              <span className="text-sm text-gray-400 dark:text-gray-500">
                                ({formatDuration(option.startDate, option.endDate)})
                              </span>
                            </div>
                          </div>
                          <span className={`px-2.5 py-1 text-xs font-medium rounded-full ${getPriorityColor(option.priority)}`}>
                            {option.priority.charAt(0).toUpperCase() + option.priority.slice(1)} Priority
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Location */}
                    {option.location && (
                      <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {option.location.link ? (
                          <a 
                            href={option.location.link}
                            className="text-indigo-600 dark:text-indigo-400 hover:underline"
                            onClick={(e) => e.stopPropagation()}
                          >
                            {option.location.name}
                          </a>
                        ) : (
                          <span>{option.location.name}</span>
                        )}
                        <span className="px-2 py-0.5 text-xs font-medium rounded-full bg-gray-100 dark:bg-gray-900/50">
                          {option.location.type.charAt(0).toUpperCase() + option.location.type.slice(1)}
                        </span>
                      </div>
                    )}

                    {/* Description */}
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      {option.description}
                    </p>

                    {/* Attendees */}
                    <div>
                      <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-2">
                        Attendees
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {option.attendees.map((attendee, index) => (
                          <div
                            key={index}
                            className="flex items-center gap-2 p-2 rounded-lg bg-gray-50 dark:bg-gray-900/50"
                          >
                            <div className="w-8 h-8 rounded-full overflow-hidden">
                              <img
                                src={attendee.avatar}
                                alt={attendee.name}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div>
                              <p className="text-sm font-medium text-gray-900 dark:text-white">
                                {attendee.name}
                              </p>
                              <div className="flex items-center gap-1">
                                <span className="text-xs text-gray-500 dark:text-gray-400">
                                  {attendee.role}
                                </span>
                                <span className={`px-1.5 py-0.5 text-xs font-medium rounded-full ${getStatusColor(attendee.status)}`}>
                                  {attendee.status.charAt(0).toUpperCase() + attendee.status.slice(1)}
                                </span>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Recurring & Reminders */}
                    <div className="flex items-center gap-4 text-sm">
                      {option.recurring && (
                        <div className="flex items-center gap-1 text-gray-600 dark:text-gray-300">
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                          </svg>
                          Repeats {option.recurring.frequency}
                        </div>
                      )}
                      {option.reminders.length > 0 && (
                        <div className="flex items-center gap-1 text-gray-600 dark:text-gray-300">
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                          </svg>
                          {option.reminders.length} reminder{option.reminders.length > 1 ? 's' : ''}
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

export default Dropdown_93; 