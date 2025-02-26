import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import Image from 'next/image';

interface ApplicationOption {
  id: number;
  label: string;
  value: string;
  company: string;
  role: string;
  logo: string;
  status: 'applied' | 'screening' | 'interview' | 'offer' | 'rejected';
  timeline: {
    applied: string;
    screening?: string;
    interview?: string;
    offer?: string;
    rejected?: string;
  };
  salary?: string;
  location: string;
  type: 'remote' | 'hybrid' | 'onsite';
}

interface DropdownProps {
  options?: ApplicationOption[];
  placeholder?: string;
  value?: string;
  onSelect?: (value: string) => void;
  onChange?: (value: string) => void;
}

const Dropdown_76: React.FC<DropdownProps> = ({
  options = [
    {
      id: 1,
      label: 'Senior Frontend Developer',
      value: 'frontend-dev',
      company: 'TechCorp Inc.',
      role: 'Frontend Development',
      logo: 'https://images.unsplash.com/photo-1549924231-f129b911e442?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80',
      status: 'interview',
      timeline: {
        applied: '2024-03-15',
        screening: '2024-03-18',
        interview: '2024-03-22'
      },
      salary: '$120k - $150k',
      location: 'San Francisco, CA',
      type: 'hybrid'
    },
    {
      id: 2,
      label: 'Product Designer',
      value: 'product-designer',
      company: 'DesignHub',
      role: 'UI/UX Design',
      logo: 'https://images.unsplash.com/photo-1572044162444-ad60f128bdea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80',
      status: 'offer',
      timeline: {
        applied: '2024-03-10',
        screening: '2024-03-12',
        interview: '2024-03-15',
        offer: '2024-03-20'
      },
      salary: '$90k - $120k',
      location: 'New York, NY',
      type: 'remote'
    },
    {
      id: 3,
      label: 'Backend Engineer',
      value: 'backend-eng',
      company: 'CloudScale',
      role: 'Backend Development',
      logo: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80',
      status: 'rejected',
      timeline: {
        applied: '2024-03-05',
        screening: '2024-03-08',
        interview: '2024-03-12',
        rejected: '2024-03-15'
      },
      salary: '$130k - $160k',
      location: 'Seattle, WA',
      type: 'onsite'
    },
    {
      id: 4,
      label: 'DevOps Engineer',
      value: 'devops-eng',
      company: 'InfraTech',
      role: 'DevOps',
      logo: 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80',
      status: 'screening',
      timeline: {
        applied: '2024-03-18',
        screening: '2024-03-20'
      },
      salary: '$110k - $140k',
      location: 'Austin, TX',
      type: 'hybrid'
    }
  ],
  placeholder = "Select Application",
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
    return options.find(option => option.value === selectedValue) || null;
  };

  const getStatusColor = (status: ApplicationOption['status']) => {
    switch (status) {
      case 'applied':
        return 'text-blue-500 bg-blue-100 dark:bg-blue-900/30';
      case 'screening':
        return 'text-purple-500 bg-purple-100 dark:bg-purple-900/30';
      case 'interview':
        return 'text-amber-500 bg-amber-100 dark:bg-amber-900/30';
      case 'offer':
        return 'text-emerald-500 bg-emerald-100 dark:bg-emerald-900/30';
      case 'rejected':
        return 'text-red-500 bg-red-100 dark:bg-red-900/30';
    }
  };

  const getTypeIcon = (type: ApplicationOption['type']) => {
    switch (type) {
      case 'remote':
        return (
          <motion.svg
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </motion.svg>
        );
      case 'hybrid':
        return (
          <motion.svg
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
          </motion.svg>
        );
      case 'onsite':
        return (
          <motion.svg
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            animate={{ y: [-1, 1, -1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
          </motion.svg>
        );
    }
  };

  const formatDate = (dateString?: string) => {
    if (!dateString) return '';
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric'
    });
  };

  const TimelineStep = ({ 
    date, 
    isActive, 
    isLast 
  }: { 
    date?: string; 
    isActive: boolean; 
    isLast: boolean;
  }) => (
    <div className="flex items-center">
      <motion.div
        className={`w-3 h-3 rounded-full ${
          isActive 
            ? 'bg-indigo-500' 
            : 'bg-gray-300 dark:bg-gray-600'
        }`}
        initial={false}
        animate={isActive ? {
          scale: [1, 1.2, 1],
          transition: { duration: 1, repeat: Infinity }
        } : {}}
      />
      {!isLast && (
        <div className={`w-full h-0.5 ${
          isActive 
            ? 'bg-indigo-500' 
            : 'bg-gray-300 dark:bg-gray-600'
        }`} />
      )}
    </div>
  );

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
              <div className="w-10 h-10 rounded-lg overflow-hidden">
                <Image
                  src={getSelectedOption()?.logo || '/placeholder-image.jpg'}
                  alt={getSelectedOption()?.company || 'Company logo'}
                  width={40}
                  height={40}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <span className="font-medium text-gray-900 dark:text-white block">
                  {getSelectedOption()?.label || 'Unknown'}
                </span>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {getSelectedOption()?.company || '--'}
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
                  {/* Header */}
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg overflow-hidden">
                      <Image
                        src={option.logo}
                        alt={option.company}
                        width={48}
                        height={48}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
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
                            {option.company} • {option.role}
                          </p>
                        </div>
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(option.status)}`}>
                          {option.status.charAt(0).toUpperCase() + option.status.slice(1)}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Timeline */}
                  <div className="mt-4 grid grid-cols-5 gap-2">
                    <TimelineStep 
                      date={option.timeline?.applied || ''}
                      isActive={true}
                      isLast={false}
                    />
                    <TimelineStep 
                      date={option.timeline?.screening}
                      isActive={['screening', 'interview', 'offer'].includes(option.status)}
                      isLast={false}
                    />
                    <TimelineStep 
                      date={option.timeline?.interview}
                      isActive={['interview', 'offer'].includes(option.status)}
                      isLast={false}
                    />
                    <TimelineStep 
                      date={option.timeline?.offer}
                      isActive={option.status === 'offer'}
                      isLast={false}
                    />
                    <TimelineStep 
                      date={option.timeline?.rejected}
                      isActive={option.status === 'rejected'}
                      isLast={true}
                    />
                  </div>
                  <div className="mt-1 grid grid-cols-5 gap-2">
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      {formatDate(option.timeline?.applied)}
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      {formatDate(option.timeline?.screening)}
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      {formatDate(option.timeline?.interview)}
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      {formatDate(option.timeline?.offer)}
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      {formatDate(option.timeline?.rejected)}
                    </div>
                  </div>

                  {/* Details */}
                  <div className="mt-4 flex items-center gap-4">
                    <div className="flex items-center gap-1.5 text-sm text-gray-500 dark:text-gray-400">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                      {option.salary}
                    </div>
                    <div className="flex items-center gap-1.5 text-sm text-gray-500 dark:text-gray-400">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {option.location}
                    </div>
                    <div className="flex items-center gap-1.5 text-sm text-gray-500 dark:text-gray-400">
                      {getTypeIcon(option.type)}
                      {option.type.charAt(0).toUpperCase() + option.type.slice(1)}
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

export default Dropdown_76; 