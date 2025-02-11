import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";

interface ResourceType {
  type: 'video' | 'code' | 'document';
  title: string;
  url: string;
}

interface ArticleOption {
  id: number;
  title: string;
  value: string;
  category: 'guide' | 'tutorial' | 'faq' | 'troubleshooting' | 'reference';
  tags: string[];
  author: {
    name: string;
    avatar: string;
    role: string;
  };
  stats: {
    views: number;
    likes: number;
    comments: number;
  };
  lastUpdated: string;
  readTime: number;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  relatedArticles: {
    title: string;
    value: string;
  }[];
  sections: {
    title: string;
    content: string;
  }[];
  resources?: ResourceType[];
}

interface DropdownProps {
  options?: ArticleOption[];
  placeholder?: string;
  value?: string;
  onSelect?: (value: string) => void;
  onChange?: (value: string) => void;
}

const Dropdown_98: React.FC<DropdownProps> = ({
  options = [
    {
      id: 1,
      title: 'Getting Started with React Hooks',
      value: 'react-hooks-intro',
      category: 'tutorial',
      tags: ['React', 'Hooks', 'JavaScript', 'Frontend'],
      author: {
        name: 'Sarah Chen',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=50',
        role: 'Senior Developer'
      },
      stats: {
        views: 15420,
        likes: 892,
        comments: 45
      },
      lastUpdated: '2024-03-10T15:30:00Z',
      readTime: 12,
      difficulty: 'beginner',
      relatedArticles: [
        { title: 'Understanding useEffect', value: 'useeffect-deep-dive' },
        { title: 'State Management in React', value: 'react-state-management' }
      ],
      sections: [
        {
          title: 'Introduction',
          content: 'React Hooks are functions that allow you to "hook into" React state and lifecycle features from function components...'
        },
        {
          title: 'useState Hook',
          content: 'The useState hook is the most basic hook in React. It allows you to add state to functional components...'
        }
      ],
      resources: [
        {
          type: 'video',
          title: 'React Hooks Tutorial',
          url: 'https://example.com/videos/react-hooks'
        },
        {
          type: 'code',
          title: 'Example Repository',
          url: 'https://github.com/example/react-hooks'
        }
      ]
    },
    {
      id: 2,
      title: 'Troubleshooting Common React Errors',
      value: 'react-errors',
      category: 'troubleshooting',
      tags: ['React', 'Debugging', 'Error Handling'],
      author: {
        name: 'Alex Turner',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50',
        role: 'Tech Lead'
      },
      stats: {
        views: 8750,
        likes: 623,
        comments: 89
      },
      lastUpdated: '2024-03-12T10:15:00Z',
      readTime: 15,
      difficulty: 'intermediate',
      relatedArticles: [
        { title: 'React Performance Tips', value: 'react-performance' },
        { title: 'Debugging React Apps', value: 'react-debugging' }
      ],
      sections: [
        {
          title: 'Common Error Types',
          content: 'Understanding and fixing the most frequent React errors you might encounter...'
        },
        {
          title: 'Debugging Tools',
          content: 'Essential tools and techniques for debugging React applications effectively...'
        }
      ]
    },
    {
      id: 3,
      title: 'Advanced React Patterns',
      value: 'react-patterns',
      category: 'guide',
      tags: ['React', 'Design Patterns', 'Architecture'],
      author: {
        name: 'Emily Johnson',
        avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=50',
        role: 'Principal Engineer'
      },
      stats: {
        views: 6320,
        likes: 445,
        comments: 32
      },
      lastUpdated: '2024-03-15T09:45:00Z',
      readTime: 20,
      difficulty: 'advanced',
      relatedArticles: [
        { title: 'Component Composition', value: 'react-composition' },
        { title: 'Higher-Order Components', value: 'react-hoc' }
      ],
      sections: [
        {
          title: 'Render Props Pattern',
          content: 'Understanding and implementing the render props pattern for flexible component reuse...'
        },
        {
          title: 'Compound Components',
          content: 'Creating intuitive and flexible APIs using the compound components pattern...'
        }
      ],
      resources: [
        {
          type: 'document',
          title: 'Pattern Examples',
          url: 'https://example.com/docs/react-patterns'
        }
      ]
    }
  ],
  placeholder = "Select Article",
  value,
  onSelect,
  onChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState<string | undefined>(value);
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSelect = (value: string) => {
    setSelectedValue(value);
    setIsOpen(false);
    if (onSelect) onSelect(value);
    if (onChange) onChange(value);
  };

  const getSelectedOption = () => {
    const selected = options.find(option => option.value === selectedValue);
    return selected || null;
  };

  const selectedOption = getSelectedOption();
  const selectedCategory = selectedOption?.category || 'guide';

  const getCategoryIcon = (category: ArticleOption['category']) => {
    switch (category) {
      case 'guide':
        return (
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
        );
      case 'tutorial':
        return (
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
          </svg>
        );
      case 'faq':
        return (
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        );
      case 'troubleshooting':
        return (
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
        );
      case 'reference':
        return (
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        );
    }
  };

  const getCategoryColor = (category: ArticleOption['category']) => {
    switch (category) {
      case 'guide':
        return 'text-indigo-500 bg-indigo-100 dark:bg-indigo-900/30';
      case 'tutorial':
        return 'text-emerald-500 bg-emerald-100 dark:bg-emerald-900/30';
      case 'faq':
        return 'text-amber-500 bg-amber-100 dark:bg-amber-900/30';
      case 'troubleshooting':
        return 'text-rose-500 bg-rose-100 dark:bg-rose-900/30';
      case 'reference':
        return 'text-blue-500 bg-blue-100 dark:bg-blue-900/30';
    }
  };

  const getDifficultyColor = (difficulty: ArticleOption['difficulty']) => {
    switch (difficulty) {
      case 'beginner':
        return 'text-emerald-500 bg-emerald-100 dark:bg-emerald-900/30';
      case 'intermediate':
        return 'text-amber-500 bg-amber-100 dark:bg-amber-900/30';
      case 'advanced':
        return 'text-rose-500 bg-rose-100 dark:bg-rose-900/30';
    }
  };

  const getResourceIcon = (type: ResourceType['type']) => {
    switch (type) {
      case 'video':
        return (
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        );
      case 'code':
        return (
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
          </svg>
        );
      case 'document':
        return (
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
          </svg>
        );
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  const formatNumber = (num: number) => {
    return new Intl.NumberFormat('en-US', {
      notation: 'compact',
      compactDisplay: 'short'
    }).format(num);
  };

  const filteredOptions = options.filter(option => {
    if (!searchQuery) return true;
    const query = searchQuery.toLowerCase();
    return (
      option.title.toLowerCase().includes(query) ||
      option.tags.some(tag => tag.toLowerCase().includes(query)) ||
      option.category.toLowerCase().includes(query)
    );
  });

  return (
    <div className="relative w-[32rem]">
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileTap={{ scale: 0.98 }}
        className="w-full px-4 py-2.5 flex items-center justify-between rounded-lg bg-white dark:bg-gray-800 shadow-sm border border-gray-200 dark:border-gray-700 hover:border-indigo-500 dark:hover:border-indigo-500 transition-colors duration-200"
      >
        <div className="flex items-center gap-3">
          {selectedOption ? (
            <>
              <div className={`p-2 rounded-lg ${getCategoryColor(selectedCategory)}`}>
                {getCategoryIcon(selectedCategory)}
              </div>
              <div>
                <span className="font-medium text-gray-900 dark:text-white block">
                  {selectedOption.title}
                </span>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)}
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
            {/* Search */}
            <div className="px-4 pb-2 border-b border-gray-200 dark:border-gray-700">
              <div className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search articles..."
                  className="w-full px-3 py-2 pl-10 text-sm bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:border-indigo-500 dark:focus:border-indigo-500"
                />
                <svg
                  className="absolute left-3 top-2.5 w-4 h-4 text-gray-500 dark:text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
            </div>

            <div className="px-2">
              {filteredOptions.map((option) => (
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
                      <div className={`p-2 rounded-lg ${getCategoryColor(option.category)}`}>
                        {getCategoryIcon(option.category)}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between">
                          <div>
                            <h3 className="font-medium text-gray-900 dark:text-white">
                              {option.title}
                            </h3>
                            <div className="flex items-center gap-2 mt-1">
                              <span className={`px-2 py-1 text-xs font-medium rounded-full ${getCategoryColor(option.category)}`}>
                                {option.category.charAt(0).toUpperCase() + option.category.slice(1)}
                              </span>
                              <span className={`px-2 py-1 text-xs font-medium rounded-full ${getDifficultyColor(option.difficulty)}`}>
                                {option.difficulty.charAt(0).toUpperCase() + option.difficulty.slice(1)}
                              </span>
                            </div>
                          </div>
                          <div className="text-right">
                            <span className="text-sm font-medium text-gray-900 dark:text-white">
                              {option.readTime} min read
                            </span>
                            <span className="text-xs text-gray-500 dark:text-gray-400 block">
                              Updated {formatDate(option.lastUpdated)}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Author */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full overflow-hidden">
                          <img
                            src={option.author.avatar}
                            alt={option.author.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-900 dark:text-white">
                            {option.author.name}
                          </p>
                          <p className="text-xs text-gray-500 dark:text-gray-400">
                            {option.author.role}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                        <div className="flex items-center gap-1">
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          </svg>
                          {formatNumber(option.stats.views)}
                        </div>
                        <div className="flex items-center gap-1">
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                          </svg>
                          {formatNumber(option.stats.likes)}
                        </div>
                        <div className="flex items-center gap-1">
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                          </svg>
                          {formatNumber(option.stats.comments)}
                        </div>
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {option.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 text-xs font-medium text-gray-600 dark:text-gray-300 bg-gray-100 dark:bg-gray-900/50 rounded-full"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>

                    {/* Sections */}
                    <div>
                      <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-2">
                        Content Overview
                      </h4>
                      <div className="space-y-2">
                        {option.sections.map((section, index) => (
                          <div
                            key={index}
                            className="p-2 rounded-lg bg-gray-50 dark:bg-gray-900/50"
                          >
                            <h5 className="text-sm font-medium text-gray-900 dark:text-white">
                              {section.title}
                            </h5>
                            <p className="mt-1 text-sm text-gray-600 dark:text-gray-300 line-clamp-2">
                              {section.content}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Resources */}
                    {option.resources && option.resources.length > 0 && (
                      <div>
                        <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-2">
                          Additional Resources
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {option.resources.map((resource, index) => (
                            <a
                              key={index}
                              href={resource.url}
                              onClick={(e) => e.stopPropagation()}
                              className="flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-indigo-600 dark:text-indigo-400 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg hover:bg-indigo-200 dark:hover:bg-indigo-900/50 transition-colors duration-200"
                            >
                              {getResourceIcon(resource.type)}
                              {resource.title}
                            </a>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Related Articles */}
                    {option.relatedArticles.length > 0 && (
                      <div>
                        <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-2">
                          Related Articles
                        </h4>
                        <div className="space-y-2">
                          {option.relatedArticles.map((article, index) => (
                            <div
                              key={index}
                              className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300"
                            >
                              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                              </svg>
                              {article.title}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
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

export default Dropdown_98; 