'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export const Editable_48 = ({
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
  ],
}) => {
  const [currentStep, setCurrentStep] = useState(0)
  const [formData, setFormData] = useState({})
  const [errors, setErrors] = useState({})
  const [content] = useState(initialContent)

  const handleSave = () => {
    onSave(content)
  }

  const validateField = (field, value) => {
    if (field.required && (!value || (Array.isArray(value) && value.length === 0))) {
      return 'This field is required'
    }
    if (field.validation) {
      const { pattern, minLength, maxLength, custom } = field.validation
      if (typeof value === 'string') {
        if (pattern && !new RegExp(pattern).test(value)) return 'Invalid format'
        if (minLength && value.length < minLength) return `Minimum length is ${minLength} characters`
        if (maxLength && value.length > maxLength) return `Maximum length is ${maxLength} characters`
        if (custom && !custom(value)) return 'Invalid value'
      }
    }
    return ''
  }

  const handleFieldChange = (fieldId, value) => {
    setFormData(prev => ({ ...prev, [fieldId]: value }))
    const field = steps[currentStep].fields.find(f => f.id === fieldId)
    if (field) {
      setErrors(prev => ({ ...prev, [fieldId]: validateField(field, value) }))
    }
  }

  const validateStep = () => {
    const newErrors = {}
    let isValid = true
    steps[currentStep].fields.forEach(field => {
      const value = formData[field.id] || ''
      const error = validateField(field, value)
      if (error) {
        newErrors[field.id] = error
        isValid = false
      }
    })
    setErrors(newErrors)
    return isValid
  }

  const handleNext = () => {
    if (validateStep()) setCurrentStep(prev => Math.min(prev + 1, steps.length - 1))
  }

  const handlePrevious = () => {
    setCurrentStep(prev => Math.max(prev - 1, 0))
  }

  const handleSubmit = () => {
    if (validateStep()) {
      handleSave()
      console.log('Form submitted:', formData)
    }
  }

  return (
    <motion.div className={`bg-white rounded-xl border ${className}`}>
      <div className="p-4 border-b">
        <h2>{steps[currentStep].title}</h2>
        <p>{steps[currentStep].description}</p>
      </div>
      <div className="p-4">
        <AnimatePresence mode="wait">
          <motion.div key={currentStep}>
            {steps[currentStep].fields.map(field => (
              <div key={field.id}>
                <label htmlFor={field.id}>{field.label}</label>
                <input
                  type={field.type}
                  id={field.id}
                  value={formData[field.id] || ''}
                  onChange={(e) => handleFieldChange(field.id, e.target.value)}
                />
                {errors[field.id] && <p>{errors[field.id]}</p>}
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="p-4 border-t">
        <button onClick={handlePrevious} disabled={currentStep === 0}>Previous</button>
        <button onClick={currentStep === steps.length - 1 ? handleSubmit : handleNext}>
          {currentStep === steps.length - 1 ? 'Submit' : 'Next'}
        </button>
      </div>
    </motion.div>
  )
}
