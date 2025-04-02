'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'

export const Editable_41 = ({
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
  const [hoveredFeature, setHoveredFeature] = useState(null)
  const [content] = useState(initialContent)

  const handleSave = () => {
    onSave(content)
  }

  const getFeatureValue = (value) => {
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
    <motion.div className={`bg-white rounded-xl border border-gray-200 shadow-sm ${className}`} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
      <div className="flex items-center justify-end p-4 border-b border-gray-100">
        <button onClick={handleSave} className="px-4 py-2 text-sm bg-blue-500 text-white rounded-lg hover:bg-blue-600">
          Save Changes
        </button>
      </div>
      <div className="p-6 text-center">
        <h2 className="text-2xl font-semibold text-gray-900 mb-2">Simple, transparent pricing</h2>
        <p className="text-gray-500 mb-6">Choose the plan that&apos;s right for you</p>
      </div>
    </motion.div>
  )
}
