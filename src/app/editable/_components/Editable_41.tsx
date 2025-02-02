'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface Feature {
  id: string
  name: string
  description: string
  included: {
    [key: string]: boolean | string | number
  }
}

interface Plan {
  id: string
  name: string
  description: string
  monthlyPrice: number
  yearlyPrice: number
  features: {
    [key: string]: boolean | string | number
  }
  popular?: boolean
  cta?: string
}

interface Editable_41Props {
  initialContent: string
  onSave: (content: string) => void
  className?: string
  features?: Feature[]
  plans?: Plan[]
}

export const Editable_41: React.FC<Editable_41Props> = ({
  initialContent,
  onSave,
  className = '',
  features = [
    {
      id: '1',
      name: 'Users',
      description: 'Number of team members',
      included: {
        free: 1,
        pro: 5,
        business: 'Unlimited',
      },
    },
    {
      id: '2',
      name: 'Storage',
      description: 'Cloud storage space',
      included: {
        free: '5GB',
        pro: '50GB',
        business: '500GB',
      },
    },
    {
      id: '3',
      name: 'API Access',
      description: 'Access to REST API',
      included: {
        free: false,
        pro: true,
        business: true,
      },
    },
    {
      id: '4',
      name: 'Custom Domain',
      description: 'Use your own domain',
      included: {
        free: false,
        pro: true,
        business: true,
      },
    },
    {
      id: '5',
      name: 'Analytics',
      description: 'Advanced analytics and reporting',
      included: {
        free: false,
        pro: 'Basic',
        business: 'Advanced',
      },
    },
  ],
  plans = [
    {
      id: 'free',
      name: 'Free',
      description: 'Perfect for getting started',
      monthlyPrice: 0,
      yearlyPrice: 0,
      features: {
        users: 1,
        storage: '5GB',
        apiAccess: false,
        customDomain: false,
        analytics: false,
      },
      cta: 'Get Started',
    },
    {
      id: 'pro',
      name: 'Pro',
      description: 'Best for professionals',
      monthlyPrice: 12,
      yearlyPrice: 120,
      features: {
        users: 5,
        storage: '50GB',
        apiAccess: true,
        customDomain: true,
        analytics: 'Basic',
      },
      popular: true,
      cta: 'Start Free Trial',
    },
    {
      id: 'business',
      name: 'Business',
      description: 'For growing teams',
      monthlyPrice: 32,
      yearlyPrice: 320,
      features: {
        users: 'Unlimited',
        storage: '500GB',
        apiAccess: true,
        customDomain: true,
        analytics: 'Advanced',
      },
      cta: 'Contact Sales',
    },
  ],
}) => {
  const [isYearly, setIsYearly] = useState(false)
  const [hoveredFeature, setHoveredFeature] = useState<string | null>(null)
  const [isEditing, setIsEditing] = useState(false)
  const [content, setContent] = useState(initialContent)

  const handleSave = () => {
    onSave(content)
    setIsEditing(false)
  }

  const getFeatureValue = (value: boolean | string | number) => {
    if (typeof value === 'boolean') {
      return value ? (
        <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      ) : (
        <svg className="w-5 h-5 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      )
    }
    return <span className="text-gray-900">{value}</span>
  }

  return (
    <motion.div
      className={`bg-white rounded-xl border border-gray-200 shadow-sm ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Header */}
      <div className="p-6 text-center">
        <h2 className="text-2xl font-semibold text-gray-900 mb-2">Simple, transparent pricing</h2>
        <p className="text-gray-500 mb-6">Choose the plan that's right for you</p>
        <div className="inline-flex items-center p-1 bg-gray-100 rounded-lg">
          <button
            onClick={() => setIsYearly(false)}
            className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
              !isYearly ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-500'
            }`}
          >
            Monthly
          </button>
          <button
            onClick={() => setIsYearly(true)}
            className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
              isYearly ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-500'
            }`}
          >
            Yearly
            <span className="ml-1 text-green-500">-20%</span>
          </button>
        </div>
      </div>

      {/* Plans grid */}
      <div className="grid grid-cols-3 gap-6 p-6">
        {plans.map((plan) => (
          <motion.div
            key={plan.id}
            className={`relative rounded-xl border-2 p-6 ${
              plan.popular
                ? 'border-blue-500 shadow-lg'
                : 'border-gray-200'
            }`}
            whileHover={{ y: -4 }}
          >
            {plan.popular && (
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="px-3 py-1 text-xs font-medium text-blue-600 bg-blue-50 rounded-full">
                  Most Popular
                </span>
              </div>
            )}
            <div className="text-center mb-6">
              <h3 className="text-lg font-semibold text-gray-900">{plan.name}</h3>
              <p className="text-sm text-gray-500 mt-1">{plan.description}</p>
              <div className="mt-4">
                <span className="text-4xl font-bold text-gray-900">
                  ${isYearly ? plan.yearlyPrice / 12 : plan.monthlyPrice}
                </span>
                <span className="text-gray-500">/month</span>
              </div>
              {isYearly && (
                <p className="text-sm text-green-600 mt-1">
                  ${plan.yearlyPrice} billed yearly
                </p>
              )}
            </div>
            <ul className="space-y-4 mb-6">
              {features.map((feature) => (
                <li
                  key={feature.id}
                  className="flex items-center space-x-3"
                  onMouseEnter={() => setHoveredFeature(feature.id)}
                  onMouseLeave={() => setHoveredFeature(null)}
                >
                  {getFeatureValue(feature.included[plan.id])}
                  <span className="text-sm text-gray-700">{feature.name}</span>
                  {hoveredFeature === feature.id && (
                    <motion.div
                      initial={{ opacity: 0, y: 4 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="absolute left-full ml-2 px-3 py-2 bg-gray-900 text-white text-xs rounded-lg whitespace-nowrap"
                    >
                      {feature.description}
                    </motion.div>
                  )}
                </li>
              ))}
            </ul>
            <button
              className={`w-full py-2 px-4 rounded-lg text-sm font-medium transition-colors ${
                plan.popular
                  ? 'bg-blue-500 text-white hover:bg-blue-600'
                  : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
              }`}
            >
              {plan.cta}
            </button>
          </motion.div>
        ))}
      </div>

      {/* Footer */}
      <div className="p-6 bg-gray-50 rounded-b-xl">
        <div className="flex items-center justify-center space-x-2 text-sm text-gray-500">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
          <span>30-day money-back guarantee</span>
        </div>
      </div>
    </motion.div>
  )
} 