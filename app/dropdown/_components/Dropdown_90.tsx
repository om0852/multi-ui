import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";

interface DocumentOption {
  id: number;
  label: string;
  value: string;
  type: 'pdf' | 'doc' | 'sheet' | 'image' | 'presentation';
  icon: string;
  size: string;
  lastModified: string;
  category: string;
  versions: {
    version: string;
    author: string;
    date: string;
    changes: string;
  }[];
  sharing: {
    access: 'private' | 'team' | 'public';
    sharedWith: {
      name: string;
      avatar: string;
      role: 'viewer' | 'editor' | 'owner';
    }[];
  };
  metadata: {
    author: string;
    created: string;
    tags: string[];
    description: string;
  };
}

interface DropdownProps {
  options?: DocumentOption[];
  placeholder?: string;
  value?: string;
  onSelect?: (value: string) => void;
  onChange?: (value: string) => void;
}

const Dropdown_90: React.FC<DropdownProps> = ({
  options = [
    {
      id: 1,
      label: 'Q4 Financial Report',
      value: 'q4-financial-report',
      type: 'sheet',
      icon: '📊',
      size: '2.4 MB',
      lastModified: '2024-03-15',
      category: 'Finance',
      versions: [
        {
          version: '1.3',
          author: 'Emily Chen',
          date: '2024-03-15',
          changes: 'Updated Q4 projections'
        },
        {
          version: '1.2',
          author: 'John Smith',
          date: '2024-03-10',
          changes: 'Added revenue breakdown'
        }
      ],
      sharing: {
        access: 'team',
        sharedWith: [
          {
            name: 'Sarah Wilson',
            avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=50',
            role: 'editor'
          },
          {
            name: 'Michael Brown',
            avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50',
            role: 'viewer'
          }
        ]
      },
      metadata: {
        author: 'Emily Chen',
        created: '2024-03-01',
        tags: ['finance', 'quarterly', 'report'],
        description: 'Q4 financial analysis and projections for FY2024'
      }
    },
    {
      id: 2,
      label: 'Product Roadmap 2024',
      value: 'product-roadmap-2024',
      type: 'presentation',
      icon: '🎯',
      size: '5.1 MB',
      lastModified: '2024-03-14',
      category: 'Product',
      versions: [
        {
          version: '2.1',
          author: 'Alex Turner',
          date: '2024-03-14',
          changes: 'Added Q3-Q4 milestones'
        },
        {
          version: '2.0',
          author: 'Rachel Green',
          date: '2024-03-05',
          changes: 'Major revision of timeline'
        }
      ],
      sharing: {
        access: 'public',
        sharedWith: [
          {
            name: 'Product Team',
            avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=50',
            role: 'editor'
          },
          {
            name: 'Stakeholders',
            avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50',
            role: 'viewer'
          }
        ]
      },
      metadata: {
        author: 'Alex Turner',
        created: '2024-02-15',
        tags: ['product', 'roadmap', 'strategy'],
        description: 'Strategic product development roadmap for 2024'
      }
    },
    {
      id: 3,
      label: 'Brand Guidelines',
      value: 'brand-guidelines',
      type: 'pdf',
      icon: '🎨',
      size: '8.7 MB',
      lastModified: '2024-03-12',
      category: 'Design',
      versions: [
        {
          version: '3.0',
          author: 'Lisa Park',
          date: '2024-03-12',
          changes: 'Updated color palette'
        },
        {
          version: '2.9',
          author: 'David Kim',
          date: '2024-03-01',
          changes: 'Added typography section'
        }
      ],
      sharing: {
        access: 'team',
        sharedWith: [
          {
            name: 'Design Team',
            avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=50',
            role: 'editor'
          },
          {
            name: 'Marketing',
            avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50',
            role: 'viewer'
          }
        ]
      },
      metadata: {
        author: 'Lisa Park',
        created: '2024-01-10',
        tags: ['design', 'branding', 'guidelines'],
        description: 'Official brand guidelines and design system'
      }
    }
  ],
  placeholder = "Select Document",
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

  const getAccessColor = (access: DocumentOption['sharing']['access']) => {
    switch (access) {
      case 'private':
        return 'text-rose-500 bg-rose-100 dark:bg-rose-900/30';
      case 'team':
        return 'text-amber-500 bg-amber-100 dark:bg-amber-900/30';
      case 'public':
        return 'text-emerald-500 bg-emerald-100 dark:bg-emerald-900/30';
    }
  };

  const getRoleColor = (role: DocumentOption['sharing']['sharedWith'][0]['role']) => {
    switch (role) {
      case 'owner':
        return 'text-indigo-500 bg-indigo-100 dark:bg-indigo-900/30';
      case 'editor':
        return 'text-emerald-500 bg-emerald-100 dark:bg-emerald-900/30';
      case 'viewer':
        return 'text-amber-500 bg-amber-100 dark:bg-amber-900/30';
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
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
              <span className="text-2xl">{getSelectedOption()?.icon}</span>
              <div>
                <span className="font-medium text-gray-900 dark:text-white block">
                  {getSelectedOption()?.label}
                </span>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {getSelectedOption()?.category}
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
                      <div className="text-3xl">
                        {option.icon}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between">
                          <div>
                            <h3 className={`font-medium ${
                              selectedValue === option.value
                                ? 'text-indigo-600 dark:text-indigo-400'
                                : 'text-gray-900 dark:text-white'
                            }`}>
                              {option.label}
                            </h3>
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                              {option.category} • {option.size}
                            </p>
                          </div>
                          <div className={`px-2.5 py-1 rounded-full text-xs font-medium ${getAccessColor(option.sharing.access)}`}>
                            {option.sharing.access.charAt(0).toUpperCase() + option.sharing.access.slice(1)}
                          </div>
                        </div>
                        <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                          {option.metadata.description}
                        </p>
                      </div>
                    </div>

                    {/* Version History */}
                    <div>
                      <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-2">Version History</h4>
                      <div className="space-y-2">
                        {option.versions.map((version, index) => (
                          <div
                            key={index}
                            className="p-3 rounded-lg bg-gray-50 dark:bg-gray-900/50"
                          >
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-2">
                                <span className="px-2 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 text-xs font-medium rounded-full">
                                  v{version.version}
                                </span>
                                <span className="text-sm text-gray-900 dark:text-white font-medium">
                                  {version.author}
                                </span>
                              </div>
                              <span className="text-sm text-gray-500 dark:text-gray-400">
                                {formatDate(version.date)}
                              </span>
                            </div>
                            <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
                              {version.changes}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Sharing */}
                    <div>
                      <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-2">Shared With</h4>
                      <div className="flex flex-wrap gap-2">
                        {option.sharing.sharedWith.map((user, index) => (
                          <div
                            key={index}
                            className="flex items-center gap-2 p-2 rounded-lg bg-gray-50 dark:bg-gray-900/50"
                          >
                            <div className="w-8 h-8 rounded-full overflow-hidden">
                              <img
                                src={user.avatar}
                                alt={user.name}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div>
                              <p className="text-sm font-medium text-gray-900 dark:text-white">
                                {user.name}
                              </p>
                              <span className={`text-xs font-medium ${getRoleColor(user.role)}`}>
                                {user.role.charAt(0).toUpperCase() + user.role.slice(1)}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Metadata */}
                    <div>
                      <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-2">Details</h4>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <p className="text-sm text-gray-500 dark:text-gray-400">Created</p>
                          <p className="text-sm font-medium text-gray-900 dark:text-white">
                            {formatDate(option.metadata.created)}
                          </p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500 dark:text-gray-400">Modified</p>
                          <p className="text-sm font-medium text-gray-900 dark:text-white">
                            {formatDate(option.lastModified)}
                          </p>
                        </div>
                      </div>
                      <div className="mt-2 flex flex-wrap gap-1">
                        {option.metadata.tags.map((tag, index) => (
                          <span
                            key={index}
                            className="px-2 py-1 text-xs font-medium text-gray-600 dark:text-gray-300 bg-gray-100 dark:bg-gray-900/50 rounded-full"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
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

export default Dropdown_90; 