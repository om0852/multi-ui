'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface FormStep {
  id: string
  title: string
  description: string
  fields: FormField[]
  isOptional?: boolean
}

interface FormField {
  id: string
  type: 'text' | 'email' | 'password' | 'select' | 'radio' | 'checkbox' | 'textarea'
  label: string
  placeholder?: string
  required?: boolean
  options?: { value: string; label: string }[]
  validation?: {
    pattern?: string
    minLength?: number
    maxLength?: number
    custom?: (value: string) => boolean
  }
}

interface FormData {
  [key: string]: string | string[]
}

interface FormErrors {
  [key: string]: string
}

interface Editable_48Props {
  initialContent: string
  onSave: (content: string) => void
  className?: string
  steps?: FormStep[]
}

export const Editable_48: React.FC<Editable_48Props> = ({
  initialContent,
  onSave,
  className = '',
  steps = [
    {
      id: 'personal',
      title: 'Personal Information',
      description: 'Please provide your basic information',
      fields: [
        {
          id: 'fullName',
          type: 'text',
          label: 'Full Name',
          placeholder: 'John Doe',
          required: true,
          validation: {
            minLength: 2,
            maxLength: 50,
          },
        },
        {
          id: 'email',
          type: 'email',
          label: 'Email Address',
          placeholder: 'john@example.com',
          required: true,
          validation: {
            pattern: '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$',
          },
        },
        {
          id: 'phone',
          type: 'text',
          label: 'Phone Number',
          placeholder: '+1 (555) 000-0000',
          validation: {
            pattern: '^\\+?[1-9]\\d{1,14}$',
          },
        },
      ],
    },
    {
      id: 'account',
      title: 'Account Setup',
      description: 'Create your account credentials',
      fields: [
        {
          id: 'username',
          type: 'text',
          label: 'Username',
          placeholder: 'johndoe',
          required: true,
          validation: {
            pattern: '^[a-zA-Z0-9_]{3,20}$',
          },
        },
        {
          id: 'password',
          type: 'password',
          label: 'Password',
          required: true,
          validation: {
            minLength: 8,
            custom: (value) => /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(value),
          },
        },
      ],
    },
    {
      id: 'preferences',
      title: 'Preferences',
      description: 'Select your preferences',
      fields: [
        {
          id: 'theme',
          type: 'radio',
          label: 'Theme',
          required: true,
          options: [
            { value: 'light', label: 'Light' },
            { value: 'dark', label: 'Dark' },
            { value: 'system', label: 'System' },
          ],
        },
        {
          id: 'notifications',
          type: 'checkbox',
          label: 'Notifications',
          options: [
            { value: 'email', label: 'Email notifications' },
            { value: 'push', label: 'Push notifications' },
            { value: 'sms', label: 'SMS notifications' },
          ],
        },
      ],
      isOptional: true,
    },
  ],
}) => {
  const [currentStep, setCurrentStep] = useState(0)
  const [formData, setFormData] = useState<FormData>({})
  const [errors, setErrors] = useState<FormErrors>({})
  const [content] = useState(initialContent)

  const handleSave = () => {
    onSave(content)
  }

  const validateField = (field: FormField, value: string | string[]) => {
    if (field.required && (!value || (Array.isArray(value) && value.length === 0))) {
      return 'This field is required'
    }

    if (field.validation) {
      const { pattern, minLength, maxLength, custom } = field.validation

      if (typeof value === 'string') {
        if (pattern && !new RegExp(pattern).test(value)) {
          return 'Invalid format'
        }

        if (minLength && value.length < minLength) {
          return `Minimum length is ${minLength} characters`
        }

        if (maxLength && value.length > maxLength) {
          return `Maximum length is ${maxLength} characters`
        }

        if (custom && !custom(value)) {
          return 'Invalid value'
        }
      }
    }

    return ''
  }

  const handleFieldChange = (fieldId: string, value: string | string[]) => {
    setFormData(prev => ({
      ...prev,
      [fieldId]: value,
    }))

    const field = steps[currentStep].fields.find(f => f.id === fieldId)
    if (field) {
      const error = validateField(field, value)
      setErrors(prev => ({
        ...prev,
        [fieldId]: error,
      }))
    }
  }

  const validateStep = () => {
    const currentFields = steps[currentStep].fields
    const newErrors: FormErrors = {}
    let isValid = true

    currentFields.forEach(field => {
      const value = formData[field.id]
      const error = validateField(field, value || '')
      if (error) {
        newErrors[field.id] = error
        isValid = false
      }
    })

    setErrors(newErrors)
    return isValid
  }

  const handleNext = () => {
    if (validateStep()) {
      setCurrentStep(prev => Math.min(prev + 1, steps.length - 1))
    }
  }

  const handlePrevious = () => {
    setCurrentStep(prev => Math.max(prev - 1, 0))
  }

  const handleSubmit = () => {
    if (validateStep()) {
      handleSave()
      // Handle form submission
      console.log('Form submitted:', formData)
    }
  }

  const renderField = (field: FormField) => {
    const value = formData[field.id] || ''
    const error = errors[field.id]

    switch (field.type) {
      case 'text':
      case 'email':
      case 'password':
        return (
          <input
            type={field.type}
            id={field.id}
            value={value as string}
            onChange={(e) => handleFieldChange(field.id, e.target.value)}
            placeholder={field.placeholder}
            className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
              error
                ? 'border-red-300 focus:ring-red-400'
                : 'border-gray-300 focus:ring-blue-400'
            }`}
          />
        )
      case 'textarea':
        return (
          <textarea
            id={field.id}
            value={value as string}
            onChange={(e) => handleFieldChange(field.id, e.target.value)}
            placeholder={field.placeholder}
            rows={4}
            className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
              error
                ? 'border-red-300 focus:ring-red-400'
                : 'border-gray-300 focus:ring-blue-400'
            }`}
          />
        )
      case 'select':
        return (
          <select
            id={field.id}
            value={value as string}
            onChange={(e) => handleFieldChange(field.id, e.target.value)}
            className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
              error
                ? 'border-red-300 focus:ring-red-400'
                : 'border-gray-300 focus:ring-blue-400'
            }`}
          >
            <option value="">Select an option</option>
            {field.options?.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        )
      case 'radio':
        return (
          <div className="space-y-2">
            {field.options?.map((option) => (
              <label key={option.value} className="flex items-center space-x-2">
                <input
                  type="radio"
                  name={field.id}
                  value={option.value}
                  checked={value === option.value}
                  onChange={(e) => handleFieldChange(field.id, e.target.value)}
                  className="text-blue-500 focus:ring-blue-400"
                />
                <span className="text-sm text-gray-700">{option.label}</span>
              </label>
            ))}
          </div>
        )
      case 'checkbox':
        const selectedValues = (value as string[]) || []
        return (
          <div className="space-y-2">
            {field.options?.map((option) => (
              <label key={option.value} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  value={option.value}
                  checked={selectedValues.includes(option.value)}
                  onChange={(e) => {
                    const newValues = e.target.checked
                      ? [...selectedValues, option.value]
                      : selectedValues.filter((v) => v !== option.value)
                    handleFieldChange(field.id, newValues)
                  }}
                  className="rounded text-blue-500 focus:ring-blue-400"
                />
                <span className="text-sm text-gray-700">{option.label}</span>
              </label>
            ))}
          </div>
        )
      default:
        return null
    }
  }

  return (
    <motion.div
      className={`bg-white rounded-xl border border-gray-200 shadow-sm ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Progress bar */}
      <div className="p-4 border-b border-gray-100">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-medium text-gray-900">
            {steps[currentStep].title}
          </h2>
          <div className="text-sm text-gray-500">
            Step {currentStep + 1} of {steps.length}
          </div>
        </div>
        <div className="relative">
          <div className="h-2 bg-gray-100 rounded-full">
            <motion.div
              className="absolute h-2 bg-blue-500 rounded-full"
              initial={{ width: 0 }}
              animate={{
                width: `${((currentStep + 1) / steps.length) * 100}%`,
              }}
              transition={{ duration: 0.3 }}
            />
          </div>
          <div className="flex justify-between mt-2">
            {steps.map((step, index) => (
              <div
                key={step.id}
                className={`flex flex-col items-center ${
                  index <= currentStep ? 'text-blue-500' : 'text-gray-400'
                }`}
              >
                <div
                  className={`w-6 h-6 flex items-center justify-center rounded-full border-2 ${
                    index < currentStep
                      ? 'bg-blue-500 border-blue-500 text-white'
                      : index === currentStep
                      ? 'border-blue-500 text-blue-500'
                      : 'border-gray-300'
                  }`}
                >
                  {index < currentStep ? (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  ) : (
                    <span className="text-xs">{index + 1}</span>
                  )}
                </div>
                <span className="text-xs mt-1">{step.title}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Form fields */}
      <div className="p-4">
        <p className="text-sm text-gray-500 mb-6">{steps[currentStep].description}</p>
        <div className="space-y-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              {steps[currentStep].fields.map((field) => (
                <div key={field.id}>
                  <label htmlFor={field.id} className="block text-sm font-medium text-gray-700 mb-1">
                    {field.label}
                    {field.required && <span className="text-red-500 ml-1">*</span>}
                  </label>
                  {renderField(field)}
                  {errors[field.id] && (
                    <p className="mt-1 text-xs text-red-500">{errors[field.id]}</p>
                  )}
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Navigation */}
      <div className="p-4 border-t border-gray-100">
        <div className="flex justify-between">
          <button
            onClick={handlePrevious}
            disabled={currentStep === 0}
            className="px-4 py-2 text-sm text-gray-600 hover:text-gray-800 disabled:opacity-50"
          >
            Previous
          </button>
          <button
            onClick={currentStep === steps.length - 1 ? handleSubmit : handleNext}
            className="px-4 py-2 text-sm bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          >
            {currentStep === steps.length - 1 ? 'Submit' : 'Next'}
          </button>
        </div>
      </div>
    </motion.div>
  )
} 