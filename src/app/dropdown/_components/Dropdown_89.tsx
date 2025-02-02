import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";

interface TeamMemberOption {
  id: number;
  label: string;
  value: string;
  role: string;
  avatar: string;
  department: string;
  status: 'available' | 'busy' | 'offline';
  skills: {
    name: string;
    level: 'beginner' | 'intermediate' | 'expert';
  }[];
  projects: {
    name: string;
    role: string;
    progress: number;
  }[];
  contact: {
    email: string;
    slack: string;
    phone: string;
  };
}

interface DropdownProps {
  options?: TeamMemberOption[];
  placeholder?: string;
  value?: string;
  onSelect?: (value: string) => void;
  onChange?: (value: string) => void;
}

const Dropdown_89: React.FC<DropdownProps> = ({
  options = [
    {
      id: 1,
      label: 'Sarah Chen',
      value: 'sarah-chen',
      role: 'Senior Developer',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200',
      department: 'Engineering',
      status: 'available',
      skills: [
        { name: 'React', level: 'expert' },
        { name: 'TypeScript', level: 'expert' },
        { name: 'Node.js', level: 'intermediate' }
      ],
      projects: [
        { name: 'E-commerce Platform', role: 'Tech Lead', progress: 75 },
        { name: 'Mobile App', role: 'Senior Developer', progress: 40 }
      ],
      contact: {
        email: 'sarah.chen@company.com',
        slack: '@sarahc',
        phone: '+1 (555) 123-4567'
      }
    },
    {
      id: 2,
      label: 'Marcus Rodriguez',
      value: 'marcus-rodriguez',
      role: 'UX Designer',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200',
      department: 'Design',
      status: 'busy',
      skills: [
        { name: 'Figma', level: 'expert' },
        { name: 'UI Design', level: 'expert' },
        { name: 'Prototyping', level: 'intermediate' }
      ],
      projects: [
        { name: 'Design System', role: 'Lead Designer', progress: 90 },
        { name: 'Website Redesign', role: 'UX Designer', progress: 60 }
      ],
      contact: {
        email: 'marcus.r@company.com',
        slack: '@marcusr',
        phone: '+1 (555) 234-5678'
      }
    },
    {
      id: 3,
      label: 'Emily Johnson',
      value: 'emily-johnson',
      role: 'Product Manager',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200',
      department: 'Product',
      status: 'offline',
      skills: [
        { name: 'Product Strategy', level: 'expert' },
        { name: 'Agile', level: 'expert' },
        { name: 'Data Analysis', level: 'intermediate' }
      ],
      projects: [
        { name: 'Product Launch', role: 'Product Owner', progress: 85 },
        { name: 'Market Research', role: 'Project Lead', progress: 30 }
      ],
      contact: {
        email: 'emily.j@company.com',
        slack: '@emilyj',
        phone: '+1 (555) 345-6789'
      }
    }
  ],
  placeholder = "Select Team Member",
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

  const getStatusInfo = (status: TeamMemberOption['status']) => {
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
    }
  };

  const getSkillLevel = (level: TeamMemberOption['skills'][0]['level']) => {
    switch (level) {
      case 'expert':
        return {
          color: 'text-emerald-500 bg-emerald-100 dark:bg-emerald-900/30',
          width: 'w-full'
        };
      case 'intermediate':
        return {
          color: 'text-amber-500 bg-amber-100 dark:bg-amber-900/30',
          width: 'w-2/3'
        };
      case 'beginner':
        return {
          color: 'text-blue-500 bg-blue-100 dark:bg-blue-900/30',
          width: 'w-1/3'
        };
    }
  };

  const ProgressBar = ({ progress }: { progress: number }) => (
    <div className="w-full h-1.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
      <motion.div
        className="h-full bg-indigo-500"
        initial={{ width: 0 }}
        animate={{ width: `${progress}%` }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      />
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
              <div className="relative">
                <div className="w-10 h-10 rounded-full overflow-hidden">
                  <img
                    src={getSelectedOption()?.avatar}
                    alt={getSelectedOption()?.label}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className={`absolute -bottom-1 -right-1 w-3.5 h-3.5 rounded-full border-2 border-white dark:border-gray-800 ${
                  getStatusInfo(getSelectedOption()?.status!).color
                }`} />
              </div>
              <div>
                <span className="font-medium text-gray-900 dark:text-white block">
                  {getSelectedOption()?.label}
                </span>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {getSelectedOption()?.role}
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
                      <div className="relative">
                        <div className="w-16 h-16 rounded-full overflow-hidden">
                          <img
                            src={option.avatar}
                            alt={option.label}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className={`absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-white dark:border-gray-800 ${
                          getStatusInfo(option.status).color
                        }`} />
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
                              {option.role}
                            </p>
                          </div>
                          <div className={`px-2.5 py-1 rounded-full text-xs font-medium ${getStatusInfo(option.status).color}`}>
                            {getStatusInfo(option.status).label}
                          </div>
                        </div>
                        <div className="mt-2 flex items-center gap-4">
                          <div className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400">
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                            </svg>
                            {option.department}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Skills */}
                    <div>
                      <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-2">Skills</h4>
                      <div className="space-y-2">
                        {option.skills.map((skill, index) => (
                          <div key={index} className="space-y-1">
                            <div className="flex items-center justify-between text-sm">
                              <span className="text-gray-600 dark:text-gray-300">
                                {skill.name}
                              </span>
                              <span className="capitalize text-gray-500 dark:text-gray-400">
                                {skill.level}
                              </span>
                            </div>
                            <div className="w-full h-1.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                              <motion.div
                                className={`h-full ${getSkillLevel(skill.level).color}`}
                                initial={{ width: 0 }}
                                animate={{ width: getSkillLevel(skill.level).width }}
                                transition={{ duration: 0.5, ease: "easeOut" }}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Projects */}
                    <div>
                      <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-2">Current Projects</h4>
                      <div className="space-y-3">
                        {option.projects.map((project, index) => (
                          <div
                            key={index}
                            className="p-3 rounded-lg bg-gray-50 dark:bg-gray-900/50"
                          >
                            <div className="flex items-center justify-between">
                              <div>
                                <h5 className="font-medium text-gray-900 dark:text-white">
                                  {project.name}
                                </h5>
                                <p className="text-sm text-gray-500 dark:text-gray-400">
                                  {project.role}
                                </p>
                              </div>
                              <span className="text-sm font-medium text-gray-900 dark:text-white">
                                {project.progress}%
                              </span>
                            </div>
                            <div className="mt-2">
                              <ProgressBar progress={project.progress} />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Contact */}
                    <div>
                      <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-2">Contact Information</h4>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-sm">
                          <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                          <span className="text-gray-600 dark:text-gray-300">
                            {option.contact.email}
                          </span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                          </svg>
                          <span className="text-gray-600 dark:text-gray-300">
                            {option.contact.slack}
                          </span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                          </svg>
                          <span className="text-gray-600 dark:text-gray-300">
                            {option.contact.phone}
                          </span>
                        </div>
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

export default Dropdown_89; 