import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";

interface LanguageOption {
  id: number;
  label: string;
  value: string;
  nativeName: string;
  flag: string;
  proficiency: {
    level: 'native' | 'fluent' | 'intermediate' | 'beginner';
    score: number;
    certificate?: string;
  };
  speakers: string;
  region: string;
  direction: 'ltr' | 'rtl';
  features: {
    label: string;
    supported: boolean;
  }[];
}

interface DropdownProps {
  options?: LanguageOption[];
  placeholder?: string;
  value?: string;
  onSelect?: (value: string) => void;
  onChange?: (value: string) => void;
}

const Dropdown_84: React.FC<DropdownProps> = ({
  options = [
    {
      id: 1,
      label: 'English',
      value: 'en',
      nativeName: 'English',
      flag: '🇬🇧',
      proficiency: {
        level: 'native',
        score: 100,
        certificate: 'CEFR C2'
      },
      speakers: '1.5B',
      region: 'Global',
      direction: 'ltr',
      features: [
        { label: 'Voice Input', supported: true },
        { label: 'Spell Check', supported: true },
        { label: 'Grammar Check', supported: true },
        { label: 'AI Translation', supported: true }
      ]
    },
    {
      id: 2,
      label: 'Spanish',
      value: 'es',
      nativeName: 'Español',
      flag: '🇪🇸',
      proficiency: {
        level: 'fluent',
        score: 85,
        certificate: 'DELE C1'
      },
      speakers: '550M',
      region: 'Spain, Latin America',
      direction: 'ltr',
      features: [
        { label: 'Voice Input', supported: true },
        { label: 'Spell Check', supported: true },
        { label: 'Grammar Check', supported: true },
        { label: 'AI Translation', supported: true }
      ]
    },
    {
      id: 3,
      label: 'Japanese',
      value: 'ja',
      nativeName: '日本語',
      flag: '🇯🇵',
      proficiency: {
        level: 'intermediate',
        score: 65,
        certificate: 'JLPT N3'
      },
      speakers: '125M',
      region: 'Japan',
      direction: 'ltr',
      features: [
        { label: 'Voice Input', supported: true },
        { label: 'Spell Check', supported: true },
        { label: 'Grammar Check', supported: false },
        { label: 'AI Translation', supported: true }
      ]
    },
    {
      id: 4,
      label: 'Arabic',
      value: 'ar',
      nativeName: 'العربية',
      flag: '🇸🇦',
      proficiency: {
        level: 'beginner',
        score: 30
      },
      speakers: '420M',
      region: 'Middle East, North Africa',
      direction: 'rtl',
      features: [
        { label: 'Voice Input', supported: true },
        { label: 'Spell Check', supported: false },
        { label: 'Grammar Check', supported: false },
        { label: 'AI Translation', supported: true }
      ]
    }
  ],
  placeholder = "Select Language",
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

  const getProficiencyInfo = (level: LanguageOption['proficiency']['level']) => {
    switch (level) {
      case 'native':
        return {
          icon: (
            <motion.svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
            </motion.svg>
          ),
          color: 'text-emerald-500 bg-emerald-100 dark:bg-emerald-900/30',
          label: 'Native'
        };
      case 'fluent':
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
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
            </motion.svg>
          ),
          color: 'text-blue-500 bg-blue-100 dark:bg-blue-900/30',
          label: 'Fluent'
        };
      case 'intermediate':
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
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </motion.svg>
          ),
          color: 'text-purple-500 bg-purple-100 dark:bg-purple-900/30',
          label: 'Intermediate'
        };
      case 'beginner':
        return {
          icon: (
            <motion.svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              animate={{ 
                rotate: [-10, 10, -10],
                scale: [1, 1.1, 1]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
            </motion.svg>
          ),
          color: 'text-amber-500 bg-amber-100 dark:bg-amber-900/30',
          label: 'Beginner'
        };
    }
  };

  const ProficiencyBar = ({ score }: { score: number }) => (
    <div className="w-full h-1.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
      <motion.div
        className={`h-full ${
          score >= 80 ? 'bg-emerald-500' :
          score >= 60 ? 'bg-blue-500' :
          score >= 40 ? 'bg-purple-500' :
          'bg-amber-500'
        }`}
        initial={{ width: 0 }}
        animate={{ width: `${score}%` }}
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
              <div className="w-10 h-10 rounded-lg bg-gray-100 dark:bg-gray-900/50 flex items-center justify-center text-2xl">
                {getSelectedOption()?.flag}
              </div>
              <div>
                <span className="font-medium text-gray-900 dark:text-white block">
                  {getSelectedOption()?.label}
                </span>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {getSelectedOption()?.nativeName}
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
                    <div className="flex items-start justify-between">
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-lg bg-gray-100 dark:bg-gray-900/50 flex items-center justify-center text-2xl">
                          {option.flag}
                        </div>
                        <div>
                          <h3 className={`font-medium ${
                            selectedValue === option.value
                              ? 'text-indigo-600 dark:text-indigo-400'
                              : 'text-gray-900 dark:text-white'
                          }`}>
                            {option.label}
                          </h3>
                          <p className="mt-0.5 text-sm text-gray-500 dark:text-gray-400">
                            {option.nativeName}
                          </p>
                        </div>
                      </div>
                      <div className={`px-2.5 py-1 rounded-full text-xs font-medium ${getProficiencyInfo(option.proficiency.level).color}`}>
                        {getProficiencyInfo(option.proficiency.level).label}
                      </div>
                    </div>

                    {/* Proficiency */}
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-500 dark:text-gray-400">Proficiency</span>
                        <span className="font-medium text-gray-900 dark:text-white">
                          {option.proficiency.score}%
                        </span>
                      </div>
                      <ProficiencyBar score={option.proficiency.score} />
                      {option.proficiency.certificate && (
                        <div className="flex items-center gap-1.5 text-xs text-gray-500 dark:text-gray-400">
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                          </svg>
                          Certificate: {option.proficiency.certificate}
                        </div>
                      )}
                    </div>

                    {/* Info Grid */}
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-2">Details</h4>
                        <div className="space-y-2">
                          <div className="flex items-center gap-2 text-sm">
                            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                            <span className="text-gray-600 dark:text-gray-300">
                              {option.speakers} speakers
                            </span>
                          </div>
                          <div className="flex items-center gap-2 text-sm">
                            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span className="text-gray-600 dark:text-gray-300">
                              {option.region}
                            </span>
                          </div>
                          <div className="flex items-center gap-2 text-sm">
                            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                            </svg>
                            <span className="text-gray-600 dark:text-gray-300">
                              {option.direction.toUpperCase()} text
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Features */}
                      <div>
                        <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-2">Features</h4>
                        <div className="space-y-2">
                          {option.features.map((feature, index) => (
                            <div key={index} className="flex items-center justify-between">
                              <span className="text-sm text-gray-600 dark:text-gray-300">
                                {feature.label}
                              </span>
                              {feature.supported ? (
                                <svg className="w-4 h-4 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                              ) : (
                                <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                              )}
                            </div>
                          ))}
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

export default Dropdown_84; 