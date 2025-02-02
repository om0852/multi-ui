import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";

interface SkillOption {
  id: number;
  label: string;
  value: string;
  category: string;
  icon: string;
  proficiency: {
    level: 'beginner' | 'intermediate' | 'advanced' | 'expert';
    rating: number;
    experience: string;
  };
  lastUsed: string;
  relatedSkills: string[];
  projects: {
    name: string;
    link: string;
  }[];
}

interface DropdownProps {
  options?: SkillOption[];
  placeholder?: string;
  value?: string;
  onSelect?: (value: string) => void;
  onChange?: (value: string) => void;
}

const Dropdown_78: React.FC<DropdownProps> = ({
  options = [
    {
      id: 1,
      label: 'React',
      value: 'react',
      category: 'Frontend',
      icon: '⚛️',
      proficiency: {
        level: 'expert',
        rating: 9,
        experience: '5+ years'
      },
      lastUsed: '2024-03',
      relatedSkills: ['TypeScript', 'Redux', 'Next.js'],
      projects: [
        { name: 'E-commerce Platform', link: '#' },
        { name: 'Social Media Dashboard', link: '#' }
      ]
    },
    {
      id: 2,
      label: 'Python',
      value: 'python',
      category: 'Backend',
      icon: '🐍',
      proficiency: {
        level: 'advanced',
        rating: 8,
        experience: '4 years'
      },
      lastUsed: '2024-02',
      relatedSkills: ['Django', 'Flask', 'FastAPI'],
      projects: [
        { name: 'ML Pipeline', link: '#' },
        { name: 'API Service', link: '#' }
      ]
    },
    {
      id: 3,
      label: 'Figma',
      value: 'figma',
      category: 'Design',
      icon: '🎨',
      proficiency: {
        level: 'intermediate',
        rating: 6,
        experience: '2 years'
      },
      lastUsed: '2024-03',
      relatedSkills: ['UI Design', 'Prototyping', 'Design Systems'],
      projects: [
        { name: 'Mobile App UI', link: '#' },
        { name: 'Brand Guidelines', link: '#' }
      ]
    },
    {
      id: 4,
      label: 'Docker',
      value: 'docker',
      category: 'DevOps',
      icon: '🐳',
      proficiency: {
        level: 'beginner',
        rating: 4,
        experience: '1 year'
      },
      lastUsed: '2024-01',
      relatedSkills: ['Kubernetes', 'CI/CD', 'AWS'],
      projects: [
        { name: 'Container Setup', link: '#' },
        { name: 'Deployment Pipeline', link: '#' }
      ]
    }
  ],
  placeholder = "Select Skill",
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

  const getLevelInfo = (level: SkillOption['proficiency']['level']) => {
    switch (level) {
      case 'beginner':
        return {
          color: 'text-blue-500 bg-blue-100 dark:bg-blue-900/30',
          icon: (
            <motion.svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              animate={{ rotate: [-10, 10, -10] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </motion.svg>
          )
        };
      case 'intermediate':
        return {
          color: 'text-emerald-500 bg-emerald-100 dark:bg-emerald-900/30',
          icon: (
            <motion.svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </motion.svg>
          )
        };
      case 'advanced':
        return {
          color: 'text-purple-500 bg-purple-100 dark:bg-purple-900/30',
          icon: (
            <motion.svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
            </motion.svg>
          )
        };
      case 'expert':
        return {
          color: 'text-amber-500 bg-amber-100 dark:bg-amber-900/30',
          icon: (
            <motion.svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, 360]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                times: [0, 0.5, 1]
              }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
            </motion.svg>
          )
        };
    }
  };

  const RatingCircle = ({ rating }: { rating: number }) => {
    const radius = 20;
    const circumference = 2 * Math.PI * radius;
    const progress = (rating / 10) * circumference;

    return (
      <div className="relative w-12 h-12">
        <svg className="w-full h-full transform -rotate-90">
          <circle
            className="text-gray-200 dark:text-gray-700"
            strokeWidth="4"
            stroke="currentColor"
            fill="transparent"
            r={radius}
            cx="24"
            cy="24"
          />
          <motion.circle
            className="text-lime-500"
            strokeWidth="4"
            strokeLinecap="round"
            stroke="currentColor"
            fill="transparent"
            r={radius}
            cx="24"
            cy="24"
            initial={{ strokeDasharray: circumference, strokeDashoffset: circumference }}
            animate={{ strokeDashoffset: circumference - progress }}
            transition={{ duration: 1, ease: "easeOut" }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-sm font-medium text-gray-900 dark:text-white">
            {rating}
          </span>
        </div>
      </div>
    );
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short'
    });
  };

  return (
    <div className="relative w-[32rem]">
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileTap={{ scale: 0.98 }}
        className="w-full px-4 py-2.5 flex items-center justify-between rounded-lg bg-white dark:bg-gray-800 shadow-sm border border-gray-200 dark:border-gray-700 hover:border-lime-500 dark:hover:border-lime-500 transition-colors duration-200"
      >
        <div className="flex items-center gap-3">
          {getSelectedOption() ? (
            <>
              <div className="w-10 h-10 rounded-lg overflow-hidden bg-lime-100 dark:bg-lime-900/30 flex items-center justify-center text-2xl">
                {getSelectedOption()?.icon}
              </div>
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
                  {/* Header */}
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg overflow-hidden bg-lime-100 dark:bg-lime-900/30 flex items-center justify-center text-2xl">
                      {option.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className={`font-medium ${
                            selectedValue === option.value
                              ? 'text-lime-600 dark:text-lime-400'
                              : 'text-gray-900 dark:text-white'
                          }`}>
                            {option.label}
                          </h3>
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            {option.category}
                          </p>
                        </div>
                        <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium ${getLevelInfo(option.proficiency.level).color}`}>
                          {getLevelInfo(option.proficiency.level).icon}
                          {option.proficiency.level.charAt(0).toUpperCase() + option.proficiency.level.slice(1)}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Proficiency */}
                  <div className="mt-4 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <RatingCircle rating={option.proficiency.rating} />
                      <div className="space-y-1">
                        <div className="flex items-center gap-1.5 text-sm text-gray-500 dark:text-gray-400">
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          {option.proficiency.experience}
                        </div>
                        <div className="flex items-center gap-1.5 text-sm text-gray-500 dark:text-gray-400">
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          Last used: {formatDate(option.lastUsed)}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Related Skills */}
                  <div className="mt-4">
                    <div className="flex flex-wrap gap-1">
                      {option.relatedSkills.map((skill, index) => (
                        <span
                          key={index}
                          className="px-2 py-0.5 rounded text-xs font-medium bg-lime-100 dark:bg-lime-900/30 text-lime-600 dark:text-lime-400"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Projects */}
                  <div className="mt-4 flex flex-wrap gap-2">
                    {option.projects.map((project, index) => (
                      <a
                        key={index}
                        href={project.link}
                        className="inline-flex items-center gap-1 px-2 py-1 rounded-lg text-sm bg-gray-100 dark:bg-gray-900/50 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-900 transition-colors duration-200"
                      >
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        {project.name}
                      </a>
                    ))}
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

export default Dropdown_78; 