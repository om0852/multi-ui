import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";

interface FileUploadOption {
  id: number;
  fileName: string;
  value: string;
  fileType: 'image' | 'document' | 'video' | 'archive' | 'code';
  status: 'uploading' | 'processing' | 'completed' | 'error' | 'paused';
  progress: number;
  size: {
    current: number;
    total: number;
  };
  uploadSpeed?: number;
  timeRemaining?: number;
  uploadedAt?: string;
  metadata: {
    type: string;
    dimensions?: string;
    duration?: string;
    pages?: number;
    lastModified: string;
  };
  destination: {
    path: string;
    access: 'private' | 'shared' | 'public';
    url?: string;
  };
  error?: {
    code: string;
    message: string;
    retryCount: number;
  };
  actions: {
    canPause: boolean;
    canResume: boolean;
    canCancel: boolean;
    canRetry: boolean;
  };
}

interface DropdownProps {
  options?: FileUploadOption[];
  placeholder?: string;
  value?: string;
  onSelect?: (value: string) => void;
  onChange?: (value: string) => void;
  onAction?: (action: 'pause' | 'resume' | 'cancel' | 'retry', value: string) => void;
}

const Dropdown_99: React.FC<DropdownProps> = ({
  options = [
    {
      id: 1,
      fileName: 'project-presentation.pptx',
      value: 'presentation',
      fileType: 'document',
      status: 'uploading',
      progress: 45,
      size: {
        current: 2500000,
        total: 5500000
      },
      uploadSpeed: 500000,
      timeRemaining: 180,
      metadata: {
        type: 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
        pages: 32,
        lastModified: '2024-03-15T14:30:00Z'
      },
      destination: {
        path: '/presentations/2024/',
        access: 'shared'
      },
      actions: {
        canPause: true,
        canResume: false,
        canCancel: true,
        canRetry: false
      }
    },
    {
      id: 2,
      fileName: 'product-demo.mp4',
      value: 'demo-video',
      fileType: 'video',
      status: 'processing',
      progress: 100,
      size: {
        current: 128000000,
        total: 128000000
      },
      uploadedAt: '2024-03-15T14:25:00Z',
      metadata: {
        type: 'video/mp4',
        dimensions: '1920x1080',
        duration: '00:05:30',
        lastModified: '2024-03-15T14:20:00Z'
      },
      destination: {
        path: '/videos/demos/',
        access: 'public',
        url: 'https://example.com/videos/product-demo.mp4'
      },
      actions: {
        canPause: false,
        canResume: false,
        canCancel: true,
        canRetry: false
      }
    },
    {
      id: 3,
      fileName: 'source-code.zip',
      value: 'source-code',
      fileType: 'archive',
      status: 'error',
      progress: 75,
      size: {
        current: 15000000,
        total: 20000000
      },
      metadata: {
        type: 'application/zip',
        lastModified: '2024-03-15T14:15:00Z'
      },
      destination: {
        path: '/projects/source/',
        access: 'private'
      },
      error: {
        code: 'NETWORK_ERROR',
        message: 'Connection lost during upload',
        retryCount: 2
      },
      actions: {
        canPause: false,
        canResume: false,
        canCancel: true,
        canRetry: true
      }
    }
  ],
  placeholder = "Upload Status",
  value,
  onSelect,
  onChange,
  onAction,
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

  const handleAction = (e: React.MouseEvent, action: 'pause' | 'resume' | 'cancel' | 'retry', value: string) => {
    e.stopPropagation();
    if (onAction) onAction(action, value);
  };

  const getSelectedOption = () => {
    const selected = options.find(option => option.value === selectedValue);
    return selected || null;
  };

  const selectedOption = getSelectedOption();

  const getFileTypeIcon = (type: FileUploadOption['fileType']) => {
    switch (type) {
      case 'image':
        return (
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        );
      case 'document':
        return (
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        );
      case 'video':
        return (
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
          </svg>
        );
      case 'archive':
        return (
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
          </svg>
        );
      case 'code':
        return (
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
          </svg>
        );
    }
  };

  const getStatusColor = (status: FileUploadOption['status']) => {
    switch (status) {
      case 'uploading':
        return 'text-amber-500 bg-amber-100 dark:bg-amber-900/30';
      case 'processing':
        return 'text-indigo-500 bg-indigo-100 dark:bg-indigo-900/30';
      case 'completed':
        return 'text-emerald-500 bg-emerald-100 dark:bg-emerald-900/30';
      case 'error':
        return 'text-rose-500 bg-rose-100 dark:bg-rose-900/30';
      case 'paused':
        return 'text-gray-500 bg-gray-100 dark:bg-gray-900/30';
    }
  };

  const getAccessColor = (access: FileUploadOption['destination']['access']) => {
    switch (access) {
      case 'private':
        return 'text-rose-500 bg-rose-100 dark:bg-rose-900/30';
      case 'shared':
        return 'text-amber-500 bg-amber-100 dark:bg-amber-900/30';
      case 'public':
        return 'text-emerald-500 bg-emerald-100 dark:bg-emerald-900/30';
    }
  };

  const formatBytes = (bytes: number) => {
    if (bytes === 0) return '0 B';
    const k = 1024;
    const sizes = ['B', 'KB', 'MB', 'GB', 'TB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return `${parseFloat((bytes / Math.pow(k, i)).toFixed(1))} ${sizes[i]}`;
  };

  const formatTimeRemaining = (seconds: number) => {
    if (seconds < 60) return `${seconds}s`;
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}m ${remainingSeconds}s`;
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleString('en-US', {
      month: 'short',
      day: 'numeric',
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
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
          {selectedOption ? (
            <>
              <div className={`p-2 rounded-lg ${getStatusColor(selectedOption.status)}`}>
                {getFileTypeIcon(selectedOption.fileType)}
              </div>
              <div>
                <span className="font-medium text-gray-900 dark:text-white block">
                  {selectedOption.fileName}
                </span>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {selectedOption.status.charAt(0).toUpperCase() + selectedOption.status.slice(1)}
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
                      <div className={`p-2 rounded-lg ${getStatusColor(option.status)}`}>
                        {getFileTypeIcon(option.fileType)}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between">
                          <div>
                            <h3 className="font-medium text-gray-900 dark:text-white">
                              {option.fileName}
                            </h3>
                            <div className="flex items-center gap-2 mt-1">
                              <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(option.status)}`}>
                                {option.status.charAt(0).toUpperCase() + option.status.slice(1)}
                              </span>
                              <span className={`px-2 py-1 text-xs font-medium rounded-full ${getAccessColor(option.destination.access)}`}>
                                {option.destination.access.charAt(0).toUpperCase() + option.destination.access.slice(1)}
                              </span>
                            </div>
                          </div>
                          <div className="text-right">
                            <span className="text-sm font-medium text-gray-900 dark:text-white">
                              {formatBytes(option.size.current)} / {formatBytes(option.size.total)}
                            </span>
                            {option.uploadSpeed && (
                              <span className="text-xs text-gray-500 dark:text-gray-400 block">
                                {formatBytes(option.uploadSpeed)}/s
                              </span>
                            )}
                          </div>
                        </div>
                        {/* Progress Bar */}
                        <div className="mt-2">
                          <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: `${option.progress}%` }}
                              transition={{ duration: 0.5, ease: "easeOut" }}
                              className={`h-full ${
                                option.status === 'error'
                                  ? 'bg-rose-500'
                                  : option.status === 'completed'
                                  ? 'bg-emerald-500'
                                  : 'bg-indigo-500'
                              }`}
                            />
                          </div>
                          <div className="flex items-center justify-between mt-1 text-xs text-gray-500 dark:text-gray-400">
                            <span>{option.progress}%</span>
                            {option.timeRemaining && (
                              <span>{formatTimeRemaining(option.timeRemaining)} remaining</span>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Metadata */}
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-2">
                          File Details
                        </h4>
                        <div className="space-y-1 text-sm">
                          <p className="text-gray-500 dark:text-gray-400">
                            Type: {option.metadata.type.split('/')[1].toUpperCase()}
                          </p>
                          {option.metadata.dimensions && (
                            <p className="text-gray-500 dark:text-gray-400">
                              Dimensions: {option.metadata.dimensions}
                            </p>
                          )}
                          {option.metadata.duration && (
                            <p className="text-gray-500 dark:text-gray-400">
                              Duration: {option.metadata.duration}
                            </p>
                          )}
                          {option.metadata.pages && (
                            <p className="text-gray-500 dark:text-gray-400">
                              Pages: {option.metadata.pages}
                            </p>
                          )}
                          <p className="text-gray-500 dark:text-gray-400">
                            Modified: {formatDate(option.metadata.lastModified)}
                          </p>
                        </div>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-2">
                          Destination
                        </h4>
                        <div className="space-y-1 text-sm">
                          <p className="text-gray-500 dark:text-gray-400">
                            Path: {option.destination.path}
                          </p>
                          {option.destination.url && (
                            <a
                              href={option.destination.url}
                              onClick={(e) => e.stopPropagation()}
                              className="text-indigo-500 hover:text-indigo-600 dark:text-indigo-400 dark:hover:text-indigo-300"
                            >
                              View File
                            </a>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Error Message */}
                    {option.error && (
                      <div className="p-3 rounded-lg bg-rose-100 dark:bg-rose-900/30">
                        <div className="flex items-center gap-2 text-rose-600 dark:text-rose-400">
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span className="font-medium">{option.error.code}</span>
                        </div>
                        <p className="mt-1 text-sm text-rose-600 dark:text-rose-400">
                          {option.error.message}
                        </p>
                        <p className="mt-1 text-xs text-rose-500 dark:text-rose-300">
                          Retry attempt {option.error.retryCount} of 3
                        </p>
                      </div>
                    )}

                    {/* Action Buttons */}
                    <div className="flex items-center gap-2">
                      {option.actions.canPause && (
                        <button
                          onClick={(e) => handleAction(e, 'pause', option.value)}
                          className="px-3 py-1.5 text-sm font-medium text-amber-600 dark:text-amber-400 bg-amber-100 dark:bg-amber-900/30 rounded-lg hover:bg-amber-200 dark:hover:bg-amber-900/50 transition-colors duration-200"
                        >
                          Pause
                        </button>
                      )}
                      {option.actions.canResume && (
                        <button
                          onClick={(e) => handleAction(e, 'resume', option.value)}
                          className="px-3 py-1.5 text-sm font-medium text-emerald-600 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg hover:bg-emerald-200 dark:hover:bg-emerald-900/50 transition-colors duration-200"
                        >
                          Resume
                        </button>
                      )}
                      {option.actions.canRetry && (
                        <button
                          onClick={(e) => handleAction(e, 'retry', option.value)}
                          className="px-3 py-1.5 text-sm font-medium text-indigo-600 dark:text-indigo-400 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg hover:bg-indigo-200 dark:hover:bg-indigo-900/50 transition-colors duration-200"
                        >
                          Retry
                        </button>
                      )}
                      {option.actions.canCancel && (
                        <button
                          onClick={(e) => handleAction(e, 'cancel', option.value)}
                          className="px-3 py-1.5 text-sm font-medium text-rose-600 dark:text-rose-400 bg-rose-100 dark:bg-rose-900/30 rounded-lg hover:bg-rose-200 dark:hover:bg-rose-900/50 transition-colors duration-200"
                        >
                          Cancel
                        </button>
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

export default Dropdown_99;