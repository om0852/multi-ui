import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";

interface FormStep {
  id: number;
  title: string;
  fields: Array<{
    id: string;
    label: string;
    type: 'text' | 'email' | 'tel' | 'select';
    options?: string[];
    placeholder?: string;
    required?: boolean;
  }>;
}

interface DropdownProps {
  onSubmit?: (formData: Record<string, string>) => void;
  onCancel?: () => void;
}

const Dropdown_69: React.FC<DropdownProps> = ({
  onSubmit,
  onCancel
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});

  const steps: FormStep[] = [
    {
      id: 1,
      title: "Personal Information",
      fields: [
        {
          id: "fullName",
          label: "Full Name",
          type: "text",
          placeholder: "John Doe",
          required: true
        },
        {
          id: "email",
          label: "Email Address",
          type: "email",
          placeholder: "john@example.com",
          required: true
        }
      ]
    },
    {
      id: 2,
      title: "Contact Details",
      fields: [
        {
          id: "phone",
          label: "Phone Number",
          type: "tel",
          placeholder: "+1 (555) 000-0000",
          required: true
        },
        {
          id: "preferredContact",
          label: "Preferred Contact Method",
          type: "select",
          options: ["Email", "Phone", "Both"],
          required: true
        }
      ]
    },
    {
      id: 3,
      title: "Review & Submit",
      fields: []
    }
  ];

  const validateStep = (stepIndex: number) => {
    const currentFields = steps[stepIndex].fields;
    const newErrors: Record<string, string> = {};
    let isValid = true;

    currentFields.forEach(field => {
      if (field.required && !formData[field.id]) {
        newErrors[field.id] = `${field.label} is required`;
        isValid = false;
      }

      if (field.type === 'email' && formData[field.id]) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData[field.id])) {
          newErrors[field.id] = 'Please enter a valid email address';
          isValid = false;
        }
      }
    });

    setErrors(newErrors);
    return isValid;
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => Math.min(prev + 1, steps.length - 1));
    }
  };

  const handlePrevious = () => {
    setCurrentStep(prev => Math.max(prev - 1, 0));
  };

  const handleSubmit = () => {
    if (onSubmit) {
      onSubmit(formData);
    }
    setIsOpen(false);
    setCurrentStep(0);
    setFormData({});
  };

  const handleInputChange = (fieldId: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [fieldId]: value
    }));
    if (errors[fieldId]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[fieldId];
        return newErrors;
      });
    }
  };

  return (
    <div className="relative w-[480px]">
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileTap={{ scale: 0.98 }}
        className="w-full px-4 py-3 flex items-center justify-between rounded-lg bg-white dark:bg-gray-800 shadow-sm border border-gray-200 dark:border-gray-700 hover:border-indigo-500 dark:hover:border-indigo-500 transition-colors duration-200"
      >
        <span className="font-medium text-gray-700 dark:text-gray-200">
          Multi-Step Form
        </span>
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
            className="absolute w-full mt-2 bg-white dark:bg-gray-800 shadow-xl rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden z-50"
          >
            {/* Progress Bar */}
            <div className="px-6 pt-6">
              <div className="flex items-center justify-between mb-2">
                {steps.map((step, index) => (
                  <React.Fragment key={step.id}>
                    <div className="flex flex-col items-center">
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center font-medium text-sm border-2 ${
                          index <= currentStep
                            ? 'border-indigo-500 bg-indigo-500 text-white'
                            : 'border-gray-300 dark:border-gray-600 text-gray-500 dark:text-gray-400'
                        }`}
                      >
                        {index + 1}
                      </div>
                      <span className="text-xs mt-1 text-gray-500 dark:text-gray-400">
                        {step.title}
                      </span>
                    </div>
                    {index < steps.length - 1 && (
                      <div
                        className={`flex-1 h-0.5 mx-2 ${
                          index < currentStep
                            ? 'bg-indigo-500'
                            : 'bg-gray-300 dark:bg-gray-600'
                        }`}
                      />
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>

            {/* Form Content */}
            <div className="p-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentStep}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.2 }}
                >
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                    {steps[currentStep].title}
                  </h3>

                  {currentStep === steps.length - 1 ? (
                    // Review Step
                    <div className="space-y-4">
                      {Object.entries(formData).map(([key, value]) => (
                        <div key={key} className="flex justify-between items-center">
                          <span className="text-sm text-gray-500 dark:text-gray-400">
                            {steps.flatMap(s => s.fields).find(f => f.id === key)?.label}:
                          </span>
                          <span className="text-sm font-medium text-gray-900 dark:text-white">
                            {value}
                          </span>
                        </div>
                      ))}
                    </div>
                  ) : (
                    // Form Fields
                    <div className="space-y-4">
                      {steps[currentStep].fields.map(field => (
                        <div key={field.id}>
                          <label
                            htmlFor={field.id}
                            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                          >
                            {field.label}
                            {field.required && (
                              <span className="text-red-500 ml-1">*</span>
                            )}
                          </label>
                          {field.type === 'select' ? (
                            <select
                              id={field.id}
                              value={formData[field.id] || ''}
                              onChange={(e) => handleInputChange(field.id, e.target.value)}
                              className={`w-full px-3 py-2 rounded-lg border ${
                                errors[field.id]
                                  ? 'border-red-500 dark:border-red-500'
                                  : 'border-gray-300 dark:border-gray-600'
                              } bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 focus:border-transparent`}
                            >
                              <option value="">Select an option</option>
                              {field.options?.map(option => (
                                <option key={option} value={option}>
                                  {option}
                                </option>
                              ))}
                            </select>
                          ) : (
                            <input
                              type={field.type}
                              id={field.id}
                              placeholder={field.placeholder}
                              value={formData[field.id] || ''}
                              onChange={(e) => handleInputChange(field.id, e.target.value)}
                              className={`w-full px-3 py-2 rounded-lg border ${
                                errors[field.id]
                                  ? 'border-red-500 dark:border-red-500'
                                  : 'border-gray-300 dark:border-gray-600'
                              } bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 focus:border-transparent`}
                            />
                          )}
                          {errors[field.id] && (
                            <p className="mt-1 text-sm text-red-500">
                              {errors[field.id]}
                            </p>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Actions */}
            <div className="px-6 py-4 bg-gray-50 dark:bg-gray-900/50 border-t border-gray-200 dark:border-gray-700 flex justify-between">
              <button
                onClick={() => {
                  if (currentStep === 0) {
                    setIsOpen(false);
                    if (onCancel) onCancel();
                  } else {
                    handlePrevious();
                  }
                }}
                className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white focus:outline-none"
              >
                {currentStep === 0 ? 'Cancel' : 'Previous'}
              </button>
              <button
                onClick={currentStep === steps.length - 1 ? handleSubmit : handleNext}
                className="px-4 py-2 text-sm font-medium text-white bg-indigo-500 rounded-lg hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
              >
                {currentStep === steps.length - 1 ? 'Submit' : 'Next'}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Dropdown_69; 